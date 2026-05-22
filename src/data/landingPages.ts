export interface LandingFaq {
  q: string;
  a: string;
}

export interface LandingItem {
  title: string;
  body: string;
}

export interface LandingBlock {
  eyebrow?: string;
  heading: string;
  intro?: string;
  numbered?: boolean;
  dark?: boolean;
  items: LandingItem[];
}

export interface LandingPage {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  heroHook: string;
  intro: string[];
  reframe: { eyebrow: string; heading: string; body: string[] };
  blocks: LandingBlock[];
  whoThisIsFor: { heading: string; intro: string; items: string[] };
  closing: { heading: string; body: string[] };
  faqs: LandingFaq[];
  serviceName: string;
  areaServed: string[];
  related: { label: string; href: string }[];
}

// Shared building blocks reused across the corridor town pages. The unique
// content of each town page (hero, intro, reframe, who-this-is-for, FAQs)
// carries the differentiation; these describe the firm's actual service.
const coordinateItems: LandingItem[] = [
  {
    title: 'Investment management',
    body: 'Goal-aligned, tax-aware portfolios built around your plan and your timeline, held at Charles Schwab and monitored continuously.',
  },
  {
    title: 'Proactive tax coordination',
    body: 'We work alongside your CPA throughout the year — Roth conversions, gain and loss timing, charitable strategy — so tax planning happens before the return, not after.',
  },
  {
    title: 'Estate and legacy coordination',
    body: 'We work with your estate attorney to keep documents, titling, and beneficiary designations current and aligned with your wishes.',
  },
  {
    title: 'Risk and insurance review',
    body: 'An independent look at life, disability, liability, and long-term-care coverage to find the gaps before they find you.',
  },
  {
    title: 'Business owner planning',
    body: 'For owners, we treat the company as the central asset it is — entity structure, retirement plans, and eventual succession or sale.',
  },
];

const processBlock: LandingBlock = {
  eyebrow: 'How It Works',
  heading: 'How working with Canyon begins',
  intro:
    'There is no cost and no obligation to find out whether we are the right fit. The path is deliberately simple.',
  numbered: true,
  dark: true,
  items: [
    {
      title: 'A discovery call',
      body: 'A relaxed conversation about your situation, your questions, and what you want your wealth to do. We both decide whether it makes sense to go further.',
    },
    {
      title: 'A clear look at where you stand',
      body: 'We review your full picture — investments, tax exposure, estate documents, insurance, and business — and show you what we see, including what is working and what is not.',
    },
    {
      title: 'Coordinated implementation',
      body: 'We put the plan into motion and bring your CPA, attorney, and other professionals into the same conversation, so nothing falls between the cracks.',
    },
    {
      title: 'Ongoing review',
      body: 'We meet formally twice a year and stay available between meetings as life and markets change. The plan is living, not a binder on a shelf.',
    },
  ],
};

// FAQ fragments shared across pages — accurate, compliance-reviewed wording.
const minimumFaq: LandingFaq = {
  q: 'Is there a minimum to work with Canyon?',
  a: 'Canyon Strategic Wealth is built for families and business owners with roughly $1 million or more in investable assets. That figure describes the households we serve best rather than a rigid cutoff — if your situation is complex, a discovery call is the right way to find out whether we are a fit.',
};

const paidFaq: LandingFaq = {
  q: 'How is Canyon Strategic Wealth paid?',
  a: 'Canyon is a fee-based fiduciary firm. Most of our compensation comes from straightforward advisory fees for managing assets and providing planning. As a fee-based firm, we may also receive a commission on certain insurance or annuity products when a client chooses to implement one; whenever that is the case, we disclose the arrangement and the conflict of interest it creates.',
};

const fiduciaryFaq: LandingFaq = {
  q: 'Are you actually a fiduciary?',
  a: "Yes. Canyon Strategic Wealth is a registered investment adviser, which carries a fiduciary obligation to act in your best interest. You can verify our registration on the SEC's investment adviser public disclosure site under CRD #325175.",
};

const firstMeetingFaq: LandingFaq = {
  q: 'What does the first meeting cost?',
  a: 'Nothing. The discovery call is complimentary and carries no obligation. Its only purpose is for both of us to decide whether working together makes sense.',
};

