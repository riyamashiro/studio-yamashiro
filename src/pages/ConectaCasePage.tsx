import { CaseSection, MetricCard } from "@/components/CaseUI";

export function ConectaCasePage() {
  return (
    <div className="animate-fadeUp opacity-0">
      <section className="mt-8 md:mt-10 mb-8">
        <div className="text-[11px] uppercase tracking-[0.18em] text-soft mb-3">
          Case Study
        </div>
        <h1 className="text-[28px] md:text-[32px] tracking-[-0.03em] mb-3">
          Conecta App — Employee Onboarding Platform
        </h1>
        <p className="text-[15px] text-muted mb-1">
          Streamlining the hiring experience at Afya.
        </p>
        <p className="text-[14px] text-soft">
          Product Design · SaaS · Employee Experience
        </p>
      </section>

      <div className="mb-8">
        <img
          src="/conecta_hero_mockup.png"
          alt="Conecta hero"
          className="w-full rounded-2xl border border-border shadow-card"
        />
      </div>

      <div className="mb-10">
        <img
          src="/conecta_secondary_header.png"
          alt="Conecta onboarding"
          className="w-full rounded-2xl border border-border"
        />
      </div>

      <CaseSection
        label="Context"
        title="Automating a fragmented onboarding process."
      >
        <p>[USER WILL INSERT CONTEXT]</p>
      </CaseSection>

      <div className="my-8">
        <img
          src="/conecta_flowchart_image.png"
          alt="Conecta flowchart"
          className="w-full rounded-2xl border border-border"
        />
      </div>

      <CaseSection label="Key features" title="">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <img
            src="/conecta_documents_screen.png"
            alt="Documents screen"
            className="w-full rounded-2xl border border-border"
          />
          <img
            src="/conecta_exam_screen.png"
            alt="Exam screen"
            className="w-full rounded-2xl border border-border"
          />
          <img
            src="/conecta_benefits_screen.png"
            alt="Benefits screen"
            className="w-full rounded-2xl border border-border"
          />
        </div>
      </CaseSection>

      <CaseSection label="Usability testing" title="">
        <p>[USER WILL INSERT TESTING PROCESS]</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <img
            src="/conecta_usability_image1.png"
            alt="Usability 1"
            className="w-full rounded-2xl border border-border"
          />
          <img
            src="/conecta_usability_image2.png"
            alt="Usability 2"
            className="w-full rounded-2xl border border-border"
          />
        </div>
      </CaseSection">

      <CaseSection label="Final solution" title="">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <img
            src="/conecta_finalscreen1.png"
            alt="Final 1"
            className="w-full rounded-2xl border border-border"
          />
          <img
            src="/conecta_finalscreen2.png"
            alt="Final 2"
            className="w-full rounded-2xl border border-border"
          />
          <img
            src="/conecta_finalscreen3.png"
            alt="Final 3"
            className="w-full rounded-2xl border border-border"
          />
          <img
            src="/conecta_finalscreen4.png"
            alt="Final 4"
            className="w-full rounded-2xl border border-border"
          />
        </div>
      </CaseSection>

      <CaseSection
        label="Impact"
        title="Measured improvements after launch."
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-4">
          <MetricCard value="5d → 2h" label="Reduction in hiring time" />
          <MetricCard value="-70%" label="Fewer document errors" />
          <MetricCard value="-60%" label="Fewer support requests" />
          <MetricCard value="+85 NPS" label="Onboarding satisfaction" />
        </div>
      </CaseSection>
    </div>
  );
}
