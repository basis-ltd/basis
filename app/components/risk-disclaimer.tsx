import { TriangleAlert } from "lucide-react";

export function RiskDisclaimer() {
  return (
    <section id="risk" className="scroll-mt-16">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
        <div className="bg-warning-surface p-6 sm:p-8">
          <div className="grid gap-5 sm:grid-cols-[1.25rem_10rem_minmax(0,1fr)] sm:gap-4">
            <TriangleAlert
              className="mt-0.5 size-4 text-warning"
              strokeWidth={1.4}
            />
            <h2 className="text-[0.86rem] font-normal text-ink">
              Risk disclaimer
            </h2>
            <div>
              <p className="max-w-2xl text-[0.76rem] font-light leading-relaxed text-ink-muted ml-2">
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
