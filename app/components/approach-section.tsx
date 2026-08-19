import { SectionHeading } from "@/app/components/section-heading";

const STEPS = [
  {
    title: "Research inputs",
    description:
      "Candles, event feeds, research pages, and operator-labelled examples are normalized into inputs that can be replayed, inspected, and tested.",
  },
  {
    title: "Explicit validation",
    description:
      "Strategy rules, token guardrails, profile schemas, session gates, and instrument constraints reject incomplete or unsafe instructions before routing.",
  },
  {
    title: "Controlled routing",
    description:
      "Deterministic identifiers, dry-run modes, idempotency checks, terminal locks, and circuit breakers bound how accepted instructions can affect downstream systems.",
  },
  {
    title: "Observable operation",
    description:
      "Status endpoints, durable state, delivery histories, structured logs, and operator notifications make system behavior visible during and after operation.",
  },
];

export function ApproachSection() {
  return (
    <section id="approach" className="scroll-mt-16 border-b border-border">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
        <SectionHeading
          eyebrow="Operating model"
          title="How evidence becomes controlled system behavior"
          subtitle="The platform uses a shared discipline across research, strategy, execution, and infrastructure, even when individual services have different responsibilities."
        />
        <ol className="mt-12 border-t border-ink">
          {STEPS.map((step, i) => (
            <li
              key={step.title}
              className="grid gap-4 border-b border-border py-6 sm:grid-cols-[4rem_12rem_minmax(0,1fr)] sm:gap-7"
            >
              <span className="text-[0.6rem] font-light tracking-[0.08em] text-ink-subtle">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="text-[0.88rem] font-normal tracking-[-0.015em] text-ink">
                {step.title}
              </h3>
              <p className="max-w-2xl text-[0.76rem] font-light leading-relaxed text-ink-muted">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
