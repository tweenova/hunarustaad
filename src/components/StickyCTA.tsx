"use client";
import { useEffect, useState } from "react";
import { ArrowRight, X } from "lucide-react";
import { content } from "@/lib/content";

export function StickyCTA() {
  const [dismissed, setDismissed] = useState(false);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShow(true), 800);
    return () => clearTimeout(t);
  }, []);

  if (dismissed || !show) return null;

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 p-3 bg-brand-white border-t border-brand-navy/10">
      <div className="flex items-center gap-2">
        <a
          href="#enroll"
          className="flex-1 inline-flex items-center justify-center gap-2 bg-brand-gold text-brand-navy font-semibold px-4 py-3 rounded-xl text-sm"
        >
          {content.hero.primaryCta}
          <ArrowRight className="w-4 h-4" />
        </a>
        <button
          onClick={() => setDismissed(true)}
          aria-label="Dismiss"
          className="p-2 text-brand-navy/50"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}