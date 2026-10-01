import type { ReactNode } from "react";
import type { BookPage, Chapter, Figure, PartId } from "@/lib/book";
import { chapters, pageNumberOf, parts, startSteps } from "@/lib/book";
import { BookLineChart } from "./book-line-chart";

// Every page is its own container, so its type and layout scale with the page,
// not the viewport. That's what lets the sidebar thumbnails be real miniatures.

const partTheme: Record<PartId, { bg: string; fg: string; accent: string; soft: string }> = {
  problem: { bg: "bg-problem", fg: "text-paper", accent: "text-problem", soft: "bg-problem/8" },
  money: { bg: "bg-money", fg: "text-paper", accent: "text-money", soft: "bg-money/8" },
  assets: { bg: "bg-assets", fg: "text-paper", accent: "text-assets", soft: "bg-assets/8" },
  "way-out": { bg: "bg-wayout", fg: "text-ink", accent: "text-wayout-ink", soft: "bg-wayout/15" },
};

// Pages keep a US-letter shape but may grow taller when the text needs room.
const sheet = "@container relative flex aspect-[17/22] w-full flex-col";

/** Thumbnails render pages with `thumb`, which swaps links for plain text so
 *  they can sit inside the thumbnail's own link. */
export function PageView({
  page,
  pages,
  uid = "",
  thumb = false,
}: {
  page: BookPage;
  pages: BookPage[];
  uid?: string;
  thumb?: boolean;
}) {
  switch (page.kind) {
    case "cover":
      return <Cover />;
    case "contents":
      return <Contents pages={pages} uid={uid} thumb={thumb} />;
    case "opener":
      return <Opener chapter={page.chapter} />;
    case "body":
      return <Body chapter={page.chapter} folio={pageNumberOf(pages, page.id)} uid={uid} />;
    case "start":
      return <Start folio={pageNumberOf(pages, page.id)} />;
    case "back":
      return <Back thumb={thumb} />;
  }
}

function Cover() {
  return (
    <div className={`${sheet} bg-ink text-paper`}>
      <div className="flex flex-1 flex-col justify-between px-[8cqw] py-[9cqw]">
        <p className="font-serif text-[3.2cqw] italic text-paper/70">A visual book</p>
        <div>
          <h1 className="font-display text-[21cqw] leading-[0.82] font-extrabold tracking-[-0.01em] uppercase">
            Black
            <br />
            Bitcoiners
          </h1>
          <p className="mt-[5cqw] max-w-[34ch] font-serif text-[3.6cqw] leading-snug text-paper/85">
            How money works, why it keeps us behind, and how Bitcoin gives us a way out.
          </p>
        </div>
        <div className="flex items-end justify-between gap-[4cqw] border-t border-paper/20 pt-[3cqw] font-serif text-[2.6cqw] text-paper/60">
          <p>11 chapters</p>
          <p className="text-right">From zero to understanding</p>
        </div>
      </div>
    </div>
  );
}

