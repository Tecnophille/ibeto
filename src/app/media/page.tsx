import type { Metadata } from "next";
import { Download, Image, FileText } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Media Centre",
  description: "Brand assets, corporate profile downloads, and media resources for The Ibeto Group.",
};

const assets = [
  {
    icon: FileText,
    title: "Corporate Profile (PDF)",
    description: "Company overview, sectors, leadership, and strategic positioning.",
    href: "/IbetoGroup-CompanyProfile-Pitch.pdf",
  },
  {
    icon: Image,
    title: "Brand Guidelines",
    description: "Logo usage, colour palette, and typography standards — available on request.",
    href: "/contact",
    request: true,
  },
  {
    icon: Download,
    title: "Press Kit",
    description: "Executive bios, fact sheet, and high-resolution imagery for media use.",
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
        description="Download corporate materials or request brand assets and press kit access from our communications team."
      />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Downloads"
            title="Available Assets"
            className="mb-16"
          />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {assets.map((asset) => {
              const Icon = asset.icon;
              return (
                <div key={asset.title} className="glass-panel flex flex-col rounded-2xl p-8">
                  <Icon className="text-brand-gold" size={28} />
                  <h3 className="mt-4 font-display font-bold text-white">{asset.title}</h3>
                  <p className="mt-2 flex-1 text-sm text-slate-400">{asset.description}</p>
                  <div className="mt-6">
                    {asset.request ? (
                      <Button href={asset.href} variant="secondary" className="w-full text-sm">
                        Request Access
                      </Button>
                    ) : (
                      <a
                        href={asset.href}
                        className="inline-flex w-full items-center justify-center rounded-full border border-brand-gold/40 px-6 py-3 text-sm font-bold text-brand-gold transition-all hover:bg-brand-gold hover:text-brand-navy"
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

      <section className="border-t border-white/5 py-16 text-center">
        <p className="text-slate-400">For media enquiries, visit our news section or contact us directly.</p>
        <div className="mt-6 flex justify-center gap-4">
          <Button href="/news">Latest News</Button>
          <Button href="/contact" variant="secondary">
            Media Contact
          </Button>
        </div>
      </section>
    </>
  );
}
