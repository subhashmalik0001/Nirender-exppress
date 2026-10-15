"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();

  // Hide on admin dashboard
  if (pathname === "/admin") {
    return null;
  }

  return (
    <footer className="bg-[#0a0a0a] border-t border-[#2a2a2a] pt-16 pb-12 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          
          {/* Col 1: About & Tagline */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img src="/logo.png" alt="Logo" className="w-8 h-8 object-contain" />
              <div>
                <span className="text-base font-black text-white uppercase block leading-none font-display">
                  Narindra Express
                </span>
              </div>
            </div>
            <p className="text-[11px] text-zinc-400 leading-relaxed uppercase tracking-wider font-bold max-w-sm font-mono-custom">
              PROFESSIONAL-GRADE HARDWARE FOR THE MODERN TRADESMAN. WHERE UNCOMPROMISING DURABILITY MEETS SURGICAL ACCURACY.
            </p>
          </div>

          {/* Col 2: Quick Navigation Links */}
          <div>
            <h4 className="text-xs font-mono-custom font-black uppercase tracking-[0.3em] mb-4 text-[#ff5500]">
              Quick_Pages
            </h4>
            <ul className="space-y-2.5 text-xs font-medium text-zinc-400">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home Page
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-white transition-colors">
                  Products Catalog
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Our Corporation
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact & Trade Desk
                </Link>
              </li>
              <li>
                <Link href="/admin" className="text-zinc-500 hover:text-[#ff5500] transition-colors font-mono-custom">
                  Admin Login
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact Point */}
          <div>
            <h4 className="text-xs font-mono-custom font-black uppercase tracking-[0.3em] mb-4 text-[#ff5500]">
              Contact_Point
            </h4>
            <div className="space-y-3 text-xs font-medium text-zinc-400">
              <div className="flex items-start gap-2.5">
                <svg className="text-[#ff5500] shrink-0 mt-0.5" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                <span>Near new bus stand, Opposite Chopra Petrol Pump, Kotkapura, Punjab, 151204</span>
              </div>
              
              <div className="flex items-center gap-2.5">
                <svg className="text-[#ff5500] shrink-0" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                <a href="tel:+918283848559" className="font-bold font-mono-custom text-white hover:text-[#ff5500] transition-colors">
                  +91 82838 48559
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <svg className="text-emerald-400 shrink-0" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-1.162 4.24 4.316-1.131z"/>
                </svg>
                <a href="https://wa.me/918283848559?text=Hi%20Narindra%20Express%2C%20I%20have%20an%20inquiry." target="_blank" rel="noopener noreferrer" className="font-bold font-mono-custom text-emerald-400 hover:text-emerald-300 transition-colors">
                  WhatsApp: +91 82838 48559
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <svg className="text-[#ff5500] shrink-0" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
                <a href="mailto:Narindraexpress1@gmail.com" className="hover:text-white transition-colors">
                  Narindraexpress1@gmail.com
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Copyright Bottom Bar */}
        <div className="pt-8 border-t border-[#2a2a2a] flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-mono-custom text-zinc-500 uppercase tracking-widest">
          <p>© 2026 Narindra Express // All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Server: Optimal (Next.js Cloud)
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}
