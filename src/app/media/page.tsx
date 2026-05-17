import type { Metadata } from "next";
import { Download, Image as ImageIcon, FileText } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Media Centre",
  description: "Brand assets and corporate profile downloads for The Ibeto Group.",
};

const assets = [
  {
    icon: FileText,
    title: "Corporate Profile (PDF)",
    description: "Company overview, sectors, leadership, and strategic positioning.",
    href: "/IbetoGroup-CompanyProfile-Pitch.pdf",
  },
  {
    icon: ImageIcon,
    title: "Brand Guidelines",
    description: "Logo usage, colour palette, and typography — available on request.",
    href: "/contact",
    request: true,
  },
  {
    icon: Download,
    title: "Press Kit",
    description: "Executive bios, fact sheet, and high-resolution imagery for media.",
    href: "/contact",
    request: true,
  },
];

export default function MediaPage() {
  return (
    <>
      <PageHero
        eyebrow="Media Centre"
        title="Resources for Press & Partners"
        description="Download corporate materials or request brand assets from our communications team."
      />
      <section className="section-padding">
        <div className="container-corporate">
          <SectionHeader eyebrow="Downloads" title="Available Assets" className="mb-12" />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {assets.map((asset) => {
              const Icon = asset.icon;
              return (
                <div key={asset.title} className="card-corporate flex flex-col p-8">
                  <Icon className="text-brand-primary" size={28} />
                  <h3 className="mt-4 font-display font-bold text-brand-navy">{asset.title}</h3>
                  <p className="mt-2 flex-1 text-sm text-brand-textMuted">{asset.description}</p>
                  <div className="mt-6">
                    {asset.request ? (
                      <Button href={asset.href} variant="outline" className="w-full text-sm">
                        Request Access
                      </Button>
                    ) : (
                      <a
                        href={asset.href}
                        className="inline-flex w-full items-center justify-center rounded-sm bg-brand-primary px-6 py-3 text-sm font-bold uppercase text-white hover:bg-brand-primaryDark"
                      >
                        Download PDF
                      </a>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="border-t border-brand-border bg-brand-muted py-16 text-center">
        <div className="container-corporate">
          <p className="text-brand-textMuted">For media enquiries, visit our news section or contact us.</p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Button href="/news">Latest News</Button>
            <Button href="/contact" variant="outline">
              Media Contact
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