export const landingPages: LandingPage[] = [
  // ─────────────────────────────────────────────────────────────
  // 1. BOUNTIFUL — the flagship town page
  // ─────────────────────────────────────────────────────────────
  {
    slug: 'financial-advisor-bountiful-ut',
    metaTitle: 'Financial Advisor in Bountiful, UT | Canyon Strategic Wealth',
    metaDescription:
      'Fiduciary financial advisor in Bountiful, Utah. Canyon Strategic Wealth is a virtual family office for families and business owners with $1M+ in investable assets. Led by a CFP professional. Schedule a complimentary discovery call.',
    h1: 'Financial Advisor in Bountiful, Utah',
    heroHook:
      'Your financial life has more moving parts than a single account statement can hold — a business, a portfolio, equity, real estate, a tax bill that climbs every year. Canyon Strategic Wealth is a virtual family office in Bountiful, built for families and business owners with $1 million or more in investable assets.',
    intro: [
      `Canyon Strategic Wealth is an independent, fiduciary registered investment adviser headquartered in Bountiful at 450 S 400 E. We were founded in 2017, and today we coordinate the financial lives of more than 100 families across Davis County and the greater Salt Lake area.`,
      `Bountiful is well served by financial professionals — but most of them do one thing. A brokerage sells investments. A retirement shop sells an income plan. An insurance office sells policies. What is missing is the person who sits above all of it, connecting your investments, your taxes, your estate plan, your insurance, and your business into one strategy that actually fits together. That is the role we play.`,
      `Our advisor, Jake Cazier, is a CERTIFIED FINANCIAL PLANNER™ professional. As a fiduciary, the firm is obligated to put your interests first — not sometimes, but in every recommendation we make. Your assets are held at Charles Schwab, an independent custodian, so the people advising you are never the people holding your money.`,
    ],
    reframe: {
      eyebrow: 'The Real Problem',
      heading: "Most people don't have a returns problem. They have a coordination problem.",
      body: [
        `By the time a household reaches $1 million or more in investable assets, the challenge is rarely picking a better mutual fund. The challenge is that no one is in charge of the whole picture. The CPA files the return but never sees the portfolio. The attorney drafts the trust but never hears about the new business. The investment account grows without anyone asking what it is costing in taxes.`,
        `The result is a financial life that runs as a set of disconnected parts — each one managed competently, the whole thing managed by no one. Decisions get made in isolation, opportunities get missed, and the tax bill is larger than it needs to be.`,
        `A virtual family office solves that by design. We become the coordinating hub: the team that holds the entire picture, brings your other professionals to the same table, and makes sure every decision is made with the rest of your plan in view.`,
      ],
    },
    blocks: [
      {
        eyebrow: 'What We Do',
        heading: 'What Canyon coordinates for a Bountiful household',
        intro:
          'A virtual family office is defined by breadth. These are the areas we manage and coordinate as one connected strategy.',
        items: coordinateItems,
      },
      processBlock,
    ],
    whoThisIsFor: {
      heading: 'Who Canyon Strategic Wealth is built for',
      intro:
        'We are not the right firm for everyone, and we would rather say so early. Canyon tends to be the right fit for:',
      items: [
        'Families and business owners in Bountiful and across Davis County with $1 million or more in investable assets.',
        'Business owners who are five to ten years from a sale, a transition, or a succession decision.',
        'Pre-retirees and retirees with enough complexity — equity, multiple accounts, property, concentrated positions — that coordination genuinely matters.',
        'People who would rather have one team coordinating everything than a folder of separate professionals who never speak to each other.',
        'People who value a fiduciary relationship and straightforward advice over a sales pitch.',
      ],
    },
    closing: {
      heading: 'A local firm, built for the way your life actually works',
      body: [
        `Canyon Strategic Wealth has called Bountiful home since 2017. Our office is on 400 East, minutes from downtown — and because we operate as a virtual family office, how you work with us is up to you, whether that means meeting in person or handling everything by video and phone.`,
        `If your financial life has grown past the point where one account statement can describe it, a conversation costs you nothing. Let's talk about what coordinated really looks like.`,
      ],
    },
    faqs: [
      {
        q: 'Where is your office located?',
        a: 'Canyon Strategic Wealth is located at 450 S 400 E, Bountiful, UT 84010 — a few minutes from downtown Bountiful and roughly fifteen minutes north of Salt Lake City.',
      },
      {
        q: 'Do I have to meet in person?',
        a: 'No. We operate as a virtual family office, which means you can work with us entirely by video and phone, entirely in person at our Bountiful office, or any mix of the two. Many of our clients across Davis County rarely come into the office at all.',
      },
      minimumFaq,
      paidFaq,
      fiduciaryFaq,
      firstMeetingFaq,
      {
        q: 'What makes Canyon different from the other advisors in Bountiful?',
        a: 'Most Bountiful-area firms focus on one piece — investments, retirement income, or insurance. Canyon is a virtual family office: we coordinate investments, tax, estate, insurance, and business planning as one strategy, led by a CERTIFIED FINANCIAL PLANNER professional and held to a fiduciary standard.',
      },
    ],
    serviceName: 'Financial Advisory and Wealth Management',
    areaServed: ['Bountiful, UT', 'Davis County, UT'],
    related: [
      { label: 'Financial Advisor in Centerville', href: '/financial-advisor-centerville-ut' },
      { label: 'Financial Advisor in Farmington', href: '/financial-advisor-farmington-ut' },
      { label: 'Financial Advisor in Kaysville', href: '/financial-advisor-kaysville-ut' },
      { label: 'What a Virtual Family Office Is', href: '/virtual-family-office' },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 2. CENTERVILLE
  // ─────────────────────────────────────────────────────────────
  {
    slug: 'financial-advisor-centerville-ut',
    metaTitle: 'Financial Advisor in Centerville, UT | Canyon Strategic Wealth',
    metaDescription:
      'Fiduciary financial advisor for Centerville, Utah. Canyon Strategic Wealth is a virtual family office for families and business owners with $1M+ in investable assets, minutes away in Bountiful. Schedule a discovery call.',
    h1: 'Financial Advisor in Centerville, Utah',
    heroHook:
      'Centerville sits in the middle of one of Utah’s most established communities — and the financial advice available locally is mostly national brokerages and retirement-income shops. Canyon Strategic Wealth offers something different: a fiduciary virtual family office for Centerville families and business owners with $1 million or more in investable assets.',
    intro: [
      `Canyon Strategic Wealth serves Centerville from our office in neighboring Bountiful, just a few minutes south. We are an independent, fiduciary registered investment adviser, founded in 2017, and we coordinate the financial lives of more than 100 families across Davis County.`,
      `Centerville is a quiet, affluent community — long settled, with a high share of established households and successful professionals and business owners. What it does not have is a wealth advisor positioned the way the ultra-wealthy are served: a single team coordinating investments, tax, estate, and insurance as one plan. The advisors with a Centerville footprint are largely branches of national firms. Canyon fills that gap.`,
      `Our advisor, Jake Cazier, is a CERTIFIED FINANCIAL PLANNER™ professional, and the firm is held to a fiduciary standard — obligated to put your interests first in every recommendation. Client assets are custodied at Charles Schwab, an independent custodian.`,
    ],
    reframe: {
      eyebrow: 'The Real Problem',
      heading: 'The question is not who manages your investments. It is who manages the whole picture.',
      body: [
        `Most Centerville households with real assets are not short on financial help. They have an investment account, a CPA, probably an attorney who drafted a trust years ago, and an insurance agent somewhere in the mix. What they do not have is anyone connecting those people.`,
        `So the portfolio grows without anyone weighing the tax cost. The estate documents quietly go stale. The insurance is never re-examined. Each professional does their piece well; no one is responsible for how the pieces fit — and that gap is where money is quietly lost.`,
        `A virtual family office exists to close that gap. Canyon becomes the coordinating center of your financial life — holding the full picture, bringing your other advisors to the same table, and making sure every decision accounts for the rest of the plan.`,
      ],
    },
    blocks: [
      {
        eyebrow: 'What We Do',
        heading: 'What Canyon coordinates for a Centerville household',
        intro:
          'A virtual family office is defined by breadth. These are the areas we manage and coordinate as one connected strategy.',
        items: coordinateItems,
      },
      processBlock,
    ],
    whoThisIsFor: {
      heading: 'Who Canyon Strategic Wealth is built for',
      intro: 'Canyon is not the right firm for everyone. We tend to be the right fit for:',
      items: [
        'Established Centerville families and business owners with $1 million or more in investable assets.',
        'Business owners who are five to ten years from a sale, a transition, or a succession decision.',
        'Pre-retirees and retirees with enough complexity — equity, multiple accounts, property, concentrated positions — that coordination genuinely matters.',
        'People who would rather have one team coordinating everything than a folder of separate professionals who never speak to each other.',
        'People who value a fiduciary relationship and straightforward advice over a sales pitch.',
      ],
    },
    closing: {
      heading: 'A few minutes away, and built around your life',
      body: [
        `Our Bountiful office is a short drive from anywhere in Centerville — but as a virtual family office, Canyon is designed so the location barely matters. You can work with us by video and phone, in person, or any combination that suits you.`,
        `If your financial life has outgrown a single statement, a discovery call costs nothing and carries no obligation. We would welcome the chance to show you what coordinated looks like.`,
      ],
    },
    faqs: [
      {
        q: 'Do you have an office in Centerville?',
        a: 'Canyon Strategic Wealth serves Centerville clients from our office at 450 S 400 E in Bountiful — a short drive south. Because we operate as a virtual family office, most clients work with us through a mix of video, phone, and occasional in-person meetings, so the office location rarely affects the day-to-day relationship.',
      },
      {
        q: 'Do you actually work with Centerville families?',
        a: 'Yes. Centerville sits in the heart of the Davis County corridor we serve, alongside Bountiful, Farmington, and Kaysville. Its proximity to our Bountiful office makes Centerville one of our most natural markets.',
      },
      minimumFaq,
      paidFaq,
      fiduciaryFaq,
      firstMeetingFaq,
      {
        q: 'What makes Canyon different from the national firms with a Centerville presence?',
        a: 'A national brokerage branch typically focuses on managing investments, within the products and structure of the parent company. Canyon is independent and operates as a virtual family office — coordinating investments, tax, estate, insurance, and business planning together, under a fiduciary standard, led by a CFP professional.',
      },
    ],
    serviceName: 'Financial Advisory and Wealth Management',
    areaServed: ['Centerville, UT', 'Davis County, UT'],
    related: [
      { label: 'Financial Advisor in Bountiful', href: '/financial-advisor-bountiful-ut' },
      { label: 'Financial Advisor in Farmington', href: '/financial-advisor-farmington-ut' },
      { label: 'Financial Advisor in Kaysville', href: '/financial-advisor-kaysville-ut' },
      { label: 'What a Virtual Family Office Is', href: '/virtual-family-office' },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 3. FARMINGTON
  // ─────────────────────────────────────────────────────────────
  {
    slug: 'financial-advisor-farmington-ut',
    metaTitle: 'Financial Advisor in Farmington, UT | Canyon Strategic Wealth',
    metaDescription:
      'Fiduciary financial advisor for Farmington, Utah — our advisor’s home. Canyon Strategic Wealth is a virtual family office for families and business owners with $1M+ in investable assets. Schedule a discovery call.',
    h1: 'Financial Advisor in Farmington, Utah',
    heroHook:
      'Farmington has grown quickly — new neighborhoods, new businesses, and a wave of households whose wealth has outpaced the advice they set up years ago. Canyon Strategic Wealth is a fiduciary virtual family office for Farmington families and business owners with $1 million or more in investable assets — and it is where our advisor calls home.',
    intro: [
      `Canyon Strategic Wealth serves Farmington from our office in nearby Bountiful, a short drive south on I-15. Just as important: Farmington is home for our advisor, Jake Cazier. This is not a market we cover from a distance — it is our community.`,
      `Farmington has changed faster than almost anywhere in Davis County. Station Park, steady development, and strong schools have drawn a generation of successful families and business owners. Many of them are still working with the advisor, the account, or the insurance setup they chose long before their wealth and their lives grew this complex. The local options skew toward national rollups and brokerage branches; what is scarce is an independent, fiduciary firm that coordinates the entire picture.`,
      `Jake Cazier is a CERTIFIED FINANCIAL PLANNER™ professional, and Canyon is held to a fiduciary standard. Client assets are held at Charles Schwab, an independent custodian, separate from the firm that advises you.`,
    ],
    reframe: {
      eyebrow: 'The Real Problem',
      heading: "Your wealth has grown. The plan around it usually hasn't.",
      body: [
        `A common Farmington story: the income climbed, the business did well, the house appreciated, the accounts grew — but the financial setup never caught up. The advice still reflects a simpler chapter, when one account and one agent were enough.`,
        `Now there are several accounts, a tax bill that stings, an estate plan written for an earlier version of the family, and insurance no one has revisited in years. Each piece is handled by someone different, and no one is connecting them. That disconnect is expensive, and it compounds quietly.`,
        `A virtual family office is the fix. Canyon becomes the coordinating hub of your financial life — holding the whole picture, bringing your CPA and attorney to the same table, and making sure each decision is made with everything else in view.`,
      ],
    },
    blocks: [
      {
        eyebrow: 'What We Do',
        heading: 'What Canyon coordinates for a Farmington household',
        intro:
          'A virtual family office is defined by breadth. These are the areas we manage and coordinate as one connected strategy.',
        items: coordinateItems,
      },
      processBlock,
    ],
    whoThisIsFor: {
      heading: 'Who Canyon Strategic Wealth is built for',
      intro:
        'We are not the right firm for everyone, and we would rather say so early. Canyon tends to be the right fit for:',
      items: [
        'Farmington families and business owners with $1 million or more in investable assets.',
        'Business owners who are five to ten years from a sale, a transition, or a succession decision.',
        'Pre-retirees and retirees with enough complexity — equity, multiple accounts, property, concentrated positions — that coordination genuinely matters.',
        'People who would rather have one team coordinating everything than a folder of separate professionals who never speak to each other.',
        'People who value a fiduciary relationship and straightforward advice over a sales pitch.',
      ],
    },
    closing: {
      heading: 'An advisor who lives where you live',
      body: [
        `Canyon's office is a short drive south in Bountiful, and our advisor lives right here in Farmington. As a virtual family office, we are built to work with you however you prefer — by video, by phone, or in person.`,
        `If your financial life has outgrown the plan you built years ago, a discovery call costs nothing. Let's talk about what coordinated looks like now.`,
      ],
    },
    faqs: [
      {
        q: 'Do you have an office in Farmington?',
        a: 'Canyon Strategic Wealth serves Farmington from our office at 450 S 400 E in Bountiful, a short drive south. Our advisor, Jake Cazier, lives in Farmington — so while the office is in Bountiful, this is very much a home market for the firm. As a virtual family office, we also work with most clients through a flexible mix of video, phone, and in-person meetings.',
      },
      {
        q: 'Farmington has several established advisors already. Why Canyon?',
        a: 'Many of the firms with a Farmington presence are national rollups or brokerage branches focused mainly on investments. Canyon is independent and operates as a virtual family office — coordinating investments, tax, estate, insurance, and business planning as one strategy, under a fiduciary standard and led by a CFP professional.',
      },
      minimumFaq,
      paidFaq,
      fiduciaryFaq,
      firstMeetingFaq,
    ],
    serviceName: 'Financial Advisory and Wealth Management',
    areaServed: ['Farmington, UT', 'Davis County, UT'],
    related: [
      { label: 'Financial Advisor in Bountiful', href: '/financial-advisor-bountiful-ut' },
      { label: 'Financial Advisor in Centerville', href: '/financial-advisor-centerville-ut' },
      { label: 'Financial Advisor in Kaysville', href: '/financial-advisor-kaysville-ut' },
      { label: 'What a Virtual Family Office Is', href: '/virtual-family-office' },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 4. KAYSVILLE
  // ─────────────────────────────────────────────────────────────
  {
    slug: 'financial-advisor-kaysville-ut',
    metaTitle: 'Financial Advisor in Kaysville, UT | Canyon Strategic Wealth',
    metaDescription:
      'Fiduciary financial advisor for Kaysville, Utah. Canyon Strategic Wealth is a virtual family office for families and business owners with $1M+ in investable assets, serving Kaysville and growing toward it. Schedule a discovery call.',
    h1: 'Financial Advisor in Kaysville, Utah',
    heroHook:
      'Kaysville is one of Davis County’s most established and affluent communities — and one Canyon Strategic Wealth is growing toward. We are a fiduciary virtual family office for Kaysville families and business owners with $1 million or more in investable assets.',
    intro: [
      `Canyon Strategic Wealth serves Kaysville families today from our office in Bountiful, a straightforward drive south on I-15 — and Kaysville is central to where the firm is headed. As Canyon grows, a Kaysville presence is part of the plan; for now, Kaysville clients are served from Bountiful and through our virtual family office model.`,
      `Kaysville is a sizeable, prosperous Davis County city, and like much of the corridor it is served mainly by brokerage offices, retirement-income shops, and bank and credit-union investment programs. There is no shortage of people willing to manage a portfolio. What is genuinely scarce is an independent, fiduciary firm that coordinates a household's entire financial life — investments, tax, estate, insurance, and business — as a single strategy.`,
      `Canyon's advisor, Jake Cazier, is a CERTIFIED FINANCIAL PLANNER™ professional, and the firm is held to a fiduciary standard. Client assets are custodied at Charles Schwab, an independent custodian.`,
    ],
    reframe: {
      eyebrow: 'The Real Problem',
      heading: 'More advisors does not mean more coordination.',
      body: [
        `Kaysville has many licensed advisors, and most households with real assets already work with one. They also have a CPA, often an attorney, and an insurance agent. The pieces are covered. What is missing is the connection between them.`,
        `When no one holds the whole picture, the portfolio is managed without regard to the tax return, the estate documents drift out of date, and the insurance goes unexamined for years. Every professional does their part; no one is accountable for the result. That gap quietly costs families money.`,
        `A virtual family office is built to close it. Canyon becomes the coordinating center — holding the full picture, bringing your other professionals together, and ensuring each decision reflects the rest of the plan.`,
      ],
    },
    blocks: [
      {
        eyebrow: 'What We Do',
        heading: 'What Canyon coordinates for a Kaysville household',
        intro:
          'A virtual family office is defined by breadth. These are the areas we manage and coordinate as one connected strategy.',
        items: coordinateItems,
      },
      processBlock,
    ],
    whoThisIsFor: {
      heading: 'Who Canyon Strategic Wealth is built for',
      intro: 'Canyon is not the right firm for everyone. We tend to be the right fit for:',
      items: [
        'Kaysville families and business owners with $1 million or more in investable assets.',
        'Business owners who are five to ten years from a sale, a transition, or a succession decision.',
        'Pre-retirees and retirees with enough complexity — equity, multiple accounts, property, concentrated positions — that coordination genuinely matters.',
        'People who would rather have one team coordinating everything than a folder of separate professionals who never speak to each other.',
        'People who value a fiduciary relationship and straightforward advice over a sales pitch.',
      ],
    },
    closing: {
      heading: 'Serving Kaysville now — and growing toward it',
      body: [
        `Today, Canyon serves Kaysville clients from our Bountiful office and through our virtual family office model, which is built so that location rarely affects the relationship — you can work with us by video, by phone, in person, or any combination. As the firm grows, a closer Kaysville presence is part of the plan.`,
        `If your financial life has more moving parts than your current advice accounts for, a discovery call costs nothing and carries no obligation.`,
      ],
    },
    faqs: [
      {
        q: 'Do you have an office in Kaysville?',
        a: "Not yet. Canyon Strategic Wealth currently serves Kaysville clients from our office at 450 S 400 E in Bountiful, a short drive south on I-15, and through our virtual family office model. A Kaysville presence is part of the firm's growth plans. In the meantime, our virtual model is built so that the office location rarely affects how you work with us.",
      },
      {
        q: 'Can you work with Kaysville families effectively from Bountiful?',
        a: 'Yes. Canyon operates as a virtual family office by design — most clients work with us through a flexible mix of video, phone, and in-person meetings. Kaysville sits within the Davis County corridor we serve, and distance from the office does not change the depth of the relationship.',
      },
      minimumFaq,
      paidFaq,
      fiduciaryFaq,
      firstMeetingFaq,
    ],
    serviceName: 'Financial Advisory and Wealth Management',
    areaServed: ['Kaysville, UT', 'Davis County, UT'],
    related: [
      { label: 'Financial Advisor in Bountiful', href: '/financial-advisor-bountiful-ut' },
      { label: 'Financial Advisor in Centerville', href: '/financial-advisor-centerville-ut' },
      { label: 'Financial Advisor in Farmington', href: '/financial-advisor-farmington-ut' },
      { label: 'What a Virtual Family Office Is', href: '/virtual-family-office' },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 5. VIRTUAL FAMILY OFFICE — the positioning page
  // ─────────────────────────────────────────────────────────────
  {
    slug: 'virtual-family-office',
    metaTitle: 'Virtual Family Office in Utah | Canyon Strategic Wealth',
    metaDescription:
      'A virtual family office for Utah families and business owners with $1M+ in investable assets — family-office-style coordination of investments, tax, estate, and insurance, without a $30M minimum.',
    h1: 'A Virtual Family Office for Utah Families and Business Owners',
    heroHook:
      'The wealthiest families in the country do not manage money one account at a time. They run a family office — a single team that coordinates everything. Canyon Strategic Wealth brings that model to families and business owners with $1 million or more in investable assets.',
    intro: [
      `A traditional family office is a private team — investment, tax, legal, and administrative professionals — dedicated to a single wealthy family. It is how families with hundreds of millions of dollars keep their financial lives coordinated. It is also expensive to run, which has always put it out of reach for everyone else.`,
      `A virtual family office delivers the same idea in a different structure. Instead of hiring a full team in-house, you work with one coordinating firm that holds your entire financial picture and brings the right specialists — your CPA, your estate attorney, insurance specialists — to the same table. You get family-office coordination without the family-office overhead.`,
      `That is what Canyon Strategic Wealth is. We are an independent, fiduciary registered investment adviser, founded in 2017 and based in Bountiful, Utah, serving more than 100 families across the state. Our advisor, Jake Cazier, is a CERTIFIED FINANCIAL PLANNER™ professional.`,
    ],
    reframe: {
      eyebrow: 'Rethinking the Threshold',
      heading: 'You do not need $50 million to deserve a coordinated financial life.',
      body: [
        `The assumption built into the wealth industry is that family-office-style coordination is a privilege of the ultra-wealthy, and everyone else gets a product: an investment account here, an insurance policy there, a tax return in April, all managed by people who never speak to each other.`,
        `But coordination is not a function of net worth. It is a function of complexity. A family with $2 million in investable assets, a business, equity compensation, rental property, and a blended family has every bit as much to coordinate as a far wealthier household — and far less margin for the cost of getting it wrong.`,
        `Utah's existing family offices are built for the ultra-wealthy, typically with minimums in the tens of millions. The virtual family office model exists precisely for the family that has real complexity and real assets but is not — and may never be — a $30 million household. That family deserves a quarterback too.`,
      ],
    },
    blocks: [
      {
        eyebrow: 'What We Do',
        heading: 'What a virtual family office actually coordinates',
        intro:
          'A virtual family office is defined by breadth. Rather than managing one slice of your finances, Canyon coordinates the whole.',
        items: [
          {
            title: 'Investment management',
            body: 'Goal-aligned, tax-aware portfolios held at Charles Schwab, an independent custodian, and monitored continuously against your plan.',
          },
          {
            title: 'Tax strategy and coordination',
            body: 'Year-round coordination with your CPA — conversions, gain and loss timing, charitable strategy — so tax planning happens before the return.',
          },
          {
            title: 'Estate and legacy planning',
            body: 'We work with your estate attorney to keep documents, titling, and beneficiaries aligned with your wishes as life changes.',
          },
          {
            title: 'Risk and insurance review',
            body: 'An independent review of life, disability, liability, and long-term-care coverage — finding the gaps before they find you.',
          },
          {
            title: 'Business owner and liquidity planning',
            body: 'For owners, the company is the central asset. We coordinate entity structure, retirement plans, and the planning around a future sale or transition.',
          },
          {
            title: 'Your team of professionals',
            body: 'We coordinate directly with your CPA, attorney, and other specialists, so you are not the one relaying messages between professionals who never meet.',
          },
        ],
      },
      {
        eyebrow: 'Where It Fits',
        heading: 'Three ways to be advised — and where a virtual family office fits',
        intro: 'It helps to see the virtual family office beside the two models most families already know.',
        dark: true,
        items: [
          {
            title: 'A traditional advisor or brokerage',
            body: 'Typically manages your investments and may offer some planning. Competent at that slice — but rarely accountable for tax, estate, insurance, or business decisions, and rarely coordinating the professionals who are.',
          },
          {
            title: 'A traditional single- or multi-family office',
            body: 'Full coordination across every domain — but built for the ultra-wealthy, often with minimums in the tens of millions of dollars. Comprehensive, and out of reach for most successful families.',
          },
          {
            title: 'A virtual family office',
            body: 'Family-office-style coordination across investments, tax, estate, insurance, and business — delivered by one fiduciary firm that convenes the specialists rather than employing them. The coordination of a family office, scaled to the household with $1 million to $10 million in assets.',
          },
        ],
      },
    ],
    whoThisIsFor: {
      heading: 'Who the virtual family office model fits',
      intro:
        'The virtual family office is built for a specific kind of household — one with enough going on that coordination genuinely changes the outcome:',
      items: [
        'Families and business owners with roughly $1 million to $10 million or more in investable assets.',
        'Households with more than one source of complexity — a business, equity compensation, real estate, concentrated stock, or a blended family.',
        'Business owners facing a future liquidity event, succession, or sale.',
        'Families who already have a CPA and an attorney but no one coordinating them.',
        'People who want a single accountable team rather than a collection of disconnected providers.',
      ],
    },
    closing: {
      heading: 'One team, holding the whole picture',
      body: [
        `The value of a virtual family office is not any single recommendation. It is that someone — finally — is responsible for how all of it fits together, and is obligated as a fiduciary to do so in your interest.`,
        `If that is the gap in your financial life, a discovery call is the place to start. It is complimentary, and there is no obligation.`,
      ],
    },
    faqs: [
      {
        q: 'What exactly is a virtual family office?',
        a: 'A virtual family office is a single firm that coordinates every part of a household’s financial life — investments, tax, estate, insurance, and business planning — and brings in the right specialists as needed. It delivers the coordination of a traditional family office without the cost of building one in-house.',
      },
      {
        q: 'How is that different from a regular financial advisor?',
        a: 'A typical advisor focuses on managing investments. A virtual family office is accountable for the whole picture: it coordinates your CPA, your estate attorney, and your insurance alongside the investment strategy, so the parts of your financial life are managed as one plan rather than in isolation.',
      },
      {
        q: 'Do I need tens of millions of dollars?',
        a: 'No. That is the point of the model. Traditional family offices serve the ultra-wealthy, often with minimums in the tens of millions. Canyon’s virtual family office is built for families and business owners with roughly $1 million or more in investable assets.',
      },
      {
        q: 'Do you replace my CPA and attorney?',
        a: 'No. We coordinate with them. If you have professionals you trust, we bring them into the plan; if you have gaps, we can help you fill them. Canyon does not prepare tax returns or draft legal documents — we make sure the people who do are working from the same strategy.',
      },
      paidFaq,
      {
        q: 'Where is Canyon located?',
        a: 'Canyon Strategic Wealth is based at 450 S 400 E in Bountiful, Utah, and serves families across the state. Because the model is virtual by design, you can work with us from anywhere in Utah.',
      },
    ],
    serviceName: 'Virtual Family Office',
    areaServed: ['Utah'],
    related: [
      { label: 'Business Exit Planning', href: '/business-exit-planning' },
      { label: 'Financial Advisor in Bountiful', href: '/financial-advisor-bountiful-ut' },
      { label: 'Fiduciary Financial Advisor in Utah', href: '/fiduciary-financial-advisor-utah' },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 6. BUSINESS EXIT PLANNING — the niche page
  // ─────────────────────────────────────────────────────────────
  {
    slug: 'business-exit-planning',
    metaTitle: 'Business Exit Planning for Utah Owners | Canyon Strategic Wealth',
    metaDescription:
      'Wealth-side exit planning for Utah business owners preparing to sell or transition — tax strategy, estate coordination, and the post-sale income plan. Start before the buyer conversation.',
    h1: 'Business Exit Planning for Utah Owners Preparing to Sell',
    heroHook:
      'If you may sell or transition your company in the next five years, the planning that protects what you walk away with should begin long before the buyer conversation does. Canyon Strategic Wealth coordinates the wealth side of a business exit for Utah owners.',
    intro: [
      `For most business owners, the company is the single largest asset they will ever own — and selling or transitioning it is the largest financial event of their life. Yet the planning around an exit usually starts far too late, and focuses almost entirely on the deal itself.`,
      `There is no shortage of help for the transaction. Business brokers and M&A advisors find buyers and negotiate terms. Attorneys paper the deal. What is routinely missing is the person responsible for the owner's wealth — the tax exposure on the sale, the estate consequences, the structure of the proceeds, and the plan for the life that comes after.`,
      `That is the work Canyon Strategic Wealth does. We are an independent, fiduciary registered investment adviser and a virtual family office based in Bountiful, Utah. We do not sell businesses; we coordinate everything around the owner, so that when the sale closes you keep more of what you built and know exactly what happens next.`,
    ],
    reframe: {
      eyebrow: 'The Real Problem',
      heading: 'The exit is not a transaction. It is the moment your wealth changes form.',
      body: [
        `Owners naturally frame the exit as a deal: find a buyer, agree on a price, close. The instinct is to focus on valuation — how much the business is worth.`,
        `But the number that actually matters is not the sale price. It is what reaches your family after taxes, and whether the proceeds are structured to support the rest of your life. An exit with a strong headline price and no wealth planning behind it can leave a remarkable amount of money on the table — and leave the owner, the day after closing, with a large sum and no plan.`,
        `The reframe is this: stop asking only what the business is worth, and start asking whether you are personally ready and whether the proceeds plan is built. Those questions take years to answer well — which is why exit planning starts early.`,
      ],
    },
    blocks: [
      {
        eyebrow: 'The Timeline',
        heading: 'The exit planning timeline',
        intro:
          'The most valuable exit planning happens over years, not weeks. Here is how the work unfolds as a sale approaches.',
        numbered: true,
        items: [
          {
            title: 'Five years out',
            body: 'The most valuable window. There is still time to structure ownership for tax efficiency, evaluate strategies such as qualified small business stock or trust planning, strengthen the company’s financials, and clarify what you personally want the exit to fund.',
          },
          {
            title: 'Three years out',
            body: 'Tighten the plan. Coordinate entity structure and estate documents, model the after-tax proceeds under realistic scenarios, and begin addressing any concentration risk on your personal balance sheet.',
          },
          {
            title: 'Twelve months out',
            body: 'Prepare for the transaction. Align your CPA, attorney, and M&A advisor around a shared strategy, finalize pre-sale tax and gifting moves while they can still be made, and build the post-sale investment and income plan.',
          },
          {
            title: 'The year of the sale',
            body: 'Execute with coordination. As terms take shape, we model their after-tax impact, weigh the timing of income and deductions, and make sure the proceeds land into a structure that is ready for them.',
          },
          {
            title: 'After the sale',
            body: 'The plan continues. The proceeds become the engine of your retirement, your charitable goals, and your legacy — managed, monitored, and coordinated with your tax and estate plan for the decades that follow.',
          },
        ],
      },
      {
        eyebrow: 'What We Coordinate',
        heading: 'What Canyon coordinates around your exit',
        intro: 'A sale touches every part of your financial life at once. These are the pieces we hold together.',
        items: [
          {
            title: 'Pre-sale tax strategy',
            body: 'Coordinated with your CPA — entity structure, the treatment of the sale, the timing of income and deductions, and strategies such as qualified small business stock where they apply.',
          },
          {
            title: 'Estate and gifting strategy',
            body: 'A sale can be the ideal moment to move value out of your estate. We work with your attorney to align trusts, gifting, and beneficiary planning before the window closes.',
          },
          {
            title: 'Concentration and risk',
            body: 'Before a sale your wealth is concentrated in one illiquid asset. We plan the transition to a diversified balance sheet — and the protection around it.',
          },
          {
            title: 'The post-sale income plan',
            body: 'We build the plan that turns a lump sum into durable income, so the day after closing you know exactly what your money is doing.',
          },
          {
            title: 'Coordination with your deal team',
            body: 'We work alongside your M&A advisor or business broker and your attorney — we do not replace them — so the wealth strategy and the transaction strategy stay aligned.',
          },
        ],
      },
    ],
    whoThisIsFor: {
      heading: 'Who exit planning is for',
      intro: 'This work is built for owners for whom the business is a major share of their wealth, including:',
      items: [
        'Utah business owners who may sell, transition, or hand down a company within the next one to ten years.',
        'Owners whose company represents a large share of their total net worth.',
        'Owners weighing a third-party sale against an internal or family succession.',
        'Owners who have a business broker or M&A advisor but no one planning the wealth side of the exit.',
        'Owners who want to be certain the proceeds — after tax — will support the life they have in mind.',
      ],
    },
    closing: {
      heading: 'The best time to start was five years out. The second best is now.',
      body: [
        `Not every owner has five years of runway, and exit planning still adds value at three years, at one year, even during a live deal. But the earlier the conversation starts, the more options remain on the table.`,
        `If a sale or transition is anywhere on your horizon, a discovery call is the place to begin. It is complimentary and carries no obligation.`,
      ],
    },
    faqs: [
      {
        q: 'How early should I start exit planning?',
        a: 'As early as you reasonably can — ideally three to five years before a sale. The most valuable strategies, particularly around tax structure and estate planning, need time to put in place. That said, exit planning still adds real value at twelve months out, or even during a live transaction.',
      },
      {
        q: 'Do you sell my business or find a buyer?',
        a: 'No. Canyon Strategic Wealth is not a business broker or M&A advisor. We coordinate the wealth side of your exit — tax, estate, proceeds structure, and the post-sale plan — and we work alongside the broker or M&A advisor who runs the transaction itself.',
      },
      {
        q: 'Can you reduce the taxes on my sale?',
        a: 'Tax outcomes depend on your specific situation, and Canyon does not provide tax advice or prepare returns. What we do is coordinate closely with your CPA, well before a sale, on the planning that drives the tax result — entity structure, the timing of income and deductions, estate and gifting strategy, and provisions such as qualified small business stock where they apply. That coordination, done early, is where the meaningful tax savings tend to come from.',
      },
      {
        q: 'What if I am planning an internal or family succession rather than a sale?',
        a: 'The wealth-side planning is just as important, and in some ways more complex. We help you weigh a third-party sale against an internal or family transition, and we coordinate the tax, estate, and income planning for whichever path you choose.',
      },
      {
        q: 'Do you stay involved after the sale closes?',
        a: 'Yes — that is often where the relationship matters most. After the sale, the proceeds become the foundation of your retirement income, charitable plans, and legacy. As your virtual family office, Canyon manages and coordinates that ongoing, long after the deal is done.',
      },
      paidFaq,
    ],
    serviceName: 'Business Exit Planning',
    areaServed: ['Utah'],
    related: [
      { label: 'What a Virtual Family Office Is', href: '/virtual-family-office' },
      { label: 'Financial Advisor in Bountiful', href: '/financial-advisor-bountiful-ut' },
      { label: 'Fiduciary Financial Advisor in Utah', href: '/fiduciary-financial-advisor-utah' },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 7. FIDUCIARY FINANCIAL ADVISOR — UTAH
  // ─────────────────────────────────────────────────────────────
  {
    slug: 'fiduciary-financial-advisor-utah',
    metaTitle: 'Fiduciary Financial Advisor in Utah | Canyon Strategic Wealth',
    metaDescription:
      'What "fiduciary" really means, how to verify any advisor’s standard, and how Canyon Strategic Wealth — a fiduciary RIA and virtual family office in Utah — is structured.',
    h1: 'Fiduciary Financial Advisor in Utah',
    heroHook:
      '"Fiduciary" is one of the most important words in finance and one of the most misused. It is a legal standard, not a marketing slogan — and knowing the difference protects your wealth. Canyon Strategic Wealth is a fiduciary registered investment adviser serving families across Utah.',
    intro: [
      `If you have ever wondered whether the person advising you is required to act in your interest — or merely allowed to act in their own — you have already understood why the fiduciary question matters.`,
      `Canyon Strategic Wealth is an independent, fiduciary registered investment adviser, founded in 2017 and based in Bountiful, Utah. As a registered investment adviser, the firm is held to a fiduciary standard: a legal obligation to act in our clients' best interest. Our advisor, Jake Cazier, is a CERTIFIED FINANCIAL PLANNER™ professional, a credential that carries its own fiduciary commitment.`,
      `This page explains what the fiduciary standard actually is, how it differs from the weaker standard much of the industry operates under, how to verify any advisor's standard for yourself, and — plainly — how Canyon is structured.`,
    ],
    reframe: {
      eyebrow: 'What the Word Means',
      heading: 'A fiduciary standard and a sales standard are not the same thing.',
      body: [
        `A financial professional held to a fiduciary standard is legally obligated to put your interest ahead of their own — to recommend what is best for you, not merely what is acceptable or suitable.`,
        `Much of the financial industry operates under a different and weaker standard, where a recommendation only has to be suitable, and the professional may be paid more for steering you toward one product over another. Under that model, two options can both be allowed even when one is plainly better for you and worse for the salesperson — and you may never be told.`,
        `The distinction is invisible from the outside. The office looks the same, the titles sound the same. The only way to know which standard applies to you is to ask directly and verify — which is exactly what the next section shows you how to do.`,
      ],
    },
    blocks: [
      {
        eyebrow: 'Do Your Homework',
        heading: 'How to verify an advisor is a fiduciary',
        intro: "You do not have to take anyone's word for it. Five concrete steps let you confirm the standard for yourself.",
        numbered: true,
        items: [
          {
            title: 'Ask the question directly — and ask for it in writing',
            body: 'Ask: are you a fiduciary, in writing, one hundred percent of the time? A fiduciary adviser can simply say yes. Hesitation, or "it depends," is itself an answer.',
          },
          {
            title: 'Look up the firm on the SEC or state adviser site',
            body: "Registered investment advisers appear on the SEC's investment adviser public disclosure site. There you can read the firm's Form ADV, which describes its services, fees, and conflicts of interest.",
          },
          {
            title: 'Check the individual on BrokerCheck',
            body: "FINRA's BrokerCheck shows whether a person is registered as a broker, an investment adviser representative, or both — and shows any disclosures on their record.",
          },
          {
            title: 'Ask exactly how they are paid',
            body: 'Ask the advisor to walk through every way they and their firm are compensated, including any commissions or third-party payments. A fiduciary should answer this plainly and completely.',
          },
          {
            title: 'Read the Form CRS',
            body: 'The client relationship summary is a short, standardized disclosure that states a firm’s standard of conduct and its conflicts. Every registered firm must provide it. Ask for it, and read it.',
          },
        ],
      },
      {
        eyebrow: 'In Plain Terms',
        heading: 'How Canyon Strategic Wealth is structured',
        intro: 'Applying those same questions to Canyon, here is the plain answer.',
        dark: true,
        items: [
          {
            title: 'A registered investment adviser',
            body: "Canyon Strategic Wealth is registered as an investment adviser and is held to a fiduciary standard. You can verify the firm under CRD #325175 on the SEC's adviser site.",
          },
          {
            title: 'Led by a CFP professional',
            body: 'Our advisor, Jake Cazier, is a CERTIFIED FINANCIAL PLANNER™ professional. CFP certification requires its holders to act as a fiduciary when providing financial advice.',
          },
          {
            title: 'Independent custody at Charles Schwab',
            body: 'Client assets are held at Charles Schwab, an independent custodian. Canyon never takes custody of your money, and Schwab provides independent statements and account access.',
          },
          {
            title: 'Fee-based — stated plainly',
            body: 'Most of Canyon’s compensation is straightforward advisory fees. As a fee-based firm, we may also receive a commission on certain insurance or annuity products a client chooses to implement. We are not a fee-only firm, and we will not describe ourselves as one — whenever a commission applies, we disclose it and the conflict it creates, so you can weigh the recommendation with full information.',
          },
        ],
      },
    ],
    whoThisIsFor: {
      heading: 'Who should care most about the fiduciary standard',
      intro: 'The fiduciary question matters for everyone, but it matters most when the stakes are high:',
      items: [
        'Families and business owners with $1 million or more in investable assets, where a single conflicted recommendation can be very costly.',
        'Anyone who has been advised before and was never sure whether the advice served them or the person giving it.',
        'Pre-retirees making large, hard-to-reverse decisions about pensions, rollovers, and annuities.',
        'Business owners facing a liquidity event, where the wealth at stake is substantial and the planning is complex.',
        'Anyone who simply wants to know, with certainty, that their advisor is on their side of the table.',
      ],
    },
    closing: {
      heading: 'Advice you can verify',
      body: [
        `A fiduciary relationship should never require trust on faith alone. Everything on this page is something you can confirm for yourself — the registration, the credential, the custodian, the disclosures.`,
        `If you would like advice you can verify, from a firm that states its standard plainly, a discovery call is the place to start. It is complimentary and carries no obligation.`,
      ],
    },
    faqs: [
      {
        q: 'What does "fiduciary" actually mean?',
        a: 'A fiduciary is legally obligated to act in your best interest — to recommend what is best for you, not merely what is permissible. It is the highest standard of care in financial advice.',
      },
      {
        q: 'Is every financial advisor a fiduciary?',
        a: 'No. Many financial professionals operate under a suitability standard, which only requires that a recommendation be suitable — not that it be the best available option for you. Registered investment advisers, including Canyon Strategic Wealth, are held to a fiduciary standard.',
      },
      {
        q: 'Is Canyon Strategic Wealth a fiduciary?',
        a: "Yes. Canyon is a registered investment adviser, held to a fiduciary standard, and our advisor is a CFP professional. You can verify the firm's registration under CRD #325175 on the SEC's investment adviser public disclosure site.",
      },
      {
        q: 'Is Canyon a fee-only firm?',
        a: 'No, and we are careful not to claim otherwise. Canyon is fee-based: most of our compensation is advisory fees, but as a fee-based firm we may receive a commission on certain insurance or annuity products a client chooses to use. We remain a fiduciary, and we disclose any such commission and the conflict of interest it creates.',
      },
      {
        q: 'Why does the fiduciary standard matter for me?',
        a: 'Because the difference is invisible until it costs you. Under a weaker standard, you can be steered toward a product that pays the salesperson more without being told a better option existed. A fiduciary is obligated to tell you — and to recommend the better option.',
      },
      {
        q: 'How can I verify an advisor myself?',
        a: "Look the firm up on the SEC's adviser site, check the individual on FINRA's BrokerCheck, read the firm's Form ADV and Form CRS, and ask directly — in writing — whether they are a fiduciary one hundred percent of the time.",
      },
    ],
    serviceName: 'Fiduciary Financial Advice',
    areaServed: ['Utah'],
    related: [
      { label: 'What a Virtual Family Office Is', href: '/virtual-family-office' },
      { label: 'How to Choose a Wealth Management Firm', href: '/best-wealth-management-davis-county' },
      { label: 'Financial Advisor in Bountiful', href: '/financial-advisor-bountiful-ut' },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 8. BEST WEALTH MANAGEMENT — DAVIS COUNTY (educate-first)
  // ─────────────────────────────────────────────────────────────
  {
    slug: 'best-wealth-management-davis-county',
    metaTitle: 'Best Wealth Management in Davis County, UT — How to Choose | Canyon Strategic Wealth',
    metaDescription:
      'There is no single "best" wealth management firm — there is the one best for your situation. Six criteria for evaluating any Davis County firm, each with a way to verify it.',
    h1: 'How to Choose the Best Wealth Management Firm in Davis County',
    heroHook:
      'Search for the "best" wealth management firm and every firm will tell you it is the one. That is not an answer. The honest answer is that there is no single best firm — there is the firm that is best for your situation — and below is a framework for finding it.',
    intro: [
      `If you are researching wealth management in Davis County — Bountiful, Centerville, Farmington, Kaysville, or anywhere along the corridor — you are doing exactly the right thing. A household with $1 million or more in investable assets is making a decision that compounds for decades.`,
      `Rather than claim a title, this page does something more useful: it gives you six criteria for evaluating any wealth management firm, and a concrete way to verify each one. Use it on every firm you are considering. We have included how Canyon Strategic Wealth measures up against each criterion — verifiable, not asserted — so you can hold us to the same standard as everyone else.`,
      `Canyon Strategic Wealth is an independent, fiduciary registered investment adviser and virtual family office, founded in 2017 and based in Bountiful. The point of this page is not to tell you we are the best. It is to make you a sharper buyer.`,
    ],
    reframe: {
      eyebrow: 'A Better Question',
      heading: 'Stop asking which firm is best. Start asking which firm is best for you.',
      body: [
        `"Best" is the wrong question because it has no fixed answer. A firm that is excellent for a retiree living on a portfolio may be a poor fit for a business owner heading toward a sale. The firm with the most assets under management is not automatically the firm that will serve you best.`,
        `The better question is structural: does this firm's standard of care, expertise, range of services, and way of working fit the financial life I actually have? That question does have an answer — and it is one you can investigate.`,
        `The six criteria below turn a vague search for the best into a checklist you can verify. A good firm will welcome the scrutiny. Be cautious of any that does not.`,
      ],
    },
    blocks: [
      {
        eyebrow: 'The Framework',
        heading: 'Six criteria for evaluating a wealth management firm',
        intro: 'Apply all six to every firm you consider — including this one.',
        numbered: true,
        items: [
          {
            title: 'A fiduciary standard',
            body: "The firm should be legally obligated to act in your best interest, all of the time. To verify: confirm the firm is a registered investment adviser on the SEC's adviser site, and ask for the answer in writing. Canyon is a registered investment adviser held to a fiduciary standard, verifiable under CRD #325175.",
          },
          {
            title: 'Real credentials',
            body: "Look for meaningful, hard-won credentials such as the CFP certification, not just a job title. To verify: check the credential at the issuing body's public registry. Canyon's advisor, Jake Cazier, is a CERTIFIED FINANCIAL PLANNER™ professional.",
          },
          {
            title: 'Transparent compensation',
            body: 'You should be able to learn precisely how the firm is paid, and whether any commissions or outside payments create conflicts. To verify: ask for a plain walk-through of all compensation, and read the Form ADV and Form CRS. Canyon is fee-based — mostly advisory fees, with commissions possible on certain insurance or annuity products, always disclosed.',
          },
          {
            title: 'Breadth of coordination',
            body: 'For a complex financial life, investment management alone is not enough — tax, estate, insurance, and business planning all have to be coordinated. To verify: ask the firm to describe how it handles each, and how it works with your CPA and attorney. Canyon operates as a virtual family office, coordinating all of it as one strategy.',
          },
          {
            title: 'An independent custodian',
            body: 'Your assets should be held by a separate, independent custodian — not by the firm advising you. To verify: ask who holds the assets and who sends your statements. Canyon’s client assets are custodied at Charles Schwab; the firm never takes custody.',
          },
          {
            title: 'Genuine fit',
            body: 'The firm should serve households like yours, communicate the way you want, and be a relationship you can trust for decades. To verify: ask who the firm is built for, how often you will meet, and who your point of contact is — then take the complimentary first meeting and judge for yourself. Canyon is built for Utah families and business owners with $1M+ in investable assets, with two formal reviews a year and direct access between them.',
          },
        ],
      },
      {
        eyebrow: 'In the First Meeting',
        heading: 'Questions worth asking any firm you meet',
        intro: 'Beyond the six criteria, a few direct questions reveal a great deal about how a firm really works.',
        items: [
          {
            title: 'Who, exactly, are you built to serve?',
            body: 'A firm that serves everyone specializes in no one. A clear, specific answer signals a firm that knows its lane.',
          },
          {
            title: 'What happens in the first year, and every year after?',
            body: 'You are buying an ongoing relationship, not a one-time plan. The firm should be able to describe a clear, repeatable process.',
          },
          {
            title: 'How do you work with my CPA and attorney?',
            body: 'The answer reveals whether the firm coordinates your whole picture or simply manages an account in isolation.',
          },
          {
            title: 'What does this cost me, in total?',
            body: 'You should leave with a complete, understandable picture of every fee and any other form of compensation the firm receives.',
          },
        ],
      },
    ],
    whoThisIsFor: {
      heading: 'Who this framework is for',
      intro: 'This page is written for the person doing the homework — specifically:',
      items: [
        'Davis County families and business owners with $1 million or more in investable assets choosing a wealth management firm.',
        'Anyone interviewing more than one firm and wanting an objective way to compare them.',
        'People who have outgrown their current advisor and want to choose the next one deliberately.',
        'Business owners and pre-retirees facing decisions large enough that the choice of firm genuinely matters.',
      ],
    },
    closing: {
      heading: 'Hold us to the standard',
      body: [
        `If this framework is useful, use it — on every firm you are weighing, Canyon included. We wrote it because the buyers who ask the hardest questions tend to make the best decisions, and tend to become the clients we serve best.`,
        `If you would like to put these questions to us directly, a discovery call is complimentary and carries no obligation.`,
      ],
    },
    faqs: [
      {
        q: 'Which is the best wealth management firm in Davis County?',
        a: 'There is no single best firm — there is the firm best suited to your situation. The right approach is to evaluate each firm against clear criteria: a fiduciary standard, real credentials, transparent compensation, breadth of coordination, an independent custodian, and genuine fit with your needs. This page lays out all six and how to verify them.',
      },
      {
        q: 'What should I look for in a wealth management firm?',
        a: 'At a minimum: a fiduciary standard, meaningful credentials such as the CFP certification, fully transparent compensation, the ability to coordinate tax, estate, and insurance alongside investments, an independent custodian, and a clear sense of whether the firm is built for households like yours.',
      },
      {
        q: 'How do I verify a firm is actually a fiduciary?',
        a: "Confirm the firm is a registered investment adviser on the SEC's investment adviser public disclosure site, read its Form ADV and Form CRS, and ask the advisor — in writing — whether they act as a fiduciary at all times.",
      },
      {
        q: 'Does the biggest firm provide the best service?',
        a: 'Not necessarily. Size can bring resources, but it can also bring rigid product menus and a less personal relationship. What matters more is the firm’s standard of care, the breadth of its coordination, and how well it fits your specific situation.',
      },
      {
        q: 'How does Canyon Strategic Wealth measure up against these criteria?',
        a: 'Canyon is a registered investment adviser held to a fiduciary standard (CRD #325175), led by a CFP professional, fee-based with full disclosure of any commissions, structured as a virtual family office that coordinates tax, estate, and insurance alongside investments, and using Charles Schwab as an independent custodian. We encourage you to verify each point — and to apply the same test to every firm you consider.',
      },
      paidFaq,
    ],
    serviceName: 'Wealth Management',
    areaServed: ['Davis County, UT', 'Bountiful, UT', 'Utah'],
    related: [
      { label: 'Fiduciary Financial Advisor in Utah', href: '/fiduciary-financial-advisor-utah' },
      { label: 'What a Virtual Family Office Is', href: '/virtual-family-office' },
      { label: 'Financial Advisor in Bountiful', href: '/financial-advisor-bountiful-ut' },
    ],
  },
];
