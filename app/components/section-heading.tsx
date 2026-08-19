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
    <div className="grid max-w-4xl gap-5 sm:grid-cols-[10rem_minmax(0,1fr)] sm:gap-8">
      {eyebrow ? (
        <p className="pt-1 text-[0.62rem] font-light uppercase tracking-[0.12em] text-ink-subtle">
          {eyebrow}
        </p>
      ) : null}
      <div className={eyebrow ? "" : "sm:col-start-2"}>
        <h2 className="max-w-[26ch] text-[1.7rem] font-light leading-[1.12] tracking-[-0.04em] text-ink md:text-[2rem]">
          {title}
        </h2>
        {subtitle ? (
          <p className="mt-4 max-w-xl text-[0.78rem] font-light leading-relaxed text-ink-muted sm:text-[0.82rem]">
            {subtitle}
          </p>
        ) : null}
      </div>
    </div>
  );
}
