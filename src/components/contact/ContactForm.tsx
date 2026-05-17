"use client";

import { useState } from "react";
import { subsidiaries } from "@/lib/data/subsidiaries";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="glass-panel rounded-3xl border border-brand-gold/20 bg-brand-navy/20 p-8 text-center">
        <p className="font-display text-lg font-bold text-white">Thank you for your inquiry</p>
        <p className="mt-2 text-sm text-slate-400">
          Our corporate relations team will respond within two business days.
        </p>
      </div>
    );
  }

  return (
    <div className="glass-panel relative rounded-3xl border border-white/10 bg-brand-navy/20 p-8 shadow-xl">
      <h3 className="mb-6 font-display text-lg font-bold text-white">Submit an Enterprise Inquiry</h3>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="company" className="mb-1 block text-xs font-bold uppercase tracking-wider text-slate-400">
            Corporate Name / Entity
          </label>
          <input
            id="company"
            name="company"
            type="text"
            required
            placeholder="Your company name"
            className="w-full rounded-lg border border-white/10 bg-brand-dark px-4 py-3 text-sm text-white transition-colors focus:border-brand-gold focus:outline-none focus:ring-1 focus:ring-brand-gold"
          />
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="email" className="mb-1 block text-xs font-bold uppercase tracking-wider text-slate-400">
              Business Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="you@company.com"
              className="w-full rounded-lg border border-white/10 bg-brand-dark px-4 py-3 text-sm text-white transition-colors focus:border-brand-gold focus:outline-none focus:ring-1 focus:ring-brand-gold"
            />
          </div>
          <div>
            <label htmlFor="division" className="mb-1 block text-xs font-bold uppercase tracking-wider text-slate-400">
              Division
            </label>
            <select
              id="division"
              name="division"
              className="w-full rounded-lg border border-white/10 bg-brand-dark px-4 py-3 text-sm text-slate-300 transition-colors focus:border-brand-gold focus:outline-none focus:ring-1 focus:ring-brand-gold"
            >
              <option value="general">General Inquiry</option>
              {subsidiaries.map((s) => (
                <option key={s.slug} value={s.slug}>
                  {s.shortTitle}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div>
          <label htmlFor="phone" className="mb-1 block text-xs font-bold uppercase tracking-wider text-slate-400">
            Telephone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            placeholder="+234 ..."
            className="w-full rounded-lg border border-white/10 bg-brand-dark px-4 py-3 text-sm text-white transition-colors focus:border-brand-gold focus:outline-none focus:ring-1 focus:ring-brand-gold"
          />
        </div>
        <div>
          <label htmlFor="message" className="mb-1 block text-xs font-bold uppercase tracking-wider text-slate-400">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            required
            placeholder="Describe your inquiry..."
            className="w-full resize-none rounded-lg border border-white/10 bg-brand-dark px-4 py-3 text-sm text-white transition-colors focus:border-brand-gold focus:outline-none focus:ring-1 focus:ring-brand-gold"
          />
        </div>
        <button
          type="submit"
          className="w-full rounded-lg bg-brand-gold py-3.5 text-sm font-bold uppercase tracking-wider text-brand-navy shadow-goldGlow transition-colors duration-300 hover:bg-white"
        >
          Submit Request
        </button>
      </form>
    </div>
  );
}
