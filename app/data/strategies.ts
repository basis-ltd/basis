export type Category = "research" | "strategies" | "execution" | "infrastructure";

export type Strategy = {
  slug: string;
  name: string;
  category: Category;
  categoryLabel: string;
  blurb: string;
  highlights: string[];
  tags: string[];
  githubPath: string;
  docsPath: string;
};

export type CatalogSystem = {
  name: string;
  description: string;
  lane: string;
  docsPath: string;
};

export const REPO_URL = "https://github.com/nishimweprince/trading-algos";
export const DOCS_URL = "https://trading-algos.nishimweprince.dev";

export const strategies: Strategy[] = [
  {
    slug: "pump-fun",
    name: "Pump.fun Scalper",
    category: "strategies",
    categoryLabel: "Event-driven strategy",
    blurb:
      "Detects pump.fun graduations, rejects unsafe candidates through a ten-check guardrail engine, and manages small positions with fast exits.",
    highlights: [
      "Graduation detection across multiple event feeds",
      "Ten mandatory token and liquidity guardrails",
      "Paper-first operation with circuit breakers",
      "Durable position state and pre-signed exit ladders",
    ],
    tags: ["TypeScript", "Solana", "Risk Engine"],
    githubPath: "pump-fun",
    docsPath: "/pump-fun",
  },
  {
    slug: "lookup-trader",
    name: "Lookup Trader",
    category: "research",
    categoryLabel: "Pattern research",
    blurb:
      "A local bar-replay and manual labelling environment for building a pattern-based probability and outcome database from historical price data.",
    highlights: [
      "HistData ingestion into partitioned Parquet",
      "Bar-by-bar replay and manual setup labelling",
      "Triple-barrier outcomes and feature storage",
      "Research-only artifacts with execution disabled",
    ],
    tags: ["Python", "DuckDB", "React"],
    githubPath: "lookup-trader",
    docsPath: "/lookup-trader",
  },
  {
    slug: "lux-algo",
    name: "LuxAlgo",
    category: "strategies",
    categoryLabel: "Signal service",
    blurb:
      "Polls candles, calculates Supertrend direction, layers confluence rules, and submits validated trading instructions to MT5 Trader.",
    highlights: [
      "Warmup-aware candle polling and alignment",
      "Hard target and confluence profiles",
      "Deterministic signals for downstream execution",
      "Configuration and acceptance tests documented",
    ],
    tags: ["Python", "Supertrend", "MT5"],
    githubPath: "lux-algo",
    docsPath: "/lux-algo",
  },
  {
    slug: "ipda",
    name: "IPDA",
    category: "strategies",
    categoryLabel: "Signal service",
    blurb:
      "An RSI Buy Chance / Sell Chance service with session gates, hard target profiles, operator alerts, and idempotent routing to MT5 Trader.",
    highlights: [
      "RSI reversal logic ported from Pine Script",
      "Tokyo and New York session controls",
      "Deterministic signal identifiers prevent duplicate fills",
      "Break-even advisory and operator runbook",
    ],
    tags: ["Python", "FastAPI", "Pine Script"],
    githubPath: "ipda",
    docsPath: "/ipda",
  },
  {
    slug: "signals-scrapper",
    name: "Signals Scrapper",
    category: "research",
    categoryLabel: "Vision extraction",
    blurb:
      "A scheduled NestJS service that captures IC Markets research pages, extracts structured signals with vision models, and can forward them to MT5 Trader.",
    highlights: [
      "Scheduled research-page capture",
      "OpenAI vision extraction into structured signals",
      "Optional routing into the shared execution service",
      "Explicit configuration and architecture documentation",
    ],
    tags: ["NestJS", "OpenAI Vision", "Automation"],
    githubPath: "signals-scrapper",
    docsPath: "/signals-scrapper",
  },
];

