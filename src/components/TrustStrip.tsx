import { CheckCircle2 } from "lucide-react";
import { content } from "@/lib/content";

export function TrustStrip() {
  return (
    <section className="border-y border-brand-navy/10 bg-brand-white">
      <div className="mx-auto max-w-6xl px-6 py-6 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm font-medium text-brand-navy/70">
        {content.trustStrip.map((item) => (
          <div key={item} className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-brand-gold" />
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}