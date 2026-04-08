import Link from "next/link";
import Image from "next/image";
import { PHONE_HREF, PHONE } from "@/lib/constants";

export default function Hero() {
  return (
    <section className="relative bg-navy">
      {/* Truck image — always shows the full truck */}
      <div className="relative w-full pt-16">
        <Image
          src="/images/IMG_3759.jpeg"
          alt="Kelly's Mobile Marine Service truck"
          width={1920}
          height={640}
          className="w-full h-auto object-contain"
          priority
        />
        {/* Subtle overlay on the image */}
        <div className="absolute inset-0 bg-navy/30" />
      </div>

      {/* Text content below image on mobile, overlaid on desktop */}
      <div className="relative md:absolute md:inset-0 md:flex md:items-center md:justify-center bg-navy md:bg-navy/60">
        <div className="text-center px-4 py-10 md:py-0 md:pt-16">
          <h1 className="font-oswald text-white text-5xl sm:text-6xl md:text-7xl lg:text-9xl font-bold uppercase leading-none mb-4">
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
      </div>
    </section>
  );
}
