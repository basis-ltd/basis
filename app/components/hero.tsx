import { ArrowUpRight } from "lucide-react";
import { REPO_URL } from "@/app/data/strategies";

const LEDGER_ROWS = [
  { label: "Signal logic", value: "Explicit rules" },
  { label: "Execution", value: "Automated routing" },
  { label: "Risk", value: "Circuit controls" },
  { label: "Observability", value: "Status endpoints" },
];

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex h-[calc(100svh-4rem)] box-border items-center overflow-hidden border-b border-border scroll-mt-24"
    >
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 py-10 md:grid-cols-[1fr_360px] md:items-center md:gap-12 md:py-16">
        <div>
          <p className="mb-6 text-xs text-leading-none uppercase text-ink-subtle">
            Basis Algorithmic Research
          </p>
          <h1 className="max-w-4xl text-3xl font-medium leading-tight tracking-tight text-ink sm:text-4xl md:text-6xl">
            Trading algorithms for systematic market execution.
          </h1>
          <p className="mt-5 max-w-2xl text-sm leading-normal text-ink-muted sm:text-base md:mt-6">
            Research-driven execution systems across foreign exchange,
            digital assets, and event-driven market structure.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#strategies"
              className="inline-flex items-center justify-center gap-2 rounded-sm bg-ink px-6 py-3 text-sm font-normal text-background transition-colors hover:bg-primary"
            >
              Review systems
            </a>
            <a
              href={REPO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 rounded-sm border border-border px-6 py-3 text-sm font-normal text-ink transition-colors hover:border-ink"
            >
              Source repository
              <ArrowUpRight className="size-3.5" />
            </a>
          </div>
          <a
            href="#approach"
            className="mt-14 inline-block text-xs uppercase tracking-[0.2em] text-ink-subtle transition-colors hover:text-ink-muted"
          >
            Approach
          </a>
        </div>

        <div className="hidden border-y border-border py-3 md:block">
          <div className="flex items-center justify-between border-b border-border pb-3 text-[11px] uppercase tracking-[0.18em] text-ink-subtle">
            <span>System ledger</span>
            <span>Basis</span>
          </div>
          <dl>
            {LEDGER_ROWS.map((row) => (
              <div
                key={row.label}
                className="grid grid-cols-[1fr_auto] gap-6 border-b border-border py-4 last:border-b-0"
              >
                <dt className="font-mono text-xs uppercase text-ink-subtle">
                  {row.label}
                </dt>
                <dd className="text-right text-sm font-normal text-ink">
                  {row.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
