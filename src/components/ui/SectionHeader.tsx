import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" && "mx-auto max-w-3xl text-center",
        align === "left" && "max-w-2xl text-left",
        className
      )}
    >
      {eyebrow && (
        <span className="text-sm font-bold uppercase tracking-widest text-brand-gold">
          {eyebrow}
        </span>
      )}
      <h2 className="font-display text-3xl font-extrabold text-white sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="text-slate-400 leading-relaxed">{description}</p>
      )}
    </div>
  );
}
