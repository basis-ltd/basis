import { ArrowUpRight } from "lucide-react";
import { REPO_URL } from "@/app/data/strategies";

const CANDLES = [
  { h: 22, up: true },
  { h: 38, up: false },
  { h: 16, up: true },
  { h: 44, up: true },
  { h: 28, up: false },
  { h: 52, up: true },
  { h: 20, up: false },
  { h: 34, up: true },
  { h: 46, up: false },
  { h: 18, up: true },
  { h: 40, up: true },
  { h: 26, up: false },
  { h: 48, up: true },
  { h: 30, up: false },
  { h: 24, up: true },
];

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-border scroll-mt-24"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 flex h-40 items-end justify-center gap-3 opacity-[0.07] md:h-56"
      >
        {CANDLES.map((c, i) => (
          <span
            key={i}
            className={`w-2 rounded-sm md:w-3 ${
              c.up ? "bg-gain" : "bg-warning"
            }`}
            style={{ height: `${c.h * 3}px` }}
          />
        ))}
      </div>

      <div className="relative mx-auto max-w-4xl px-6 py-28 text-center md:py-36">
        <p className="mb-6 font-mono text-xs uppercase tracking-[0.2em] text-ink-subtle">
          Basis — Algorithmic Trading
        </p>
        <h1 className="text-5xl font-semibold tracking-tight text-ink md:text-7xl">
          Automated trading systems for forex, crypto, and meme coins.
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-ink-muted md:text-xl">
          Five strategies, one repo, all open-source: multi-timeframe
          technical analysis, real-time execution, and risk management built
          in from the start — not bolted on after a bad trade.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={REPO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium text-background transition-colors hover:bg-ink/90"
          >
            Explore the Code
            <ArrowUpRight className="size-4" />
          </a>
          <a
            href="https://pumpdesk.nishimweprince.dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-ink underline decoration-border underline-offset-4 transition-colors hover:decoration-ink"
          >
            Check live performance
            <ArrowUpRight className="size-3.5" />
          </a>
        </div>
        <a
          href="#approach"
          className="mt-14 inline-block font-mono text-xs text-ink-subtle transition-colors hover:text-ink-muted"
        >
          See how it works ↓
        </a>
      </div>
    </section>
  );
}
