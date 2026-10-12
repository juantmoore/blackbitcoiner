# Black Bitcoiners: Facts

Verified facts and citations for the website. Empty for now. After a claim in `claims.md` is researched, copy it here under the same part and chapter with its `verification` block completed.

## Claim format

Every claim uses this JSON object. `facts.md` uses the same shape; a claim moves there once its `verification` block is filled in.

```jsonc
{
  "id": "C05-03",                     // C<chapter>-<n>, or S-<n> for Where to Start. Stable; never reuse.
  "claim": "…",                       // One checkable statement, in plain words.
  "on_site": [                        // Every place the claim appears, with the exact wording.
    { "page": "/#inflation-read", "location": "body ¶2 | figure (…) | takeaway | quote", "text": "…" }
  ],
  "category": "statistic",            // statistic | historical | definition | technical | regulatory | economic | argument | characterization
  "priority": "high",                 // high = hard number/date/name; medium = checkable economic claim; low = framing/opinion
  "time_sensitive": true,             // true if the value changes over time and must be refreshed before launch
  "cited_source_on_site": "…" | null, // What the site currently lists under "Sources", if anything
  "research_notes": "…",              // Hints for the fact-checker
  "verification": {
    "status": "unverified",           // unverified | in_progress | verified | partially_true | false | opinion
    "verdict": null,                  // Short explanation of the finding
    "correct_value": null,            // The right number/date/wording, if the site is wrong
    "sources": [],                    // [{ "title": "", "publisher": "", "url": "", "accessed": "YYYY-MM-DD", "quote": "" }]
    "checked_on": null,               // YYYY-MM-DD
    "suggested_rewrite": null         // Replacement copy for the site, if needed
  }
}
```

The `//` comments above are only for explanation. The data block below is valid JSON.

## Data

```json
{
  "document": "facts",
  "project": "Black Bitcoiners",
  "source_file": "web/lib/book.ts",
  "extracted_on": "2026-09-26",
  "schema_version": 1,
  "summary": {
    "total": 0,
    "by_priority": {},
    "by_category": {}
  },
  "parts": [
    {
      "id": "problem",
      "ordinal": "Part one",
      "name": "The problem",
      "chapters": [
        {
          "number": 1,
          "slug": "the-black-paradox",
          "title": "The Black Paradox",
          "url": "/#the-black-paradox",
          "claims": []
        },
        {
          "number": 2,
          "slug": "the-two-problems",
          "title": "The Two Problems",
          "url": "/#the-two-problems",
          "claims": []
        },
        {
          "number": 3,
          "slug": "historical-foundation",
          "title": "Historical Foundation",
          "url": "/#historical-foundation",
          "claims": []
        }
      ]
    },
    {
      "id": "money",
      "ordinal": "Part two",
      "name": "How money works",
      "chapters": [
        {
          "number": 4,
          "slug": "the-fiat-system",
          "title": "The Fiat System",
          "url": "/#the-fiat-system",
          "claims": []
        },
        {
          "number": 5,
          "slug": "inflation",
          "title": "Inflation",
          "subtitle": "The hidden tax",
          "url": "/#inflation",
          "claims": []
        },
        {
          "number": 6,
          "slug": "zombie-companies-and-bailouts",
          "title": "Zombie Companies & Bailouts",
          "url": "/#zombie-companies-and-bailouts",
          "claims": []
        },
        {
          "number": 7,
          "slug": "deflation",
          "title": "Deflation",
          "subtitle": "What they don’t want you to have",
          "url": "/#deflation",
          "claims": []
        }
      ]
    },
    {
      "id": "assets",
      "ordinal": "Part three",
      "name": "What to own",
      "chapters": [
        {
          "number": 8,
          "slug": "asset-comparison",
          "title": "Asset Comparison",
          "url": "/#asset-comparison",
          "claims": []
        },
        {
          "number": 9,
          "slug": "the-landlord-trap",
          "title": "Real Estate & the Landlord Trap",
          "url": "/#the-landlord-trap",
          "claims": []
        }
      ]
    },
    {
      "id": "way-out",
      "ordinal": "Part four",
      "name": "The way out",
      "chapters": [
        {
          "number": 10,
          "slug": "redefining-productivity",
          "title": "Redefining Productivity",
          "url": "/#redefining-productivity",
          "claims": []
        },
        {
          "number": 11,
          "slug": "the-bitcoin-solution",
          "title": "The Bitcoin Solution",
          "url": "/#the-bitcoin-solution",
          "claims": []
        },
        {
          "number": null,
          "slug": "where-to-start",
          "title": "Where to Start",
          "url": "/#where-to-start",
          "claims": []
        }
      ]
    }
  ]
}
```
