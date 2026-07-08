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
    <div className="flex flex-1 flex-col">
      <SiteHeader />
      <main className="flex-1">
        <Hero />

        <section id="categories" className="border-b border-border">
          <div className="mx-auto max-w-6xl px-6 py-24">
            <SectionHeading
              eyebrow="Research scope"
              title="Execution systems across three market structures"
            />
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {categories.map((category) => (
                <CategoryCard
                  key={category.id}
                  icon={CATEGORY_ICONS[category.id]}
                  label={category.label}
                  description={category.description}
                  strategyNames={category.strategySlugs}
                />
              ))}
            </div>
          </div>
        </section>

        <section id="strategies" className="scroll-mt-24 border-b border-border">
          <div className="mx-auto max-w-6xl px-6 py-24">
            <SectionHeading
              eyebrow="Strategies"
              title="Five systems with inspectable logic"
              subtitle="Each strategy is implemented as running code with explicit signal rules, execution behavior, and risk controls."
            />
            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {strategies.map((strategy) => (
                <StrategyCard key={strategy.slug} strategy={strategy} />
              ))}
            </div>
            <p className="mt-8 text-sm text-ink-subtle">
              Plus a Telegram signal-relay layer for SMS alerts (infrastructure, not a strategy).
            </p>
          </div>
        </section>

        <ApproachSection />
        <RiskDisclaimer />
      </main>
      <SiteFooter />
    </div>
  );
}
