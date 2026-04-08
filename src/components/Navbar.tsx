"use client";

import { useState } from "react";
import Link from "next/link";
import { BUSINESS_NAME, PHONE_HREF, PHONE, FACEBOOK_URL } from "@/lib/constants";

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
            <a
              href={FACEBOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white transition-colors min-w-[48px] min-h-[48px] flex items-center justify-center"
              aria-label="Facebook"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
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
            <a
              href={FACEBOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 text-white/70 hover:text-white py-3 min-h-[48px]"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              <span className="text-sm">Facebook</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
