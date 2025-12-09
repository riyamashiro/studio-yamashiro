// src/pages/ConectaCasePage.tsx

export function ConectaCasePage() {
  return (
    <div className="animate-fadeUp opacity-0">
      <main className="max-w-4xl mx-auto px-4 py-16">
        <p className="text-[11px] uppercase tracking-[0.18em] text-soft mb-3">
          Case study
        </p>

        <h1 className="text-[28px] md:text-[32px] font-medium mb-4">
          Conecta — Hiring Experience
        </h1>

        <p className="text-[15px] text-muted mb-10 max-w-2xl">
          A mobile onboarding experience that helps new hires complete their
          admission journey faster and with less friction. This is a simplified
          version of the case so I can focus the review on the PagBank project.
        </p>

        <section className="space-y-8 text-[15px] leading-relaxed text-muted">
          <div>
            <h2 className="text-[18px] font-medium text-white mb-2">
              Context
            </h2>
            <p>
              Conecta centralizes the hiring journey for new employees, from
              offer acceptance to document upload and status tracking. Before
              this project, the process was fragmented across emails,
              spreadsheets and manual follow-ups.
            </p>
          </div>

          <div>
            <h2 className="text-[18px] font-medium text-white mb-2">
              My role
            </h2>
            <p>
              I worked as the product designer responsible for the end-to-end
              experience: understanding the current admission process, mapping
              pain points for HR and candidates, prototyping flows and
              collaborating with engineering to ship the first version of the
              app.
            </p>
          </div>

          <div>
            <h2 className="text-[18px] font-medium text-white mb-2">
              Outcome
            </h2>
            <p>
              The new experience reduced back-and-forth between HR and
              candidates, consolidated status tracking in one place and gave the
              team a scalable foundation to iterate on future improvements. A
              more detailed case with metrics and design decisions will be added
              in a next iteration of this portfolio.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
