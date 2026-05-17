import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { PhilosophyTabs } from "@/components/about/PhilosophyTabs";
import { tagline, chairmanMessage } from "@/lib/data/philosophy";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about The Ibeto Group — our heritage, mission, vision, leadership, and corporate philosophy.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About the Group"
        title="Heritage, Integrity & Industrial Scale"
        description={tagline}
      />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <SectionHeader
                align="left"
                eyebrow="Our Story"
                title="Built in Nnewi, Trusted Nationwide"
                description="The Ibeto Group has grown from indigenous manufacturing roots into a diversified conglomerate spanning petrochemicals, cement, automotive components, hospitality, real estate, and energy trading."
              />
              <p className="mt-6 text-slate-400 leading-relaxed">
                We believe success is the product of joint effort — achieved in partnership with
                customers through integrity, meticulous planning, and dedication to execution.
                Providing the right quality is essential to our service philosophy across every
                division.
              </p>
            </div>
            <div className="glass-panel rounded-2xl p-8">
              <h3 className="font-display text-lg font-bold text-white">At a Glance</h3>
              <ul className="mt-6 space-y-4 text-sm text-slate-300">
                <li className="border-b border-white/5 pb-4">
                  <strong className="text-brand-gold">Founded heritage:</strong> Decades of
                  manufacturing excellence in Anambra State
                </li>
                <li className="border-b border-white/5 pb-4">
                  <strong className="text-brand-gold">Head office:</strong> Nnewi factory complex,
                  Anambra
                </li>
                <li className="border-b border-white/5 pb-4">
                  <strong className="text-brand-gold">Key terminals:</strong> Apapa (Lagos), Bundu
                  Ama (Port Harcourt)
                </li>
                <li>
                  <strong className="text-brand-gold">Divisions:</strong> 6 core industrial sectors
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/5 bg-[#090d16] py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Corporate Philosophy"
            title="Mission, Vision & Approach"
            description="Our strategic values — presented as accessible, searchable content for all stakeholders."
            className="mb-16"
          />
          <PhilosophyTabs />
        </div>
      </section>

      <section id="leadership" className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Governance"
            title="Leadership"
            description="Board-led oversight with deep experience across manufacturing, logistics, and capital management."
            className="mb-12"
          />
          <div className="glass-panel max-w-3xl rounded-2xl border border-white/5 p-8">
            <div className="mb-6 flex items-center gap-4">
              <div className="flex h-20 w-20 items-center justify-center rounded-full border border-brand-gold/30 bg-brand-gold/10 font-display text-2xl font-extrabold text-brand-gold">
                CMI
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-white">
                  {chairmanMessage.name}
                </h3>
                <p className="text-sm font-bold text-brand-gold">{chairmanMessage.honors}</p>
                <p className="text-sm text-slate-400">{chairmanMessage.title}</p>
              </div>
            </div>
            <p className="whitespace-pre-line text-slate-300 leading-relaxed">{chairmanMessage.letter}</p>
            <blockquote className="mt-8 border-l-2 border-brand-gold pl-4 text-sm italic text-slate-400">
              &ldquo;{chairmanMessage.quote}&rdquo;
            </blockquote>
          </div>
        </div>
      </section>
    </>
  );
}
