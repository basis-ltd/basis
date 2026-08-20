import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { DOCS_URL } from "@/app/data/strategies";

const LEDGER_ROWS = [
  { label: "Documented systems", value: "17" },
  { label: "Starred", value: "05" },
  { label: "Catalogue", value: "12" },
  { label: "Last audited", value: "Aug 2026" },
];

const SIGNAL_STAGES = ["Research", "Validate", "Route", "Observe"];

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[calc(100svh-3rem)] scroll-mt-16 flex-col border-b border-border"
    >
      <div className="mx-auto grid w-full max-w-7xl flex-1 gap-12 px-5 py-16 sm:px-8 md:grid-cols-[minmax(0,1fr)_18rem] md:items-center lg:px-12 lg:py-20">
        <div className="max-w-3xl">
          <div className="mb-12 flex items-center gap-3 text-[0.64rem] uppercase tracking-[0.13em] text-ink-subtle">
            <span>Algorithmic research · 17 documented systems</span>
          </div>
          <h1 className="max-w-[19ch] text-[2.15rem] font-light leading-[1.04] tracking-[-0.045em] text-ink sm:text-[2.7rem] lg:text-[3.35rem]">
            A research-to-execution platform with every boundary documented.
          </h1>
          <p className="mt-6 max-w-xl text-[0.86rem] font-light leading-relaxed text-ink-muted sm:text-[0.92rem]">
            Strategy services, execution hubs, data tooling, and shared
            infrastructure, organized so that signal logic, safety controls,
            and operating behavior stay inspectable.
          </p>
          <div className="mt-9 flex flex-col gap-2.5 sm:flex-row">
            <a
              href="#strategies"
              className="inline-flex min-h-10 items-center justify-center gap-2 bg-ink px-4 text-[0.72rem] font-normal text-background transition-colors hover:bg-ink-muted"
            >
              Explore starred systems
            </a>
            <a
              href={DOCS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-10 items-center justify-center gap-1.5 border border-border px-4 text-[0.72rem] font-normal text-ink transition-colors hover:border-ink"
            >
              Open documentation
              <FaArrowUpRightFromSquare className="size-3.5" aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="border-y border-border py-3">
          <div className="flex items-center justify-between border-b border-border pb-3 text-[0.6rem] uppercase tracking-[0.12em] text-ink-subtle">
            <span>System ledger</span>
            <span>v1.0 / 2026</span>
          </div>
          <dl>
            {LEDGER_ROWS.map((row) => (
              <div
                key={row.label}
                className="grid grid-cols-[1fr_auto] gap-6 border-b border-border py-3.5 last:border-b-0"
              >
                <dt className="text-[0.65rem] font-light uppercase tracking-[0.06em] text-ink-subtle">
                  {row.label}
                </dt>
                <dd className="text-right text-[0.74rem] font-normal text-ink">
                  {row.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <ol className="mx-auto grid w-full max-w-7xl grid-cols-2 border-l border-t border-border sm:grid-cols-4">
        {SIGNAL_STAGES.map((stage, index) => (
          <li
            key={stage}
            className="relative flex min-h-20 items-end justify-between border-b border-r border-border bg-ink px-4 py-3 text-background sm:border-b-0"
          >
            <span className="self-start text-[0.58rem] font-light tracking-[0.08em] text-background/50">
              0{index + 1}
            </span>
            <span className="text-[0.78rem] font-normal">{stage}</span>
            {index === 0 ? (
              <span
                className="absolute bottom-0 left-0 h-0.5 w-full origin-left animate-[signal-trace_1.1s_300ms_ease-out_both] bg-background"
                aria-hidden="true"
              />
            ) : null}
          </li>
        ))}
      </ol>
    </section>
  );
}
