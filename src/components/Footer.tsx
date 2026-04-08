import Link from "next/link";
import { BUSINESS_NAME, PHONE, PHONE_HREF, LOCATION, FACEBOOK_URL } from "@/lib/constants";

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
            <div className="mt-3">
              <a
                href={FACEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors min-h-[48px]"
                aria-label="Follow us on Facebook"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                <span className="text-sm">Follow us on Facebook</span>
              </a>
            </div>
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
