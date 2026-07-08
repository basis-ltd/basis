import { ArrowUpRight } from "lucide-react";
import { REPO_URL } from "@/app/data/strategies";

export function SiteFooter() {
  return (
    <footer id="contact" className="scroll-mt-24">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="flex flex-col gap-10 border-t border-border pt-12 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="font-mono text-lg font-semibold text-ink">Basis</p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-ink-muted">
              Systematic trading algorithms for research-driven execution and
              observable market infrastructure.
            </p>
          </div>
          <div className="flex flex-col gap-3 text-sm">
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
        <div className="mt-12 flex flex-col gap-2 border-t border-border pt-6 text-xs text-ink-subtle sm:flex-row sm:items-center sm:justify-between">
          <p>Not financial advice. Trading involves substantial risk of loss.</p>
          <p>Basis © 2026</p>
        </div>
      </div>
    </footer>
  );
}
