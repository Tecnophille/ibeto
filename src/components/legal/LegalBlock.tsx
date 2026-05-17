export function LegalBlock({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-10">
      <h2 className="font-display text-xl font-bold text-brand-navy">{title}</h2>
      <div className="mt-3 space-y-3 leading-relaxed text-brand-textMuted">{children}</div>
    </div>
  );
}
