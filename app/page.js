"use client";

import React from "react";
import Link from "next/link";
import { useStore } from "@/lib/context/StoreContext";
import ProductCard from "@/components/ProductCard";

export default function HomePage() {
  const { products, loadingProducts } = useStore();

  // Display latest products first (newly added products appear immediately at the top)
  const displayProducts = products.slice(0, 8);

  return (
    <div className="flex-1 flex flex-col">
      {/* ================= HERO SECTION ================= */}
      <section className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden bg-[#0a0a0a] border-b border-[#2a2a2a]">
        
        {/* Background Image with Dark Vignette Overlay (WebP Optimized) */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/90 to-[#0a0a0a]/60 z-10"></div>
          <picture>
            <source srcSet="/hero.webp" type="image/webp" />
            <img
              src="/hero.png"
              alt="Industrial Backdrop"
              className="w-full h-full object-cover opacity-35 grayscale filter brightness-75"
            />
          </picture>
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-12 pt-4 sm:pt-8">
          
          {/* Hero Left Text */}
          <div className="flex flex-col">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full badge-orange text-[10px] font-black uppercase tracking-[0.2em] mb-6 w-fit animate-bounce-in delay-200">
              <span className="w-2 h-2 rounded-full bg-[#ff5500] animate-ping"></span>
              India&apos;s Biggest Online Tools Store
            </div>

            <h1 className="hero-heading text-white mb-4 animate-slide-up delay-300">
              Pro-Grade <br />
              <span className="text-[#ff5500] italic">Machinery.</span> <br />
              <span className="white-stroke text-transparent">Direct Access.</span>
            </h1>

            {/* Same Day Delivery Available Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl bg-amber-500/15 border-2 border-amber-400/80 text-amber-300 text-xs sm:text-sm font-black uppercase font-mono-custom tracking-wider mb-5 w-fit shadow-[0_0_20px_rgba(251,191,36,0.25)] backdrop-blur-sm animate-slide-up delay-350">
              <span className="relative flex h-2.5 w-2.5 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-400"></span>
              </span>
              <svg className="text-amber-400 shrink-0" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
              </svg>
              <span className="font-extrabold text-amber-200">Same Day Delivery Available</span>
            </div>

            <p className="text-xs font-bold text-[#ff5500] font-mono-custom uppercase tracking-widest mb-4">
              30+ Years of Trust • Quality Tools • Nationwide Delivery
            </p>

            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed max-w-lg font-medium uppercase tracking-wider mb-8 border-l-2 border-[#ff5500]/80 pl-4 animate-slide-up delay-400">
              The definitive source for genuine industrial components. Engineered for India&apos;s toughest sectors.
            </p>

            {/* CTA Button: Shop Collection -> /products */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-2.5 sm:gap-4 mb-8 sm:mb-10 w-full animate-slide-up delay-500">
              <Link
                href="/products"
                className="btn-orange text-xs font-black uppercase tracking-widest px-8 py-3.5 min-h-[48px] flex items-center justify-center gap-3 animate-squish shadow-xl w-full sm:w-auto"
              >
                <span>Shop Collection</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
                </svg>
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 gap-6 pt-6 border-t border-white/10 animate-fade-in delay-500 max-w-md">
              <div>
                <span className="text-white text-xs font-black uppercase tracking-wider block">100% Genuine</span>
                <span className="text-zinc-500 text-[10px] font-bold uppercase tracking-tight">Certified Registry</span>
              </div>
              <div>
                <span className="text-white text-xs font-black uppercase tracking-wider block">Express Log</span>
                <span className="text-zinc-500 text-[10px] font-bold uppercase tracking-tight">Fast Fulfillment</span>
              </div>
            </div>

          </div>

          {/* Hero Direct Trade Desk Card */}
          <div className="flex flex-col items-center justify-center animate-scale-in delay-400 w-full mt-6 lg:mt-0">
            <div className="glass-card p-6 sm:p-8 rounded-3xl border border-[#2a2a2a] max-w-md w-full text-center relative overflow-hidden shadow-2xl">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#ff5500]/15 text-[#ff5500] flex items-center justify-center mx-auto mb-4 border border-[#ff5500]/30">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
              </div>
              <h3 className="text-xl font-black uppercase text-white tracking-tight mb-2 font-display">
                Direct Trade Desk
              </h3>
              <p className="text-xs text-zinc-400 mb-6 font-medium">
                Need custom quotes or immediate bulk tool procurement? Speak directly with our trade specialists.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full">
                <a
                  href="tel:+918283848559"
                  className="btn-call-now py-3.5 min-h-[48px] text-xs font-black uppercase tracking-widest flex items-center justify-center gap-2"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                  <span>Call Hotline</span>
                </a>
                <a
                  href="https://wa.me/918283848559?text=Hi%20Narindra%20Express%2C%20I%20have%20an%20inquiry."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#161616] hover:bg-[#1e1e1e] text-emerald-400 border border-emerald-500/50 py-3.5 min-h-[48px] rounded-xl text-xs font-black uppercase tracking-widest flex items-center justify-center gap-2 transition-colors"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-1.162 4.24 4.316-1.131z"/>
                  </svg>
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ================= BRAND PARTNERS MARQUEE ================= */}
      <section className="py-8 bg-[#121212] border-b border-[#2a2a2a] overflow-hidden select-none">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-center text-[10px] font-mono-custom font-bold uppercase tracking-[0.3em] text-[#ff5500] mb-6">
            Curated_Registry_v2
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14 opacity-85">
            <span className="text-2xl md:text-3xl font-black italic tracking-tighter text-zinc-300 hover:text-[#ff5500] transition-colors cursor-pointer uppercase font-display">Saw Master</span>
            <span className="text-2xl md:text-3xl font-black italic tracking-tighter text-zinc-300 hover:text-[#ff5500] transition-colors cursor-pointer uppercase font-display">Camron Pro</span>
            <span className="text-2xl md:text-3xl font-black italic tracking-tighter text-zinc-300 hover:text-[#ff5500] transition-colors cursor-pointer uppercase font-display">GTX</span>
            <span className="text-2xl md:text-3xl font-black italic tracking-tighter text-zinc-300 hover:text-[#ff5500] transition-colors cursor-pointer uppercase font-display">Extra Power</span>
            <span className="text-2xl md:text-3xl font-black italic tracking-tighter text-zinc-300 hover:text-[#ff5500] transition-colors cursor-pointer uppercase font-display">Stanley</span>
            <span className="text-2xl md:text-3xl font-black italic tracking-tighter text-zinc-300 hover:text-[#ff5500] transition-colors cursor-pointer uppercase font-display">Bosch</span>
            <span className="text-2xl md:text-3xl font-black italic tracking-tighter text-zinc-300 hover:text-[#ff5500] transition-colors cursor-pointer uppercase font-display">Makita</span>
            <span className="text-2xl md:text-3xl font-black italic tracking-tighter text-zinc-300 hover:text-[#ff5500] transition-colors cursor-pointer uppercase font-display">DeWalt</span>
          </div>
        </div>
      </section>

      {/* ================= FEATURED PRODUCTS PREVIEW (HOME) ================= */}
      <section className="py-16 bg-[#0a0a0a] text-zinc-100 border-b border-[#2a2a2a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-10 pb-8 border-b border-[#2a2a2a]">
            <div>
              <div className="h-1 w-12 bg-[#ff5500] mb-3"></div>
              <h2 className="text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-white italic font-display">
                Featured <span className="text-[#ff5500] italic">Equipment</span>
              </h2>
              <p className="text-xs font-bold uppercase tracking-wider text-zinc-400 mt-1.5 font-mono-custom">
                The most essential equipment in our industrial catalog.
              </p>
            </div>

            <Link
              href="/products"
              className="btn-orange text-xs font-black uppercase tracking-widest px-6 py-3 rounded-xl shadow-lg inline-flex items-center gap-2"
            >
              <span>View All Products</span>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
              </svg>
            </Link>
          </div>

          {/* Featured Product Cards Grid */}
          <div className="responsive-product-grid gap-3 sm:gap-6 mb-10">
            {loadingProducts ? (
              [...Array(4)].map((_, i) => (
                <div key={i} className="product-card rounded-2xl p-3 sm:p-4 flex flex-col justify-between animate-pulse">
                  <div className="aspect-square w-full bg-white/5 rounded-xl mb-3 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-xl bg-white/5" />
                  </div>
                  <div className="h-2.5 bg-white/10 rounded w-1/3 mb-2" />
                  <div className="h-4 bg-white/10 rounded w-4/5 mb-3" />
                  <div className="pt-2 border-t border-[#2a2a2a] mt-auto">
                    <div className="h-5 bg-[#ff5500]/20 rounded w-1/2 mb-3" />
                    <div className="h-9 bg-white/5 rounded-xl" />
                  </div>
                </div>
              ))
            ) : (
              displayProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))
            )}
          </div>

          <div className="pt-8 border-t border-[#2a2a2a] flex flex-col items-center justify-center text-center">
            <span className="text-[10px] font-mono-custom font-bold uppercase tracking-[0.3em] text-[#ff5500] mb-3 block">
              Complete_Store_Inventory
            </span>
            <Link
              href="/products"
              className="btn-orange text-xs font-black uppercase tracking-widest px-8 py-3.5 rounded-xl shadow-lg active:scale-95 inline-flex items-center gap-2"
            >
              <span>Explore Entire Catalog</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
              </svg>
            </Link>
          </div>

        </div>
      </section>

      {/* ================= BEYOND STANDARD FEATURE SECTION ================= */}
      <section className="py-20 bg-[#0a0a0a] border-b border-[#2a2a2a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
            <div>
              <div className="h-1 w-10 bg-[#ff5500] mb-4"></div>
              <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight italic font-display">
                Beyond <span className="text-[#ff5500] italic">Standard.</span>
              </h2>
            </div>
            <div className="flex flex-col gap-2">
              <p className="max-w-md text-zinc-400 text-xs font-medium uppercase tracking-wider border-l-2 border-[#ff5500]/80 pl-4">
                The structural backbone for heavy industry. Every asset is a calculated investment in uptime.
              </p>
              <Link
                href="/about"
                className="text-xs font-bold uppercase text-[#ff5500] hover:text-white pl-4 transition-colors inline-flex items-center gap-1 font-mono-custom"
              >
                <span>Learn More About Us</span>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="9 18 15 12 9 6"/>
                </svg>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <div className="glass-card p-8 rounded-2xl border border-[#2a2a2a] hover:border-[#ff5500] transition-colors">
              <div className="w-12 h-12 rounded-xl bg-[#ff5500]/20 text-[#ff5500] flex items-center justify-center mb-6">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
              </div>
              <h3 className="text-lg font-black uppercase text-white tracking-tight mb-2 font-display">
                Pro-Grade Shield
              </h3>
              <p className="text-xs text-zinc-400 leading-relaxed font-medium">
                Industrial-strength tools with full manufacturer warranty and verified certification.
              </p>
            </div>

            <div className="glass-card p-8 rounded-2xl border border-[#2a2a2a] hover:border-[#ff5500] transition-colors">
              <div className="w-12 h-12 rounded-xl bg-[#ff5500]/20 text-[#ff5500] flex items-center justify-center mb-6">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="1" y="3" width="15" height="13"/>
                  <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/>
                  <circle cx="5.5" cy="18.5" r="2.5"/>
                  <circle cx="18.5" cy="18.5" r="2.5"/>
                </svg>
              </div>
              <h3 className="text-lg font-black uppercase text-white tracking-tight mb-2 font-display">
                Rapid Dispatch
              </h3>
              <p className="text-xs text-zinc-400 leading-relaxed font-medium">
                Reliable logistics across Punjab and nationwide with same-day order processing.
              </p>
            </div>

            <div className="glass-card p-8 rounded-2xl border border-[#2a2a2a] hover:border-[#ff5500] transition-colors">
              <div className="w-12 h-12 rounded-xl bg-[#ff5500]/20 text-[#ff5500] flex items-center justify-center mb-6">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
              </div>
              <h3 className="text-lg font-black uppercase text-white tracking-tight mb-2 font-display">
                Expert Support
              </h3>
              <p className="text-xs text-zinc-400 leading-relaxed font-medium">
                Direct phone and WhatsApp technical assistance from experienced tooling tradesmen.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ================= CUSTOMER TESTIMONIALS SECTION ================= */}
      <section className="py-20 bg-[#121212] border-b border-[#2a2a2a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-4xl font-black uppercase italic tracking-tight text-white mb-2 font-display">
              Trusted In <span className="text-[#ff5500]">The Field.</span>
            </h2>
            <p className="text-xs font-bold text-zinc-400 font-mono-custom tracking-wider">
              4.9 / 5.0 Rating from Contractors & Tradespeople
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <div className="bg-[#161616] p-8 rounded-2xl border border-[#2a2a2a] flex flex-col justify-between">
              <p className="text-zinc-300 text-xs leading-relaxed font-medium mb-6 italic">
                &ldquo;The heavy-duty drill sets outlasted everything else. Reliability isn&apos;t a luxury—it&apos;s a necessity.&rdquo;
              </p>
              <div className="pt-4 border-t border-[#2a2a2a]">
                <span className="text-xs font-black uppercase text-white block">Rajesh Kumar</span>
                <span className="text-[10px] font-bold text-zinc-400 uppercase font-mono-custom">Site Foreman</span>
              </div>
            </div>

            <div className="bg-[#161616] p-8 rounded-2xl border border-[#2a2a2a] flex flex-col justify-between">
              <p className="text-zinc-300 text-xs leading-relaxed font-medium mb-6 italic">
                &ldquo;Authentic Bosch gear at great prices. Fast delivery and excellent packaging for Pune.&rdquo;
              </p>
              <div className="pt-4 border-t border-[#2a2a2a]">
                <span className="text-xs font-black uppercase text-white block">Arjun Mehta</span>
                <span className="text-[10px] font-bold text-zinc-400 uppercase font-mono-custom">Professional Carpenter</span>
              </div>
            </div>

            <div className="bg-[#161616] p-8 rounded-2xl border border-[#2a2a2a] flex flex-col justify-between">
              <p className="text-zinc-300 text-xs leading-relaxed font-medium mb-6 italic">
                &ldquo;Support knows their technical specs. Helped me pick the right gear for high-heat welding work.&rdquo;
              </p>
              <div className="pt-4 border-t border-[#2a2a2a]">
                <span className="text-xs font-black uppercase text-white block">Vikram Singh</span>
                <span className="text-[10px] font-bold text-zinc-400 uppercase font-mono-custom">Industrial Welder</span>
              </div>
            </div>

          </div>

        </div>
      </section>
    </div>
  );
}
