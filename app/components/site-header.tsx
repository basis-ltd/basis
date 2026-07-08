import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { REPO_URL } from "@/app/data/strategies";

const NAV_LINKS = [
  { href: "#strategies", label: "Strategies" },
  { href: "#approach", label: "Approach" },
  { href: "#risk", label: "Risk" },
  { href: "#contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 box-border h-16 border-b border-border bg-background/95 backdrop-blur">
      <div className="mx-auto flex h-full max-w-6xl items-center justify-between px-6">
        <a
          href="#top"
          className="flex h-8 w-8 items-center overflow-hidden"
          aria-label="Basis home"
        >
          <Image
            src="/basis-logo.png"
            alt="Basis"
            width={900}
            height={900}
            className="h-8 w-8 scale-[1.8] object-contain"
            fetchPriority="high"
          />
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
          className="inline-flex items-center gap-1.5 rounded-sm bg-ink px-3 py-2 text-sm font-medium text-background transition-colors hover:bg-primary sm:px-4"
        >
          <span className="sm:hidden">Source</span>
          <span className="hidden sm:inline">Source repository</span>
          <ArrowUpRight className="size-3.5" />
        </a>
      </div>
    </header>
  );
}
