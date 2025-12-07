import { ReactNode } from "react";

export function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <div className="text-[11px] uppercase tracking-[0.18em] text-soft mb-2">
      {children}
    </div>
  );
}

export function CaseSection({
  label,
  title,
  children,
}: {
  label?: string;
  title?: string;
  children: ReactNode;
}) {
  return (
    <section className="mt-14 md:mt-16 animate-fadeUp opacity-0">
      {label && <SectionLabel>{label}</SectionLabel>}
      {title && (
        <h2 className="text-[22px] md:text-[24px] tracking-[-0.02em] mb-3">
          {title}
        </h2>
      )}
      <div className="space-y-4 text-[15px] leading-relaxed text-[#c0c0cf]">
        {children}
      </div>
    </section>
  );
}

export function MetricCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-2xl border border-border/70 bg-white/5 px-4 py-4 md:px-5 md:py-5">
      <div className="text-[20px] font-semibold mb-1 text-white">{value}</div>
      <p className="text-xs md:text-sm text-muted leading-snug">{label}</p>
    </div>
  );
}

export function TakeawayCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-2xl border border-border/70 bg-white/5 px-4 py-4 md:px-5 md:py-5">
      <div className="text-sm font-medium mb-1 text-white">{title}</div>
      <p className="text-xs md:text-sm text-muted leading-snug">
        {description}
      </p>
    </div>
  );
}

export function ProjectCard(props: {
  title: string;
  subtitle: string;
  href: string;
  image?: string;
}) {
  return (
    <a
      href={props.href}
      className="group rounded-2xl border border-border/70 overflow-hidden bg-white/5 hover:border-accent/80 transition-colors block"
    >
      {props.image && (
        <div className="aspect-[16/9] overflow-hidden bg-[#0d0d11]">
          <img
            src={props.image}
            alt={props.title}
            className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
          />
        </div>
      )}
      <div className="px-4 py-4 md:px-5 md:py-5">
        <div className="text-sm font-medium tracking-[-0.02em] mb-1">
          {props.title}
        </div>
        <p className="text-xs md:text-sm text-muted">{props.subtitle}</p>
      </div>
    </a>
  );
}
