"use client";

import React, { useState } from "react";
import { useStore } from "@/lib/context/StoreContext";

export default function CheckoutModal() {
  const {
    cart,
    cartSubtotal,
    cartTotal,
    checkoutOpen,
    setCheckoutOpen,
    submitOrder,
    showToast
  } = useStore();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [altPhone, setAltPhone] = useState("");
  const [email, setEmail] = useState("");
  const [pincode, setPincode] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [state, setState] = useState("Punjab");
  const [submitting, setSubmitting] = useState(false);

  if (!checkoutOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (cart.length === 0) {
      showToast("Your cart is empty!");
      return;
    }

    if (!name.trim() || !phone.trim() || !address.trim() || !pincode.trim() || !city.trim()) {
      showToast("Please fill all required delivery details.");
      return;
    }

    setSubmitting(true);
    try {
      const fullAddressStr = `${address.trim()}, ${city.trim()}, ${state} - ${pincode.trim()}`;
      const itemsSummaryText = cart
        .map(item => `${item.quantity}x ${item.name} (₹${item.discountedPrice})`)
        .join(", ");

      const orderPayload = {
        customer: {
          name: name.trim(),
          phone: phone.trim(),
          altPhone: altPhone.trim() || null,
          email: email.trim() || null,
          address: fullAddressStr,
          city: city.trim(),
          state: state,
          pincode: pincode.trim()
        },
        items: cart.map(item => ({
          id: item.id,
          name: item.name,
          brand: item.brand,
          price: item.discountedPrice,
          quantity: item.quantity,
          image: item.image
        })),
        itemsText: itemsSummaryText,
        subtotal: cartSubtotal,
        deliveryCharge: 50,
        total: cartTotal
      };

      await submitOrder(orderPayload);
    } catch (err) {
      console.error("Order submission error:", err);
      showToast("Could not place order. Please check connection.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <div
        className="modal-backdrop active"
        onClick={() => setCheckoutOpen(false)}
      />

      <div className="checkout-modal-container active">
        {/* Header */}
        <div className="flex justify-between items-start pb-4 mb-4 border-b border-[#2a2a2a]">
          <div>
            <span className="text-[9px] font-black uppercase tracking-widest text-[#ff5500] font-mono-custom">
              Express Shipping Dispatch
            </span>
            <h3 className="text-xl font-black uppercase text-white font-display mt-0.5">
              Checkout & Delivery Details
            </h3>
          </div>
          <button
            type="button"
            onClick={() => setCheckoutOpen(false)}
            className="p-1.5 text-zinc-400 hover:text-white rounded-lg transition-colors"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18"/>
              <line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>

        {/* Selected Items Summary */}
        <div className="mb-6 p-4 bg-[#161616] rounded-xl border border-[#2a2a2a]">
          <h4 className="text-xs font-black uppercase tracking-wider text-zinc-300 font-mono-custom mb-3 flex items-center gap-2">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="9" cy="21" r="1"/>
              <circle cx="20" cy="21" r="1"/>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
            </svg>
            <span>Selected Items Summary ({cart.length})</span>
          </h4>
          <div className="space-y-3 max-h-48 overflow-y-auto pr-1">
            {cart.map((item) => (
              <div key={item.id} className="flex items-center justify-between gap-3 text-xs">
                <div className="flex items-center gap-2.5 min-w-0">
                  <img src={item.image} alt={item.name} className="w-9 h-9 object-contain bg-white rounded-lg p-0.5 shrink-0" />
                  <div className="truncate">
                    <span className="font-bold text-white truncate block">{item.name}</span>
                    <span className="text-[10px] font-mono-custom text-zinc-400">
                      {item.quantity} × ₹{item.discountedPrice.toLocaleString("en-IN")}
                    </span>
                  </div>
                </div>
                <span className="font-mono-custom font-black text-white shrink-0">
                  ₹{(item.discountedPrice * item.quantity).toLocaleString("en-IN")}
                </span>
              </div>
            ))}
          </div>

          <div className="pt-3 mt-3 border-t border-[#2a2a2a] flex justify-between items-center text-xs">
            <span className="font-bold text-zinc-400 uppercase font-mono-custom">
              Total Amount (Incl. ₹50 Delivery):
            </span>
            <span className="text-lg font-black text-[#ff5500] font-mono-custom">
              ₹{cartTotal.toLocaleString("en-IN")}
            </span>
          </div>
        </div>

        {/* Form Fields */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <h4 className="text-xs font-black uppercase tracking-wider text-white font-mono-custom flex items-center gap-2">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
              <circle cx="12" cy="7" r="4"/>
            </svg>
            <span>Customer & Shipping Information</span>
          </h4>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-[10px] font-bold uppercase text-white font-mono-custom mb-1">
                Full Name *
              </label>
              <input
                type="text"
                placeholder="e.g. Rajinder Singh"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-[#161616] border border-[#2a2a2a] rounded-lg px-3.5 py-2.5 text-xs text-white placeholder:text-zinc-500 focus:outline-none focus:border-[#ff5500]"
              />
            </div>
            <div>
              <label className="block text-[10px] font-bold uppercase text-white font-mono-custom mb-1">
                Mobile Number *
              </label>
              <input
                type="tel"
                placeholder="e.g. 98765 43210"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full bg-[#161616] border border-[#2a2a2a] rounded-lg px-3.5 py-2.5 text-xs text-white placeholder:text-zinc-500 focus:outline-none focus:border-[#ff5500] font-mono-custom"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-[10px] font-bold uppercase text-white font-mono-custom mb-1">
                Alternate Phone / WhatsApp (Optional)
              </label>
              <input
                type="tel"
                placeholder="e.g. 98123 45678"
                value={altPhone}
                onChange={(e) => setAltPhone(e.target.value)}
                className="w-full bg-[#161616] border border-[#2a2a2a] rounded-lg px-3.5 py-2.5 text-xs text-white placeholder:text-zinc-500 focus:outline-none focus:border-[#ff5500] font-mono-custom"
              />
            </div>
            <div>
              <label className="block text-[10px] font-bold uppercase text-white font-mono-custom mb-1">
                Email Address (Optional)
              </label>
              <input
                type="email"
                placeholder="e.g. customer@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-[#161616] border border-[#2a2a2a] rounded-lg px-3.5 py-2.5 text-xs text-white placeholder:text-zinc-500 focus:outline-none focus:border-[#ff5500]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-[10px] font-bold uppercase text-white font-mono-custom mb-1">
                Pincode / Zip Code *
              </label>
              <input
                type="text"
                placeholder="e.g. 151204"
                maxLength={6}
                required
                value={pincode}
                onChange={(e) => setPincode(e.target.value)}
                className="w-full bg-[#161616] border border-[#2a2a2a] rounded-lg px-3.5 py-2.5 text-xs text-white placeholder:text-zinc-500 focus:outline-none focus:border-[#ff5500] font-mono-custom"
              />
            </div>
            <div>
              <label className="block text-[10px] font-bold uppercase text-white font-mono-custom mb-1">
                City / Town *
              </label>
              <input
                type="text"
                placeholder="e.g. Kotkapura"
                required
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="w-full bg-[#161616] border border-[#2a2a2a] rounded-lg px-3.5 py-2.5 text-xs text-white placeholder:text-zinc-500 focus:outline-none focus:border-[#ff5500]"
              />
            </div>
          </div>

          <div>
            <label className="block text-[10px] font-bold uppercase text-white font-mono-custom mb-1">
              Full Delivery Address (House/Shop No, Street, Area) *
            </label>
            <textarea
              rows={2}
              placeholder="e.g. Shop No. 14, Main Hardware Market, Near Bus Stand"
              required
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="w-full bg-[#161616] border border-[#2a2a2a] rounded-lg px-3.5 py-2 text-xs text-white placeholder:text-zinc-500 focus:outline-none focus:border-[#ff5500]"
            />
          </div>

          <div>
            <label className="block text-[10px] font-bold uppercase text-white font-mono-custom mb-1">
              State *
            </label>
            <select
              value={state}
              onChange={(e) => setState(e.target.value)}
              required
              className="w-full bg-[#161616] border border-[#2a2a2a] rounded-lg px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#ff5500]"
            >
              <option value="Punjab">Punjab</option>
              <option value="Haryana">Haryana</option>
              <option value="Delhi">Delhi NCR</option>
              <option value="Himachal Pradesh">Himachal Pradesh</option>
              <option value="Rajasthan">Rajasthan</option>
              <option value="Uttar Pradesh">Uttar Pradesh</option>
              <option value="Jammu & Kashmir">Jammu & Kashmir</option>
              <option value="Other">Other State</option>
            </select>
          </div>

          {/* Payment Method Selection: Cash on Delivery Only */}
          <div>
            <label className="block text-[10px] font-bold uppercase text-white font-mono-custom mb-2">
              Payment Method
            </label>
            <div className="p-3.5 bg-[#161616] border border-[#ff5500]/50 rounded-xl flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#ff5500]/15 text-[#ff5500] flex items-center justify-center border border-[#ff5500]/30 shrink-0">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="5" width="20" height="14" rx="2"/>
                    <line x1="2" y1="10" x2="22" y2="10"/>
                  </svg>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-black uppercase text-white tracking-wide">
                      Cash on Delivery (COD)
                    </span>
                    <span className="px-2 py-0.5 rounded bg-emerald-950/70 border border-emerald-500/40 text-emerald-400 text-[9px] font-bold font-mono-custom uppercase">
                      Only Option Available
                    </span>
                  </div>
                  <p className="text-[11px] text-zinc-300 mt-0.5 font-medium">
                    Pay securely in cash or via UPI upon doorstep delivery.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="w-full btn-orange py-4 rounded-xl font-black text-xs uppercase tracking-widest flex items-center justify-center gap-2 shadow-lg active:scale-95 mt-2 disabled:opacity-50"
          >
            {submitting ? (
              <span>Placing Order in Database...</span>
            ) : (
              <>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                  <polyline points="22 4 12 14.01 9 11.01"/>
                </svg>
                <span>Confirm Order via Cash on Delivery</span>
              </>
            )}
          </button>
        </form>
      </div>
    </>
  );
}
