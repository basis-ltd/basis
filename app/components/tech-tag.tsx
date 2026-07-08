export function TechTag({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center rounded border border-border bg-surface px-2 py-1 font-mono text-xs text-ink-muted">
      {label}
    </span>
  );
}
