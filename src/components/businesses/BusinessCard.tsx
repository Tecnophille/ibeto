import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Subsidiary } from "@/lib/data/subsidiaries";

export function BusinessCard({ sub }: { sub: Subsidiary }) {
  return (
    <Link href={`/businesses/${sub.slug}`} className="card-corporate group overflow-hidden">
      <div className="relative h-52 overflow-hidden">
        <Image
          src={sub.image}
          alt={sub.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <span className="absolute right-4 top-4 rounded bg-white px-2 py-1 text-[10px] font-bold uppercase text-brand-navy">
          {sub.badge}
        </span>
      </div>
      <div className="flex flex-col p-6">
        <h3 className="font-display text-xl font-bold text-brand-navy group-hover:text-brand-primary">
          {sub.title}
        </h3>
        <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-brand-accent">
          {sub.tagline}
        </p>
        <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-brand-textMuted">{sub.desc}</p>
        <span className="link-arrow mt-4">
          Learn more <ArrowRight size={16} />
        </span>
      </div>
    </Link>
  );
}
