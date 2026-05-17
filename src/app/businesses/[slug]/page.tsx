import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { Button } from "@/components/ui/Button";
import { getSubsidiary, subsidiaries } from "@/lib/data/subsidiaries";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return subsidiaries.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const sub = getSubsidiary(params.slug);
  if (!sub) return { title: "Business Not Found" };
  return {
    title: sub.shortTitle,
    description: sub.desc,
  };
}

export default function BusinessDetailPage({ params }: Props) {
  const sub = getSubsidiary(params.slug);
  if (!sub) notFound();

  const Icon = sub.icon;
  const others = subsidiaries.filter((s) => s.slug !== sub.slug).slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow={sub.badge}
        title={sub.title}
        description={sub.tagline}
      />

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/businesses"
            className="mb-8 inline-flex items-center gap-2 text-sm font-bold text-slate-400 hover:text-brand-gold"
          >
            <ArrowLeft size={16} /> All Businesses
          </Link>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <div className={`mb-8 inline-flex rounded-xl border border-white/10 bg-brand-dark p-4 ${sub.accent}`}>
                <Icon size={32} />
              </div>
              <p className="text-lg leading-relaxed text-slate-300">{sub.longDesc}</p>

              <h2 className="mt-12 font-display text-2xl font-bold text-white">Key Highlights</h2>
              <ul className="mt-6 space-y-3">
                {sub.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-3 text-slate-300">
                    <CheckCircle2 className="mt-0.5 shrink-0 text-brand-gold" size={18} />
                    {h}
                  </li>
                ))}
              </ul>

              <h2 className="mt-12 font-display text-2xl font-bold text-white">Capabilities</h2>
              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {sub.capabilities.map((c) => (
                  <div
                    key={c}
                    className="glass-panel rounded-xl border border-white/5 p-4 text-sm text-slate-300"
                  >
                    {c}
                  </div>
                ))}
              </div>
            </div>

            <aside className="lg:col-span-4">
              <div className="glass-panel sticky top-28 rounded-2xl border border-brand-gold/10 p-6">
                <p className="text-xs font-bold uppercase tracking-wider text-brand-gold">Key Metric</p>
                <p className="mt-2 font-display text-2xl font-extrabold text-white">{sub.stats}</p>
                <p className="mt-6 text-sm text-slate-400">
                  For partnership, distribution, or procurement inquiries:
                </p>
                <a
                  href={`mailto:${sub.contactEmail}`}
                  className="mt-2 block text-sm font-bold text-brand-gold hover:underline"
                >
                  {sub.contactEmail}
                </a>
                <div className="mt-8">
                  <Button href="/contact" className="w-full">
                    Contact Division
                  </Button>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="border-t border-white/5 bg-[#090d16] py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 font-display text-xl font-bold text-white">Other Divisions</h2>
          <div className="flex flex-wrap gap-4">
            {others.map((o) => (
              <Link
                key={o.slug}
                href={`/businesses/${o.slug}`}
                className="glass-panel inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold text-slate-300 hover:text-brand-gold"
              >
                {o.shortTitle} <ArrowRight size={14} />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
