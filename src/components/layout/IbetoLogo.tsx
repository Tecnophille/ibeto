import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

type IbetoLogoProps = {
  variant?: "header" | "footer";
  className?: string;
  onClick?: () => void;
};

const sizes = {
  header: { width: 56, height: 56, className: "h-11 w-11 sm:h-12 sm:w-12" },
  footer: { width: 52, height: 52, className: "h-12 w-12" },
};

export function IbetoLogo({ variant = "header", className, onClick }: IbetoLogoProps) {
  const { width, height, className: sizeClass } = sizes[variant];

  return (
    <Link
      href="/"
      onClick={onClick}
      className={cn("inline-flex shrink-0 items-center", className)}
      aria-label="The Ibeto Group — Home"
    >
      <Image
        src="/ibeto-logo.png"
        alt="The Ibeto Group"
        width={width}
        height={height}
        className={cn(sizeClass, "object-contain")}
        priority={variant === "header"}
      />
    </Link>
  );
}
