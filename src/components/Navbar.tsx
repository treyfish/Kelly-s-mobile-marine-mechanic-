"use client";

import { useState } from "react";
import Link from "next/link";
import { BUSINESS_NAME, PHONE_HREF, PHONE } from "@/lib/constants";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-navy/95 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="font-oswald text-white text-xl font-bold tracking-wide">
            {BUSINESS_NAME}
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-white/80 hover:text-white transition-colors text-sm uppercase tracking-wider">
              Home
            </Link>
            <Link href="/services" className="text-white/80 hover:text-white transition-colors text-sm uppercase tracking-wider">
              Services
            </Link>
            <Link
              href="/book"
              className="bg-gold hover:bg-gold/90 text-navy font-oswald font-bold px-6 py-2.5 rounded text-sm uppercase tracking-wider transition-all hover:shadow-[0_0_20px_rgba(245,158,11,0.4)]"
            >
              Book Now
            </Link>
            <a href={PHONE_HREF} className="text-gold hover:text-gold/80 font-bold text-sm transition-colors">
              {PHONE}
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2 min-w-[48px] min-h-[48px] flex items-center justify-center"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-navy border-t border-white/10">
          <div className="px-4 py-4 space-y-3">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="block text-white/80 hover:text-white py-3 text-sm uppercase tracking-wider"
            >
              Home
            </Link>
            <Link
              href="/services"
              onClick={() => setIsOpen(false)}
              className="block text-white/80 hover:text-white py-3 text-sm uppercase tracking-wider"
            >
              Services
            </Link>
            <Link
              href="/book"
              onClick={() => setIsOpen(false)}
              className="block bg-gold text-navy font-oswald font-bold px-6 py-3 rounded text-center text-sm uppercase tracking-wider"
            >
              Book Now
            </Link>
            <a
              href={PHONE_HREF}
              className="block text-gold font-bold py-3 text-center text-lg"
            >
              Call {PHONE}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
