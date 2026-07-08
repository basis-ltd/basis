import { ArrowUpRight, Check } from "lucide-react";
import type { Strategy } from "@/app/data/strategies";
import { REPO_URL } from "@/app/data/strategies";
import { TechTag } from "@/app/components/tech-tag";

export function StrategyCard({ strategy }: { strategy: Strategy }) {
  return (
    <div className="flex flex-col rounded-sm bg-surface p-7">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs text-leading-none uppercase text-ink-subtle">
            {strategy.categoryLabel}
          </p>
          <h3 className="mt-1 text-lg font-medium text-ink">
            {strategy.name}
          </h3>
        </div>
        <a
          href={`${REPO_URL}/tree/main/${strategy.githubPath}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex shrink-0 items-center gap-1 text-xs font-medium text-ink-muted transition-colors hover:text-ink"
        >
          Source
          <ArrowUpRight className="size-3.5" />
        </a>
      </div>

      <p className="mt-4 text-sm leading-relaxed text-ink-muted">
        {strategy.blurb}
      </p>

      <ul className="mt-5 space-y-2">
        {strategy.highlights.map((highlight) => (
          <li
            key={highlight}
            className="flex items-start gap-2 text-sm text-ink-muted"
          >
            <Check className="mt-0.5 size-3.5 shrink-0 text-gain" />
            {highlight}
          </li>
        ))}
      </ul>

      <div className="mt-6 flex flex-wrap gap-2">
        {strategy.tags.map((tag) => (
          <TechTag key={tag} label={tag} />
        ))}
      </div>
    </div>
  );
}
