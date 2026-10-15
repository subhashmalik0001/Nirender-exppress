"use client";

import React from "react";
import { useStore } from "@/lib/context/StoreContext";

export default function QuickViewModal() {
  const {
    selectedProductForView,
    setSelectedProductForView,
    addToCart,
    setCheckoutOpen
  } = useStore();

  if (!selectedProductForView) return null;

  const product = selectedProductForView;

  const handleAddToCart = () => {
    addToCart(product, 1);
  };

  const handleBuyNow = () => {
    addToCart(product, 1);
    setSelectedProductForView(null);
    setCheckoutOpen(true);
  };

  return (
    <>
      <div
        className="modal-backdrop active"
        onClick={() => setSelectedProductForView(null)}
      />

      <div className="modal-container max-w-xl active">
        {/* Header */}
        <div className="flex justify-between items-start mb-4">
          <div>
            <span className="text-[10px] font-black uppercase tracking-widest text-[#ff5500] font-mono-custom">
              {product.brand}
            </span>
            <h3 className="text-base font-bold text-white leading-tight mt-0.5 font-display">
              {product.name}
            </h3>
          </div>
          <button
            type="button"
            onClick={() => setSelectedProductForView(null)}
            className="p-1 text-zinc-400 hover:text-white transition-colors"
            aria-label="Close modal"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18"/>
              <line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>

        {/* Content Body */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
          <div className="aspect-square bg-white rounded-xl p-4 flex items-center justify-center border border-[#2a2a2a]">
            <img
              src={product.image}
              alt={product.name}
              className="max-h-full max-w-full object-contain"
            />
          </div>
          
          <div className="flex flex-col justify-between">
            <div>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-xl font-black text-[#ff5500] font-mono-custom">
                  ₹{product.discountedPrice.toLocaleString("en-IN")}
                </span>
                {product.originalPrice > product.discountedPrice && (
                  <span className="text-xs font-medium text-zinc-500 line-through font-mono-custom">
                    ₹{product.originalPrice.toLocaleString("en-IN")}
                  </span>
                )}
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed font-medium mb-4">
                {product.description || "Professional grade industrial hardware engineered for demanding job sites and rigorous contractor requirements."}
              </p>
            </div>

            {/* Technical Specs List */}
            {product.specs && Object.keys(product.specs).length > 0 && (
              <div className="space-y-1.5 mb-4 p-2.5 rounded-xl bg-[#161616] border border-[#2a2a2a]">
                <span className="text-[9px] font-mono-custom font-black uppercase tracking-wider text-zinc-500 block mb-1">
                  Key Specifications
                </span>
                {Object.entries(product.specs).map(([key, value]) => (
                  <div key={key} className="flex justify-between text-[11px] font-mono-custom">
                    <span className="text-zinc-400 font-bold">{key}:</span>
                    <span className="text-zinc-200">{String(value)}</span>
                  </div>
                ))}
              </div>
            )}

            {/* Action Buttons */}
            <div className="action-buttons-group mt-auto">
              <button
                type="button"
                onClick={handleAddToCart}
                className="btn-cart h-11 rounded-xl text-xs font-black uppercase tracking-wider flex items-center justify-center gap-1.5"
              >
                <span>Add Cart</span>
              </button>
              <button
                type="button"
                onClick={handleBuyNow}
                className="btn-buy-now h-11 rounded-xl text-xs font-black uppercase tracking-wider flex items-center justify-center gap-1.5"
              >
                <span>Buy Now</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
