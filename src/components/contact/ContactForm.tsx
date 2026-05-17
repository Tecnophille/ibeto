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
      <div className="card-corporate border-brand-primary/20 p-8 text-center">
        <p className="font-display text-lg font-bold text-brand-navy">Thank you for your inquiry</p>
        <p className="mt-2 text-sm text-brand-textMuted">
          Our corporate relations team will respond within two business days.
        </p>
      </div>
    );
  }

  const inputClass =
    "w-full rounded border border-brand-border bg-white px-4 py-3 text-sm text-brand-text focus:border-brand-primary focus:outline-none focus:ring-1 focus:ring-brand-primary";

  return (
    <div className="card-corporate p-8">
      <h3 className="mb-6 font-display text-lg font-bold text-brand-navy">Submit an Enterprise Inquiry</h3>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="company" className="mb-1 block text-xs font-bold uppercase text-brand-textMuted">
            Corporate Name
          </label>
          <input id="company" name="company" type="text" required className={inputClass} />
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="email" className="mb-1 block text-xs font-bold uppercase text-brand-textMuted">
              Business Email
            </label>
            <input id="email" name="email" type="email" required className={inputClass} />
          </div>
          <div>
            <label htmlFor="division" className="mb-1 block text-xs font-bold uppercase text-brand-textMuted">
              Division
            </label>
            <select id="division" name="division" className={inputClass}>
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
          <label htmlFor="phone" className="mb-1 block text-xs font-bold uppercase text-brand-textMuted">
            Telephone
          </label>
          <input id="phone" name="phone" type="tel" required className={inputClass} />
        </div>
        <div>
          <label htmlFor="message" className="mb-1 block text-xs font-bold uppercase text-brand-textMuted">
            Message
          </label>
          <textarea id="message" name="message" rows={4} required className={`${inputClass} resize-none`} />
        </div>
        <button
          type="submit"
          className="w-full rounded-sm bg-brand-primary py-3.5 text-sm font-bold uppercase tracking-wide text-white hover:bg-brand-primaryDark"
        >
          Submit Request
        </button>
      </form>
    </div>
  );
}
