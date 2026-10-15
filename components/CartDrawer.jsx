"use client";

import React from "react";
import { useStore } from "@/lib/context/StoreContext";

export default function CartDrawer() {
  const {
    cart,
    cartOpen,
    setCartOpen,
    cartSubtotal,
    cartTotal,
    updateCartQty,
    removeFromCart,
    setCheckoutOpen
  } = useStore();

  const handleProceedToCheckout = () => {
    if (cart.length === 0) return;
    setCartOpen(false);
    setCheckoutOpen(true);
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className={`drawer-backdrop ${cartOpen ? "active" : ""}`}
        onClick={() => setCartOpen(false)}
      />

      {/* Slide-out Drawer Panel */}
      <div className={`drawer-panel shadow-2xl ${cartOpen ? "active" : ""}`}>
        
        {/* Drawer Header */}
        <div className="p-6 border-b border-[#2a2a2a] flex items-center justify-between bg-[#0a0a0a] text-white">
          <div>
            <h3 className="text-lg font-black uppercase tracking-tight font-display">Shopping Bag</h3>
            <span className="text-[10px] font-mono-custom text-[#ff5500] uppercase font-bold">
              Narindra Express Dispatch
            </span>
          </div>
          <button
            type="button"
            onClick={() => setCartOpen(false)}
            className="p-2 text-zinc-400 hover:text-white rounded-lg transition-colors"
            aria-label="Close bag"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18"/>
              <line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>

        {/* Items List Container */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center py-16">
              <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-zinc-500 mb-4">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="9" cy="21" r="1"/>
                  <circle cx="20" cy="21" r="1"/>
                  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
                </svg>
              </div>
              <p className="text-sm font-bold uppercase tracking-wider text-zinc-400 font-mono-custom mb-1">
                Your Bag is Empty
              </p>
              <p className="text-xs text-zinc-500 max-w-xs">
                Explore our pro-grade tools catalog and add heavy equipment to begin dispatch.
              </p>
            </div>
          ) : (
            cart.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-3.5 p-3.5 bg-[#161616] rounded-2xl border border-[#2a2a2a] relative group hover:border-zinc-700 transition-colors"
              >
                <div className="w-16 h-16 bg-white rounded-xl p-1.5 flex items-center justify-center shrink-0 border border-zinc-800">
                  <img src={item.image} alt={item.name} className="max-h-full max-w-full object-contain" />
                </div>

                <div className="flex-1 min-w-0 pr-6">
                  <span className="text-[9px] font-black uppercase tracking-wider text-[#ff5500] font-mono-custom">
                    {item.brand}
                  </span>
                  <h4 className="text-xs font-bold text-white truncate max-w-full">
                    {item.name}
                  </h4>
                  <div className="flex items-baseline gap-2 mt-0.5">
                    <span className="text-xs font-black text-white font-mono-custom">
                      ₹{item.discountedPrice.toLocaleString("en-IN")}
                    </span>
                    <span className="text-[10px] text-zinc-500 line-through font-mono-custom">
                      ₹{item.originalPrice.toLocaleString("en-IN")}
                    </span>
                  </div>

                  {/* Quantity Stepper */}
                  <div className="flex items-center gap-2 mt-2">
                    <div className="flex items-center bg-[#0a0a0a] border border-[#2a2a2a] rounded-lg">
                      <button
                        type="button"
                        onClick={() => updateCartQty(item.id, item.quantity - 1)}
                        className="w-7 h-7 flex items-center justify-center text-zinc-400 hover:text-white text-xs font-bold transition-colors"
                      >
                        -
                      </button>
                      <span className="w-8 text-center text-xs font-mono-custom font-bold text-white">
                        {item.quantity}
                      </span>
                      <button
                        type="button"
                        onClick={() => updateCartQty(item.id, item.quantity + 1)}
                        className="w-7 h-7 flex items-center justify-center text-zinc-400 hover:text-white text-xs font-bold transition-colors"
                      >
                        +
                      </button>
                    </div>

                    <span className="text-[11px] font-bold font-mono-custom text-[#ff5500] ml-auto">
                      ₹{(item.discountedPrice * item.quantity).toLocaleString("en-IN")}
                    </span>
                  </div>
                </div>

                {/* Remove button */}
                <button
                  type="button"
                  onClick={() => removeFromCart(item.id)}
                  title="Remove Item"
                  className="absolute right-3 top-3 text-zinc-500 hover:text-red-400 transition-colors p-1"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="18" y1="6" x2="6" y2="18"/>
                    <line x1="6" y1="6" x2="18" y2="18"/>
                  </svg>
                </button>
              </div>
            ))
          )}
        </div>

        {/* Summary & Checkout Footer */}
        {cart.length > 0 && (
          <div className="p-6 border-t border-[#2a2a2a] bg-[#161616] space-y-3">
            <div className="flex justify-between text-xs text-zinc-400 font-medium">
              <span>Items Subtotal</span>
              <span className="font-bold font-mono-custom text-white">
                ₹{cartSubtotal.toLocaleString("en-IN")}
              </span>
            </div>
            <div className="flex justify-between text-xs text-zinc-400 font-medium">
              <span>Delivery Fee</span>
              <span className="font-bold text-[#ff5500] font-mono-custom">₹50 Flat Rate</span>
            </div>
            <div className="pt-3 border-t border-[#2a2a2a] flex justify-between text-base font-black text-white">
              <span>Total Payable</span>
              <span className="text-[#ff5500] font-mono-custom">
                ₹{cartTotal.toLocaleString("en-IN")}
              </span>
            </div>

            <button
              type="button"
              onClick={handleProceedToCheckout}
              className="w-full mt-4 btn-orange font-black text-xs uppercase tracking-widest py-4 rounded-xl flex items-center justify-center gap-2 shadow-lg active:scale-95"
            >
              <span>Proceed to Checkout Inquiry</span>
            </button>
          </div>
        )}
      </div>
    </>
  );
}
