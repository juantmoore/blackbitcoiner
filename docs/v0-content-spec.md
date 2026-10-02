# V0 Content Spec (iteration 2)

Exact copy for `lib/book.ts`. Transcribe it faithfully. Do not rewrite it.

Conventions:
- In prose, use curly typography, matching the existing file: ’ for apostrophes, “ ” for quotes, and – for number ranges where written. Keep the "—" as written.
- `## Heading` = a body subheading. `**text**` = bold.
- `[FIG n]` = insert figure n at this point in the body. Each figure's `at` = the number of body entries before it.
- Chart series come from `lib/chart-data.ts` (already generated; do not edit the numbers).
- Unchanged fields (slug, number, part, title) stay as they are. Chapter 9 is unchanged except for converting it to `figures`.

---

## Ch 1 The Black Paradox
quote: They survived so we could live. Now it's time to thrive, for real this time, by owning what no one can take.
hook: What does wealth actually look like?
body:
- (keep existing paragraph 1: "Among successful Black Americans...")
- (keep existing paragraph 2: "That's not the picture our kids see...")
- [FIG 1]
- Here's the hard truth: buying Jordans, a Birkin or a designer jacket proves one thing. Money was spent. It doesn't prove anyone is wealthy.
- Ask yourself: what made you want them in the first place? Nobody is born wanting a logo. That desire was sold to us, one ad, one video, one co-sign at a time. That's how consumer capitalism works.
- Style has a proud history for us. For centuries, Black people used sharp dress to claim dignity in a world that denied it. Scholars call it Black dandyism, and in 2025 the Metropolitan Museum of Art honored it with a major exhibit.
- But most of what we buy today loses value the moment we wear it. A few rare pieces, like some Hermès bags, are the exception, and even those are hard to get. Holding the rest is like slowly burning money.
- You don't need a label to prove your worth. You are valuable because you exist.
- (keep existing paragraph 3: "Pointing this out isn't enough...")
FIG 1 stats:
- 51.6M | Black American population (2024)
- $1.6T | brought home each year after taxes (2021)
- $44,900 | median Black household wealth | note: The typical white household has $285,000, more than six times as much (2022).
source: U.S. Census Bureau, American Community Survey 2024; Selig Center for Economic Growth, University of Georgia (2021); Federal Reserve Survey of Consumer Finances 2022.
sources: Monica L. Miller, Slaves to Fashion (Duke University Press, 2009); The Metropolitan Museum of Art, “Superfine: Tailoring Black Style” (2025); Rebag Clair Report (2025).
takeaway: We earn like a wealthy nation and own like a poor one.

## Ch 2 The Two Problems
hook: There are two problems.
body:
- **Problem one** is the money itself. Banks and governments create new dollars whenever they decide to. Every new dollar makes the ones in your pocket worth a little less.
- That's what inflation used to mean: creating too much money. Today most economists use the word for rising prices. But rising prices are the symptom. More money is often the cause.
- Think about Monopoly. If the bank could print as much money as it wanted, the cash in your hand would be worth less every round. Nobody would want to hold it. That's the game we're all playing.
- **Problem two** is what we own. The wealth gap isn't mainly about paychecks. It's about assets: homes, businesses, land, investments. Things that grow while you sleep. We have far fewer of them.
- Put them together and you get a trap. The thing we hold most of, cash, is the thing losing value fastest.
- [FIG 1] (the existing compare figure, unchanged)
- ## Owning things vs. owning assets
- We own plenty of things. We don't own many assets. An asset puts money in your pocket or grows in value. Most of what we buy does the opposite.
- A new car loses 15% to 20% of its value in the first year and about half within five years. Miss enough payments and it can be taken back. In early 2026, a record 6.9% of subprime car loans were at least two months behind.
- [FIG 2]
- Clothes lose value the day you wear them. One splash of bleach and a $1,000 jacket is worth nothing.
- Jewelry only holds value if it's real gold or another precious metal. Even famous brands and lab-grown diamonds lose value. Wholesale prices for lab-grown diamonds have fallen about 96% since 2018.
- ## F-You money
- Wealth is freedom. Some people call it F-You money: enough saved that nobody can push you around.
- It's being able to leave a job where you're disrespected. Take time off when your mother gets sick. Move to a better city, choose your kids' school, and say what you think without worrying about who signs your check.
- Too few of us have it. Only 43% of Black adults say they'd cover a surprise $400 bill with cash or its equivalent, compared with 71% of white adults.
FIG 2 line: title "A new car’s value, year by year" | series carSeries, label "Value kept", tone accent | x = years since purchase (0–5, label "Year 0"…"Year 5") | y format pct | alt "A new car keeps about 84% of its value after one year and 45% after five." | source: Kelley Blue Book, typical depreciation.
sources: Fitch Ratings (Jan 2026); Edahn Golan Diamond Research via JCK (2026); Federal Reserve, Survey of Household Economics and Decisionmaking (2024).
takeaway: (unchanged)

