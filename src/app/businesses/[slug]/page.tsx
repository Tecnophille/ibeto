import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { getSubsidiary, subsidiaries } from "@/lib/data/subsidiaries";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return subsidiaries.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const sub = getSubsidiary(params.slug);
  if (!sub) return { title: "Business Not Found" };
  return { title: sub.shortTitle, description: sub.desc };
}

export default function BusinessDetailPage({ params }: Props) {
  const sub = getSubsidiary(params.slug);
  if (!sub) notFound();

  const Icon = sub.icon;
  const others = subsidiaries.filter((s) => s.slug !== sub.slug).slice(0, 3);

  return (
    <>
      <div className="relative mt-[72px] h-[360px] overflow-hidden md:h-[420px]">
        <div className="relative h-full w-full">
          <Image src={sub.image} alt={sub.title} fill className="object-cover" priority sizes="100vw" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/90 to-brand-navy/50" />
        <div className="container-corporate relative flex h-full flex-col justify-end pb-12">
          <Link
            href="/businesses"
            className="mb-6 inline-flex w-fit items-center gap-2 text-sm text-white/80 hover:text-white"
          >
            <ArrowLeft size={16} /> All Businesses
          </Link>
          <div className="flex items-end gap-4">
            <div className="rounded bg-white/20 p-4 text-white backdrop-blur">
              <Icon size={36} />
            </div>
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-brand-accent">{sub.badge}</p>
              <h1 className="font-display text-3xl font-bold text-white md:text-5xl">{sub.title}</h1>
              <p className="mt-1 text-white/80">{sub.tagline}</p>
            </div>
          </div>
        </div>
      </div>

      <section className="section-padding">
        <div className="container-corporate grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <p className="text-lg leading-relaxed text-brand-textMuted">{sub.longDesc}</p>
            <h2 className="mt-12 font-display text-2xl font-bold text-brand-navy">Key Highlights</h2>
            <ul className="mt-6 space-y-3">
              {sub.highlights.map((h) => (
                <li key={h} className="flex items-start gap-3 text-brand-text">
                  <CheckCircle2 className="mt-0.5 shrink-0 text-brand-primary" size={18} />
                  {h}
                </li>
              ))}
            </ul>
            <h2 className="mt-12 font-display text-2xl font-bold text-brand-navy">Capabilities</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {sub.capabilities.map((c) => (
                <div key={c} className="card-corporate p-4 text-sm text-brand-textMuted">
                  {c}
                </div>
              ))}
            </div>
          </div>
          <aside className="lg:col-span-4">
            <div className="card-corporate sticky top-28 border-brand-primary/20 p-6">
              <p className="text-xs font-bold uppercase text-brand-primary">Key Metric</p>
              <p className="mt-2 font-display text-2xl font-bold text-brand-navy">{sub.stats}</p>
              <a
                href={`mailto:${sub.contactEmail}`}
                className="mt-4 block text-sm font-bold text-brand-primary hover:underline"
              >
                {sub.contactEmail}
              </a>
              <Button href="/contact" className="mt-6 w-full">
                Contact Division
              </Button>
            </div>
          </aside>
        </div>
      </section>

      <section className="border-t border-brand-border bg-brand-muted py-12">
        <div className="container-corporate">
          <h2 className="mb-6 font-display text-lg font-bold text-brand-navy">Other Divisions</h2>
          <div className="flex flex-wrap gap-3">
            {others.map((o) => (
              <Link
                key={o.slug}
                href={`/businesses/${o.slug}`}
                className="rounded-full border border-brand-border bg-white px-4 py-2 text-sm font-semibold text-brand-text hover:border-brand-primary hover:text-brand-primary"
              >
                {o.shortTitle}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
