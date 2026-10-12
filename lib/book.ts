// Content for the Black Bitcoiners visual book.
// Copy is adapted from OUTLINE.md and the founder's recordings in /transcripts.
// Figures marked with `source` should be re-verified before launch.

import {
  btcPriceSeries,
  btcSupplySeries,
  carSeries,
  debtSeries,
  dollarSeries,
  foodSeries,
  goldSeries,
  moneyCashSeries,
  moneyM2Series,
  silverSeries,
  type Point,
} from "./chart-data";

export type PartId = "problem" | "money" | "assets" | "way-out";

export const parts: Record<PartId, { ordinal: string; name: string }> = {
  problem: { ordinal: "Part one", name: "The problem" },
  money: { ordinal: "Part two", name: "How money works" },
  assets: { ordinal: "Part three", name: "What to own" },
  "way-out": { ordinal: "Part four", name: "The way out" },
};

export type Figure =
  | { type: "stats"; items: { value: string; label: string; note?: string }[]; source?: string }
  | {
      type: "compare";
      columns: [{ title: string; items: string[] }, { title: string; items: string[] }];
    }
  | { type: "timeline"; items: { year: string; text: string }[]; source?: string }
  | {
      type: "bars";
      caption: string;
      items: { label: string; share: number; display: string; note: string; tone: "cash" | "gold" | "accent" }[];
      source?: string;
    }
  | { type: "table"; rows: { asset: string; good: string; catch: string; highlight?: boolean }[] }
  | { type: "cycle"; center: string; steps: string[] }
  | { type: "scene"; lines: string[] }
  | {
      type: "line";
      title: string;
      series: { label: string; tone: "accent" | "muted" | "gold"; points: Point[] }[];
      yFormat: "usd" | "usdShort" | "trillions" | "cents" | "pct" | "index" | "btcMillions";
      log?: boolean;
      xTicks?: { value: number; label: string }[];
      alt: string;
      source?: string;
    }
  | { type: "flow"; title: string; steps: string[] }
  | { type: "cards"; caption?: string; items: { label: string; text: string; detail?: string; highlight?: boolean }[] };

export type Chapter = {
  slug: string;
  number: number;
  part: PartId;
  title: string;
  subtitle?: string;
  quote: string;
  hook: string;
  body: string[];
  figure?: Figure;
  /** Number of body paragraphs shown before the figure. Defaults to all of them. */
  figureAt?: number;
  figures?: { at: number; figure: Figure }[];
  sources?: string;
  takeaway: string;
};

