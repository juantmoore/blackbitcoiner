// Content for the Black Bitcoiners visual book.
// Copy is adapted from OUTLINE.md and the founder's recordings in /transcripts.
// Figures marked with `source` should be re-verified before launch.

export type PartId = "problem" | "money" | "assets" | "way-out";

export const parts: Record<PartId, { ordinal: string; name: string }> = {
  problem: { ordinal: "Part one", name: "The problem" },
  money: { ordinal: "Part two", name: "How money works" },
  assets: { ordinal: "Part three", name: "What to own" },
  "way-out": { ordinal: "Part four", name: "The way out" },
};

export type Figure =
  | { type: "stats"; items: { value: string; label: string }[]; source?: string }
  | {
      type: "compare";
      columns: [{ title: string; items: string[] }, { title: string; items: string[] }];
    }
  | { type: "timeline"; items: { year: string; text: string }[]; source?: string }
  | {
      type: "bars";
      caption: string;
      items: { label: string; share: number; display: string; note: string; tone: "cash" | "gold" }[];
      source?: string;
    }
  | { type: "table"; rows: { asset: string; good: string; catch: string; highlight?: boolean }[] }
  | { type: "cycle"; center: string; steps: string[] }
  | { type: "scene"; lines: string[] };

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
  takeaway: string;
};

