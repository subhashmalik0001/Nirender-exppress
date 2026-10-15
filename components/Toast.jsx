"use client";

import React from "react";
import { useStore } from "@/lib/context/StoreContext";

export default function Toast() {
  const { toastMessage } = useStore();

  if (!toastMessage) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-slide-up">
      <div className="bg-[#161616] border border-[#ff5500]/50 rounded-2xl px-5 py-3.5 shadow-2xl flex items-center gap-3 backdrop-blur-md">
        <span className="w-2.5 h-2.5 rounded-full bg-[#ff5500] animate-ping shrink-0" />
        <span className="text-xs font-mono-custom font-bold text-white tracking-wide">
          {toastMessage}
        </span>
      </div>
    </div>
  );
}