## Ch 3 Historical Foundation
hook: How did we get here?
body:
- (keep existing paragraph 1: "It started with extraction...")
- (keep existing paragraph 2: "That's why Black banks matter...")
- [FIG 1]
- ## You are not the problem
- Look at that timeline again. Every time we built something, the rules changed or the mob came. You have been bamboozled. You are not the problem.
- You are fighting an uphill battle against a system that didn't want you to read, didn't want you to be seen as human, and didn't want you to hold capital.
- When we say “the system,” we mean something specific: the financial-industrial complex, working hand in hand with the courts and the government. Banks decide who gets capital. Courts decide who keeps it. Government writes the rules for both.
- And the system will always remind you that what you have can be taken.
- Playing into consumerism and staying in the dark about money keeps that system running. Learning how it works is the first step out.
- (keep existing paragraph 3: "Here's what the world rarely tells you...")
FIG 1 timeline (replaces the existing one):
- 1865 | The Freedman’s Savings Bank is chartered to serve formerly enslaved people.
- 1865–66 | Southern states pass Black Codes that make it a crime for Black people to be without a job. Workers who quit could be arrested and returned.
- 1865–1928 | A loophole in the 13th Amendment lets states lease Black prisoners to companies. Alabama is the last to end convict leasing, in 1928.
- 1860s–1940s | Sharecroppers borrow against next year’s crop. At settlement time, many end the year owing more than they earned.
- 1874 | The Freedman’s Bank fails. Congress had loosened its rules in 1870, and a trustee steered its money toward his family’s bank. 61,144 depositors lose nearly $3 million. Most never get it all back.
- 1877–1965 | Jim Crow laws enforce segregation across the South.
- 1921 | A white mob burns Greenwood in Tulsa, the neighborhood known as Black Wall Street.
- 1930s | Federal “redlining” maps mark Black neighborhoods as too risky for loans.
- 1944 | The GI Bill promises veterans home and business loans. In 1947, a survey of 13 Mississippi cities found just 2 of 3,229 VA-backed loans went to Black veterans.
- 1999 | In Pigford v. Glickman, the USDA settles with Black farmers over years of loan discrimination. A second $1.25 billion settlement follows in 2010.
source: Office of the Comptroller of the Currency; National Constitution Center; Equal Justice Initiative; NCpedia; Ira Katznelson, When Affirmative Action Was White (2005); Congressional Research Service RS20430; Tulsa Race Massacre Commission (2001); Mapping Inequality, University of Richmond.
takeaway: (unchanged)

## Ch 4 The Fiat System
body:
- (keep existing paragraphs 1 and 2)
- [FIG 1]
- (keep existing paragraphs 3 and 4)
- ## Credit scores: a fiat product
- Your credit score is a product of the fiat system. It's a gate. It decides whether you get the apartment, the car or the business loan, and how much extra you pay for it.
- In majority-Black neighborhoods, the median credit score is about 100 points lower than in majority-white ones.
- Here's what nobody tells you: the wealthy barely think about credit scores. They pay cash, or they borrow against assets they already own.
- So ask yourself: would you rather have $500,000 in cash or an 800 credit score?
- ## The rich make the rules
- When we say “the rich,” we don't just mean someone with a million dollars. We mean the people at the top: politicians, bank owners, the board of the Federal Reserve.
- The rich get richer because the rich make the rules. One major study found U.S. policy tracks what the wealthy want far more than what average voters want.
- Here's how the money flows:
- [FIG 2]
- If inflation robs us, why does the Fed have a target for it? Keep that question in mind. We'll answer it in the next chapter.
FIG 1 timeline (existing, with two edits):
- 1933 text → Executive Order 6102 orders Americans to turn in most of their gold.
- 1971 text → President Nixon stops letting foreign governments trade dollars for gold. Americans had already lost that right in 1933.
FIG 2 flow: title "The house always wins" | steps: The Fed buys government debt with new money → The government regulates the banks and backs them when they fail → The banks decide who gets capital → The government writes the laws for all of it
sources: Urban Institute (2022); Gilens & Page, Perspectives on Politics (2014); Federal Reserve H.4.1 (Sept 2026).
takeaway: (unchanged)

