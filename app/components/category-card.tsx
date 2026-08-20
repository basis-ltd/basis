import type { IconType } from "react-icons";

export function CategoryCard({
  index,
  icon: Icon,
  label,
  description,
  strategyNames,
}: {
  index: number;
  icon: IconType;
  label: string;
  description: string;
  strategyNames: string[];
}) {
  return (
    <article className="flex min-h-72 flex-col border-b border-r border-border bg-background p-6 transition-colors hover:bg-surface lg:p-7">
      <div className="flex items-start justify-between">
        <span className="text-[0.58rem] tracking-[0.08em] text-ink-subtle">
          0{index + 1}
        </span>
        <Icon className="size-4.5 text-ink-muted" aria-hidden="true" />
      </div>
      <h3 className="mt-auto pt-12 text-[1.08rem] font-normal tracking-[-0.025em] text-ink">
        {label}
      </h3>
      <p className="mt-2 min-h-16 text-[0.78rem] font-light leading-relaxed text-ink-muted">
        {description}
      </p>
      <p className="mt-5 border-t border-border pt-3 text-[0.61rem] font-light tracking-[0.035em] text-ink-subtle">
        {strategyNames.join(" · ")}
      </p>
    </article>
  );
}
