import { Sparkles } from "lucide-react";
import { content } from "@/lib/content";

export function CourseOverview() {
  return (
    <section className="py-20 md:py-28 bg-brand-navy text-brand-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold tracking-widest uppercase text-brand-gold">
            The Course
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold">
            The Hunar Ustaad Flagship Program
          </h2>
          <p className="mt-4 text-brand-white/70 leading-relaxed">
            One program. Every modern skill the industry actually uses.
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {content.courseHighlights.map((c) => (
            <div
              key={c.title}
              className="p-6 rounded-2xl bg-brand-white/5 border border-brand-white/10 hover:border-brand-gold/40 transition-colors"
            >
              <Sparkles className="w-5 h-5 text-brand-gold mb-4" />
              <h3 className="font-semibold text-brand-white">{c.title}</h3>
              <p className="mt-2 text-sm text-brand-white/60 leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {content.learningSteps.map((s) => (
            <div key={s.step} className="p-6 rounded-2xl border border-brand-white/10">
              <div className="text-brand-gold font-mono text-sm">{s.step}</div>
              <h4 className="mt-2 text-lg font-bold text-brand-white">{s.title}</h4>
              <p className="mt-1 text-sm text-brand-white/60">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}