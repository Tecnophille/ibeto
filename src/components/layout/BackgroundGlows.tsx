export function BackgroundGlows() {
  return (
    <>
      <div className="pointer-events-none absolute left-1/4 top-0 h-[500px] w-[500px] rounded-full bg-blue-900/10 blur-[120px]" />
      <div className="pointer-events-none absolute right-1/4 top-[20%] h-[600px] w-[600px] rounded-full bg-brand-gold/5 blur-[140px]" />
      <div className="pointer-events-none absolute bottom-[20%] left-[10%] h-[500px] w-[500px] rounded-full bg-emerald-950/10 blur-[120px]" />
    </>
  );
}
