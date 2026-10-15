"use client";

import React from "react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="flex-1 flex flex-col">
      {/* ================= ABOUT HERO HEADER ================= */}
      <section className="pt-28 pb-12 bg-[#121212] border-b border-[#2a2a2a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full badge-orange text-[9px] font-black uppercase tracking-[0.2em] mb-3">
                <span>Corporation History • Est. 1998</span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white italic font-display">
                About <span className="text-[#ff5500]">Narindra Express</span>
              </h1>
              <p className="text-xs text-zinc-400 font-mono-custom mt-1 uppercase tracking-wider max-w-xl">
                The premier hub for industrial hardware, heavy power machinery, and authorized precision tools in Northern India.
              </p>
            </div>

            <div className="flex items-center gap-3 text-xs font-mono-custom text-zinc-400">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <span className="text-[#ff5500] font-bold">About Us</span>
            </div>
          </div>
        </div>
      </section>

      {/* ================= MAIN CONTENT ================= */}
      <main className="py-16 bg-[#0a0a0a] text-zinc-100 flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* Section 1: Legacy */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="h-1 w-12 bg-[#ff5500]"></div>
              <h2 className="text-2xl sm:text-4xl font-black uppercase text-white font-display">
                30+ Years of Industrial Trust & Engineering Excellence
              </h2>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-medium">
                Established in 1998 in Kotkapura, Punjab, Narindra Techno Tools Corporation (operating as Narindra Express) was founded with a singular commitment: providing genuine, uncompromised industrial equipment directly to contractors, fabricators, and craftsmen.
              </p>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                What began as a localized supply depot has expanded into India&apos;s most reliable online and physical gateway for certified power tools, inverter ARC welders, precision Mitutoyo micrometers, and abrasive cutting wheels.
              </p>
              <div className="flex items-center gap-6 pt-4 border-t border-[#2a2a2a]">
                <div>
                  <span className="text-2xl font-black text-[#ff5500] font-mono-custom block">1998</span>
                  <span className="text-[10px] uppercase font-bold text-zinc-500 font-mono-custom">Established Year</span>
                </div>
                <div className="h-8 w-px bg-[#2a2a2a]"></div>
                <div>
                  <span className="text-2xl font-black text-white font-mono-custom block">10,000+</span>
                  <span className="text-[10px] uppercase font-bold text-zinc-500 font-mono-custom">Tradesmen Served</span>
                </div>
                <div className="h-8 w-px bg-[#2a2a2a]"></div>
                <div>
                  <span className="text-2xl font-black text-emerald-400 font-mono-custom block">100%</span>
                  <span className="text-[10px] uppercase font-bold text-zinc-500 font-mono-custom">Genuine Brands</span>
                </div>
              </div>
            </div>

            <div className="glass-card p-6 sm:p-8 rounded-3xl border border-[#2a2a2a] relative overflow-hidden shadow-2xl">
              <div className="aspect-video w-full rounded-2xl overflow-hidden mb-6 bg-black border border-[#2a2a2a] relative">
                <img
                  src="/hero.webp"
                  alt="Industrial Workshop"
                  className="w-full h-full object-cover opacity-70"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                <span className="absolute bottom-3 left-3 bg-[#ff5500] text-white text-[9px] font-black uppercase font-mono-custom px-2.5 py-1 rounded-md">
                  Depot Central • Punjab
                </span>
              </div>
              <h3 className="text-lg font-black uppercase text-white font-display mb-2">
                Physical Counter & Trade Logistics
              </h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Opposite Chopra Petrol Pump, near new bus stand, Kotkapura, Punjab (151204). Our fully stocked distribution warehouse maintains active inventory for immediate same-day dispatch.
              </p>
            </div>
          </div>

          {/* Section 2: Core Pillars */}
          <div className="pt-12 border-t border-[#2a2a2a]">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-[10px] font-mono-custom font-bold uppercase tracking-[0.25em] text-[#ff5500] block mb-2">
                Engineering Values
              </span>
              <h2 className="text-2xl sm:text-3xl font-black uppercase text-white font-display">
                The Narindra Standard
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="glass-card p-6 rounded-2xl border border-[#2a2a2a]">
                <div className="w-10 h-10 rounded-xl bg-[#ff5500]/15 text-[#ff5500] flex items-center justify-center mb-4 border border-[#ff5500]/30">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  </svg>
                </div>
                <h3 className="text-base font-black uppercase text-white font-display mb-2">
                  Zero Counterfeits
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Every drill, grinder, and welding inverter is sourced directly from OEM authorized supply chains with serial verification.
                </p>
              </div>

              <div className="glass-card p-6 rounded-2xl border border-[#2a2a2a]">
                <div className="w-10 h-10 rounded-xl bg-[#ff5500]/15 text-[#ff5500] flex items-center justify-center mb-4 border border-[#ff5500]/30">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="1" y="3" width="15" height="13"/>
                    <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/>
                    <circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/>
                  </svg>
                </div>
                <h3 className="text-base font-black uppercase text-white font-display mb-2">
                  Transparent Dispatch
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Clear flat-rate shipping (₹50), secure Cash on Delivery option, and instantaneous digital invoice summaries sent via WhatsApp.
                </p>
              </div>

              <div className="glass-card p-6 rounded-2xl border border-[#2a2a2a]">
                <div className="w-10 h-10 rounded-xl bg-[#ff5500]/15 text-[#ff5500] flex items-center justify-center mb-4 border border-[#ff5500]/30">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                </div>
                <h3 className="text-base font-black uppercase text-white font-display mb-2">
                  Direct Trade Desk
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Call or chat directly with our equipment experts to match exact tool specifications, motor wattages, and contractor requirements.
                </p>
              </div>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
