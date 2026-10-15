"use client";

import React, { useState, useEffect } from "react";
import { useStore } from "@/lib/context/StoreContext";

export default function QtyModal() {
  const {
    selectedProductForQty,
    setSelectedProductForQty,
    addToCart
  } = useStore();

  const [qty, setQty] = useState(1);

  useEffect(() => {
    if (selectedProductForQty) {
      setQty(1);
    }
  }, [selectedProductForQty]);

  if (!selectedProductForQty) return null;

  const product = selectedProductForQty;
  const subtotal = product.discountedPrice * qty;

  const handleConfirm = () => {
    addToCart(product, qty);
    setSelectedProductForQty(null);
  };

  return (
    <>
      <div
        className="modal-backdrop active"
        onClick={() => setSelectedProductForQty(null)}
      />

      <div className="modal-container max-w-md active">
        {/* Header */}
        <div className="flex justify-between items-start mb-4">
          <div>
            <span className="text-[9px] font-black uppercase tracking-widest text-[#ff5500] font-mono-custom">
              Select Quantity
            </span>
            <h3 className="text-lg font-black uppercase text-white leading-tight font-display">
              Add To Cart
            </h3>
          </div>
          <button
            type="button"
            onClick={() => setSelectedProductForQty(null)}
            className="p-1 text-zinc-400 hover:text-white transition-colors"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18"/>
              <line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>

        {/* Product Preview */}
        <div className="flex items-center gap-3 p-3 bg-[#161616] rounded-xl border border-[#2a2a2a] mb-5">
          <img
            src={product.image}
            alt={product.name}
            className="w-16 h-16 object-contain bg-white rounded-lg p-1.5 border border-[#2a2a2a]"
          />
          <div className="min-w-0 flex-1">
            <span className="text-[9px] font-black uppercase text-[#ff5500] font-mono-custom">
              {product.brand}
            </span>
            <h4 className="text-xs font-bold text-white truncate">
              {product.name}
            </h4>
            <span className="text-xs font-semibold text-zinc-400 font-mono-custom mt-0.5 block">
              ₹{product.discountedPrice.toLocaleString("en-IN")} / unit
            </span>
          </div>
        </div>

        {/* Quantity Controls */}
        <div className="space-y-4 mb-6">
          <div className="flex items-center justify-between bg-[#161616] p-3 rounded-xl border border-[#2a2a2a]">
            <span className="text-xs font-bold uppercase text-zinc-300 tracking-wider">
              Quantity
            </span>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setQty(prev => Math.max(1, prev - 1))}
                className="w-9 h-9 rounded-lg bg-[#0a0a0a] border border-[#2a2a2a] text-white font-bold text-lg flex items-center justify-center hover:bg-[#2a2a2a] transition-colors"
              >
                -
              </button>
              <input
                type="number"
                value={qty}
                min="1"
                max="999"
                onChange={(e) => setQty(Math.max(1, parseInt(e.target.value) || 1))}
                className="w-16 bg-[#0a0a0a] border border-[#ff5500] rounded-lg py-1.5 text-center text-white font-black text-sm font-mono-custom focus:outline-none"
              />
              <button
                type="button"
                onClick={() => setQty(prev => prev + 1)}
                className="w-9 h-9 rounded-lg bg-[#0a0a0a] border border-[#2a2a2a] text-white font-bold text-lg flex items-center justify-center hover:bg-[#2a2a2a] transition-colors"
              >
                +
              </button>
            </div>
          </div>

          {/* Quick Presets */}
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider font-mono-custom">
              Quick Bulk:
            </span>
            {[1, 5, 10, 25].map((preset) => (
              <button
                key={preset}
                type="button"
                onClick={() => setQty(preset)}
                className={`px-2.5 py-1 rounded-md border text-xs font-bold font-mono-custom transition-colors ${
                  qty === preset
                    ? "bg-[#ff5500] text-white border-[#ff5500]"
                    : "bg-[#161616] border-[#2a2a2a] text-zinc-300 hover:border-[#ff5500]"
                }`}
              >
                {preset}
              </button>
            ))}
          </div>

          <div className="pt-3 border-t border-[#2a2a2a] flex justify-between items-center">
            <span className="text-xs font-bold uppercase text-zinc-400">Total Items Subtotal</span>
            <span className="text-lg font-black text-[#ff5500] font-mono-custom">
              ₹{subtotal.toLocaleString("en-IN")}
            </span>
          </div>
        </div>

        <button
          type="button"
          onClick={handleConfirm}
          className="w-full btn-orange py-3.5 rounded-xl font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg animate-squish"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <circle cx="9" cy="21" r="1"/>
            <circle cx="20" cy="21" r="1"/>
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
          </svg>
          <span>Confirm & Add To Cart</span>
        </button>
      </div>
    </>
  );
}
