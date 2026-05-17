import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { NewsArticle } from "@/lib/data/news";

const categoryColors: Record<string, string> = {
  Corporate: "bg-brand-navy",
  Cement: "bg-amber-700",
  Petrochemicals: "bg-blue-700",
  CSR: "bg-brand-primary",
};

export function NewsCard({ article, featured = false }: { article: NewsArticle; featured?: boolean }) {
  const date = new Date(article.date).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const barColor = categoryColors[article.category] ?? "bg-brand-navy";

  return (
    <article className={featured ? "card-corporate overflow-hidden md:col-span-2 md:grid md:grid-cols-2" : "card-corporate overflow-hidden"}>
      <div className={`${barColor} ${featured ? "min-h-[200px] md:min-h-full" : "h-40"}`} />
      <div className="flex flex-col p-6">
        <motionless className="mb-3 flex items-center gap-3">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-primary">
            {article.category}
          </span>
          <time className="text-xs text-brand-textMuted" dateTime={article.date}>
            {date}
          </time>
        </motionless>
        <h3 className={`font-display font-bold text-brand-text ${featured ? "text-2xl" : "text-lg"}`}>
          {article.title}
        </h3>
        <p className="mt-2 line-clamp-3 flex-1 text-sm text-brand-textMuted">{article.excerpt}</p>
        <Link href={`/news/${article.slug}`} className="link-arrow mt-4">
          Read more <ArrowRight size={16} />
        </Link>
      </div>
    </article>
  );
}