## Ch 5 Inflation
subtitle: The silent tax
body:
- Picture it. It's 1971. You stuff $10,000 in a mattress and leave it. Your neighbor puts the same $10,000 into gold, about 285 ounces at $35 each. (Americans couldn't legally own gold bars again until 1975, so call it a what-if.)
- Today your cash buys roughly what $1,210 bought back then. It has lost almost 90% of its buying power. Your neighbor's gold is worth more than $1 million.
- [FIG 1]
- (keep existing paragraph 3: "The gold didn't get better...")
- ## A better word for inflation
- Try swapping the word “inflation” for what it really is: a silent tax, or the devaluation of your cash. Nobody votes on it, but it takes a cut of every hour you work.
- A dollar from 1913, the year the Federal Reserve was created, now buys about 3 cents' worth of goods.
- [FIG 2]
- Only about 1 in 10 dollars even exists as paper cash. The rest is numbers in bank accounts, and more can be created with a keystroke. In early 2021, the money supply grew about 27% in a single year.
- [FIG 3]
- The official number says inflation runs a few percent a year. Your grocery receipt says otherwise. Food prices jumped almost 24% from 2020 to 2024. The “core” number you hear most leaves out food and gas, and the price index doesn't count home prices at all, only what it would cost to rent your home.
- [FIG 4]
- ## Where did 2% come from?
- The Federal Reserve aims for 2% inflation a year. In other words, it plans for your dollar to lose value. The idea started in New Zealand around 1990, and the Fed made it official in 2012. It's a policy choice, not a law of nature. So why choose a target that makes savers poorer?
- ## Time is money
- In the movie In Time, people pay for everything with minutes of their lives. The rich live forever. The poor run out of time. That's not far from the truth. Money buys you time. Freedom costs.
- Every time we put clothes, vacations or gambling on credit, we aren't just spending money. We're burning freedom.
- Debt keeps you obligated to keep working. A system that wants your labor wants you in debt, because people in debt accept whatever terms they're given.
FIG 1 bars (existing): cash note → "Buys what about $1,210 did in 1971"; gold display → "$1M+"; gold note → "About $1.18 million at September 2026 prices"; source → "BLS CPI-U (Aug 2026); gold $35/oz (1971) and about $4,100/oz (Sept 2026)." Put a code comment above it: recheck the gold price before launch.
FIG 2 line: title "What a 1913 dollar buys today" | series dollarSeries, label "Cents", tone accent | y format cents | alt "A 1913 dollar now buys about 3 cents' worth of goods." | source: BLS Consumer Price Index (CPI-U), 1913–Aug 2026.
FIG 3 line: title "Dollars that exist vs. paper cash" | series moneyM2Series label "All money (M2)" tone accent; moneyCashSeries label "Paper cash" tone muted | y format trillions | alt "M2 grew from $0.7 trillion in 1971 to $23.3 trillion in 2026, while paper cash is about $2.5 trillion." | source: Federal Reserve via FRED (M2SL, MBCURRCIR), Aug 2026.
FIG 4 line: title "Food prices since 2019" | series foodSeries label "Food prices (2019 = 100)" tone accent | y format index | alt "Food prices are about 33% higher than in 2019." | source: BLS CPI-U, food (CUUR0000SAF11); USDA Economic Research Service.
sources: Federal Reserve Bank of Cleveland (inflation targeting history).
takeaway: (unchanged)

