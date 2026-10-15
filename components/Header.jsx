"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useStore } from "@/lib/context/StoreContext";

export default function Header() {
  const pathname = usePathname();
  const { cartCount, setCartOpen } = useStore();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // If in admin dashboard (not login), header can be hidden as admin has its own sidebar & mobile header
  const isAdminDashboard = pathname === "/admin";

  if (isAdminDashboard) {
    return null;
  }

  const isActive = (path) => {
    if (path === "/" && pathname === "/") return true;
    if (path !== "/" && pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <>
      <header className="fixed top-0 w-full z-50 glass-header py-4 animate-slide-down">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-5 xl:px-6">
          <div className="flex items-center justify-between h-14">
            
            {/* Logo Lockup */}
            <Link href="/" className="flex items-center gap-2 sm:gap-2.5 xl:gap-3 group select-none flex-shrink-0 mr-1 sm:mr-0">
              <div className="logo-box relative h-9 w-9 sm:h-10 sm:w-10 xl:h-11 xl:w-11 flex-shrink-0 bg-white/5 rounded-xl p-1 border border-white/10 group-hover:border-[#ff5500] transition-colors">
                <img src="/logo.png" alt="Narindra Express Logo" className="w-full h-full object-contain" />
              </div>
              <div className="flex flex-col flex-shrink-0">
                <span className="logo-text-full text-xs sm:text-sm 2xl:text-base font-black tracking-tight text-white uppercase leading-tight font-display whitespace-nowrap">
                  Narindra Express
                </span>
                <span className="logo-text-compact font-black tracking-tight text-white uppercase font-display whitespace-nowrap">
                  Narindra Express
                </span>
                <span className="logo-text-full text-[9px] font-mono-custom text-[#ff5500] uppercase tracking-[0.15em] font-bold mt-0.5 whitespace-nowrap">
                  <span className="hidden 2xl:inline">Professional Grade • </span>Since 1998
                </span>
                <span className="logo-sub-compact font-mono-custom text-[#ff5500] uppercase font-bold mt-0.5 whitespace-nowrap">
                  Express • 1998
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-x-4 lg:gap-x-5 xl:gap-x-6 flex-shrink-0">
              <Link
                href="/"
                className={`nav-link text-xs font-black uppercase tracking-widest transition-colors whitespace-nowrap ${
                  isActive("/") ? "active text-[#ff5500]" : "text-zinc-400 hover:text-white"
                }`}
              >
                Home
              </Link>
              <Link
                href="/products"
                className={`nav-link text-xs font-black uppercase tracking-widest transition-colors whitespace-nowrap ${
                  isActive("/products") ? "active text-[#ff5500]" : "text-zinc-400 hover:text-white"
                }`}
              >
                Products
              </Link>
              <Link
                href="/about"
                className={`nav-link text-xs font-black uppercase tracking-widest transition-colors whitespace-nowrap ${
                  isActive("/about") ? "active text-[#ff5500]" : "text-zinc-400 hover:text-white"
                }`}
              >
                About Us
              </Link>
              <Link
                href="/contact"
                className={`nav-link text-xs font-black uppercase tracking-widest transition-colors whitespace-nowrap ${
                  isActive("/contact") ? "active text-[#ff5500]" : "text-zinc-400 hover:text-white"
                }`}
              >
                Contact
              </Link>
            </nav>

            {/* Right Utilities & Actions */}
            <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
              
              {/* Admin Login Direct Route Link */}
              <Link
                href="/admin"
                title="Admin Login"
                className="hidden md:flex h-9 px-3 py-1 bg-[#ff5500]/10 hover:bg-[#ff5500]/20 border border-[#ff5500]/30 rounded-xl text-[#ff5500] transition-all active:scale-95 items-center justify-center gap-1.5 text-[11px] font-bold font-mono-custom opacity-80 hover:opacity-100 whitespace-nowrap flex-shrink-0"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                </svg>
                <span>Admin Login</span>
              </Link>

              {/* Cart / Bag Trigger Button */}
              <button
                type="button"
                onClick={() => setCartOpen(true)}
                className="relative h-11 px-3 sm:px-3.5 flex items-center justify-center gap-1.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-zinc-300 hover:text-white transition-all active:scale-95 animate-squish flex-shrink-0 min-w-[44px] min-h-[44px]"
                title="View Shopping Bag"
                aria-label="Shopping Bag"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="9" cy="21" r="1"/>
                  <circle cx="20" cy="21" r="1"/>
                  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
                </svg>
                <span className="cart-btn-label hidden sm:inline">
                  CART · {cartCount} {cartCount === 1 ? "ITEM" : "ITEMS"}
                </span>
                {cartCount > 0 && (
                  <span className="bg-[#ff5500] text-white text-[10px] font-black px-1.5 py-0.5 rounded-full border border-[#0a0a0a]">
                    {cartCount}
                  </span>
                )}
              </button>

              {/* Mobile Hamburger Toggle Button */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="md:hidden flex items-center justify-center w-11 h-11 rounded-xl bg-white/5 border border-white/10 text-zinc-300 hover:text-white hover:border-[#ff5500] transition-all active:scale-95 flex-shrink-0"
                aria-label="Open Navigation Menu"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                  <line x1="3" y1="6" x2="21" y2="6"/>
                  <line x1="3" y1="12" x2="21" y2="12"/>
                  <line x1="3" y1="18" x2="21" y2="18"/>
                </svg>
              </button>

            </div>

          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer & Backdrop */}
      <div
        className={`mobile-nav-backdrop ${mobileMenuOpen ? "active" : ""}`}
        onClick={() => setMobileMenuOpen(false)}
      />
      <div className={`mobile-nav-drawer p-6 ${mobileMenuOpen ? "active" : ""}`}>
        <div className="flex items-center justify-between pb-5 border-b border-[#2a2a2a]">
          <div className="flex items-center gap-2.5">
            <div className="h-9 w-9 bg-white/5 rounded-xl p-1 border border-white/10">
              <img src="/logo.png" alt="Logo" className="w-full h-full object-contain" />
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-black tracking-tight text-white uppercase font-display">Narindra Express</span>
              <span className="text-[9px] font-mono-custom text-[#ff5500] uppercase font-bold">Menu</span>
            </div>
          </div>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(false)}
            className="w-10 h-10 flex items-center justify-center text-zinc-400 hover:text-white rounded-xl hover:bg-white/5 transition-colors"
            aria-label="Close menu"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18"/>
              <line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>

        {/* Navigation Routes */}
        <nav className="flex flex-col gap-1.5 py-5 border-b border-[#2a2a2a]">
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className={`mobile-nav-item py-3 px-4 rounded-xl text-sm font-black uppercase tracking-wider flex items-center justify-between transition-colors ${
              isActive("/") ? "text-[#ff5500] bg-[#ff5500]/10" : "text-zinc-200 hover:text-white hover:bg-white/5"
            }`}
          >
            <span>Home</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="m9 18 6-6-6-6"/></svg>
          </Link>
          <Link
            href="/products"
            onClick={() => setMobileMenuOpen(false)}
            className={`mobile-nav-item py-3 px-4 rounded-xl text-sm font-black uppercase tracking-wider flex items-center justify-between transition-colors ${
              isActive("/products") ? "text-[#ff5500] bg-[#ff5500]/10" : "text-zinc-200 hover:text-white hover:bg-white/5"
            }`}
          >
            <span>Products</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="m9 18 6-6-6-6"/></svg>
          </Link>
          <Link
            href="/about"
            onClick={() => setMobileMenuOpen(false)}
            className={`mobile-nav-item py-3 px-4 rounded-xl text-sm font-black uppercase tracking-wider flex items-center justify-between transition-colors ${
              isActive("/about") ? "text-[#ff5500] bg-[#ff5500]/10" : "text-zinc-200 hover:text-white hover:bg-white/5"
            }`}
          >
            <span>About Us</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="m9 18 6-6-6-6"/></svg>
          </Link>
          <Link
            href="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className={`mobile-nav-item py-3 px-4 rounded-xl text-sm font-black uppercase tracking-wider flex items-center justify-between transition-colors ${
              isActive("/contact") ? "text-[#ff5500] bg-[#ff5500]/10" : "text-zinc-200 hover:text-white hover:bg-white/5"
            }`}
          >
            <span>Contact</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="m9 18 6-6-6-6"/></svg>
          </Link>
        </nav>

        {/* Direct Channels & Admin Login */}
        <div className="flex flex-col gap-3 pt-5">
          <span className="text-[10px] font-mono-custom font-bold uppercase tracking-widest text-zinc-500 mb-0.5">Quick Assistance</span>
          <a
            href="tel:+918283848559"
            className="w-full min-h-[48px] px-4 rounded-xl bg-[#ff5500]/10 border border-[#ff5500]/30 text-[#ff5500] font-black uppercase text-xs tracking-wider flex items-center gap-3 active:scale-95 transition-all"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            <span>Call Hotline</span>
          </a>
          <a
            href="https://wa.me/918283848559?text=Hi%20Narindra%20Express%2C%20I%20have%20an%20inquiry."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full min-h-[48px] px-4 rounded-xl bg-emerald-950/70 border border-emerald-500/40 text-emerald-400 font-black uppercase text-xs tracking-wider flex items-center gap-3 active:scale-95 transition-all"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-1.162 4.24 4.316-1.131z"/></svg>
            <span>WhatsApp Desk</span>
          </a>
          <Link
            href="/admin"
            onClick={() => setMobileMenuOpen(false)}
            className="w-full min-h-[48px] px-4 rounded-xl bg-white/5 border border-white/10 text-zinc-300 hover:text-white font-black uppercase text-xs tracking-wider flex items-center gap-3 active:scale-95 transition-all mt-1"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
            <span>Admin Login</span>
          </Link>
        </div>
      </div>
    </>
  );
}
