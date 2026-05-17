import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Subsidiary } from "@/lib/data/subsidiaries";

const sectorGradients: Record<string, string> = {
  petrochemicals: "from-blue-700 to-blue-900",
  cement: "from-amber-700 to-amber-900",
  automotive: "from-emerald-700 to-emerald-900",
  hospitality: "from-violet-700 to-violet-900",
  properties: "from-cyan-700 to-cyan-900",
  "oil-gas": "from-rose-700 to-rose-900",
};

export function BusinessCard({ sub }: { sub: Subsidiary }) {
  const Icon = sub.icon;
  const gradient = sectorGradients[sub.slug] ?? "from-brand-navy to-brand-primaryDark";

  return (
    <Link href={`/businesses/${sub.slug}`} className="card-corporate group flex flex-col overflow-hidden">
      <div className={`relative flex h-48 items-end bg-gradient-to-br ${gradient} p-6`}>
        <div className="rounded bg-white/20 p-3 text-white backdrop-blur">
          <Icon size={28} />
        </div>
        <span className="absolute right-4 top-4 rounded bg-white/90 px-2 py-1 text-[10px] font-bold uppercase text-brand-navy">
          {sub.badge}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-xl font-bold text-brand-text group-hover:text-brand-primary">
          {sub.title}
        </h3>
        <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-brand-accent">
          {sub.tagline}
        </p>
        <p className="mt-3 line-clamp-3 flex-1 text-sm leading-relaxed text-brand-textMuted">
          {sub.desc}
        </p>
        <span className="link-arrow mt-4">
          Learn more <ArrowRight size={16} />
        </span>
      </div>
    </Link>
  );
}
