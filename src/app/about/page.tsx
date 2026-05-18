import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { PhilosophyTabs } from "@/components/about/PhilosophyTabs";
import { tagline, chairmanMessage } from "@/lib/data/philosophy";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about The Ibeto Group — heritage, mission, vision, and leadership.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        variant="brand"
        eyebrow="About the Group"
        title="Heritage, Integrity & Industrial Scale"
        description={tagline}
      />
      <section className="section-padding">
        <div className="container-corporate grid grid-cols-1 gap-12 lg:grid-cols-2">
          <SectionHeader
            align="left"
            eyebrow="Our Story"
            title="Built in Nnewi, Trusted Nationwide"
            description="The Ibeto Group has grown from indigenous manufacturing roots into a diversified conglomerate."
          />
          <div className="card-corporate p-8">
            <h3 className="font-display font-bold text-brand-navy">At a Glance</h3>
            <ul className="mt-6 space-y-4 text-sm text-brand-textMuted">
              <li className="border-b border-brand-border pb-4">
                <strong className="text-brand-primary">Head office:</strong> Nnewi, Anambra State
              </li>
              <li className="border-b border-brand-border pb-4">
                <strong className="text-brand-primary">Terminals:</strong> Apapa (Lagos), Bundu Ama (PH)
              </li>
              <li>
                <strong className="text-brand-primary">Divisions:</strong> 6 core industrial sectors
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="section-padding bg-brand-muted">
        <div className="container-corporate">
          <SectionHeader
            eyebrow="Corporate Philosophy"
            title="Mission, Vision & Approach"
            className="mb-12"
          />
          <PhilosophyTabs />
        </div>
      </section>
      <section id="leadership" className="section-padding">
        <div className="container-corporate">
          <SectionHeader eyebrow="Governance" title="Leadership" className="mb-12" />
          <div className="card-corporate max-w-3xl p-8">
            <h3 className="font-display text-xl font-bold text-brand-navy">
              {chairmanMessage.name} ({chairmanMessage.honors})
            </h3>
            <p className="text-sm font-semibold text-brand-accent">{chairmanMessage.title}</p>
            <p className="mt-6 whitespace-pre-line text-brand-textMuted leading-relaxed">
              {chairmanMessage.letter}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
