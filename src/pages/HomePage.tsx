import { ProjectCard } from "@/components/CaseUI";

export function HomePage() {
  return (
    <div className="animate-fadeUp opacity-0">
      <section className="mt-8 md:mt-10 mb-10 md:mb-14">
        <div className="text-[12px] uppercase tracking-[0.18em] text-soft mb-3">
          Portfolio
        </div>
        <h1 className="text-[32px] md:text-[40px] tracking-[-0.04em] leading-tight mb-3">
          Ricardo Yamashiro
        </h1>
        <p className="text-[15px] text-muted mb-1">Product Designer</p>
        <p className="text-[15px] text-muted max-w-xl">
          Turning complex problems into intuitive, high-performing digital
          products.
        </p>
      </section>

      <section className="mt-4">
        <div className="text-[11px] uppercase tracking-[0.18em] text-soft mb-3">
          Selected work
        </div>
        <div className="grid gap-4 md:gap-5">
          <ProjectCard
            title="PagBank — Bill Payment"
            subtitle="Improving the bill payment experience."
            href="/pagbank-case"
            image="/home_pagbank_thumbnail.png"
          />
          <ProjectCard
            title="Conecta App — Employee Onboarding Platform"
            subtitle="Streamlining the hiring experience at Afya."
            href="/conecta-case"
            image="/home_conecta_thumbnail.png"
          />
          <ProjectCard
            title="New project coming soon"
            subtitle="Case study currently in progress."
            href="/project-template"
            image="/home_project3_thumbnail.png"
          />
        </div>
      </section>
    </div>
  );
}
