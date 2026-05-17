"use client";

import { useState } from "react";
import { philosophyTabs } from "@/lib/data/philosophy";

export function PhilosophyTabs() {
  const [active, setActive] = useState<(typeof philosophyTabs)[number]["id"]>("mission");
  const current = philosophyTabs.find((t) => t.id === active)!;

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
      <div className="flex flex-col gap-2 lg:col-span-4">
        {philosophyTabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => setActive(tab.id)}
            className={`rounded-sm px-5 py-3 text-left text-sm font-bold transition-all ${
              active === tab.id
                ? "bg-brand-primary text-white"
                : "bg-brand-muted text-brand-text hover:bg-brand-primaryLight"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="card-corporate p-8 lg:col-span-8">
        <p className="text-xs font-bold uppercase tracking-widest text-brand-primary">{current.label}</p>
        <h3 className="mt-2 font-display text-2xl font-bold text-brand-navy">{current.title}</h3>
        <p className="mt-4 leading-relaxed text-brand-textMuted">{current.body}</p>
      </div>
    </div>
  );
}
