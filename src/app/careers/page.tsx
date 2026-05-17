import type { Metadata } from "next";
import { Briefcase, GraduationCap, Users } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Careers",
  description: "Build your career with The Ibeto Group across manufacturing, logistics, hospitality, and corporate functions.",
};

const values = [
  {
    icon: Users,
    title: "People-First Culture",
    description: "We take care of our people — and our people take care of our business.",
  },
  {
    icon: GraduationCap,
    title: "Skills & Growth",
    description: "Training and development across plants, terminals, and offices nationwide.",
  },
  {
    icon: Briefcase,
    title: "Diverse Roles",
    description: "Opportunities in engineering, operations, finance, hospitality, and more.",
  },
];

const openings = [
  { title: "Plant Operations Engineer", division: "Petrochemicals", location: "Nnewi" },
  { title: "Terminal Logistics Coordinator", division: "Cement", location: "Port Harcourt" },
  { title: "Sales Representative", division: "Automotive", location: "Lagos" },
  { title: "Guest Relations Officer", division: "Hospitality", location: "Abuja" },
];

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Build Africa's Industrial Future With Us"
        description="Join a Nigerian-led conglomerate where integrity, execution, and indigenous excellence define how we work."
      />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <div key={v.title} className="glass-panel rounded-2xl p-8 text-center">
                  <Icon className="mx-auto text-brand-gold" size={32} />
                  <h3 className="mt-4 font-display font-bold text-white">{v.title}</h3>
                  <p className="mt-2 text-sm text-slate-400">{v.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-y border-white/5 bg-[#090d16] py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Open Roles"
            title="Current Opportunities"
            description="Representative openings — submit your CV via our contact form with 'Careers' as the inquiry type."
            className="mb-12"
          />
          <div className="space-y-4">
            {openings.map((job) => (
              <div
                key={job.title}
                className="glass-panel flex flex-col justify-between gap-4 rounded-xl p-6 sm:flex-row sm:items-center"
              >
                <div>
                  <h3 className="font-display font-bold text-white">{job.title}</h3>
                  <p className="text-sm text-slate-400">
                    {job.division} · {job.location}
                  </p>
                </div>
                <Button href="/contact" variant="secondary" className="shrink-0 text-xs">
                  Apply via Contact
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
