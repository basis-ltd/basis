import { SectionHeading } from "@/app/components/section-heading";

const STEPS = [
  {
    title: "Signal detection",
    description:
      "HTF bias and supply/demand zones, forming FU-candle triggers, Supertrend direction, RSI crossovers, and real-time pump.fun graduation detection — each strategy watches for the specific setup it was built for.",
  },
  {
    title: "Multi-layer confirmation",
    description:
      "No single indicator trades alone. Stochastic RSI momentum, Fair Value Gaps, and Volume Profile confluence filter forex entries; a 9-point guardrail engine — mint authority, LP burn, holder concentration, honeypot checks — filters meme coin entries.",
  },
  {
    title: "Risk-managed execution",
    description:
      "Percentage-based targets, balance-based position sizing, adaptive trailing stops, and hard circuit breakers. New systems default to paper trading until they've proven themselves.",
  },
  {
    title: "Alerts & monitoring",
    description:
      "WhatsApp, SMS, and email notifications on every trigger, plus live status endpoints — so a strategy's behavior is never a black box.",
  },
];

export function ApproachSection() {
  return (
    <section id="approach" className="scroll-mt-24 border-b border-border">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <SectionHeading
          eyebrow="Approach"
          title="How a strategy goes from idea to live trade"
          subtitle="Every system in the repo follows the same four-stage pipeline, whether it's reading a 4-hour forex chart or a pump.fun graduation feed."
        />
        <ol className="mt-14 grid gap-10 md:grid-cols-2 md:gap-x-12 md:gap-y-14">
          {STEPS.map((step, i) => (
            <li key={step.title} className="flex gap-5">
              <span className="font-mono text-sm text-ink-subtle">
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
