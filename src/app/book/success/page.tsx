import Link from "next/link";
import { PHONE, PHONE_HREF } from "@/lib/constants";

export const metadata = {
  title: "Booking Confirmed | Kelly's Mobile Marine Service",
};

export default function BookingSuccess() {
  return (
    <div className="pt-24 pb-16 min-h-screen bg-white flex items-center">
      <div className="max-w-lg mx-auto px-4 text-center">
        {/* Anchor icon with drop animation */}
        <div className="animate-anchor-drop mb-6">
          <svg className="w-24 h-24 mx-auto text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 2a2 2 0 100 4 2 2 0 000-4zM12 6v16m0 0l-4-2m4 2l4-2M5 12H2m20 0h-3" />
          </svg>
        </div>

        <h1 className="font-oswald text-navy text-5xl sm:text-6xl font-bold uppercase mb-4">
          Booked!
        </h1>

        <p className="text-navy/70 text-lg mb-2">
          Kelly will confirm your appointment within <strong className="text-navy">2 hours</strong>.
        </p>
        <p className="text-navy/70 text-lg mb-8">
          Check your email for a confirmation with your booking details.
        </p>

        <div className="bg-navy/5 rounded-lg p-6 mb-8">
          <p className="text-navy/60 text-sm mb-2">Need immediate help?</p>
          <a
            href={PHONE_HREF}
            className="inline-flex items-center gap-2 text-teal font-oswald font-bold text-2xl hover:text-teal/80 transition-colors"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
            </svg>
            Call {PHONE}
          </a>
        </div>

        <Link
          href="/"
          className="inline-block bg-gold hover:bg-gold/90 text-navy font-oswald font-bold px-8 py-4 rounded text-lg uppercase tracking-wider transition-all hover:shadow-[0_0_20px_rgba(245,158,11,0.4)] min-h-[48px]"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
