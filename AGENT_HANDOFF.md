# Black Bitcoiners — Agent Handoff

## Purpose and immediate direction

The founder has merged the V0 expanded-book PR and is doing another editorial/visual pass. Continue work on the FREE BOOK (V0), based on the latest main, when the founder supplies feedback. Do not resume dashboard work or change V1 without explicit direction. Do not proactively rewrite more chapters just because this document lists issues.

Business sequence:
1. Launch V0: free, colorful, approachable illustrated book. The founder approved longer chapters in this iteration; do NOT impose the previous 1–2-page limit. They will trim/refine after reviewing.
2. Offer deluxe preorder: approximately $10 digital; possible $25–50 high-quality coffee-table physical edition with workbook, deeper chapters, under 200 pages. Prices and fulfillment are ideas, not implemented commitments.
3. Later: V1 dashboard/Bitcoin learning university, approximately $100 one-time. Parked. Privy setup requires the founder and belongs last.

## Verified Git state at handoff

Checked against GitHub during handoff creation:
- Repository: juantmoore/blackbitcoiner
- Origin: git@github.com:juantmoore/blackbitcoiner.git
- Active GitHub identity: juantmoore (not the separate hughescoin identity).
- PR #2 is MERGED; mergedAt 2026-10-02T18:26:25Z.
- origin/main: 4449eaf1bd7523a68aeac30e746e46ff3773e1ff — merge of V0 PR #2.
- V0 feature commit: 23cd2a1 — expanded chapters, charts, and context.
- Earlier PR #1 added Vercel Web Analytics and is also merged.

Worktrees (same repository, separate working directories):
- /Volumes/CrucialX10Storage/code/blackbitcoiners/web-v0
  - Branch v0-content, HEAD 23cd2a1.
  - Clean at handoff. Its changes are merged, but this checkout has NOT been fast-forwarded to the merge commit.
- /Volumes/CrucialX10Storage/code/blackbitcoiners/web
  - Branch v1-dashboard, HEAD eabb77e.
  - Clean at handoff; PARKED. Do not switch its branch, merge main into it, reuse its files, or start edits there.
- Temporary web-analytics worktree was removed.

Before any new code task, fetch and inspect again. Create a new V0 follow-up branch from current origin/main in the V0 checkout (or a new worktree) rather than accidentally branching from V1. Do not force-push, delete branches, or merge automatically. The handoff itself is an untracked workspace document outside both checkout roots; it has not been committed.

## User's implementation workflow — important

The main assistant architects prompts/specs and performs independent QA. OpenCode writes ALL application code changes.

Explicit approved worker model/provider:
`opencode run 'BOUNDED TASK' --model venice/z-ai-glm-5-3`

It is GLM-5.3 through VENICE, NOT Vercel AI Gateway, and not the generic profile default GLM-5.2 provider. Do not claim missing Vercel model credentials block implementation. Vercel is hosting, not the coding model provider.

User wants token efficiency and uses prepaid Venice credits. Prefer one bounded worker at a time, immediate targeted edits, limited reads, no dependency additions unless necessary, and concise summaries. Verify actual filesystem/Git changes yourself; exit code 0 is not proof work happened.

Two large OpenCode attempts read files and then ended with finish="length", producing NO edits. Session export confirmed 32,000 internal reasoning tokens in one attempt, with no output code. Subsequent tiny tasks worked. Avoid promising a smaller task cannot fail, inventing credit costs, or conflating tokens with words. GLM-5.3 advertised no reasoning variants when inspected; don't assume --variant low works.

Use foreground calls for short tasks; completion notifications for bounded background tasks. Do not repeatedly poll or start overlapping workers in one checkout. Previously the main assistant exhausted a separate openai-codex usage allowance after a huge session, stale completion notices, background review calls, and retries. Those historical 429s were not the website's API or verified Venice failures.

## Files and source materials

Workspace: /Volumes/CrucialX10Storage/code/blackbitcoiners

Source feedback and research:
- chapter_feedback_notes.md — founder's chapter-by-chapter notes.
- deep-research-prompt.md — research brief written earlier; its static date/instructions are historical, not current.
- fact-check.md — consolidated ledger, useful as an index, NOT blanket publication clearance. Some entries and licensing assertions were overly confident; see outstanding issues below.
- /Users/esquaria/Downloads/Bitcoin_Book_Fact_Check.md — first research report.
- /Users/esquaria/Downloads/black-bitcoiners-fact-check.md — consolidated report, dated Sep 30, 2026, 53 claims and chart source suggestions.

