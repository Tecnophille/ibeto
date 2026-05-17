import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { sustainabilityPillars, impactMetrics } from "@/lib/data/sustainability";

export const metadata: Metadata = {
  title: "Sustainability",
  description:
    "The Ibeto Group's commitment to environmental stewardship, community empowerment, and ethical governance.",
};

export default function SustainabilityPage() {
  return (
    <>
      <PageHero
        eyebrow="Sustainability & Impact"
        title="Building Prosperity Responsibly"
        description="Our approach goes beyond compliance — we invest in communities, indigenous capacity, and long-term environmental responsibility."
      />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {impactMetrics.map((m) => (
              <div key={m.label} className="glass-panel rounded-2xl p-6 text-center">
                <p className="font-display text-3xl font-extrabold text-brand-gold">{m.value}</p>
                <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
                  {m.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/5 bg-[#090d16] py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Our Pillars"
            title="Sustainability in Action"
            className="mb-16"
          />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {sustainabilityPillars.map((pillar) => (
              <div
                key={pillar.title}
                className="glass-panel rounded-2xl border border-white/5 p-8 transition-all hover:border-brand-gold/20"
              >
                <h3 className="font-display text-lg font-bold text-white">{pillar.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-400">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 text-center">
        <div className="mx-auto max-w-2xl px-4">
          <p className="text-slate-400">
            Learn more about our community programmes and corporate social investment through our
            news and contact channels.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button href="/news">Latest News</Button>
            <Button href="/contact" variant="secondary">
              Get in Touch
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
