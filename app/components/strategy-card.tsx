import { ArrowUpRight, Check } from "lucide-react";
import type { Strategy } from "@/app/data/strategies";
import { DOCS_URL } from "@/app/data/strategies";
import { TechTag } from "@/app/components/tech-tag";

export function StrategyCard({
  strategy,
  index,
}: {
  strategy: Strategy;
  index: number;
}) {
  return (
    <article className="flex min-h-[27rem] flex-col border-b border-r border-border bg-background p-6 transition-colors hover:bg-[#fafafa] sm:p-8">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-[0.58rem] font-light uppercase tracking-[0.09em] text-ink-subtle">
            0{index + 1} · {strategy.categoryLabel}
          </p>
          <h3 className="mt-2 text-[1.35rem] font-normal tracking-[-0.035em] text-ink">
            {strategy.name}
          </h3>
        </div>
        <a
          href={`${DOCS_URL}${strategy.docsPath}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-link inline-flex shrink-0 items-center gap-1 !text-[12px] font-light text-ink-muted transition-colors hover:text-ink"
        >
          Docs
          <ArrowUpRight className="size-2.5" strokeWidth={1.5} />
        </a>
      </div>

      <p className="mt-5 max-w-xl text-[0.79rem] font-light leading-relaxed text-ink-muted">
        {strategy.blurb}
      </p>

      <ul className="mt-6 space-y-2.5 border-t border-border pt-5">
        {strategy.highlights.map((highlight) => (
          <li
            key={highlight}
            className="flex items-start gap-2 text-[0.72rem] font-light leading-relaxed text-ink-muted"
          >
            <Check className="mt-0.5 size-3 shrink-0 text-gain" strokeWidth={1.5} />
            {highlight}
          </li>
        ))}
      </ul>

      <div className="mt-auto flex flex-wrap gap-1.5 pt-8">
        {strategy.tags.map((tag) => (
          <TechTag key={tag} label={tag} />
        ))}
      </div>
    </article>
  );
}
