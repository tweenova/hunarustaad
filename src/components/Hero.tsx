import { ArrowRight, Download } from "lucide-react";
import { content } from "@/lib/content";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-brand-white pt-16 pb-24 md:pt-24 md:pb-32">
      <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="animate-fade-up">
          <span className="inline-block mb-5 px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase bg-brand-gold/10 text-brand-gold border border-brand-gold/20">
            Hunar Ustaad Flagship Program
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-[1.05] text-brand-navy">
            {content.hero.headline}
          </h1>
          <p className="mt-6 text-base md:text-lg text-brand-navy/70 max-w-xl leading-relaxed">
            {content.hero.subheadline}
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href="#enroll"
              className="inline-flex items-center justify-center gap-2 bg-brand-gold hover:bg-brand-gold-light text-brand-navy font-semibold px-6 py-3.5 rounded-xl transition-colors shadow-lg"
            >
              {content.hero.primaryCta}
              <ArrowRight className="w-4 h-4" />
            </a>
            <button className="inline-flex items-center justify-center gap-2 border border-brand-navy/15 hover:border-brand-navy/30 text-brand-navy font-medium px-6 py-3.5 rounded-xl transition-colors">
              <Download className="w-4 h-4" />
              {content.hero.secondaryCta}
            </button>
          </div>
        </div>

        <div className="relative h-[360px] md:h-[460px] rounded-2xl bg-brand-navy overflow-hidden shadow-2xl">
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 20%, #c48b23 0%, transparent 40%), radial-gradient(circle at 80% 80%, #c48b23 0%, transparent 40%)",
            }}
          />
          <div className="relative p-6 font-mono text-sm text-brand-white/90 leading-relaxed">
            <div className="flex gap-1.5 mb-4">
              <div className="w-2.5 h-2.5 rounded-full bg-brand-gold/60" />
              <div className="w-2.5 h-2.5 rounded-full bg-brand-white/30" />
              <div className="w-2.5 h-2.5 rounded-full bg-brand-white/30" />
            </div>
            <div className="space-y-1.5">
              <div>
                <span className="text-brand-gold">import</span> {"{ skills }"}{" "}
                <span className="text-brand-gold">from</span>{" "}
                <span className="text-brand-gold/80">&apos;hunar-ustaad&apos;</span>;
              </div>
              <div className="text-brand-white/40">// build real, ship real</div>
              <div>
                <span className="text-brand-gold">const</span> you ={" "}
                <span className="text-brand-gold">await</span> skills.learn({"{"}
              </div>
              <div className="pl-4">ai: <span className="text-brand-gold">true</span>,</div>
              <div className="pl-4">code: <span className="text-brand-gold">true</span>,</div>
              <div className="pl-4">apps: <span className="text-brand-gold">true</span>,</div>
              <div className="pl-4">business: <span className="text-brand-gold">true</span>,</div>
              <div>{"});"}</div>
              <div className="mt-3">
                <span className="text-brand-gold">await</span> you.deploy();
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}