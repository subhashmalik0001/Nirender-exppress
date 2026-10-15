"use client";

import React, { useMemo } from "react";
import Link from "next/link";
import { useStore } from "@/lib/context/StoreContext";
import ProductCard from "@/components/ProductCard";

export default function ProductsPage() {
  const {
    products,
    loadingProducts,
    categories,
    categoryFilter,
    setCategoryFilter,
    brandFilter,
    setBrandFilter,
    searchQuery,
    setSearchQuery
  } = useStore();

  // Extract unique brands dynamically from products
  const brands = useMemo(() => {
    const set = new Set();
    products.forEach(p => {
      if (p.brand) set.add(p.brand);
    });
    return Array.from(set).sort();
  }, [products]);

  // Filtered Products
  const filteredProducts = useMemo(() => {
    return products.filter(p => {
      // Category check
      if (categoryFilter !== "all" && p.category !== categoryFilter) {
        return false;
      }
      // Brand check
      if (brandFilter !== "all" && p.brand.toUpperCase() !== brandFilter.toUpperCase()) {
        return false;
      }
      // Search query check
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const inName = p.name.toLowerCase().includes(q);
        const inBrand = (p.brand || "").toLowerCase().includes(q);
        const inCat = (p.categoryName || "").toLowerCase().includes(q);
        const inDesc = (p.description || "").toLowerCase().includes(q);
        if (!inName && !inBrand && !inCat && !inDesc) return false;
      }
      return true;
    });
  }, [products, categoryFilter, brandFilter, searchQuery]);

  return (
    <div className="flex-1 flex flex-col">
      {/* ================= PRODUCTS PAGE HEADER ================= */}
      <section className="pt-28 pb-8 bg-[#121212] border-b border-[#2a2a2a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full badge-orange text-[9px] font-black uppercase tracking-[0.2em] mb-3">
                <span>Narindra Express Verified Hardware</span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white italic font-display">
                Industrial <span className="text-[#ff5500]">Collection</span>
              </h1>
              <p className="text-xs text-zinc-400 font-mono-custom mt-1 uppercase tracking-wider">
                Explore 100% genuine industrial power tools, cutting machines, and precision gear.
              </p>
            </div>

            <div className="flex items-center gap-4 text-xs font-mono-custom text-zinc-400">
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <span>/</span>
              <span className="text-[#ff5500] font-bold">Products</span>
            </div>
          </div>
        </div>
      </section>

      {/* ================= MAIN PRODUCTS CATALOG ================= */}
      <main className="py-12 bg-[#0a0a0a] text-zinc-100 flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Catalog Controls & Filters */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-8 pb-6 border-b border-[#2a2a2a]">
            <div>
              <h2 className="text-xl sm:text-2xl font-black uppercase text-white font-display">
                Equipment Inventory
              </h2>
              <p className="text-[11px] font-mono-custom text-[#ff5500] uppercase font-bold mt-1">
                Showing {filteredProducts.length} of {products.length} Products
              </p>
            </div>

            {/* Filter Controls */}
            <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
              {/* Search Bar */}
              <div className="relative flex-1 md:w-64">
                <input
                  type="text"
                  placeholder="Search power tools, brands..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-[#161616] border border-[#2a2a2a] rounded-full px-4 py-2.5 text-xs text-white placeholder:text-zinc-500 focus:outline-none focus:border-[#ff5500] font-medium"
                />
                <svg className="absolute right-3.5 top-3 text-zinc-400" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="8"/>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"/>
                </svg>
              </div>

              {/* Brand Filter Dropdown */}
              <select
                value={brandFilter}
                onChange={(e) => setBrandFilter(e.target.value)}
                className="bg-[#161616] border border-[#2a2a2a] rounded-full px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-zinc-200 focus:outline-none focus:border-[#ff5500] cursor-pointer"
              >
                <option value="all">All Brands</option>
                {brands.map((brand) => (
                  <option key={brand} value={brand}>{brand}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
            <button
              type="button"
              onClick={() => setCategoryFilter("all")}
              className={`cat-filter-btn category-pill ${categoryFilter === "all" ? "active" : ""}`}
            >
              All Products
            </button>
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setCategoryFilter(cat.id)}
                className={`cat-filter-btn category-pill ${categoryFilter === cat.id ? "active" : ""}`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Dynamic Product Cards Grid */}
          {loadingProducts ? (
            <div className="responsive-product-grid gap-3 sm:gap-6 mb-12">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="product-card rounded-2xl p-3 sm:p-4 flex flex-col justify-between animate-pulse">
                  <div className="aspect-square w-full bg-white/5 rounded-xl mb-3 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-xl bg-white/5" />
                  </div>
                  <div className="h-2.5 bg-white/10 rounded w-1/3 mb-2" />
                  <div className="h-4 bg-white/10 rounded w-4/5 mb-3" />
                  <div className="pt-2 border-t border-[#2a2a2a] mt-auto">
                    <div className="h-5 bg-[#ff5500]/20 rounded w-1/2 mb-3" />
                    <div className="h-9 bg-white/5 rounded-xl" />
                  </div>
                </div>
              ))}
            </div>
          ) : filteredProducts.length === 0 ? (
            <div className="text-center py-20 bg-[#141414] rounded-3xl border border-[#2a2a2a] p-8 mb-12">
              <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-zinc-500 mx-auto mb-4">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="8"/>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"/>
                </svg>
              </div>
              <h3 className="text-base font-black uppercase text-white font-mono-custom mb-1">
                No Matching Equipment Found
              </h3>
              <p className="text-xs text-zinc-400 mb-6">
                Try clearing your search terms or selecting a different category filter.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSearchQuery("");
                  setCategoryFilter("all");
                  setBrandFilter("all");
                }}
                className="btn-orange px-6 py-2.5 rounded-xl text-xs font-black uppercase font-mono-custom"
              >
                Reset All Filters
              </button>
            </div>
          ) : (
            <div className="responsive-product-grid gap-3 sm:gap-6 mb-12">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}

          {/* Footer Action */}
          <div className="pt-8 border-t border-[#2a2a2a] flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-zinc-400 font-medium">
              Need immediate bulk equipment dispatch or trade invoice?
            </span>
            <div className="flex items-center gap-3">
              <a
                href="tel:+918283848559"
                className="btn-call-now text-xs font-black uppercase tracking-wider px-5 py-2.5 rounded-lg flex items-center gap-2"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                <span>Call Desk</span>
              </a>
              <a
                href="https://wa.me/918283848559?text=Hi%20Narindra%20Express%2C%20I%20have%20an%20inquiry%20regarding%20products."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#161616] hover:bg-[#1e1e1e] text-emerald-400 border border-emerald-500/50 text-xs font-black uppercase tracking-wider px-5 py-2.5 rounded-lg flex items-center gap-2 transition-colors"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-1.162 4.24 4.316-1.131z"/>
                </svg>
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
