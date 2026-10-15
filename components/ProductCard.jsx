"use client";

import React from "react";
import { useStore } from "@/lib/context/StoreContext";

export default function ProductCard({ product }) {
  const {
    cart,
    addToCart,
    updateCartQty,
    setSelectedProductForView,
    setSelectedProductForQty,
    setCheckoutOpen
  } = useStore();

  const cartItem = cart.find(item => item.id === product.id);
  const qtyInCart = cartItem ? cartItem.quantity : 0;

  const discountPercent = product.originalPrice > product.discountedPrice
    ? Math.round(((product.originalPrice - product.discountedPrice) / product.originalPrice) * 100)
    : 0;

  const handleBuyNow = (e) => {
    e.stopPropagation();
    if (qtyInCart === 0) {
      addToCart(product, 1);
    }
    setCheckoutOpen(true);
  };

  const handleOpenQtyModal = (e) => {
    e.stopPropagation();
    setSelectedProductForQty(product);
  };

  return (
    <div className="product-card rounded-2xl p-3 sm:p-4 flex flex-col justify-between group">
      
      {/* Clickable Image & Badges */}
      <div
        className="cursor-pointer"
        onClick={() => setSelectedProductForView(product)}
      >
        <div className="product-card-img-wrapper aspect-square w-full flex items-center justify-center p-3 mb-3 sm:mb-4 relative">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-contain"
            loading="lazy"
          />

          {/* Discount Badge */}
          {discountPercent > 0 && (
            <span className="absolute top-2 left-2 bg-[#ff5500] text-white text-[9px] font-black uppercase font-mono-custom px-2 py-0.5 rounded-md shadow-md">
              {discountPercent}% OFF
            </span>
          )}

          {/* In Stock Dot */}
          <span
            className={`absolute top-2 right-2 w-2 h-2 rounded-full ${
              product.inStock ? "bg-emerald-400" : "bg-red-500"
            }`}
            title={product.inStock ? "In Stock" : "Out of Stock"}
          />
        </div>

        {/* Brand & Rating */}
        <div className="flex items-center justify-between gap-1 mb-1">
          <span className="text-[10px] font-black uppercase tracking-wider text-[#ff5500] font-mono-custom truncate">
            {product.brand}
          </span>
          <div className="flex items-center gap-1 text-[10px] font-bold text-amber-400 font-mono-custom shrink-0">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
            </svg>
            <span>{Number(product.rating || 5.0).toFixed(1)}</span>
          </div>
        </div>

        {/* Product Title */}
        <h3 className="text-xs sm:text-sm font-bold text-white line-clamp-2 leading-snug mb-2 group-hover:text-zinc-200 transition-colors">
          {product.name}
        </h3>
      </div>

      {/* Pricing & Stepper / Buy Action Buttons */}
      <div className="pt-2 border-t border-[#2a2a2a] mt-auto">
        
        {/* Prices */}
        <div className="flex items-baseline gap-2 mb-3">
          <span className="text-base sm:text-lg font-black text-[#ff5500] font-mono-custom">
            ₹{product.discountedPrice.toLocaleString("en-IN")}
          </span>
          {product.originalPrice > product.discountedPrice && (
            <span className="text-xs text-zinc-500 line-through font-mono-custom">
              ₹{product.originalPrice.toLocaleString("en-IN")}
            </span>
          )}
        </div>

        {/* Dual Actions Group: Add/Stepper on Left, Buy Now on Right */}
        <div className="action-buttons-group">
          
          {qtyInCart > 0 ? (
            <div className="flex items-center justify-between bg-[#0a0a0a] border border-[#ff5500] rounded-xl h-10 px-2 shadow-inner">
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  updateCartQty(product.id, qtyInCart - 1);
                }}
                className="w-7 h-7 flex items-center justify-center text-[#ff5500] hover:text-white font-black text-sm active:scale-95 transition-all"
                aria-label="Decrease quantity"
              >
                -
              </button>
              <span className="font-mono-custom font-black text-xs text-white">
                {qtyInCart}
              </span>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  updateCartQty(product.id, qtyInCart + 1);
                }}
                className="w-7 h-7 flex items-center justify-center text-[#ff5500] hover:text-white font-black text-sm active:scale-95 transition-all"
                aria-label="Increase quantity"
              >
                +
              </button>
            </div>
          ) : (
            <button
              type="button"
              onClick={handleOpenQtyModal}
              className="btn-cart h-10 rounded-xl text-[11px] font-black uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all active:scale-95 shadow-md"
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <circle cx="9" cy="21" r="1"/>
                <circle cx="20" cy="21" r="1"/>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
              </svg>
              <span>Add Cart</span>
            </button>
          )}

          <button
            type="button"
            onClick={handleBuyNow}
            className="btn-buy-now h-10 rounded-xl text-[11px] font-black uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all active:scale-95 shadow-md"
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
            </svg>
            <span>Buy Now</span>
          </button>

        </div>

      </div>

    </div>
  );
}
