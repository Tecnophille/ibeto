import type { Metadata } from "next";
import { FileText, Download } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { governanceHighlights, downloadableReports } from "@/lib/data/investors";

export const metadata: Metadata = {
  title: "Investor Relations",
  description: "Governance and corporate disclosures from The Ibeto Group.",
};

export default function InvestorsPage() {
  return (
    <>
      <PageHero variant="green" eyebrow="Investor Relations" title="Governance & Transparency" />
      <section className="section-padding">
        <div className="container-corporate grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeader align="left" title="How We Operate" className="mb-8" />
            <ul className="space-y-4">
              {governanceHighlights.map((item) => (
                <li key={item} className="flex gap-3 text-sm text-brand-textMuted">
                  <FileText className="shrink-0 text-brand-primary" size={18} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            {downloadableReports.map((doc) => (
              <div key={doc.title} className={`card-corporate p-6 ${doc.disabled ? "opacity-60" : ""}`}>
                <p className="text-xs font-bold uppercase text-brand-primary">{doc.type}</p>
                <h3 className="mt-1 font-display font-bold text-brand-navy">{doc.title}</h3>
                <p className="mt-2 text-sm text-brand-textMuted">{doc.description}</p>
                {!doc.disabled && (
                  <a href={doc.href} className="link-arrow mt-4">
                    <Download size={16} className="inline" /> Download
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-brand-muted py-16 text-center">
        <div className="container-corporate">
          <Button href="/contact">Contact Corporate Relations</Button>
        </div>
      </section>
    </>
  );
}
