"use client";

import React, { useState } from "react";
import { useStore } from "@/lib/context/StoreContext";

export default function CallNowModal() {
  const {
    selectedProductForCall,
    setSelectedProductForCall,
    showToast
  } = useStore();

  const [callbackName, setCallbackName] = useState("");
  const [callbackPhone, setCallbackPhone] = useState("");

  if (!selectedProductForCall) return null;

  const product = selectedProductForCall;
  const waText = encodeURIComponent(
    `Hi Narindra Express, I am interested in inquiring about ${product.name} (SKU: ${product.id}).`
  );

  const handleCallbackSubmit = (e) => {
    e.preventDefault();
    showToast("Callback Request Received! Our trade desk will call you shortly.");
    setCallbackName("");
    setCallbackPhone("");
    setSelectedProductForCall(null);
  };

  return (
    <>
      <div
        className="modal-backdrop active"
        onClick={() => setSelectedProductForCall(null)}
      />

      <div className="modal-container active">
        <div className="flex justify-between items-start mb-4">
          <div>
            <span className="text-[9px] font-black uppercase tracking-widest text-[#ff5500] font-mono-custom">
              Direct Sales Desk
            </span>
            <h3 className="text-lg font-black uppercase text-white leading-tight font-display">
              Call Narindra Express
            </h3>
          </div>
          <button
            type="button"
            onClick={() => setSelectedProductForCall(null)}
            className="p-1 text-zinc-400 hover:text-white transition-colors"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18"/>
              <line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>

        {/* Product Preview */}
        <div className="flex items-center gap-3 p-3 bg-[#161616] rounded-xl border border-[#2a2a2a] mb-6">
          <img
            src={product.image}
            alt={product.name}
            className="w-14 h-14 object-contain bg-white rounded-lg p-1"
          />
          <div>
            <h4 className="text-xs font-bold text-white truncate max-w-[260px]">
              {product.name}
            </h4>
            <span className="text-xs font-black text-[#ff5500] font-mono-custom mt-0.5 block">
              ₹{product.discountedPrice.toLocaleString("en-IN")}
            </span>
          </div>
        </div>

        {/* Action Hotlines */}
        <div className="space-y-3 mb-6">
          <a
            href="tel:+918283848559"
            className="w-full btn-call-now py-3.5 rounded-xl font-black text-xs uppercase tracking-wider flex items-center justify-center gap-3"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
            <span>Call Directly: +91 82838 48559</span>
          </a>

          <a
            href={`https://wa.me/918283848559?text=${waText}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-[#161616] hover:bg-[#1e1e1e] border border-emerald-500/40 text-emerald-400 py-3.5 rounded-xl font-black text-xs uppercase tracking-wider flex items-center justify-center gap-3 transition-colors"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-1.162 4.24 4.316-1.131z"/>
            </svg>
            <span>Inquire via WhatsApp</span>
          </a>
        </div>

        {/* Callback Form */}
        <div className="pt-4 border-t border-[#2a2a2a]">
          <p className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 mb-3 font-mono-custom">
            Or Request Instant Callback
          </p>
          <form onSubmit={handleCallbackSubmit} className="space-y-3">
            <input
              type="text"
              placeholder="Your Name / Business Name"
              required
              value={callbackName}
              onChange={(e) => setCallbackName(e.target.value)}
              className="w-full bg-[#161616] border border-[#2a2a2a] rounded-lg px-3.5 py-2 text-xs text-white placeholder:text-zinc-500 focus:outline-none focus:border-[#ff5500]"
            />
            <input
              type="tel"
              placeholder="Your Mobile Number (+91)"
              required
              value={callbackPhone}
              onChange={(e) => setCallbackPhone(e.target.value)}
              className="w-full bg-[#161616] border border-[#2a2a2a] rounded-lg px-3.5 py-2 text-xs text-white placeholder:text-zinc-500 focus:outline-none focus:border-[#ff5500] font-mono-custom"
            />
            <button
              type="submit"
              className="w-full btn-orange py-2.5 rounded-lg text-xs font-black uppercase tracking-wider"
            >
              Request Callback
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
