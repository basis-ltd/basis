import { ArrowUpRight } from "lucide-react";
import { REPO_URL } from "@/app/data/strategies";

export function SiteFooter() {
  return (
    <footer id="contact" className="scroll-mt-16 border-t border-border">
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:px-12 lg:py-16">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="text-[0.92rem] font-normal tracking-[-0.025em] text-ink">
              Basis<span className="text-primary">.</span>
            </p>
            <p className="mt-3 max-w-sm text-[0.72rem] font-light leading-relaxed text-ink-muted">
              Systematic trading algorithms for research-driven execution and
              observable market infrastructure.
            </p>
          </div>
          <div className="flex flex-col gap-2.5 text-[0.7rem] font-light">
            <a
              href="mailto:info@basis.rw"
              className="inline-flex items-center gap-1.5 text-ink-muted transition-colors hover:text-ink"
            >
              info@basis.rw
            </a>
            <a
              href={REPO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-ink-muted transition-colors hover:text-ink"
            >
              GitHub
              <ArrowUpRight className="size-3.5" />
            </a>
            <a
              href={`${REPO_URL}/tree/main/docs`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-ink-muted transition-colors hover:text-ink"
            >
              Docs
              <ArrowUpRight className="size-3.5" />
            </a>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-2 border-t border-border pt-5 text-[0.6rem] font-light uppercase tracking-[0.055em] text-ink-subtle sm:flex-row sm:items-center sm:justify-between">
          <p>Not financial advice. Trading involves substantial risk of loss.</p>
          <p>Basis © 2026</p>
        </div>
      </div>
    </footer>
  );
}
