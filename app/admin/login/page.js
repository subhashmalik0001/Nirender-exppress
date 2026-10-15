"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

// Secure SHA-256 hash for admin@123
const DEFAULT_ADMIN_HASH = "7676aaafb027c825bd9abab78b234070e702752f625b752e55e55b48e607e358";

async function hashPasswordSHA256(str) {
  const encoder = new TextEncoder();
  const data = encoder.encode(str);
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, "0")).join("");
}

export default function AdminLoginPage() {
  const router = useRouter();
  const [identity, setIdentity] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // If already logged in, redirect to /admin
  useEffect(() => {
    try {
      if (localStorage.getItem("ntt_admin_logged_in") === "true") {
        router.replace("/admin");
      }
    } catch (e) {}
  }, [router]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    if (!identity.trim() || !password) {
      setError("Please enter both email/username and password.");
      return;
    }

    setLoading(true);
    try {
      const inputHash = await hashPasswordSHA256(password);
      if (inputHash === DEFAULT_ADMIN_HASH) {
        localStorage.setItem("ntt_admin_logged_in", "true");
        router.replace("/admin");
      } else {
        setError("Invalid credentials. Please verify your administrative password.");
      }
    } catch (err) {
      setError("Authentication error: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#0a0a0a] text-zinc-100 flex flex-col min-h-screen font-sans selection:bg-[#ff5500] selection:text-white justify-between">
      {/* Top Simple Navigation Bar */}
      <header className="w-full py-4 border-b border-[#2a2a2a] bg-[#0a0a0a]/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group select-none">
            <div className="relative h-10 w-10 flex-shrink-0 bg-white/5 rounded-xl p-1 border border-white/10 group-hover:border-[#ff5500] transition-colors">
              <img src="/logo.png" alt="Narindra Express Logo" className="w-full h-full object-contain" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-black tracking-tight text-white uppercase leading-tight font-display">
                Narindra Express
              </span>
              <span className="text-[9px] font-mono-custom text-[#ff5500] uppercase tracking-[0.2em] font-bold">
                Admin Login
              </span>
            </div>
          </Link>

          <Link
            href="/"
            className="text-xs font-bold text-zinc-400 hover:text-white uppercase font-mono-custom transition-colors flex items-center gap-1.5"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
              <polyline points="9 22 9 12 15 12 15 22"/>
            </svg>
            <span>Return to Store</span>
          </Link>
        </div>
      </header>

      {/* Login Form Container */}
      <main className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          <div className="glass-card rounded-2xl border border-[#2a2a2a] p-6 sm:p-8 shadow-2xl space-y-6">
            
            <div className="text-center space-y-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-950/70 border border-amber-500/50 text-amber-400 text-[10px] font-mono-custom font-bold uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping"></span>
                <span>AUTHENTICATED OWNER GATE</span>
              </div>

              <h1 className="text-2xl sm:text-3xl font-black uppercase text-white font-display tracking-tight mt-2">
                ADMIN ACCESS
              </h1>
              <p className="text-xs text-zinc-400 font-mono-custom">
                Enter authorized administrator credentials to manage inventory & dispatch orders.
              </p>
            </div>

            {error && (
              <div className="p-3.5 rounded-xl bg-red-950/70 border border-red-500/60 text-red-300 text-xs font-mono-custom flex items-start gap-2.5 animate-scale-in">
                <svg className="w-4 h-4 text-red-400 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
                </svg>
                <div className="flex-1">
                  <span className="font-bold block text-red-200">Authentication Failed</span>
                  <span className="text-[11px] text-red-300/90">{error}</span>
                </div>
              </div>
            )}

            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-[10px] font-bold text-zinc-400 uppercase font-mono-custom mb-1.5">
                  Email or Username <span className="text-[#ff5500]">*</span>
                </label>
                <div className="relative">
                  <input
                    type="text"
                    required
                    placeholder="e.g. admin or admin@narindraexpress.in"
                    value={identity}
                    onChange={(e) => setIdentity(e.target.value)}
                    className="w-full bg-[#161616] border border-[#2a2a2a] focus:border-[#ff5500] rounded-xl px-4 py-2.5 text-white text-xs font-medium focus:outline-none placeholder:text-zinc-600 transition-colors"
                  />
                  <div className="absolute right-3 top-2.5 text-zinc-500 pointer-events-none">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
                    </svg>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="text-[10px] font-bold text-zinc-400 uppercase font-mono-custom">
                    Password <span className="text-[#ff5500]">*</span>
                  </label>
                </div>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    required
                    placeholder="••••••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full bg-[#161616] border border-[#2a2a2a] focus:border-[#ff5500] rounded-xl px-4 py-2.5 text-white text-xs font-mono-custom focus:outline-none placeholder:text-zinc-600 transition-colors pr-10"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    title="Show / Hide Password"
                    className="absolute right-3 top-2.5 text-zinc-500 hover:text-zinc-300 transition-colors p-0.5"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>
                    </svg>
                  </button>
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="btn-orange w-full py-3 rounded-xl text-xs font-black uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg active:scale-95 font-mono-custom transition-all mt-2 disabled:opacity-50"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                </svg>
                <span>{loading ? "Verifying..." : "Admin Login"}</span>
              </button>
            </form>

            <div className="pt-4 border-t border-[#2a2a2a] text-center">
              <p className="text-[10px] font-mono-custom text-zinc-500">
                Narindra Express • Authorized Administrator Access Only
              </p>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}