V0 checkout files:
- lib/book.ts — chapters, Figure/Chapter types, page construction.
- lib/chart-data.ts — static chart series and source comments.
- components/page-view.tsx — book pages and figure rendering.
- components/book-line-chart.tsx — pure SVG chart renderer, no chart library.
- components/reader.tsx — book reader/navigation and thumbnail system.
- app/chapters/[slug]/page.tsx — chapter route.
- app/layout.tsx — root layout with @vercel/analytics/next Analytics component.
- docs/v0-content-spec.md — prior authored implementation specification. Several accuracy overrides superseded it, especially the Chapter 1 quote. Current code + current user feedback outrank this stale spec.
- AGENTS.md — generated Next guidance. Read relevant node_modules/next/dist/docs when needed; this repo uses Next 16.3.6.

## What is implemented and merged in V0

Expanded Chapters 1–8, 10, 11. Chapter 9 content unchanged (still supported through legacy figure/figureAt compatibility).

Figure system:
- Chapter can use figures: [{at, figure}], where at is body entries before insertion.
- Legacy figure/figureAt remains supported; do not assume migration is complete.
- Body entries starting "## " render subheadings; **text** renders strong, no arbitrary HTML.
- Chapter sources render at the end; many are plain-text citations, not direct source links.
- Stats support note subtext; bars support accent tone.
- New SVG line charts, vertical flows, and scenario/community/holder cards.
- Table header and mobile label now say Benefits.

Nine line charts:
- Car depreciation
- Dollar purchasing power since 1913
- M2 vs currency in circulation
- Food prices
- Federal debt
- Silver annual averages
- Gold annual averages
- Bitcoin issuance schedule
- Bitcoin price (log scale)
Also unbanked comparison bars, expanded historical timeline, money-flow diagram, illustrative bailout cycle, deflation scenarios, community roles, and holder tiers.

Payless and Joann are the chosen Chapter 6 examples. Copy distinguishes chronology from claiming private equity was the sole bankruptcy cause.

The founder's leisure observation is included in Chapter 10 WITHOUT unverified Chris Rock attribution. They supplied a detailed purported joke breakdown, but no verified original performance/transcript. Do not substitute the unrelated dentist joke.

### Latest exact Chapter 1 quote (approved by user)

They burned Greenwood. They drew the red lines. They kept the GI Bill out of reach. Our ancestors survived it anyway.

Honor them: stop wearing your wealth. Start owning it.

Stored with a blank line; opener quote uses whitespace-pre-line.

### Page 4 statistics alignment

User explicitly required 51.6M, $1.6T after-tax income, and $44,900 median Black wealth to share a horizontal line. Fixed stats renderer from reverse flex ordering to normal number-first layout, labels/notes below. Browser verification at desktop returned IDENTICAL top coordinates for all three numbers in the main page and thumbnail. Preserve this alignment in future edits. Mobile intentionally stacks rather than cramming three columns.

## Data and editorial qualifications

Use the primary sources, not just research-report verdict labels. Some research reports disagreed or contained incorrect classifications. Source year/definition must stay attached to numbers.

Examples checked directly during this work (historical observations, refresh if needed):
- Census 2026 Facts for Features explicitly reports Black alone/in combination 51,629,710 from 2024 ACS, not the conflicting Pew 49.2M value.
- FRED DPCERE1A156NBEA gave 67.6% for 2025 consumption share, not report's 68.1%; copy says roughly two-thirds.
- M2SL August 2026: 23,342.8 billion; MBCURRCIR: 2,475.6 billion. Ratio 10.6%, but definitions overlap and currency includes coins and overseas holdings. This is not proof exactly one tenth of all dollars is paper.
- CPIAUCNS August 2026: 334.98; 1971 annual average ~40.49. $10k nominal cash then corresponds to ~1,210 of 1971 buying power at that endpoint.
- GFDEBTN latest observation retrieved: 2026-01-01 = Q1 2026, 39,065,421 million. Chart ends at ~39.07T quarterly data; separate daily Treasury figure ~40.10T dated Sep 28. Do not combine their dates.
- Gold/silver charts are World Bank Pink Sheet annual averages through 2025, not current intraday/spot prices. Unverified precise 2026 silver spike/crash claims were removed.
- CoinMetrics historical calculation reported 3,560 daily windows, 1,461-day holds, Jan 2013–Sep 2022 starts with exits through Sep 2026. Treat as a reproducible sampled nominal USD analysis, NOT universal future profitability. No fees/taxes/inflation adjustment. Calculation scripts/data provenance should be recreated and stored if retaining the claim.

