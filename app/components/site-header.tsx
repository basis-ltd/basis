import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { DOCS_URL } from "@/app/data/strategies";

const NAV_LINKS = [
  { href: "#strategies", label: "Starred" },
  { href: "#catalog", label: "Catalogue" },
  { href: "#approach", label: "Approach" },
  { href: "#risk", label: "Risk" },
  { href: "#contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 box-border h-12 border-b border-border bg-background/90 backdrop-blur-xl">
      <div className="mx-auto flex h-full max-w-7xl items-center gap-5 px-5 sm:px-8 lg:px-12">
        <a
          href="#top"
          className="flex shrink-0 items-center gap-1.5"
          aria-label="Basis home"
        >
          <span className="text-[0.66rem] font-normal tracking-[-0.02em] text-ink">
            Basis
          </span>
        </a>

        <nav
          className="ml-auto hidden items-center gap-5 md:flex"
          aria-label="Primary"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-link !text-[12px] font-light text-ink-muted transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href={DOCS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-link ml-auto inline-flex shrink-0 items-center gap-1 !text-[12px] font-light text-ink-muted transition-colors hover:text-ink md:ml-0"
        >
          <span className="sm:hidden">Docs</span>
          <span className="hidden sm:inline">Documentation</span>
          <FaArrowUpRightFromSquare className="size-2.5" aria-hidden="true" />
        </a>
      </div>
    </header>
  );
}
