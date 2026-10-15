"use client";

import React from "react";
import { useStore } from "@/lib/context/StoreContext";

export default function OrderSuccessModal() {
  const {
    successOrder,
    setSuccessOrder
  } = useStore();

  if (!successOrder) return null;

  const order = successOrder;
  const waInvoiceText = encodeURIComponent(
    `*⚡ NEW ORDER PLACED (COD)*\n` +
    `*Order ID:* ${order.id}\n` +
    `*Customer:* ${order.customer.name}\n` +
    `*Phone:* ${order.customer.phone}\n` +
    (order.customer.altPhone ? `*Alt Phone:* ${order.customer.altPhone}\n` : "") +
    `*Address:* ${order.customer.address}\n` +
    `*Items:* ${order.itemsText}\n` +
    `*Total Amount:* ₹${order.total.toLocaleString("en-IN")} (COD Doorstep Delivery)\n\n` +
    `Please confirm dispatch.`
  );

  return (
    <>
      <div
        className="modal-backdrop active"
        onClick={() => setSuccessOrder(null)}
      />

      <div className="modal-container max-w-lg text-center active">
        {/* Animated Checkmark */}
        <div className="w-16 h-16 rounded-full bg-emerald-950/80 border-2 border-emerald-500 text-emerald-400 flex items-center justify-center mx-auto mb-4 animate-bounce-in">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
            <polyline points="20 6 9 17 4 12"/>
          </svg>
        </div>

        <span className="text-[10px] font-black uppercase tracking-widest text-emerald-400 font-mono-custom block mb-1">
          Order Confirmed
        </span>
        <h3 className="text-2xl font-black uppercase text-white font-display mb-1">
          Order Placed Successfully!
        </h3>
        <p className="text-xs text-zinc-300 mb-4">
          Your order has been logged into the Narindra Express dispatch queue.
        </p>

        {/* Invoice Summary Box */}
        <div className="bg-[#161616] p-3.5 sm:p-4 rounded-xl border border-[#2a2a2a] text-left space-y-2 mb-5 sm:mb-6 text-xs">
          <div className="flex justify-between border-b border-[#2a2a2a] pb-2 font-mono-custom">
            <span className="text-white font-bold shrink-0">Order ID:</span>
            <span className="font-black text-[#ff5500]">{order.id}</span>
          </div>
          <div className="flex justify-between font-mono-custom">
            <span className="text-white font-bold shrink-0">Customer:</span>
            <span className="font-bold text-white text-right truncate max-w-[200px] sm:max-w-[240px]">
              {order.customer.name}
            </span>
          </div>
          <div className="flex justify-between font-mono-custom">
            <span className="text-white font-bold shrink-0">Phone:</span>
            <span className="font-bold text-white">{order.customer.phone}</span>
          </div>
          <div className="flex justify-between font-mono-custom">
            <span className="text-white font-bold shrink-0">Payment:</span>
            <span className="font-bold text-emerald-400">Cash on Delivery (COD)</span>
          </div>
          <div className="flex justify-between font-mono-custom">
            <span className="text-white font-bold shrink-0">Delivery Address:</span>
            <span className="font-bold text-white text-right max-w-[180px] sm:max-w-[240px] truncate">
              {order.customer.address}
            </span>
          </div>
          <div className="flex justify-between border-t border-[#2a2a2a] pt-2 font-mono-custom">
            <span className="text-white font-bold shrink-0">Total Amount:</span>
            <span className="font-black text-emerald-400 text-sm">
              ₹{order.total.toLocaleString("en-IN")}
            </span>
          </div>
        </div>

        {/* Dual Notification Status Panel */}
        <div className="p-3 rounded-xl bg-white/5 border border-white/10 space-y-1.5 text-[11px] font-mono-custom mb-3">
          <div className="flex items-center justify-between text-zinc-300">
            <span className="flex items-center gap-1.5 shrink-0">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span> Email Dispatch:
            </span>
            <span className="text-emerald-400 font-bold truncate max-w-[140px] sm:max-w-[180px]">
              Narindraexpress1@gmail.com
            </span>
          </div>
          <div className="flex items-center justify-between text-zinc-300">
            <span className="flex items-center gap-1.5 shrink-0">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span> WhatsApp Link:
            </span>
            <span className="text-emerald-400 font-bold shrink-0">+91 82838 48559</span>
          </div>
        </div>

        {/* Buttons */}
        <div className="space-y-3">
          <a
            href={`https://wa.me/918283848559?text=${waInvoiceText}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-[#161616] hover:bg-[#1e1e1e] text-emerald-400 border border-emerald-500/50 py-3.5 rounded-xl font-black text-xs uppercase tracking-wider flex items-center justify-center gap-3 transition-colors"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-1.162 4.24 4.316-1.131z"/>
            </svg>
            <span>Send Order Details to WhatsApp</span>
          </a>

          <button
            type="button"
            onClick={() => setSuccessOrder(null)}
            className="w-full bg-zinc-800 hover:bg-zinc-700 text-white py-3 rounded-xl font-bold text-xs uppercase tracking-wider transition-colors"
          >
            Done & Continue Shopping
          </button>
        </div>
      </div>
    </>
  );
}
