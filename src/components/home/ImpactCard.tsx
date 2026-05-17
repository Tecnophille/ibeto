import Link from "next/link";
import { ArrowRight } from "lucide-react";

type ImpactCardProps = {
  title: string;
  description: string;
  href: string;
  gradient: string;
};

export function ImpactCard({ title, description, href, gradient }: ImpactCardProps) {
  return (
    <article className="card-corporate group flex flex-col overflow-hidden">
      <div className={`h-44 bg-gradient-to-br ${gradient}`} />
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-lg font-bold text-brand-text group-hover:text-brand-primary">
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
