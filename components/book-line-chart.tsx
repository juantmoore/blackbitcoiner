import type { Figure } from "@/lib/book";

type LineFigure = Extract<Figure, { type: "line" }>;
type YFormat = LineFigure["yFormat"];
type Tone = LineFigure["series"][number]["tone"];

const W = 600;
const H = 300;
const PAD = { top: 25, right: 65, bottom: 45, left: 65 };
const PW = W - PAD.left - PAD.right;
const PH = H - PAD.top - PAD.bottom;
const TICK_FONT = 14;
const END_FONT = 14.5;

function trimmed(n: number) {
  return n >= 100 ? Math.round(n).toString() : n.toFixed(1).replace(/\.0$/, "");
}

function formatTick(v: number, f: YFormat) {
  switch (f) {
    case "usd":
      return v > 0 && v < 1 ? `$${v.toFixed(2)}` : `$${Math.round(v).toLocaleString("en-US")}`;
    case "usdShort": {
      const a = Math.abs(v);
      if (a >= 1e12) return `$${trimmed(v / 1e12)}T`;
      if (a >= 1e9) return `$${trimmed(v / 1e9)}B`;
      if (a >= 1e6) return `$${trimmed(v / 1e6)}M`;
      if (a >= 1e3) return `$${trimmed(v / 1e3)}K`;
      return a >= 1 ? `$${Math.round(v)}` : `$${v.toFixed(2)}`;
    }
    case "trillions":
      return `$${trimmed(v)}T`;
    case "cents":
      return v >= 100 ? `$${trimmed(v / 100)}` : `${Math.round(v)}¢`;
    case "pct":
      return `${Math.round(v)}%`;
    case "index":
      return `${Math.round(v)}`;
    case "btcMillions":
      return `${(v / 1e6).toFixed(1)}M`;
  }
}

function formatEnd(v: number, f: YFormat) {
  switch (f) {
    case "usd":
      return `$${Math.round(v).toLocaleString("en-US")}`;
    case "usdShort":
      return formatTick(v, f);
    case "trillions":
      return `$${v.toFixed(2)}T`;
    case "cents":
      return v >= 100 ? `$${(v / 100).toFixed(2)}` : `${v.toFixed(1)}¢`;
    case "pct":
      return `${v.toFixed(Math.abs(v) < 10 ? 1 : 0)}%`;
    case "index":
      return v < 10 ? v.toFixed(1) : `${Math.round(v)}`;
    case "btcMillions":
      return `${(v / 1e6).toFixed(2)}M BTC`;
  }
}

function toneText(tone: Tone, accentClass: string) {
  return tone === "accent" ? accentClass : tone === "muted" ? "text-ink/55" : "text-wayout";
}

function toneEndClass(tone: Tone) {
  return tone === "muted" ? "fill-ink/70 stroke-paper" : tone === "gold" ? "fill-wayout-ink stroke-paper" : "stroke-paper";
}

