import { ChartNoAxesCombined, Landmark, Workflow } from "lucide-react";
import { SiteHeader } from "@/app/components/site-header";
import { Hero } from "@/app/components/hero";
import { CategoryCard } from "@/app/components/category-card";
import { StrategyCard } from "@/app/components/strategy-card";
import { SectionHeading } from "@/app/components/section-heading";
import { ApproachSection } from "@/app/components/approach-section";
import { RiskDisclaimer } from "@/app/components/risk-disclaimer";
import { SiteFooter } from "@/app/components/site-footer";
import { categories, strategies } from "@/app/data/strategies";

const CATEGORY_ICONS = {
  forex: Landmark,
  crypto: ChartNoAxesCombined,
  meme: Workflow,
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
              eyebrow="Research map"
              title="Execution systems across three market structures"
              subtitle="The same operating discipline is applied to markets with very different clocks, liquidity, and failure modes."
            />
            <div className="mt-10 grid border-l border-t border-border md:grid-cols-3">
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
              eyebrow="System index"
              title="Five systems with inspectable logic"
              subtitle="Each strategy is implemented as running code with explicit signal rules, execution behavior, and risk controls."
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
            <div className="mt-5 flex flex-col gap-2 text-[0.68rem] tracking-[0.04em] text-ink-subtle sm:flex-row sm:items-center sm:justify-between">
              <p>Five strategies · one shared operating discipline</p>
              <p>Telegram relay is infrastructure, not a strategy</p>
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