export const chapters: Chapter[] = [
  {
    slug: "the-black-paradox",
    number: 1,
    part: "problem",
    title: "The Black Paradox",
    quote: `They burned Greenwood. They drew the red lines. They kept the GI Bill out of reach. Our ancestors survived it anyway.

Honor them: stop wearing your wealth. Start owning it.`,
    hook: "What does wealth actually look like?",
    body: [
      "Among successful Black Americans, a small group builds wealth that lasts. Call them the 1% of the 1%. Their secret is boring: they live below their means, invest what’s left, and skip the flashy stuff.",
      "That’s not the picture our kids see. Rappers, athletes and entertainers show the chain, the car, the party. To a young person, that is what wealth looks like, so that’s what they chase.",
      "Here’s the hard truth: buying Jordans, a Birkin or a designer jacket proves one thing. Money was spent. It doesn’t prove anyone is wealthy.",
      "Ask yourself: what made you want them in the first place? Nobody is born wanting a logo. That desire was sold to us, one ad, one video, one co-sign at a time. That’s how consumer capitalism works.",
      "Style has a proud history for us. For centuries, Black people used sharp dress to claim dignity in a world that denied it. Scholars call it Black dandyism, and in 2025 the Metropolitan Museum of Art honored it with a major exhibit.",
      "But most of what we buy today loses value the moment we wear it. A few rare pieces, like some Hermès bags, are the exception, and even those are hard to get. Holding the rest is like slowly burning money.",
      "You don’t need a label to prove your worth. You are valuable because you exist.",
      "Pointing this out isn’t enough. Plenty of essays name the problem and stop there. This book is the other half: a way out you can actually use, built around one tool, Bitcoin, and written for us.",
    ],
    figures: [
      {
        at: 2,
        figure: {
          type: "stats",
          items: [
            { value: "51.6M", label: "Black American population (2024)" },
            { value: "$1.6T", label: "brought home each year after taxes (2021)" },
            {
              value: "$44,900",
              label: "median Black household wealth",
              note: "The typical white household has $285,000, more than six times as much (2022).",
            },
          ],
          source:
            "U.S. Census Bureau, American Community Survey 2024; Selig Center for Economic Growth, University of Georgia (2021); Federal Reserve Survey of Consumer Finances 2022.",
        },
      },
    ],
    sources:
      "Monica L. Miller, Slaves to Fashion (Duke University Press, 2009); The Metropolitan Museum of Art, “Superfine: Tailoring Black Style” (2025); Rebag Clair Report (2025).",
    takeaway: "We earn like a wealthy nation and own like a poor one.",
  },
  {
    slug: "the-two-problems",
    number: 2,
    part: "problem",
    title: "The Two Problems",
    quote:
      "The only way to have an opinion and not be controlled is to have enough wealth to have that opinion.",
    hook: "There are two problems.",
    body: [
      "**Problem one** is the money itself. Banks and governments create new dollars whenever they decide to. Creating more dollars can reduce their purchasing power when money growth outpaces goods and services.",
      "That’s what inflation used to mean: creating too much money. Today most economists use the word for rising prices. But rising prices are the symptom. More money is often the cause. Prices can also rise because of shortages or higher costs.",
      "Think about Monopoly. If the bank could print as much money as it wanted, the cash in your hand would be worth less every round. Nobody would want to hold it. That’s the game we’re all playing.",
      "**Problem two** is what we own. The wealth gap isn’t mainly about paychecks. It’s about assets: homes, businesses, land, investments. Things that grow while you sleep. We have far fewer of them.",
      "Put them together and you get a trap. The thing we hold most of, cash, is the thing losing value fastest.",
      "## Owning things vs. owning assets",
      "We own plenty of things. We don’t own many assets. An asset is something of economic value. The best ones grow in value or put money in your pocket. Most of what we buy does neither.",
      "A new car loses 15% to 20% of its value in the first year and about half within five years. It’s still an asset, just a depreciating one. It isn’t literally a liability, but the loan on it is, and owning it brings insurance, gas and repairs. Miss enough payments and it can be taken back. In early 2026, a record 6.9% of subprime car loans were at least two months behind.",
      "Clothes lose value the day you wear them. One splash of bleach and a $1,000 jacket is worth nothing.",
      "Jewelry is no safer. Brand names do not guarantee resale value. Precious-metal content gives some jewelry recoverable value, but craftsmanship and retail markups may not come back when you sell. Lab-grown diamonds have fallen hardest: wholesale prices are down about 96% since 2018.",
      "## F-You money",
      "Wealth is freedom. Some people call it F-You money: enough saved that nobody can push you around.",
      "It’s being able to leave a job where you’re disrespected. Take time off when your mother gets sick. Move to a better city, choose your kids’ school, and say what you think without worrying about who signs your check.",
      "Too few of us have it. Only 43% of Black adults say they’d cover a surprise $400 bill with cash or its equivalent, compared with 71% of white adults.",
    ],
    figures: [
      {
        at: 5,
        figure: {
          type: "compare",
          columns: [
            {
              title: "The money",
              items: ["New dollars created at will", "Savings lose value every year", "Prices rise faster than pay"],
            },
            {
              title: "The gap",
              items: ["Fewer homes owned", "Fewer businesses and investments", "Less to pass down"],
            },
          ],
        },
      },
      {
        at: 8,
        figure: {
          type: "line",
          title: "A new car’s value, year by year",
          series: [{ label: "Value kept", tone: "accent", points: carSeries }],
          yFormat: "pct",
          xTicks: [
            { value: 0, label: "Year 0" },
            { value: 1, label: "Year 1" },
            { value: 2, label: "Year 2" },
            { value: 3, label: "Year 3" },
            { value: 4, label: "Year 4" },
            { value: 5, label: "Year 5" },
          ],
          alt: "A new car keeps about 84% of its value after one year and 45% after five.",
          source: "Kelley Blue Book, typical depreciation.",
        },
      },
    ],
    sources:
      "Fitch Ratings (Jan 2026); Edahn Golan Diamond Research via JCK (2026); Federal Reserve, Survey of Household Economics and Decisionmaking (2024).",
    takeaway: "Fix one without the other and you’re still stuck.",
  },
  {
    slug: "historical-foundation",
    number: 3,
    part: "problem",
    title: "Historical Foundation",
    quote: "Capital is like water. If you restrict the flow, you cut off the lifeline to a community.",
    hook: "How did we get here?",
    body: [
      "It started with extraction. People, labor and resources were taken out of Africa to build wealth somewhere else. After slavery, Black Americans built anyway, and again and again what they built was taken.",
      "That’s why Black banks matter. A bank lets money circulate inside a community: loans for homes, for businesses, for new ideas. Capital is infrastructure. Choke it off and a neighborhood slowly dies.",
      "## You are not the problem",
      "Look at that timeline again. Every time we built something, the rules changed or the mob came. You have been bamboozled. You are not the problem.",
      "You are fighting an uphill battle against a system that didn’t want you to read, didn’t want you to be seen as human, and didn’t want you to hold capital.",
      "When we say “the system,” we mean something specific: the financial-industrial complex—banks, courts and government, working hand in hand. That’s our analytical framing for a pattern, not a claim of secret, unified coordination. Banks decide who gets capital. Courts decide who keeps it. Government writes the rules for both.",
      "And the system will always remind you that what you have can be taken.",
      "Playing into consumerism and staying in the dark about money keeps that system running. Learning how it works is the first step out.",
      "Here’s what the world rarely tells you: you already have everything you need. Your skin isn’t the problem. Your hair isn’t the problem. What’s been missing is access to tools that are hard to take away.",
    ],
    figures: [
      {
        at: 2,
        figure: {
          type: "timeline",
          items: [
            {
              year: "1865",
              text: "The Freedman’s Savings Bank is chartered to serve formerly enslaved people and their families.",
            },
            {
              year: "1865–66",
              text: "Southern states pass Black Codes that make it a crime for Black people to be without a job. Workers who quit could be arrested and returned.",
            },
            {
              year: "After emancipation–1928",
              text: "A loophole in the 13th Amendment lets states lease Black prisoners to companies, and the practice expands after emancipation. Alabama is the last to end convict leasing, in 1928.",
            },
            {
              year: "1860s–1940s",
              text: "Sharecroppers borrow against next year’s crop. At settlement time, many end the year owing more than they earned.",
            },
            {
              year: "1874",
              text: "The Freedman’s Bank fails. Congress had loosened its rules in 1870, and a trustee steered its money toward his family’s bank. Its 61,144 depositors—formerly enslaved people and their families among them—lose nearly $3 million, and only part is ever repaid.",
            },
            { year: "1877–1965", text: "Jim Crow laws enforce segregation across the South." },
            { year: "1921", text: "A white mob burns Greenwood in Tulsa, the neighborhood known as Black Wall Street." },
            { year: "1930s", text: "Federal “redlining” maps mark Black neighborhoods as too risky for loans." },
            {
              year: "1944",
              text: "The GI Bill promises veterans home, business and farm loans. The law does not itself exclude Black veterans, but discriminatory administration, segregated institutions and lending practices limit their benefits. In 1947, a survey of 13 Mississippi cities found just 2 of 3,229 VA-backed home, business and farm loans went to Black veterans.",
            },
            {
              year: "1999",
              text: "In Pigford v. Glickman, the USDA settles with Black farmers over years of loan discrimination. A second $1.25 billion settlement follows in 2010.",
            },
          ],
          source:
            "Office of the Comptroller of the Currency; National Constitution Center; Equal Justice Initiative; NCpedia; Ira Katznelson, When Affirmative Action Was White (2005); Congressional Research Service RS20430; Tulsa Race Massacre Commission (2001); Mapping Inequality, University of Richmond.",
        },
      },
    ],
    takeaway: "The pattern: build, then lose it to someone else’s rules.",
  },
  {
    slug: "the-fiat-system",
    number: 4,
    part: "money",
    title: "The Fiat System",
    quote: "You are in the fiat system. The first step is understanding what that means.",
    hook: "You’re already inside it.",
    body: [
      "“Fiat” means “by decree.” A fiat dollar is money because the government says so, not because it’s backed by anything you can hold. Every paycheck, loan and bill you’ve ever paid runs on it.",
      "It wasn’t always this way. For most of history, money was tied to gold. Then the government took the gold, and later cut the dollar loose from it entirely. Since 1971, there’s been no hard limit on how many dollars can be created.",
      "Why take the gold? Control. When people hold money that can’t be printed, the people in charge can’t quietly spend their savings for them.",
      "Living inside the system means your savings, your debts and your time are all priced in a currency someone else controls. Living outside it starts with owning something they can’t print.",
      "## Credit scores: a fiat product",
      "Your credit score is a product of the fiat system. It’s a gate. It decides whether you get the apartment, the car or the business loan, and how much extra you pay for it.",
      "In majority-Black neighborhoods, the median credit score is about 100 points lower than in majority-white ones.",
      "Here’s what nobody tells you. Wealth can create options beyond a credit score: cash purchases and borrowing against assets. Lenders can still assess credit and repayment ability.",
      "So ask yourself: would you rather have $500,000 in cash or an 800 credit score?",
      "## The rich make the rules",
      "When we say “the rich,” we don’t just mean someone with a million dollars. We mean the influence concentrated wealth can exert on the people who run the system: bank owners, politicians, the board of the Federal Reserve. Whatever their personal fortunes, that’s where the rules get made.",
      "The rich get richer because the rich make the rules. One influential study found economic elites and business groups had more independent influence on U.S. policy than average citizens; researchers debate its methods and interpretation.",
      "Here’s how the money flows, simplified: the Treasury issues debt, banks and investors buy it, the Fed may buy existing Treasury securities in secondary markets, and regulators oversee the lenders that decide who gets credit. The Fed’s purchases are not direct loans to the Treasury, and oversight is not a promise that failing banks always get bailed out.",
      "If inflation robs us, why does the Fed have a target for it? Keep that question in mind. We’ll answer it in the next chapter.",
    ],
    figures: [
      {
        at: 2,
        figure: {
          type: "timeline",
          items: [
            { year: "1913", text: "Congress creates the Federal Reserve." },
            { year: "1933", text: "Executive Order 6102 orders Americans to turn in most of their gold." },
            { year: "1934", text: "Gold is repriced from $20.67 to $35 an ounce. Overnight, every dollar buys less." },
            {
              year: "1971",
              text: "President Nixon stops letting foreign governments trade dollars for gold. Americans had already lost that right in 1933.",
            },
            { year: "1974", text: "Americans may legally own gold again, starting December 31." },
          ],
          source: "Federal Reserve History; Gold Reserve Act of 1934.",
        },
      },
      {
        at: 13,
        figure: {
          type: "flow",
          title: "The house always wins",
          steps: [
            "The Treasury issues debt",
            "Banks and investors buy it",
            "The Fed may buy existing Treasury securities in secondary markets",
            "Regulators oversee lenders, which assess access to credit",
          ],
        },
      },
    ],
    sources:
      "Urban Institute (2022); Gilens & Page, Perspectives on Politics (2014); Federal Reserve H.4.1 (Sept 2026).",
    takeaway: "Money that can be printed without limit will be.",
  },
  {
    slug: "inflation",
    number: 5,
    part: "money",
    title: "Inflation",
    subtitle: "The silent tax",
    quote: "Ever think about $10,000 stored in a mattress? What is that $10,000 worth now?",
    hook: "Why can’t you keep money under the mattress?",
    body: [
      "Picture it. It’s 1971. You stuff $10,000 in a mattress and leave it. Your neighbor puts the same $10,000 into gold, about 285 ounces at $35 each. Call it a what-if, in two ways: Americans couldn’t legally own gold bullion again until December 31, 1974, and $35 was the government’s official monetary valuation, not a price you could pay across a counter. Strip out premiums, storage and taxes, and the comparison still stings.",
      "Today your cash buys roughly what $1,210 bought back then. It has lost almost 90% of its buying power. Your neighbor’s gold is worth more than $1 million.",
      "The gold didn’t get better. The dollar got worse. That’s most of the story, but not all of it—gold’s price also moves on supply, demand and real terms, not just the dollar’s slide. Still: dollars cost almost nothing to create, while gold takes energy, labor and time to pull out of the ground. Things that are hard to make hold their value.",
      "## A better word for inflation",
      "Try swapping the word “inflation” for what it really is: a silent tax, or the devaluation of your cash. Nobody votes on it, but it takes a cut of every hour you work.",
      "A dollar from 1913, the year the Federal Reserve was created, now buys about 3 cents’ worth of goods.",
      "Most money never becomes paper. Economists track the money supply with a broad measure called M2. Currency in circulation—bills, coins, and dollars held overseas—equals roughly a tenth of this broad money measure. M2 also includes deposits and certain money-market balances; categories overlap. The rest is numbers in bank accounts, and more can be created with a keystroke. In early 2021, M2 grew about 27% in a single year. More money doesn’t force prices up one-for-one—it depends on where the money goes and how fast it moves—but it is the raw material inflation is made of.",
      "The official number says inflation runs a few percent a year. Your grocery receipt says otherwise. Food prices jumped almost 24% from 2020 to 2024. The “core” number you hear most strips out food and energy on purpose, to track the trend underneath; headline inflation counts both. Home prices aren’t counted directly either—housing enters the index through rents and owners’ equivalent rent, which follows the cost of shelter but lags what buyers actually pay.",
      "## Where did 2% come from?",
      "The Federal Reserve aims for 2% inflation a year—specifically 2% in the PCE price index it watches. In other words, it plans for your dollar to lose value. The idea started in New Zealand around 1990, and the Fed made it official in 2012. The stated reasons: stable prices make planning easier, a cushion above zero keeps deflation away, and it leaves the Fed room to cut rates when trouble hits. It’s a policy choice, not a law of nature. My critique: nobody asked savers whether the trade was worth it.",
      "## Time is money",
      "In the movie In Time, people pay for everything with minutes of their lives. The rich live forever. The poor run out of time. That’s not far from the truth. Money buys you time. Freedom costs.",
      "Every time we put clothes, vacations or gambling on credit, we aren’t just spending money. We’re burning freedom.",
      "Debt keeps you obligated to keep working. Here’s my read: a system that runs on your labor has every incentive to keep you in debt, because people in debt accept whatever terms they’re given. No conspiracy required—the incentives do the work.",
    ],
    figures: [
      {
        at: 2,
        // Recheck the gold price before launch.
        figure: {
          type: "bars",
          caption: "The same $10,000, set aside in 1971",
          items: [
            {
              label: "Cash in a mattress",
              share: 2,
              display: "$10,000",
              note: "Buys what about $1,210 did in 1971",
              tone: "cash",
            },
            {
              label: "285 ounces of gold",
              share: 100,
              display: "$1M+",
              note: "About $1.18 million at September 2026 prices",
              tone: "gold",
            },
          ],
          source: "BLS CPI-U (Aug 2026); gold $35/oz (1971) and about $4,100/oz (Sept 2026).",
        },
      },
      {
        at: 6,
        figure: {
          type: "line",
          title: "What a 1913 dollar buys today",
          series: [{ label: "Cents", tone: "accent", points: dollarSeries }],
          yFormat: "cents",
          alt: "A 1913 dollar now buys about 3 cents’ worth of goods.",
          source: "BLS Consumer Price Index (CPI-U), 1913–Aug 2026.",
        },
      },
      {
        at: 7,
        figure: {
          type: "line",
          title: "Broad money vs. cash in circulation",
          series: [
            { label: "Broad money (M2)", tone: "accent", points: moneyM2Series },
            { label: "Cash & coins", tone: "muted", points: moneyCashSeries },
          ],
          yFormat: "trillions",
          alt: "M2 grew from $0.7 trillion in 1971 to $23.3 trillion in 2026, while currency in circulation is about $2.5 trillion.",
          source: "Federal Reserve via FRED (M2SL, MBCURRCIR), Aug 2026.",
        },
      },
      {
        at: 8,
        figure: {
          type: "line",
          title: "Food prices since 2019",
          series: [{ label: "Food prices (2019 = 100)", tone: "accent", points: foodSeries }],
          yFormat: "index",
          alt: "Food prices are about 33% higher than in 2019.",
          source: "BLS CPI-U, food (CUUR0000SAF11); USDA Economic Research Service.",
        },
      },
    ],
    sources: "Federal Reserve Bank of Cleveland (inflation targeting history).",
    takeaway: "Inflation is a tax you never voted for.",
  },
  {
    slug: "zombie-companies-and-bailouts",
    number: 6,
    part: "money",
    title: "Zombie Companies & Bailouts",
    quote: "When you let a bad company fail, you make room for a better one.",
    hook: "What happens when failure isn’t allowed?",
    body: [
      "A zombie company isn’t just one that misses profit targets. It can’t cover its interest bill—earnings below interest payments, year after year. The standard definition, from the Bank for International Settlements, flags publicly traded firms at least 10 years old whose earnings haven’t covered their interest payments for three years running. It stays alive by borrowing more. Cheap money keeps it walking.",
      "How many are there? By that measure, zombie firms grew from about 4% of listed companies in rich countries in the mid-1980s to about 15% by 2017. That’s roughly 1 in 7.",
      "During COVID, the government sent out nearly $800 billion in PPP loans. By October 2022, 91% of those loans—measured by loan count, not dollars—had been fully or partly forgiven. Some of it saved good businesses. Whichever way it landed, taxpayers picked up most of the tab.",
      "The 2008 bailout, called TARP, paid out $443 billion. Most of it came back, and it still cost taxpayers $31 billion. TARP even included programs for struggling homeowners, but the help reached only a fraction of the families in trouble, and millions of households lost homes and wealth anyway. The banks got rescued whole. Families got waitlists. The real cost isn’t the dollar total. It’s the lesson: the biggest players learned they’d be rescued.",
      "## Buy it, borrow, bleed it",
      "Private equity firms buy companies with borrowed money, put the debt on the company’s books, pull cash out, and leave workers with pink slips.",
      "Payless ShoeSource was bought in a leveraged buyout in 2012, then went bankrupt in 2017 and again in 2019. Joann, the fabric and craft store, was bought in a roughly $1.6 billion buyout in 2011, went bankrupt in 2024 and again in 2025, and closed for good. Retail was brutal in those years—online competition, rising costs and management missteps all played their part—but both chains carried the debt from those buyouts the whole way down.",
      "## Socialism for them",
      "America says it hates socialism. But when banks and big corporations fail, they get rescued with our tax dollars. Call it what it is: capitalism for you, socialism for them. When big players lose, they get bailouts. When you lose, you get a late fee.",
      "That cycle is one possible chain of events, not a law of gravity. A bailout is often financed by government borrowing from investors, not by the Federal Reserve creating new money one-for-one, and new money doesn’t automatically lift prices in lockstep. But when the chain does run, the last link lands on you.",
      "Failure is healthy. When a bad business dies, prices fall, assets go on sale, and something better takes its place. After the 2008 crash, home prices bottomed around 2012 and families could afford to buy. Today we call the opposite an affordability crisis.",
      "Interest on the national debt is heading toward record highs. The Congressional Budget Office projects that, if current law stays in place, it will more than double by 2036, to $2.1 trillion a year. Forecasts aren’t fate—Congress can change course—but the direction is worth a question: will your taxes be higher or lower in 10 to 20 years?",
    ],
    figures: [
      {
        at: 4,
        figure: {
          type: "stats",
          items: [
            { value: "1 in 7", label: "listed companies in rich countries were zombies (2017)" },
            {
              value: "$800B",
              label: "in PPP loans",
              note: "91% of loans were fully or partly forgiven by October 2022.",
            },
            { value: "$443B", label: "paid out in the 2008 bailout" },
          ],
          source: "BIS Quarterly Review (Sept 2018); SBA data via NPR (Oct 2022); GAO-24-107033.",
        },
      },
      {
        at: 9,
        figure: {
          type: "cycle",
          center: "Who pays?",
          steps: ["Bailout", "More borrowing", "New money created", "Prices go up", "You pay the bill"],
        },
      },
    ],
    sources: "ABI/Bloomberg (Payless); Fortune (Joann, 2025); CBO Budget and Economic Outlook (Feb 2026).",
    takeaway: "Every bailout is paid for by someone who didn’t get one.",
  },
  {
    slug: "deflation",
    number: 7,
    part: "money",
    title: "Deflation",
    subtitle: "What they don’t want you to have",
    quote: "Imagine if things got cheaper. Your rent, your lifestyle. That would make you happier.",
    hook: "What if your money bought more every year?",
    body: [
      "Deflation means prices fall. Your dollar goes further. Rent, food, a car: all a little cheaper next year than this year. Sounds good, right?",
      "## A quick brain teaser",
      "Which of these three people is winning? It’s a hypothetical, so take each card’s numbers as given conditions, not calculated effects—one person printing $50,000 wouldn’t literally move the country’s grocery prices.",
      "Scenario A is how the government plays. Scenario C is the position you want to be in—no debt, prices falling, and an income that keeps arriving while they do.",
      "## Why governments fight falling prices",
      "Governments measure the economy with GDP: consumer spending, plus business investment, plus government consumption and investment, plus exports minus imports. That government slice is what it buys and builds—not transfer payments like Social Security, which just move money around. About two-thirds of the U.S. economy is people buying things.",
      "That means the government can make nominal GDP look bigger just by spending more. But nominal isn’t real: real output is what the economy actually makes, and spending doesn’t automatically create net wealth. And it needs you spending too. America is a consumer nation. When you stop buying, the numbers fall.",
      "The U.S. owes more than $40 trillion as of late September 2026. Surprise inflation can shrink the real value of that fixed debt, at the expense of savers. But it isn’t free for the government either: borrowing costs rise, and indexed obligations like Social Security grow with prices. Deflation would make the debt heavier, and could crush them.",
      "Debt is a promise your future self has to keep. National debt is a promise our children will have to keep.",
      "There are two kinds of falling prices. One comes from productivity: things get cheaper because we get better at making them. That’s the good kind. The other comes from a collapse in demand: people stop buying, and jobs and income can fall with the prices. That’s a recession, and it can take you down with it. Falling prices alone don’t guarantee you work less, pay less tax or gain more freedom. What matters is why prices are falling and whether your income holds.",
      "## The government will not save you",
      "In 1969, the Black Panther Party began serving free breakfast to children in Oakland. By the end of that year, they were feeding more than 20,000 kids in cities across the country. The FBI targeted the program. Congress made school breakfast permanent in 1975.",
      "The lesson: when the government fails us, we take care of each other. The government will not save you. If anything, it will step on you to reach its own goals.",
      "You can’t wait for them to hand you deflation. You need to own something that grows faster than prices rise, so your life gets cheaper even while their money doesn’t.",
    ],
    figures: [
      {
        at: 3,
        figure: {
          type: "cards",
          items: [
            {
              label: "A",
              text: "You owe $50,000, but you can print $50,000.",
              detail: "Your debt disappears. But assume all that new money pushes grocery prices up 15% for everyone.",
            },
            {
              label: "B",
              text: "You have $50,000 saved. Prices fall 20%, but your income is cut in half.",
              detail: "Your savings stretch further, but your paycheck shrinks.",
            },
            {
              label: "C",
              text: "You have no debt, and prices keep falling.",
              detail: "Every year, your money buys more. This is the winner—if your income holds steady.",
              highlight: true,
            },
          ],
        },
      },
      {
        at: 8,
        figure: {
          type: "line",
          title: "U.S. federal debt",
          series: [{ label: "Debt", tone: "accent", points: debtSeries }],
          yFormat: "trillions",
          alt: "Federal debt grew from $0.4 trillion in 1970 to $39.07 trillion in the first quarter of 2026.",
          source:
            "U.S. Treasury via FRED (GFDEBTN), quarterly; latest quarter, Q1 2026, was $39.07 trillion. Debt to the Penny, a daily measure, put it at $40.1 trillion on Sept 28, 2026.",
        },
      },
      {
        at: 10,
        figure: {
          type: "compare",
          columns: [
            {
              title: "Inflation",
              items: ["Prices rise", "Savings shrink", "Retirement moves further away", "Government debt gets lighter"],
            },
            {
              title: "Deflation",
              items: ["Prices fall", "Savings grow", "Your time frees up", "Government debt gets heavier"],
            },
          ],
        },
      },
    ],
    sources: "Bureau of Economic Analysis (2025); IMF Fiscal Monitor (2023); BlackPast.",
    takeaway: "Falling prices are good news for everyone not drowning in debt.",
  },
  {
    slug: "asset-comparison",
    number: 8,
    part: "assets",
    title: "Asset Comparison",
    quote: "There’s a slew of assets you can own, and there are problems with all of them.",
    hook: "So what should you hold?",
    body: [
      "If cash melts, you need to own something else. Here’s an honest look at the choices, including where each one falls short.",
      "## Cash and your emergency fund",
      "Cash has one job: covering emergencies and the obligations you can already see coming—next month’s rent, tuition due in the spring, a planned purchase. A common rule of thumb is 3 to 6 months of expenses; it’s a heuristic, not a universal answer, so fit it to your life. Beyond that, cash is losing value. Since 1971, prices have risen about 4% a year, while the money supply grew about 6% to 7% a year. That’s the cost of sitting on cash.",
      "## Metals boom and bust",
      "Silver shows how metals work. Its yearly average price spiked in 1980 and again in 2011, then fell back both times, as the chart shows. Those are annual averages—the intraday peaks and drops in between were sharper still. When prices rise, miners dig up more—but new mines take years, and extra supply doesn’t automatically crash the price. Costs and demand matter too.",
      "Gold is harder to dig up, which is why it has held value for thousands of years. Since 1971, its average price has climbed from about $41 to over $3,400 an ounce by 2025. Gold didn’t get better. The dollar got worse.",
      "But gold can be taken. In 1933, the U.S. government ordered Americans to turn in most of their gold. And try crossing an international border with a kilo of it: you have to declare it to customs, and every country sets its own limits. Flying with gold inside the U.S. is different—no customs declaration is required for a domestic flight.",
      "## Real estate: the bank holds the keys",
      "Real estate can hold up against inflation, sometimes. But it depends on location, upkeep is expensive, and interest rates are set by someone else.",
      "Try borrowing against your home with a HELOC, a home equity line of credit. The lender selects the appraiser: an independent valuation professional, not a bank employee on anyone’s side. The appraisal can take weeks, sometimes months—anecdote, not a guarantee. If home prices fall, the lender can freeze your credit line. Banks did exactly that in 2008.",
      "## Stocks",
      "Single stocks reward doing your homework on a company. Index funds spread your money across hundreds of companies, and they’re easy to borrow against. Wealthy families often borrow against their stocks instead of selling. But that borrowing is leverage: if markets drop, the lender can call the collateral and sell your shares at the worst possible time.",
      "## Bitcoin",
      "Governments have seized bitcoin many times, mostly from exchanges or by getting someone’s keys. Bitcoin you hold yourself is much harder to take—not impossible. If someone gets your keys, it’s gone; coercion or legal process can still reach you. The catch: the price swings hard, and managing your own keys can feel intimidating at first.",
      "Of the traditional options, index funds are the best bet—though no bet is guaranteed. But only one asset on this list is scarce, open to anyone with a phone, and something you can hold yourself.",
    ],
    figures: [
      {
        at: 3,
        figure: {
          type: "table",
          rows: [
            { asset: "Cash", good: "Easy to spend; good for emergencies", catch: "Printed without limit; loses value every year" },
            {
              asset: "Silver & copper",
              good: "Rise when demand is high",
              catch: "New mines take years; extra supply can eventually weigh on prices",
            },
            {
              asset: "Gold",
              good: "Hard to produce; money for thousands of years",
              catch: "Heavy to move, costly to store; confiscated by the U.S. government in 1933",
            },
            {
              asset: "Real estate",
              good: "Useful and tangible; can hold up against inflation",
              catch: "Depends on location; costly upkeep and taxes; you don’t set the interest rate",
            },
            { asset: "Private companies", good: "Big upside", catch: "Most fail; access is mostly for the already wealthy" },
            { asset: "Single stocks", good: "Rewards doing your homework", catch: "Your money is in a CEO’s hands; shares can be diluted" },
            { asset: "Index funds", good: "A basket of companies; easy to borrow against", catch: "Still priced in dollars and tied to the system" },
            {
              asset: "Bitcoin",
              good: "Only 21 million, ever; anyone can buy it; very hard to take when you hold your own keys",
              catch: "The price swings hard; managing your own keys can feel intimidating",
              highlight: true,
            },
          ],
        },
      },
      {
        at: 5,
        figure: {
          type: "line",
          title: "Silver, average price per ounce",
          series: [{ label: "Silver", tone: "muted", points: silverSeries }],
          yFormat: "usd",
          alt: "Silver’s yearly average spiked in 1980 and 2011, then fell back each time.",
          source: "World Bank Commodity Price Data (Pink Sheet), annual averages through 2025, CC BY 4.0.",
        },
      },
      {
        at: 6,
        figure: {
          type: "line",
          title: "Gold, average price per ounce",
          series: [{ label: "Gold", tone: "gold", points: goldSeries }],
          yFormat: "usd",
          alt: "Gold’s yearly average rose from about $41 in 1971 to about $3,442 in 2025.",
          source: "World Bank Commodity Price Data (Pink Sheet), annual averages through 2025, CC BY 4.0.",
        },
      },
    ],
    sources:
      "BLS CPI-U and FRED M2SL (1971–2026); Executive Order 6102 (1933); U.S. Customs and Border Protection; 12 CFR 1026.40 and FDIC FIL-58-2008; FINRA.",
    takeaway: "Every asset has a flaw. Pick the one whose flaw you can live with.",
  },
  {
    slug: "the-landlord-trap",
    number: 9,
    part: "assets",
    title: "Real Estate & the Landlord Trap",
    quote: "Whether it’s the government raising prices or you raising prices, it’s the same thing.",
    hook: "Is being a landlord really freedom?",
    body: [
      "Real estate is sold as the classic path to wealth. But follow the money when you own a rental.",
      "Your property’s value rises, so your property tax rises. Your cash flow shrinks. To stay profitable, you raise the rent. Now your tenants work more hours to pay you, because the government made things more expensive for you first.",
      "If you rent through Section 8, the government has to borrow or tax more to cover the higher payments. The cost lands on everyone.",
      "Either way, you’ve become part of the pipeline that passes inflation down to the next person. Think of sharecropping: working land you don’t own, always in debt to someone higher up. It’s the same shape.",
      "A home should be a place to live, a utility, not a lottery ticket. When homes become investments, the people who just need somewhere to live get priced out.",
    ],
    figureAt: 2,
    figure: {
      type: "cycle",
      center: "The fiat cycle",
      steps: [
        "Home values rise",
        "Property taxes rise",
        "Cash flow shrinks",
        "Rent goes up",
        "Tenants work more",
        "Prices rise again",
      ],
    },
    takeaway: "More inflation, less happiness. Falling prices would give it back.",
  },
  {
    slug: "redefining-productivity",
    number: 10,
    part: "way-out",
    title: "Redefining Productivity",
    quote: "Who defines what is productive?",
    hook: "10 a.m. on a Tuesday.",
    figures: [
      {
        at: 0,
        figure: {
          type: "scene",
          lines: [
            "A garage door rolled up.",
            "Three grown men around a folding table.",
            "Dominoes slapping down. Something on the grill.",
            "Music low. Jokes loud.",
          ],
        },
      },
      {
        at: 9,
        figure: {
          type: "cards",
          caption: "Everyone has a role",
          items: [
            {
              label: "Young or in debt",
              text: "Learn new skills. Close the income gap. Cut back on spending and pay down debt.",
            },
            { label: "Wealthy", text: "Pass on your skills, your education and your assets." },
            {
              label: "Retired",
              text: "Plan your estate. Write a will, and consider a trust—how estates, wills and trusts work depends on your jurisdiction, so get professional advice. Pass your wealth to people who will use it wisely, even if they aren’t family.",
            },
          ],
        },
      },
    ],
    body: [
      "The easy joke is that nobody in that garage has a job. Ask the real question instead: who defines what is productive?",
      "Sit in that garage for a minute and notice how the same hour gets read two ways. In a wealthy neighborhood, people out jogging, riding bikes or lingering over a long lunch in the middle of a Tuesday read as a sign of a nice place to live. In a poor one, grown men passing the day outside at that same hour get read as a problem, as if they owe somebody an explanation. The behavior is the same: free time on a workday. The meaning depends on who is doing it. When you’re wealthy, free time looks like freedom. When you’re not, it looks like suspicion.",
      "Capitalist America says they’re unproductive, and it will crack the whip until they get back to work. Its idea of productive is narrow: working for a corporation. Not reading. Not raising your kids. Not checking on your neighbor.",
      "## The plantation was a business",
      "That narrow idea of productivity has deep roots. Historians have documented that plantations kept account books like corporations. Enslaved people were listed as assets on the balance sheet. Overseers recorded how many pounds of cotton each person picked every day and set quotas from it. Account books even tracked people’s “depreciation” as they aged. That is a record of how slavery itself operated—not a claim that today’s employees are enslaved, or that corporations have a single origin on the plantation.",
      "In one 1861 record, a 48-year-old foreman named Hercules was valued at $500, a 26-year-old named Middleton at $1,500, and a 9-month-old baby named George Washington at $150.",
      "## Building community takes time",
      "Those three men in the garage at 10 a.m. on a Tuesday aren’t wasting time. They’re building community. You can’t build community from nine to five. Artists know it too. You can’t clock in to create.",
      "So here’s the question: how can you build community if you’re in debt and working all the time?",
      "And when you make it, share less about the glamour and the trips, and more about how you did it. The next generation needs the map, not just the pictures.",
      "Bitcoin is a way to take the time back. If it holds its value or grows, money you keep today could cover more of your life tomorrow, and fewer of your hours get sold. It can also lose value, sometimes sharply, so treat that as a possibility, not a promise. Fewer hours sold means more time for each other.",
    ],
    sources: "Caitlin Rosenthal, Accounting for Slavery (Harvard University Press, 2018).",
    takeaway: "Time is the real wealth. Bitcoin is a way to buy it back.",
  },
  {
    slug: "the-bitcoin-solution",
    number: 11,
    part: "way-out",
    title: "The Bitcoin Solution",
    quote: "We’re in the very beginning stages. The beginning is always the rockiest, wildest time.",
    hook: "Scarce. Open to anyone. Yours to hold.",
    body: [
      "Only 21 million bitcoin will ever exist, under the issuance rules the network runs on today. No government, bank or company can print more. Changing the cap would require an overwhelming consensus among the people who run the software, and anyone is free to keep running the old rules instead. It has the scarcity of gold, without the vault or the truck—and holding your own keys makes it much harder to take, though never impossible.",
      "Think of it as infinity divided by 21 million. That’s a metaphor about scarcity, not a mathematical price prediction. No matter how many dollars get printed, there will only ever be 21 million bitcoin to go around. More than 95% of them have already been mined.",
      "Yes, the price swings. Bitcoin has crashed by 75% or more three times. In one sampled analysis, every daily buy date from January 2013 through September 2022—3,560 windows, each held for 1,461 days, four years, with exits through September 2026—ended ahead in dollars. That describes those sampled four-year periods, not every possible trade: the analysis used daily dollar prices and didn’t adjust for fees, taxes or inflation, and it guarantees nothing about the future. So only put in what you can leave alone.",
      "You don’t need to be rich, accredited or connected. You can start with $10 on your phone, and you don’t have to buy a whole coin.",
      "## Circular economies",
      "A circular economy keeps money moving inside a community instead of leaking out. People can pay each other directly, peer to peer, without a bank in the middle—though in practice there can still be fees and intermediaries, and it takes internet access, careful wallet security and merchants willing to accept it. If bitcoin gains value against the dollar, goods priced in bitcoin become cheaper for holders; if it loses value, they get more expensive. No outcome is guaranteed.",
      "It’s already being tried. In El Zonte, El Salvador, a project called Bitcoin Beach got dozens of local businesses to accept bitcoin. In a South African township, Bitcoin Ekasi pays its staff in bitcoin. These are experiments, not guarantees: El Salvador rolled back parts of its national bitcoin law in 2025.",
      "## The dream",
      "Imagine every Black person owning bitcoin. No bank required to hold it, though buying it usually starts at an exchange or onramp that may ask for ID. No currency conversion when you send money home. Pay farmers and local businesses directly, where they accept it.",
      "It could help narrow the banking gap. Black households are more than five times as likely as white households to have no bank account at all. Bitcoin isn’t a universal solution for the unbanked—it’s one tool that can help.",
      "## Get to one",
      "Bitcoiners use sea creatures to describe how much someone holds. Everyone starts somewhere.",
      "The goal is to get to one. One whole bitcoin, owned by you, your family or your nonprofit. Treat “get to one” as an aspiration to save toward, not advice that a whole coin is right for you: start small, cover your essentials and keep your emergency fund first, and never put in money you can’t afford to lose.",
      "There will never be enough bitcoin for more than about 1 in 390 people on Earth to each hold a whole one. That’s arithmetic: a 21 million cap against an illustrative world population of about 8.2 billion. It isn’t a wealth percentile, and owning one wouldn’t by itself make you one of the world’s richest people—but it would put you in a small club.",
      "One bitcoin trades at about $84,000 today (Sept 2026), and the price moves constantly. Some people talk about $500,000 a coin. That’s a hypothetical, not a forecast—no one knows where the price goes from here, and it can fall as hard as it climbs.",
      "We’re still early. Apple, Amazon and Disney all had rocky, wild beginnings. Bitcoin’s adoption and price aren’t guaranteed to follow that path. But by the time something becomes obvious, most of the wealth has already been made.",
    ],
    figures: [
      {
        at: 2,
        figure: {
          type: "line",
          title: "Bitcoin’s fixed supply",
          series: [{ label: "Bitcoin in existence", tone: "gold", points: btcSupplySeries }],
          yFormat: "btcMillions",
          xTicks: [
            { value: 2009, label: "2009" },
            { value: 2040, label: "2040" },
            { value: 2070, label: "2070" },
            { value: 2100, label: "2100" },
            { value: 2140, label: "2140" },
          ],
          alt: "Bitcoin’s supply rises toward a hard cap of 21 million, reached around 2140. Calendar years are approximate: halvings happen every 210,000 blocks, not on fixed dates.",
          source:
            "Bitcoin protocol issuance schedule (halvings every 210,000 blocks; calendar years approximate); 20 millionth bitcoin mined March 2026 (The Block).",
        },
      },
      {
        at: 3,
        figure: {
          type: "line",
          title: "Bitcoin price, year end (log scale)",
          series: [{ label: "Price", tone: "gold", points: btcPriceSeries }],
          yFormat: "usdShort",
          log: true,
          alt: "Bitcoin rose from $730 at the end of 2013 to about $84,000 in September 2026, with three crashes of 75% or more.",
          source:
            "Coin Metrics (CC BY-NC 4.0; reuse permission for this site pending); four-year hold analysis of daily prices, 2013–2026.",
        },
      },
      {
        at: 4,
        figure: {
          type: "stats",
          items: [
            { value: "21M", label: "bitcoin will ever exist" },
            { value: "100M", label: "sats make up one bitcoin" },
            { value: "$10", label: "is enough to start" },
          ],
        },
      },
      {
        at: 10,
        figure: {
          type: "bars",
          caption: "Households with no bank account (2023)",
          items: [
            {
              label: "Black",
              share: 100,
              display: "10.6%",
              note: "of Black households",
              tone: "accent",
            },
            {
              label: "White",
              share: 18,
              display: "1.9%",
              note: "of white households",
              tone: "cash",
            },
          ],
          source: "FDIC National Survey of Unbanked and Underbanked Households (2023).",
        },
      },
      {
        at: 12,
        figure: {
          type: "cards",
          items: [
            { label: "Shrimp", text: "Less than 1 bitcoin" },
            { label: "Crab", text: "1 to 10" },
            { label: "Fish", text: "10 to 100" },
            { label: "Shark", text: "100 to 1,000" },
            { label: "Whale", text: "1,000 or more" },
          ],
        },
      },
    ],
    sources: "Glassnode (holder cohorts and address counts); Axios (2022); Bitcoin Magazine (2022); Reason (2025).",
    takeaway: "Start with any amount. Hold it yourself.",
  },
];

