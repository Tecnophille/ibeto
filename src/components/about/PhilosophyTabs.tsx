"use client";

import { useState } from "react";
import { Award, Globe, ShieldCheck, ChevronRight } from "lucide-react";
import { philosophyTabs } from "@/lib/data/philosophy";

const icons = {
  mission: Award,
  vision: Globe,
  approach: ShieldCheck,
};

const accents = {
  mission: "text-brand-gold",
  vision: "text-blue-400",
  approach: "text-emerald-400",
};

export function PhilosophyTabs() {
  const [active, setActive] = useState<(typeof philosophyTabs)[number]["id"]>("mission");
  const current = philosophyTabs.find((t) => t.id === active)!;
  const Icon = icons[active];

  return (
    <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
      <div className="flex flex-col gap-6 lg:col-span-5">
        <div className="flex flex-col gap-3">
          {philosophyTabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActive(tab.id)}
              className={`flex items-center justify-between rounded-lg px-5 py-3 text-left text-sm font-bold transition-all duration-300 ${
                active === tab.id
                  ? "bg-brand-gold text-brand-navy"
                  : "bg-white/5 text-slate-300 hover:bg-white/10"
              }`}
            >
              <span>{tab.label}</span>
              <ChevronRight size={16} />
            </button>
          ))}
        </div>
      </div>
      <div className="lg:col-span-7">
        <div className="glass-panel relative flex h-[320px] flex-col justify-between overflow-hidden rounded-3xl border border-white/10 p-8 shadow-2xl md:p-12">
          <div className="absolute -bottom-10 -right-10 h-44 w-44 rounded-full bg-brand-gold/5 blur-xl" />
          <div className="flex flex-col gap-4 animate-fadeIn">
            <div className={`flex items-center gap-3 ${accents[active]}`}>
              <Icon size={24} />
              <span className="font-display text-sm font-extrabold uppercase tracking-widest">
                {current.label}
              </span>
            </div>
            <h3 className="font-display text-2xl font-bold text-white">{current.title}</h3>
            <p className="text-base leading-relaxed text-slate-300">{current.body}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
