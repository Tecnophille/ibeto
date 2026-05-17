import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonProps = {
  href?: string;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  className?: string;
  children: React.ReactNode;
  type?: "button" | "submit";
  onClick?: () => void;
};

const variants = {
  primary:
    "bg-brand-primary text-white hover:bg-brand-primaryDark rounded-sm uppercase tracking-wide",
  secondary:
    "bg-brand-accent text-white hover:bg-brand-accentDark rounded-sm uppercase tracking-wide",
  outline:
    "border-2 border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white rounded-sm",
  ghost: "text-brand-primary hover:text-brand-primaryDark font-semibold",
};

export function Button({
  href,
  variant = "primary",
  className,
  children,
  type = "button",
  onClick,
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-bold transition-all duration-200",
    variants[variant],
    className
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
