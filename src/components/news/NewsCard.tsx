import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { NewsArticle } from "@/lib/data/news";

export function NewsCard({ article }: { article: NewsArticle }) {
  const date = new Date(article.date).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <article className="glass-panel group flex flex-col justify-between rounded-2xl border border-white/5 p-6 transition-all hover:border-brand-gold/20">
      <div>
        <div className="mb-3 flex items-center gap-3">
          <span className="rounded-full border border-white/10 bg-brand-dark/50 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-brand-gold">
            {article.category}
          </span>
          <time className="text-xs text-slate-500" dateTime={article.date}>
            {date}
          </time>
        </div>
        <h3 className="font-display text-lg font-bold text-white transition-colors group-hover:text-brand-gold">
          {article.title}
        </h3>
        <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-slate-400">{article.excerpt}</p>
      </div>
      <Link
        href={`/news/${article.slug}`}
        className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-brand-gold hover:text-white"
      >
        Read more <ArrowRight size={16} />
      </Link>
    </article>
  );
}
