# Black Bitcoiners: Claims

Every factual claim made on the website, extracted from `web/lib/book.ts`, grouped by part and chapter. Nothing here has been checked yet. Each claim is the input for fact-checking; results go into `facts.md`.

Arguments and opinions are included too (marked `argument` or `characterization`, usually `low` priority) so you can decide which ones need support and which can stand as the author’s view. Pure rhetoric, the cover, and the contents page are left out.

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
  "document": "claims",
  "project": "Black Bitcoiners",
  "source_file": "web/lib/book.ts",
  "extracted_on": "2026-09-26",
  "schema_version": 1,
  "summary": {
    "total": 127,
    "by_priority": {
      "high": 40,
      "medium": 68,
      "low": 19
    },
    "by_category": {
      "economic": 33,
      "statistic": 29,
      "argument": 29,
      "historical": 17,
      "technical": 9,
      "definition": 6,
      "regulatory": 3,
      "characterization": 1
    }
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
          "claims": [
            {
              "id": "C01-01",
              "claim": "There are about 47 million Black Americans.",
              "on_site": [
                {
                  "page": "/#the-black-paradox-read",
                  "location": "figure (stats)",
                  "text": "47M Black Americans"
                }
              ],
              "category": "statistic",
              "priority": "high",
              "time_sensitive": true,
              "cited_source_on_site": "U.S. Census 2020",
              "research_notes": "Specify the population definition (Black alone vs. alone or in combination) and the year.",
              "verification": {
                "status": "unverified",
                "verdict": null,
                "correct_value": null,
                "sources": [],
                "checked_on": null,
                "suggested_rewrite": null
              }
            },
            {
              "id": "C01-02",
              "claim": "Black Americans spend about $1.6 trillion every year.",
              "on_site": [
                {
                  "page": "/#the-black-paradox-read",
                  "location": "figure (stats)",
                  "text": "$1.6T spent every year"
                }
              ],
              "category": "statistic",
              "priority": "high",
              "time_sensitive": true,
              "cited_source_on_site": "Selig Center buying power estimate",
              "research_notes": "Confirm the estimate year, and whether the figure measures buying power (disposable income) or actual spending.",
              "verification": {
                "status": "unverified",
                "verdict": null,
                "correct_value": null,
                "sources": [],
                "checked_on": null,
                "suggested_rewrite": null
              }
            },
            {
              "id": "C01-03",
              "claim": "Median household wealth for Black households is $44,900.",
              "on_site": [
                {
                  "page": "/#the-black-paradox-read",
                  "location": "figure (stats)",
                  "text": "$44,900 median household wealth"
                }
              ],
              "category": "statistic",
              "priority": "high",
              "time_sensitive": true,
              "cited_source_on_site": "Federal Reserve Survey of Consumer Finances 2022",
              "research_notes": "Confirm survey year and the dollar year the figure is expressed in.",
              "verification": {
                "status": "unverified",
                "verdict": null,
                "correct_value": null,
                "sources": [],
                "checked_on": null,
                "suggested_rewrite": null
              }
            },
            {
              "id": "C01-04",
              "claim": "Median household wealth for white households is $285,000.",
              "on_site": [
                {
                  "page": "/#the-black-paradox-read",
                  "location": "figure (stats)",
                  "text": "vs. $285,000 for white households"
                }
              ],
              "category": "statistic",
              "priority": "high",
              "time_sensitive": true,
              "cited_source_on_site": "Federal Reserve Survey of Consumer Finances 2022",
              "research_notes": "Same source and year as C01-03 so the two numbers are comparable.",
              "verification": {
                "status": "unverified",
                "verdict": null,
                "correct_value": null,
                "sources": [],
                "checked_on": null,
                "suggested_rewrite": null
              }
            },
            {
              "id": "C01-05",
              "claim": "Among successful Black Americans, only a small group (“the 1% of the 1%”) builds lasting wealth, by living below their means, investing, and avoiding flashy purchases.",
              "on_site": [
                {
                  "page": "/#the-black-paradox-read",
                  "location": "body ¶1",
                  "text": "Among successful Black Americans, a small group builds wealth that lasts. Call them the 1% of the 1%. Their secret is boring: they live below their means, invest what’s left, and skip the flashy stuff."
                }
              ],
              "category": "characterization",
              "priority": "low",
              "time_sensitive": false,
              "cited_source_on_site": null,
              "research_notes": "Framing from the founder’s Black Paradox essay. Decide whether to support it with data on high-earning Black households or present it as opinion.",
              "verification": {
                "status": "unverified",
                "verdict": null,
                "correct_value": null,
                "sources": [],
                "checked_on": null,
                "suggested_rewrite": null
              }
            },
            {
              "id": "C01-06",
              "claim": "Media images of Black wealth (rappers, athletes, entertainers) emphasize conspicuous consumption, and young people base their idea of wealth on those images.",
              "on_site": [
                {
                  "page": "/#the-black-paradox-read",
                  "location": "body ¶2",
                  "text": "Rappers, athletes and entertainers show the chain, the car, the party. To a young person, that is what wealth looks like, so that’s what they chase."
                }
              ],
              "category": "argument",
              "priority": "low",
              "time_sensitive": false,
              "cited_source_on_site": null,
              "research_notes": "Look for research on media influence and conspicuous consumption among young consumers.",
              "verification": {
                "status": "unverified",
                "verdict": null,
                "correct_value": null,
                "sources": [],
                "checked_on": null,
                "suggested_rewrite": null
              }
            },
            {
              "id": "C01-07",
              "claim": "Black Americans’ combined spending is comparable to a wealthy nation’s, while their asset ownership is low.",
              "on_site": [
                {
                  "page": "/#the-black-paradox-read",
                  "location": "takeaway",
                  "text": "We spend like a wealthy nation and own like a poor one."
                }
              ],
              "category": "argument",
              "priority": "medium",
              "time_sensitive": true,
              "cited_source_on_site": null,
              "research_notes": "Common comparison: buying power vs. national GDP rankings; share of total U.S. wealth held by Black households.",
              "verification": {
                "status": "unverified",
                "verdict": null,
                "correct_value": null,
                "sources": [],
                "checked_on": null,
                "suggested_rewrite": null
              }
            }
          ]
        },
        {
          "number": 2,
          "slug": "the-two-problems",
          "title": "The Two Problems",
          "url": "/#the-two-problems",
          "claims": [
            {
              "id": "C02-01",
              "claim": "Banks and governments create new dollars at will.",
              "on_site": [
                {
                  "page": "/#the-two-problems-read",
                  "location": "body ¶1",
                  "text": "Banks and governments create new dollars whenever they decide to."
                },
                {
                  "page": "/#the-two-problems-read",
                  "location": "figure (compare): The money",
                  "text": "New dollars created at will"
                }
              ],
              "category": "economic",
              "priority": "medium",
              "time_sensitive": false,
              "cited_source_on_site": null,
              "research_notes": "Distinguish Federal Reserve money creation, commercial bank lending, and Treasury borrowing.",
              "verification": {
                "status": "unverified",
                "verdict": null,
                "correct_value": null,
                "sources": [],
                "checked_on": null,
                "suggested_rewrite": null
              }
            },
            {
              "id": "C02-02",
              "claim": "Each newly created dollar reduces the purchasing power of existing dollars.",
              "on_site": [
                {
                  "page": "/#the-two-problems-read",
                  "location": "body ¶1",
                  "text": "Every new dollar makes the ones in your pocket worth a little less."
                }
              ],
              "category": "economic",
              "priority": "medium",
              "time_sensitive": false,
              "cited_source_on_site": null,
              "research_notes": "Relationship between money supply growth and inflation; conditions where it does or doesn’t hold.",
              "verification": {
                "status": "unverified",
                "verdict": null,
                "correct_value": null,
                "sources": [],
                "checked_on": null,
                "suggested_rewrite": null
              }
            },
            {
              "id": "C02-03",
              "claim": "Inflation is continuous and never stops.",
              "on_site": [
                {
                  "page": "/#the-two-problems-read",
                  "location": "body ¶1",
                  "text": "That’s inflation, and it never stops."
                }
              ],
              "category": "economic",
              "priority": "medium",
              "time_sensitive": false,
              "cited_source_on_site": null,
              "research_notes": "Check for U.S. years with falling prices and how long inflation has been continuously positive.",
              "verification": {
                "status": "unverified",
                "verdict": null,
                "correct_value": null,
                "sources": [],
                "checked_on": null,
                "suggested_rewrite": null
              }
            },
            {
              "id": "C02-04",
              "claim": "Savings held in cash lose value every year.",
              "on_site": [
                {
                  "page": "/#the-two-problems-read",
                  "location": "figure (compare): The money",
                  "text": "Savings lose value every year"
                }
              ],
              "category": "economic",
              "priority": "medium",
              "time_sensitive": false,
              "cited_source_on_site": null,
              "research_notes": "See also C08-01. Consider interest-bearing savings vs. cash; real returns by year.",
              "verification": {
                "status": "unverified",
                "verdict": null,
                "correct_value": null,
                "sources": [],
                "checked_on": null,
                "suggested_rewrite": null
              }
            },
            {
              "id": "C02-05",
              "claim": "Prices rise faster than pay.",
              "on_site": [
                {
                  "page": "/#the-two-problems-read",
                  "location": "figure (compare): The money",
                  "text": "Prices rise faster than pay"
                }
              ],
              "category": "statistic",
              "priority": "high",
              "time_sensitive": true,
              "cited_source_on_site": null,
              "research_notes": "Compare CPI with average/median wage growth over a stated period; results depend heavily on the period chosen.",
              "verification": {
                "status": "unverified",
                "verdict": null,
                "correct_value": null,
                "sources": [],
                "checked_on": null,
                "suggested_rewrite": null
              }
            },
            {
              "id": "C02-06",
              "claim": "The Black–white wealth gap comes mainly from differences in assets owned, not income.",
              "on_site": [
                {
                  "page": "/#the-two-problems-read",
                  "location": "body ¶2",
                  "text": "The wealth gap isn’t mainly about paychecks. It’s about assets: homes, businesses, land, investments."
                }
              ],
              "category": "economic",
              "priority": "high",
              "time_sensitive": false,
              "cited_source_on_site": null,
              "research_notes": "Compare the Black/white income ratio with the wealth ratio.",
              "verification": {
                "status": "unverified",
                "verdict": null,
                "correct_value": null,
                "sources": [],
                "checked_on": null,
                "suggested_rewrite": null
              }
            },
            {
              "id": "C02-07",
              "claim": "Black households own fewer homes than white households.",
              "on_site": [
                {
                  "page": "/#the-two-problems-read",
                  "location": "body ¶2",
                  "text": "We have far fewer of them."
                },
                {
                  "page": "/#the-two-problems-read",
                  "location": "figure (compare): The gap",
                  "text": "Fewer homes owned"
                }
              ],
              "category": "statistic",
              "priority": "high",
              "time_sensitive": true,
              "cited_source_on_site": null,
              "research_notes": "Homeownership rate by race (Census Housing Vacancy Survey).",
              "verification": {
                "status": "unverified",
                "verdict": null,
                "correct_value": null,
                "sources": [],
                "checked_on": null,
                "suggested_rewrite": null
              }
            },
            {
              "id": "C02-08",
              "claim": "Black households own fewer businesses and investments than white households.",
              "on_site": [
                {
                  "page": "/#the-two-problems-read",
                  "location": "figure (compare): The gap",
                  "text": "Fewer businesses and investments"
                }
              ],
              "category": "statistic",
              "priority": "high",
              "time_sensitive": true,
              "cited_source_on_site": null,
              "research_notes": "Business ownership rates; stock/retirement account ownership by race.",
              "verification": {
                "status": "unverified",
                "verdict": null,
                "correct_value": null,
                "sources": [],
                "checked_on": null,
                "suggested_rewrite": null
              }
            },
            {
              "id": "C02-09",
              "claim": "Black households have less wealth to pass down to the next generation.",
              "on_site": [
                {
                  "page": "/#the-two-problems-read",
                  "location": "figure (compare): The gap",
                  "text": "Less to pass down"
                }
              ],
              "category": "statistic",
              "priority": "medium",
              "time_sensitive": true,
              "cited_source_on_site": null,
              "research_notes": "Inheritance and gift receipt rates and amounts by race.",
              "verification": {
                "status": "unverified",
                "verdict": null,
                "correct_value": null,
                "sources": [],
                "checked_on": null,
                "suggested_rewrite": null
              }
            },
            {
              "id": "C02-10",
              "claim": "Cash is the asset Black households hold the most of, and it is the asset losing value fastest.",
              "on_site": [
                {
                  "page": "/#the-two-problems-read",
                  "location": "body ¶3",
                  "text": "The thing we hold most of, cash, is the thing losing value fastest."
                }
              ],
              "category": "statistic",
              "priority": "high",
              "time_sensitive": true,
              "cited_source_on_site": null,
              "research_notes": "Check the composition of Black household wealth (cash/transaction accounts vs. home equity, retirement accounts, vehicles).",
              "verification": {
                "status": "unverified",
                "verdict": null,
                "correct_value": null,
                "sources": [],
                "checked_on": null,
                "suggested_rewrite": null
              }
            },
            {
              "id": "C02-11",
              "claim": "Wealth gives people the freedom to move, choose schools, leave bad jobs, and speak freely.",
              "on_site": [
                {
                  "page": "/#the-two-problems-read",
                  "location": "body ¶4",
                  "text": "Wealth is freedom. Freedom to move to a better city, choose your kids’ school, leave a bad job, and say what you think without worrying about who signs your check."
                }
              ],
              "category": "argument",
              "priority": "low",
              "time_sensitive": false,
              "cited_source_on_site": null,
              "research_notes": "",
              "verification": {
                "status": "unverified",
                "verdict": null,
                "correct_value": null,
                "sources": [],
                "checked_on": null,
                "suggested_rewrite": null
              }
            }
          ]
        },
        {
          "number": 3,
          "slug": "historical-foundation",
          "title": "Historical Foundation",
          "url": "/#historical-foundation",
          "claims": [
            {
              "id": "C03-01",
              "claim": "People, labor and resources were taken out of Africa to build wealth elsewhere.",
              "on_site": [
                {
                  "page": "/#historical-foundation-read",
                  "location": "body ¶1",
                  "text": "People, labor and resources were taken out of Africa to build wealth somewhere else."
                }
              ],
              "category": "historical",
              "priority": "medium",
              "time_sensitive": false,
              "cited_source_on_site": null,
              "research_notes": "Scale of the transatlantic slave trade; colonial resource extraction.",
              "verification": {
                "status": "unverified",
                "verdict": null,
                "correct_value": null,
                "sources": [],
                "checked_on": null,
                "suggested_rewrite": null
              }
            },
            {
              "id": "C03-02",
              "claim": "After slavery, wealth built by Black Americans was repeatedly taken.",
              "on_site": [
                {
                  "page": "/#historical-foundation-read",
                  "location": "body ¶1",
                  "text": "After slavery, Black Americans built anyway, and again and again what they built was taken."
                }
              ],
              "category": "historical",
              "priority": "medium",
              "time_sensitive": false,
              "cited_source_on_site": null,
              "research_notes": "Candidate examples: Freedman’s Bank, Tulsa, Black land loss, redlining, urban renewal.",
              "verification": {
                "status": "unverified",
                "verdict": null,
                "correct_value": null,
                "sources": [],
                "checked_on": null,
                "suggested_rewrite": null
              }
            },
            {
              "id": "C03-03",
              "claim": "Banks keep money circulating inside a community through loans for homes, businesses and new ideas, which is why Black-owned banks matter.",
              "on_site": [
                {
                  "page": "/#historical-foundation-read",
                  "location": "body ¶2",
                  "text": "That’s why Black banks matter. A bank lets money circulate inside a community: loans for homes, for businesses, for new ideas."
                }
              ],
              "category": "economic",
              "priority": "medium",
              "time_sensitive": false,
              "cited_source_on_site": null,
              "research_notes": "Lending patterns of minority depository institutions vs. other banks.",
              "verification": {
                "status": "unverified",
                "verdict": null,
                "correct_value": null,
                "sources": [],
                "checked_on": null,
                "suggested_rewrite": null
              }
            },
            {
              "id": "C03-04",
              "claim": "Cutting off a neighborhood’s access to capital causes it to decline.",
              "on_site": [
                {
                  "page": "/#historical-foundation-read",
                  "location": "body ¶2",
                  "text": "Capital is infrastructure. Choke it off and a neighborhood slowly dies."
                }
              ],
              "category": "argument",
              "priority": "medium",
              "time_sensitive": false,
              "cited_source_on_site": null,
              "research_notes": "Research on long-term effects of redlining and disinvestment.",
              "verification": {
                "status": "unverified",
                "verdict": null,
                "correct_value": null,
                "sources": [],
                "checked_on": null,
                "suggested_rewrite": null
              }
            },
            {
              "id": "C03-05",
              "claim": "The Freedman’s Savings Bank opened in 1865 to serve formerly enslaved people.",
              "on_site": [
                {
                  "page": "/#historical-foundation-read",
                  "location": "figure (timeline): 1865",
                  "text": "The Freedman’s Savings Bank opens to serve formerly enslaved people."
                }
              ],
              "category": "historical",
              "priority": "high",
              "time_sensitive": false,
              "cited_source_on_site": "Federal Reserve History",
              "research_notes": "",
              "verification": {
                "status": "unverified",
                "verdict": null,
                "correct_value": null,
                "sources": [],
                "checked_on": null,
                "suggested_rewrite": null
              }
            },
            {
              "id": "C03-06",
              "claim": "The Freedman’s Savings Bank failed in 1874, and about 61,000 depositors lost nearly $3 million.",
              "on_site": [
                {
                  "page": "/#historical-foundation-read",
                  "location": "figure (timeline): 1874",
                  "text": "The bank fails. About 61,000 depositors lose nearly $3 million."
                }
              ],
              "category": "historical",
              "priority": "high",
              "time_sensitive": false,
              "cited_source_on_site": "Federal Reserve History",
              "research_notes": "Confirm depositor count and loss amount; consider adding the inflation-adjusted value.",
              "verification": {
                "status": "unverified",
                "verdict": null,
                "correct_value": null,
                "sources": [],
                "checked_on": null,
                "suggested_rewrite": null
              }
            },
            {
              "id": "C03-07",
              "claim": "In 1921 a white mob burned Greenwood, the Tulsa neighborhood known as Black Wall Street.",
              "on_site": [
                {
                  "page": "/#historical-foundation-read",
                  "location": "figure (timeline): 1921",
                  "text": "A white mob burns Greenwood in Tulsa, the neighborhood known as Black Wall Street."
                }
              ],
              "category": "historical",
              "priority": "high",
              "time_sensitive": false,
              "cited_source_on_site": "Tulsa Race Massacre Commission report (2001)",
              "research_notes": "Confirm dates (May 31–June 1, 1921) and consider adding deaths and property losses.",
              "verification": {
                "status": "unverified",
                "verdict": null,
                "correct_value": null,
                "sources": [],
                "checked_on": null,
                "suggested_rewrite": null
              }
            },
            {
              "id": "C03-08",
              "claim": "In the 1930s, federal “redlining” maps marked Black neighborhoods as too risky for loans.",
              "on_site": [
                {
                  "page": "/#historical-foundation-read",
                  "location": "figure (timeline): 1930s",
                  "text": "Federal “redlining” maps mark Black neighborhoods as too risky for loans."
                }
              ],
              "category": "historical",
              "priority": "high",
              "time_sensitive": false,
              "cited_source_on_site": null,
              "research_notes": "Confirm which agency (HOLC maps, FHA underwriting) and date range.",
              "verification": {
                "status": "unverified",
                "verdict": null,
                "correct_value": null,
                "sources": [],
                "checked_on": null,
                "suggested_rewrite": null
              }
            }
          ]
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
          "claims": [
            {
              "id": "C04-01",
              "claim": "“Fiat” means “by decree.”",
              "on_site": [
                {
                  "page": "/#the-fiat-system-read",
                  "location": "body ¶1",
                  "text": "“Fiat” means “by decree.”"
                }
              ],
              "category": "definition",
              "priority": "medium",
              "time_sensitive": false,
              "cited_source_on_site": null,
              "research_notes": "Confirm Latin etymology and meaning.",
              "verification": {
                "status": "unverified",
                "verdict": null,
                "correct_value": null,
                "sources": [],
                "checked_on": null,
                "suggested_rewrite": null
              }
            },
            {
              "id": "C04-02",
              "claim": "A fiat dollar is money because the government declares it so, not because it is backed by a physical commodity.",
              "on_site": [
                {
                  "page": "/#the-fiat-system-read",
                  "location": "body ¶1",
                  "text": "A fiat dollar is money because the government says so, not because it’s backed by anything you can hold."
                }
              ],
              "category": "definition",
              "priority": "medium",
              "time_sensitive": false,
              "cited_source_on_site": null,
              "research_notes": "",
              "verification": {
                "status": "unverified",
                "verdict": null,
                "correct_value": null,
                "sources": [],
                "checked_on": null,
                "suggested_rewrite": null
              }
            },
            {
              "id": "C04-03",
              "claim": "For most of history, money was tied to gold.",
              "on_site": [
                {
                  "page": "/#the-fiat-system-read",
                  "location": "body ¶2",
                  "text": "For most of history, money was tied to gold."
                }
              ],
              "category": "historical",
              "priority": "medium",
              "time_sensitive": false,
              "cited_source_on_site": null,
              "research_notes": "Consider silver and bimetallic standards and the actual dates of the gold standard era.",
              "verification": {
                "status": "unverified",
                "verdict": null,
                "correct_value": null,
                "sources": [],
                "checked_on": null,
                "suggested_rewrite": null
              }
            },
            {
              "id": "C04-04",
              "claim": "The U.S. government confiscated gold and later completely cut the dollar’s link to gold.",
              "on_site": [
                {
                  "page": "/#the-fiat-system-read",
                  "location": "body ¶2",
                  "text": "Then the government took the gold, and later cut the dollar loose from it entirely."
                }
              ],
              "category": "historical",
              "priority": "medium",
              "time_sensitive": false,
              "cited_source_on_site": null,
              "research_notes": "Summary of C04-08 and C04-10.",
              "verification": {
                "status": "unverified",
                "verdict": null,
                "correct_value": null,
                "sources": [],
                "checked_on": null,
                "suggested_rewrite": null
              }
            },
            {
              "id": "C04-05",
              "claim": "Since 1971 there has been no hard limit on how many dollars can be created.",
              "on_site": [
                {
                  "page": "/#the-fiat-system-read",
                  "location": "body ¶2",
                  "text": "Since 1971, there’s been no hard limit on how many dollars can be created."
                }
              ],
              "category": "economic",
              "priority": "high",
              "time_sensitive": false,
              "cited_source_on_site": null,
              "research_notes": "Clarify the difference between the debt ceiling and money creation; M2 growth since 1971.",
              "verification": {
                "status": "unverified",
                "verdict": null,
                "correct_value": null,
                "sources": [],
                "checked_on": null,
                "suggested_rewrite": null
              }
            },
            {
              "id": "C04-06",
              "claim": "The government took people’s gold to gain control, because money that can’t be printed stops officials from quietly spending people’s savings.",
              "on_site": [
                {
                  "page": "/#the-fiat-system-read",
                  "location": "body ¶3",
                  "text": "Why take the gold? Control. When people hold money that can’t be printed, the people in charge can’t quietly spend their savings for them."
                }
              ],
              "category": "argument",
              "priority": "medium",
              "time_sensitive": false,
              "cited_source_on_site": null,
              "research_notes": "Compare with the stated rationale for EO 6102 and the Gold Reserve Act (Depression-era monetary expansion).",
              "verification": {
                "status": "unverified",
                "verdict": null,
                "correct_value": null,
                "sources": [],
                "checked_on": null,
                "suggested_rewrite": null
              }
            },
            {
              "id": "C04-07",
              "claim": "Congress created the Federal Reserve in 1913.",
              "on_site": [
                {
                  "page": "/#the-fiat-system-read",
                  "location": "figure (timeline): 1913",
                  "text": "Congress creates the Federal Reserve."
                }
              ],
              "category": "historical",
              "priority": "high",
              "time_sensitive": false,
              "cited_source_on_site": "Federal Reserve History",
              "research_notes": "",
              "verification": {
                "status": "unverified",
                "verdict": null,
                "correct_value": null,
                "sources": [],
                "checked_on": null,
                "suggested_rewrite": null
              }
            },
            {
              "id": "C04-08",
              "claim": "In 1933, Executive Order 6102 ordered Americans to turn in most of their gold.",
              "on_site": [
                {
                  "page": "/#the-fiat-system-read",
                  "location": "figure (timeline): 1933",
                  "text": "Executive Order 6102 orders Americans to turn in most of their gold."
                }
              ],
              "category": "historical",
              "priority": "high",
              "time_sensitive": false,
              "cited_source_on_site": "Federal Reserve History",
              "research_notes": "Confirm date (April 5, 1933), exemptions, and the price paid per ounce.",
              "verification": {
                "status": "unverified",
                "verdict": null,
                "correct_value": null,
                "sources": [],
                "checked_on": null,
                "suggested_rewrite": null
              }
            },
            {
              "id": "C04-09",
              "claim": "In 1934, gold was repriced from $20.67 to $35 an ounce, instantly reducing what each dollar could buy.",
              "on_site": [
                {
                  "page": "/#the-fiat-system-read",
                  "location": "figure (timeline): 1934",
                  "text": "Gold is repriced from $20.67 to $35 an ounce. Overnight, every dollar buys less."
                }
              ],
              "category": "historical",
              "priority": "high",
              "time_sensitive": false,
              "cited_source_on_site": "Gold Reserve Act of 1934",
              "research_notes": "“Every dollar buys less” holds in gold terms; check whether domestic prices changed overnight.",
              "verification": {
                "status": "unverified",
                "verdict": null,
                "correct_value": null,
                "sources": [],
                "checked_on": null,
                "suggested_rewrite": null
              }
            },
            {
              "id": "C04-10",
              "claim": "In 1971, President Nixon ended the conversion of dollars into gold.",
              "on_site": [
                {
                  "page": "/#the-fiat-system-read",
                  "location": "figure (timeline): 1971",
                  "text": "President Nixon ends the conversion of dollars into gold."
                }
              ],
              "category": "historical",
              "priority": "high",
              "time_sensitive": false,
              "cited_source_on_site": "Federal Reserve History",
              "research_notes": "Confirm date and who could still convert before then (foreign governments vs. citizens).",
              "verification": {
                "status": "unverified",
                "verdict": null,
                "correct_value": null,
                "sources": [],
                "checked_on": null,
                "suggested_rewrite": null
              }
            },
            {
              "id": "C04-11",
              "claim": "Americans could legally own gold again starting December 31, 1974.",
              "on_site": [
                {
                  "page": "/#the-fiat-system-read",
                  "location": "figure (timeline): 1974",
                  "text": "Americans may legally own gold again, starting December 31."
                }
              ],
              "category": "historical",
              "priority": "high",
              "time_sensitive": false,
              "cited_source_on_site": "Federal Reserve History",
              "research_notes": "",
              "verification": {
                "status": "unverified",
                "verdict": null,
                "correct_value": null,
                "sources": [],
                "checked_on": null,
                "suggested_rewrite": null
              }
            },
            {
              "id": "C04-12",
              "claim": "Living inside the fiat system means your savings, debts and time are priced in a currency someone else controls.",
              "on_site": [
                {
                  "page": "/#the-fiat-system-read",
                  "location": "body ¶4",
                  "text": "Living inside the system means your savings, your debts and your time are all priced in a currency someone else controls."
                }
              ],
              "category": "argument",
              "priority": "low",
              "time_sensitive": false,
              "cited_source_on_site": null,
              "research_notes": "",
              "verification": {
                "status": "unverified",
                "verdict": null,
                "correct_value": null,
                "sources": [],
                "checked_on": null,
                "suggested_rewrite": null
              }
            },
            {
              "id": "C04-13",
              "claim": "Money that can be printed without limit will be.",
              "on_site": [
                {
                  "page": "/#the-fiat-system-read",
                  "location": "takeaway",
                  "text": "Money that can be printed without limit will be."
                }
              ],
              "category": "argument",
              "priority": "medium",
              "time_sensitive": false,
              "cited_source_on_site": null,
              "research_notes": "Historical record of fiat currency debasement; U.S. money supply growth since 1971.",
              "verification": {
                "status": "unverified",
                "verdict": null,
                "correct_value": null,
                "sources": [],
                "checked_on": null,
                "suggested_rewrite": null
              }
            }
          ]
        },
        {
          "number": 5,
          "slug": "inflation",
          "title": "Inflation",
          "subtitle": "The hidden tax",
          "url": "/#inflation",
          "claims": [
            {
              "id": "C05-01",
              "claim": "In 1971, $10,000 bought about 285 ounces of gold at $35 an ounce.",
              "on_site": [
                {
                  "page": "/#inflation-read",
                  "location": "body ¶1",
                  "text": "It’s 1971. You stuff $10,000 in a mattress and leave it. Your neighbor buys gold with the same $10,000, about 285 ounces at $35 each."
                },
                {
                  "page": "/#inflation-read",
                  "location": "figure (bars)",
                  "text": "285 ounces of gold"
                }
              ],
              "category": "statistic",
              "priority": "high",
              "time_sensitive": false,
              "cited_source_on_site": "historical gold price $35/oz (1971)",
              "research_notes": "$35 was the official price. Confirm the 1971 market price, and whether U.S. citizens could legally buy gold bullion in 1971 (see C04-11).",
              "verification": {
                "status": "unverified",
                "verdict": null,
                "correct_value": null,
                "sources": [],
                "checked_on": null,
                "suggested_rewrite": null
              }
            },
            {
              "id": "C05-02",
              "claim": "$10,000 in cash from 1971 now buys roughly what $1,300 bought in 1971.",
              "on_site": [
                {
                  "page": "/#inflation-read",
                  "location": "body ¶2",
                  "text": "Today your cash buys roughly what $1,300 bought back then."
                },
                {
                  "page": "/#inflation-read",
                  "location": "figure (bars)",
                  "text": "Buys what about $1,300 did in 1971"
                }
              ],
              "category": "statistic",
              "priority": "high",
              "time_sensitive": true,
              "cited_source_on_site": "BLS CPI-U",
              "research_notes": "Recompute from CPI-U (1971 annual average vs. latest).",
              "verification": {
                "status": "unverified",
                "verdict": null,
                "correct_value": null,
                "sources": [],
                "checked_on": null,
                "suggested_rewrite": null
              }
            },
            {
              "id": "C05-03",
              "claim": "285 ounces of gold bought in 1971 is now worth more than $500,000.",
              "on_site": [
                {
                  "page": "/#inflation-read",
                  "location": "body ¶2",
                  "text": "Your neighbor’s gold is worth more than half a million dollars."
                },
                {
                  "page": "/#inflation-read",
                  "location": "figure (bars)",
                  "text": "$500,000+"
                }
              ],
              "category": "statistic",
              "priority": "high",
              "time_sensitive": true,
              "cited_source_on_site": "Site note: “Recheck gold price before launch.”",
              "research_notes": "Needs the current gold price. The bar lengths in the chart (2% vs. 100%) should be recalculated to match the final numbers.",
              "verification": {
                "status": "unverified",
                "verdict": null,
                "correct_value": null,
                "sources": [],
                "checked_on": null,
                "suggested_rewrite": null
              }
            },
            {
              "id": "C05-04",
              "claim": "Gold has kept its buying power, and more, since 1971.",
              "on_site": [
                {
                  "page": "/#inflation-read",
                  "location": "figure (bars)",
                  "text": "Held its buying power and then some"
                }
              ],
              "category": "statistic",
              "priority": "medium",
              "time_sensitive": true,
              "cited_source_on_site": null,
              "research_notes": "Compare gold price growth with CPI since 1971.",
              "verification": {
                "status": "unverified",
                "verdict": null,
                "correct_value": null,
                "sources": [],
                "checked_on": null,
                "suggested_rewrite": null
              }
            },
            {
              "id": "C05-05",
              "claim": "Dollars cost almost nothing to create.",
              "on_site": [
                {
                  "page": "/#inflation-read",
                  "location": "body ¶3",
                  "text": "Dollars cost almost nothing to create."
                }
              ],
              "category": "economic",
              "priority": "medium",
              "time_sensitive": false,
              "cited_source_on_site": null,
              "research_notes": "Distinguish the printing cost of paper notes from digital money creation.",
              "verification": {
                "status": "unverified",
                "verdict": null,
                "correct_value": null,
                "sources": [],
                "checked_on": null,
                "suggested_rewrite": null
              }
            },
            {
              "id": "C05-06",
              "claim": "Gold takes energy, labor and time to extract.",
              "on_site": [
                {
                  "page": "/#inflation-read",
                  "location": "body ¶3",
                  "text": "Gold takes energy, labor and time to pull out of the ground."
                }
              ],
              "category": "economic",
              "priority": "low",
              "time_sensitive": false,
              "cited_source_on_site": null,
              "research_notes": "Gold mining cost data (all-in sustaining cost).",
              "verification": {
                "status": "unverified",
                "verdict": null,
                "correct_value": null,
                "sources": [],
                "checked_on": null,
                "suggested_rewrite": null
              }
            },
            {
              "id": "C05-07",
              "claim": "Things that are hard to make hold their value.",
              "on_site": [
                {
                  "page": "/#inflation-read",
                  "location": "body ¶3",
                  "text": "Things that are hard to make hold their value."
                }
              ],
              "category": "argument",
              "priority": "medium",
              "time_sensitive": false,
              "cited_source_on_site": null,
              "research_notes": "",
              "verification": {
                "status": "unverified",
                "verdict": null,
                "correct_value": null,
                "sources": [],
                "checked_on": null,
                "suggested_rewrite": null
              }
            },
            {
              "id": "C05-08",
              "claim": "Official U.S. inflation runs a few percent a year.",
              "on_site": [
                {
                  "page": "/#inflation-read",
                  "location": "body ¶4",
                  "text": "The official number says inflation runs a few percent a year."
                }
              ],
              "category": "statistic",
              "priority": "medium",
              "time_sensitive": true,
              "cited_source_on_site": null,
              "research_notes": "Annual CPI-U changes; note the 2021–2022 peak.",
              "verification": {
                "status": "unverified",
                "verdict": null,
                "correct_value": null,
                "sources": [],
                "checked_on": null,
                "suggested_rewrite": null
              }
            },
            {
              "id": "C05-09",
              "claim": "U.S. food prices rose about 25% between 2019 and 2024.",
              "on_site": [
                {
                  "page": "/#inflation-read",
                  "location": "body ¶4",
                  "text": "Your grocery receipt says otherwise: food prices rose about 25% between 2019 and 2024."
                }
              ],
              "category": "statistic",
              "priority": "high",
              "time_sensitive": false,
              "cited_source_on_site": "USDA ERS Food Price Outlook",
              "research_notes": "Specify food-at-home vs. all food, and the exact endpoints.",
              "verification": {
                "status": "unverified",
                "verdict": null,
                "correct_value": null,
                "sources": [],
                "checked_on": null,
                "suggested_rewrite": null
              }
            },
            {
              "id": "C05-10",
              "claim": "The “core” inflation number excludes food and energy.",
              "on_site": [
                {
                  "page": "/#inflation-read",
                  "location": "body ¶4",
                  "text": "The “core” number you hear most leaves out food and energy"
                }
              ],
              "category": "definition",
              "priority": "high",
              "time_sensitive": false,
              "cited_source_on_site": null,
              "research_notes": "",
              "verification": {
                "status": "unverified",
                "verdict": null,
                "correct_value": null,
                "sources": [],
                "checked_on": null,
                "suggested_rewrite": null
              }
            },
            {
              "id": "C05-11",
              "claim": "Core inflation is the inflation number most commonly reported.",
              "on_site": [
                {
                  "page": "/#inflation-read",
                  "location": "body ¶4",
                  "text": "The “core” number you hear most"
                }
              ],
              "category": "economic",
              "priority": "medium",
              "time_sensitive": false,
              "cited_source_on_site": null,
              "research_notes": "Check which measure news coverage and the Federal Reserve emphasize (headline CPI, core CPI, PCE).",
              "verification": {
                "status": "unverified",
                "verdict": null,
                "correct_value": null,
                "sources": [],
                "checked_on": null,
                "suggested_rewrite": null
              }
            },
            {
              "id": "C05-12",
              "claim": "Home prices are not counted directly in the official inflation number.",
              "on_site": [
                {
                  "page": "/#inflation-read",
                  "location": "body ¶4",
                  "text": "and home prices aren’t counted directly."
                }
              ],
              "category": "definition",
              "priority": "high",
              "time_sensitive": false,
              "cited_source_on_site": null,
              "research_notes": "CPI owners’ equivalent rent methodology.",
              "verification": {
                "status": "unverified",
                "verdict": null,
                "correct_value": null,
                "sources": [],
                "checked_on": null,
                "suggested_rewrite": null
              }
            },
            {
              "id": "C05-13",
              "claim": "Inflation acts as a tax that nobody votes on.",
              "on_site": [
                {
                  "page": "/#inflation-read",
                  "location": "body ¶5",
                  "text": "That’s why inflation is a tax. Nobody votes on it, but it takes a cut of every hour you work."
                },
                {
                  "page": "/#inflation-read",
                  "location": "takeaway",
                  "text": "Inflation is a tax you never voted for."
                }
              ],
              "category": "economic",
              "priority": "medium",
              "time_sensitive": false,
              "cited_source_on_site": null,
              "research_notes": "Economic literature on the “inflation tax” and seigniorage.",
              "verification": {
                "status": "unverified",
                "verdict": null,
                "correct_value": null,
                "sources": [],
                "checked_on": null,
                "suggested_rewrite": null
              }
            },
            {
              "id": "C05-14",
              "claim": "Inflation pushes retirement further out and keeps people paying off debts that never seem to shrink.",
              "on_site": [
                {
                  "page": "/#inflation-read",
                  "location": "body ¶5",
                  "text": "It pushes retirement further out and keeps you paying off debts that never seem to shrink."
                }
              ],
              "category": "argument",
              "priority": "medium",
              "time_sensitive": false,
              "cited_source_on_site": null,
              "research_notes": "Possible tension with C07-04: inflation reduces the real value of fixed-rate debt.",
              "verification": {
                "status": "unverified",
                "verdict": null,
                "correct_value": null,
                "sources": [],
                "checked_on": null,
                "suggested_rewrite": null
              }
            }
          ]
        },
        {
          "number": 6,
          "slug": "zombie-companies-and-bailouts",
          "title": "Zombie Companies & Bailouts",
          "url": "/#zombie-companies-and-bailouts",
          "claims": [
            {
              "id": "C06-01",
              "claim": "A zombie company is one that doesn’t make a profit, has no real plan to, and stays alive by borrowing more.",
              "on_site": [
                {
                  "page": "/#zombie-companies-and-bailouts-read",
                  "location": "body ¶1",
                  "text": "A zombie company doesn’t make a profit and has no real plan to. It stays alive by borrowing more."
                }
              ],
              "category": "definition",
              "priority": "medium",
              "time_sensitive": false,
              "cited_source_on_site": null,
              "research_notes": "Compare with standard definitions (e.g. BIS/Fed: interest coverage ratio below 1 for 3+ years). Include the share of U.S. public companies that qualify.",
              "verification": {
                "status": "unverified",
                "verdict": null,
                "correct_value": null,
                "sources": [],
                "checked_on": null,
                "suggested_rewrite": null
              }
            },
            {
              "id": "C06-02",
              "claim": "Low interest rates (“cheap money”) keep zombie companies alive.",
              "on_site": [
                {
                  "page": "/#zombie-companies-and-bailouts-read",
                  "location": "body ¶1",
                  "text": "Cheap money keeps it walking."
                }
              ],
              "category": "economic",
              "priority": "medium",
              "time_sensitive": false,
              "cited_source_on_site": null,
              "research_notes": "Research on interest rates and the prevalence of zombie firms.",
              "verification": {
                "status": "unverified",
                "verdict": null,
                "correct_value": null,
                "sources": [],
                "checked_on": null,
                "suggested_rewrite": null
              }
            },
            {
              "id": "C06-03",
              "claim": "During COVID, hundreds of billions of dollars went out through programs like PPP loans.",
              "on_site": [
                {
                  "page": "/#zombie-companies-and-bailouts-read",
                  "location": "body ¶2",
                  "text": "During COVID, hundreds of billions went out through programs like PPP loans."
                }
              ],
              "category": "statistic",
              "priority": "high",
              "time_sensitive": false,
              "cited_source_on_site": null,
              "research_notes": "Total PPP lending (SBA); consider naming the exact figure.",
              "verification": {
                "status": "unverified",
                "verdict": null,
                "correct_value": null,
                "sources": [],
                "checked_on": null,
                "suggested_rewrite": null
              }
            },
            {
              "id": "C06-04",
              "claim": "Much PPP money kept failing businesses on life support rather than saving viable ones.",
              "on_site": [
                {
                  "page": "/#zombie-companies-and-bailouts-read",
                  "location": "body ¶2",
                  "text": "Some of it saved good businesses. A lot of it kept failing ones on life support"
                }
              ],
              "category": "economic",
              "priority": "high",
              "time_sensitive": false,
              "cited_source_on_site": null,
              "research_notes": "Studies on PPP targeting, jobs saved per dollar, and fraud estimates.",
              "verification": {
                "status": "unverified",
                "verdict": null,
                "correct_value": null,
                "sources": [],
                "checked_on": null,
                "suggested_rewrite": null
              }
            },
            {
              "id": "C06-05",
              "claim": "COVID relief programs like PPP were funded with newly created money.",
              "on_site": [
                {
                  "page": "/#zombie-companies-and-bailouts-read",
                  "location": "body ¶2",
                  "text": "paid for with newly created money."
                }
              ],
              "category": "economic",
              "priority": "high",
              "time_sensitive": false,
              "cited_source_on_site": null,
              "research_notes": "PPP was funded by Treasury borrowing. Check the Fed’s balance sheet expansion and Treasury purchases in 2020–2021, and the PPP Liquidity Facility.",
              "verification": {
                "status": "unverified",
                "verdict": null,
                "correct_value": null,
                "sources": [],
                "checked_on": null,
                "suggested_rewrite": null
              }
            },
            {
              "id": "C06-06",
              "claim": "Private equity firms buy companies, load them with debt, pull out cash, and leave workers laid off.",
              "on_site": [
                {
                  "page": "/#zombie-companies-and-bailouts-read",
                  "location": "body ¶3",
                  "text": "Meanwhile, private equity firms buy companies, load them with debt, pull out cash, and leave workers with pink slips."
                }
              ],
              "category": "economic",
              "priority": "high",
              "time_sensitive": false,
              "cited_source_on_site": null,
              "research_notes": "Studies on leveraged buyouts, dividend recaps, bankruptcy rates and employment effects. Find concrete cases (e.g. Toys “R” Us).",
              "verification": {
                "status": "unverified",
                "verdict": null,
                "correct_value": null,
                "sources": [],
                "checked_on": null,
                "suggested_rewrite": null
              }
            },
            {
              "id": "C06-07",
              "claim": "Large companies and financial firms get government bailouts when they lose; ordinary people don’t.",
              "on_site": [
                {
                  "page": "/#zombie-companies-and-bailouts-read",
                  "location": "body ¶4",
                  "text": "Call it what it is: capitalism for you, socialism for them. When big players lose, they get bailouts. When you lose, you get a late fee."
                }
              ],
              "category": "argument",
              "priority": "medium",
              "time_sensitive": false,
              "cited_source_on_site": null,
              "research_notes": "Examples: 2008 TARP, auto bailout, 2023 SVB depositor backstop. Compare with relief available to households.",
              "verification": {
                "status": "unverified",
                "verdict": null,
                "correct_value": null,
                "sources": [],
                "checked_on": null,
                "suggested_rewrite": null
              }
            },
            {
              "id": "C06-08",
              "claim": "Taxpayers ultimately pay for bailouts.",
              "on_site": [
                {
                  "page": "/#zombie-companies-and-bailouts-read",
                  "location": "takeaway",
                  "text": "Every bailout is paid for by someone who didn’t get one."
                },
                {
                  "page": "/#zombie-companies-and-bailouts-read",
                  "location": "figure (compare): Bail it out",
                  "text": "You pay the bill"
                }
              ],
              "category": "economic",
              "priority": "medium",
              "time_sensitive": false,
              "cited_source_on_site": null,
              "research_notes": "Note that some bailouts (e.g. TARP) were largely repaid; distinguish direct cost from moral hazard and inflation costs.",
              "verification": {
                "status": "unverified",
                "verdict": null,
                "correct_value": null,
                "sources": [],
                "checked_on": null,
                "suggested_rewrite": null
              }
            },
            {
              "id": "C06-09",
              "claim": "When bad businesses fail, prices fall, their assets go on sale, and better companies replace them.",
              "on_site": [
                {
                  "page": "/#zombie-companies-and-bailouts-read",
                  "location": "body ¶5",
                  "text": "Failure is healthy. When a bad business dies, prices fall, assets go on sale, and something better takes its place."
                },
                {
                  "page": "/#zombie-companies-and-bailouts-read",
                  "location": "figure (compare): Let it fail",
                  "text": "Prices come down"
                }
              ],
              "category": "economic",
              "priority": "medium",
              "time_sensitive": false,
              "cited_source_on_site": null,
              "research_notes": "Creative destruction literature.",
              "verification": {
                "status": "unverified",
                "verdict": null,
                "correct_value": null,
                "sources": [],
                "checked_on": null,
                "suggested_rewrite": null
              }
            },
            {
              "id": "C06-10",
              "claim": "Bailing out bad companies involves creating new money, which raises prices.",
              "on_site": [
                {
                  "page": "/#zombie-companies-and-bailouts-read",
                  "location": "figure (compare): Bail it out",
                  "text": "New money is created"
                },
                {
                  "page": "/#zombie-companies-and-bailouts-read",
                  "location": "figure (compare): Bail it out",
                  "text": "Prices go up"
                }
              ],
              "category": "economic",
              "priority": "medium",
              "time_sensitive": false,
              "cited_source_on_site": null,
              "research_notes": "",
              "verification": {
                "status": "unverified",
                "verdict": null,
                "correct_value": null,
                "sources": [],
                "checked_on": null,
                "suggested_rewrite": null
              }
            },
            {
              "id": "C06-11",
              "claim": "After the 2008 crash, U.S. home prices bottomed around 2012.",
              "on_site": [
                {
                  "page": "/#zombie-companies-and-bailouts-read",
                  "location": "body ¶5",
                  "text": "After the 2008 crash, home prices bottomed around 2012"
                }
              ],
              "category": "statistic",
              "priority": "high",
              "time_sensitive": false,
              "cited_source_on_site": null,
              "research_notes": "Case-Shiller national index trough date. The founder originally said 2009–2012/2015 was the best buying window.",
              "verification": {
                "status": "unverified",
                "verdict": null,
                "correct_value": null,
                "sources": [],
                "checked_on": null,
                "suggested_rewrite": null
              }
            },
            {
              "id": "C06-12",
              "claim": "After the housing bottom, families could afford to buy homes.",
              "on_site": [
                {
                  "page": "/#zombie-companies-and-bailouts-read",
                  "location": "body ¶5",
                  "text": "and families could afford to buy."
                }
              ],
              "category": "statistic",
              "priority": "medium",
              "time_sensitive": false,
              "cited_source_on_site": null,
              "research_notes": "Affordability indexes around 2012; note tight mortgage lending standards at the time.",
              "verification": {
                "status": "unverified",
                "verdict": null,
                "correct_value": null,
                "sources": [],
                "checked_on": null,
                "suggested_rewrite": null
              }
            },
            {
              "id": "C06-13",
              "claim": "The U.S. is currently in a housing affordability crisis.",
              "on_site": [
                {
                  "page": "/#zombie-companies-and-bailouts-read",
                  "location": "body ¶5",
                  "text": "Today we call the opposite an affordability crisis."
                }
              ],
              "category": "statistic",
              "priority": "medium",
              "time_sensitive": true,
              "cited_source_on_site": null,
              "research_notes": "Price-to-income ratios, NAR/Atlanta Fed affordability indexes.",
              "verification": {
                "status": "unverified",
                "verdict": null,
                "correct_value": null,
                "sources": [],
                "checked_on": null,
                "suggested_rewrite": null
              }
            }
          ]
        },
        {
          "number": 7,
          "slug": "deflation",
          "title": "Deflation",
          "subtitle": "What they don’t want you to have",
          "url": "/#deflation",
          "claims": [
            {
              "id": "C07-01",
              "claim": "Deflation means prices fall and each dollar buys more.",
              "on_site": [
                {
                  "page": "/#deflation-read",
                  "location": "body ¶1",
                  "text": "Deflation means prices fall. Your dollar goes further."
                }
              ],
              "category": "definition",
              "priority": "medium",
              "time_sensitive": false,
              "cited_source_on_site": null,
              "research_notes": "",
              "verification": {
                "status": "unverified",
                "verdict": null,
                "correct_value": null,
                "sources": [],
                "checked_on": null,
                "suggested_rewrite": null
              }
            },
            {
              "id": "C07-02",
              "claim": "Governments fight deflation hard.",
              "on_site": [
                {
                  "page": "/#deflation-read",
                  "location": "body ¶2",
                  "text": "Governments fight it hard."
                }
              ],
              "category": "economic",
              "priority": "medium",
              "time_sensitive": false,
              "cited_source_on_site": null,
              "research_notes": "Fed 2% inflation target; stated reasons for avoiding deflation.",
              "verification": {
                "status": "unverified",
                "verdict": null,
                "correct_value": null,
                "sources": [],
                "checked_on": null,
                "suggested_rewrite": null
              }
            },
            {
              "id": "C07-03",
              "claim": "The U.S. national debt is more than $37 trillion.",
              "on_site": [
                {
                  "page": "/#deflation-read",
                  "location": "body ¶2",
                  "text": "The U.S. owes more than $37 trillion."
                }
              ],
              "category": "statistic",
              "priority": "high",
              "time_sensitive": true,
              "cited_source_on_site": null,
              "research_notes": "Treasury “Debt to the Penny.” The founder’s recording said $40T. Update before launch and state the date.",
              "verification": {
                "status": "unverified",
                "verdict": null,
                "correct_value": null,
                "sources": [],
                "checked_on": null,
                "suggested_rewrite": null
              }
            },
            {
              "id": "C07-04",
              "claim": "Inflation lets government debt be repaid in cheaper dollars, making it lighter.",
              "on_site": [
                {
                  "page": "/#deflation-read",
                  "location": "body ¶2",
                  "text": "Inflation lets that debt be paid back in cheaper dollars."
                },
                {
                  "page": "/#deflation-read",
                  "location": "figure (compare): Inflation",
                  "text": "Government debt gets lighter"
                }
              ],
              "category": "economic",
              "priority": "medium",
              "time_sensitive": false,
              "cited_source_on_site": null,
              "research_notes": "",
              "verification": {
                "status": "unverified",
                "verdict": null,
                "correct_value": null,
                "sources": [],
                "checked_on": null,
                "suggested_rewrite": null
              }
            },
            {
              "id": "C07-05",
              "claim": "Deflation makes government debt heavier.",
              "on_site": [
                {
                  "page": "/#deflation-read",
                  "location": "body ¶2",
                  "text": "Deflation makes it heavier."
                },
                {
                  "page": "/#deflation-read",
                  "location": "figure (compare): Deflation",
                  "text": "Government debt gets heavier"
                }
              ],
              "category": "economic",
              "priority": "medium",
              "time_sensitive": false,
              "cited_source_on_site": null,
              "research_notes": "Debt-deflation (Irving Fisher).",
              "verification": {
                "status": "unverified",
                "verdict": null,
                "correct_value": null,
                "sources": [],
                "checked_on": null,
                "suggested_rewrite": null
              }
            },
            {
              "id": "C07-06",
              "claim": "Debt is a claim on your future self’s income, and national debt is a burden future generations will have to carry.",
              "on_site": [
                {
                  "page": "/#deflation-read",
                  "location": "body ¶3",
                  "text": "Debt is a promise your future self has to keep. National debt is a promise our children will have to keep."
                }
              ],
              "category": "argument",
              "priority": "low",
              "time_sensitive": false,
              "cited_source_on_site": null,
              "research_notes": "",
              "verification": {
                "status": "unverified",
                "verdict": null,
                "correct_value": null,
                "sources": [],
                "checked_on": null,
                "suggested_rewrite": null
              }
            },
            {
              "id": "C07-07",
              "claim": "When prices fall, people save more, need to work less, and pay less income tax.",
              "on_site": [
                {
                  "page": "/#deflation-read",
                  "location": "body ¶4",
                  "text": "When prices fall, people save more, need to work less, and pay less income tax."
                }
              ],
              "category": "economic",
              "priority": "medium",
              "time_sensitive": false,
              "cited_source_on_site": null,
              "research_notes": "Mainstream view is that deflation can reduce spending and raise unemployment. Present both sides.",
              "verification": {
                "status": "unverified",
                "verdict": null,
                "correct_value": null,
                "sources": [],
                "checked_on": null,
                "suggested_rewrite": null
              }
            },
            {
              "id": "C07-08",
              "claim": "Under inflation, savings shrink and retirement moves further away.",
              "on_site": [
                {
                  "page": "/#deflation-read",
                  "location": "figure (compare): Inflation",
                  "text": "Savings shrink"
                },
                {
                  "page": "/#deflation-read",
                  "location": "figure (compare): Inflation",
                  "text": "Retirement moves further away"
                }
              ],
              "category": "economic",
              "priority": "medium",
              "time_sensitive": false,
              "cited_source_on_site": null,
              "research_notes": "",
              "verification": {
                "status": "unverified",
                "verdict": null,
                "correct_value": null,
                "sources": [],
                "checked_on": null,
                "suggested_rewrite": null
              }
            },
            {
              "id": "C07-09",
              "claim": "Under deflation, savings grow and your time frees up.",
              "on_site": [
                {
                  "page": "/#deflation-read",
                  "location": "figure (compare): Deflation",
                  "text": "Savings grow"
                },
                {
                  "page": "/#deflation-read",
                  "location": "figure (compare): Deflation",
                  "text": "Your time frees up"
                }
              ],
              "category": "argument",
              "priority": "low",
              "time_sensitive": false,
              "cited_source_on_site": null,
              "research_notes": "",
              "verification": {
                "status": "unverified",
                "verdict": null,
                "correct_value": null,
                "sources": [],
                "checked_on": null,
                "suggested_rewrite": null
              }
            },
            {
              "id": "C07-10",
              "claim": "Owning assets that grow faster than prices protects you from inflation.",
              "on_site": [
                {
                  "page": "/#deflation-read",
                  "location": "body ¶5",
                  "text": "You need to own something that grows faster than prices rise, so your life gets cheaper even while their money doesn’t."
                }
              ],
              "category": "economic",
              "priority": "low",
              "time_sensitive": false,
              "cited_source_on_site": null,
              "research_notes": "",
              "verification": {
                "status": "unverified",
                "verdict": null,
                "correct_value": null,
                "sources": [],
                "checked_on": null,
                "suggested_rewrite": null
              }
            },
            {
              "id": "C07-11",
              "claim": "Falling prices are good news for everyone who isn’t heavily in debt.",
              "on_site": [
                {
                  "page": "/#deflation-read",
                  "location": "takeaway",
                  "text": "Falling prices are good news for everyone not drowning in debt."
                }
              ],
              "category": "argument",
              "priority": "medium",
              "time_sensitive": false,
              "cited_source_on_site": null,
              "research_notes": "Consider effects of deflation on wages and employment, not only debt.",
              "verification": {
                "status": "unverified",
                "verdict": null,
                "correct_value": null,
                "sources": [],
                "checked_on": null,
                "suggested_rewrite": null
              }
            }
          ]
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
          "claims": [
            {
              "id": "C08-01",
              "claim": "Cash is printed without limit and loses value every year.",
              "on_site": [
                {
                  "page": "/#asset-comparison-read",
                  "location": "figure (table): Cash",
                  "text": "Printed without limit; loses value every year"
                }
              ],
              "category": "economic",
              "priority": "medium",
              "time_sensitive": false,
              "cited_source_on_site": null,
              "research_notes": "See C02-03, C02-04, C04-05.",
              "verification": {
                "status": "unverified",
                "verdict": null,
                "correct_value": null,
                "sources": [],
                "checked_on": null,
                "suggested_rewrite": null
              }
            },
            {
              "id": "C08-02",
              "claim": "Silver and copper prices rise when demand is high and fall when demand drops, because they are relatively cheap to mine more of.",
              "on_site": [
                {
                  "page": "/#asset-comparison-read",
                  "location": "figure (table): Silver & copper",
                  "text": "Rise when demand is high"
                },
                {
                  "page": "/#asset-comparison-read",
                  "location": "figure (table): Silver & copper",
                  "text": "Cheap to mine more; fall when demand drops"
                }
              ],
              "category": "economic",
              "priority": "medium",
              "time_sensitive": false,
              "cited_source_on_site": null,
              "research_notes": "Production cost and price volatility of silver and copper vs. gold; stock-to-flow ratios.",
              "verification": {
                "status": "unverified",
                "verdict": null,
                "correct_value": null,
                "sources": [],
                "checked_on": null,
                "suggested_rewrite": null
              }
            },
            {
              "id": "C08-03",
              "claim": "Gold is hard to produce and has been used as money for thousands of years.",
              "on_site": [
                {
                  "page": "/#asset-comparison-read",
                  "location": "figure (table): Gold",
                  "text": "Hard to produce; money for thousands of years"
                }
              ],
              "category": "historical",
              "priority": "medium",
              "time_sensitive": false,
              "cited_source_on_site": null,
              "research_notes": "Earliest gold coinage (Lydia, ~600 BCE).",
              "verification": {
                "status": "unverified",
                "verdict": null,
                "correct_value": null,
                "sources": [],
                "checked_on": null,
                "suggested_rewrite": null
              }
            },
            {
              "id": "C08-04",
              "claim": "Gold is heavy to move, costly to store, and has been confiscated.",
              "on_site": [
                {
                  "page": "/#asset-comparison-read",
                  "location": "figure (table): Gold",
                  "text": "Heavy to move, costly to store, has been confiscated"
                }
              ],
              "category": "economic",
              "priority": "low",
              "time_sensitive": false,
              "cited_source_on_site": null,
              "research_notes": "Typical storage fees. Confiscation: see C04-08.",
              "verification": {
                "status": "unverified",
                "verdict": null,
                "correct_value": null,
                "sources": [],
                "checked_on": null,
                "suggested_rewrite": null
              }
            },
            {
              "id": "C08-05",
              "claim": "Real estate returns depend on location.",
              "on_site": [
                {
                  "page": "/#asset-comparison-read",
                  "location": "figure (table): Real estate",
                  "text": "Depends on location"
                }
              ],
              "category": "economic",
              "priority": "medium",
              "time_sensitive": false,
              "cited_source_on_site": null,
              "research_notes": "The founder mentioned Philadelphia as a city where prices barely moved. Find data if you want to cite a city.",
              "verification": {
                "status": "unverified",
                "verdict": null,
                "correct_value": null,
                "sources": [],
                "checked_on": null,
                "suggested_rewrite": null
              }
            },
            {
              "id": "C08-06",
              "claim": "Because of property taxes and HOAs, you never fully own real estate.",
              "on_site": [
                {
                  "page": "/#asset-comparison-read",
                  "location": "figure (table): Real estate",
                  "text": "taxes and HOAs mean you never fully own it"
                }
              ],
              "category": "argument",
              "priority": "medium",
              "time_sensitive": false,
              "cited_source_on_site": null,
              "research_notes": "Tax lien and foreclosure rules for unpaid property taxes and HOA dues.",
              "verification": {
                "status": "unverified",
                "verdict": null,
                "correct_value": null,
                "sources": [],
                "checked_on": null,
                "suggested_rewrite": null
              }
            },
            {
              "id": "C08-07",
              "claim": "Most private companies (startups) fail.",
              "on_site": [
                {
                  "page": "/#asset-comparison-read",
                  "location": "figure (table): Private companies",
                  "text": "Most fail"
                }
              ],
              "category": "statistic",
              "priority": "high",
              "time_sensitive": false,
              "cited_source_on_site": null,
              "research_notes": "OUTLINE.md says “9/10 fail”; the site says “most”. Check BLS business survival data and venture outcomes.",
              "verification": {
                "status": "unverified",
                "verdict": null,
                "correct_value": null,
                "sources": [],
                "checked_on": null,
                "suggested_rewrite": null
              }
            },
            {
              "id": "C08-08",
              "claim": "Investing in private companies is mostly limited to people who are already wealthy.",
              "on_site": [
                {
                  "page": "/#asset-comparison-read",
                  "location": "figure (table): Private companies",
                  "text": "access is mostly for the already wealthy"
                }
              ],
              "category": "regulatory",
              "priority": "medium",
              "time_sensitive": false,
              "cited_source_on_site": null,
              "research_notes": "SEC accredited investor rules; Reg CF crowdfunding exceptions.",
              "verification": {
                "status": "unverified",
                "verdict": null,
                "correct_value": null,
                "sources": [],
                "checked_on": null,
                "suggested_rewrite": null
              }
            },
            {
              "id": "C08-09",
              "claim": "With single stocks, your money depends on a CEO’s decisions, and shares can be diluted.",
              "on_site": [
                {
                  "page": "/#asset-comparison-read",
                  "location": "figure (table): Single stocks",
                  "text": "Your money is in a CEO’s hands; shares can be diluted"
                }
              ],
              "category": "economic",
              "priority": "low",
              "time_sensitive": false,
              "cited_source_on_site": null,
              "research_notes": "",
              "verification": {
                "status": "unverified",
                "verdict": null,
                "correct_value": null,
                "sources": [],
                "checked_on": null,
                "suggested_rewrite": null
              }
            },
            {
              "id": "C08-10",
              "claim": "Index funds are the best traditional investment option.",
              "on_site": [
                {
                  "page": "/#asset-comparison-read",
                  "location": "body ¶2",
                  "text": "Of the traditional options, index funds are the best bet."
                },
                {
                  "page": "/#asset-comparison-read",
                  "location": "figure (table): Index funds",
                  "text": "A basket of companies; the best traditional bet"
                }
              ],
              "category": "argument",
              "priority": "medium",
              "time_sensitive": false,
              "cited_source_on_site": null,
              "research_notes": "SPIVA reports on active vs. passive performance; long-run index returns.",
              "verification": {
                "status": "unverified",
                "verdict": null,
                "correct_value": null,
                "sources": [],
                "checked_on": null,
                "suggested_rewrite": null
              }
            },
            {
              "id": "C08-11",
              "claim": "Index funds are still priced in dollars and tied to the financial system.",
              "on_site": [
                {
                  "page": "/#asset-comparison-read",
                  "location": "figure (table): Index funds",
                  "text": "Still priced in dollars and tied to the system"
                }
              ],
              "category": "argument",
              "priority": "low",
              "time_sensitive": false,
              "cited_source_on_site": null,
              "research_notes": "",
              "verification": {
                "status": "unverified",
                "verdict": null,
                "correct_value": null,
                "sources": [],
                "checked_on": null,
                "suggested_rewrite": null
              }
            },
            {
              "id": "C08-12",
              "claim": "Only 21 million bitcoin will ever exist.",
              "on_site": [
                {
                  "page": "/#asset-comparison-read",
                  "location": "figure (table): Bitcoin",
                  "text": "Only 21 million, ever"
                }
              ],
              "category": "technical",
              "priority": "high",
              "time_sensitive": false,
              "cited_source_on_site": null,
              "research_notes": "Same claim as C11-01.",
              "verification": {
                "status": "unverified",
                "verdict": null,
                "correct_value": null,
                "sources": [],
                "checked_on": null,
                "suggested_rewrite": null
              }
            },
            {
              "id": "C08-13",
              "claim": "Anyone can buy bitcoin, with just a phone.",
              "on_site": [
                {
                  "page": "/#asset-comparison-read",
                  "location": "body ¶2",
                  "text": "open to anyone with a phone"
                },
                {
                  "page": "/#asset-comparison-read",
                  "location": "figure (table): Bitcoin",
                  "text": "anyone can buy it"
                }
              ],
              "category": "argument",
              "priority": "medium",
              "time_sensitive": false,
              "cited_source_on_site": null,
              "research_notes": "Consider KYC/ID requirements, the unbanked, and countries with restrictions.",
              "verification": {
                "status": "unverified",
                "verdict": null,
                "correct_value": null,
                "sources": [],
                "checked_on": null,
                "suggested_rewrite": null
              }
            },
            {
              "id": "C08-14",
              "claim": "You can hold bitcoin yourself, without a custodian.",
              "on_site": [
                {
                  "page": "/#asset-comparison-read",
                  "location": "figure (table): Bitcoin",
                  "text": "you can hold it yourself"
                }
              ],
              "category": "technical",
              "priority": "medium",
              "time_sensitive": false,
              "cited_source_on_site": null,
              "research_notes": "Self-custody wallets.",
              "verification": {
                "status": "unverified",
                "verdict": null,
                "correct_value": null,
                "sources": [],
                "checked_on": null,
                "suggested_rewrite": null
              }
            },
            {
              "id": "C08-15",
              "claim": "Bitcoin’s price swings hard in the short term.",
              "on_site": [
                {
                  "page": "/#asset-comparison-read",
                  "location": "figure (table): Bitcoin",
                  "text": "The price swings hard in the short term"
                }
              ],
              "category": "statistic",
              "priority": "medium",
              "time_sensitive": false,
              "cited_source_on_site": null,
              "research_notes": "Historical volatility and drawdowns (e.g. -70%+ bear markets).",
              "verification": {
                "status": "unverified",
                "verdict": null,
                "correct_value": null,
                "sources": [],
                "checked_on": null,
                "suggested_rewrite": null
              }
            },
            {
              "id": "C08-16",
              "claim": "Of the assets listed, only Bitcoin is scarce, open to anyone with a phone, and self-custodiable.",
              "on_site": [
                {
                  "page": "/#asset-comparison-read",
                  "location": "body ¶2",
                  "text": "But only one asset on this list is scarce, open to anyone with a phone, and something you can hold yourself."
                }
              ],
              "category": "argument",
              "priority": "medium",
              "time_sensitive": false,
              "cited_source_on_site": null,
              "research_notes": "Gold is also scarce and can be self-held; check whether the “only one” wording holds up.",
              "verification": {
                "status": "unverified",
                "verdict": null,
                "correct_value": null,
                "sources": [],
                "checked_on": null,
                "suggested_rewrite": null
              }
            },
            {
              "id": "C08-17",
              "claim": "Bitcoin’s main flaw, volatility, fades over time.",
              "on_site": [
                {
                  "page": "/#asset-comparison-read",
                  "location": "takeaway",
                  "text": "Every asset has a flaw. Pick the one whose flaw fades with time."
                }
              ],
              "category": "statistic",
              "priority": "medium",
              "time_sensitive": true,
              "cited_source_on_site": null,
              "research_notes": "Trend in Bitcoin’s realized volatility over its history.",
              "verification": {
                "status": "unverified",
                "verdict": null,
                "correct_value": null,
                "sources": [],
                "checked_on": null,
                "suggested_rewrite": null
              }
            }
          ]
        },
        {
          "number": 9,
          "slug": "the-landlord-trap",
          "title": "Real Estate & the Landlord Trap",
          "url": "/#the-landlord-trap",
          "claims": [
            {
              "id": "C09-01",
              "claim": "When a property’s value rises, its property tax rises.",
              "on_site": [
                {
                  "page": "/#the-landlord-trap-read",
                  "location": "body ¶2",
                  "text": "Your property’s value rises, so your property tax rises."
                },
                {
                  "page": "/#the-landlord-trap-read",
                  "location": "figure (cycle)",
                  "text": "Home values rise → Property taxes rise"
                }
              ],
              "category": "regulatory",
              "priority": "medium",
              "time_sensitive": false,
              "cited_source_on_site": null,
              "research_notes": "Varies by state; assessment caps exist (e.g. California Prop 13).",
              "verification": {
                "status": "unverified",
                "verdict": null,
                "correct_value": null,
                "sources": [],
                "checked_on": null,
                "suggested_rewrite": null
              }
            },
            {
              "id": "C09-02",
              "claim": "Landlords raise rents to pass on higher property taxes, so tenants have to work more hours.",
              "on_site": [
                {
                  "page": "/#the-landlord-trap-read",
                  "location": "body ¶2",
                  "text": "Your cash flow shrinks. To stay profitable, you raise the rent. Now your tenants work more hours to pay you"
                },
                {
                  "page": "/#the-landlord-trap-read",
                  "location": "figure (cycle)",
                  "text": "Cash flow shrinks → Rent goes up → Tenants work more"
                }
              ],
              "category": "economic",
              "priority": "medium",
              "time_sensitive": false,
              "cited_source_on_site": null,
              "research_notes": "Research on property tax pass-through to renters.",
              "verification": {
                "status": "unverified",
                "verdict": null,
                "correct_value": null,
                "sources": [],
                "checked_on": null,
                "suggested_rewrite": null
              }
            },
            {
              "id": "C09-03",
              "claim": "Rising costs start with the government making things more expensive for landlords.",
              "on_site": [
                {
                  "page": "/#the-landlord-trap-read",
                  "location": "body ¶2",
                  "text": "because the government made things more expensive for you first."
                }
              ],
              "category": "argument",
              "priority": "low",
              "time_sensitive": false,
              "cited_source_on_site": null,
              "research_notes": "",
              "verification": {
                "status": "unverified",
                "verdict": null,
                "correct_value": null,
                "sources": [],
                "checked_on": null,
                "suggested_rewrite": null
              }
            },
            {
              "id": "C09-04",
              "claim": "When Section 8 rents rise, the government has to borrow or tax more to cover the higher payments, and the cost lands on everyone.",
              "on_site": [
                {
                  "page": "/#the-landlord-trap-read",
                  "location": "body ¶3",
                  "text": "If you rent through Section 8, the government has to borrow or tax more to cover the higher payments. The cost lands on everyone."
                }
              ],
              "category": "economic",
              "priority": "medium",
              "time_sensitive": false,
              "cited_source_on_site": null,
              "research_notes": "HUD Housing Choice Voucher payment standards and Fair Market Rents; program funding.",
              "verification": {
                "status": "unverified",
                "verdict": null,
                "correct_value": null,
                "sources": [],
                "checked_on": null,
                "suggested_rewrite": null
              }
            },
            {
              "id": "C09-05",
              "claim": "Landlords pass inflation down to tenants.",
              "on_site": [
                {
                  "page": "/#the-landlord-trap-read",
                  "location": "body ¶4",
                  "text": "Either way, you’ve become part of the pipeline that passes inflation down to the next person."
                },
                {
                  "page": "/#the-landlord-trap-read",
                  "location": "quote",
                  "text": "Whether it’s the government raising prices or you raising prices, it’s the same thing."
                }
              ],
              "category": "argument",
              "priority": "low",
              "time_sensitive": false,
              "cited_source_on_site": null,
              "research_notes": "",
              "verification": {
                "status": "unverified",
                "verdict": null,
                "correct_value": null,
                "sources": [],
                "checked_on": null,
                "suggested_rewrite": null
              }
            },
            {
              "id": "C09-06",
              "claim": "Sharecropping meant working land you didn’t own while always in debt to someone higher up.",
              "on_site": [
                {
                  "page": "/#the-landlord-trap-read",
                  "location": "body ¶4",
                  "text": "Think of sharecropping: working land you don’t own, always in debt to someone higher up."
                }
              ],
              "category": "historical",
              "priority": "medium",
              "time_sensitive": false,
              "cited_source_on_site": null,
              "research_notes": "Confirm the historical description; decide whether the analogy to landlords holds up.",
              "verification": {
                "status": "unverified",
                "verdict": null,
                "correct_value": null,
                "sources": [],
                "checked_on": null,
                "suggested_rewrite": null
              }
            },
            {
              "id": "C09-07",
              "claim": "When homes become investments, people who just need somewhere to live get priced out.",
              "on_site": [
                {
                  "page": "/#the-landlord-trap-read",
                  "location": "body ¶5",
                  "text": "When homes become investments, the people who just need somewhere to live get priced out."
                }
              ],
              "category": "economic",
              "priority": "medium",
              "time_sensitive": false,
              "cited_source_on_site": null,
              "research_notes": "Research on institutional investors and home prices. The founder mentioned China’s housing market as an example.",
              "verification": {
                "status": "unverified",
                "verdict": null,
                "correct_value": null,
                "sources": [],
                "checked_on": null,
                "suggested_rewrite": null
              }
            },
            {
              "id": "C09-08",
              "claim": "Inflation reduces happiness; falling prices would increase it.",
              "on_site": [
                {
                  "page": "/#the-landlord-trap-read",
                  "location": "takeaway",
                  "text": "More inflation, less happiness. Falling prices would give it back."
                }
              ],
              "category": "argument",
              "priority": "low",
              "time_sensitive": false,
              "cited_source_on_site": null,
              "research_notes": "Research on inflation and subjective well-being (misery index).",
              "verification": {
                "status": "unverified",
                "verdict": null,
                "correct_value": null,
                "sources": [],
                "checked_on": null,
                "suggested_rewrite": null
              }
            }
          ]
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
          "claims": [
            {
              "id": "C10-01",
              "claim": "American society treats people who aren’t working for an employer during the workday as unproductive.",
              "on_site": [
                {
                  "page": "/#redefining-productivity-read",
                  "location": "body ¶2",
                  "text": "Capitalist America says they’re unproductive, and it will crack the whip until they get back to work."
                }
              ],
              "category": "argument",
              "priority": "low",
              "time_sensitive": false,
              "cited_source_on_site": null,
              "research_notes": "",
              "verification": {
                "status": "unverified",
                "verdict": null,
                "correct_value": null,
                "sources": [],
                "checked_on": null,
                "suggested_rewrite": null
              }
            },
            {
              "id": "C10-02",
              "claim": "Society’s definition of productivity is narrow: working for a corporation, not reading, raising children, or helping neighbors.",
              "on_site": [
                {
                  "page": "/#redefining-productivity-read",
                  "location": "body ¶2",
                  "text": "Its idea of productive is narrow: working for a corporation. Not reading. Not raising your kids. Not checking on your neighbor."
                }
              ],
              "category": "argument",
              "priority": "low",
              "time_sensitive": false,
              "cited_source_on_site": null,
              "research_notes": "GDP excludes unpaid household and care work.",
              "verification": {
                "status": "unverified",
                "verdict": null,
                "correct_value": null,
                "sources": [],
                "checked_on": null,
                "suggested_rewrite": null
              }
            },
            {
              "id": "C10-03",
              "claim": "Full-time work leaves little time to build community.",
              "on_site": [
                {
                  "page": "/#redefining-productivity-read",
                  "location": "body ¶3",
                  "text": "Yet that garage is where community gets built. You can’t build community from nine to five."
                }
              ],
              "category": "argument",
              "priority": "low",
              "time_sensitive": false,
              "cited_source_on_site": null,
              "research_notes": "Research on work hours and civic participation (e.g. Putnam, Bowling Alone).",
              "verification": {
                "status": "unverified",
                "verdict": null,
                "correct_value": null,
                "sources": [],
                "checked_on": null,
                "suggested_rewrite": null
              }
            },
            {
              "id": "C10-04",
              "claim": "Creative work can’t be done on a fixed schedule.",
              "on_site": [
                {
                  "page": "/#redefining-productivity-read",
                  "location": "body ¶3",
                  "text": "Artists know it too. You can’t clock in to create."
                }
              ],
              "category": "argument",
              "priority": "low",
              "time_sensitive": false,
              "cited_source_on_site": null,
              "research_notes": "",
              "verification": {
                "status": "unverified",
                "verdict": null,
                "correct_value": null,
                "sources": [],
                "checked_on": null,
                "suggested_rewrite": null
              }
            },
            {
              "id": "C10-05",
              "claim": "Holding money that grows in value makes your life cheaper over time, so you need to sell fewer hours of work.",
              "on_site": [
                {
                  "page": "/#redefining-productivity-read",
                  "location": "body ¶4",
                  "text": "Hold money that grows in value and your life gets cheaper over time. A cheaper life means fewer hours sold."
                },
                {
                  "page": "/#redefining-productivity-read",
                  "location": "takeaway",
                  "text": "Time is the real wealth. Bitcoin is a way to buy it back."
                }
              ],
              "category": "argument",
              "priority": "medium",
              "time_sensitive": false,
              "cited_source_on_site": null,
              "research_notes": "",
              "verification": {
                "status": "unverified",
                "verdict": null,
                "correct_value": null,
                "sources": [],
                "checked_on": null,
                "suggested_rewrite": null
              }
            }
          ]
        },
        {
          "number": 11,
          "slug": "the-bitcoin-solution",
          "title": "The Bitcoin Solution",
          "url": "/#the-bitcoin-solution",
          "claims": [
            {
              "id": "C11-01",
              "claim": "Only 21 million bitcoin will ever exist.",
              "on_site": [
                {
                  "page": "/#the-bitcoin-solution-read",
                  "location": "body ¶1",
                  "text": "Only 21 million bitcoin will ever exist."
                },
                {
                  "page": "/#the-bitcoin-solution-read",
                  "location": "figure (stats)",
                  "text": "21M bitcoin will ever exist"
                }
              ],
              "category": "technical",
              "priority": "high",
              "time_sensitive": false,
              "cited_source_on_site": null,
              "research_notes": "Protocol supply cap (just under 21M due to rounding).",
              "verification": {
                "status": "unverified",
                "verdict": null,
                "correct_value": null,
                "sources": [],
                "checked_on": null,
                "suggested_rewrite": null
              }
            },
            {
              "id": "C11-02",
              "claim": "No government, bank or company can create more bitcoin.",
              "on_site": [
                {
                  "page": "/#the-bitcoin-solution-read",
                  "location": "body ¶1",
                  "text": "No government, bank or company can print more."
                }
              ],
              "category": "technical",
              "priority": "high",
              "time_sensitive": false,
              "cited_source_on_site": null,
              "research_notes": "Explain consensus rules and what it would take to change the supply cap.",
              "verification": {
                "status": "unverified",
                "verdict": null,
                "correct_value": null,
                "sources": [],
                "checked_on": null,
                "suggested_rewrite": null
              }
            },
            {
              "id": "C11-03",
              "claim": "Bitcoin is as scarce as gold, but without the storage, transport and confiscation problems.",
              "on_site": [
                {
                  "page": "/#the-bitcoin-solution-read",
                  "location": "body ¶1",
                  "text": "It has the scarcity of gold, without the vault, the truck or the confiscation order."
                }
              ],
              "category": "argument",
              "priority": "medium",
              "time_sensitive": false,
              "cited_source_on_site": null,
              "research_notes": "Compare supply growth rates (Bitcoin post-2024 halving vs. gold ~1.5–2%/yr). Check whether Bitcoin can be seized in practice (exchange accounts, court orders).",
              "verification": {
                "status": "unverified",
                "verdict": null,
                "correct_value": null,
                "sources": [],
                "checked_on": null,
                "suggested_rewrite": null
              }
            },
            {
              "id": "C11-04",
              "claim": "Historically, people who held bitcoin for four years or more usually came out ahead.",
              "on_site": [
                {
                  "page": "/#the-bitcoin-solution-read",
                  "location": "body ¶2",
                  "text": "Historically, people who held through the swings for four years or more have usually come out ahead"
                }
              ],
              "category": "statistic",
              "priority": "high",
              "time_sensitive": true,
              "cited_source_on_site": null,
              "research_notes": "Compute the share of all days where buying and holding 4 years produced a gain. State the period and data source.",
              "verification": {
                "status": "unverified",
                "verdict": null,
                "correct_value": null,
                "sources": [],
                "checked_on": null,
                "suggested_rewrite": null
              }
            },
            {
              "id": "C11-05",
              "claim": "Demand for bitcoin has kept growing while supply can’t grow the same way.",
              "on_site": [
                {
                  "page": "/#the-bitcoin-solution-read",
                  "location": "body ¶2",
                  "text": "because demand has kept growing and supply can’t."
                }
              ],
              "category": "statistic",
              "priority": "medium",
              "time_sensitive": true,
              "cited_source_on_site": null,
              "research_notes": "Proxies for demand growth: active addresses, holders, ETF flows. Issuance schedule.",
              "verification": {
                "status": "unverified",
                "verdict": null,
                "correct_value": null,
                "sources": [],
                "checked_on": null,
                "suggested_rewrite": null
              }
            },
            {
              "id": "C11-06",
              "claim": "You don’t need to be rich, accredited or connected to buy bitcoin.",
              "on_site": [
                {
                  "page": "/#the-bitcoin-solution-read",
                  "location": "body ¶3",
                  "text": "You don’t need to be rich, accredited or connected."
                }
              ],
              "category": "regulatory",
              "priority": "medium",
              "time_sensitive": false,
              "cited_source_on_site": null,
              "research_notes": "",
              "verification": {
                "status": "unverified",
                "verdict": null,
                "correct_value": null,
                "sources": [],
                "checked_on": null,
                "suggested_rewrite": null
              }
            },
            {
              "id": "C11-07",
              "claim": "You can start buying bitcoin with $10 on your phone.",
              "on_site": [
                {
                  "page": "/#the-bitcoin-solution-read",
                  "location": "body ¶3",
                  "text": "You can start with $10 on your phone"
                },
                {
                  "page": "/#the-bitcoin-solution-read",
                  "location": "figure (stats)",
                  "text": "$10 is enough to start"
                }
              ],
              "category": "statistic",
              "priority": "medium",
              "time_sensitive": true,
              "cited_source_on_site": null,
              "research_notes": "Minimum purchase amounts on major U.S. apps; fees on small buys.",
              "verification": {
                "status": "unverified",
                "verdict": null,
                "correct_value": null,
                "sources": [],
                "checked_on": null,
                "suggested_rewrite": null
              }
            },
            {
              "id": "C11-08",
              "claim": "You don’t have to buy a whole bitcoin.",
              "on_site": [
                {
                  "page": "/#the-bitcoin-solution-read",
                  "location": "body ¶3",
                  "text": "and you don’t have to buy a whole coin."
                }
              ],
              "category": "technical",
              "priority": "high",
              "time_sensitive": false,
              "cited_source_on_site": null,
              "research_notes": "",
              "verification": {
                "status": "unverified",
                "verdict": null,
                "correct_value": null,
                "sources": [],
                "checked_on": null,
                "suggested_rewrite": null
              }
            },
            {
              "id": "C11-09",
              "claim": "One bitcoin is made up of 100 million sats (satoshis).",
              "on_site": [
                {
                  "page": "/#the-bitcoin-solution-read",
                  "location": "figure (stats)",
                  "text": "100M sats make up one bitcoin"
                }
              ],
              "category": "technical",
              "priority": "high",
              "time_sensitive": false,
              "cited_source_on_site": null,
              "research_notes": "",
              "verification": {
                "status": "unverified",
                "verdict": null,
                "correct_value": null,
                "sources": [],
                "checked_on": null,
                "suggested_rewrite": null
              }
            },
            {
              "id": "C11-10",
              "claim": "You can use bitcoin to pay people directly, outside the banking system.",
              "on_site": [
                {
                  "page": "/#the-bitcoin-solution-read",
                  "location": "body ¶4",
                  "text": "You can use it outside the system, paying people directly as long as they value it too."
                }
              ],
              "category": "technical",
              "priority": "medium",
              "time_sensitive": false,
              "cited_source_on_site": null,
              "research_notes": "Peer-to-peer payments; Lightning Network; tax reporting implications.",
              "verification": {
                "status": "unverified",
                "verdict": null,
                "correct_value": null,
                "sources": [],
                "checked_on": null,
                "suggested_rewrite": null
              }
            },
            {
              "id": "C11-11",
              "claim": "As bitcoin’s price rises, groceries cost more in dollars but less in bitcoin.",
              "on_site": [
                {
                  "page": "/#the-bitcoin-solution-read",
                  "location": "body ¶4",
                  "text": "As bitcoin rises, groceries cost more in dollars but less in bitcoin."
                }
              ],
              "category": "statistic",
              "priority": "medium",
              "time_sensitive": true,
              "cited_source_on_site": null,
              "research_notes": "Example: price of a grocery basket in sats over time. Only true when BTC rises faster than food prices.",
              "verification": {
                "status": "unverified",
                "verdict": null,
                "correct_value": null,
                "sources": [],
                "checked_on": null,
                "suggested_rewrite": null
              }
            },
            {
              "id": "C11-12",
              "claim": "Bitcoin is still early in its adoption.",
              "on_site": [
                {
                  "page": "/#the-bitcoin-solution-read",
                  "location": "body ¶5",
                  "text": "We’re still early."
                },
                {
                  "page": "/#the-bitcoin-solution-read",
                  "location": "quote",
                  "text": "We’re in the very beginning stages. The beginning is always the rockiest, wildest time."
                }
              ],
              "category": "statistic",
              "priority": "medium",
              "time_sensitive": true,
              "cited_source_on_site": null,
              "research_notes": "Estimates of global ownership (% of population).",
              "verification": {
                "status": "unverified",
                "verdict": null,
                "correct_value": null,
                "sources": [],
                "checked_on": null,
                "suggested_rewrite": null
              }
            },
            {
              "id": "C11-13",
              "claim": "Apple, Amazon and Disney all had rocky, volatile beginnings.",
              "on_site": [
                {
                  "page": "/#the-bitcoin-solution-read",
                  "location": "body ¶5",
                  "text": "Apple, Amazon and Disney all had rocky, wild beginnings."
                }
              ],
              "category": "historical",
              "priority": "medium",
              "time_sensitive": false,
              "cited_source_on_site": null,
              "research_notes": "Examples: Disney’s early bankruptcy (Laugh-O-Gram), Apple near-bankruptcy 1997, Amazon −90% in the dot-com crash.",
              "verification": {
                "status": "unverified",
                "verdict": null,
                "correct_value": null,
                "sources": [],
                "checked_on": null,
                "suggested_rewrite": null
              }
            },
            {
              "id": "C11-14",
              "claim": "By the time an investment becomes obvious, most of the wealth has already been made.",
              "on_site": [
                {
                  "page": "/#the-bitcoin-solution-read",
                  "location": "body ¶5",
                  "text": "By the time something becomes obvious, most of the wealth has already been made."
                }
              ],
              "category": "argument",
              "priority": "medium",
              "time_sensitive": false,
              "cited_source_on_site": null,
              "research_notes": "",
              "verification": {
                "status": "unverified",
                "verdict": null,
                "correct_value": null,
                "sources": [],
                "checked_on": null,
                "suggested_rewrite": null
              }
            }
          ]
        },
        {
          "number": null,
          "slug": "where-to-start",
          "title": "Where to Start",
          "url": "/#where-to-start",
          "claims": [
            {
              "id": "S-01",
              "claim": "Bitcoin investors should expect big price swings.",
              "on_site": [
                {
                  "page": "/#where-to-start",
                  "location": "step 1",
                  "text": "Expect big price swings and decide now that you won’t panic-sell."
                }
              ],
              "category": "statistic",
              "priority": "low",
              "time_sensitive": false,
              "cited_source_on_site": null,
              "research_notes": "See C08-15.",
              "verification": {
                "status": "unverified",
                "verdict": null,
                "correct_value": null,
                "sources": [],
                "checked_on": null,
                "suggested_rewrite": null
              }
            },
            {
              "id": "S-02",
              "claim": "Money put into bitcoin should be money you won’t need for at least five years.",
              "on_site": [
                {
                  "page": "/#where-to-start",
                  "location": "step 2",
                  "text": "Start with money you won’t need for at least five years."
                }
              ],
              "category": "argument",
              "priority": "medium",
              "time_sensitive": false,
              "cited_source_on_site": null,
              "research_notes": "Relates to C11-04 (four-year holding claim); make the two consistent.",
              "verification": {
                "status": "unverified",
                "verdict": null,
                "correct_value": null,
                "sources": [],
                "checked_on": null,
                "suggested_rewrite": null
              }
            },
            {
              "id": "S-03",
              "claim": "An exchange can freeze or lose your funds.",
              "on_site": [
                {
                  "page": "/#where-to-start",
                  "location": "step 3",
                  "text": "An exchange can freeze or lose your funds."
                }
              ],
              "category": "historical",
              "priority": "high",
              "time_sensitive": false,
              "cited_source_on_site": null,
              "research_notes": "Examples: Mt. Gox (2014), FTX (2022), Celsius withdrawal freeze (2022).",
              "verification": {
                "status": "unverified",
                "verdict": null,
                "correct_value": null,
                "sources": [],
                "checked_on": null,
                "suggested_rewrite": null
              }
            },
            {
              "id": "S-04",
              "claim": "A self-custody wallet puts you in control of your bitcoin.",
              "on_site": [
                {
                  "page": "/#where-to-start",
                  "location": "step 3",
                  "text": "A self-custody wallet puts you in control."
                }
              ],
              "category": "technical",
              "priority": "medium",
              "time_sensitive": false,
              "cited_source_on_site": null,
              "research_notes": "",
              "verification": {
                "status": "unverified",
                "verdict": null,
                "correct_value": null,
                "sources": [],
                "checked_on": null,
                "suggested_rewrite": null
              }
            },
            {
              "id": "S-05",
              "claim": "Whoever has a wallet’s recovery phrase controls the bitcoin in it.",
              "on_site": [
                {
                  "page": "/#where-to-start",
                  "location": "step 4",
                  "text": "Whoever has the words has the bitcoin."
                }
              ],
              "category": "technical",
              "priority": "high",
              "time_sensitive": false,
              "cited_source_on_site": null,
              "research_notes": "BIP39 seed phrases; note passphrase and multisig exceptions.",
              "verification": {
                "status": "unverified",
                "verdict": null,
                "correct_value": null,
                "sources": [],
                "checked_on": null,
                "suggested_rewrite": null
              }
            },
            {
              "id": "S-06",
              "claim": "Small, regular purchases (dollar-cost averaging) beat trying to time the market.",
              "on_site": [
                {
                  "page": "/#where-to-start",
                  "location": "step 5",
                  "text": "Small, regular buys beat trying to time the market."
                }
              ],
              "category": "economic",
              "priority": "medium",
              "time_sensitive": false,
              "cited_source_on_site": null,
              "research_notes": "Research is mixed: lump-sum often beats DCA on average; DCA beats poor timing. Consider softening the wording.",
              "verification": {
                "status": "unverified",
                "verdict": null,
                "correct_value": null,
                "sources": [],
                "checked_on": null,
                "suggested_rewrite": null
              }
            }
          ]
        }
      ]
    }
  ]
}
```