export const chapters: Chapter[] = [
  {
    slug: "the-black-paradox",
    number: 1,
    part: "problem",
    title: "The Black Paradox",
    quote:
      "Academics like to point out problems, but they don’t offer many solutions. I never wanted to be that person.",
    hook: "What does wealth actually look like?",
    body: [
      "Among successful Black Americans, a small group builds wealth that lasts. Call them the 1% of the 1%. Their secret is boring: they live below their means, invest what’s left, and skip the flashy stuff.",
      "That’s not the picture our kids see. Rappers, athletes and entertainers show the chain, the car, the party. To a young person, that is what wealth looks like, so that’s what they chase.",
      "Pointing this out isn’t enough. Plenty of essays name the problem and stop there. This book is the other half: a way out you can actually use, built around one tool, Bitcoin, and written for us.",
    ],
    figure: {
      type: "stats",
      items: [
        { value: "47M", label: "Black Americans" },
        { value: "$1.6T", label: "spent every year" },
        { value: "$44,900", label: "median household wealth, vs. $285,000 for white households" },
      ],
      source:
        "U.S. Census 2020; Selig Center buying power estimate; Federal Reserve Survey of Consumer Finances 2022.",
    },
    takeaway: "We spend like a wealthy nation and own like a poor one.",
  },
  {
    slug: "the-two-problems",
    number: 2,
    part: "problem",
    title: "The Two Problems",
    quote:
      "The only way to have an opinion and not be controlled is to have enough wealth to have that opinion.",
    hook: "Most Bitcoin explainers start with money. This one starts with two problems.",
    body: [
      "Problem one is the money itself. Banks and governments create new dollars whenever they decide to. Every new dollar makes the ones in your pocket worth a little less. That’s inflation, and it never stops.",
      "Problem two is what we own. The wealth gap isn’t mainly about paychecks. It’s about assets: homes, businesses, land, investments. Things that grow while you sleep. We have far fewer of them.",
      "Put them together and you get a trap. The thing we hold most of, cash, is the thing losing value fastest.",
      "Wealth is freedom. Freedom to move to a better city, choose your kids’ school, leave a bad job, and say what you think without worrying about who signs your check.",
    ],
    figureAt: 3,
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
    takeaway: "Fix one without the other and you’re still stuck.",
  },
  {
    slug: "historical-foundation",
    number: 3,
    part: "problem",
    title: "Historical Foundation",
    quote: "Capital is like water. If you restrict the flow, you cut off the lifeline to a community.",
    hook: "Where did the wealth go?",
    body: [
      "It started with extraction. People, labor and resources were taken out of Africa to build wealth somewhere else. After slavery, Black Americans built anyway, and again and again what they built was taken.",
      "That’s why Black banks matter. A bank lets money circulate inside a community: loans for homes, for businesses, for new ideas. Capital is infrastructure. Choke it off and a neighborhood slowly dies.",
      "Here’s what the world rarely tells you: you already have everything you need. Your skin isn’t the problem. Your hair isn’t the problem. What’s been missing is access to tools that can’t be taken away.",
    ],
    figureAt: 2,
    figure: {
      type: "timeline",
      items: [
        { year: "1865", text: "The Freedman’s Savings Bank opens to serve formerly enslaved people." },
        { year: "1874", text: "The bank fails. About 61,000 depositors lose nearly $3 million." },
        { year: "1921", text: "A white mob burns Greenwood in Tulsa, the neighborhood known as Black Wall Street." },
        { year: "1930s", text: "Federal “redlining” maps mark Black neighborhoods as too risky for loans." },
      ],
      source: "Federal Reserve History; Tulsa Race Massacre Commission report (2001).",
    },
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
    ],
    figureAt: 2,
    figure: {
      type: "timeline",
      items: [
        { year: "1913", text: "Congress creates the Federal Reserve." },
        { year: "1933", text: "Executive Order 6102 orders Americans to turn in most of their gold." },
        { year: "1934", text: "Gold is repriced from $20.67 to $35 an ounce. Overnight, every dollar buys less." },
        { year: "1971", text: "President Nixon ends the conversion of dollars into gold." },
        { year: "1974", text: "Americans may legally own gold again, starting December 31." },
      ],
      source: "Federal Reserve History; Gold Reserve Act of 1934.",
    },
    takeaway: "Money that can be printed without limit will be.",
  },
  {
    slug: "inflation",
    number: 5,
    part: "money",
    title: "Inflation",
    subtitle: "The hidden tax",
    quote: "Ever think about $10,000 stored in a mattress? What is that $10,000 worth now?",
    hook: "Why can’t you keep money under the mattress?",
    body: [
      "Picture it. It’s 1971. You stuff $10,000 in a mattress and leave it. Your neighbor buys gold with the same $10,000, about 285 ounces at $35 each.",
      "Today your cash buys roughly what $1,300 bought back then. Your neighbor’s gold is worth more than half a million dollars.",
      "The gold didn’t get better. The dollar got worse. Dollars cost almost nothing to create. Gold takes energy, labor and time to pull out of the ground. Things that are hard to make hold their value.",
      "The official number says inflation runs a few percent a year. Your grocery receipt says otherwise: food prices rose about 25% between 2019 and 2024. The “core” number you hear most leaves out food and energy, and home prices aren’t counted directly.",
      "That’s why inflation is a tax. Nobody votes on it, but it takes a cut of every hour you work. It pushes retirement further out and keeps you paying off debts that never seem to shrink.",
    ],
    figureAt: 2,
    figure: {
      type: "bars",
      caption: "The same $10,000, set aside in 1971",
      items: [
        {
          label: "Cash in a mattress",
          share: 2,
          display: "$10,000",
          note: "Buys what about $1,300 did in 1971",
          tone: "cash",
        },
        {
          label: "285 ounces of gold",
          share: 100,
          display: "$500,000+",
          note: "Held its buying power and then some",
          tone: "gold",
        },
      ],
      source: "BLS CPI-U; historical gold price $35/oz (1971). USDA ERS Food Price Outlook. Recheck gold price before launch.",
    },
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
      "A zombie company doesn’t make a profit and has no real plan to. It stays alive by borrowing more. Cheap money keeps it walking.",
      "During COVID, hundreds of billions went out through programs like PPP loans. Some of it saved good businesses. A lot of it kept failing ones on life support, paid for with newly created money.",
      "Meanwhile, private equity firms buy companies, load them with debt, pull out cash, and leave workers with pink slips.",
      "Call it what it is: capitalism for you, socialism for them. When big players lose, they get bailouts. When you lose, you get a late fee.",
      "Failure is healthy. When a bad business dies, prices fall, assets go on sale, and something better takes its place. After the 2008 crash, home prices bottomed around 2012 and families could afford to buy. Today we call the opposite an affordability crisis.",
    ],
    figureAt: 4,
    figure: {
      type: "compare",
      columns: [
        {
          title: "Let it fail",
          items: ["The bad company closes", "Its assets go on sale", "Prices come down", "A better company replaces it"],
        },
        {
          title: "Bail it out",
          items: ["The bad company borrows more", "New money is created", "Prices go up", "You pay the bill"],
        },
      ],
    },
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
      "Governments fight it hard. The U.S. owes more than $37 trillion. Inflation lets that debt be paid back in cheaper dollars. Deflation makes it heavier.",
      "Debt is a promise your future self has to keep. National debt is a promise our children will have to keep.",
      "When prices fall, people save more, need to work less, and pay less income tax. That’s more freedom for you and less control for them.",
      "You can’t wait for them to hand you deflation. You need to own something that grows faster than prices rise, so your life gets cheaper even while their money doesn’t.",
    ],
    figureAt: 3,
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
      "Of the traditional options, index funds are the best bet. But only one asset on this list is scarce, open to anyone with a phone, and something you can hold yourself.",
    ],
    figureAt: 1,
    figure: {
      type: "table",
      rows: [
        { asset: "Cash", good: "Easy to spend", catch: "Printed without limit; loses value every year" },
        { asset: "Silver & copper", good: "Rise when demand is high", catch: "Cheap to mine more; fall when demand drops" },
        { asset: "Gold", good: "Hard to produce; money for thousands of years", catch: "Heavy to move, costly to store, has been confiscated" },
        { asset: "Real estate", good: "Useful and tangible", catch: "Depends on location; taxes and HOAs mean you never fully own it" },
        { asset: "Private companies", good: "Big upside", catch: "Most fail; access is mostly for the already wealthy" },
        { asset: "Single stocks", good: "Easy to buy", catch: "Your money is in a CEO’s hands; shares can be diluted" },
        { asset: "Index funds", good: "A basket of companies; the best traditional bet", catch: "Still priced in dollars and tied to the system" },
        {
          asset: "Bitcoin",
          good: "Only 21 million, ever; anyone can buy it; you can hold it yourself",
          catch: "The price swings hard in the short term",
          highlight: true,
        },
      ],
    },
    takeaway: "Every asset has a flaw. Pick the one whose flaw fades with time.",
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
    quote: "What’s wrong with that?",
    hook: "10 a.m. on a Tuesday.",
    figureAt: 0,
    figure: {
      type: "scene",
      lines: [
        "A garage door rolled up.",
        "Three grown men around a folding table.",
        "Dominoes slapping down. Something on the grill.",
        "Music low. Jokes loud.",
      ],
    },
    body: [
      "The easy joke is that nobody in that garage has a job. Ask the real question instead: what’s wrong with that?",
      "Capitalist America says they’re unproductive, and it will crack the whip until they get back to work. Its idea of productive is narrow: working for a corporation. Not reading. Not raising your kids. Not checking on your neighbor.",
      "Yet that garage is where community gets built. You can’t build community from nine to five. Artists know it too. You can’t clock in to create.",
      "Bitcoin is a way to take the time back. Hold money that grows in value and your life gets cheaper over time. A cheaper life means fewer hours sold. Fewer hours sold means more time for each other.",
    ],
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
      "Only 21 million bitcoin will ever exist. No government, bank or company can print more. It has the scarcity of gold, without the vault, the truck or the confiscation order.",
      "Yes, the price swings. Volatility just means it moves up and down. Historically, people who held through the swings for four years or more have usually come out ahead, because demand has kept growing and supply can’t. The past doesn’t guarantee the future, so only put in what you can leave alone.",
      "You don’t need to be rich, accredited or connected. You can start with $10 on your phone, and you don’t have to buy a whole coin.",
      "You can use it outside the system, paying people directly as long as they value it too. As bitcoin rises, groceries cost more in dollars but less in bitcoin.",
      "We’re still early. Apple, Amazon and Disney all had rocky, wild beginnings. By the time something becomes obvious, most of the wealth has already been made.",
    ],
    figureAt: 3,
    figure: {
      type: "stats",
      items: [
        { value: "21M", label: "bitcoin will ever exist" },
        { value: "100M", label: "sats make up one bitcoin" },
        { value: "$10", label: "is enough to start" },
      ],
    },
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
