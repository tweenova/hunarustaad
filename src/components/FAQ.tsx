"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { content } from "@/lib/content";

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="py-20 md:py-28 bg-brand-white border-t border-brand-navy/10">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-brand-navy">
          Frequently asked questions
        </h2>
        <div className="mt-10 divide-y divide-brand-navy/10">
          {content.faqs.map((f, i) => (
            <div key={f.q}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between py-5 text-left gap-4"
                aria-expanded={open === i}
              >
                <span className="font-medium text-brand-navy">{f.q}</span>
                <ChevronDown
                  className={`w-5 h-5 text-brand-navy/50 shrink-0 transition-transform ${
                    open === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              {open === i && (
                <p className="pb-5 text-sm text-brand-navy/70 leading-relaxed">{f.a}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}