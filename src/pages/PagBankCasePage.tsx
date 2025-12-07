import { CaseSection, MetricCard, TakeawayCard } from "@/components/CaseUI";

export function PagBankCasePage() {
  return (
    <div className="animate-fadeUp opacity-0">
      <section className="mt-8 md:mt-10 mb-8">
        <div className="text-[11px] uppercase tracking-[0.18em] text-soft mb-3">
          Case Study
        </div>
        <h1 className="text-[28px] md:text-[32px] tracking-[-0.03em] mb-3">
          PagBank — Bill Payment
        </h1>
        <p className="text-[15px] text-muted mb-1">
          Improving the bill payment experience.
        </p>
        <p className="text-[14px] text-soft">Product Design · Fintech · 2024</p>
      </section>

      <div className="mb-10">
        <img
          src="/pagbank_hero_mockup.png"
          alt="PagBank bill payment hero"
          className="w-full rounded-2xl border border-border shadow-card"
        />
      </div>

      <CaseSection
        label="Context"
        title="A high-volume flow stuck on a legacy experience."
      >
        <p>[USER WILL INSERT CONTEXT TEXT HERE]</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          <TakeawayCard
            title="High scale"
            description="[USER WILL INSERT SHORT POINT]"
          />
          <TakeawayCard
            title="Outdated UX"
            description="[USER WILL INSERT SHORT POINT]"
          />
          <TakeawayCard
            title="Business-critical"
            description="[USER WILL INSERT SHORT POINT]"
          />
        </div>
      </CaseSection>

      <CaseSection
        label="Problem"
        title="Friction across the entry point and the payment flow."
      >
        <p>[USER WILL INSERT PROBLEM DESCRIPTION]</p>
      </CaseSection>

      <div className="my-10">
        <img
          src="/pagbank_benchmark_image.png"
          alt="Benchmark"
          className="w-full rounded-2xl border border-border"
        />
      </div>

      <CaseSection
        label="Solution"
        title="A simpler, more predictable payment experience."
      >
        <p>[USER WILL INSERT SOLUTION NARRATIVE]</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          <img
            src="/pagbank_solution_screen1.png"
            alt="Solution screen 1"
            className="w-full rounded-2xl border border-border"
          />
          <img
            src="/pagbank_solution_screen2.png"
            alt="Solution screen 2"
            className="w-full rounded-2xl border border-border"
          />
          <img
            src="/pagbank_solution_screen3.png"
            alt="Solution screen 3"
            className="w-full rounded-2xl border border-border"
          />
        </div>
      </CaseSection>

      <CaseSection
        label="Impact"
        title="Reducing friction and lifting completion across the funnel."
      >
        <p>[USER WILL INSERT IMPACT INTRO]</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
          <MetricCard value="38% → 22%" label="Manual code abandonment" />
          <MetricCard value="18% → 11%" label="Scanner flow drop-off" />
          <MetricCard value="12% → 7%" label="Pix abandonment" />
          <MetricCard value="77% → 48%" label="Credit card abandonment" />
          <MetricCard value="R$ 35M–60M" label="Recovered TPV / month" />
        </div>
      </CaseSection>
    </div>
  );
}