## Ch 6 Zombie Companies & Bailouts
body:
- (keep existing paragraph 1: "A zombie company doesn't make a profit...")
- How many are there? By one standard definition, from the Bank for International Settlements, zombie firms grew from about 4% of listed companies in rich countries in the mid-1980s to about 15% by 2017. That's roughly 1 in 7.
- During COVID, the government sent out nearly $800 billion in PPP loans, and 91% were fully or partly forgiven. Some of it saved good businesses. A lot of it kept failing ones on life support, paid for with newly created money.
- The 2008 bailout, called TARP, paid out $443 billion. Most of it came back, and it still cost taxpayers $31 billion. But the real cost isn't the dollar total. It's the lesson: the biggest players learned they'd be rescued. Families losing their homes didn't get that deal.
- [FIG 1]
- ## Buy it, borrow, bleed it
- Private equity firms buy companies with borrowed money, put the debt on the company's books, pull cash out, and leave workers with pink slips.
- Payless ShoeSource was bought in a leveraged buyout in 2012, then went bankrupt in 2017 and again in 2019. Joann, the fabric and craft store, was bought in a roughly $1.6 billion buyout in 2011, went bankrupt in 2024 and again in 2025, and closed for good.
- ## Socialism for them
- America says it hates socialism. But when banks and big corporations fail, they get rescued with our tax dollars. Call it what it is: capitalism for you, socialism for them. When big players lose, they get bailouts. When you lose, you get a late fee.
- [FIG 2]
- (keep existing paragraph 5: "Failure is healthy...")
- Interest on the national debt is heading toward record highs. The Congressional Budget Office expects it to more than double by 2036, to $2.1 trillion a year. So here's a question to sit with: will your taxes be higher or lower in 10 to 20 years?
FIG 1 stats:
- 1 in 7 | listed companies in rich countries were zombies (2017)
- $800B | in PPP loans, 91% forgiven
- $443B | paid out in the 2008 bailout
source: BIS Quarterly Review (Sept 2018); SBA data via NPR (Oct 2022); GAO-24-107033.
FIG 2 cycle (replaces the existing compare): center "Who pays?" | steps: Bailout, More borrowing, New money created, Prices go up, You pay the bill
sources: ABI/Bloomberg (Payless); Fortune (Joann, 2025); CBO Budget and Economic Outlook (Feb 2026).
takeaway: (unchanged)

## Ch 7 Deflation
body:
- (keep existing paragraph 1: "Deflation means prices fall...")
- ## A quick brain teaser
- Which of these three people is winning?
- [FIG 1]
- Scenario A is how the government plays. Scenario C is the position you want to be in.
- ## Why governments fight falling prices
- Governments measure the economy with GDP: consumer spending, plus business investment, plus government spending, plus exports minus imports. About two-thirds of the U.S. economy is people buying things.
- That means the government can make GDP look bigger just by spending more. And it needs you spending too. America is a consumer nation. When you stop buying, the numbers fall.
- The U.S. owes more than $40 trillion. Surprise inflation quietly shrinks what the government owes, at the expense of savers. Deflation would make that debt heavier, and could crush them.
- [FIG 2]
- (keep existing paragraph 3: "Debt is a promise...")
- (keep existing paragraph 4: "When prices fall...")
- [FIG 3] (the existing inflation/deflation compare, unchanged)
- ## The government will not save you
- In 1969, the Black Panther Party began serving free breakfast to children in Oakland. By the end of that year, they were feeding more than 20,000 kids in cities across the country. The FBI targeted the program. Congress made school breakfast permanent in 1975.
- The lesson: when the government fails us, we take care of each other. The government will not save you. If anything, it will step on you to reach its own goals.
- (keep existing paragraph 5: "You can't wait for them...")
FIG 1 cards:
- A | You owe $50,000, but you can print $50,000. | Your debt disappears. But all that new money pushes grocery prices up 15% for everyone.
- B | You have $50,000 saved. Prices fall 20%, but your income is cut in half. | Your savings stretch further, but your paycheck shrinks.
- C (highlight) | You have no debt, and prices keep falling. | Every year, your money buys more. This is the winner.
FIG 2 line: title "U.S. federal debt" | series debtSeries label "Debt" tone accent | y format trillions | alt "Federal debt grew from $0.4 trillion in 1970 to over $39 trillion in 2026." | source: U.S. Treasury via FRED (GFDEBTN); Debt to the Penny: $40.1 trillion on Sept 28, 2026.
sources: Bureau of Economic Analysis (2025); IMF Fiscal Monitor (2023); BlackPast.
takeaway: (unchanged)

