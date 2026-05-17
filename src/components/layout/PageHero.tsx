import { cn } from "@/lib/utils";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
};

export function PageHero({ eyebrow, title, description, className }: PageHeroProps) {
  return (
    <section
      className={cn(
        "relative border-b border-white/5 pt-32 pb-16 md:pt-40 md:pb-20",
        className
      )}
    >
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {eyebrow && (
          <span className="mb-4 inline-block text-sm font-bold uppercase tracking-widest text-brand-gold">
            {eyebrow}
          </span>
        )}
        <h1 className="font-display text-4xl font-black uppercase leading-tight text-white sm:text-5xl md:text-6xl">
          {title}
        </h1>
        {description && (
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
