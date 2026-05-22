export interface Service {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  subtitle: string;
  intro: string[];
  approach: { heading: string; body: string }[];
  faqs: { q: string; a: string }[];
}

export const services: Service[] = [
  {
    slug: 'investment-management',
    title: 'Investment Management',
    metaTitle: 'Investment Management | Canyon Strategic Wealth',
    metaDescription:
      'Goal-aligned, tax-aware investment management for Utah families and business owners, coordinated with your full financial plan by Canyon Strategic Wealth.',
    subtitle:
      'Portfolios built around your goals, your risk tolerance, and the rest of your financial life — not a model off a shelf.',
    intro: [
      `Investment management at Canyon Strategic Wealth begins with a question most firms skip: what is this money actually for? Your portfolio is not an end in itself. It is one instrument in a larger plan, and we build and manage it to serve the goals, timeline, and tax picture specific to your household.`,
      `As a fiduciary, we are bound to act in your best interest, and that shapes everything — how we construct portfolios, how we manage cost and tax drag, and how candidly we talk with you about risk. Your assets are held at Charles Schwab, an independent custodian; we never take custody of your funds.`,
    ],
    approach: [
      {
        heading: 'Goal-aligned construction',
        body: 'We design your portfolio around your actual objectives and time horizons — retirement income, a future liquidity event, education funding — rather than a one-size-fits-all model.',
      },
      {
        heading: 'Ongoing monitoring and rebalancing',
        body: 'Markets move and so does your life. We monitor your portfolio continuously and rebalance with discipline, so your allocation stays aligned with your plan.',
      },
      {
        heading: 'Tax-aware management',
        body: 'Where it benefits you, we use asset location, tax-loss harvesting, and careful trade timing to reduce the tax drag on your returns, coordinated with your CPA.',
      },
      {
        heading: 'Clear, regular reporting',
        body: 'You receive straightforward performance reporting and direct access to your accounts through Schwab, so you always know exactly where you stand.',
      },
    ],
    faqs: [
      {
        q: 'Who holds my money?',
        a: 'Your assets are custodied at Charles Schwab, one of the largest independent custodians in the country. Canyon Strategic Wealth never takes custody of client funds; Schwab provides independent statements and account access.',
      },
      {
        q: 'How is my portfolio invested?',
        a: 'We build diversified, goal-aligned portfolios suited to your objectives, time horizon, and risk tolerance. We favor a disciplined, evidence-based approach over forecasting or market timing.',
      },
      {
        q: 'How often is my portfolio reviewed?',
        a: 'We monitor portfolios on an ongoing basis and rebalance as needed, and we review your investments with you at your planning meetings — and whenever a market or life event warrants it.',
      },
    ],
  },
  {
    slug: 'financial-planning',
    title: 'Financial Planning',
    metaTitle: 'Financial Planning | Canyon Strategic Wealth',
    metaDescription:
      'Comprehensive financial planning for Utah families and business owners — retirement projections, cash flow, education funding, and wealth preservation in one coordinated plan.',
    subtitle:
      'A single, coordinated plan that covers every dimension of your financial life — and evolves as your life does.',
    intro: [
      `Comprehensive financial planning is the backbone of the virtual family office. It is the document, and the ongoing process, that connects your investments, taxes, estate, and risk decisions into one coherent strategy — so no single choice is made in isolation.`,
      `We start by understanding your full picture: income, assets, liabilities, obligations, and the goals that matter most to you. From there we build a clear roadmap and revisit it with you throughout the year, because a plan that is never updated is not really a plan.`,
    ],
    approach: [
      {
        heading: 'Retirement income projections',
        body: 'We model how your assets translate into sustainable income, stress-tested against different markets, spending levels, and longevity — so retirement becomes a decision rather than a guess.',
      },
      {
        heading: 'Cash flow optimization',
        body: 'We map how money moves through your household and identify where it can work harder, across saving, debt, and the timing of major expenses.',
      },
      {
        heading: 'Education and family funding',
        body: 'From 529 plans to broader family-funding strategies, we plan tax-efficiently for education and for the people you want to support.',
      },
      {
        heading: 'Net worth tracking',
        body: 'We track your balance sheet over time, so progress against your goals is something you can see, not just hope for.',
      },
    ],
    faqs: [
      {
        q: 'What does a financial plan actually include?',
        a: 'Your plan brings together retirement projections, cash flow, tax strategy, estate considerations, insurance, and your goals into one coordinated roadmap — and it is revisited with you throughout the year as circumstances change.',
      },
      {
        q: 'Do I need a certain level of assets to benefit from planning?',
        a: 'Canyon Strategic Wealth serves families and business owners with $1 million or more in investable assets, whose financial lives have grown complex enough to benefit from coordinated planning. A complimentary discovery call is the best way to know whether we are a fit.',
      },
      {
        q: 'How often is the plan updated?',
        a: 'Planning is continuous, not a one-time exercise. We review and update your plan at your regular meetings and whenever a significant change — a sale, an inheritance, a tax-law shift — calls for it.',
      },
    ],
  },
  {
    slug: 'tax-strategy',
    title: 'Tax Strategy',
    metaTitle: 'Tax Strategy | Canyon Strategic Wealth',
    metaDescription:
      'Proactive, year-round tax strategy for Utah families and business owners — Roth conversions, tax-loss harvesting, and charitable giving, coordinated with your CPA.',
    subtitle:
      'Proactive tax planning, coordinated directly with your CPA — and worked on all year, not just in April.',
    intro: [
      `Most tax work is backward-looking: it records what already happened. Tax strategy at Canyon Strategic Wealth is the opposite. We look ahead — at this year and the years to come — to position your income, investments, and decisions so you keep more of what you earn, legally and deliberately.`,
      `We are not your tax preparer, and we do not provide tax advice in place of one. We coordinate directly with your CPA so the planning and the filing are working from the same playbook, year-round.`,
    ],
    approach: [
      {
        heading: 'Roth conversion analysis',
        body: 'We evaluate whether, when, and how much to convert — weighing your current and future tax brackets, time horizon, and estate goals.',
      },
      {
        heading: 'Tax-loss harvesting',
        body: 'Within your portfolio, we capture losses where it is advantageous to do so, reducing your tax bill without altering your long-term strategy.',
      },
      {
        heading: 'Charitable giving strategy',
        body: 'From donor-advised funds to gifting appreciated assets, we structure your giving so it is as tax-efficient as it is meaningful.',
      },
      {
        heading: 'Year-round CPA coordination',
        body: 'We work alongside your accountant throughout the year, so opportunities are caught while there is still time to act on them.',
      },
    ],
    faqs: [
      {
        q: 'Does Canyon Strategic Wealth prepare my tax return?',
        a: 'No. We do not provide tax or legal advice or prepare returns. We coordinate closely with your CPA so that proactive planning and the actual filing stay aligned.',
      },
      {
        q: 'When should tax planning happen?',
        a: 'Throughout the year. The most valuable tax moves — conversions, harvesting, gifting — must be made before year-end, which is why we treat tax planning as a continuous part of your strategy.',
      },
      {
        q: "What if I don't have a CPA?",
        a: 'We can help you find a qualified CPA and coordinate with them on your behalf. The planning works best as a partnership between your advisor and your accountant.',
      },
    ],
  },
  {
    slug: 'estate-planning',
    title: 'Estate Planning Coordination',
    metaTitle: 'Estate Planning Coordination | Canyon Strategic Wealth',
    metaDescription:
      'Estate planning coordination for Utah families and business owners — wills and trusts, beneficiary alignment, and legacy planning, coordinated with your attorney.',
    subtitle:
      'Coordinating with your attorney so your documents, your beneficiaries, and your wishes all actually line up.',
    intro: [
      `An estate plan only works if every piece agrees with every other piece. A will can say one thing while a beneficiary designation quietly says another — and the designation wins. Estate planning coordination is the work of making sure that does not happen to your family.`,
      `Canyon Strategic Wealth does not draft legal documents; that is your attorney's role. What we do is sit at the center — making sure your plan, your accounts, and your legal documents tell one consistent story, and that the strategy still fits your life as it changes.`,
    ],
    approach: [
      {
        heading: 'Wills and trusts coordination',
        body: 'We work with your estate attorney so the structures they draft reflect your full financial picture and your current intentions.',
      },
      {
        heading: 'Beneficiary designation review',
        body: 'We review the beneficiary designations on every account, because these often-overlooked forms override the will — and we keep them current.',
      },
      {
        heading: 'Legacy and wealth transfer',
        body: 'We help you plan how and when wealth moves to the next generation or to the causes you care about, with an eye on both taxes and intentions.',
      },
      {
        heading: 'Document and directive review',
        body: 'We confirm your powers of attorney and key directives are in place, current, and accessible to the people who would need them.',
      },
    ],
    faqs: [
      {
        q: 'Does Canyon Strategic Wealth write my will or trust?',
        a: "No. Drafting legal documents is your attorney's role. We coordinate with your estate attorney so the documents reflect your full financial picture, and we keep the rest of your plan aligned with them.",
      },
      {
        q: 'Why do beneficiary designations matter so much?',
        a: 'Beneficiary designations on retirement accounts and insurance policies generally override your will. If they are outdated, assets can pass to the wrong person — which is why we review them regularly.',
      },
      {
        q: "What if I don't have an estate attorney?",
        a: 'We can connect you with a qualified estate attorney and coordinate the process with them, so the legal work and your broader plan move forward together.',
      },
    ],
  },
  {
    slug: 'risk-management',
    title: 'Risk Management & Insurance',
    metaTitle: 'Risk Management & Insurance | Canyon Strategic Wealth',
    metaDescription:
      'Independent insurance and risk review for Utah families and business owners — life, disability, long-term care, liability, and umbrella coverage.',
    subtitle:
      'An honest review of what could go wrong — and whether your coverage is actually built to handle it.',
    intro: [
      `A strong financial plan can still be undone by a single uninsured event. Risk management is the discipline of finding the gaps before they find you — and making sure the protection you are paying for is the protection you actually have.`,
      `Because we are not in the business of selling policies for their own sake, our review starts from your exposure, not a product. We identify where your family, your assets, and your business are vulnerable, and we recommend coverage only where it genuinely belongs.`,
    ],
    approach: [
      {
        heading: 'Life and disability review',
        body: 'We assess whether your life and disability coverage would truly support the people who depend on your income, and for how long.',
      },
      {
        heading: 'Long-term care planning',
        body: 'We help you plan for the cost of extended care — one of the largest and most overlooked risks to a retirement plan.',
      },
      {
        heading: 'Property and liability coverage',
        body: 'We review your property and liability coverage for the gaps that quietly leave your assets exposed.',
      },
      {
        heading: 'Umbrella coverage assessment',
        body: 'For families with meaningful assets, we evaluate whether an umbrella policy is appropriately sized to your real net worth.',
      },
    ],
    faqs: [
      {
        q: 'Does Canyon Strategic Wealth sell insurance?',
        a: 'We review insurance as part of your plan and recommend coverage only where it is genuinely needed. As a fee-based firm, we may receive compensation on certain insurance or annuity products when they are appropriate, and we disclose any such conflict of interest.',
      },
      {
        q: 'How often should coverage be reviewed?',
        a: 'At least annually, and any time your life changes — a new home, a new child, a business milestone, a significant change in net worth. Coverage that fit five years ago often does not fit today.',
      },
      {
        q: "What's the most common gap you find?",
        a: 'Underinsured liability. Many families carry strong home and auto policies but no umbrella coverage, leaving a meaningful net worth exposed to a single lawsuit.',
      },
    ],
  },
  {
    slug: 'business-owner-advisory',
    title: 'Business Owner Advisory',
    metaTitle: 'Business Owner Advisory | Canyon Strategic Wealth',
    metaDescription:
      'Wealth advisory for Utah business owners — integrating your company into your personal financial plan, with succession and exit planning.',
    subtitle:
      'Your business is most of your net worth. We plan for it as part of your wealth — not separate from it.',
    intro: [
      `For most business owners, the company is the single largest asset on the balance sheet — and the one most often left out of the financial plan. Business owner advisory closes that gap, treating your enterprise as a central part of your personal wealth strategy rather than a thing apart from it.`,
      `Whether an exit is years away or not yet on the horizon, the decisions that determine how much you ultimately keep — about structure, retirement plans, and timing — are made long before any sale. We help you make them deliberately.`,
    ],
    approach: [
      {
        heading: 'Business value in your plan',
        body: 'We integrate a realistic view of your business value into your overall plan, so your personal strategy reflects your full balance sheet.',
      },
      {
        heading: 'Succession and exit planning',
        body: 'We help you prepare — financially and personally — for a sale, a transition to family, or bringing in partners, ideally years before the event.',
      },
      {
        heading: 'Retirement plan design',
        body: 'We help structure the right retirement plan for your company, balancing tax efficiency for you with meaningful benefits for your team.',
      },
      {
        heading: 'Executive compensation strategy',
        body: 'We coordinate how you pay yourself and key people, with an eye on tax efficiency and long-term wealth building.',
      },
    ],
    faqs: [
      {
        q: 'When should I start exit planning?',
        a: 'Earlier than most owners think — ideally three to five years before a potential sale. The choices that most affect your after-tax proceeds are made well before a buyer is at the table.',
      },
      {
        q: "I'm not planning to sell. Is this still relevant?",
        a: 'Yes. Even with no sale in view, integrating the business into your personal plan, structuring retirement plans well, and managing concentration risk all materially affect your wealth.',
      },
      {
        q: 'Do you coordinate with my CPA and attorney?',
        a: 'Always. Business owner planning sits at the intersection of tax, legal, and financial work, and we coordinate with your professional team so the strategy holds together.',
      },
    ],
  },
];
