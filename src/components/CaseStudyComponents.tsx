import React from "react";

export function CaseSection({
  label,
  title,
  children,
}: {
  label: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-16">
      <div className="text-[12px] uppercase tracking-[0.18em] text-soft mb-3">
        {label}
      </div>
      <h2 className="text-[24px] md:text-[28px] font-semibold tracking-[-0.03em] mb-4">
        {title}
      </h2>
      <div className="space-y-4 text-[15px] leading-relaxed text-muted">
        {children}
      </div>
    </section>
  );
}

export function TakeawayCard({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) {
  return (
    <div className="p-4 rounded-xl border border-border bg-card/40 backdrop-blur-sm">
      <div className="text-xl mb-2">{icon}</div>
      <div className="font-medium mb-1">{title}</div>
      <div className="text-sm text-muted">{description}</div>
    </div>
  );
}

export function MetricCard({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <div className="p-5 rounded-xl border border-border bg-card/40 backdrop-blur-sm">
      <div className="text-[22px] font-semibold mb-1">{value}</div>
      <div className="text-sm text-muted">{label}</div>
    </div>
  );
}
