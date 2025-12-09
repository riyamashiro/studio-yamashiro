import { ProjectCard } from "@/components/CaseUI";

export default function HomePage() {
  return (
    <div className="animate-fadeUp opacity-0">
      {/* ========================= HERO ========================= */}
      <section className="mt-10 md:mt-16 mb-16 md:mb-20 flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-16">
        {/* FOTO À ESQUERDA */}
        <div className="flex-shrink-0">
          <img
            src="/eu.jpg"
            alt="Ricardo Yamashiro"
            className="w-40 h-40 md:w-52 md:h-52 rounded-2xl object-cover shadow-lg"
          />
        </div>

        {/* TEXTO + AÇÕES */}
        <div className="flex-1 max-w-xl">
          <h1 className="text-[32px] md:text-[40px] tracking-tight leading-tight font-medium mb-4">
            Ricardo Yamashiro
          </h1>

          <p className="text-[15px] text-muted mb-6 leading-relaxed">
            Product Designer with 6+ years of experience designing financial
            platforms, education systems, and enterprise tools.
          </p>

          {/* BOTÃO CV */}
          <a
            href="/cv.pdf"
            download
            className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-white text-black text-sm font-medium hover:bg-white/90 transition w-fit"
          >
            Download CV
          </a>

          {/* SOCIAL LINKS */}
          <div className="mt-4 flex items-center gap-4 text-[14px]">
            <a
              href="https://www.linkedin.com/in/ricardo-yamashiro-94b497143?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bou52H7AfQ02HnKI84EjhDg%3D%3D"
              target="_blank"
              rel="noreferrer"
              className="hover:underline hover:text-white transition"
            >
              LinkedIn
            </a>

            <span className="opacity-40">•</span>

            <a
              href="https://www.behance.net/ricardoyamedab"
              target="_blank"
              rel="noreferrer"
              className="hover:underline hover:text-white transition"
            >
              Behance
            </a>
          </div>
        </div>
      </section>

      {/* ========================= SELECTED WORK ========================= */}
      <section className="pb-12">
        <div className="text-[11px] uppercase tracking-[0.18em] text-soft mb-4">
          Selected work
        </div>

        {/* GRID DOS CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-10">
          <ProjectCard
            title="PagBank"
            subtitle="Improving the bill payment experience."
            image="/covers/pagbank-cover.png"
            href="/pagbank"
          />

          <ProjectCard
            title="Conecta "
            subtitle="Enhancing onboarding for new employees."
            image="/covers/conecta-cover.png"
            href="/conecta"
          />
        </div>
      </section>
    </div>
  );
}
