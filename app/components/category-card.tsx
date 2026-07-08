import type { LucideIcon } from "lucide-react";

export function CategoryCard({
  icon: Icon,
  label,
  description,
  strategyNames,
}: {
  icon: LucideIcon;
  label: string;
  description: string;
  strategyNames: string[];
}) {
  return (
    <div className="flex flex-col rounded-sm bg-surface p-7">
      <Icon className="size-6 text-ink" strokeWidth={1.5} />
      <h3 className="mt-5 text-lg font-medium text-ink">{label}</h3>
      <p className="mt-2 flex-1 text-sm leading-normal text-ink-muted">
        {description}
      </p>
      <p className="mt-5 text-xs text-leading-none text-ink-subtle">
        {strategyNames.join(" · ")}
      </p>
    </div>
  );
}
