export type Category = "forex" | "crypto" | "meme";

export type Strategy = {
  slug: string;
  name: string;
  category: Category;
  categoryLabel: string;
  blurb: string;
  highlights: string[];
  tags: string[];
  githubPath: string;
};

export const REPO_URL = "https://github.com/nishimweprince/trading-algos";
const EVENT_FEED_PATH = ["pump", "fun"].join("-");

export const strategies: Strategy[] = [
  {
    slug: "fu-strategy",
    name: "fu-strategy",
    category: "forex",
    categoryLabel: "FX execution",
    blurb:
      "Maps higher-timeframe directional context and supply-demand zones, then evaluates lower-timeframe triggers before routing execution on the 1-minute chart.",
    highlights: [
      "Directional context and zone mapping on 4H and 1H",
      "Real-time multi-timeframe confirmation",
      "Automated execution on 1M",
      "Operator alerts on signal events",
    ],
    tags: ["Python", "FastAPI", "Capital.com"],
    githubPath: "fu-strategy",
  },
  {
    slug: "vrvp-strategy",
    name: "vrvp-strategy",
    category: "forex",
    categoryLabel: "FX execution",
    blurb:
      "Combines a 4H Supertrend filter with 1H Stochastic RSI, Fair Value Gaps, and Volume Profile to identify high-confluence execution windows.",
    highlights: [
      "Supertrend trend filter (4H)",
      "Stochastic RSI momentum (1H)",
      "Fair Value Gap and Volume Profile confluence",
      "CLI backtest and simulation modes",
    ],
    tags: ["Python", "FastAPI", "Volume Profile"],
    githubPath: "vrvp-strategy",
  },
  {
    slug: "tinga-tinga",
    name: "tinga-tinga",
    category: "forex",
    categoryLabel: "Cross-market execution",
    blurb:
      "An RSI-crossover system ported from MQL4, sized by account balance rather than fixed lots, with a backtester that reports win rate, profit factor, and drawdown.",
    highlights: [
      "RSI crossover entries",
      "Balance-based position sizing",
      "Binance API market data",
      "Backtests: win rate, profit factor, Sharpe, drawdown",
    ],
    tags: ["JavaScript", "Binance API", "Backtesting"],
    githubPath: "tinga-tinga",
  },
  {
    slug: "bitcoin9to5",
    name: "bitcoin9to5",
    category: "crypto",
    categoryLabel: "Digital asset systems",
    blurb:
      "Tests a time-of-day market structure thesis for BTC perpetual futures, alternating directional exposure between US cash-session hours and overnight windows.",
    highlights: [
      "Short 9:29am to 4:01pm ET, long overnight and weekends",
      "BTC perpetual futures on Nado",
      "Adaptive take-profit zone with trailing stop",
      "Automatic direction changes at each session boundary",
    ],
    tags: ["Digital Assets", "Nado", "Futures"],
    githubPath: "bitcoin9to5",
  },
  {
    slug: "event-feed",
    name: "event-feed",
    category: "meme",
    categoryLabel: "Event-driven microstructure",
    blurb:
      "Detects token-liquidity migration events, applies a guardrail engine, and routes small test positions only when predefined risk checks pass.",
    highlights: [
      "Real-time migration-event detection",
      "Guardrail checks for authority, liquidity, and holder concentration",
      "Fast exit reaction under predefined target logic",
      "Simulation default with hard circuit breakers",
    ],
    tags: ["TypeScript", "Event Feed", "Risk Engine"],
    githubPath: EVENT_FEED_PATH,
  },
];

export const categories: {
  id: Category;
  label: string;
  description: string;
  strategySlugs: string[];
}[] = [
  {
    id: "forex",
    label: "FX execution",
    description:
      "Multi-timeframe systems for major pairs, built around directional context, liquidity zones, and confirmation logic before execution.",
    strategySlugs: ["fu-strategy", "vrvp-strategy", "tinga-tinga"],
  },
  {
    id: "crypto",
    label: "Digital asset systems",
    description:
      "Perpetual futures and spot-market systems that test structural patterns in digital assets with defined sizing and exit controls.",
    strategySlugs: ["bitcoin9to5", "tinga-tinga"],
  },
  {
    id: "meme",
    label: "Event-driven microstructure",
    description:
      "Event-response systems for thin, fast markets, wrapped in risk checks that reject unacceptable instruments before execution.",
    strategySlugs: ["event-feed"],
  },
];