export function BookLineChart({ figure, accentClass }: { figure: LineFigure; accentClass: string }) {
  const log = figure.log === true;
  const kept = figure.series
    .map((s) => ({
      label: s.label,
      tone: s.tone,
      pts: s.points.filter((p) => Number.isFinite(p[0]) && Number.isFinite(p[1]) && (!log || p[1] > 0)),
    }))
    .filter((s) => s.pts.length > 0);

  const title = (
    <p className={`font-display text-[max(18px,3.4cqw)] leading-none font-bold ${accentClass}`}>{figure.title}</p>
  );
  const caption = figure.source ? (
    <figcaption className="mt-[2.4cqw] font-serif text-[max(11px,1.9cqw)] leading-snug text-ink/50 italic">
      Sources: {figure.source}
    </figcaption>
  ) : null;

  if (kept.length === 0) {
    return (
      <figure>
        {title}
        <p className="mt-[2cqw] font-serif text-[max(13px,2.2cqw)] italic text-ink/50">Not enough data to chart.</p>
        {caption}
      </figure>
    );
  }

  let xMin = Infinity;
  let xMax = -Infinity;
  let yMin = Infinity;
  let yMax = -Infinity;
  for (const s of kept) {
    for (const p of s.pts) {
      if (p[0] < xMin) xMin = p[0];
      if (p[0] > xMax) xMax = p[0];
      if (p[1] < yMin) yMin = p[1];
      if (p[1] > yMax) yMax = p[1];
    }
  }
  const xSpan = xMax - xMin;
  const xAt = (x: number) => (xSpan > 0 ? PAD.left + ((x - xMin) / xSpan) * PW : PAD.left + PW / 2);

  let yAt: (v: number) => number;
  let yTicks: number[];
  if (log) {
    let lo = Math.log10(yMin);
    let hi = Math.log10(yMax);
    if (!(hi > lo)) hi = lo + 1;
    const e0 = Math.floor(lo);
    const e1 = Math.ceil(hi);
    const step = e1 - e0 + 1 > 6 ? Math.ceil((e1 - e0 + 1) / 6) : 1;
    const decades: number[] = [];
    for (let e = e0; e <= e1; e += step) decades.push(10 ** e);
    lo = e0;
    hi = e1;
    yAt = (v) => H - PAD.bottom - ((Math.log10(v) - lo) / (hi - lo)) * PH;
    yTicks = decades;
  } else {
    const lo = Math.min(0, yMin);
    const hi = yMax > lo ? yMax : lo + 1;
    yAt = (v) => H - PAD.bottom - ((v - lo) / (hi - lo)) * PH;
    yTicks = [0, 1, 2, 3, 4].map((i) => lo + ((hi - lo) * i) / 4);
  }

  const xTicks: { x: number; label: string }[] = figure.xTicks
    ? figure.xTicks
        .filter((t) => Number.isFinite(t.value) && t.value >= xMin - 1e-9 && t.value <= xMax + 1e-9)
        .map((t) => ({ x: xAt(t.value), label: t.label }))
    : (() => {
        if (xSpan <= 0) return [{ x: xAt(xMin), label: `${Math.round(xMin)}` }];
        const steps = [1, 2, 3, 5, 10, 15, 20, 25, 50, 100, 150, 200, 250, 500, 1000];
        const step = steps.find((s) => xSpan / s <= 5) ?? 1000;
        const out: { x: number; label: string }[] = [];
        for (let v = Math.ceil(xMin / step) * step; v <= xMax + 1e-9; v += step) {
          out.push({ x: xAt(v), label: `${Math.round(v)}` });
        }
        return out;
      })();

  type End = { si: number; tone: Tone; x: number; y: number; text: string; ly: number };
  const sortedEnds = kept
    .map((s, si) => {
      const p = s.pts[s.pts.length - 1];
      return { si, tone: s.tone, x: xAt(p[0]), y: yAt(p[1]), text: formatEnd(p[1], figure.yFormat) };
    })
    .sort((a, b) => a.y - b.y);
  const laidEnds: End[] = [];
  let prevY = -Infinity;
  for (const e of sortedEnds) {
    const ly = Math.min(Math.max(e.y, prevY + 16, PAD.top + 8), H - PAD.bottom - 6);
    laidEnds.push({ ...e, ly });
    prevY = ly;
  }
  const endBySeries = new Map(laidEnds.map((e) => [e.si, e]));

  return (
    <figure>
      {title}
      {kept.length > 1 && (
        <ul className="mt-[2cqw] flex flex-wrap gap-x-[3.5cqw] gap-y-[0.8cqw]">
          {kept.map((s) => (
            <li
              key={s.label}
              className="flex items-center gap-[1.2cqw] font-serif text-[max(12px,2.1cqw)] text-ink/70"
            >
              <svg
                viewBox="0 0 18 8"
                width="18"
                height="8"
                aria-hidden="true"
                className={`shrink-0 ${toneText(s.tone, accentClass)}`}
              >
                <line x1="1" y1="4" x2="17" y2="4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
              </svg>
              {s.label}
            </li>
          ))}
        </ul>
      )}
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={figure.alt} className="mt-[2.5cqw] block w-full">
        {yTicks.map((v) => {
          const py = yAt(v);
          const label = formatTick(v, figure.yFormat);
          const fs = Math.min(TICK_FONT, Math.max(9, Math.floor((PAD.left - 12) / (label.length * 0.58))));
          return (
            <g key={v}>
              <line
                x1={PAD.left}
                x2={W - PAD.right}
                y1={py}
                y2={py}
                className="stroke-ink/10"
                strokeWidth={1}
              />
              <text
                x={PAD.left - 8}
                y={py + 4}
                textAnchor="end"
                fontSize={fs}
                className="fill-ink/55 font-display tabular-nums"
              >
                {label}
              </text>
            </g>
          );
        })}
        <line
          x1={PAD.left}
          x2={W - PAD.right}
          y1={H - PAD.bottom}
          y2={H - PAD.bottom}
          className="stroke-ink/35"
          strokeWidth={1.5}
        />
        {xTicks.map((t, i) => (
          <g key={i}>
            <line
              x1={t.x}
              x2={t.x}
              y1={H - PAD.bottom}
              y2={H - PAD.bottom + 5}
              className="stroke-ink/35"
              strokeWidth={1}
            />
            <text
              x={Math.min(Math.max(t.x, PAD.left - 20), W - PAD.right + 20)}
              y={H - PAD.bottom + 19}
              textAnchor="middle"
              fontSize={TICK_FONT}
              className="fill-ink/55 font-display tabular-nums"
            >
              {t.label}
            </text>
          </g>
        ))}
        {kept.map((s, si) => {
          const e = endBySeries.get(si);
          const w = e ? e.text.length * END_FONT * 0.6 : 0;
          const anchor =
            e && e.x + 10 + w <= W - 8
              ? { x: e.x + 10, anchor: "start" as const }
              : e && e.x - 10 - w >= 8
                ? { x: e.x - 10, anchor: "end" as const }
                : { x: Math.min((e?.x ?? 0) + 10, W - 10 - w), anchor: "start" as const };
          return (
            <g key={s.label} className={toneText(s.tone, accentClass)}>
              {s.pts.length === 1 ? (
                <circle cx={xAt(s.pts[0][0])} cy={yAt(s.pts[0][1])} r={3.5} fill="currentColor" />
              ) : (
                <path
                  d={s.pts
                    .map((p, i) => `${i === 0 ? "M" : "L"}${xAt(p[0]).toFixed(2)} ${yAt(p[1]).toFixed(2)}`)
                    .join(" ")}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              )}
              {e && (
                <>
                  <circle cx={e.x} cy={e.y} r={3.5} fill="currentColor" />
                  <text
                    x={anchor.x}
                    y={e.ly}
                    dy="0.35em"
                    textAnchor={anchor.anchor}
                    fontSize={END_FONT}
                    fontWeight={700}
                    fill={e.tone === "accent" ? "currentColor" : undefined}
                    className={`font-display tabular-nums ${toneEndClass(e.tone)}`}
                    strokeWidth={3}
                    style={{ paintOrder: "stroke" }}
                  >
                    {e.text}
                  </text>
                </>
              )}
            </g>
          );
        })}
      </svg>
      {caption}
    </figure>
  );
}
