export function SectionHeading({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="max-w-2xl">
      {eyebrow ? (
        <p className="mb-3 text-xs uppercase tracking-[0.2em] text-ink-subtle">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-2xl font-medium leading-tight tracking-tight text-ink md:text-3xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-4 text-sm leading-normal text-ink-muted sm:text-base">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
