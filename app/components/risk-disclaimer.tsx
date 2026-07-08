import { TriangleAlert } from "lucide-react";

export function RiskDisclaimer() {
  return (
    <section id="risk" className="scroll-mt-24">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="rounded-sm bg-warning-surface p-8 md:p-10">
          <div className="flex items-start gap-4">
            <TriangleAlert className="mt-0.5 size-6 shrink-0 text-warning" />
            <div>
              <h2 className="text-lg font-medium text-ink">
                Risk disclaimer
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink-muted">
                Nothing on this page or in this code is financial advice.
                Automated trading carries a substantial risk of loss. Systems
                that performed well historically can still lose money in future
                market conditions. Past performance never guarantees future
                results, and all deployment decisions require independent
                review, controls, and accountability.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
