export function TechTag({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center rounded-sm border border-border bg-surface px-2 py-1 text-xs text-ink-muted">
      {label}
    </span>
  );
}
