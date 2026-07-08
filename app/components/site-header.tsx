import { ArrowUpRight } from "lucide-react";
import { REPO_URL } from "@/app/data/strategies";

const NAV_LINKS = [
  { href: "#strategies", label: "Strategies" },
  { href: "#approach", label: "Approach" },
  { href: "#risk", label: "Risk" },
  { href: "#contact", label: "Contact" },
];

const TICKER_ITEMS = [
  "EUR/USD — fu-strategy",
  "XAU/USD — vrvp-strategy",
  "GBP/JPY — tinga-tinga",
  "BTC-PERP — bitcoin9to5",
  "SOL memecoins — pump-fun",
  "ETH/USDT — tinga-tinga",
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a
          href="#top"
          className="font-mono text-lg font-semibold tracking-tight text-ink"
        >
          Basis
        </a>
        <nav className="hidden items-center gap-8 sm:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-ink-muted transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href={REPO_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 rounded-full bg-ink px-4 py-2 text-sm font-medium text-background transition-colors hover:bg-ink/90"
        >
          View on GitHub
          <ArrowUpRight className="size-3.5" />
        </a>
      </div>
      <div className="flex items-center gap-3 border-t border-border bg-surface py-2">
        <span className="ml-6 flex shrink-0 items-center gap-1.5 font-mono text-[11px] uppercase tracking-wider text-ink-subtle">
          <span
            aria-hidden
            className="size-1.5 animate-live-pulse rounded-full bg-gain"
          />
          Live
        </span>
        <div className="relative flex-1 overflow-hidden">
          <div className="flex w-max animate-ticker gap-10 whitespace-nowrap">
            {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
              <span
                key={i}
                className="font-mono text-xs text-ink-muted"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
