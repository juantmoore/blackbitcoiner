"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { BookPage } from "@/lib/book";
import { PageView } from "@/components/page-view";

// A Preview.app-style reader: thumbnails on the left, the book on the right.
// The document itself scrolls, so every page is a real #anchor that can be
// linked, bookmarked and shared.

const PAGE_WIDTH = 800; // widest a page renders in the main column
const THUMB_WIDTH = 124;

export function Reader({ pages }: { pages: BookPage[] }) {
  const [active, setActive] = useState(0);
  const [sidebarHidden, setSidebarHidden] = useState(false); // desktop
  const [drawerOpen, setDrawerOpen] = useState(false); // mobile
  const sidebarRef = useRef<HTMLDivElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const activeRef = useRef(0);

  // Track the page crossing the middle of the viewport.
  useEffect(() => {
    const els = pages.map((p) => document.getElementById(p.id)).filter(Boolean) as HTMLElement[];
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue;
          const i = els.indexOf(e.target as HTMLElement);
          if (i === -1 || i === activeRef.current) continue;
          activeRef.current = i;
          setActive(i);
          history.replaceState(null, "", i === 0 ? location.pathname : `#${pages[i].id}`);
        }
      },
      { rootMargin: "-40% 0px -59% 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [pages]);

  // Keep the active thumbnail in view without scrolling the page itself.
  useEffect(() => {
    for (const list of [sidebarRef.current, drawerRef.current]) {
      const thumb = list?.querySelector<HTMLElement>(`[data-index="${active}"]`);
      if (!list || !thumb) continue;
      const top = thumb.offsetTop;
      const bottom = top + thumb.offsetHeight;
      if (top < list.scrollTop + 16) list.scrollTo({ top: top - 16 });
      else if (bottom > list.scrollTop + list.clientHeight - 16)
        list.scrollTo({ top: bottom - list.clientHeight + 16 });
    }
  }, [active, drawerOpen]);

  const goTo = useCallback(
    (i: number) => {
      const clamped = Math.max(0, Math.min(pages.length - 1, i));
      const el = document.getElementById(pages[clamped].id);
      if (!el) return;
      const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
      el.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
    },
    [pages],
  );

  const closeDrawer = useCallback(() => {
    setDrawerOpen(false);
    toggleRef.current?.focus();
  }, []);

  // Left/right arrows (and j/k) flip pages. Up/down still scroll normally.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      const t = e.target as HTMLElement;
      if (t.closest("input, textarea, select, [contenteditable]")) return;
      if (e.key === "Escape" && drawerOpen) return closeDrawer();
      if (e.key === "ArrowRight" || e.key === "j") {
        e.preventDefault();
        goTo(activeRef.current + 1);
      } else if (e.key === "ArrowLeft" || e.key === "k") {
        e.preventDefault();
        goTo(activeRef.current - 1);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [goTo, drawerOpen, closeDrawer]);

  useEffect(() => {
    if (drawerOpen) drawerRef.current?.querySelector<HTMLElement>(`[data-index="${active}"]`)?.focus();
    // Only when the drawer opens.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [drawerOpen]);

  const toggleSidebar = () => {
    if (matchMedia("(min-width: 64rem)").matches) setSidebarHidden((v) => !v);
    else setDrawerOpen((v) => !v);
  };

  const title = pages[active].label;

  return (
    <>
      <a
        href="#book"
        className="fixed top-2 left-2 z-50 -translate-y-16 rounded-md bg-paper px-3 py-2 font-display text-base font-semibold text-ink focus-visible:translate-y-0"
      >
        Skip to the book
      </a>

      {/* Toolbar */}
      <header className="fixed inset-x-0 top-0 z-40 flex h-14 items-center gap-2 border-b border-white/[0.07] bg-chrome/90 px-2 pt-[env(safe-area-inset-top)] pr-[max(0.5rem,env(safe-area-inset-right))] pl-[max(0.5rem,env(safe-area-inset-left))] backdrop-blur-md sm:px-3">
        <button
          ref={toggleRef}
          type="button"
          onClick={toggleSidebar}
          aria-label="Toggle page thumbnails"
          aria-expanded={drawerOpen || undefined}
          aria-controls="thumbnails"
          className="tool-btn"
        >
          <SidebarIcon />
        </button>

        <a href="#cover" className="ml-1 hidden shrink-0 font-display text-lg font-bold tracking-tight text-paper sm:block">
          Black Bitcoiners
        </a>

        <p className="min-w-0 flex-1 truncate text-center font-serif text-sm text-paper/60 italic sm:ml-4">
          {title}
        </p>

        <div className="flex shrink-0 items-center gap-1">
          <button
            type="button"
            onClick={() => goTo(active - 1)}
            disabled={active === 0}
            aria-label="Previous page"
            className="tool-btn"
          >
            <ChevronIcon dir="up" />
          </button>
          <p className="w-[4.5rem] text-center font-display text-base font-medium tabular-nums text-paper/80">
            <span className="sr-only">Page </span>
            {active + 1}
            <span className="text-paper/40"> of </span>
            {pages.length}
          </p>
          <button
            type="button"
            onClick={() => goTo(active + 1)}
            disabled={active === pages.length - 1}
            aria-label="Next page"
            className="tool-btn"
          >
            <ChevronIcon dir="down" />
          </button>
        </div>
      </header>

      {/* Desktop sidebar */}
      <nav
        id="thumbnails"
        aria-label="Pages"
        hidden={sidebarHidden}
        className="fixed top-14 bottom-0 left-0 z-30 hidden w-[184px] border-r border-white/[0.07] bg-chrome lg:block"
      >
        <div ref={sidebarRef} className="relative h-full overflow-y-auto overscroll-contain py-4 pl-[max(0px,env(safe-area-inset-left))]">
          <ThumbList pages={pages} active={active} />
        </div>
      </nav>

      {/* Mobile drawer */}
      {drawerOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <button
            type="button"
            aria-label="Close pages"
            onClick={closeDrawer}
            className="absolute inset-0 cursor-default bg-black/60"
          />
          <nav
            aria-label="Pages"
            className="drawer absolute top-0 bottom-0 left-0 flex w-[208px] flex-col border-r border-white/10 bg-chrome pt-[env(safe-area-inset-top)] pl-[env(safe-area-inset-left)]"
          >
            <div className="flex h-14 shrink-0 items-center justify-between border-b border-white/[0.07] pr-2 pl-4">
              <p className="font-display text-lg font-bold text-paper">Pages</p>
              <button type="button" onClick={closeDrawer} aria-label="Close pages" className="tool-btn">
                <CloseIcon />
              </button>
            </div>
            <div ref={drawerRef} className="relative flex-1 overflow-y-auto overscroll-contain py-4 pb-[max(1rem,env(safe-area-inset-bottom))]">
              <ThumbList pages={pages} active={active} onPick={() => setDrawerOpen(false)} />
            </div>
          </nav>
        </div>
      )}

      {/* The book */}
      <main
        id="book"
        tabIndex={-1}
        className={`min-h-dvh bg-desk pt-14 outline-none ${sidebarHidden ? "" : "lg:pl-[184px]"}`}
      >
        <div className="mx-auto flex max-w-[calc(800px+4rem)] flex-col gap-6 px-2 py-4 sm:gap-10 sm:px-8 sm:py-10">
          {pages.map((p, i) => (
            <article
              key={p.id}
              id={p.id}
              aria-label={`Page ${i + 1}: ${p.label}`}
              className="page-shadow scroll-mt-[4.5rem] overflow-hidden rounded-[3px] sm:scroll-mt-[5.5rem]"
            >
              <PageView page={p} pages={pages} />
            </article>
          ))}
          <p className="pb-6 text-center font-serif text-sm text-paper/40 italic">
            Use the arrow keys ← → to flip pages.
          </p>
        </div>
      </main>
    </>
  );
}

function ThumbList({
  pages,
  active,
  onPick,
}: {
  pages: BookPage[];
  active: number;
  onPick?: () => void;
}) {
  return (
    <ol className="flex flex-col items-center gap-5">
      {pages.map((p, i) => {
        const current = i === active;
        const newChapter = p.kind === "opener" && p.chapter.number > 1 && pages[i - 1]?.kind === "body";
        return (
          <li key={p.id} className={newChapter ? "pt-2" : ""}>
            <a
              href={`#${p.id}`}
              data-index={i}
              onClick={onPick}
              aria-current={current ? "page" : undefined}
              aria-label={`Page ${i + 1}: ${p.label}`}
              className="group flex flex-col items-center gap-1.5 rounded-md outline-offset-4"
            >
              <div
                className={`relative block overflow-hidden rounded-[2px] bg-paper transition-[box-shadow] duration-150 ${
                  current ? "ring-[3px] ring-wayout ring-offset-2 ring-offset-chrome" : "ring-1 ring-white/10 group-hover:ring-white/40"
                }`}
                style={{ width: THUMB_WIDTH, aspectRatio: "17 / 22" }}
              >
                <div
                  aria-hidden="true"
                  inert
                  className="absolute top-0 left-0 origin-top-left"
                  style={{ width: PAGE_WIDTH, transform: `scale(${THUMB_WIDTH / PAGE_WIDTH})` }}
                >
                  <PageView page={p} pages={pages} uid={`t${i}-`} thumb />
                </div>
              </div>
              <span
                className={`rounded-full px-2 font-display text-sm font-semibold tabular-nums ${
                  current ? "bg-wayout text-ink" : "text-paper/55 group-hover:text-paper"
                }`}
              >
                {i + 1}
              </span>
            </a>
          </li>
        );
      })}
    </ol>
  );
}

function SidebarIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <rect x="2.5" y="3.5" width="15" height="13" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M7.5 3.5v13" stroke="currentColor" strokeWidth="1.5" />
      <path d="M4.5 6.5h1M4.5 9h1M4.5 11.5h1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function ChevronIcon({ dir }: { dir: "up" | "down" }) {
  return (
    <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path
        d={dir === "up" ? "M5 12.5 10 7.5l5 5" : "M5 7.5l5 5 5-5"}
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M5 5l10 10M15 5 5 15" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}
