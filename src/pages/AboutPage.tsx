import { CaseSection } from "@/components/CaseUI";

export function AboutPage() {
  return (
    <div className="animate-fadeUp opacity-0">
      <section className="mt-8 md:mt-10 mb-8">
        <div className="text-[11px] uppercase tracking-[0.18em] text-soft mb-3">
          About
        </div>
        <h1 className="text-[26px] md:text-[30px] tracking-[-0.03em] mb-4">
          Product designer focused on clarity, systems, and impact.
        </h1>
        <p className="text-[15px] text-[#c0c0cf] max-w-xl">
          [USER WILL INSERT FULL BIO HERE]
        </p>
      </section>

      <CaseSection label="Experience" title="">
        <ul className="space-y-3 text-[14px] text-[#c0c0cf]">
          <li>
            <span className="font-medium text-white">PagBank</span> — Product
            Designer · [USER WILL INSERT DATES] ·
            <br />
            <span className="text-muted">
              [USER WILL INSERT SHORT DESCRIPTION]
            </span>
          </li>
          <li>
            <span className="font-medium text-white">Afya</span> — Product
            Designer · [USER WILL INSERT DATES]
            <br />
            <span className="text-muted">
              [USER WILL INSERT SHORT DESCRIPTION]
            </span>
          </li>
        </ul>
      </CaseSection>

      <CaseSection label="Skills" title="">
        <p>
          UX Strategy · Interaction Design · User Research · Product Thinking ·
          UI Design · Systems Design · Collaboration
        </p>
      </CaseSection>
    </div>
  );
}
