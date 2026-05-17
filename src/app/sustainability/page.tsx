import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { ImpactCard } from "@/components/home/ImpactCard";
import { sustainabilityPillars, impactMetrics } from "@/lib/data/sustainability";
import { homeImpactCards } from "@/lib/data/home";

export const metadata: Metadata = {
  title: "Sustainability",
  description: "The Ibeto Group's commitment to environmental stewardship and community empowerment.",
};

export default function SustainabilityPage() {
  return (
    <>
      <PageHero variant="green" eyebrow="Sustainability" title="Building Prosperity Responsibly" />
      <section className="border-b border-brand-border bg-brand-muted py-12">
        <div className="container-corporate grid grid-cols-2 gap-8 md:grid-cols-4">
          {impactMetrics.map((m) => (
            <div key={m.label} className="text-center">
              <p className="font-display text-4xl font-bold text-brand-primary">{m.value}</p>
              <p className="mt-2 text-sm text-brand-textMuted">{m.label}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="section-padding">
        <div className="container-corporate">
          <SectionHeader eyebrow="Pillars" title="Our Sustainability Framework" className="mb-12" />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {sustainabilityPillars.map((p) => (
              <div key={p.title} className="card-corporate p-6">
                <h3 className="font-display font-bold text-brand-navy">{p.title}</h3>
                <p className="mt-3 text-sm text-brand-textMuted">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section-padding bg-brand-muted">
        <div className="container-corporate">
          <SectionHeader title="Impact in Action" className="mb-12" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {homeImpactCards.slice(0, 3).map((c) => (
              <ImpactCard key={c.title} {...c} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button href="/contact">Get in Touch</Button>
          </div>
        </div>
      </section>
    </>
  );
}
