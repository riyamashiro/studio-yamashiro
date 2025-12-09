import { Link } from "react-router-dom";
import {
  CaseSection,
  TakeawayCard,
  MetricCard,
} from "@/components/CaseStudyComponents";

const PagBankCasePage = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Top nav */}
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur">
        <div className="max-w-[840px] mx-auto px-6 md:px-8 py-4 flex items-center justify-between">
          <Link
            to="/"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            ← Back to portfolio
          </Link>
          <span className="text-[11px] uppercase tracking-[0.18em] text-soft">
           
          </span>
        </div>
      </header>

      <main className="max-w-[840px] mx-auto px-6 md:px-8 pb-20 pt-10 animate-fadeUp">
        {/* HEADER */}
        <section className="mb-12">
          <h1 className="text-[32px] md:text-[40px] tracking-tight leading-tight font-medium mb-4">
            PagBank — Bill Payment Experience
          </h1>

          <p className="text-[15px] text-muted mb-3 max-w-2xl leading-relaxed">
            A strategic redesign of PagBank&apos;s bill payment journey, focused
            on clarity, lower friction, and higher completion at scale.
          </p>

          <p className="text-[14px] text-muted-foreground max-w-xl mb-6">
            End-to-end work on one of the app&apos;s most critical flows,
            combining quantitative analysis, heuristic review and a phased
            product strategy to recover lost TPV.
          </p>

          <div className="flex flex-wrap gap-4">
            <MetricCard value="3.7M" label="monthly users in the journey" />
            <MetricCard value="R$ 35M–60M" label="TPV recovered per month" />
            <MetricCard value="5+" label="payment services impacted" />
          </div>
        </section>

        <div className="border-t border-border/60 my-10" />

        {/* 01 · CONTEXT */}
        <CaseSection
          label="01 · Context"
          title="A high-volume journey running on a legacy experience."
        >
          <p className="section-text mb-4">
            PagBank&apos;s bill payment flow is one of the most used experiences
            in the app, reaching{" "}
            <span className="font-semibold">3.7M users in a single month</span>.
            Despite this scale, the journey hadn&apos;t been revisited since
            2022. Over time, new services were plugged into the Hub, the UI
            aged, and technical constraints made it harder to evolve the flow.
          </p>
          <p className="section-text">
            On the surface, the flow still “worked”. But at PagBank&apos;s
            scale, even small usability frictions compound into millions in lost
            payments and support overhead.
          </p>
        </CaseSection>

        <div className="border-t border-border/60 my-10" />

        {/* 02 · PROBLEM & DATA */}
        <CaseSection
          label="02 · Problem"
          title="Users knew what they wanted to do. The interface made them work for it."
        >
          <p className="section-text mb-4">
            To understand where people were dropping off, I worked with the
            analytics team to map the full journey in{" "}
            <span className="font-semibold">Google Analytics</span>, from entry
            in the Hub to payment success. We focused on funnels per entry point
            and per payment method.
          </p>

          <p className="section-text mb-4">
            The data revealed a clear pattern of friction across the journey:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <MetricCard value="38%" label="manual code abandonment" />
            <MetricCard value="18%" label="scanner abandonment" />
            <MetricCard value="12%" label="Pix abandonment" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <MetricCard value="77%" label="credit card abandonment" />
            <MetricCard value="76%" label="auto-debit abandonment" />
            <MetricCard
              value="3.64M"
              label="mobile users vs ~4k on tablet (mobile-first)"
            />
          </div>

          <p className="section-text">
            Even users who started with strong intent were abandoning mid-flow.
            The issue wasn&apos;t understanding{" "}
            <em>what</em> they had to do — it was the amount of effort required
            to finish.
          </p>
        </CaseSection>

        <div className="border-t border-border/60 my-10" />

        {/* 03 · METHOD */}
        <CaseSection
          label="03 · Methodology"
          title="Quantitative funnels, heuristic review, and benchmark."
        >
          <p className="section-text mb-4">
            With the funnel data as a starting point, I structured the discovery
            around three lenses:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <TakeawayCard
              icon="📊"
              title="GA funnels"
              description="Mapped entry and exit points to prioritize the worst-performing paths."
            />
            <TakeawayCard
              icon="🧠"
              title="Heuristic review"
              description="Nielsen, cognitive load, and PagBank design principles applied to the legacy flow."
            />
            <TakeawayCard
              icon="🔍"
              title="Benchmark"
              description="Desk research across banks and fintechs to understand clearer, faster flows."
            />
          </div>

          <p className="section-text">
            Together, these lenses helped separate symptoms (abandonment in
            several steps) from root causes: scattered decisions, overloaded
            screens, and weak visual prioritization of high-success options like
            Pix and the scanner.
          </p>
        </CaseSection>

        <div className="border-t border-border/60 my-10" />

        {/* 04 · LEGACY FLOW */}
        <CaseSection
          label="04 · Legacy flow"
          title="How the previous experience created friction at every step."
        >
          <p className="section-text mb-4">
            The Hub overwhelmed users with unrelated services and weak
            hierarchy. Core actions like Pix and the scanner were visually
            buried among secondary options.
          </p>
          <p className="section-text mb-4">
            Inside the payment flow, simple decisions were split across multiple
            screens. Users saw long forms, duplicated confirmation moments, and
            a success screen that didn&apos;t feel final or trustworthy enough
            for a financial transaction.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <TakeawayCard
              icon="🧭"
              title="Weak entry hierarchy"
              description="Hub treated all services equally, instead of guiding people to bill payment."
            />
            <TakeawayCard
              icon="🧱"
              title="Fragmented decisions"
              description="Confirmation and payment choice were split, adding unnecessary cognitive load."
            />
            <TakeawayCard
              icon="🐛"
              title="Technical friction"
              description="Card registration bugs and errors at the worst possible moment in the flow."
            />
          </div>
        </CaseSection>

        <div className="border-t border-border/60 my-10" />

        {/* 05 · INSIGHTS */}
        <CaseSection
          label="05 · Insights"
          title="The fastest way to increase conversion was to reduce cognitive load."
        >
          <p className="section-text mb-4">
            Combining analytics, heuristics, and benchmark made the insight
            clear: users were not struggling with the concept of paying a bill.
            They were struggling with how the product exposed the flow.
          </p>

          <p className="section-text mb-4">
            The most impactful intervention would not be adding features. It
            would be simplifying decisions, clarifying hierarchy, and reducing
            the number of steps required to complete a payment.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <TakeawayCard
              icon="🧭"
              title="Clarify entry points"
              description="Turn the Hub into a focused starting point, not a noisy menu."
            />
            <TakeawayCard
              icon="📉"
              title="Collapse steps"
              description="Merge confirmation and payment choice into a single predictable moment."
            />
            <TakeawayCard
              icon="✅"
              title="Strengthen success"
              description="Use success to build trust and make next steps obvious."
            />
          </div>
        </CaseSection>

        <div className="border-t border-border/60 my-10" />

        {/* 06 · APPROACH */}
        <CaseSection
          label="06 · Approach"
          title="Stabilize first, then redesign the journey in slices."
        >
          <p className="section-text mb-6">
            To reduce risk and deliver value early, I proposed a{" "}
            <span className="font-semibold">two-phase strategy</span> that
            aligned Design, Product, and Engineering around the same slices.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <TakeawayCard
              icon="🛠️"
              title="Slice 1 · Stabilize"
              description="Fix scanner UX, correct the card-registration bug, improve labels and rebuild the success screen."
            />
            <TakeawayCard
              icon="🧩"
              title="Slice 2 · Redesign"
              description="Restructure the Hub hierarchy and unify confirmation + payment selection into one clear step."
            />
            <TakeawayCard
              icon="📈"
              title="Measure & iterate"
              description="Track post-launch performance per entry point and method, using the same GA funnels."
            />
          </div>
        </CaseSection>

        <div className="border-t border-border/60 my-10" />

        {/* 07 · SOLUTION */}
        <CaseSection
          label="07 · Solution"
          title="A simpler, more predictable payment experience."
        >
          <p className="section-text mb-4">
            The redesigned journey reduces the number of decisions per step,
            highlights the most successful entry points, and makes the
            confirmation moment feel lightweight instead of bureaucratic.
          </p>
          <p className="section-text mb-4">
            The Hub was reorganized with a clear hierarchy and fewer competing
            options. Scanner, QR code and DDA were grouped into a single
            starting point that matches how people naturally begin a bill
            payment.
          </p>
          <p className="section-text mb-4">
            Inside the flow, confirmation and payment method selection were
            merged into one clean step. Users see the key details, choose how to
            pay, and confirm in the same place — reducing context switching and
            cognitive load.
          </p>
          <p className="section-text">
            Finally, the success screen was rebuilt to be more trustworthy and
            actionable, reinforcing that the payment went through and what users
            can do next if they need a receipt or want to repeat the payment.
          </p>
        </CaseSection>

        <div className="border-t border-border/60 my-10" />

        {/* 08 · IMPACT */}
        <CaseSection
          label="08 · Impact"
          title="Less friction, more completion — and a direct TPV lift."
        >
          <p className="section-text mb-8">
            After launch, we monitored the same GA funnels used in discovery.
            Within the first months, we saw consistent improvements across entry
            points and services:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8">
            <MetricCard
              value="38% → 22%"
              label="manual code abandonment"
            />
            <MetricCard
              value="18% → 11%"
              label="scanner drop-off"
            />
            <MetricCard
              value="12% → 7%"
              label="Pix abandonment"
            />
            <MetricCard
              value="77% → 48%"
              label="credit card abandonment"
            />
            <MetricCard
              value="76% → 53%"
              label="auto-debit abandonment"
            />
            <MetricCard
              value="R$ 35M–60M"
              label="monthly TPV recovered"
            />
          </div>

          <p className="section-text">
            These results reinforced a core belief I bring to other projects:
            when you reduce cognitive load and make the path obvious, users move
            with confidence — and the business feels the impact.
          </p>
        </CaseSection>
      </main>
    </div>
  );
};

export default PagBankCasePage;
