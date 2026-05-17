import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] flex-col items-center justify-center px-4 pt-24 text-center">
      <p className="text-sm font-bold uppercase tracking-widest text-brand-primary">404</p>
      <h1 className="mt-4 font-display text-4xl font-bold text-brand-navy">Page Not Found</h1>
      <p className="mt-4 max-w-md text-brand-textMuted">
        The page you are looking for may have moved or does not exist.
      </p>
      <div className="mt-8 flex gap-4">
        <Button href="/">Back to Home</Button>
        <Link
          href="/contact"
          className="inline-flex items-center rounded-sm border-2 border-brand-primary px-6 py-3 text-sm font-bold text-brand-primary hover:bg-brand-primary hover:text-white"
        >
          Contact Us
        </Link>
      </div>
    </section>
  );
}
