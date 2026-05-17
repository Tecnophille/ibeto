import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  light?: boolean;
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
  className,
  light = false,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-3",
        align === "center" && "mx-auto max-w-3xl text-center",
        align === "left" && "max-w-2xl text-left",
        className
      )}
    >
      {eyebrow && (
        <span
          className={cn(
            "text-sm font-bold uppercase tracking-widest",
            light ? "text-brand-accent" : "text-brand-primary"
          )}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          "font-display text-3xl font-bold md:text-4xl",
          light ? "text-white" : "text-brand-text"
        )}
      >
        {title}
      </h2>
      {description && (
        <p className={cn("leading-relaxed", light ? "text-white/80" : "text-brand-textMuted")}>
          {description}
        </p>
      )}
    </div>
  );
}