## Ch 8 Asset Comparison
body:
- (keep existing paragraph 1: "If cash melts...")
- ## Cash and your emergency fund
- Cash has one job: covering emergencies. A common rule of thumb is to keep 3 to 6 months of expenses saved. Beyond that, cash is losing value. Since 1971, prices have risen about 4% a year, while the money supply grew about 6% to 7% a year. That's the cost of sitting on cash.
- [FIG 1]
- ## Metals boom and bust
- Silver shows how metals work. Its price hit a record in January 1980, then crashed. It took 45 years to beat that record, then dropped by nearly half in eight days in early 2026. When prices rise, miners dig up more, and the extra supply drags prices back down.
- [FIG 2]
- Gold is harder to dig up, which is why it has held value for thousands of years. Since 1971, its average price has climbed from about $41 to over $3,400 an ounce. Gold didn't get better. The dollar got worse.
- [FIG 3]
- But gold can be taken. In 1933, the U.S. government ordered Americans to turn in most of their gold. And try crossing a border with a kilo of it. It's legal to fly with gold in the U.S., but you have to declare it to customs, and other countries set their own limits.
- ## Real estate: the bank holds the keys
- Real estate can hold up against inflation, sometimes. But it depends on location, upkeep is expensive, and interest rates are set by someone else.
- Try borrowing against your home with a HELOC, a home equity line of credit. The bank picks the appraiser, and the appraiser works for the bank, not for you. It can take weeks or months, with no guarantee. If home prices fall, the lender can freeze your credit line. Banks did exactly that in 2008.
- ## Stocks
- Single stocks reward doing your homework on a company. Index funds spread your money across hundreds of companies, and they're easy to borrow against. Wealthy families often borrow against their stocks instead of selling. But if markets drop, the lender can sell your shares.
- ## Bitcoin
- Governments have seized bitcoin many times, mostly from exchanges or by getting someone's keys. Bitcoin you hold yourself is much harder to take. The catch: the price swings hard, and managing your own keys can feel intimidating at first.
- (keep existing paragraph 2: "Of the traditional options...")
FIG 1 table: rename the column header "What works" → "Benefits" everywhere (including the mobile sr-only label). Rows:
- Cash | Easy to spend; good for emergencies | Printed without limit; loses value every year
- Silver & copper | Rise when demand is high | When prices rise, miners dig up more and prices crash
- Gold | Hard to produce; money for thousands of years | Heavy to move, costly to store; confiscated by the U.S. government in 1933
- Real estate | Useful and tangible; can hold up against inflation | Depends on location; costly upkeep and taxes; you don't set the interest rate
- Private companies | (unchanged) | (unchanged)
- Single stocks | Rewards doing your homework | Your money is in a CEO's hands; shares can be diluted
- Index funds | A basket of companies; easy to borrow against | Still priced in dollars and tied to the system
- Bitcoin (highlight) | Only 21 million, ever; anyone can buy it; very hard to take when you hold your own keys | The price swings hard; managing your own keys can feel intimidating
FIG 2 line: title "Silver, average price per ounce" | series silverSeries label "Silver" tone muted | y format usd | alt "Silver's yearly average spiked in 1980 and 2011, then fell back each time." | source: World Bank Commodity Price Data (Pink Sheet), annual averages, CC BY 4.0.
FIG 3 line: title "Gold, average price per ounce" | series goldSeries label "Gold" tone gold | y format usd | alt "Gold's yearly average rose from about $41 in 1971 to about $3,442 in 2025." | source: World Bank Commodity Price Data (Pink Sheet), annual averages, CC BY 4.0.
sources: BLS CPI-U and FRED M2SL (1971–2026); Executive Order 6102 (1933); U.S. Customs and Border Protection; 12 CFR 1026.40 and FDIC FIL-58-2008; FINRA.
takeaway: (unchanged)

## Ch 9: unchanged (convert to `figures` only)

## Ch 10 Redefining Productivity
quote: Who defines what is productive?
body:
- [FIG 1] (the existing scene, at 0)
- The easy joke is that nobody in that garage has a job. Ask the real question instead: who defines what is productive?
- Chris Rock has a bit about this. You can tell what kind of neighborhood you're in by who isn't working during the day. In a rich neighborhood, women are out jogging, riding bikes and sipping wine on a Tuesday afternoon. Nice neighborhood. In a poor one, it's grown men outside doing the same thing, and people ask, “Why aren't they at work?” Same behavior, different meaning. When you're wealthy, free time looks like freedom. When you're not, it looks like a problem.
- (keep existing paragraph 2: "Capitalist America says...")
- ## The plantation was a business
- That narrow idea of productivity has deep roots. Historians have shown that plantations were run like corporations. Enslaved people were listed as assets on the balance sheet. Overseers recorded how many pounds of cotton each person picked every day and set quotas from it. Account books even tracked people's “depreciation” as they aged.
- In one 1861 record, a 48-year-old foreman named Hercules was valued at $500, a 26-year-old named Middleton at $1,500, and a 9-month-old baby named George Washington at $150.
- ## Building community takes time
- Those three men in the garage at 10 a.m. on a Tuesday aren't wasting time. They're building community. You can't build community from nine to five. Artists know it too. You can't clock in to create.
- So here's the question: how can you build community if you're in debt and working all the time?
- [FIG 2]
- And when you make it, share less about the glamour and the trips, and more about how you did it. The next generation needs the map, not just the pictures.
- (keep existing paragraph 4: "Bitcoin is a way to take the time back...")
FIG 2 cards, caption "Everyone has a role":
- Young or in debt | Learn new skills. Close the income gap. Cut back on spending and pay down debt.
- Wealthy | Pass on your skills, your education and your assets.
- Retired | Plan your estate. Write a will, set up a trust, and pass your wealth to people who will use it wisely, even if they aren't family.
sources: Caitlin Rosenthal, Accounting for Slavery (Harvard University Press, 2018); Chris Rock stand-up, paraphrased.
takeaway: (unchanged)