Corrections incorporated into copy:
- Money growth can contribute to inflation, not automatic equal dilution; supply shocks matter.
- Cars are depreciating assets, loans are liabilities.
- GI Bill discrimination through implementation/access, not blanket statutory exclusion.
- Fed secondary-market purchases are not direct Treasury loans.
- 2% target refers to PCE, with rationale alongside critique.
- PPP percentage is loans fully OR partly forgiven by date, not dollars forgiven.
- TARP disbursements vs net costs; homeowner programs acknowledged.
- Deflation from productivity differs from demand collapse; no guaranteed freedom or stable income.
- International gold customs requirements, not domestic-flight ban.
- Independent appraisers, not partisan bank employees.
- Bitcoin self-custody is not seizure-proof; price appreciation not guaranteed.
- "Get to One" aspiration is not a wealth-percentile guarantee or universal suitability advice.

## QA and publication issues STILL OPEN

1. Full desktop/mobile/keyboard/print QA for the expanded V0 book is not complete. HTTP checks and compilation do not prove visual quality. Charts' SVG labels scale with viewBox and may be small on phones; inspect them. Long chapter sheets/thumbnails/navigation need review.
2. CoinMetrics data was described earlier as CC BY-NC 4.0. Free-to-read does NOT automatically mean noncommercial when the site promotes paid products. Price-chart source is marked permission pending. Verify actual current licensing and obtain permission or replace dataset before claiming clearance. This issue already existed when the founder merged PR #2; do not silently treat merge as rights clearance.
3. Static chart data lacks a checked-in reproducible downloader/provenance manifest. Some figures were typed from report tables (car/FDIC/Bitcoin prices), not all downloaded mechanically despite earlier broad claims. Audit original tables. Bitcoin issuance points are approximate calendar-year labels for block-based halvings; ensure terminal subsidy math and lost/unspendable genesis coins aren't confused with spendable supply.
4. Primary-source citation audit still needed. Numerous plain-text publisher citations and secondary sources remain. The consolidated ledger's Verified heading includes some facts only taken from reports; verify individually.
5. Refresh time-sensitive figures before launch/print. Do not call live price, debt, or CPI values current merely because the old ledger says current.
6. Exact three-major-crashes phrasing needs clear start/end dates and calculation convention; do not assume model self-report resolves it.
7. Historical image rights remain unverified; no Berkeley image or Cornell replacement image was actually added.
8. Vercel production status after PR merge has NOT been independently inspected during this handoff. Do not say production updated just because GitHub main changed.
9. Existing Next build warning: missing Big Shoulders fallback font override. Build succeeds; assess separately if typography is affected.

## Verification already performed

Before push, independent runs passed:
- npm run lint
- npx tsc --noEmit
- npm run build (18 pages prerendered, existing font warning)
- git diff --check

All eleven chapters and homepage returned HTTP 200 locally. No NaN/Infinity SVG strings or leftover [FIG] spec markers in fetched pages. Figure insertion positions validated within body ranges. Chapter 1 alignment checked through Chrome DevTools protocol.

V0 has no dedicated npm test script/test suite established. Do not report the V1 suite's test count as V0 evidence.

## Hosting and preview

Vercel project: juants-projects/blackbitcoiner.

Preview deployment for V0 PR #2 (built Ready, served new quote/stats via vercel curl):
https://blackbitcoiner-429xhpxhr-juants-projects.vercel.app

PR:
https://github.com/juantmoore/blackbitcoiner/pull/2

The PR preview was created explicitly through CLI because no automatic Git deployment checks appeared. CLI suggested connecting Git; inspect real integration before assuming pushes auto-deploy. Never run --prod without appropriate user authorization. Preview protection may require Vercel login; don't disable it silently.

web-v0 is linked locally via ignored .vercel/project.json. vercel link created ignored .env.local containing OIDC credentials; NEVER read/print/copy its values into docs/commits. No dashboard secrets needed for V0.

Local V0 ran at http://localhost:3001; V1 previously at port 3000. Servers may not survive sessions, verify liveness. Start V0 with `npm run dev -- --hostname 127.0.0.1 --port 3001`. Avoid running next build concurrently with an active dev server when possible; stale dev assets previously led to unhydrated pages until restart.

Analytics installed is Vercel WEB ANALYTICS, not SPEED INSIGHTS. The user supplied Analytics import. Speed Insights requires a different package/component and was not added. Confirm dashboard enablement rather than claiming data collection is live.

## Suggested next-agent opening

Acknowledge PR #2 is merged and V1 is parked. Fetch origin, verify main, inspect hosting if asked about live site, and await the founder's next V0 feedback. For edits, branch from latest origin/main, give OpenCode one bounded implementation task, independently check diff/build and browser behavior, then PR/preview when requested. Keep review and publication blockers visible without rewriting the founder's voice unnecessarily.
