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
    <header className="sticky top-0 z-50 box-border h-16 border-b border-border bg-background/90 backdrop-blur-xl">
      <div className="mx-auto flex h-full max-w-7xl items-center px-5 sm:px-8 lg:px-12">
        <a
          href="#top"
          className="flex items-center gap-2.5"
          aria-label="Basis home"
        >
          <span className="flex size-7 items-center overflow-hidden">
            <Image
              src="https://res.cloudinary.com/nishimweprince/image/upload/v1783477324/basis/basis-logo_lqxfu0.png"
              alt=""
              width={900}
              height={900}
              className="size-7 scale-[2.2] object-contain"
              fetchPriority="high"
            />
          </span>
          <span className="text-[0.82rem] font-[450] tracking-[-0.02em]">
            Basis
          </span>
        </a>
        <nav className="ml-auto hidden items-center gap-7 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[0.72rem] font-light text-ink-muted transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href={REPO_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="ml-auto inline-flex min-h-8 items-center gap-1.5 border border-ink bg-ink px-3 text-[0.7rem] font-normal text-background transition-colors hover:border-primary hover:bg-primary md:ml-8"
        >
          <span className="sm:hidden">Source</span>
          <span className="hidden sm:inline">Source repository</span>
          <ArrowUpRight className="size-3.5" />
        </a>
      </div>
    </header>
  );
}
