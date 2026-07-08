import { TriangleAlert } from "lucide-react";

export function RiskDisclaimer() {
  return (
    <section id="risk" className="scroll-mt-24 border-b border-border">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="rounded-xl border border-warning/30 bg-warning-surface p-8 md:p-10">
          <div className="flex items-start gap-4">
            <TriangleAlert className="mt-0.5 size-6 shrink-0 text-warning" />
            <div>
              <h2 className="text-xl font-semibold text-ink">
                Risk disclaimer
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink-muted">
                Nothing on this page or in this code is financial advice.
                Automated trading carries a substantial risk of loss —
                strategies that performed well historically can still lose
                money going forward. Speculative markets are especially
                unforgiving: on pump.fun alone, roughly 98% of tokens fail,
                many of them by design. Past performance never guarantees
                future results. Trade at your own risk.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
