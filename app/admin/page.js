"use client";

import React, { useState, useEffect, useMemo, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useStore } from "@/lib/context/StoreContext";

export default function AdminPage() {
  const router = useRouter();
  const {
    products,
    loadingProducts,
    categories,
    orders,
    addProduct,
    editProduct,
    deleteProduct,
    toggleProductStock,
    toggleProductFeatured,
    addCategory,
    addSubcategory,
    deleteCategory,
    updateOrderStatus,
    clearAllOrders,
    fetchOrders,
    fetchProducts,
    showToast
  } = useStore();

  const [authChecked, setAuthChecked] = useState(false);
  const [activeSection, setActiveSection] = useState("dashboard"); // 'dashboard' | 'products' | 'orders'
  const [activeProductTab, setActiveProductTab] = useState("inventory"); // 'inventory' | 'brands' | 'categories'
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  // Search queries in admin
  const [inventorySearch, setInventorySearch] = useState("");
  const [categorySearch, setCategorySearch] = useState("");

  // Modals state
  const [showAddProductModal, setShowAddProductModal] = useState(false);
  const [showAddCategoryModal, setShowAddCategoryModal] = useState(false);
  const [showAddSubcatModal, setShowAddSubcatModal] = useState(false);
  const [selectedParentCategory, setSelectedParentCategory] = useState(null);
  const [editingProduct, setEditingProduct] = useState(null);

  // Action loading states
  const [isSavingProduct, setIsSavingProduct] = useState(false);
  const [deletingProductId, setDeletingProductId] = useState(null);
  const [isRefreshing, setIsRefreshing] = useState(false);

  // Webcam modal state
  const [showWebcamModal, setShowWebcamModal] = useState(false);
  const videoRef = useRef(null);
  const mediaStreamRef = useRef(null);

  // Add Product Form State
  const [addSku, setAddSku] = useState("");
  const [addTitle, setAddTitle] = useState("");
  const [addDesc, setAddDesc] = useState("");
  const [addMrp, setAddMrp] = useState("");
  const [addSale, setAddSale] = useState("");
  const [addQuantity, setAddQuantity] = useState("10");
  const [addBrand, setAddBrand] = useState("BOSCH");
  const [addCustomBrand, setAddCustomBrand] = useState("");
  const [addCategoryVal, setAddCategoryVal] = useState("power-tools");
  const [addCustomCategory, setAddCustomCategory] = useState("");
  const [addSubcategoryVal, setAddSubcategoryVal] = useState("");
  const [addImageBase64, setAddImageBase64] = useState("");
  const [addInStock, setAddInStock] = useState(true);
  const [addFeatured, setAddFeatured] = useState(true);

  // Add Category Form State
  const [newCatName, setNewCatName] = useState("");
  const [newCatImage, setNewCatImage] = useState("");

  // Add Subcat Form State
  const [newSubcatName, setNewSubcatName] = useState("");
  const [newSubcatImage, setNewSubcatImage] = useState("");

  // Edit Product Form State
  const [editName, setEditName] = useState("");
  const [editBrand, setEditBrand] = useState("");
  const [editSale, setEditSale] = useState("");
  const [editMrp, setEditMrp] = useState("");
  const [editQty, setEditQty] = useState("");
  const [editDesc, setEditDesc] = useState("");

  // 1. Auth Gate Verification
  useEffect(() => {
    try {
      if (localStorage.getItem("ntt_admin_logged_in") !== "true") {
        router.replace("/admin/login");
      } else {
        setAuthChecked(true);
      }
    } catch (e) {
      router.replace("/admin/login");
    }
  }, [router]);

  const handleLogout = () => {
    try {
      localStorage.removeItem("ntt_admin_logged_in");
    } catch (e) {}
    router.replace("/admin/login");
  };

  // --- DERIVED METRICS FOR DASHBOARD ---
  const totalRevenue = useMemo(() => {
    return orders.reduce((sum, o) => sum + (o.total || 0), 0);
  }, [orders]);

  const avgOrderValue = useMemo(() => {
    if (orders.length === 0) return 0;
    return Math.round(totalRevenue / orders.length);
  }, [orders, totalRevenue]);

  const pendingDispatchCount = useMemo(() => {
    return orders.filter(o => o.status === "PROCESSING" || o.status.includes("PROCESSING")).length;
  }, [orders]);

  // Unique Brands
  const uniqueBrands = useMemo(() => {
    const map = new Map();
    products.forEach(p => {
      const b = (p.brand || "GENUINE").toUpperCase();
      map.set(b, (map.get(b) || 0) + 1);
    });
    return Array.from(map.entries()).map(([brand, count]) => ({ brand, count }));
  }, [products]);

  // Filtered Inventory
  const filteredInventory = useMemo(() => {
    if (!inventorySearch.trim()) return products;
    const q = inventorySearch.toLowerCase().trim();
    return products.filter(p =>
      p.name.toLowerCase().includes(q) ||
      p.id.toLowerCase().includes(q) ||
      p.brand.toLowerCase().includes(q) ||
      (p.categoryName || "").toLowerCase().includes(q)
    );
  }, [products, inventorySearch]);

  // Filtered Categories
  const filteredCategories = useMemo(() => {
    if (!categorySearch.trim()) return categories;
    const q = categorySearch.toLowerCase().trim();
    return categories.filter(c =>
      c.name.toLowerCase().includes(q) ||
      (c.subcategories || []).some(s => s.name.toLowerCase().includes(q))
    );
  }, [categories, categorySearch]);

  // --- WEBCAM CAPTURE HANDLERS ---
  const openWebcam = async () => {
    setShowWebcamModal(true);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: "environment", width: { ideal: 1280 }, height: { ideal: 720 } }
      });
      mediaStreamRef.current = stream;
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    } catch (err) {
      console.warn("Could not access camera:", err);
      showToast("Camera access denied or unavailable.");
      setShowWebcamModal(false);
    }
  };

  const closeWebcam = () => {
    if (mediaStreamRef.current) {
      mediaStreamRef.current.getTracks().forEach(track => track.stop());
      mediaStreamRef.current = null;
    }
    setShowWebcamModal(false);
  };

  const captureSnapshot = () => {
    if (!videoRef.current) return;
    const canvas = document.createElement("canvas");
    canvas.width = videoRef.current.videoWidth || 640;
    canvas.height = videoRef.current.videoHeight || 480;
    const ctx = canvas.getContext("2d");
    ctx.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
    const dataUrl = canvas.toDataURL("image/jpeg", 0.85);
    setAddImageBase64(dataUrl);
    closeWebcam();
    showToast("Snapshot captured successfully!");
  };

  const handleFileUpload = (file) => {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      setAddImageBase64(e.target.result);
      showToast("Product image loaded!");
    };
    reader.readAsDataURL(file);
  };

  // --- ADD PRODUCT SUBMISSION (CONNECTS TO SUPABASE DB) ---
  const handleAddNewProductSubmit = async (e) => {
    e.preventDefault();
    if (!addTitle.trim() || !addSale) {
      showToast("Please provide product title and sale price.");
      return;
    }

    const brandName = (addBrand === "__new__" ? addCustomBrand : addBrand).trim().toUpperCase();
    if (!brandName) {
      showToast("Please specify a brand name.");
      return;
    }

    let catId = addCategoryVal;
    let catName = "Power Tools";
    if (addCategoryVal === "__new__") {
      catName = addCustomCategory.trim();
      catId = catName.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
      addCategory({ id: catId, name: catName });
    } else {
      const found = categories.find(c => c.id === addCategoryVal);
      if (found) catName = found.name;
    }

    const saleVal = parseInt(addSale, 10);
    const mrpVal = parseInt(addMrp, 10) || saleVal;
    const qtyVal = parseInt(addQuantity, 10) || 10;
    const sku = addSku.trim() || `ntt-${Date.now().toString().slice(-4)}`;
    const image = addImageBase64 || "https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=600&q=80";

    const newProd = {
      id: sku,
      name: addTitle.trim(),
      category: catId,
      categoryName: catName,
      subcategory: addSubcategoryVal || "",
      brand: brandName,
      originalPrice: mrpVal >= saleVal ? mrpVal : saleVal,
      discountedPrice: saleVal,
      rating: 5.0,
      reviewsCount: 1,
      image: image,
      description: addDesc.trim() || `${brandName} industrial grade ${addTitle.trim()}. Designed for professional reliability.`,
      specs: {
        SKU: sku,
        Brand: brandName,
        Category: catName,
        Availability: addInStock ? "In Stock" : "Out of Stock",
        "Stock Units": String(qtyVal)
      },
      inStock: addInStock,
      quantity: qtyVal,
      featured: addFeatured
    };

    setIsSavingProduct(true);
    const result = await addProduct(newProd);
    setIsSavingProduct(false);

    if (result && result.success !== false) {
      // Reset Form
      setAddSku("");
      setAddTitle("");
      setAddDesc("");
      setAddMrp("");
      setAddSale("");
      setAddQuantity("10");
      setAddImageBase64("");
      setAddInStock(true);
      setAddFeatured(true);
      setShowAddProductModal(false);
    }
  };

  // --- EDIT PRODUCT MODAL HANDLER ---
  const openEditModal = (p) => {
    setEditingProduct(p);
    setEditName(p.name);
    setEditBrand(p.brand);
    setEditSale(p.discountedPrice);
    setEditMrp(p.originalPrice);
    setEditQty(p.quantity);
    setEditDesc(p.description || "");
  };

  const handleSaveEditProduct = async (e) => {
    e.preventDefault();
    if (!editingProduct) return;

    const saleVal = parseInt(editSale, 10);
    const mrpVal = parseInt(editMrp, 10) || saleVal;
    const qtyVal = parseInt(editQty, 10) || 0;

    await editProduct(editingProduct.id, {
      name: editName.trim(),
      brand: editBrand.trim().toUpperCase(),
      discountedPrice: saleVal,
      originalPrice: mrpVal >= saleVal ? mrpVal : saleVal,
      quantity: qtyVal,
      inStock: qtyVal > 0,
      description: editDesc.trim()
    });

    setEditingProduct(null);
  };

  // --- ADD CATEGORY SUBMIT ---
  const handleAddCategorySubmit = async (e) => {
    e.preventDefault();
    if (!newCatName.trim()) return;
    await addCategory({
      name: newCatName.trim(),
      image: newCatImage || "https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=400&q=80",
      subcategories: []
    });
    setNewCatName("");
    setNewCatImage("");
    setShowAddCategoryModal(false);
  };

  // --- ADD SUBCATEGORY SUBMIT ---
  const handleAddSubcatSubmit = async (e) => {
    e.preventDefault();
    if (!selectedParentCategory || !newSubcatName.trim()) return;
    await addSubcategory(selectedParentCategory.id, {
      name: newSubcatName.trim(),
      image: newSubcatImage || "https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=200&q=80",
      featured: false
    });
    setNewSubcatName("");
    setNewSubcatImage("");
    setShowAddSubcatModal(false);
  };

  if (!authChecked) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center text-zinc-400 font-mono-custom text-xs">
        Authenticating Owner Session...
      </div>
    );
  }

  return (
    <div className="bg-[#0a0a0a] text-zinc-100 min-h-screen font-sans selection:bg-[#ff5500] selection:text-white overflow-x-hidden flex flex-col md:flex-row">
      
      {/* ================= DESKTOP FIXED SIDEBAR ================= */}
      <aside className="hidden md:flex flex-col fixed left-0 top-0 bottom-0 w-[300px] bg-[#0d0d0d] border-r border-[#222222] z-30 p-6 overflow-y-auto custom-scrollbar justify-between select-none">
        <div className="space-y-6">
          
          {/* Brand Lockup */}
          <div className="flex flex-col items-center text-center pt-2">
            <Link href="/" className="group flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 p-2 flex items-center justify-center group-hover:border-[#ff5500] transition-colors mb-3 shadow-lg">
                <img src="/logo.png" alt="Narindra Logo" className="w-full h-full object-contain" />
              </div>
              <span className="text-2xl font-black uppercase text-white font-hero italic tracking-wider leading-none">
                NARINDRA
              </span>
              <span className="text-[11px] font-extrabold uppercase text-zinc-400 tracking-wider font-sans mt-1">
                TECHNO TOOLS
              </span>
              <span className="text-[9px] font-bold uppercase text-zinc-500 tracking-[0.2em] font-sans">
                CORPORATION
              </span>
            </Link>

            <div className="flex items-center gap-3 w-full my-4">
              <div className="h-px bg-zinc-800 flex-1"></div>
              <span className="text-[9px] font-mono-custom font-bold uppercase tracking-[0.25em] text-[#ff5500]">
                SINCE 1998
              </span>
              <div className="h-px bg-zinc-800 flex-1"></div>
            </div>
          </div>

          {/* Navigation Menu */}
          <nav className="space-y-2">
            <button
              type="button"
              onClick={() => setActiveSection("dashboard")}
              className={`admin-nav-item w-full text-left ${activeSection === "dashboard" ? "active" : ""}`}
            >
              <div className="flex items-center gap-3">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/>
                  <rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/>
                </svg>
                <span>DASHBOARD</span>
              </div>
              <svg className="admin-nav-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M7 17l9.2-9.2M17 17V7H7"/></svg>
            </button>

            <button
              type="button"
              onClick={() => setActiveSection("products")}
              className={`admin-nav-item w-full text-left ${activeSection === "products" ? "active" : ""}`}
            >
              <div className="flex items-center gap-3">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                </svg>
                <span>PRODUCTS</span>
              </div>
              <svg className="admin-nav-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M7 17l9.2-9.2M17 17V7H7"/></svg>
            </button>

            <button
              type="button"
              onClick={() => setActiveSection("orders")}
              className={`admin-nav-item w-full text-left ${activeSection === "orders" ? "active" : ""}`}
            >
              <div className="flex items-center gap-3">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
                  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
                </svg>
                <span>ORDERS</span>
              </div>
              {orders.length > 0 && (
                <span className="bg-[#ff5500] text-white text-[9px] font-black font-mono-custom px-1.5 py-0.5 rounded-full ml-auto mr-1">
                  {orders.length}
                </span>
              )}
              <svg className="admin-nav-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M7 17l9.2-9.2M17 17V7H7"/></svg>
            </button>
          </nav>
        </div>

        {/* Bottom Sidebar Actions */}
        <div className="pt-6 space-y-3">
          <div className="h-px bg-zinc-800/80 w-full mb-3"></div>

          <div className="flex items-center justify-between gap-2">
            <button
              type="button"
              onClick={handleLogout}
              className="w-full py-2.5 px-3 rounded-xl bg-red-950/30 hover:bg-red-900/50 text-red-400 hover:text-red-300 border border-red-500/20 text-[10px] font-mono-custom font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-1.5"
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/>
              </svg>
              <span>Logout Session</span>
            </button>
          </div>

          <Link
            href="/"
            className="w-full py-3 px-4 rounded-xl bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-white border border-white/10 flex items-center justify-center gap-2 text-xs font-mono-custom font-bold uppercase tracking-wider transition-all"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
            <span>RETURN TO STORE</span>
          </Link>
        </div>
      </aside>

      {/* ================= MOBILE HEADER (<768px) ================= */}
      <header className="flex md:hidden items-center justify-between px-4 py-3 bg-[#0d0d0d] border-b border-[#222222] sticky top-0 z-40">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 p-1 flex items-center justify-center">
            <img src="/logo.png" alt="Logo" className="w-full h-full object-contain" />
          </div>
          <div>
            <span className="font-hero font-black text-lg text-white uppercase italic tracking-wide">NARINDRA</span>
            <span className="text-[9px] font-mono-custom text-[#ff5500] font-bold block leading-none">ADMIN CONTROL</span>
          </div>
        </div>

        <button
          type="button"
          onClick={() => setMobileDrawerOpen(true)}
          className="p-2 rounded-xl bg-white/5 border border-white/10 text-zinc-300 hover:text-white"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/>
          </svg>
        </button>
      </header>

      {/* Mobile Drawer */}
      {mobileDrawerOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 transition-opacity"
            onClick={() => setMobileDrawerOpen(false)}
          />
          <div className="fixed top-0 bottom-0 left-0 w-72 bg-[#0d0d0d] border-r border-[#222222] z-50 p-6 flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-zinc-800">
                <div className="flex items-center gap-2.5">
                  <img src="/logo.png" alt="Logo" className="w-8 h-8 object-contain" />
                  <span className="font-hero font-black text-xl text-white uppercase italic">NARINDRA</span>
                </div>
                <button type="button" onClick={() => setMobileDrawerOpen(false)} className="p-1 text-zinc-400">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                </button>
              </div>

              <nav className="space-y-2">
                <button
                  type="button"
                  onClick={() => { setActiveSection("dashboard"); setMobileDrawerOpen(false); }}
                  className={`admin-nav-item w-full text-left ${activeSection === "dashboard" ? "active" : ""}`}
                >
                  <span>DASHBOARD</span>
                </button>
                <button
                  type="button"
                  onClick={() => { setActiveSection("products"); setMobileDrawerOpen(false); }}
                  className={`admin-nav-item w-full text-left ${activeSection === "products" ? "active" : ""}`}
                >
                  <span>PRODUCTS</span>
                </button>
                <button
                  type="button"
                  onClick={() => { setActiveSection("orders"); setMobileDrawerOpen(false); }}
                  className={`admin-nav-item w-full text-left ${activeSection === "orders" ? "active" : ""}`}
                >
                  <span>ORDERS ({orders.length})</span>
                </button>
              </nav>
            </div>

            <div className="space-y-3 pt-6 border-t border-zinc-800">
              <Link
                href="/"
                className="w-full py-3 px-4 rounded-xl bg-white/5 text-zinc-300 flex items-center justify-center gap-2 text-xs font-mono-custom font-bold uppercase"
              >
                <span>RETURN TO STORE</span>
              </Link>
              <button
                type="button"
                onClick={handleLogout}
                className="w-full py-2.5 px-4 rounded-xl bg-red-950/40 text-red-400 border border-red-500/30 text-xs font-mono-custom font-bold uppercase"
              >
                Log Out
              </button>
            </div>
          </div>
        </>
      )}

      {/* ================= MAIN CONTENT AREA ================= */}
      <main className="md:ml-[300px] flex-1 min-h-screen p-3.5 sm:p-8 md:p-12 pb-24 bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto space-y-6 sm:space-y-8">
          
          {/* Breadcrumbs & Header */}
          <div>
            <div className="text-[10px] font-mono-custom uppercase tracking-[0.25em] text-zinc-500 font-bold mb-1.5">
              SYSTEM / {activeSection.toUpperCase()}
            </div>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase text-white font-hero italic tracking-tight mb-3 sm:mb-4">
              {activeSection}.
            </h1>
            <div className="h-px bg-zinc-800/80 w-full mb-6 sm:mb-8"></div>
          </div>

          {/* ================= SECTION 1: DASHBOARD ================= */}
          {activeSection === "dashboard" && (
            <section className="space-y-6 sm:space-y-8">
              {/* 3 Stat Cards Row */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-5">
                
                {/* Card 1: Total Revenue */}
                <div className="admin-card p-4 sm:p-6 rounded-[22px] sm:rounded-[28px] flex flex-col justify-between space-y-3 sm:space-y-4">
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2 sm:gap-2.5 min-w-0">
                      <div className="w-7 h-7 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                      </div>
                      <span className="text-[10px] font-mono-custom uppercase tracking-widest text-zinc-400 font-bold truncate">TOTAL REVENUE</span>
                    </div>
                    <span className="pill-neutral shrink-0">ALL TIME</span>
                  </div>
                  <div>
                    <div className="text-2xl sm:text-4xl font-black text-white font-mono-custom tracking-tight">
                      ₹{totalRevenue.toLocaleString("en-IN")}
                    </div>
                    <span className="text-[11px] text-zinc-500 font-mono-custom mt-1 block">Live cloud orders</span>
                  </div>
                </div>

                {/* Card 2: Avg Order Value */}
                <div className="admin-card p-4 sm:p-6 rounded-[22px] sm:rounded-[28px] flex flex-col justify-between space-y-3 sm:space-y-4">
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2 sm:gap-2.5 min-w-0">
                      <div className="w-7 h-7 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
                      </div>
                      <span className="text-[10px] font-mono-custom uppercase tracking-widest text-zinc-400 font-bold truncate">AVG. ORDER VALUE</span>
                    </div>
                    <span className="pill-neutral shrink-0">PER TICKET</span>
                  </div>
                  <div>
                    <div className="text-2xl sm:text-4xl font-black text-white font-mono-custom tracking-tight">
                      ₹{avgOrderValue.toLocaleString("en-IN")}
                    </div>
                    <span className="text-[11px] text-zinc-500 font-mono-custom mt-1 block">Calculated average</span>
                  </div>
                </div>

                {/* Card 3: Dispatch Queue */}
                <div className="admin-card p-4 sm:p-6 rounded-[22px] sm:rounded-[28px] flex flex-col justify-between space-y-3 sm:space-y-4">
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2 sm:gap-2.5 min-w-0">
                      <div className="w-7 h-7 rounded-lg bg-[#ff5500]/10 border border-[#ff5500]/25 flex items-center justify-center text-[#ff5500] shrink-0">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>
                      </div>
                      <span className="text-[10px] font-mono-custom uppercase tracking-widest text-zinc-400 font-bold truncate">DISPATCH QUEUE</span>
                    </div>
                    <span className="pill-orange shrink-0">REQUIRES ACTION</span>
                  </div>
                  <div>
                    <div className="text-2xl sm:text-4xl font-black text-[#ff5500] font-mono-custom tracking-tight">
                      {pendingDispatchCount}
                    </div>
                    <span className="text-[11px] text-zinc-500 font-mono-custom mt-1 block">Pending shipments</span>
                  </div>
                </div>

              </div>

              {/* Recent Transactions Live Feed */}
              <div className="admin-card rounded-[22px] sm:rounded-[28px] p-3.5 sm:p-6 md:p-7 shadow-2xl overflow-hidden">
                <div className="flex items-center justify-between gap-2 pb-3.5 sm:pb-4 mb-4 sm:mb-5 border-b border-zinc-800/80">
                  <div className="flex items-center gap-2.5 min-w-0 flex-1">
                    <div className="w-8 h-8 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 shrink-0">
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                    </div>
                    <div className="min-w-0 flex-1">
                      <span className="text-xs font-mono-custom uppercase tracking-wider text-zinc-300 font-black block truncate">
                        RECENT_TRANSACTIONS
                      </span>
                      <span className="text-[9px] font-mono-custom uppercase tracking-widest text-zinc-500 font-bold block truncate">
                        FULFILLMENT_STREAM
                      </span>
                    </div>
                  </div>
                  <span className="pill-green flex items-center gap-1.5 shrink-0">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                    <span>LIVE_FEED</span>
                  </span>
                </div>

                <div className="space-y-3">
                  {orders.length === 0 ? (
                    <div className="text-center py-10 text-zinc-500 font-mono-custom text-xs">
                      No customer orders recorded yet. Place an order on the storefront to test!
                    </div>
                  ) : (
                    orders.slice(0, 10).map((o) => (
                      <div
                        key={o.id}
                        className="flex flex-col sm:flex-row sm:items-center justify-between p-3.5 bg-[#141414] rounded-2xl border border-zinc-800 gap-3"
                      >
                        <div className="flex items-center gap-3">
                          <span className="font-mono-custom font-bold text-xs text-[#ff5500]">
                            {o.id}
                          </span>
                          <div>
                            <span className="text-xs font-bold text-white block">
                              {o.customer.name} ({o.customer.phone})
                            </span>
                            <span className="text-[10px] text-zinc-400 font-mono-custom block">
                              {o.itemsText}
                            </span>
                          </div>
                        </div>

                        <div className="flex items-center gap-3 justify-between sm:justify-end">
                          <span className="font-mono-custom font-black text-emerald-400 text-sm">
                            ₹{o.total.toLocaleString("en-IN")}
                          </span>
                          <span className={`px-2.5 py-1 rounded-full text-[9px] font-mono-custom font-bold uppercase tracking-wider ${
                            o.status === "DELIVERED"
                              ? "bg-emerald-950 text-emerald-400 border border-emerald-500/40"
                              : o.status === "DISPATCHED"
                              ? "bg-blue-950 text-blue-400 border border-blue-500/40"
                              : "bg-amber-950 text-amber-400 border border-amber-500/40"
                          }`}>
                            {o.status}
                          </span>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>
            </section>
          )}

          {/* ================= SECTION 2: PRODUCTS ================= */}
          {activeSection === "products" && (
            <section className="space-y-6">
              
              {/* 3 Tabs Header + Action Button */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-zinc-800/80">
                <div className="flex items-center gap-6 sm:gap-8 overflow-x-auto">
                  <button
                    type="button"
                    onClick={() => setActiveProductTab("inventory")}
                    className={`pb-3 font-mono-custom text-xs font-black tracking-wider uppercase transition-colors ${
                      activeProductTab === "inventory"
                        ? "border-b-2 border-[#ff5500] text-white"
                        : "text-zinc-500 hover:text-zinc-300"
                    }`}
                  >
                    MASTER_INVENTORY ({products.length})
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveProductTab("brands")}
                    className={`pb-3 font-mono-custom text-xs font-black tracking-wider uppercase transition-colors ${
                      activeProductTab === "brands"
                        ? "border-b-2 border-[#ff5500] text-white"
                        : "text-zinc-500 hover:text-zinc-300"
                    }`}
                  >
                    BRANDS ({uniqueBrands.length})
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveProductTab("categories")}
                    className={`pb-3 font-mono-custom text-xs font-black tracking-wider uppercase transition-colors ${
                      activeProductTab === "categories"
                        ? "border-b-2 border-[#ff5500] text-white"
                        : "text-zinc-500 hover:text-zinc-300"
                    }`}
                  >
                    CATEGORIES_TREE ({categories.length})
                  </button>
                </div>

                {/* Tab Action Buttons */}
                {activeProductTab === "inventory" && (
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      disabled={isRefreshing || loadingProducts}
                      onClick={async () => {
                        setIsRefreshing(true);
                        await fetchProducts();
                        setIsRefreshing(false);
                        showToast("Synced live inventory from cloud DB!");
                      }}
                      className="px-3.5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-white border border-white/10 text-xs font-mono-custom font-bold inline-flex items-center gap-1.5 transition-colors disabled:opacity-50"
                      title="Force Refresh from Supabase Cloud"
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={isRefreshing ? "animate-spin text-[#ff5500]" : ""}>
                        <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67"/>
                      </svg>
                      <span className="hidden sm:inline">Sync Cloud</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setShowAddProductModal(true)}
                      className="btn-orange px-4 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider font-mono-custom inline-flex items-center gap-2 shadow-md active:scale-95 shrink-0"
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
                      <span>+ ADD INVENTORY</span>
                    </button>
                  </div>
                )}
                {activeProductTab === "categories" && (
                  <button
                    type="button"
                    onClick={() => setShowAddCategoryModal(true)}
                    className="btn-orange px-4 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider font-mono-custom inline-flex items-center gap-2 shadow-md active:scale-95 shrink-0"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
                    <span>+ ADD CATEGORY</span>
                  </button>
                )}
              </div>

              {/* TAB 1: MASTER INVENTORY */}
              {activeProductTab === "inventory" && (
                <div className="space-y-4">
                  {/* Search Bar */}
                  <div className="flex flex-col sm:flex-row justify-between items-center gap-4 bg-[#111111] p-3.5 sm:p-4 rounded-2xl border border-zinc-800">
                    <div className="relative w-full sm:w-96">
                      <input
                        type="text"
                        placeholder="Search inventory by title, brand, or SKU..."
                        value={inventorySearch}
                        onChange={(e) => setInventorySearch(e.target.value)}
                        className="w-full bg-[#161616] border border-zinc-800 rounded-xl px-4 py-2.5 text-xs text-white placeholder:text-zinc-500 focus:outline-none focus:border-[#ff5500] font-medium"
                      />
                      <svg className="absolute right-3.5 top-3 text-zinc-400" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
                      </svg>
                    </div>

                    <div className="text-xs font-bold text-zinc-400 font-mono-custom">
                      Showing: <span className="text-[#ff5500]">{filteredInventory.length}</span> items
                    </div>
                  </div>

                  {/* Loading State */}
                  {loadingProducts ? (
                    <div className="p-12 text-center bg-[#111111] rounded-2xl border border-zinc-800 space-y-3">
                      <div className="w-8 h-8 border-2 border-[#ff5500] border-t-transparent rounded-full animate-spin mx-auto" />
                      <p className="text-xs font-mono-custom text-zinc-400">Loading catalog live from Supabase Cloud Database...</p>
                    </div>
                  ) : filteredInventory.length === 0 ? (
                    <div className="p-12 text-center bg-[#111111] rounded-2xl border border-zinc-800 space-y-3">
                      <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-zinc-500 mx-auto">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
                        </svg>
                      </div>
                      <h4 className="text-sm font-bold text-white uppercase font-mono-custom">No Products Found</h4>
                      <p className="text-xs text-zinc-400">No items match your search or catalog is currently empty in the database.</p>
                      <button
                        type="button"
                        onClick={() => setShowAddProductModal(true)}
                        className="btn-orange px-5 py-2.5 rounded-xl text-xs font-black uppercase font-mono-custom inline-flex items-center gap-2 mt-2"
                      >
                        + Create Product in Cloud DB
                      </button>
                    </div>
                  ) : (
                    <div className="space-y-3.5">
                      {filteredInventory.map((p) => (
                        <div
                          key={p.id}
                          className="admin-card p-4 rounded-2xl border border-zinc-800 flex flex-col md:flex-row md:items-center justify-between gap-4 group hover:border-zinc-700 transition-colors"
                        >
                          <div className="flex items-center gap-4 min-w-0">
                            {/* Featured Star Button */}
                            <button
                              type="button"
                              onClick={() => toggleProductFeatured(p.id)}
                              title={p.featured ? "Unfeature Product" : "Feature on Home"}
                              className={`p-2 rounded-xl border transition-colors shrink-0 ${
                                p.featured
                                  ? "bg-amber-500/20 text-amber-400 border-amber-500/40"
                                  : "bg-white/5 text-zinc-500 border-white/5 hover:text-white"
                              }`}
                            >
                              <svg width="15" height="15" viewBox="0 0 24 24" fill={p.featured ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2">
                                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                              </svg>
                            </button>

                            {/* Image */}
                            <div className="w-16 h-16 bg-white rounded-xl p-1.5 flex items-center justify-center shrink-0 border border-zinc-700">
                              <img src={p.image} alt={p.name} className="max-h-full max-w-full object-contain" />
                            </div>

                            {/* Info */}
                            <div className="min-w-0 flex-1">
                              <div className="flex items-center gap-2 mb-1 flex-wrap">
                                <span className="px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-[9px] font-mono-custom font-bold text-[#ff5500] uppercase">
                                  {p.brand}
                                </span>
                                <span className="px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-[9px] font-mono-custom text-zinc-400 uppercase">
                                  SKU: {p.id}
                                </span>
                                <span className="px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-[9px] font-mono-custom text-zinc-400">
                                  {p.categoryName}
                                </span>
                              </div>
                              <h3 className="text-sm font-bold text-white truncate max-w-md">
                                {p.name}
                              </h3>
                              <span className="text-[11px] text-zinc-400 font-mono-custom block mt-0.5">
                                Stock Units: <strong className="text-white">{p.quantity}</strong>
                              </span>
                            </div>
                          </div>

                          {/* Price & Actions */}
                          <div className="flex items-center gap-4 justify-between md:justify-end border-t md:border-t-0 pt-3 md:pt-0 border-zinc-800">
                            <div>
                              <span className="text-base font-black text-[#ff5500] font-mono-custom block">
                                ₹{p.discountedPrice.toLocaleString("en-IN")}
                              </span>
                              <span className="text-[10px] text-zinc-500 line-through font-mono-custom block">
                                MRP: ₹{p.originalPrice.toLocaleString("en-IN")}
                              </span>
                            </div>

                            <div className="flex items-center gap-2">
                              {/* Stock Toggle */}
                              <button
                                type="button"
                                onClick={() => toggleProductStock(p.id)}
                                className={`px-3 py-1.5 rounded-xl text-[10px] font-mono-custom font-bold uppercase transition-colors border ${
                                  p.inStock
                                    ? "bg-emerald-950/70 border-emerald-500/40 text-emerald-400 hover:bg-emerald-900/80"
                                    : "bg-red-950/70 border-red-500/40 text-red-400 hover:bg-red-900/80"
                                }`}
                              >
                                {p.inStock ? "● In Stock" : "○ Out of Stock"}
                              </button>

                              {/* Edit Button */}
                              <button
                                type="button"
                                onClick={() => openEditModal(p)}
                                className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-white border border-white/10"
                                title="Edit Product"
                              >
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                  <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
                                </svg>
                              </button>

                              {/* Delete Button (Permanent Supabase Delete) */}
                              <button
                                type="button"
                                disabled={deletingProductId === p.id}
                                onClick={async () => {
                                  if (confirm(`Delete "${p.name}" permanently from inventory and database?`)) {
                                    setDeletingProductId(p.id);
                                    await deleteProduct(p.id);
                                    setDeletingProductId(null);
                                  }
                                }}
                                className="p-2 rounded-xl bg-red-950/40 hover:bg-red-900/60 text-red-400 hover:text-red-300 border border-red-500/30 disabled:opacity-50"
                                title="Delete Product Permanently"
                              >
                                {deletingProductId === p.id ? (
                                  <div className="w-3.5 h-3.5 border-2 border-red-400 border-t-transparent rounded-full animate-spin" />
                                ) : (
                                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
                                  </svg>
                                )}
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* TAB 2: BRANDS */}
              {activeProductTab === "brands" && (
                <div className="space-y-4">
                  <div className="p-4 bg-[#111111] rounded-2xl border border-zinc-800 flex items-center justify-between">
                    <span className="text-xs font-mono-custom uppercase text-zinc-400 font-bold">
                      MANUFACTURER BRANDS DIRECTORY ({uniqueBrands.length})
                    </span>
                    <span className="pill-neutral">DYNAMIC EXTRACTION</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3.5">
                    {uniqueBrands.map(({ brand, count }) => (
                      <div
                        key={brand}
                        className="admin-card p-4 rounded-2xl border border-zinc-800 flex items-center justify-between"
                      >
                        <div>
                          <h4 className="text-sm font-black text-white font-mono-custom uppercase">
                            {brand}
                          </h4>
                          <span className="text-[10px] text-zinc-400 font-mono-custom">
                            Active Catalog
                          </span>
                        </div>
                        <span className="px-2.5 py-1 rounded-full bg-[#ff5500]/10 text-[#ff5500] font-mono-custom font-bold text-xs border border-[#ff5500]/20">
                          {count} {count === 1 ? "Item" : "Items"}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* TAB 3: CATEGORIES TREE */}
              {activeProductTab === "categories" && (
                <div className="space-y-5">
                  <div className="relative w-full">
                    <input
                      type="text"
                      placeholder="Search categories and sub-categories..."
                      value={categorySearch}
                      onChange={(e) => setCategorySearch(e.target.value)}
                      className="w-full bg-[#111111] border border-zinc-800 rounded-2xl px-5 py-3.5 pl-12 text-xs text-white placeholder:text-zinc-500 focus:outline-none focus:border-[#ff5500]"
                    />
                    <svg className="absolute left-4 top-3.5 text-zinc-400" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
                    </svg>
                  </div>

                  <div className="space-y-4">
                    {filteredCategories.map((cat) => (
                      <div
                        key={cat.id}
                        className="admin-card p-5 rounded-2xl border border-zinc-800 flex flex-col md:flex-row md:items-center justify-between gap-4"
                      >
                        <div className="flex items-center gap-4">
                          <img
                            src={cat.image || "/hero.webp"}
                            alt={cat.name}
                            className="w-14 h-14 object-cover rounded-xl border border-zinc-700"
                          />
                          <div>
                            <h4 className="text-sm font-black text-white font-mono-custom uppercase">
                              {cat.name}
                            </h4>
                            <span className="text-[10px] text-zinc-500 font-mono-custom uppercase">
                              Slug: {cat.id}
                            </span>
                          </div>
                        </div>

                        {/* Subcategories list */}
                        <div className="flex-1 flex flex-wrap gap-2 md:px-6">
                          {(cat.subcategories || []).map((sub) => (
                            <span
                              key={sub.id}
                              className="px-2.5 py-1 rounded-lg bg-white/5 border border-zinc-700 text-[10px] text-zinc-300 font-mono-custom font-bold"
                            >
                              {sub.name}
                            </span>
                          ))}
                        </div>

                        <div className="flex items-center gap-2">
                          <button
                            type="button"
                            onClick={() => {
                              setSelectedParentCategory(cat);
                              setShowAddSubcatModal(true);
                            }}
                            className="px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-white border border-white/10 text-[10px] font-mono-custom font-bold uppercase transition-colors"
                          >
                            + Sub-Category
                          </button>
                          <button
                            type="button"
                            onClick={() => {
                              if (confirm(`Delete category "${cat.name}"?`)) {
                                deleteCategory(cat.id);
                              }
                            }}
                            className="p-2 rounded-xl bg-red-950/40 text-red-400 hover:text-red-300 border border-red-500/30"
                            title="Delete Category"
                          >
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
                            </svg>
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </section>
          )}

          {/* ================= SECTION 3: ORDERS ================= */}
          {activeSection === "orders" && (
            <section className="space-y-4 sm:space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3.5 sm:p-4 bg-[#111111] rounded-2xl border border-zinc-800">
                <div className="flex items-center justify-between sm:justify-start gap-2">
                  <span className="text-xs font-mono-custom uppercase text-zinc-400 font-bold">
                    DISPATCH PIPELINE ({orders.length})
                  </span>
                  <span className="pill-green flex items-center gap-1.5 shrink-0">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                    <span>SUPABASE_REALTIME_SYNC</span>
                  </span>
                </div>

                <div className="flex items-center gap-2 self-stretch sm:self-auto justify-end">
                  <button
                    type="button"
                    onClick={() => {
                      fetchOrders();
                      showToast("Orders refreshed from Supabase database!");
                    }}
                    className="px-3 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white text-[10px] font-mono-custom font-bold uppercase tracking-wider transition-colors flex items-center gap-1.5"
                  >
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg>
                    <span>Sync Cloud</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      if (confirm("Are you sure you want to clear all orders?")) {
                        clearAllOrders();
                      }
                    }}
                    className="px-3 py-1.5 rounded-lg bg-red-950/60 border border-red-500/40 text-red-400 hover:text-red-300 hover:bg-red-900/60 text-[10px] font-mono-custom font-bold uppercase tracking-wider transition-colors"
                  >
                    Clear All Orders
                  </button>
                </div>
              </div>

              {/* Orders List */}
              <div className="space-y-4">
                {orders.length === 0 ? (
                  <div className="text-center py-20 bg-[#141414] rounded-3xl border border-zinc-800 p-8">
                    <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-zinc-500 mx-auto mb-3">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
                        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
                      </svg>
                    </div>
                    <h3 className="text-base font-bold text-white font-mono-custom mb-1">
                      Dispatch Pipeline Empty
                    </h3>
                    <p className="text-xs text-zinc-400">
                      When customers place orders via Cash on Delivery, they will appear here live via Supabase.
                    </p>
                  </div>
                ) : (
                  orders.map((o) => (
                    <div
                      key={o.id}
                      className="admin-card p-5 rounded-2xl border border-zinc-800 space-y-4"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-zinc-800 gap-2">
                        <div className="flex items-center gap-3">
                          <span className="text-base font-black text-[#ff5500] font-mono-custom">
                            {o.id}
                          </span>
                          <span className="text-[10px] text-zinc-500 font-mono-custom">
                            {new Date(o.date).toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })}
                          </span>
                        </div>

                        {/* Status Select Box */}
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] text-zinc-400 font-mono-custom uppercase font-bold">
                            Fulfillment:
                          </span>
                          <select
                            value={o.status}
                            onChange={(e) => updateOrderStatus(o.id, e.target.value)}
                            className="bg-[#161616] border border-zinc-700 rounded-xl px-3 py-1.5 text-xs font-mono-custom font-bold text-white focus:outline-none focus:border-[#ff5500] cursor-pointer"
                          >
                            <option value="PROCESSING">PROCESSING</option>
                            <option value="PROCESSING (Email Issue)">PROCESSING (Email Issue)</option>
                            <option value="DISPATCHED">DISPATCHED</option>
                            <option value="DELIVERED">DELIVERED</option>
                            <option value="CANCELLED">CANCELLED</option>
                          </select>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs">
                        {/* Customer Info */}
                        <div className="space-y-1.5">
                          <span className="text-[10px] font-mono-custom uppercase tracking-wider text-[#ff5500] font-bold block">
                            Customer Details
                          </span>
                          <p className="text-white font-bold">{o.customer.name}</p>
                          <p className="text-zinc-300 font-mono-custom">Phone: {o.customer.phone}</p>
                          {o.customer.altPhone && (
                            <p className="text-zinc-400 font-mono-custom">Alt: {o.customer.altPhone}</p>
                          )}
                          {o.customer.email && (
                            <p className="text-zinc-400">Email: {o.customer.email}</p>
                          )}
                          <p className="text-zinc-400 leading-relaxed pt-1">
                            {o.customer.address}
                          </p>
                        </div>

                        {/* Items Summary */}
                        <div className="space-y-1.5">
                          <span className="text-[10px] font-mono-custom uppercase tracking-wider text-[#ff5500] font-bold block">
                            Ordered Equipment
                          </span>
                          <p className="text-zinc-300 leading-relaxed font-mono-custom">
                            {o.itemsText}
                          </p>
                          <p className="text-[11px] text-zinc-500 pt-1 font-mono-custom">
                            Payment: Cash on Delivery (COD)
                          </p>
                        </div>

                        {/* Financial Totals */}
                        <div className="space-y-1.5 md:text-right flex flex-col md:items-end justify-between">
                          <div>
                            <span className="text-[10px] font-mono-custom uppercase tracking-wider text-[#ff5500] font-bold block">
                              Total Amount
                            </span>
                            <span className="text-2xl font-black text-emerald-400 font-mono-custom block">
                              ₹{o.total.toLocaleString("en-IN")}
                            </span>
                            <span className="text-[10px] text-zinc-500 font-mono-custom block">
                              (Includes ₹50 Flat Delivery)
                            </span>
                          </div>

                          <a
                            href={`https://wa.me/91${o.customer.phone.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
                              `Hi ${o.customer.name}, your Narindra Express order #${o.id} is currently ${o.status}.`
                            )}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-emerald-950/60 border border-emerald-500/40 text-emerald-400 px-3 py-1.5 rounded-xl font-mono-custom text-[11px] font-bold inline-flex items-center gap-1.5 hover:bg-emerald-900/60 transition-colors w-fit"
                          >
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-1.162 4.24 4.316-1.131z"/>
                            </svg>
                            <span>WhatsApp Customer</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </section>
          )}

        </div>
      </main>

      {/* ================= MODAL: ADD PRODUCT ================= */}
      {showAddProductModal && (
        <div className="admin-modal-backdrop active">
          <div className="admin-modal-panel admin-card max-w-[840px] w-full max-h-[92vh] overflow-hidden flex flex-col rounded-[36px] shadow-2xl bg-[#0f0f0f] border border-zinc-800">
            
            <div className="p-6 sm:p-8 pb-4 flex items-center justify-between border-b border-zinc-800/80">
              <div>
                <span className="text-[9px] font-mono-custom uppercase tracking-[0.25em] text-zinc-500 font-bold block mb-1">
                  INVENTORY MANAGEMENT
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-white font-sans uppercase tracking-tight">
                  Add Product
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setShowAddProductModal(false)}
                className="w-10 h-10 rounded-xl bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white flex items-center justify-center border border-white/10"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
              </button>
            </div>

            <form onSubmit={handleAddNewProductSubmit} className="flex flex-col flex-1 overflow-hidden min-h-0">
              <div className="p-6 sm:p-8 overflow-y-auto custom-scrollbar space-y-6 flex-1 min-h-0">
                
                {/* 1) Title and SKU */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="sm:col-span-2">
                    <label className="text-[10px] font-bold text-zinc-400 uppercase font-mono-custom mb-2 block">
                      PRODUCT NAME <span className="text-[#ff5500]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Bosch GSB 500W Impact Drill"
                      value={addTitle}
                      onChange={(e) => setAddTitle(e.target.value)}
                      className="w-full bg-[#161616] border border-zinc-800 focus:border-[#ff5500] rounded-2xl px-5 py-4 text-white text-sm font-medium focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] font-bold text-zinc-400 uppercase font-mono-custom mb-2 block">
                      CUSTOM SKU <span className="text-zinc-600">(OPTIONAL)</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. ntt-013"
                      value={addSku}
                      onChange={(e) => setAddSku(e.target.value)}
                      className="w-full bg-[#161616] border border-zinc-800 focus:border-[#ff5500] rounded-2xl px-5 py-4 text-white text-sm font-mono-custom focus:outline-none uppercase"
                    />
                  </div>
                </div>

                {/* 2) Description */}
                <div>
                  <label className="text-[10px] font-bold text-zinc-400 uppercase font-mono-custom mb-2 block">
                    DESCRIPTION
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Heavy-duty industrial specifications, motor power, rpm, accessories included..."
                    value={addDesc}
                    onChange={(e) => setAddDesc(e.target.value)}
                    className="w-full bg-[#161616] border border-zinc-800 focus:border-[#ff5500] rounded-2xl p-4 text-white text-xs font-medium focus:outline-none"
                  />
                </div>

                {/* 3) Prices & Quantity */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="text-[10px] font-bold text-zinc-400 uppercase font-mono-custom mb-2 block">
                      ORIGINAL PRICE (MRP)
                    </label>
                    <div className="relative">
                      <span className="absolute left-4 top-3.5 text-zinc-500 font-mono-custom font-bold text-sm">₹</span>
                      <input
                        type="number"
                        min="0"
                        placeholder="4850"
                        value={addMrp}
                        onChange={(e) => setAddMrp(e.target.value)}
                        className="w-full bg-[#161616] border border-zinc-800 focus:border-[#ff5500] rounded-2xl pl-9 pr-4 py-3.5 text-white text-sm font-mono-custom font-bold focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[10px] font-bold text-[#ff5500] uppercase font-mono-custom mb-2 block">
                      DISCOUNTED PRICE <span className="text-[#ff5500]">*</span>
                    </label>
                    <div className="relative">
                      <span className="absolute left-4 top-3.5 text-[#ff5500] font-mono-custom font-bold text-sm">₹</span>
                      <input
                        type="number"
                        required
                        min="0"
                        placeholder="3490"
                        value={addSale}
                        onChange={(e) => setAddSale(e.target.value)}
                        className="w-full bg-[#161616] border border-[#ff5500]/40 focus:border-[#ff5500] rounded-2xl pl-9 pr-4 py-3.5 text-white text-sm font-mono-custom font-bold focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[10px] font-bold text-zinc-400 uppercase font-mono-custom mb-2 block">
                      STOCK QUANTITY
                    </label>
                    <input
                      type="number"
                      min="0"
                      value={addQuantity}
                      onChange={(e) => setAddQuantity(e.target.value)}
                      className="w-full bg-[#161616] border border-zinc-800 focus:border-[#ff5500] rounded-2xl px-4 py-3.5 text-white text-sm font-mono-custom font-bold focus:outline-none"
                    />
                  </div>
                </div>

                {/* 4) Brand & Categories */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="text-[10px] font-bold text-zinc-400 uppercase font-mono-custom mb-2 block">
                      BRAND <span className="text-[#ff5500]">*</span>
                    </label>
                    <select
                      value={addBrand}
                      onChange={(e) => setAddBrand(e.target.value)}
                      className="w-full bg-[#161616] border border-zinc-800 focus:border-[#ff5500] rounded-2xl px-4 py-3.5 text-white text-xs uppercase font-mono-custom font-bold focus:outline-none"
                    >
                      {uniqueBrands.map(({ brand }) => (
                        <option key={brand} value={brand}>{brand}</option>
                      ))}
                      <option value="__new__">+ ENTER NEW BRAND</option>
                    </select>
                    {addBrand === "__new__" && (
                      <input
                        type="text"
                        placeholder="Enter brand name..."
                        value={addCustomBrand}
                        onChange={(e) => setAddCustomBrand(e.target.value)}
                        className="mt-2 w-full bg-[#161616] border border-[#ff5500]/50 rounded-xl px-4 py-2 text-white text-xs uppercase font-mono-custom font-bold focus:outline-none"
                      />
                    )}
                  </div>

                  <div>
                    <label className="text-[10px] font-bold text-zinc-400 uppercase font-mono-custom mb-2 block">
                      CATEGORY <span className="text-[#ff5500]">*</span>
                    </label>
                    <select
                      value={addCategoryVal}
                      onChange={(e) => setAddCategoryVal(e.target.value)}
                      className="w-full bg-[#161616] border border-zinc-800 focus:border-[#ff5500] rounded-2xl px-4 py-3.5 text-white text-xs font-medium focus:outline-none"
                    >
                      {categories.map((cat) => (
                        <option key={cat.id} value={cat.id}>{cat.name}</option>
                      ))}
                      <option value="__new__">+ ENTER NEW CATEGORY</option>
                    </select>
                    {addCategoryVal === "__new__" && (
                      <input
                        type="text"
                        placeholder="Enter category name..."
                        value={addCustomCategory}
                        onChange={(e) => setAddCustomCategory(e.target.value)}
                        className="mt-2 w-full bg-[#161616] border border-[#ff5500]/50 rounded-xl px-4 py-2 text-white text-xs focus:outline-none"
                      />
                    )}
                  </div>

                  <div>
                    <label className="text-[10px] font-bold text-zinc-400 uppercase font-mono-custom mb-2 block">
                      SUB CATEGORY
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Impact Drills"
                      value={addSubcategoryVal}
                      onChange={(e) => setAddSubcategoryVal(e.target.value)}
                      className="w-full bg-[#161616] border border-zinc-800 focus:border-[#ff5500] rounded-2xl px-4 py-3.5 text-white text-xs font-medium focus:outline-none"
                    />
                  </div>
                </div>

                {/* 5) Media Upload & Live Webcam Snapshot */}
                <div className="space-y-3">
                  <label className="text-[10px] font-bold text-zinc-400 uppercase font-mono-custom block">
                    ASSET GALLERY & MEDIA
                  </label>
                  <div className="flex flex-wrap items-center gap-4">
                    
                    {/* File Upload Button */}
                    <label className="w-24 h-24 rounded-2xl border-2 border-dashed border-zinc-700 hover:border-[#ff5500] flex flex-col items-center justify-center gap-1 text-zinc-400 hover:text-white transition-all cursor-pointer">
                      <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={(e) => handleFileUpload(e.target.files[0])}
                      />
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
                      <span className="text-[9px] font-mono-custom font-bold uppercase">Upload</span>
                    </label>

                    {/* Live Camera Snapshot */}
                    <button
                      type="button"
                      onClick={openWebcam}
                      className="w-24 h-24 rounded-2xl border-2 border-dashed border-zinc-700 hover:border-[#ff5500] flex flex-col items-center justify-center gap-1 text-zinc-400 hover:text-white transition-all"
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/>
                      </svg>
                      <span className="text-[9px] font-mono-custom font-bold uppercase">Camera</span>
                    </button>

                    {/* Image Preview Box */}
                    {addImageBase64 && (
                      <div className="flex items-center gap-3 p-2.5 bg-[#161616] rounded-2xl border border-zinc-800">
                        <img src={addImageBase64} alt="Preview" className="w-16 h-16 object-contain bg-white/5 rounded-xl p-1 border border-zinc-700" />
                        <div className="pr-2">
                          <span className="text-xs font-bold text-white block">Image Ready</span>
                          <button
                            type="button"
                            onClick={() => setAddImageBase64("")}
                            className="text-[10px] text-red-400 hover:underline font-mono-custom mt-1 block"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    )}

                  </div>
                </div>

                {/* Stock & Featured Toggles */}
                <div className="pt-2 flex items-center gap-3 flex-wrap">
                  <button
                    type="button"
                    onClick={() => setAddInStock(!addInStock)}
                    className={`py-2.5 px-4 rounded-xl text-xs font-bold font-mono-custom transition-all border flex items-center gap-2 ${
                      addInStock
                        ? "bg-emerald-950/70 border-emerald-500/40 text-emerald-400"
                        : "bg-red-950/70 border-red-500/40 text-red-400"
                    }`}
                  >
                    <span>{addInStock ? "● In Stock" : "○ Out of Stock"}</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setAddFeatured(!addFeatured)}
                    className={`py-2.5 px-4 rounded-xl text-xs font-bold font-mono-custom transition-all border flex items-center gap-2 ${
                      addFeatured
                        ? "bg-amber-950/70 border-amber-500/50 text-amber-400"
                        : "bg-white/5 border-white/10 text-zinc-400 hover:text-white"
                    }`}
                  >
                    <span>{addFeatured ? "★ Featured on Home" : "☆ Standard Catalog"}</span>
                  </button>
                </div>

              </div>

              {/* Pinned Submit Button */}
              <div className="shrink-0 p-4 sm:p-6 bg-[#0d0d0d] border-t border-zinc-800">
                <button
                  type="submit"
                  disabled={isSavingProduct}
                  className="btn-orange w-full py-4 rounded-2xl text-xs font-black uppercase tracking-wider font-mono-custom shadow-lg active:scale-98 flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {isSavingProduct ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>SAVING TO CLOUD DATABASE...</span>
                    </>
                  ) : (
                    <span>+ ADD PRODUCT TO CATALOG (SUPABASE SYNC)</span>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ================= MODAL: EDIT PRODUCT ================= */}
      {editingProduct && (
        <div className="admin-modal-backdrop active">
          <div className="admin-modal-panel admin-card max-w-[700px] w-full max-h-[90vh] overflow-hidden flex flex-col rounded-[36px] shadow-2xl bg-[#0f0f0f] border border-zinc-800 p-6 sm:p-8 space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-zinc-800">
              <div>
                <span className="text-[9px] font-mono-custom uppercase tracking-[0.25em] text-[#ff5500] font-bold block mb-1">
                  UPDATE INVENTORY
                </span>
                <h3 className="text-2xl font-black text-white font-sans uppercase tracking-tight">
                  Edit Product
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setEditingProduct(null)}
                className="w-10 h-10 rounded-xl bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white flex items-center justify-center border border-white/10"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
              </button>
            </div>

            <form onSubmit={handleSaveEditProduct} className="overflow-y-auto custom-scrollbar space-y-5 flex-1 pr-1">
              <div>
                <label className="text-[10px] font-bold text-zinc-400 uppercase font-mono-custom mb-1.5 block">
                  PRODUCT NAME
                </label>
                <input
                  type="text"
                  required
                  value={editName}
                  onChange={(e) => setEditName(e.target.value)}
                  className="w-full bg-[#161616] border border-zinc-800 focus:border-[#ff5500] rounded-xl px-4 py-3 text-white text-xs font-medium focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[10px] font-bold text-zinc-400 uppercase font-mono-custom mb-1.5 block">
                    BRAND
                  </label>
                  <input
                    type="text"
                    required
                    value={editBrand}
                    onChange={(e) => setEditBrand(e.target.value)}
                    className="w-full bg-[#161616] border border-zinc-800 focus:border-[#ff5500] rounded-xl px-4 py-3 text-white text-xs font-mono-custom uppercase font-bold focus:outline-none"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-bold text-zinc-400 uppercase font-mono-custom mb-1.5 block">
                    STOCK UNITS
                  </label>
                  <input
                    type="number"
                    min="0"
                    value={editQty}
                    onChange={(e) => setEditQty(e.target.value)}
                    className="w-full bg-[#161616] border border-zinc-800 focus:border-[#ff5500] rounded-xl px-4 py-3 text-white text-xs font-mono-custom font-bold focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[10px] font-bold text-[#ff5500] uppercase font-mono-custom mb-1.5 block">
                    SALE PRICE (₹)
                  </label>
                  <input
                    type="number"
                    min="0"
                    required
                    value={editSale}
                    onChange={(e) => setEditSale(e.target.value)}
                    className="w-full bg-[#161616] border border-[#ff5500]/40 focus:border-[#ff5500] rounded-xl px-4 py-3 text-white text-xs font-mono-custom font-bold focus:outline-none"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-bold text-zinc-400 uppercase font-mono-custom mb-1.5 block">
                    RETAIL MRP (₹)
                  </label>
                  <input
                    type="number"
                    min="0"
                    value={editMrp}
                    onChange={(e) => setEditMrp(e.target.value)}
                    className="w-full bg-[#161616] border border-zinc-800 focus:border-[#ff5500] rounded-xl px-4 py-3 text-white text-xs font-mono-custom font-bold focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="text-[10px] font-bold text-zinc-400 uppercase font-mono-custom mb-1.5 block">
                  BRIEF DESCRIPTION
                </label>
                <textarea
                  rows={2}
                  value={editDesc}
                  onChange={(e) => setEditDesc(e.target.value)}
                  className="w-full bg-[#161616] border border-zinc-800 focus:border-[#ff5500] rounded-xl p-3 text-white text-xs font-medium focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="btn-orange w-full py-3.5 rounded-2xl text-xs font-black uppercase tracking-wider font-mono-custom shadow-lg active:scale-98 flex items-center justify-center gap-2"
              >
                <span>SAVE PRODUCT CHANGES (SUPABASE SYNC)</span>
              </button>
            </form>
          </div>
        </div>
      )}

      {/* ================= MODAL: ADD CATEGORY ================= */}
      {showAddCategoryModal && (
        <div className="admin-modal-backdrop active">
          <div className="admin-modal-panel admin-card max-w-[640px] w-full overflow-hidden flex flex-col rounded-[40px] shadow-2xl bg-[#0f0f0f] border border-zinc-800 p-6 sm:p-8 space-y-6">
            <div className="flex items-center justify-between pb-2 border-b border-zinc-800">
              <div>
                <span className="text-[9px] font-mono-custom uppercase tracking-[0.25em] text-zinc-500 font-bold block mb-1">
                  NEW ENTRY
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-white font-sans uppercase tracking-tight">
                  Add Category
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setShowAddCategoryModal(false)}
                className="w-10 h-10 rounded-xl bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white flex items-center justify-center border border-white/10"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
              </button>
            </div>

            <form onSubmit={handleAddCategorySubmit} className="space-y-6">
              <div>
                <label className="text-[10px] font-bold text-zinc-400 uppercase font-mono-custom mb-2 block">
                  CATEGORY NAME <span className="text-[#ff5500]">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Air Tools"
                  value={newCatName}
                  onChange={(e) => setNewCatName(e.target.value)}
                  className="w-full bg-[#161616] border border-zinc-800 focus:border-[#ff5500] rounded-2xl px-5 py-4 text-white text-sm font-medium focus:outline-none"
                />
              </div>

              <div>
                <label className="text-[10px] font-bold text-zinc-400 uppercase font-mono-custom mb-2 block">
                  COVER IMAGE (URL)
                </label>
                <input
                  type="url"
                  placeholder="https://images.unsplash.com/photo-..."
                  value={newCatImage}
                  onChange={(e) => setNewCatImage(e.target.value)}
                  className="w-full bg-[#161616] border border-zinc-800 focus:border-[#ff5500] rounded-2xl px-5 py-4 text-white text-xs font-medium focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="btn-orange w-full py-4 rounded-3xl text-xs font-black uppercase tracking-wider font-mono-custom shadow-lg active:scale-98 flex items-center justify-center gap-2"
              >
                <span>+ CREATE CATEGORY IN DATABASE</span>
              </button>
            </form>
          </div>
        </div>
      )}

      {/* ================= MODAL: ADD SUBCATEGORY ================= */}
      {showAddSubcatModal && selectedParentCategory && (
        <div className="admin-modal-backdrop active">
          <div className="admin-modal-panel admin-card max-w-[540px] w-full overflow-hidden flex flex-col rounded-[32px] shadow-2xl bg-[#0f0f0f] border border-zinc-800 p-6 sm:p-8 space-y-6">
            <div className="flex items-center justify-between pb-2 border-b border-zinc-800">
              <div>
                <span className="text-[9px] font-mono-custom uppercase tracking-[0.25em] text-[#ff5500] font-bold block mb-1">
                  FOR {selectedParentCategory.name.toUpperCase()}
                </span>
                <h3 className="text-2xl font-black text-white font-sans uppercase tracking-tight">
                  Add Sub-Category
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setShowAddSubcatModal(false)}
                className="w-10 h-10 rounded-xl bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white flex items-center justify-center border border-white/10"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
              </button>
            </div>

            <form onSubmit={handleAddSubcatSubmit} className="space-y-6">
              <div>
                <label className="text-[10px] font-bold text-zinc-400 uppercase font-mono-custom mb-2 block">
                  SUB-CATEGORY NAME <span className="text-[#ff5500]">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Pneumatic Sanders"
                  value={newSubcatName}
                  onChange={(e) => setNewSubcatName(e.target.value)}
                  className="w-full bg-[#161616] border border-zinc-800 focus:border-[#ff5500] rounded-2xl px-5 py-3.5 text-white text-sm font-medium focus:outline-none"
                />
              </div>

              <div>
                <label className="text-[10px] font-bold text-zinc-400 uppercase font-mono-custom mb-2 block">
                  THUMBNAIL IMAGE (URL)
                </label>
                <input
                  type="url"
                  placeholder="https://images.unsplash.com/photo-..."
                  value={newSubcatImage}
                  onChange={(e) => setNewSubcatImage(e.target.value)}
                  className="w-full bg-[#161616] border border-zinc-800 focus:border-[#ff5500] rounded-2xl px-5 py-3.5 text-white text-xs font-medium focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="btn-orange w-full py-3.5 rounded-2xl text-xs font-black uppercase tracking-wider font-mono-custom shadow-lg active:scale-98 flex items-center justify-center gap-2"
              >
                <span>+ CREATE SUB-CATEGORY</span>
              </button>
            </form>
          </div>
        </div>
      )}

      {/* ================= MODAL: LIVE WEBCAM SNAPSHOT ================= */}
      {showWebcamModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-[#161616] border border-zinc-800 rounded-2xl p-5 max-w-lg w-full space-y-4 shadow-2xl">
            <div className="flex items-center justify-between pb-3 border-b border-zinc-800">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#ff5500] animate-ping"></span>
                <h4 className="text-sm font-black uppercase text-white font-sans">Live Camera Capture</h4>
              </div>
              <button
                type="button"
                onClick={closeWebcam}
                className="text-zinc-400 hover:text-white p-1 rounded-lg transition-colors"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
              </button>
            </div>
            
            <div className="relative bg-black rounded-xl overflow-hidden aspect-video flex items-center justify-center">
              <video ref={videoRef} autoPlay playsInline className="w-full h-full object-cover"></video>
            </div>

            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                type="button"
                onClick={closeWebcam}
                className="px-4 py-2 rounded-xl bg-zinc-900 text-zinc-400 hover:text-white text-xs font-bold font-mono-custom border border-zinc-800"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={captureSnapshot}
                className="btn-orange px-5 py-2 rounded-xl text-xs font-black uppercase tracking-wider flex items-center gap-2 font-mono-custom"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="3"/></svg>
                <span>Capture Photo</span>
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
