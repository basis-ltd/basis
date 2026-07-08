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
    <section id="approach" className="scroll-mt-24 border-b border-border">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <SectionHeading
          eyebrow="Approach"
          title="How research becomes executable infrastructure"
          subtitle="Every system follows the same four-stage pipeline, from market hypothesis to monitored operation."
        />
        <ol className="mt-14 grid gap-10 md:grid-cols-2 md:gap-x-12 md:gap-y-14">
          {STEPS.map((step, i) => (
            <li key={step.title} className="flex gap-5">
              <span className="text-sm text-leading-none text-ink-subtle mt-[3.5px]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="text-lg font-semibold text-ink">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                  {step.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
