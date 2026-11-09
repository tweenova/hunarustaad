import { Check } from "lucide-react";
import { content } from "@/lib/content";

export function PersonaSection() {
  return (
    <section className="py-20 md:py-28 bg-brand-white">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-brand-navy max-w-2xl">
          Who is this program for?
        </h2>
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {content.personas.map((p) => (
            <div key={p.title} className="p-6 rounded-2xl border border-brand-navy/10">
              <h3 className="font-bold text-lg text-brand-navy">{p.title}</h3>
              <ul className="mt-4 space-y-2.5">
                {p.points.map((pt) => (
                  <li key={pt} className="flex gap-2 text-sm text-brand-navy/70">
                    <Check className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}