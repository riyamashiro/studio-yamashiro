import { CaseSection } from "@/components/CaseUI";

export function ProjectTemplatePage() {
  return (
    <div className="animate-fadeUp opacity-0">
      <section className="mt-8 md:mt-10 mb-8">
        <div className="text-[11px] uppercase tracking-[0.18em] text-soft mb-3">
          Case Study
        </div>
        <h1 className="text-[28px] md:text-[32px] tracking-[-0.03em] mb-3">
          New project coming soon
        </h1>
        <p className="text-[15px] text-muted mb-1">
          This case study is currently being developed.
        </p>
      </section>

      <CaseSection label="Context" title="">
        <p>[USER WILL INSERT CASE CONTENT LATER]</p>
      </CaseSection>
    </div>
  );
}
