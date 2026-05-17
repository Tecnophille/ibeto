import type { Metadata } from "next";
import { Briefcase, GraduationCap, Users } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Careers",
  description: "Build your career with The Ibeto Group.",
};

const values = [
  { icon: Users, title: "People-First Culture", description: "We take care of our people — and our people take care of our business." },
  { icon: GraduationCap, title: "Skills & Growth", description: "Training across plants, terminals, and offices nationwide." },
  { icon: Briefcase, title: "Diverse Roles", description: "Engineering, operations, finance, hospitality, and more." },
];

const openings = [
  { title: "Plant Operations Engineer", division: "Petrochemicals", location: "Nnewi" },
  { title: "Terminal Logistics Coordinator", division: "Cement", location: "Port Harcourt" },
  { title: "Sales Representative", division: "Automotive", location: "Lagos" },
];

export default function CareersPage() {
  return (
    <>
      <PageHero eyebrow="Careers" title="Build With Us" description="Join a Nigerian-led industrial conglomerate." />
      <section className="section-padding">
        <div className="container-corporate grid gap-6 md:grid-cols-3">
          {values.map((v) => {
            const Icon = v.icon;
            return (
              <div key={v.title} className="card-corporate p-8 text-center">
                <Icon className="mx-auto text-brand-primary" size={32} />
                <h3 className="mt-4 font-display font-bold text-brand-navy">{v.title}</h3>
                <p className="mt-2 text-sm text-brand-textMuted">{v.description}</p>
              </div>
            );
          })}
        </div>
      </section>
      <section className="section-padding bg-brand-muted">
        <div className="container-corporate max-w-2xl">
          <SectionHeader title="Current Opportunities" className="mb-8" />
          <div className="space-y-4">
            {openings.map((job) => (
              <div key={job.title} className="card-corporate flex flex-col justify-between gap-4 p-6 sm:flex-row sm:items-center">
                <div>
                  <h3 className="font-display font-bold text-brand-navy">{job.title}</h3>
                  <p className="text-sm text-brand-textMuted">{job.division} · {job.location}</p>
                </div>
                <Button href="/contact" variant="outline" className="shrink-0 text-xs">
                  Apply
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
