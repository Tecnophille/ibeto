import { homeStats } from "@/lib/data/subsidiaries";

export function StatsBand() {
  return (
    <section className="border-b border-brand-border bg-brand-muted" aria-label="Key metrics">
      <div className="container-corporate grid grid-cols-2 gap-8 py-12 md:grid-cols-4 md:py-14">
        {homeStats.map((stat) => (
          <div key={stat.label} className="text-center md:text-left">
            <p className="font-display text-4xl font-bold text-brand-primary md:text-5xl">
              {stat.value}
            </p>
            <p className="mt-2 text-sm font-medium uppercase tracking-wide text-brand-textMuted">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
