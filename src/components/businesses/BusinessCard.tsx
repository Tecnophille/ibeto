import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Subsidiary } from "@/lib/data/subsidiaries";

export function BusinessCard({ sub }: { sub: Subsidiary }) {
  const Icon = sub.icon;

  return (
    <Link
      href={`/businesses/${sub.slug}`}
      className={`group relative flex h-[360px] flex-col justify-between overflow-hidden rounded-2xl border border-white/5 bg-gradient-to-b ${sub.color} p-8 transition-all duration-300 hover:-translate-y-1 hover:border-brand-gold/20 hover:shadow-lg`}
    >
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <div className={`rounded-xl border border-white/10 bg-brand-dark p-3 ${sub.accent}`}>
            <Icon size={24} />
          </div>
          <span className="rounded-full border border-white/5 bg-brand-dark/50 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-400">
            {sub.badge}
          </span>
        </div>
        <div className="flex flex-col gap-1.5">
          <h3 className="font-display text-xl font-bold text-white transition-colors group-hover:text-brand-gold">
            {sub.title}
          </h3>
          <span className="text-xs font-semibold italic text-slate-400">{sub.tagline}</span>
        </div>
        <p className="line-clamp-4 text-sm leading-relaxed text-slate-300">{sub.desc}</p>
      </div>
      <div className="mt-4 flex items-center justify-between border-t border-white/5 pt-4">
        <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
          {sub.stats}
        </span>
        <ArrowUpRight
          size={18}
          className="text-slate-400 transition-colors group-hover:text-brand-gold"
        />
      </div>
    </Link>
  );
}
