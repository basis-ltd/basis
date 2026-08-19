import { SectionHeading } from "@/app/components/section-heading";

const STEPS = [
  {
    title: "Signal detection",
    description:
      "Higher-timeframe context, supply-demand zones, trigger formation, trend filters, RSI crossovers, and event feeds are evaluated against the rules defined for each system.",
  },
  {
    title: "Multi-layer confirmation",
    description:
      "No single indicator trades alone. Stochastic RSI momentum, Fair Value Gaps, Volume Profile confluence, and instrument-quality checks filter entries before execution.",
  },
  {
    title: "Risk-managed execution",
    description:
      "Percentage-based targets, balance-based position sizing, adaptive trailing stops, and hard circuit breakers define the operating envelope for every system.",
  },
  {
    title: "Alerts & monitoring",
    description:
      "WhatsApp, SMS, and email notifications report trigger events, while status endpoints make strategy behavior observable during operation.",
  },
];

export function ApproachSection() {
  return (
    <section id="approach" className="scroll-mt-16 border-b border-border">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
        <SectionHeading
          eyebrow="Operating model"
          title="How research becomes executable infrastructure"
          subtitle="Every system follows the same four-stage pipeline, from market hypothesis to monitored operation."
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
