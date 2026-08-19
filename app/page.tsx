import {
  ArrowUpRight,
  ChartNoAxesCombined,
  Landmark,
  Search,
  Workflow,
} from "lucide-react";
import { SiteHeader } from "@/app/components/site-header";
import { Hero } from "@/app/components/hero";
import { CategoryCard } from "@/app/components/category-card";
import { StrategyCard } from "@/app/components/strategy-card";
import { SectionHeading } from "@/app/components/section-heading";
import { ApproachSection } from "@/app/components/approach-section";
import { RiskDisclaimer } from "@/app/components/risk-disclaimer";
import { SiteFooter } from "@/app/components/site-footer";
import {
  DOCS_URL,
  catalogSystems,
  categories,
  strategies,
} from "@/app/data/strategies";

const CATEGORY_ICONS = {
  research: Search,
  strategies: ChartNoAxesCombined,
  execution: Landmark,
  infrastructure: Workflow,
} as const;

export default function Home() {
  return (
    <div className="flex min-h-screen flex-1 flex-col">
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <SiteHeader />
      <main id="main-content" className="flex-1">
        <Hero />

        <section id="categories" className="border-b border-border">
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
            <SectionHeading
              eyebrow="System map"
              title="One platform, four operating lanes"
              subtitle="The deployed documentation covers research tools, market strategies, execution services, and the shared infrastructure between them."
            />
            <div className="mt-10 grid border-l border-t border-border md:grid-cols-2 xl:grid-cols-4">
              {categories.map((category, index) => (
                <CategoryCard
                  key={category.id}
                  index={index}
                  icon={CATEGORY_ICONS[category.id]}
                  label={category.label}
                  description={category.description}
                  strategyNames={category.strategySlugs}
                />
              ))}
            </div>
          </div>
        </section>

        <section
          id="strategies"
          className="scroll-mt-16 border-b border-border bg-surface"
        >
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
            <SectionHeading
              eyebrow="Starred systems"
              title="Five entry points into the platform"
              subtitle="These systems sit at the front of the live documentation because they show the platform's range: event execution, pattern research, vision extraction, and signal routing."
            />
            <div className="mt-10 grid border-l border-t border-border bg-border lg:grid-cols-2">
              {strategies.map((strategy, index) => (
                <StrategyCard
                  key={strategy.slug}
                  strategy={strategy}
                  index={index}
                />
              ))}
            </div>
            <div className="mt-5 flex flex-col gap-2 text-[0.58rem] font-light text-ink-subtle sm:flex-row sm:items-center sm:justify-between">
              <p>Five starred systems · twelve in the wider catalogue</p>
              <a
                href={DOCS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-link transition-colors hover:text-ink"
              >
                Browse the deployed documentation ↗
              </a>
            </div>
          </div>
        </section>

        <section id="catalog" className="scroll-mt-16 border-b border-border">
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
            <SectionHeading
              eyebrow="Full catalogue"
              title="Twelve more systems across execution, data, and infrastructure"
              subtitle="Each entry links to its current deployed documentation, including setup, architecture, configuration, and operating constraints where available."
            />
            <div className="mt-10 grid border-l border-t border-border sm:grid-cols-2 lg:grid-cols-3">
              {catalogSystems.map((system, index) => (
                <a
                  key={system.name}
                  href={`${DOCS_URL}${system.docsPath}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex min-h-52 flex-col border-b border-r border-border p-6 transition-colors hover:bg-surface"
                >
                  <div className="flex items-center justify-between text-[0.58rem] font-light uppercase tracking-[0.08em] text-ink-subtle">
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <span>{system.lane}</span>
                  </div>
                  <div className="mt-auto pt-10">
                    <h3 className="text-[1rem] font-normal tracking-[-0.025em] text-ink">
                      {system.name}
                    </h3>
                    <p className="mt-2 text-[0.75rem] font-light leading-relaxed text-ink-muted">
                      {system.description}
                    </p>
                  </div>
                  <span className="text-link mt-5 inline-flex items-center gap-1 text-[0.55rem] font-light text-ink-subtle transition-colors group-hover:text-ink">
                    Read documentation
                    <ArrowUpRight className="size-2.5" strokeWidth={1.5} />
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        <ApproachSection />
        <RiskDisclaimer />
      </main>
      <SiteFooter />
    </div>
  );
}