export const startSteps: { title: string; text: string }[] = [
  {
    title: "Learn before you buy",
    text: "Read this book twice. Expect big price swings and decide now that you won’t panic-sell.",
  },
  {
    title: "Buy a small amount",
    text: "Use a well-known exchange or app. Start with money you won’t need for at least five years.",
  },
  {
    title: "Move it to your own wallet",
    text: "An exchange can freeze or lose your funds. A self-custody wallet puts you in control.",
  },
  {
    title: "Protect your recovery phrase",
    text: "Write the words on paper and keep them safe. Never type them into a website or share them. Whoever has the words has the bitcoin.",
  },
  {
    title: "Keep stacking",
    text: "Small, regular buys beat trying to time the market. Teach someone else what you learned.",
  },
];

export type BookPage =
  | { kind: "cover"; id: string; label: string }
  | { kind: "contents"; id: string; label: string }
  | { kind: "opener"; id: string; label: string; part: PartId; chapter: Chapter }
  | { kind: "body"; id: string; label: string; part: PartId; chapter: Chapter }
  | { kind: "start"; id: string; label: string; part: PartId }
  | { kind: "back"; id: string; label: string; part: PartId };

export function buildPages(): BookPage[] {
  const pages: BookPage[] = [
    { kind: "cover", id: "cover", label: "Cover" },
    { kind: "contents", id: "contents", label: "Contents" },
  ];
  for (const chapter of chapters) {
    const label = `${chapter.number}. ${chapter.title}`;
    pages.push({ kind: "opener", id: chapter.slug, label, part: chapter.part, chapter });
    pages.push({ kind: "body", id: `${chapter.slug}-read`, label, part: chapter.part, chapter });
  }
  pages.push({ kind: "start", id: "where-to-start", label: "Where to Start", part: "way-out" });
  pages.push({ kind: "back", id: "the-goal", label: "The Goal", part: "way-out" });
  return pages;
}

export function pageNumberOf(pages: BookPage[], id: string) {
  return pages.findIndex((p) => p.id === id) + 1;
}
