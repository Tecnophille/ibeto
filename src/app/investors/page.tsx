import type { Metadata } from "next";
import { FileText, Download } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { governanceHighlights, downloadableReports } from "@/lib/data/investors";

export const metadata: Metadata = {
  title: "Investor Relations",
  description:
    "Governance, corporate disclosures, and stakeholder resources from The Ibeto Group.",
};

export default function InvestorsPage() {
  return (
    <>
      <PageHero
        eyebrow="Investor Relations"
        title="Governance & Stakeholder Transparency"
        description="Access corporate profile materials, governance highlights, and disclosures for partners, analysts, and institutional stakeholders."
      />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <SectionHeader
                align="left"
                eyebrow="Governance"
                title="How We Operate"
                description="Long-term value creation through diversified industrial assets and disciplined capital allocation."
              />
              <ul className="mt-8 space-y-4">
                {governanceHighlights.map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-slate-300">
                    <FileText className="shrink-0 text-brand-gold" size={18} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <SectionHeader
                align="left"
                eyebrow="Downloads"
                title="Reports & Presentations"
              />
              <div className="mt-8 space-y-4">
                {downloadableReports.map((doc) => (
                  <div
                    key={doc.title}
                    className={`glass-panel rounded-xl p-6 ${doc.disabled ? "opacity-60" : ""}`}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-wider text-brand-gold">
                          {doc.type}
                        </p>
                        <h3 className="mt-1 font-display font-bold text-white">{doc.title}</h3>
                        <p className="mt-2 text-sm text-slate-400">{doc.description}</p>
                      </div>
                      {!doc.disabled && (
                        <a
                          href={doc.href}
                          className="shrink-0 rounded-lg border border-brand-gold/30 p-2 text-brand-gold hover:bg-brand-gold/10"
                          aria-label={`Download ${doc.title}`}
                        >
                          <Download size={20} />
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/5 bg-[#090d16] py-20 text-center">
        <div className="mx-auto max-w-2xl px-4">
          <p className="text-slate-400">
            For institutional inquiries, media requests, or partnership discussions, contact our
            corporate relations team.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Button href="/contact">Contact Corporate Relations</Button>
            <Button href="/media" variant="secondary">
              Media Centre
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
