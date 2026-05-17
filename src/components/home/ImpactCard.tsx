import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

type ImpactCardProps = {
  title: string;
  description: string;
  href: string;
  image: string;
};

export function ImpactCard({ title, description, href, image }: ImpactCardProps) {
  return (
    <article className="card-corporate group flex flex-col overflow-hidden">
      <div className="relative h-44 overflow-hidden">
        <Image
          src={image}
          alt=""
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div className="absolute inset-0 bg-brand-navy/30 transition-colors group-hover:bg-brand-primary/40" />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-lg font-bold text-brand-navy group-hover:text-brand-primary">
          {title}
        </h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-brand-textMuted">{description}</p>
        <Link href={href} className="link-arrow mt-4">
          Read More <ArrowRight size={16} />
        </Link>
      </div>
    </article>
  );
}
