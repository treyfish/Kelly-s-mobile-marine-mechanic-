import { PHONE_HREF, PHONE } from "@/lib/constants";

export default function StickyCallButton() {
  return (
    <a
      href={PHONE_HREF}
      className="fixed bottom-4 right-4 z-50 md:bottom-6 md:right-6 bg-gold hover:bg-gold/90 text-navy font-oswald font-bold px-5 py-3 rounded-full shadow-lg flex items-center gap-2 min-h-[48px] transition-all hover:shadow-[0_0_25px_rgba(245,158,11,0.5)] hover:scale-105"
    >
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
      </svg>
      <span className="hidden sm:inline text-sm">{PHONE}</span>
    </a>
  );
}
