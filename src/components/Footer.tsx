import Link from "next/link";
import { BUSINESS_NAME, PHONE, PHONE_HREF, LOCATION } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-navy text-white/70 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="font-oswald text-white text-xl font-bold mb-2">
              {BUSINESS_NAME}
            </h3>
            <p className="text-sm">{LOCATION}</p>
            <a href={PHONE_HREF} className="text-gold font-bold text-lg mt-2 inline-block hover:text-gold/80 transition-colors">
              {PHONE}
            </a>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-oswald text-white font-bold mb-3 uppercase tracking-wider text-sm">
              Navigation
            </h4>
            <div className="space-y-2">
              <Link href="/" className="block text-sm hover:text-white transition-colors">Home</Link>
              <Link href="/services" className="block text-sm hover:text-white transition-colors">Services</Link>
              <Link href="/book" className="block text-sm hover:text-white transition-colors">Book Now</Link>
            </div>
          </div>

          {/* Service area */}
          <div>
            <h4 className="font-oswald text-white font-bold mb-3 uppercase tracking-wider text-sm">
              Service Area
            </h4>
            <p className="text-sm">
              Cedar Key, Chiefland, Bronson, Williston, Yankeetown, Inglis, Crystal River, and surrounding areas.
            </p>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} {BUSINESS_NAME} LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
