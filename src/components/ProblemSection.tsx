import { XCircle } from "lucide-react";
import { content } from "@/lib/content";

export function ProblemSection() {
  return (
    <section className="py-20 md:py-28 bg-brand-white">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-brand-navy max-w-2xl">
          Most programs leave you with theory. Not proof.
        </h2>
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {content.problemPoints.map((p) => (
            <div key={p.title} className="p-6 rounded-2xl border border-brand-navy/10">
              <XCircle className="w-6 h-6 text-brand-gold mb-4" />
              <h3 className="font-semibold text-brand-navy mb-2">{p.title}</h3>
              <p className="text-sm text-brand-navy/70 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}