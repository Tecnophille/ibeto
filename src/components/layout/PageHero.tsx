import { cn } from "@/lib/utils";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
  variant?: "default" | "brand";
};

export function PageHero({
  eyebrow,
  title,
  description,
  className,
  variant = "default",
}: PageHeroProps) {
  return (
    <section
      className={cn(
        "relative mt-[72px] border-b border-brand-border lg:mt-[104px]",
        variant === "green"
          ? "bg-gradient-to-br from-brand-primary to-brand-primaryDark"
          : "bg-brand-muted",
        className
      )}
    >
      <div className="container-corporate py-14 md:py-20">
        {eyebrow && (
          <span
            className={cn(
              "mb-3 inline-block text-sm font-bold uppercase tracking-widest",
              variant === "brand" ? "text-brand-accent" : "text-brand-primary"
            )}
          >
            {eyebrow}
          </span>
        )}
        <h1
          className={cn(
            "font-display text-4xl font-bold leading-tight md:text-5xl",
            variant === "brand" ? "text-white" : "text-brand-navy"
          )}
        >
          {title}
        </h1>
        {description && (
          <p
            className={cn(
              "mt-4 max-w-2xl text-lg leading-relaxed",
              variant === "brand" ? "text-white/90" : "text-brand-textMuted"
            )}
          >
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
