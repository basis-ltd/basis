export function TechTag({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center border border-border px-2 py-1 text-[0.58rem] font-light uppercase tracking-[0.045em] text-ink-muted">
      {label}
    </span>
  );
}
