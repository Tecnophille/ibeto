import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { NewsArticle } from "@/lib/data/news";

export function NewsCard({ article, featured = false }: { article: NewsArticle; featured?: boolean }) {
  const date = new Date(article.date).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  if (featured) {
    return (
      <article className="card-corporate group overflow-hidden md:col-span-2 lg:grid lg:grid-cols-2 lg:items-stretch">
        <div className="relative h-56 w-full shrink-0 overflow-hidden lg:h-auto lg:min-h-[260px]">
          <Image
            src={article.image}
            alt=""
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <span className="absolute left-4 top-4 rounded bg-white px-2 py-1 text-[10px] font-bold uppercase text-brand-primary">
            {article.category}
          </span>
        </div>
        <div className="flex flex-col p-6">
          <time className="text-xs text-brand-textMuted" dateTime={article.date}>
            {date}
          </time>
          <h3 className="mt-2 font-display text-2xl font-bold text-brand-navy group-hover:text-brand-primary">
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

  return (
    <article className="card-corporate group flex flex-col overflow-hidden">
      <div className="relative h-48 w-full shrink-0 overflow-hidden">
        <Image
          src={article.image}
          alt=""
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <span className="absolute left-4 top-4 rounded bg-white px-2 py-1 text-[10px] font-bold uppercase text-brand-primary">
          {article.category}
        </span>
      </div>
      <div className="flex flex-col p-6">
        <time className="text-xs text-brand-textMuted" dateTime={article.date}>
          {date}
        </time>
        <h3 className="mt-2 font-display text-lg font-bold text-brand-navy group-hover:text-brand-primary">
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