## Ch 11 The Bitcoin Solution
body:
- (keep existing paragraph 1: "Only 21 million bitcoin...")
- Think of it as infinity divided by 21 million. No matter how many dollars get printed, there will only ever be 21 million bitcoin to go around. More than 95% of them have already been mined.
- [FIG 1]
- Yes, the price swings. Bitcoin has crashed by 75% or more three times. But since 2013, everyone who bought and held for four years came out ahead, even people who bought at the top. Past results don't guarantee future results, so only put in what you can leave alone.
- [FIG 2]
- (keep existing paragraph 3: "You don't need to be rich...")
- [FIG 3] (the existing stats figure, unchanged)
- ## Circular economies
- A circular economy keeps money moving inside a community instead of leaking out. People pay each other directly, peer to peer, with no bank in the middle taking a cut. As bitcoin gains value, goods get cheaper when priced in bitcoin.
- It's already being tried. In El Zonte, El Salvador, a project called Bitcoin Beach got dozens of local businesses to accept bitcoin. In a South African township, Bitcoin Ekasi pays its staff in bitcoin. These are experiments, not guarantees: El Salvador rolled back parts of its national bitcoin law in 2025.
- ## The dream
- Imagine every Black person owning bitcoin. No bank required. No currency conversion when you send money home. Pay farmers and local businesses directly.
- It could help fix the banking gap. Black households are more than five times as likely as white households to have no bank account at all.
- [FIG 4]
- ## Get to one
- Bitcoiners use sea creatures to describe how much someone holds. Everyone starts somewhere.
- [FIG 5]
- The goal is to get to one. One whole bitcoin, owned by you, your family or your nonprofit.
- There will never be enough bitcoin for more than 1 in 390 people on Earth to own a whole one. Join them, and you're in a club far smaller than the top 1%.
- One bitcoin is worth about $84,000 today (Sept 2026), almost twice the typical Black household's total wealth. If it ever reaches $500,000, one coin would be worth more than ten times that.
- (keep existing paragraph 5: "We're still early...")
FIG 1 line: title "Bitcoin’s fixed supply" | series btcSupplySeries label "Bitcoin in existence" tone gold | y format btcMillions | x domain 2009–2140 | alt "Bitcoin's supply rises toward a hard cap of 21 million, reached around 2140." | source: Bitcoin protocol issuance schedule; 20 millionth bitcoin mined March 2026 (The Block).
FIG 2 line (log scale): title "Bitcoin price, year end (log scale)" | series btcPriceSeries label "Price" tone gold | y format usdShort, log true | alt "Bitcoin rose from $730 at the end of 2013 to about $84,000 in September 2026, with three crashes of 75% or more." | source: Coin Metrics (CC BY-NC 4.0); four-year hold analysis of daily prices, 2013–2026.
FIG 4 bars: caption "Households with no bank account (2023)" | Black: share 100, display "10.6%", note "of Black households", tone cash | White: share 18, display "1.9%", note "of white households", tone gold. Add a third tone, "accent", to the bars union if needed, so that Black isn't shown in the "gold = good" colour; use tone "accent" for Black and "cash" for White. | source: FDIC National Survey of Unbanked and Underbanked Households (2023).
FIG 5 cards (5, compact): Shrimp | Less than 1 bitcoin · Crab | 1 to 10 · Fish | 10 to 100 · Shark | 100 to 1,000 · Whale | 1,000 or more
sources: Glassnode (holder cohorts and address counts); Axios (2022); Bitcoin Magazine (2022); Reason (2025).
takeaway: (unchanged)
