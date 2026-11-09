import { Hero } from "@/components/Hero";
import { TrustStrip } from "@/components/TrustStrip";
import { ProblemSection } from "@/components/ProblemSection";
import { CourseOverview } from "@/components/CourseOverview";
import { PersonaSection } from "@/components/PersonaSection";
import { FAQ } from "@/components/FAQ";
import { EnrollmentForm } from "@/components/EnrollmentForm";
import { StickyCTA } from "@/components/StickyCTA";
import { Footer } from "@/components/Footer";
import { content } from "@/lib/content";

export default function Home() {
  return (
    <main>
      <div className="bg-brand-gold text-brand-navy text-center text-sm py-2 px-4 font-medium">
        🚀 {content.announcement}
      </div>
      <Hero />
      <TrustStrip />
      <ProblemSection />
      <CourseOverview />
      <PersonaSection />
      <FAQ />
      <EnrollmentForm />
      <Footer />
      <StickyCTA />
      <div className="h-20 md:hidden" aria-hidden />
    </main>
  );
}