import Link from "next/link";

export default function CTASection() {
  return (
    <section className="py-16 bg-gold">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <h2 className="font-oswald text-navy text-3xl sm:text-4xl font-bold uppercase mb-4">
          Ready to Get Your Boat Fixed?
        </h2>
        <p className="text-navy/70 text-lg mb-8">
          Book online and Kelly will confirm within 2 hours. No trailering needed.
        </p>
        <Link
          href="/book"
          className="inline-block bg-navy hover:bg-navy/90 text-white font-oswald font-bold px-10 py-4 rounded text-lg uppercase tracking-wider transition-all hover:shadow-[0_0_25px_rgba(10,22,40,0.5)] min-h-[48px]"
        >
          Book Now
        </Link>
      </div>
    </section>
  );
}
