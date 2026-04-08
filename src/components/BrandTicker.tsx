import { BRANDS } from "@/lib/constants";

export default function BrandTicker() {
  return (
    <section className="py-10 bg-navy/5 overflow-hidden">
      <h2 className="font-oswald text-navy text-sm font-bold text-center uppercase tracking-widest mb-6">
        Brands We Service
      </h2>
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent z-10" />

        <div className="flex animate-ticker whitespace-nowrap">
          {/* Double the brands for seamless loop */}
          {[...BRANDS, ...BRANDS].map((brand, i) => (
            <span
              key={`${brand}-${i}`}
              className="font-oswald text-navy/70 text-2xl sm:text-3xl font-bold uppercase tracking-wider mx-8 sm:mx-12 inline-block"
            >
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