function Contents({ pages, uid, thumb }: { pages: BookPage[]; uid: string; thumb: boolean }) {
  const A = thumb ? "span" : "a";
  const order: PartId[] = ["problem", "money", "assets", "way-out"];
  return (
    <div className={`${sheet} bg-paper text-ink`}>
      <div className="flex-1 px-[8cqw] py-[8cqw]">
        <h2 className="font-display text-[9cqw] leading-none font-bold">Contents</h2>
        <div className="mt-[5cqw] space-y-[3.6cqw]">
          {order.map((partId) => (
            <section key={partId} aria-labelledby={`${uid}toc-${partId}`}>
              <h3
                id={`${uid}toc-${partId}`}
                className={`font-serif text-[2.5cqw] italic ${partTheme[partId].accent}`}
              >
                {parts[partId].ordinal}: {parts[partId].name}
              </h3>
              <ol className="mt-[1cqw]">
                {chapters
                  .filter((c) => c.part === partId)
                  .map((c) => (
                    <li key={c.slug}>
                      <A
                        href={thumb ? undefined : `#${c.slug}`}
                        className="group flex items-baseline gap-[1.6cqw] py-[0.45cqw] font-display text-[3.5cqw] leading-tight font-semibold"
                      >
                        <span className="w-[4.5cqw] shrink-0 tabular-nums text-ink/45">{c.number}</span>
                        <span className="min-w-0 underline-offset-[0.6cqw] group-hover:underline">
                          {c.title}
                        </span>
                        <span aria-hidden="true" className="leader mx-[1cqw] flex-1" />
                        <span className="font-serif text-[2.6cqw] font-normal tabular-nums text-ink/60">
                          {pageNumberOf(pages, c.slug)}
                        </span>
                      </A>
                    </li>
                  ))}
                {partId === "way-out" && (
                  <li>
                    <A
                      href={thumb ? undefined : "#where-to-start"}
                      className="group flex items-baseline gap-[1.6cqw] py-[0.45cqw] font-display text-[3.5cqw] leading-tight font-semibold"
                    >
                      <span className="w-[4.5cqw] shrink-0" />
                      <span className="min-w-0 underline-offset-[0.6cqw] group-hover:underline">
                        Where to Start
                      </span>
                      <span aria-hidden="true" className="leader mx-[1cqw] flex-1" />
                      <span className="font-serif text-[2.6cqw] font-normal tabular-nums text-ink/60">
                        {pageNumberOf(pages, "where-to-start")}
                      </span>
                    </A>
                  </li>
                )}
              </ol>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}

function Opener({ chapter }: { chapter: Chapter }) {
  const t = partTheme[chapter.part];
  return (
    <div className={`${sheet} ${t.bg} ${t.fg}`}>
      <div className="flex flex-1 flex-col px-[8cqw] py-[8cqw]">
        <p className="font-serif text-[2.8cqw] italic opacity-75">
          {parts[chapter.part].ordinal}: {parts[chapter.part].name}
        </p>
        <p
          aria-hidden="true"
          className="mt-[7cqw] font-display text-[46cqw] leading-[0.78] font-black tabular-nums tracking-[-0.03em] opacity-95"
        >
          {chapter.number}
        </p>
        <h2 className="mt-[4cqw] max-w-[14ch] font-display text-[11cqw] leading-[0.9] font-extrabold text-balance">
          <span className="sr-only">Chapter {chapter.number}: </span>
          {chapter.title}
        </h2>
        {chapter.subtitle && (
          <p className="mt-[2cqw] font-display text-[5.4cqw] leading-none font-medium opacity-80">
            {chapter.subtitle}
          </p>
        )}
        <blockquote className="mt-auto max-w-[38ch] border-t border-current/25 pt-[3cqw] font-serif text-[3.1cqw] leading-snug italic">
          <p className="whitespace-pre-line">“{chapter.quote}”</p>
        </blockquote>
      </div>
    </div>
  );
}

function RunningHead({ left, right }: { left: string; right: string }) {
  return (
    <div className="flex items-baseline justify-between gap-4 border-b border-rule pb-[1.6cqw] font-serif text-[max(11px,2.1cqw)] text-ink/55">
      <span className="min-w-0 truncate">{left}</span>
      <span className="shrink-0 italic">{right}</span>
    </div>
  );
}

function Folio({ n }: { n: number }) {
  return (
    <p className="mt-auto pt-[5cqw] text-center font-serif text-[max(11px,2.1cqw)] tabular-nums text-ink/45">
      {n}
    </p>
  );
}

const prose =
  "max-w-[62ch] font-serif text-[16.5px] leading-[1.72] text-ink/85 text-pretty @xl:text-[18px]";

function withBold(text: string) {
  return text.split("**").map((part, i) =>
    i % 2 === 1 ? <strong key={i}>{part}</strong> : part,
  );
}

function Body({ chapter, folio, uid }: { chapter: Chapter; folio: number; uid: string }) {
  const t = partTheme[chapter.part];
  const figures =
    chapter.figures ??
    (chapter.figure
      ? [{ at: chapter.figureAt ?? chapter.body.length, figure: chapter.figure }]
      : []);
  const nodes: ReactNode[] = [];
  let chunk: ReactNode[] = [];
  const flushChunk = () => {
    if (chunk.length === 0) return;
    nodes.push(
      <div key={`prose-${nodes.length}`} className={`space-y-[1.1em] ${prose}`}>
        {chunk}
      </div>,
    );
    chunk = [];
  };
  const figuresAt = (at: number) =>
    figures
      .filter((f) => f.at === at)
      .map((f, i) => (
        <div key={`figure-${at}-${i}`} className="my-[5cqw]">
          <FigureView figure={f.figure} part={chapter.part} uid={uid} />
        </div>
      ));
  chapter.body.forEach((entry, i) => {
    const figs = figuresAt(i);
    if (figs.length > 0) {
      flushChunk();
      nodes.push(...figs);
    }
    const key = `${i}-${entry.slice(0, 24)}`;
    chunk.push(
      entry.startsWith("## ") ? (
        <h4
          key={key}
          className={`mt-[3cqw] font-display text-[max(19px,3.6cqw)] leading-tight font-bold ${t.accent}`}
        >
          {withBold(entry.replace(/^##\s*/, ""))}
        </h4>
      ) : (
        <p key={key}>{withBold(entry)}</p>
      ),
    );
  });
  const tail = figuresAt(chapter.body.length);
  if (tail.length > 0) {
    flushChunk();
    nodes.push(...tail);
  }
  flushChunk();
  return (
    <div className={`${sheet} bg-paper text-ink`}>
      <div className="flex flex-1 flex-col px-[7cqw] pt-[5cqw] pb-[4cqw]">
        <RunningHead
          left={`${chapter.number}. ${chapter.title}`}
          right={parts[chapter.part].name}
        />
        <h3 className="mt-[6cqw] max-w-[20ch] font-display text-[max(30px,7.2cqw)] leading-[0.95] font-bold text-balance">
          {chapter.hook}
        </h3>
        <div className="mt-[4cqw]">{nodes}</div>
        <p className="mt-[6cqw] max-w-[26ch] font-display text-[max(24px,5.2cqw)] leading-[1.02] font-bold text-balance">
          <span className={`mb-[2cqw] block h-[0.9cqw] min-h-1 w-[10cqw] ${t.bg}`} aria-hidden="true" />
          {chapter.takeaway}
        </p>
        {chapter.sources && (
          <p className="mt-[3cqw] font-serif text-[max(11px,1.9cqw)] leading-snug text-ink/50 italic">
            Sources: {chapter.sources}
          </p>
        )}
        <Folio n={folio} />
      </div>
    </div>
  );
}

function Source({ text }: { text?: string }) {
  if (!text) return null;
  return (
    <figcaption className="mt-[2.4cqw] font-serif text-[max(11px,1.9cqw)] leading-snug text-ink/50 italic">
      Sources: {text}
    </figcaption>
  );
}

function FigureView({ figure, part, uid }: { figure: Figure; part: PartId; uid: string }) {
  const t = partTheme[part];
  switch (figure.type) {
    case "stats":
      return (
        <figure>
          <dl className="grid grid-cols-1 gap-y-[4cqw] border-y border-rule py-[4cqw] @xl:grid-cols-3 @xl:gap-x-[4cqw]">
            {figure.items.map((s) => (
              <div key={s.label} className="flex flex-col">
                <dd
                  className={`font-display text-[max(40px,8.6cqw)] leading-none font-extrabold tabular-nums ${t.accent}`}
                >
                  {s.value}
                </dd>
                <dt className="mt-[1cqw] font-serif text-[max(13px,2.3cqw)] leading-snug text-ink/70">
                  {s.label}
                  {s.note && <span className="mt-[0.4cqw] block text-ink/45">{s.note}</span>}
                </dt>
              </div>
            ))}
          </dl>
          <Source text={figure.source} />
        </figure>
      );

    case "compare":
      return (
        <figure className="grid grid-cols-1 gap-[4cqw] @xl:grid-cols-2 @xl:gap-0">
          {figure.columns.map((col, i) => (
            <div
              key={col.title}
              className={
                i === 0
                  ? "@xl:border-r @xl:border-rule @xl:pr-[4cqw]"
                  : `@xl:pl-[4cqw]`
              }
            >
              <p
                className={`font-display text-[max(22px,4.4cqw)] leading-none font-bold ${i === 1 ? t.accent : "text-ink/70"}`}
              >
                {col.title}
              </p>
              <ul className="mt-[2cqw] space-y-[1.2cqw] font-serif text-[max(14px,2.4cqw)] leading-snug">
                {col.items.map((item) => (
                  <li key={item} className="border-t border-rule pt-[1.2cqw]">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </figure>
      );

    case "timeline":
      return (
        <figure>
          <ol className="relative space-y-[2.8cqw] border-l-2 border-rule pl-[4cqw]">
            {figure.items.map((e) => (
              <li key={e.year} className="relative">
                <span
                  aria-hidden="true"
                  className={`absolute top-[0.9cqw] -left-[calc(4cqw+5px)] size-2 rounded-full ${t.bg}`}
                />
                <p className={`font-display text-[max(20px,4cqw)] leading-none font-bold tabular-nums ${t.accent}`}>
                  {e.year}
                </p>
                <p className="mt-[0.8cqw] max-w-[54ch] font-serif text-[max(14px,2.4cqw)] leading-snug text-ink/80">
                  {e.text}
                </p>
              </li>
            ))}
          </ol>
          <Source text={figure.source} />
        </figure>
      );

    case "bars":
      return (
        <figure className="rounded-[1.2cqw] bg-ink/[0.035] p-[4cqw]">
          <p className="font-serif text-[max(14px,2.4cqw)] italic text-ink/70">{figure.caption}</p>
          <div className="mt-[3cqw] space-y-[3.6cqw]">
            {figure.items.map((b) => (
              <div key={b.label}>
                <div className="flex items-baseline justify-between gap-4">
                  <p className="font-display text-[max(18px,3.4cqw)] leading-none font-semibold">{b.label}</p>
                  <p className="font-display text-[max(24px,5.6cqw)] leading-none font-extrabold tabular-nums">
                    {b.display}
                  </p>
                </div>
                <div className="mt-[1.4cqw] h-[3cqw] min-h-3 w-full rounded-[0.6cqw] bg-ink/[0.07]">
                  <div
                    className={`h-full rounded-[0.6cqw] ${
                      b.tone === "gold" ? "bg-wayout" : b.tone === "accent" ? t.bg : "bg-ink/55"
                    }`}
                    style={{ width: `${Math.max(b.share, 1.5)}%` }}
                  />
                </div>
                <p className="mt-[1cqw] font-serif text-[max(13px,2.2cqw)] text-ink/60">{b.note}</p>
              </div>
            ))}
          </div>
          <Source text={figure.source} />
        </figure>
      );

    case "line":
      return <BookLineChart figure={figure} accentClass={t.accent} />;

    case "table":
      return (
        <figure>
          <div className="hidden grid-cols-[22cqw_1fr_1fr] gap-[3cqw] border-b-2 border-ink pb-[1.4cqw] font-serif text-[2.1cqw] italic text-ink/60 @xl:grid">
            <span>Asset</span>
            <span>Benefits</span>
            <span>The catch</span>
          </div>
          <dl>
            {figure.rows.map((r) => (
              <div
                key={r.asset}
                className={`grid grid-cols-1 gap-x-[3cqw] gap-y-1 border-b border-rule py-[1.8cqw] @xl:grid-cols-[22cqw_1fr_1fr] ${
                  r.highlight ? "-mx-[2cqw] rounded-[1cqw] border-transparent bg-wayout/20 px-[2cqw]" : ""
                }`}
              >
                <dt className="font-display text-[max(18px,3cqw)] leading-tight font-bold">{r.asset}</dt>
                <dd className="font-serif text-[max(14px,2.15cqw)] leading-snug text-ink/80">
                  <span className="font-medium text-ink/50 italic @xl:sr-only">Benefits: </span>
                  {r.good}
                </dd>
                <dd className="font-serif text-[max(14px,2.15cqw)] leading-snug text-ink/80">
                  <span className="font-medium text-ink/50 italic @xl:sr-only">The catch: </span>
                  {r.catch}
                </dd>
              </div>
            ))}
          </dl>
        </figure>
      );

    case "cycle": {
      const n = figure.steps.length;
      return (
        <figure className="mx-auto w-full max-w-[64cqw] min-w-[260px]">
          <div className="relative aspect-square">
            <svg viewBox="0 0 100 100" className="absolute inset-0 size-full" aria-hidden="true">
              <defs>
                <marker id={`${uid}arrow-${part}`} viewBox="0 0 10 10" refX="5" refY="5" markerWidth="4" markerHeight="4" orient="auto-start-reverse">
                  <path d="M0 0 L10 5 L0 10 z" className="fill-ink/35" />
                </marker>
              </defs>
              {figure.steps.map((_, i) => {
                const a0 = (i / n) * Math.PI * 2 - Math.PI / 2 + 0.3;
                const a1 = ((i + 1) / n) * Math.PI * 2 - Math.PI / 2 - 0.34;
                const r = 36;
                const p = (a: number) => `${(50 + r * Math.cos(a)).toFixed(2)} ${(50 + r * Math.sin(a)).toFixed(2)}`;
                return (
                  <path
                    key={i}
                    d={`M ${p(a0)} A ${r} ${r} 0 0 1 ${p(a1)}`}
                    fill="none"
                    className="stroke-ink/25"
                    strokeWidth="0.7"
                    markerEnd={`url(#${uid}arrow-${part})`}
                  />
                );
              })}
            </svg>
            <p className={`absolute inset-0 m-auto flex size-[40%] items-center justify-center text-center font-display text-[max(18px,4cqw)] leading-none font-bold ${t.accent}`}>
              {figure.center}
            </p>
            <ol>
              {figure.steps.map((s, i) => {
                const a = (i / n) * Math.PI * 2 - Math.PI / 2;
                return (
                  <li
                    key={s}
                    className="absolute w-[30%] -translate-x-1/2 -translate-y-1/2 text-center font-serif text-[max(12px,2.2cqw)] leading-tight"
                    style={{ left: `${50 + 36 * Math.cos(a)}%`, top: `${50 + 36 * Math.sin(a)}%` }}
                  >
                    <span className="inline-block rounded-[0.8cqw] bg-paper px-[1cqw] py-[0.5cqw]">{s}</span>
                  </li>
                );
              })}
            </ol>
          </div>
        </figure>
      );
    }

    case "scene":
      return (
        <figure className={`rounded-[1.2cqw] ${t.soft} px-[5cqw] py-[5cqw]`}>
          <div className="space-y-[1cqw] font-serif text-[max(18px,3.8cqw)] leading-snug italic">
            {figure.lines.map((l) => (
              <p key={l}>{l}</p>
            ))}
          </div>
        </figure>
      );
    case "flow":
      return (
        <figure>
          <p className={`font-display text-[max(20px,4cqw)] leading-none font-bold ${t.accent}`}>
            {figure.title}
          </p>
          <ol className="mt-[3cqw]">
            {figure.steps.map((s, i) => (
              <li key={s} className="flex flex-col items-center">
                {i > 0 && (
                  <span
                    aria-hidden="true"
                    className="my-[1.2cqw] text-ink/35"
                  >
                    ↓
                  </span>
                )}
                <div className="w-full rounded-[1.2cqw] border border-rule px-[3.5cqw] py-[2.4cqw]">
                  <p className={`font-display text-[max(13px,2.4cqw)] leading-none font-bold tabular-nums ${t.accent}`}>
                    {i + 1}
                  </p>
                  <p className="mt-[0.6cqw] font-serif text-[max(15px,2.6cqw)] leading-snug text-ink/85">
                    {s}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </figure>
      );

    case "cards":
      return (
        <figure>
          {figure.caption && (
            <p className="font-serif text-[max(14px,2.4cqw)] italic text-ink/70">{figure.caption}</p>
          )}
          <div
            className={`mt-[3cqw] grid grid-cols-1 gap-[3cqw] ${
              figure.items.length === 2 ? "@xl:grid-cols-2" : "@xl:grid-cols-3"
            }`}
          >
            {figure.items.map((c) => (
              <div
                key={c.label}
                className={`rounded-[1.2cqw] px-[3.5cqw] py-[3cqw] ${
                  c.highlight ? "bg-wayout/20" : "bg-ink/[0.035]"
                }`}
              >
                <p className={`font-display text-[max(18px,3.4cqw)] leading-none font-bold ${t.accent}`}>
                  {c.label}
                </p>
                <p className="mt-[1.2cqw] font-serif text-[max(14px,2.4cqw)] leading-snug text-ink/85">
                  {c.text}
                </p>
                {c.detail && (
                  <p className="mt-[1cqw] font-serif text-[max(12px,2.1cqw)] leading-snug text-ink/55">
                    {c.detail}
                  </p>
                )}
              </div>
            ))}
          </div>
        </figure>
      );
  }
}

function Start({ folio }: { folio: number }) {
  return (
    <div className={`${sheet} bg-paper text-ink`}>
      <div className="flex flex-1 flex-col px-[7cqw] pt-[5cqw] pb-[4cqw]">
        <RunningHead left="Where to Start" right={parts["way-out"].name} />
        <h2 className="mt-[6cqw] font-display text-[max(34px,9cqw)] leading-[0.9] font-extrabold">
          Where to Start
        </h2>
        <p className={`mt-[3cqw] ${prose}`}>
          You don’t need to understand everything to take the first step. You just need to take it
          carefully.
        </p>
        <ol className="mt-[5cqw] space-y-[3.4cqw]">
          {startSteps.map((s, i) => (
            <li key={s.title} className="grid grid-cols-[9cqw_1fr] items-baseline gap-x-[2cqw] border-t border-rule pt-[3cqw]">
              <span className="font-display text-[max(28px,7cqw)] leading-none font-black tabular-nums text-wayout-ink">
                {i + 1}
              </span>
              <div>
                <p className="font-display text-[max(20px,4cqw)] leading-tight font-bold">{s.title}</p>
                <p className="mt-[0.8cqw] max-w-[56ch] font-serif text-[max(15px,2.4cqw)] leading-snug text-ink/75">
                  {s.text}
                </p>
              </div>
            </li>
          ))}
        </ol>
        <p className="mt-[6cqw] max-w-[60ch] font-serif text-[max(12px,2cqw)] leading-snug text-ink/50 italic">
          This book is for education. It isn’t financial advice. Never invest money you can’t afford
          to leave alone, and never share your recovery phrase with anyone.
        </p>
        <Folio n={folio} />
      </div>
    </div>
  );
}

function Back({ thumb }: { thumb: boolean }) {
  const A = thumb ? "span" : "a";
  return (
    <div className={`${sheet} bg-wayout text-ink`}>
      <div className="flex flex-1 flex-col px-[8cqw] py-[9cqw]">
        <p className="font-serif text-[3.2cqw] italic opacity-75">The goal</p>
        <h2 className="mt-auto font-display text-[13.5cqw] leading-[0.86] font-extrabold text-balance">
          Every Black person owns at least one bitcoin.
        </h2>
        <p className="mt-[5cqw] max-w-[40ch] font-serif text-[3.2cqw] leading-snug">
          It starts with understanding. Pass this book to one person who needs it.
        </p>
        <div className="mt-[7cqw] flex items-end justify-between gap-4 border-t border-ink/25 pt-[3cqw] font-serif text-[2.6cqw]">
          <p className="font-display text-[3.4cqw] font-bold">Black Bitcoiners</p>
          <A href={thumb ? undefined : "#cover"} className="underline decoration-ink/40 underline-offset-[0.6cqw] hover:decoration-ink">
            Back to the cover
          </A>
        </div>
      </div>
    </div>
  );
}
