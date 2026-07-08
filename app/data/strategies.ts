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

export const strategies: Strategy[] = [
  {
    slug: "fu-strategy",
    name: "fu-strategy",
    category: "forex",
    categoryLabel: "Forex",
    blurb:
      "Reads higher-timeframe bias and supply/demand zones, then watches lower timeframes for a forming FU-candle trigger before auto-executing on the 1-minute chart.",
    highlights: [
      "HTF bias + zone mapping on 4H/1H",
      "Realtime multi-timeframe confluence",
      "Live auto-execution on 1M",
      "WhatsApp/SMS alerts on trigger",
    ],
    tags: ["Python", "FastAPI", "Capital.com"],
    githubPath: "fu-strategy",
  },
  {
    slug: "vrvp-strategy",
    name: "vrvp-strategy",
    category: "forex",
    categoryLabel: "Forex",
    blurb:
      "Combines a 4H Supertrend filter with 1H Stochastic RSI, Fair Value Gaps, and Volume Profile to find high-confluence entries — with a CLI for backtesting before anything goes live.",
    highlights: [
      "Supertrend trend filter (4H)",
      "Stochastic RSI momentum (1H)",
      "Fair Value Gap + Volume Profile confluence",
      "CLI backtest and paper modes",
    ],
    tags: ["Python", "FastAPI", "Volume Profile"],
    githubPath: "vrvp-strategy",
  },
  {
    slug: "tinga-tinga",
    name: "tinga-tinga",
    category: "forex",
    categoryLabel: "Forex / Crypto",
    blurb:
      "An RSI-crossover system ported from MQL4, sized by account balance rather than fixed lots, with a built-in backtester that reports win rate, profit factor, and drawdown.",
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
    categoryLabel: "Crypto",
    blurb:
      "BTC tends to fall during US market hours and rise overnight. This bot shorts the 9-to-5 and goes long the rest of the time, with a trailing stop that lets winners run.",
    highlights: [
      "Short 9:29am–4:01pm ET, long overnight/weekends",
      "BTC perpetual futures on Nado",
      "Adaptive take-profit zone with trailing stop",
      "Flips direction automatically at each zone change",
    ],
    tags: ["Crypto", "Nado", "Futures"],
    githubPath: "bitcoin9to5",
  },
  {
    slug: "pump-fun",
    name: "pump-fun",
    category: "meme",
    categoryLabel: "Meme Coins",
    blurb:
      "Detects pump.fun token graduations the moment they happen, runs each one through a 9-point guardrail engine, and scalps a fast, small position on the ones that pass.",
    highlights: [
      "Realtime graduation detection",
      "9/10 hard guardrail checks (mint/freeze authority, LP burn, honeypot, holder concentration)",
      "+50% scalp target, ~1s exit reaction",
      "Paper trading default with hard circuit breakers",
    ],
    tags: ["TypeScript", "pump.fun", "Risk Engine"],
    githubPath: "pump-fun",
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
    label: "Forex",
    description:
      "Multi-timeframe technical systems on major pairs — bias, zones, and confluence, built from scratch and backtested before they trade live.",
    strategySlugs: ["fu-strategy", "vrvp-strategy", "tinga-tinga"],
  },
  {
    id: "crypto",
    label: "Crypto",
    description:
      "Perpetual futures and spot systems that exploit structural patterns in BTC and majors, with sizing and stops built around real account risk.",
    strategySlugs: ["bitcoin9to5", "tinga-tinga"],
  },
  {
    id: "meme",
    label: "Meme Coins",
    description:
      "Millisecond-reaction systems for the most volatile corner of the market, wrapped in a guardrail engine built to reject scams before they trade.",
    strategySlugs: ["pump-fun"],
  },
];
