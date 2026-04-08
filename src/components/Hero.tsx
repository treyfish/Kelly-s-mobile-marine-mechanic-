import Link from "next/link";
import { PHONE_HREF, PHONE } from "@/lib/constants";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with fallback gradient */}
      <div
        className="absolute inset-0 bg-cover bg-center md:bg-fixed"
        style={{
          backgroundImage: "url('/images/IMG_3759.jpeg')",
          backgroundColor: "#0f2b5b",
        }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-navy/70" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 pt-16">
        <h1 className="font-oswald text-white text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold uppercase leading-none mb-4">
          We Come<br />To You
        </h1>
        <p className="text-white/80 text-lg sm:text-xl md:text-2xl max-w-2xl mx-auto mb-8">
          Mobile Marine Mechanic — Cedar Key, FL and Surrounding Areas
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/book"
            className="bg-gold hover:bg-gold/90 text-navy font-oswald font-bold px-8 py-4 rounded text-lg uppercase tracking-wider transition-all hover:shadow-[0_0_25px_rgba(245,158,11,0.5)] min-h-[48px]"
          >
            Book Now
          </Link>
          <a
            href={PHONE_HREF}
            className="border-2 border-white text-white hover:bg-white hover:text-navy font-oswald font-bold px-8 py-4 rounded text-lg uppercase tracking-wider transition-all min-h-[48px]"
          >
            Call {PHONE}
          </a>
        </div>
      </div>
    </section>
  );
}