export const catalogSystems: CatalogSystem[] = [
  {
    name: "MT5 Trader",
    lane: "Execution",
    description:
      "Authenticated FastAPI service that validates and idempotently executes signals through a local MetaTrader 5 terminal.",
    docsPath: "/mt5-trader",
  },
  {
    name: "FU Strategy",
    lane: "Strategy",
    description:
      "Capital.com multi-timeframe system with higher-timeframe bias, zones, operator alerts, and optional 1-minute execution.",
    docsPath: "/fu-strategy",
  },
  {
    name: "Bitcoin 9to5",
    lane: "Strategy",
    description:
      "BTC perpetual system that shorts US cash hours and holds long exposure overnight with adaptive zone timing.",
    docsPath: "/bitcoin9to5",
  },
  {
    name: "cTrader Markets",
    lane: "Market data",
    description:
      "Profile-scoped FastAPI wrapper for cTrader Open API ticks, OHLC, and symbols over HTTP and SSE.",
    docsPath: "/ctrader-markets",
  },
  {
    name: "Telegram Bot",
    lane: "Data intake",
    description:
      "GramJS poller that detects Gold and XAU buy/sell phrases and fans operator alerts out through SMS.",
    docsPath: "/telegram-bot",
  },
  {
    name: "Telegram → MT5",
    lane: "Execution",
    description:
      "Windows Telethon copier that reads one Telegram chat and places fixed-lot MT5 market orders, dry-run by default.",
    docsPath: "/telegram-metatrader",
  },
  {
    name: "Forex Execution",
    lane: "Execution",
    description:
      "TypeScript and Fastify service for authenticated OANDA account, instrument, and execution APIs.",
    docsPath: "/forex-execution",
  },
  {
    name: "Notification Service",
    lane: "Infrastructure",
    description:
      "NestJS multi-channel API for Telegram, email, SMS, and WhatsApp with SQLite delivery history.",
    docsPath: "/notification-service",
  },
  {
    name: "VRVP Strategy",
    lane: "Strategy",
    description:
      "Multi-timeframe forex system combining Supertrend, StochRSI, Fair Value Gaps, and Volume Profile.",
    docsPath: "/vrvp-strategy",
  },
  {
    name: "Jesse Strategies",
    lane: "Strategy research",
    description:
      "Auction Market Theory experiments in Jesse, covering trend continuation and mean-reversion systems.",
    docsPath: "/jesse-strategies",
  },
  {
    name: "Tinga Tinga",
    lane: "Strategy",
    description:
      "RSI crossover system with Binance market data, balance-based sizing, risk management, and backtesting.",
    docsPath: "/tinga-tinga",
  },
  {
    name: "Binance Crypto",
    lane: "Strategy library",
    description:
      "TypeScript and JavaScript cryptocurrency strategies with reusable indicator and exchange utilities.",
    docsPath: "/binance-crypto",
  },
];

export const categories: {
  id: Category;
  label: string;
  description: string;
  strategySlugs: string[];
}[] = [
  {
    id: "research",
    label: "Research & data",
    description:
      "Replay, labelling, vision extraction, and market-data tools that turn source material into inspectable evidence.",
    strategySlugs: ["Lookup Trader", "Signals Scrapper", "cTrader Markets"],
  },
  {
    id: "strategies",
    label: "Strategy systems",
    description:
      "Rule-based systems across foreign exchange and digital assets, each with explicit inputs, profiles, and failure boundaries.",
    strategySlugs: ["Pump.fun", "LuxAlgo", "IPDA", "VRVP", "+5"],
  },
  {
    id: "execution",
    label: "Execution services",
    description:
      "Authenticated routing and terminal adapters designed around validation, idempotency, dry-run controls, and reconciliation.",
    strategySlugs: ["MT5 Trader", "Forex Execution", "Telegram → MT5"],
  },
  {
    id: "infrastructure",
    label: "Shared infrastructure",
    description:
      "Notification, ingestion, and operator-facing services shared across otherwise independent research and execution systems.",
    strategySlugs: ["Notification Service", "Telegram Bot"],
  },
];
