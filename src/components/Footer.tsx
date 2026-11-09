import { content } from "@/lib/content";

export function Footer() {
  return (
    <footer className="bg-brand-white border-t border-brand-navy/10 py-8">
      <div className="mx-auto max-w-6xl px-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-brand-navy/60">
        <div>{content.footer.copyright}</div>
        <div className="flex gap-5">
          <a href={`mailto:${content.footer.email}`} className="hover:text-brand-navy">
            {content.footer.email}
          </a>
          <a href="#" className="hover:text-brand-navy">Privacy</a>
        </div>
      </div>
    </footer>
  );
}