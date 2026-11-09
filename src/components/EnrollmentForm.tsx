"use client";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { content } from "@/lib/content";

export function EnrollmentForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    // TODO: replace with real API/server action
    await new Promise((r) => setTimeout(r, 600));
    setLoading(false);
    setSubmitted(true);
  }

  return (
    <section id="enroll" className="py-20 md:py-28 bg-brand-navy text-brand-white">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold">{content.form.title}</h2>
        <p className="mt-3 text-brand-white/70 max-w-xl mx-auto">{content.form.subtitle}</p>

        {submitted ? (
          <div className="mt-10 p-6 rounded-2xl bg-brand-gold/10 border border-brand-gold/30 text-brand-white">
            {content.form.success}
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-10 grid gap-4 max-w-lg mx-auto text-left">
            <div>
              <label className="block text-sm mb-2 text-brand-white/80">Name</label>
              <input
                required type="text" name="name"
                className="w-full rounded-xl bg-brand-white/5 border border-brand-white/15 px-4 py-3 text-brand-white placeholder-brand-white/40 focus:outline-none focus:border-brand-gold"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-sm mb-2 text-brand-white/80">Email</label>
              <input
                required type="email" name="email"
                className="w-full rounded-xl bg-brand-white/5 border border-brand-white/15 px-4 py-3 text-brand-white placeholder-brand-white/40 focus:outline-none focus:border-brand-gold"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="block text-sm mb-2 text-brand-white/80">Phone (optional)</label>
              <input
                type="tel" name="phone"
                className="w-full rounded-xl bg-brand-white/5 border border-brand-white/15 px-4 py-3 text-brand-white placeholder-brand-white/40 focus:outline-none focus:border-brand-gold"
                placeholder="+92..."
              />
            </div>
            <button
              disabled={loading}
              type="submit"
              className="mt-2 inline-flex items-center justify-center gap-2 bg-brand-gold hover:bg-brand-gold-light disabled:opacity-60 text-brand-navy font-semibold px-6 py-3.5 rounded-xl transition-colors"
            >
              {loading ? "Sending..." : content.form.submit}
              {!loading && <ArrowRight className="w-4 h-4" />}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}