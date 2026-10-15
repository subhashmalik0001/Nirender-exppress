"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useStore } from "@/lib/context/StoreContext";

export default function ContactPage() {
  const { showToast } = useStore();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [toolQuery, setToolQuery] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      showToast("Inquiry Submitted! Our trade desk will call you shortly.");
      setName("");
      setPhone("");
      setToolQuery("");
      setSubmitting(false);
    }, 400);
  };

  return (
    <div className="flex-1 flex flex-col">
      {/* ================= CONTACT HERO HEADER ================= */}
      <section className="pt-28 pb-12 bg-[#121212] border-b border-[#2a2a2a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full badge-orange text-[9px] font-black uppercase tracking-[0.2em] mb-3">
                <span>Direct Commercial Trade Line</span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white italic font-display">
                Contact & <span className="text-[#ff5500]">Trade Desk</span>
              </h1>
              <p className="text-xs text-zinc-400 font-mono-custom mt-1 uppercase tracking-wider max-w-xl">
                Direct communication for contractor bulk pricing, equipment inquiries, and technical tool advice.
              </p>
            </div>

            <div className="flex items-center gap-3 text-xs font-mono-custom text-zinc-400">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <span className="text-[#ff5500] font-bold">Contact</span>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CONTACT DETAILS & INQUIRY FORM ================= */}
      <main className="py-16 bg-[#0a0a0a] text-zinc-100 flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left: Contact Details Cards (7 Cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <div className="h-1 w-12 bg-[#ff5500] mb-4"></div>
                <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white font-display">
                  Direct Channels
                </h2>
                <p className="text-xs text-zinc-400 font-medium mt-1">
                  Our physical counter and dispatch team are active 6 days a week.
                </p>
              </div>

              {/* Channel 1: Phone Hotline */}
              <div className="glass-card p-6 rounded-2xl border border-[#2a2a2a] flex items-start gap-4 hover:border-[#ff5500] transition-colors">
                <div className="w-12 h-12 rounded-xl bg-[#ff5500]/15 text-[#ff5500] flex items-center justify-center shrink-0 border border-[#ff5500]/30">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                </div>
                <div className="flex-1">
                  <span className="text-[10px] font-black uppercase tracking-widest text-[#ff5500] font-mono-custom">
                    Primary Sales Hotline
                  </span>
                  <h3 className="text-lg font-black text-white font-mono-custom mt-0.5">
                    +91 82838 48559
                  </h3>
                  <p className="text-xs text-zinc-400 mt-1">
                    Direct voice call to our dispatch manager for immediate inventory availability & quotes.
                  </p>
                  <div className="mt-3">
                    <a
                      href="tel:+918283848559"
                      className="btn-call-now text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-lg inline-flex items-center gap-2"
                    >
                      <span>Call Now</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Channel 2: WhatsApp Hotline */}
              <div className="glass-card p-6 rounded-2xl border border-[#2a2a2a] flex items-start gap-4 hover:border-emerald-500/50 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-emerald-950/70 text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-500/40">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-1.162 4.24 4.316-1.131z"/>
                  </svg>
                </div>
                <div className="flex-1">
                  <span className="text-[10px] font-black uppercase tracking-widest text-emerald-400 font-mono-custom">
                    Official WhatsApp Desk
                  </span>
                  <h3 className="text-lg font-black text-white font-mono-custom mt-0.5">
                    +91 82838 48559
                  </h3>
                  <p className="text-xs text-zinc-400 mt-1">
                    Send machinery photos, product requirement lists, or request proforma invoices.
                  </p>
                  <div className="mt-3">
                    <a
                      href="https://wa.me/918283848559?text=Hi%20Narindra%20Express%2C%20I%20have%20an%20inquiry."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#161616] hover:bg-[#1e1e1e] border border-emerald-500/40 text-emerald-400 text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-lg inline-flex items-center gap-2 transition-colors"
                    >
                      <span>Chat on WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Channel 3: Physical Trade Counter */}
              <div className="glass-card p-6 rounded-2xl border border-[#2a2a2a] flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/5 text-zinc-300 flex items-center justify-center shrink-0 border border-white/10">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <div className="flex-1">
                  <span className="text-[10px] font-black uppercase tracking-widest text-zinc-400 font-mono-custom">
                    Physical Depot Location
                  </span>
                  <h3 className="text-sm font-bold text-white leading-relaxed mt-1">
                    Near new bus stand, Opposite Chopra Petrol Pump, Kotkapura, Punjab, 151204
                  </h3>
                  <p className="text-xs text-zinc-500 mt-1 font-mono-custom">
                    Operational Hours: Monday - Saturday (8:30 AM - 8:00 PM IST)
                  </p>
                </div>
              </div>

              {/* Channel 4: Email Desk */}
              <div className="glass-card p-6 rounded-2xl border border-[#2a2a2a] flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/5 text-zinc-300 flex items-center justify-center shrink-0 border border-white/10">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </div>
                <div className="flex-1">
                  <span className="text-[10px] font-black uppercase tracking-widest text-zinc-400 font-mono-custom">
                    Official Email Address
                  </span>
                  <a
                    href="mailto:Narindraexpress1@gmail.com"
                    className="text-sm font-bold text-white hover:text-[#ff5500] transition-colors block mt-1"
                  >
                    Narindraexpress1@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Right: Inquiry Form (5 Cols) */}
            <div className="lg:col-span-5">
              <div className="glass-card p-8 rounded-3xl border border-[#2a2a2a] relative overflow-hidden shadow-2xl">
                <div className="h-1 w-10 bg-[#ff5500] mb-4"></div>
                <span className="text-[10px] font-mono-custom font-bold uppercase tracking-[0.2em] text-[#ff5500] block mb-1">
                  Direct Message
                </span>
                <h3 className="text-xl font-black uppercase text-white font-display mb-4">
                  Send Tool Inquiry
                </h3>
                <p className="text-xs text-zinc-400 mb-6 font-medium">
                  Leave your contact info and equipment requirement. Our trade manager will reply immediately.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-[10px] font-bold uppercase text-zinc-400 font-mono-custom mb-1">
                      Your Name / Company Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Gurinder Construction"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-[#161616] border border-[#2a2a2a] rounded-xl px-4 py-2.5 text-xs text-white placeholder:text-zinc-500 focus:outline-none focus:border-[#ff5500]"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold uppercase text-zinc-400 font-mono-custom mb-1">
                      Mobile Phone Number (+91) *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 98765 43210"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-[#161616] border border-[#2a2a2a] rounded-xl px-4 py-2.5 text-xs text-white placeholder:text-zinc-500 focus:outline-none focus:border-[#ff5500] font-mono-custom"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold uppercase text-zinc-400 font-mono-custom mb-1">
                      Required Machinery / Tools *
                    </label>
                    <textarea
                      rows={3}
                      required
                      placeholder="e.g. 5 units Bosch 500W Impact Drill + 1 ESAB Welding Machine quotation"
                      value={toolQuery}
                      onChange={(e) => setToolQuery(e.target.value)}
                      className="w-full bg-[#161616] border border-[#2a2a2a] rounded-xl px-4 py-2 text-xs text-white placeholder:text-zinc-500 focus:outline-none focus:border-[#ff5500]"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full btn-orange py-3.5 rounded-xl text-xs font-black uppercase tracking-wider flex items-center justify-center gap-2 active:scale-95 shadow-lg transition-all"
                  >
                    <span>Send Equipment Inquiry</span>
                  </button>
                </form>
              </div>
            </div>

          </div>

        </div>
      </main>
    </div>
  );
}
