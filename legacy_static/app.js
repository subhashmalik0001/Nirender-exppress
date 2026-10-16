// Narindra Express - E-Commerce Application & Interactive Engine (Black-White-Orange Theme)

// --- PRODUCT CATALOG DATABASE ---
const PRODUCTS_DATA = [
  {
    id: "ntt-001",
    name: "Bosch GSB 500W Professional Impact Drill Machine",
    category: "power-tools",
    categoryName: "Power Tools",
    brand: "BOSCH",
    originalPrice: 3850,
    discountedPrice: 2890,
    rating: 4.9,
    reviewsCount: 128,
    image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=600&q=80",
    description: "Heavy-duty 500W motor drill for concrete, masonry, wood, and metal drilling. Ergonomic soft-grip handle with variable speed control switch.",
    specs: { Power: "500 Watts", "No-Load Speed": "0 - 2600 RPM", "Chuck Capacity": "10 mm", Weight: "1.5 kg" },
    inStock: true
  },
  {
    id: "ntt-002",
    name: "Makita 9557HN 840W 115mm Heavy Duty Angle Grinder",
    category: "power-tools",
    categoryName: "Power Tools",
    brand: "MAKITA",
    originalPrice: 4900,
    discountedPrice: 3750,
    rating: 4.8,
    reviewsCount: 94,
    image: "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?auto=format&fit=crop&w=600&q=80",
    description: "Compact angle grinder with powerful 840W motor for grinding, cutting, and deburring industrial metals and masonry.",
    specs: { Power: "840 Watts", "Wheel Diameter": "115 mm", "No-Load Speed": "11000 RPM", Weight: "2.1 kg" },
    inStock: true
  },
  {
    id: "ntt-003",
    name: "DeWalt DCD771C2 18V Cordless Drill/Driver Kit",
    category: "power-tools",
    categoryName: "Power Tools",
    brand: "DEWALT",
    originalPrice: 12500,
    discountedPrice: 9490,
    rating: 5.0,
    reviewsCount: 215,
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80",
    description: "High performance cordless drill driver with 2x 18V XR Li-Ion battery packs, 16 position torque control, and LED work light.",
    specs: { Voltage: "18V Lithium-Ion", Torque: "42 Nm", "Battery Capacity": "1.3 Ah", Speed: "0-450 / 0-1500 RPM" },
    inStock: true
  },
  {
    id: "ntt-004",
    name: "Milwaukee Fuel M18 165mm Heavy Duty Circular Saw",
    category: "power-tools",
    categoryName: "Power Tools",
    brand: "MILWAUKEE",
    originalPrice: 24000,
    discountedPrice: 18900,
    rating: 4.9,
    reviewsCount: 76,
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=600&q=80",
    description: "POWERSTATE brushless motor delivers faster cutting speeds and maximum durability for professional carpenters and framers.",
    specs: { Voltage: "18V", "Blade Diameter": "165 mm", "Max Cut Depth": "57 mm", Speed: "5000 RPM" },
    inStock: true
  },
  {
    id: "ntt-005",
    name: "Hilti TE 30-AVR Heavy Duty SDS-Plus Rotary Hammer",
    category: "power-tools",
    categoryName: "Power Tools",
    brand: "HILTI",
    originalPrice: 34500,
    discountedPrice: 28990,
    rating: 5.0,
    reviewsCount: 62,
    image: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=600&q=80",
    description: "Versatile 3-mode SDS Plus rotary hammer with Active Vibration Reduction (AVR) for heavy chiseling and concrete drilling.",
    specs: { Power: "850 Watts", "Single Impact Energy": "3.6 J", "Hammering Frequency": "4500 bpm", Weight: "4.2 kg" },
    inStock: true
  },
  {
    id: "ntt-006",
    name: "iWELD 200A Single Phase Inverter ARC Welding Machine",
    category: "welding",
    categoryName: "Welding Equipment",
    brand: "IWELD",
    originalPrice: 9500,
    discountedPrice: 6990,
    rating: 4.8,
    reviewsCount: 110,
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=600&q=80",
    description: "IGBT inverter technology ARC welder with digital current display, thermal overload protection, and anti-stick function.",
    specs: { "Current Range": "20-200 Amps", "Duty Cycle": "60%", Voltage: "220V Single Phase", Weight: "4.8 kg" },
    inStock: true
  },
  {
    id: "ntt-007",
    name: "ESAB Sentinel A50 Auto-Darkening Welding Helmet",
    category: "welding",
    categoryName: "Welding Equipment",
    brand: "ESAB",
    originalPrice: 16800,
    discountedPrice: 13900,
    rating: 4.9,
    reviewsCount: 48,
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=600&q=80",
    description: "Revolutionary halo design welding shield with high optical clarity 1/1/1/2 lens, external grind button, and color touch screen control panel.",
    specs: { Shade: "5-13", "Switching Time": "1/25000 sec", "Sensors": "4 Arc Sensors", Weight: "640 g" },
    inStock: true
  },
  {
    id: "ntt-008",
    name: "Taparia 1272 Professional Mechanical Tool Set (72 Pcs)",
    category: "hand-tools",
    categoryName: "Hand Tools",
    brand: "TAPARIA",
    originalPrice: 7500,
    discountedPrice: 5850,
    rating: 4.9,
    reviewsCount: 310,
    image: "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?auto=format&fit=crop&w=600&q=80",
    description: "Comprehensive 72-piece chrome vanadium steel socket and bit set housed in a blow-molded heavy-duty carrying case.",
    specs: { "Piece Count": "72 Pieces", Material: "Chrome Vanadium Steel", Finish: "Mirror Chrome", Drive: "1/4\" & 1/2\"" },
    inStock: true
  },
  {
    id: "ntt-009",
    name: "Stanley Heavy Duty 6-Way Bench Vice 150mm",
    category: "hand-tools",
    categoryName: "Hand Tools",
    brand: "STANLEY",
    originalPrice: 8900,
    discountedPrice: 6990,
    rating: 4.7,
    reviewsCount: 83,
    image: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=600&q=80",
    description: "Forged iron swiveling bench vice designed for high clamping forces on steel fabrications, pipe cutting, and heavy assembly.",
    specs: { "Jaw Width": "150 mm", "Clamping Force": "30 kN", Material: "Cast Iron", Swivel: "360 Degrees" },
    inStock: true
  },
  {
    id: "ntt-010",
    name: "Mitutoyo 500-196-30 Absolute Digimatic Vernier Caliper 150mm",
    category: "measuring",
    categoryName: "Measuring & Precision",
    brand: "MITUTOYO",
    originalPrice: 11200,
    discountedPrice: 8950,
    rating: 5.0,
    reviewsCount: 175,
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80",
    description: "Industry standard Japanese electronic digital caliper for high-precision metric and inch dimensions with origin-set feature.",
    specs: { Range: "0-150 mm", Accuracy: "±0.02 mm", Resolution: "0.01 mm", Display: "LCD Digimatic" },
    inStock: true
  },
  {
    id: "ntt-011",
    name: "Bosch GLM 50-27 CG Professional Green Laser Measure",
    category: "measuring",
    categoryName: "Measuring & Precision",
    brand: "BOSCH",
    originalPrice: 14500,
    discountedPrice: 11800,
    rating: 4.9,
    reviewsCount: 92,
    image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=600&q=80",
    description: "Rugged laser distance meter with green laser technology for maximum visibility on rough construction job sites.",
    specs: { "Measuring Range": "0.05 - 50 m", Accuracy: "±1.5 mm", "Protection Rating": "IP65 Waterproof", Connectivity: "Bluetooth 4.2" },
    inStock: true
  },
  {
    id: "ntt-012",
    name: "Makita 100mm Diamond Cutting Wheel Discs (Pack of 10)",
    category: "abrasives",
    categoryName: "Cutting & Abrasives",
    brand: "MAKITA",
    originalPrice: 1950,
    discountedPrice: 1390,
    rating: 4.8,
    reviewsCount: 140,
    image: "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?auto=format&fit=crop&w=600&q=80",
    description: "Segmented diamond cutting blade set for high-speed cutting of granite, marble, reinforced concrete, and ceramic tiles.",
    specs: { Diameter: "100 mm", "Bore Diameter": "20/16 mm", "Max RPM": "15300", Pack: "10 Discs" },
    inStock: true
  }
];

// --- GLOBAL APPLICATION STATE ---
const state = {
  products: [],
  filteredProducts: [],
  cart: [],
  checkoutItems: [],
  categoryFilter: "all",
  brandFilter: "all",
  searchQuery: "",
  adminSearchQuery: "",
  selectedProductForCall: null,
  selectedProductForView: null,
  selectedProductForQty: null,
  selectedQtyCount: 1
};

// --- ADMIN AUTHENTICATION ENGINE (TEMPORARY CLIENT-SIDE GATE) ---
// Secure SHA-256 hash for administrator credentials.
// Corresponds to admin@123 (Length: 64 hex characters)
const DEFAULT_ADMIN_HASH = "7676aaafb027c825bd9abab78b234070e702752f625b752e55e55b48e607e358";

function getAdminPasswordHash() {
  return DEFAULT_ADMIN_HASH;
}

function isAdminLoggedIn() {
  try {
    return localStorage.getItem("ntt_admin_logged_in") === "true";
  } catch (e) {
    return false;
  }
}

async function hashPasswordSHA256(str) {
  const encoder = new TextEncoder();
  const data = encoder.encode(str);
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, "0")).join("");
}

async function handleAdminLoginSubmit(e) {
  if (e) e.preventDefault();
  const identityInput = document.getElementById("admin-login-identity");
  const passInput = document.getElementById("admin-login-password");
  const errorBox = document.getElementById("admin-login-error");
  const errorText = document.getElementById("admin-login-error-text");
  const btn = document.getElementById("admin-login-btn");

  if (!identityInput || !passInput) return;

  const identity = identityInput.value.trim().toLowerCase();
  const password = passInput.value;

  if (!identity || !password) {
    if (errorBox) {
      if (errorText) errorText.textContent = "Please enter both email/username and password.";
      errorBox.classList.remove("hidden");
    }
    return;
  }

  if (btn) {
    btn.disabled = true;
    btn.classList.add("opacity-75");
  }
  if (errorBox) errorBox.classList.add("hidden");

  try {
    const inputHash = await hashPasswordSHA256(password);
    const targetHash = getAdminPasswordHash();

    // Verify identity & password hash
    const isIdentityProvided = identity.length > 0;
    const isMatch = (inputHash === targetHash);

    if (isIdentityProvided && isMatch) {
      localStorage.setItem("ntt_admin_logged_in", "true");
      const isSub = window.location.pathname.includes("/admin/login");
      const target = (window.location.protocol === "file:") ? (isSub ? "../index.html" : "admin/index.html") : "/admin";
      window.location.href = target;
      return;
    } else {
      if (errorBox) {
        if (errorText) errorText.textContent = "Invalid email/username or password. Please verify your credentials and try again.";
        errorBox.classList.remove("hidden");
      }
    }
  } catch (err) {
    if (errorBox) {
      if (errorText) errorText.textContent = "Authentication error occurred: " + err.message;
      errorBox.classList.remove("hidden");
    }
  } finally {
    if (btn) {
      btn.disabled = false;
      btn.classList.remove("opacity-75");
    }
  }
}

function handleAdminLogout() {
  try {
    localStorage.removeItem("ntt_admin_logged_in");
  } catch (e) {}
  const isSub = window.location.pathname.includes("/admin/");
  const target = isSub ? "login/index.html" : (window.location.protocol === "file:" ? "admin/login.html" : "/admin/login");
  window.location.href = target;
}

function checkAdminRouteGate() {
  const path = window.location.pathname;
  const isAdminRoute = path === "/admin" ||
                       path === "/dashboard" ||
                       path.endsWith("/admin.html") ||
                       path.endsWith("/admin/index.html") ||
                       path.endsWith("/admin/");

  if (isAdminRoute) {
    if (!isAdminLoggedIn()) {
      const isSub = path.includes("/admin/");
      const target = isSub ? "login/index.html" : (window.location.protocol === "file:" ? "admin/login.html" : "/admin/login");
      window.location.replace(target);
    }
  }
}

// Helper: resolve link paths on file:// protocol for local browsing
function resolveLinksForFileProtocol() {
  if (window.location.protocol === "file:") {
    const isSubdir = window.location.pathname.includes("/products/") ||
                     window.location.pathname.includes("/about/") ||
                     window.location.pathname.includes("/contact/") ||
                     window.location.pathname.includes("/admin/");
    const prefix = isSubdir ? "../" : "";
    document.querySelectorAll("a[href^='/']").forEach(a => {
      const path = a.getAttribute("href");
      if (path === "/") a.href = prefix + "index.html";
      else if (path === "/products") a.href = prefix + "products/index.html";
      else if (path === "/about") a.href = prefix + "about/index.html";
      else if (path === "/contact") a.href = prefix + "contact/index.html";
      else if (path === "/admin/login") a.href = prefix + "admin/login/index.html";
      else if (path === "/admin") a.href = prefix + "admin/index.html";
    });
  }
}

// --- INITIALIZATION ENGINE ---
document.addEventListener("DOMContentLoaded", () => {
  checkAdminRouteGate();
  resolveLinksForFileProtocol();
  loadSavedProducts();
  loadSavedCart();
  setupEventListeners();
  loadAdminCategories();
  renderProducts();
  renderFeaturedProducts();
  renderAdminProducts();
  renderAdminBrands();
  renderAdminCategoriesTree();
  renderAdminDashboardStats();
  renderAdminOrders();
  syncAdminOrdersFromCloud();
  syncProductsFromCloud();
  syncCategoriesFromCloud();
  initAddProductForm();
  updateCartBadge();

  // Dismiss Opening Splash Screen smoothly after initial load
  setTimeout(() => {
    const splash = document.getElementById("opening-splash");
    if (splash) {
      splash.classList.add("fade-out");
    }
  }, 900);
});

// Load products from localStorage or fallback to defaults
function loadSavedProducts() {
  const saved = localStorage.getItem("ntt_custom_products");
  if (saved) {
    try {
      state.products = JSON.parse(saved);
    } catch (e) {
      state.products = [...PRODUCTS_DATA];
    }
  } else {
    state.products = [...PRODUCTS_DATA];
  }
  state.filteredProducts = [...state.products];
}

function saveProducts() {
  localStorage.setItem("ntt_custom_products", JSON.stringify(state.products));
}

// Load cart from localStorage
function loadSavedCart() {
  const saved = localStorage.getItem("ntt_cart");
  if (saved) {
    try {
      state.cart = JSON.parse(saved);
    } catch (e) {
      state.cart = [];
    }
  }
}

// --- EVENT LISTENERS ---
function setupEventListeners() {
  // Category Pill Buttons
  const categoryButtons = document.querySelectorAll(".cat-filter-btn");
  categoryButtons.forEach(btn => {
    btn.addEventListener("click", (e) => {
      const category = e.target.getAttribute("data-category");
      state.categoryFilter = category;
      
      categoryButtons.forEach(b => b.classList.remove("active"));
      e.target.classList.add("active");

      applyFilters();
    });
  });

  // Search Bar input
  const searchInput = document.getElementById("search-input");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      state.searchQuery = e.target.value.toLowerCase().trim();
      applyFilters();
    });
  }

  // Brand selector
  const brandSelect = document.getElementById("brand-select");
  if (brandSelect) {
    brandSelect.addEventListener("change", (e) => {
      state.brandFilter = e.target.value;
      applyFilters();
    });
  }

  // Cart Drawer open/close
  document.getElementById("btn-open-cart")?.addEventListener("click", openCartDrawer);
  document.getElementById("btn-close-cart")?.addEventListener("click", closeCartDrawer);
  document.getElementById("cart-backdrop")?.addEventListener("click", closeCartDrawer);

  // Mobile Navigation Drawer open/close
  const btnMobileMenu = document.getElementById("btn-mobile-menu");
  const btnCloseMobileMenu = document.getElementById("btn-close-mobile-menu");
  const mobileNavBackdrop = document.getElementById("mobile-nav-backdrop");
  const mobileNavDrawer = document.getElementById("mobile-nav-drawer");

  function openMobileNav() {
    mobileNavBackdrop?.classList.add("active");
    mobileNavDrawer?.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  function closeMobileNav() {
    mobileNavBackdrop?.classList.remove("active");
    mobileNavDrawer?.classList.remove("active");
    document.body.style.overflow = "";
  }

  btnMobileMenu?.addEventListener("click", openMobileNav);
  btnCloseMobileMenu?.addEventListener("click", closeMobileNav);
  mobileNavBackdrop?.addEventListener("click", closeMobileNav);

  document.querySelectorAll(".mobile-nav-item, #mobile-nav-drawer a")?.forEach(link => {
    link.addEventListener("click", closeMobileNav);
  });

  window.openMobileNav = openMobileNav;
  window.closeMobileNav = closeMobileNav;

  // Call Modal backdrop close
  document.getElementById("call-modal-backdrop")?.addEventListener("click", closeCallModal);
  document.getElementById("btn-close-call-modal")?.addEventListener("click", closeCallModal);

  // Quick View Modal backdrop close
  document.getElementById("view-modal-backdrop")?.addEventListener("click", closeViewModal);
  document.getElementById("btn-close-view-modal")?.addEventListener("click", closeViewModal);

  // Quantity Modal Listeners
  document.getElementById("btn-close-qty-modal")?.addEventListener("click", closeQuantityModal);
  document.getElementById("qty-modal-backdrop")?.addEventListener("click", closeQuantityModal);
  document.getElementById("qty-btn-minus")?.addEventListener("click", () => changeQtyCount(-1));
  document.getElementById("qty-btn-plus")?.addEventListener("click", () => changeQtyCount(1));
  document.getElementById("qty-btn-confirm")?.addEventListener("click", confirmAddToCart);

  const qtyInput = document.getElementById("qty-modal-input");
  if (qtyInput) {
    qtyInput.addEventListener("input", (e) => {
      let val = parseInt(e.target.value, 10);
      if (isNaN(val) || val < 1) val = 1;
      state.selectedQtyCount = val;
      updateQtyModalSubtotal();
    });
  }

  // Callback form submission
  document.getElementById("callback-form")?.addEventListener("submit", handleCallbackSubmit);

  // Checkout button & modal listeners
  document.getElementById("btn-checkout")?.addEventListener("click", handleCheckout);
  document.getElementById("btn-close-checkout")?.addEventListener("click", closeCheckoutModal);
  document.getElementById("checkout-backdrop")?.addEventListener("click", closeCheckoutModal);
  document.getElementById("checkout-form")?.addEventListener("submit", handleCheckoutSubmit);

  // Order Success Modal listeners
  document.getElementById("btn-close-order-success")?.addEventListener("click", closeOrderSuccessModal);
  document.getElementById("order-success-backdrop")?.addEventListener("click", closeOrderSuccessModal);

  // Admin Inventory Search
  const adminSearchInput = document.getElementById("admin-search-input");
  if (adminSearchInput) {
    adminSearchInput.addEventListener("input", (e) => {
      state.adminSearchQuery = e.target.value.toLowerCase().trim();
      renderAdminProducts();
    });
  }

  // Admin Category Tree Search
  const categorySearchInput = document.getElementById("category-search-input");
  if (categorySearchInput) {
    categorySearchInput.addEventListener("input", () => {
      renderAdminCategoriesTree();
    });
  }
}

// --- FILTERING ENGINE ---
function applyFilters() {
  state.filteredProducts = state.products.filter(item => {
    const matchesCategory = state.categoryFilter === "all" || item.category === state.categoryFilter;
    const matchesBrand = state.brandFilter === "all" || item.brand === state.brandFilter;
    const matchesSearch = !state.searchQuery || 
                          item.name.toLowerCase().includes(state.searchQuery) ||
                          item.brand.toLowerCase().includes(state.searchQuery) ||
                          item.categoryName.toLowerCase().includes(state.searchQuery);
    return matchesCategory && matchesBrand && matchesSearch;
  });

  renderProducts();
}

// --- BLINKIT-STYLE CART STEPPER HELPERS ---
function getProductCartQty(productId) {
  const item = state.cart.find(i => i.id === productId);
  return item ? item.quantity : 0;
}

function renderCardCartButton(productId) {
  const qty = getProductCartQty(productId);
  if (qty <= 0) {
    return `
      <button type="button" class="btn-cart animate-squish w-full" onclick="handleCardStep('${productId}', 1, event)" title="Add to cart">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
        <span>ADD</span>
      </button>
    `;
  } else {
    return `
      <div class="stepper-container animate-scale-in" data-stepper-id="${productId}">
        <button type="button" class="stepper-btn stepper-btn-minus" onclick="handleCardStep('${productId}', -1, event)" title="Decrease quantity" aria-label="Decrease quantity">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><line x1="5" y1="12" x2="19" y2="12"></line></svg>
        </button>
        <span class="stepper-qty" id="stepper-val-${productId}">${qty}</span>
        <button type="button" class="stepper-btn stepper-btn-plus" onclick="handleCardStep('${productId}', 1, event)" title="Increase quantity" aria-label="Increase quantity">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
        </button>
      </div>
    `;
  }
}

function handleCardStep(productId, delta, event) {
  if (event) {
    event.stopPropagation();
    event.preventDefault();
  }
  const product = state.products.find(p => p.id === productId);
  if (!product) return;

  const existingItem = state.cart.find(i => i.id === productId);

  if (delta > 0) {
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      state.cart.push({
        id: product.id,
        name: product.name,
        brand: product.brand,
        price: product.discountedPrice,
        image: product.image,
        quantity: 1
      });
    }
  } else if (delta < 0) {
    if (existingItem) {
      existingItem.quantity -= 1;
      if (existingItem.quantity <= 0) {
        state.cart = state.cart.filter(i => i.id !== productId);
      }
    }
  }

  saveCart();
  updateCartBadge();
  renderCartDrawer();
  updateAllProductSteppers();
}

function updateAllProductSteppers() {
  document.querySelectorAll("[data-card-btn-container]").forEach(container => {
    const pid = container.getAttribute("data-card-btn-container");
    if (pid) {
      container.innerHTML = renderCardCartButton(pid);
    }
  });
}

// --- RENDER PRODUCTS GRID ---
function renderProducts() {
  const gridContainer = document.getElementById("products-grid");
  const countSpan = document.getElementById("products-count");
  if (!gridContainer) return;

  if (countSpan) {
    countSpan.textContent = `${state.filteredProducts.length} Items Found`;
  }

  if (state.filteredProducts.length === 0) {
    gridContainer.innerHTML = `
      <div class="col-span-full py-16 text-center">
        <div class="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#161616] border border-[#2a2a2a] text-[#ff5500] mb-4">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
        </div>
        <h3 class="text-lg font-extrabold text-white uppercase font-display">No Equipment Found</h3>
        <p class="text-xs text-zinc-400 mt-1 font-medium">Try broadening your search query or clearing selected category filters.</p>
        <button onclick="clearAllFilters()" class="mt-4 px-5 py-2 text-xs font-bold text-[#ff5500] underline uppercase tracking-wider">Reset All Filters</button>
      </div>
    `;
    return;
  }

  gridContainer.innerHTML = state.filteredProducts.map((product, index) => {
    const savings = product.originalPrice - product.discountedPrice;
    const delayClass = index < 8 ? `delay-${((index % 4) + 1) * 100}` : '';
    
    return `
      <div class="product-card rounded-2xl p-4 flex flex-col justify-between relative shadow-lg animate-scale-in ${delayClass}">
        
        <!-- Product Image & Badges -->
        <div>
          <div class="product-card-img-wrapper aspect-4/3 mb-4 p-4 flex items-center justify-center cursor-pointer bg-white rounded-xl" onclick="openViewModal('${product.id}')">
            <img src="${product.image}" alt="${product.name}" class="max-h-full max-w-full object-contain" />
            
            ${savings > 0 ? `
              <span class="absolute top-2 right-2 bg-[#ff5500] text-white text-[9px] font-black uppercase tracking-wider px-2.5 py-1 rounded-md shadow-md">
                Save ₹${savings.toLocaleString('en-IN')}
              </span>
            ` : ''}
          </div>

          <!-- Brand & Rating -->
          <div class="flex items-center justify-between mb-2">
            <span class="text-[10px] font-black uppercase tracking-widest text-[#ff5500] font-mono-custom">${product.brand}</span>
            <div class="flex items-center gap-1 bg-[#121212] px-2 py-0.5 rounded-md border border-[#2a2a2a]">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="#ff5500" stroke="#ff5500"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              <span class="text-[10px] font-bold text-zinc-300 font-mono-custom">${product.rating}</span>
            </div>
          </div>

          <!-- Product Title -->
          <h3 class="text-sm font-bold text-white leading-snug mb-3 line-clamp-2 cursor-pointer hover:text-[#ff5500] transition-colors" onclick="openViewModal('${product.id}')">
            ${product.name}
          </h3>
        </div>

        <!-- Pricing & Dual Action Buttons (Cart + Call Now) -->
        <div class="pt-3 border-t border-[#2a2a2a]">
          <div class="flex items-baseline gap-2 mb-3">
            <span class="text-lg font-black text-white tracking-tight font-mono-custom">₹${product.discountedPrice.toLocaleString('en-IN')}</span>
            ${product.originalPrice > product.discountedPrice ? `
              <span class="text-xs font-semibold text-zinc-500 line-through font-mono-custom">₹${product.originalPrice.toLocaleString('en-IN')}</span>
            ` : ''}
          </div>

          <!-- DUAL SIDE-BY-SIDE BUTTONS: ADD TO CART STEPPER & BUY NOW -->
          <div class="action-buttons-group">
            <div data-card-btn-container="${product.id}" class="w-full">
              ${renderCardCartButton(product.id)}
            </div>
            
            <button class="btn-buy-now animate-squish animate-wiggle" onclick="openCheckoutModal('${product.id}')">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
              <span>Buy Now</span>
            </button>
          </div>
        </div>

      </div>
    `;
  }).join("");
}

function clearAllFilters() {
  state.categoryFilter = "all";
  state.brandFilter = "all";
  state.searchQuery = "";
  
  const searchInput = document.getElementById("search-input");
  if (searchInput) searchInput.value = "";
  
  const brandSelect = document.getElementById("brand-select");
  if (brandSelect) brandSelect.value = "all";

  const categoryButtons = document.querySelectorAll(".cat-filter-btn");
  categoryButtons.forEach(b => b.classList.remove("active"));
  if (categoryButtons[0]) {
    categoryButtons[0].classList.add("active");
  }

  applyFilters();
}

// --- RENDER FEATURED PRODUCTS (HOME PAGE PREVIEW) ---
function renderFeaturedProducts() {
  const gridContainer = document.getElementById("featured-products-grid");
  if (!gridContainer) return;

  const featured = state.products.slice(0, 4);
  gridContainer.innerHTML = featured.map((product, index) => {
    const savings = product.originalPrice - product.discountedPrice;
    const delayClass = index < 4 ? `delay-${(index + 1) * 100}` : '';

    return `
      <div class="product-card rounded-2xl p-4 flex flex-col justify-between relative shadow-lg animate-scale-in ${delayClass}">
        <div>
          <div class="product-card-img-wrapper aspect-4/3 mb-4 p-4 flex items-center justify-center cursor-pointer bg-white rounded-xl" onclick="openViewModal('${product.id}')">
            <img src="${product.image}" alt="${product.name}" class="max-h-full max-w-full object-contain" />
            ${savings > 0 ? `
              <span class="absolute top-2 right-2 bg-[#ff5500] text-white text-[9px] font-black uppercase tracking-wider px-2.5 py-1 rounded-md shadow-md">
                Save ₹${savings.toLocaleString('en-IN')}
              </span>
            ` : ''}
          </div>
          <div class="flex items-center justify-between mb-2">
            <span class="text-[10px] font-black uppercase tracking-widest text-[#ff5500] font-mono-custom">${product.brand}</span>
            <div class="flex items-center gap-1 bg-[#121212] px-2 py-0.5 rounded-md border border-[#2a2a2a]">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="#ff5500" stroke="#ff5500"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              <span class="text-[10px] font-bold text-zinc-300 font-mono-custom">${product.rating}</span>
            </div>
          </div>
          <h3 class="text-sm font-bold text-white leading-snug mb-3 line-clamp-2 cursor-pointer hover:text-[#ff5500] transition-colors" onclick="openViewModal('${product.id}')">
            ${product.name}
          </h3>
        </div>
        <div class="pt-3 border-t border-[#2a2a2a]">
          <div class="flex items-baseline gap-2 mb-3">
            <span class="text-lg font-black text-white tracking-tight font-mono-custom">₹${product.discountedPrice.toLocaleString('en-IN')}</span>
            ${product.originalPrice > product.discountedPrice ? `
              <span class="text-xs font-semibold text-zinc-500 line-through font-mono-custom">₹${product.originalPrice.toLocaleString('en-IN')}</span>
            ` : ''}
          </div>
          <div class="action-buttons-group">
            <div data-card-btn-container="${product.id}" class="w-full">
              ${renderCardCartButton(product.id)}
            </div>
            <button class="btn-buy-now animate-squish animate-wiggle" onclick="openCheckoutModal('${product.id}')">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
              <span>Buy Now</span>
            </button>
          </div>
        </div>
      </div>
    `;
  }).join("");
}


// --- CALL NOW MODAL LOGIC (User Request) ---
function openCallModal(productId) {
  const product = state.products.find(p => p.id === productId);
  if (!product) return;

  state.selectedProductForCall = product;

  document.getElementById("modal-product-name").textContent = product.name;
  document.getElementById("modal-product-price").textContent = `₹${product.discountedPrice.toLocaleString('en-IN')}`;
  document.getElementById("modal-product-img").src = product.image;

  // Set direct telephone href
  const phoneBtn = document.getElementById("modal-btn-direct-call");
  if (phoneBtn) {
    phoneBtn.href = `tel:+918283848559`;
  }

  // Set WhatsApp query link
  const waBtn = document.getElementById("modal-btn-whatsapp");
  if (waBtn) {
    const waText = encodeURIComponent(`Hi Narindra Express, I am interested in purchasing: ${product.name} (Price: ₹${product.discountedPrice}). Please provide availability & wholesale bulk quotation.`);
    waBtn.href = `https://wa.me/918283848559?text=${waText}`;
  }

  const backdrop = document.getElementById("call-modal-backdrop");
  const modal = document.getElementById("call-modal");
  
  if (backdrop && modal) {
    backdrop.classList.add("active");
    modal.classList.add("active");
  }
}

function closeCallModal() {
  const backdrop = document.getElementById("call-modal-backdrop");
  const modal = document.getElementById("call-modal");
  
  if (backdrop && modal) {
    backdrop.classList.remove("active");
    modal.classList.remove("active");
  }
}

function handleCallbackSubmit(e) {
  e.preventDefault();
  const phoneInput = document.getElementById("callback-phone")?.value;
  const nameInput = document.getElementById("callback-name")?.value;

  showToast(`Callback request submitted for ${nameInput || 'Valued Customer'} (${phoneInput})! Our team will call you within 15 minutes.`);
  closeCallModal();
}

// --- PRODUCT QUICK VIEW MODAL ENGINE ---
function openViewModal(productId) {
  const product = state.products.find(p => p.id === productId);
  if (!product) return;

  state.selectedProductForView = product;

  document.getElementById("view-product-brand").textContent = product.brand;
  document.getElementById("view-product-name").textContent = product.name;
  document.getElementById("view-product-price").textContent = `₹${product.discountedPrice.toLocaleString('en-IN')}`;
  document.getElementById("view-product-mrp").textContent = product.originalPrice > product.discountedPrice ? `₹${product.originalPrice.toLocaleString('en-IN')}` : "";
  document.getElementById("view-product-desc").textContent = product.description;
  document.getElementById("view-product-img").src = product.image;

  // Render specs
  const specsContainer = document.getElementById("view-product-specs");
  if (specsContainer && product.specs) {
    specsContainer.innerHTML = Object.entries(product.specs).map(([key, val]) => `
      <div class="flex justify-between py-1.5 border-b border-[#2a2a2a] text-xs">
        <span class="text-zinc-400 font-medium">${key}</span>
        <span class="text-white font-bold font-mono-custom">${val}</span>
      </div>
    `).join("");
  }

  // Set modal action buttons
  const viewCartBtn = document.getElementById("view-btn-cart");
  if (viewCartBtn) {
    viewCartBtn.onclick = () => {
      closeViewModal();
      openQuantityModal(product.id);
    };
  }

  const viewCallBtn = document.getElementById("view-btn-call");
  if (viewCallBtn) {
    viewCallBtn.onclick = () => {
      closeViewModal();
      openCheckoutModal(product.id);
    };
  }

  const backdrop = document.getElementById("view-modal-backdrop");
  const modal = document.getElementById("view-modal");
  
  if (backdrop && modal) {
    backdrop.classList.add("active");
    modal.classList.add("active");
  }
}

function closeViewModal() {
  const backdrop = document.getElementById("view-modal-backdrop");
  const modal = document.getElementById("view-modal");
  
  if (backdrop && modal) {
    backdrop.classList.remove("active");
    modal.classList.remove("active");
  }
}

// --- CART MANAGEMENT & DRAWER ---
function addToCart(productId, quantity = 1) {
  const product = state.products.find(p => p.id === productId);
  if (!product) return;

  const numQty = Math.max(1, parseInt(quantity, 10) || 1);

  const existingItem = state.cart.find(item => item.id === productId);
  if (existingItem) {
    existingItem.quantity += numQty;
  } else {
    state.cart.push({
      id: product.id,
      name: product.name,
      brand: product.brand,
      price: product.discountedPrice,
      image: product.image,
      quantity: numQty
    });
  }

  saveCart();
  updateCartBadge();
  renderCartDrawer();
  openCartDrawer();
  updateAllProductSteppers();
  showToast(`Added ${numQty}x "${product.name.slice(0, 20)}..." to cart!`);
}

function updateQuantity(productId, delta) {
  const item = state.cart.find(i => i.id === productId);
  if (!item) return;

  item.quantity += delta;
  if (item.quantity <= 0) {
    state.cart = state.cart.filter(i => i.id !== productId);
  }

  saveCart();
  updateCartBadge();
  renderCartDrawer();
  updateAllProductSteppers();
}

function removeFromCart(productId) {
  state.cart = state.cart.filter(i => i.id !== productId);
  saveCart();
  updateCartBadge();
  renderCartDrawer();
  updateAllProductSteppers();
}

function saveCart() {
  localStorage.setItem("ntt_cart", JSON.stringify(state.cart));
}

function updateCartBadge() {
  const count = state.cart.reduce((sum, item) => sum + item.quantity, 0);
  const badge = document.getElementById("cart-badge");
  if (badge) {
    badge.textContent = count;
    badge.style.display = count > 0 ? "flex" : "none";
  }
  const label = document.getElementById("cart-btn-label");
  if (label) {
    if (count === 0) {
      label.textContent = "CART · 0 ITEMS";
    } else if (count === 1) {
      label.textContent = "CART · 1 ITEM";
    } else {
      label.textContent = `CART · ${count} ITEMS`;
    }
  }
}

function openCartDrawer() {
  renderCartDrawer();
  document.getElementById("cart-backdrop")?.classList.add("active");
  document.getElementById("cart-drawer")?.classList.add("active");
}

function closeCartDrawer() {
  document.getElementById("cart-backdrop")?.classList.remove("active");
  document.getElementById("cart-drawer")?.classList.remove("active");
}

function renderCartDrawer() {
  const container = document.getElementById("cart-items-list");
  const subtotalSpan = document.getElementById("cart-subtotal");
  const gstSpan = document.getElementById("cart-gst");
  const totalSpan = document.getElementById("cart-total");

  if (!container) return;

  if (state.cart.length === 0) {
    container.innerHTML = `
      <div class="py-16 text-center text-zinc-400 flex flex-col items-center">
        <svg class="mb-4 opacity-40 text-[#ff5500]" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
        <p class="font-black uppercase text-sm tracking-wider text-white font-display mb-2">Your bag is empty</p>
        <p class="text-xs text-zinc-400 mb-6 font-medium">Explore genuine pro-grade industrial machinery and tools.</p>
        <a href="/products" onclick="closeCartDrawer();" class="btn-orange text-xs font-black uppercase tracking-widest px-6 py-3 rounded-xl shadow-lg active:scale-95 inline-block">
          Explore Products
        </a>
      </div>
    `;
    if (subtotalSpan) subtotalSpan.textContent = "₹0";
    if (gstSpan) gstSpan.textContent = "₹0";
    if (totalSpan) totalSpan.textContent = "₹0";
    return;
  }

  let subtotal = 0;

  container.innerHTML = state.cart.map(item => {
    const itemTotal = item.price * item.quantity;
    subtotal += itemTotal;

    return `
      <div class="flex items-center gap-3 p-3 bg-[#161616] rounded-xl border border-[#2a2a2a]">
        <img src="${item.image}" alt="${item.name}" class="w-16 h-16 object-contain bg-white rounded-lg p-1 border border-[#2a2a2a]" />
        <div class="flex-1 min-w-0">
          <span class="text-[9px] font-black uppercase tracking-widest text-[#ff5500] font-mono-custom">${item.brand}</span>
          <h4 class="text-xs font-bold text-white truncate">${item.name}</h4>
          <span class="text-xs font-black text-white font-mono-custom mt-1 block">₹${item.price.toLocaleString('en-IN')}</span>
        </div>
        <div class="flex flex-col items-end gap-2">
          <button onclick="removeFromCart('${item.id}')" class="text-zinc-400 hover:text-red-500 p-1 transition-colors">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>
          <div class="flex items-center border border-[#2a2a2a] rounded-md bg-[#0a0a0a]">
            <button onclick="updateQuantity('${item.id}', -1)" class="px-2 py-0.5 text-xs font-bold text-zinc-300 hover:bg-[#1e1e1e]">-</button>
            <span class="px-2 text-xs font-bold font-mono-custom text-white">${item.quantity}</span>
            <button onclick="updateQuantity('${item.id}', 1)" class="px-2 py-0.5 text-xs font-bold text-zinc-300 hover:bg-[#1e1e1e]">+</button>
          </div>
        </div>
      </div>
    `;
  }).join("");

  const shipping = subtotal > 0 ? 50 : 0;
  const grandTotal = subtotal + shipping;

  if (subtotalSpan) subtotalSpan.textContent = `₹${subtotal.toLocaleString('en-IN')}`;
  if (gstSpan) gstSpan.textContent = "₹0";
  const shippingSpan = document.getElementById("cart-shipping");
  if (shippingSpan) shippingSpan.textContent = shipping > 0 ? "₹50 Flat Rate" : "₹0";
  if (totalSpan) totalSpan.textContent = `₹${grandTotal.toLocaleString('en-IN')}`;
}

function handleCheckout() {
  if (state.cart.length === 0) {
    showToast("Cart is empty! Select tools before checking out.");
    return;
  }
  closeCartDrawer();
  openCheckoutModal(null);
}

// --- CHECKOUT & DELIVERY DETAILS MODAL ENGINE ---
function openCheckoutModal(productId = null) {
  if (productId) {
    const product = state.products.find(p => p.id === productId);
    if (!product) return;
    state.checkoutItems = [{
      id: product.id,
      name: product.name,
      brand: product.brand,
      price: product.discountedPrice,
      image: product.image,
      quantity: 1
    }];
  } else {
    if (state.cart.length === 0) {
      showToast("Cart is empty! Select a tool to buy.");
      return;
    }
    state.checkoutItems = JSON.parse(JSON.stringify(state.cart));
  }

  renderCheckoutSummary();

  const backdrop = document.getElementById("checkout-backdrop");
  const modal = document.getElementById("checkout-modal");
  if (backdrop && modal) {
    backdrop.classList.add("active");
    modal.classList.add("active");
  }
}

function closeCheckoutModal() {
  document.getElementById("checkout-backdrop")?.classList.remove("active");
  document.getElementById("checkout-modal")?.classList.remove("active");
}

function renderCheckoutSummary() {
  const container = document.getElementById("checkout-items-list");
  const totalPayableSpan = document.getElementById("checkout-total-payable");
  if (!container) return;

  if (!state.checkoutItems || state.checkoutItems.length === 0) {
    container.innerHTML = `<p class="text-xs text-zinc-500 font-medium">No items selected.</p>`;
    if (totalPayableSpan) totalPayableSpan.textContent = "₹0";
    return;
  }

  let subtotal = 0;
  container.innerHTML = state.checkoutItems.map((item, idx) => {
    const itemTotal = item.price * item.quantity;
    subtotal += itemTotal;
    return `
      <div class="flex items-center justify-between gap-3 p-2.5 bg-[#0a0a0a] rounded-lg border border-[#2a2a2a]">
        <div class="flex items-center gap-3 min-w-0 flex-1">
          <img src="${item.image}" alt="${item.name}" class="w-10 h-10 object-contain bg-white rounded p-0.5 border border-[#2a2a2a]" />
          <div class="min-w-0 flex-1">
            <h5 class="text-xs font-bold text-white truncate">${item.name}</h5>
            <span class="text-[10px] font-mono-custom text-[#ff5500]">₹${item.price.toLocaleString('en-IN')} / unit</span>
          </div>
        </div>
        <div class="flex items-center gap-2 sm:gap-3 shrink-0">
          <div class="flex items-center gap-1.5 bg-[#161616] border border-[#2a2a2a] rounded-lg px-2 py-0.5">
            <button type="button" onclick="changeCheckoutQty(${idx}, -1)" class="text-xs text-zinc-400 hover:text-white px-1 font-bold">-</button>
            <span class="text-xs font-bold font-mono-custom text-white px-1">${item.quantity}</span>
            <button type="button" onclick="changeCheckoutQty(${idx}, 1)" class="text-xs text-zinc-400 hover:text-white px-1 font-bold">+</button>
          </div>
          <span class="text-xs font-black font-mono-custom text-white min-w-[54px] sm:min-w-[64px] text-right">₹${itemTotal.toLocaleString('en-IN')}</span>
        </div>
      </div>
    `;
  }).join("");

  const shipping = subtotal > 0 ? 50 : 0;
  const grandTotal = subtotal + shipping;

  if (totalPayableSpan) {
    totalPayableSpan.textContent = `₹${grandTotal.toLocaleString('en-IN')}`;
  }
}

function changeCheckoutQty(index, delta) {
  if (!state.checkoutItems || !state.checkoutItems[index]) return;
  state.checkoutItems[index].quantity += delta;
  if (state.checkoutItems[index].quantity <= 0) {
    state.checkoutItems.splice(index, 1);
  }
  renderCheckoutSummary();
}

function handleCheckoutSubmit(e) {
  e.preventDefault();

  if (!state.checkoutItems || state.checkoutItems.length === 0) {
    showToast("Please add items to buy before submitting order!");
    return;
  }

  const name = document.getElementById("checkout-name")?.value.trim();
  const phone = document.getElementById("checkout-phone")?.value.trim();
  const altPhone = document.getElementById("checkout-alt-phone")?.value.trim() || "N/A";
  const email = document.getElementById("checkout-email")?.value.trim() || "";
  const address = document.getElementById("checkout-address")?.value.trim();
  const city = document.getElementById("checkout-city")?.value.trim();
  const stateVal = document.getElementById("checkout-state")?.value.trim();
  const pincode = document.getElementById("checkout-pincode")?.value.trim();

  const paymentMethod = "Cash on Delivery (COD)";

  const orderId = `NTT-${Date.now().toString().slice(-6)}`;

  let subtotal = state.checkoutItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const shipping = subtotal > 0 ? 50 : 0;
  let grandTotal = subtotal + shipping;

  // Populate Order Success Modal
  document.getElementById("success-order-id").textContent = orderId;
  document.getElementById("success-customer-name").textContent = name;
  document.getElementById("success-customer-phone").textContent = phone;
  document.getElementById("success-customer-address").textContent = `${address}, ${city}, ${stateVal} - ${pincode}`;
  document.getElementById("success-total-amount").textContent = `₹${grandTotal.toLocaleString('en-IN')}`;

  // Reset any previous fallback alert in modal
  const fallbackAlertEl = document.getElementById("success-email-fallback-alert");
  if (fallbackAlertEl) fallbackAlertEl.classList.add("hidden");
  const waBtn = document.getElementById("btn-success-whatsapp");
  if (waBtn) waBtn.classList.remove("animate-pulse", "ring-2", "ring-emerald-500/80");

  // Build WhatsApp pre-filled text
  const itemsText = state.checkoutItems.map(i => `• ${i.quantity}x ${i.name} (₹${(i.price * i.quantity).toLocaleString('en-IN')})`).join('\n');
  const fullAddressStr = `${address}, ${city}, ${stateVal} - ${pincode}`;
  
  const waMessage = `*NEW ORDER PLACED!* 🛍️\n\n*Order ID:* ${orderId}\n*Customer Name:* ${name}\n*Phone:* ${phone}\n*Alt Phone:* ${altPhone}\n*Delivery Address:* ${fullAddressStr}\n*Payment Method:* Cash on Delivery (COD)\n\n*ORDERED ITEMS:*\n${itemsText}\n\n*Total Amount Payable:* ₹${grandTotal.toLocaleString('en-IN')} (Incl. ₹50 Flat Delivery Charge)\n\nPlease dispatch this consignment via Cash on Delivery.`;
  
  if (waBtn) {
    waBtn.href = `https://wa.me/918283848559?text=${encodeURIComponent(waMessage)}`;
  }

  // Assemble order data for both local cache and Supabase cloud database
  const orderRecord = {
    id: orderId,
    date: new Date().toISOString(),
    customer: {
      name: name || "Valued Customer",
      phone: phone || "N/A",
      altPhone: altPhone || "",
      email: email || "",
      address: fullAddressStr || "N/A",
      city: city || "",
      state: stateVal || "",
      pincode: pincode || ""
    },
    items: (state.checkoutItems || []).map(i => ({
      name: i.name,
      quantity: i.quantity,
      price: i.price
    })),
    itemsText: itemsText,
    subtotal: subtotal,
    deliveryCharge: 50,
    total: grandTotal,
    status: "PROCESSING",
    emailStatus: "PENDING"
  };

  // Safeguard A: 1. Immediately save to centralized Supabase backend and local cache BEFORE email dispatch
  try {
    saveNewOrder(orderRecord);
  } catch (err) {
    console.warn("[Narindra Orders] Order persistence error:", err);
  }

  // 2. Dual-channel notification: Real email dispatch to Narindraexpress1@gmail.com simultaneously
  dispatchOrderEmail({
    id: orderId,
    customerName: name,
    phone: phone,
    altPhone: altPhone,
    email: email,
    address: fullAddressStr,
    itemsText: itemsText,
    items: state.checkoutItems,
    subtotal: subtotal,
    grandTotal: grandTotal
  });

  // 3. Clear cart & update UI
  state.cart = [];
  saveCart();
  updateCartBadge();
  closeCartDrawer();
  closeCheckoutModal();

  // 4. Show Success Modal
  const successBackdrop = document.getElementById("order-success-backdrop");
  const successModal = document.getElementById("order-success-modal");
  if (successBackdrop && successModal) {
    successBackdrop.classList.add("active");
    successModal.classList.add("active");
  }

  showToast(`Order ${orderId} Placed Successfully!`);
}

function closeOrderSuccessModal() {
  document.getElementById("order-success-backdrop")?.classList.remove("active");
  document.getElementById("order-success-modal")?.classList.remove("active");
}

// --- SAFEGUARD HELPER: RECORD EMAIL DISPATCH OUTCOME ACROSS CLOUD & LOCAL DB ---
function markOrderEmailDelivery(orderId, isDelivered, errorMsg = "") {
  try {
    const orders = loadAdminOrders();
    const order = orders.find(o => o.id === orderId);
    if (order) {
      order.emailStatus = isDelivered ? "DELIVERED" : "FAILED_DELIVERY";
      if (!isDelivered) {
        order.emailError = errorMsg || "Dispatch Failed";
        order.status = "PROCESSING (Email Issue)";
      }
      saveAdminOrders(orders);
      renderAdminDashboardStats();
      renderAdminOrders();
    }

    // Safeguard A: Cloud state sync if email delivery failed
    if (!isDelivered && isSupabaseConfigured() && orderId) {
      supabaseFetch(`orders?id=eq.${encodeURIComponent(orderId)}`, {
        method: "PATCH",
        body: JSON.stringify({
          status: "PROCESSING (Email Issue)",
          updated_at: new Date().toISOString()
        })
      }).catch(e => console.warn("[Supabase Orders] Could not flag email failure in cloud:", e));
    }
  } catch (e) {
    console.warn("[Narindra Orders] Error updating email status:", e);
  }
}

// --- DUAL-CHANNEL REAL EMAIL DISPATCH ENGINE WITH MULTI-LAYER SAFEGUARDS ---
async function dispatchOrderEmail(orderData) {
  const emailStatusEl = document.getElementById("success-email-status");
  const fallbackAlertEl = document.getElementById("success-email-fallback-alert");
  const waBtn = document.getElementById("btn-success-whatsapp");

  if (emailStatusEl) {
    emailStatusEl.textContent = "Dispatching...";
    emailStatusEl.className = "text-amber-400 font-bold truncate max-w-[140px] sm:max-w-[180px]";
  }
  if (fallbackAlertEl) {
    fallbackAlertEl.classList.add("hidden");
  }

  const payload = {
    _subject: `⚡ NEW ORDER PLACED! - Narindra Express (#${orderData.id || 'ORDER'})`,
    _template: "table",
    _captcha: "false",
    _url: "https://www.narindraexpress.in",
    Store_Domain: "www.narindraexpress.in",
    Live_Store_URL: "https://www.narindraexpress.in",
    Admin_Dashboard: "https://www.narindraexpress.in/admin",
    Order_ID: orderData.id || `NTT-${Date.now().toString().slice(-6)}`,
    Customer_Name: orderData.customerName || "Customer",
    Customer_Phone: orderData.phone || "N/A",
    Alt_Phone: orderData.altPhone || "N/A",
    Customer_Email: orderData.email || "Not Provided",
    Delivery_Address: orderData.address || "N/A",
    Payment_Method: "Cash on Delivery (COD)",
    Ordered_Items: orderData.itemsText || "N/A",
    Items_Subtotal: `₹${(orderData.subtotal || 0).toLocaleString('en-IN')}`,
    Delivery_Charge: "₹50 (Flat Delivery)",
    Total_Amount_Payable: `₹${(orderData.grandTotal || 0).toLocaleString('en-IN')}`,
    Order_Timestamp: new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })
  };

  if (orderData.email && orderData.email.includes("@")) {
    payload._replyto = orderData.email;
  }

  try {
    const res = await fetch("https://formsubmit.co/ajax/Narindraexpress1@gmail.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(payload)
    });

    const result = await res.json().catch(() => ({}));
    console.log("[Narindra Dual-Channel] Order email dispatch result:", result);

    const isSuccess = res.ok && (result.success === true || result.success === "true");

    if (isSuccess) {
      if (emailStatusEl) {
        emailStatusEl.textContent = "Delivered to Narindraexpress1@gmail.com";
        emailStatusEl.className = "text-emerald-400 font-bold truncate max-w-[140px] sm:max-w-[180px]";
      }
      if (fallbackAlertEl) fallbackAlertEl.classList.add("hidden");
      markOrderEmailDelivery(orderData.id, true);
      return { success: true, result };
    } else {
      const errMsg = result.message || "Email dispatch failed";
      console.error("[Narindra Dual-Channel] Email dispatch rejected:", errMsg, result);

      // Safeguard B: Visible Modal Alert & WhatsApp Prompt
      if (emailStatusEl) {
        emailStatusEl.textContent = "Delivery Pending / Check WhatsApp";
        emailStatusEl.className = "text-amber-400 font-bold truncate max-w-[140px] sm:max-w-[180px]";
      }
      if (fallbackAlertEl) {
        fallbackAlertEl.classList.remove("hidden");
      }
      if (waBtn) {
        waBtn.classList.add("animate-pulse", "ring-2", "ring-emerald-500/80");
      }

      // Safeguard C: Record failure in DB
      markOrderEmailDelivery(orderData.id, false, errMsg);
      return { success: false, error: errMsg, result };
    }
  } catch (err) {
    console.warn("[Narindra Dual-Channel] Email dispatch network warning:", err);

    // Safeguard B: Visible Modal Alert on Network Error
    if (emailStatusEl) {
      emailStatusEl.textContent = "Queued to Cloud / Check WhatsApp";
      emailStatusEl.className = "text-amber-400 font-bold truncate max-w-[140px] sm:max-w-[180px]";
    }
    if (fallbackAlertEl) {
      fallbackAlertEl.classList.remove("hidden");
    }
    if (waBtn) {
      waBtn.classList.add("animate-pulse", "ring-2", "ring-emerald-500/80");
    }

    // Safeguard C: Record failure in DB
    markOrderEmailDelivery(orderData.id, false, err.message || "Network Error");
    return { success: false, error: err };
  }
}

// --- TOAST NOTIFICATIONS ---
let activeToastTimeout = null;

function showToast(message) {
  const existing = document.getElementById("app-global-toast");
  if (existing) {
    if (activeToastTimeout) clearTimeout(activeToastTimeout);
    existing.remove();
  }

  const toast = document.createElement("div");
  toast.id = "app-global-toast";
  toast.className = "fixed bottom-6 right-6 z-50 bg-[#141414] text-white border border-[#ff5500] px-4 py-3 rounded-xl shadow-2xl text-xs font-bold uppercase tracking-wider flex items-center gap-2.5 transition-all duration-300 transform translate-y-10 opacity-0 pointer-events-none";
  toast.innerHTML = `
    <div class="w-2 h-2 rounded-full bg-[#ff5500] shrink-0"></div>
    <span class="truncate max-w-xs font-mono-custom">${message}</span>
  `;

  document.body.appendChild(toast);

  requestAnimationFrame(() => {
    toast.classList.remove("translate-y-10", "opacity-0");
  });

  activeToastTimeout = setTimeout(() => {
    toast.classList.add("translate-y-10", "opacity-0");
    setTimeout(() => {
      if (toast.parentNode) toast.remove();
    }, 300);
  }, 3000);
}

// --- OWNER ADMIN DASHBOARD ENGINE (Direct Full Dashboard, Zero PIN Gate) ---

const DEFAULT_CATEGORIES = [
  {
    id: "power-tools",
    name: "Power Tools",
    image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=400&q=80",
    subcategories: [
      { id: "impact-drills", name: "Impact Drills", image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=200&q=80", featured: true },
      { id: "angle-grinders", name: "Angle Grinders", image: "https://images.unsplash.com/photo-1581147036324-c17ac41dfa6c?auto=format&fit=crop&w=200&q=80", featured: true },
      { id: "rotary-hammers", name: "Rotary Hammers", image: "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?auto=format&fit=crop&w=200&q=80", featured: false },
      { id: "demolition-hammers", name: "Demolition Hammers", image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=200&q=80", featured: false },
      { id: "marble-cutters", name: "Marble Cutters", image: "https://images.unsplash.com/photo-1581147036324-c17ac41dfa6c?auto=format&fit=crop&w=200&q=80", featured: false },
      { id: "cordless-drivers", name: "Cordless Drivers", image: "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?auto=format&fit=crop&w=200&q=80", featured: true },
      { id: "mitre-saws", name: "Mitre Saws", image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=200&q=80", featured: false },
      { id: "heat-guns", name: "Heat Guns", image: "https://images.unsplash.com/photo-1581147036324-c17ac41dfa6c?auto=format&fit=crop&w=200&q=80", featured: false }
    ]
  },
  {
    id: "welding",
    name: "Welding Equipment",
    image: "https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=400&q=80",
    subcategories: [
      { id: "arc-inverters", name: "ARC Inverters", image: "https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=200&q=80", featured: true },
      { id: "mig-welders", name: "MIG/MAG Welders", image: "https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=200&q=80", featured: false },
      { id: "tig-welders", name: "TIG Welders", image: "https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=200&q=80", featured: false },
      { id: "plasma-cutters", name: "Plasma Cutters", image: "https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=200&q=80", featured: true },
      { id: "welding-torches", name: "Welding Torches", image: "https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=200&q=80", featured: false }
    ]
  },
  {
    id: "hand-tools",
    name: "Hand Tools",
    image: "https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?auto=format&fit=crop&w=400&q=80",
    subcategories: [
      { id: "torque-wrenches", name: "Torque Wrenches", image: "https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?auto=format&fit=crop&w=200&q=80", featured: true },
      { id: "socket-sets", name: "Socket Sets", image: "https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?auto=format&fit=crop&w=200&q=80", featured: true },
      { id: "heavy-pliers", name: "Heavy Pliers", image: "https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?auto=format&fit=crop&w=200&q=80", featured: false },
      { id: "bolt-cutters", name: "Bolt Cutters", image: "https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?auto=format&fit=crop&w=200&q=80", featured: false }
    ]
  },
  {
    id: "measuring",
    name: "Measuring & Precision",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=400&q=80",
    subcategories: [
      { id: "laser-meters", name: "Laser Distance Meters", image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=200&q=80", featured: true },
      { id: "digital-calipers", name: "Digital Calipers", image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=200&q=80", featured: true },
      { id: "dial-gauges", name: "Dial Gauges", image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=200&q=80", featured: false },
      { id: "spirit-levels", name: "Spirit Levels", image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=200&q=80", featured: false }
    ]
  },
  {
    id: "abrasives",
    name: "Cutting & Abrasives",
    image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=400&q=80",
    subcategories: [
      { id: "cutting-wheels", name: "Cutting Wheels", image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=200&q=80", featured: true },
      { id: "flap-discs", name: "Flap Discs", image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=200&q=80", featured: true },
      { id: "grinding-wheels", name: "Grinding Wheels", image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=200&q=80", featured: false },
      { id: "diamond-blades", name: "Diamond Blades", image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=200&q=80", featured: false }
    ]
  }
];

function loadAdminCategories() {
  const saved = localStorage.getItem("ntt_categories");
  if (saved) {
    try {
      state.categories = JSON.parse(saved);
      return;
    } catch (e) {
      console.warn("Error parsing ntt_categories", e);
    }
  }
  state.categories = JSON.parse(JSON.stringify(DEFAULT_CATEGORIES));
  saveAdminCategories();
}

function saveAdminCategories() {
  try {
    localStorage.setItem("ntt_categories", JSON.stringify(state.categories));
  } catch (e) {
    console.warn("Error saving ntt_categories", e);
  }
}

// --- SUPABASE CENTRALIZED CLOUD ORDERS & INVENTORY BACKEND ---
const SUPABASE_CONFIG = {
  url: window.__SUPABASE_URL__ || "https://qssgwytrtpyxukjypfxy.supabase.co",
  anonKey: window.__SUPABASE_ANON_KEY__ || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFzc2d3eXRydHB5eHVranlwZnh5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTIwNDY1MjksImV4cCI6MjEwNzYyMjUyOX0.DjLggD9Wdg8pGRzZA8gGRybcJ0doyG4kAL20-0i_8uU"
};

function isSupabaseConfigured() {
  return SUPABASE_CONFIG.url && 
         !SUPABASE_CONFIG.url.includes("YOUR_SUPABASE_PROJECT_ID") && 
         SUPABASE_CONFIG.anonKey && 
         !SUPABASE_CONFIG.anonKey.includes("YOUR_SUPABASE_ANON_KEY");
}

async function supabaseFetch(path, options = {}) {
  if (!isSupabaseConfigured()) {
    return null;
  }
  const headers = {
    "apikey": SUPABASE_CONFIG.anonKey,
    "Authorization": `Bearer ${SUPABASE_CONFIG.anonKey}`,
    "Content-Type": "application/json",
    "Prefer": options.prefer || options.headers?.Prefer || "return=representation",
    ...(options.headers || {})
  };
  const url = `${SUPABASE_CONFIG.url}/rest/v1/${path}`;
  const res = await fetch(url, { ...options, headers });
  if (!res.ok) {
    const errorText = await res.text().catch(() => "");
    throw new Error(`Supabase API error (${res.status}): ${errorText}`);
  }
  if (res.status === 204) return [];
  return await res.json().catch(() => null);
}

function loadAdminOrders() {
  try {
    const raw = localStorage.getItem("ntt_orders");
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    return [];
  }
}

function saveAdminOrders(orders) {
  try {
    localStorage.setItem("ntt_orders", JSON.stringify(orders));
  } catch (e) {
    console.warn("Error saving ntt_orders", e);
  }
}

function recordOrderLocally(orderData) {
  try {
    const orders = loadAdminOrders();
    const existingIndex = orders.findIndex(o => o.id === orderData.id);
    if (existingIndex >= 0) {
      orders[existingIndex] = orderData;
    } else {
      orders.unshift(orderData);
    }
    saveAdminOrders(orders);
    renderAdminDashboardStats();
    renderAdminOrders();
  } catch (e) {
    console.warn("Could not record order locally", e);
  }
}

// Master function: saves new order to both local cache and Supabase cloud database
async function saveNewOrder(orderData) {
  // 1. Immediately cache locally
  recordOrderLocally(orderData);

  // 2. Persist to Supabase cloud database
  if (!isSupabaseConfigured()) {
    console.info("[Supabase Orders] Pending credentials to sync to cloud database.");
    return;
  }

  try {
    const row = {
      id: orderData.id,
      customer_name: orderData.customer?.name || "Customer",
      phone: orderData.customer?.phone || "N/A",
      alt_phone: orderData.customer?.altPhone || null,
      email: orderData.customer?.email || null,
      address: orderData.customer?.address || "N/A",
      city: orderData.customer?.city || null,
      state: orderData.customer?.state || null,
      pincode: orderData.customer?.pincode || null,
      payment_method: "Cash on Delivery (COD)",
      items: orderData.items || [],
      items_text: orderData.itemsText || (orderData.items || []).map(i => `${i.quantity}x ${i.name}`).join(", "),
      subtotal: Number(orderData.subtotal || 0),
      delivery_charge: Number(orderData.deliveryCharge || 50),
      total: Number(orderData.total || 0),
      status: orderData.status || "PROCESSING",
      email_status: orderData.emailStatus || "PENDING",
      created_at: orderData.date || new Date().toISOString(),
      updated_at: new Date().toISOString()
    };

    const res = await supabaseFetch("orders", {
      method: "POST",
      body: JSON.stringify(row)
    });
    console.log("[Supabase Orders] Successfully synced new order to cloud:", res);
  } catch (err) {
    console.warn("[Supabase Orders] Cloud sync error:", err);
  }
}

// Sync all orders from Supabase cloud database into the admin dashboard
async function syncAdminOrdersFromCloud() {
  if (!isSupabaseConfigured()) {
    return loadAdminOrders();
  }

  try {
    const rows = await supabaseFetch("orders?select=*&order=created_at.desc");
    if (Array.isArray(rows)) {
      const orders = rows.map(row => ({
        id: row.id,
        date: row.created_at,
        customer: {
          name: row.customer_name,
          phone: row.phone,
          altPhone: row.alt_phone,
          email: row.email || "",
          address: row.address,
          city: row.city,
          state: row.state,
          pincode: row.pincode
        },
        items: Array.isArray(row.items) ? row.items : [],
        itemsText: row.items_text,
        subtotal: Number(row.subtotal || 0),
        deliveryCharge: Number(row.delivery_charge || 50),
        total: Number(row.total || 0),
        status: row.status || "PROCESSING",
        emailStatus: row.email_status || "PENDING"
      }));

      saveAdminOrders(orders);
      renderAdminDashboardStats();
      renderAdminOrders();
      return orders;
    }
  } catch (err) {
    console.warn("[Supabase Orders] Could not sync orders from cloud:", err);
  }
  return loadAdminOrders();
}

// Sync all products from Supabase cloud database into frontend and admin
async function syncProductsFromCloud() {
  if (!isSupabaseConfigured()) {
    return state.products;
  }

  try {
    const rows = await supabaseFetch("products?select=*&order=created_at.asc");
    if (Array.isArray(rows)) {
      const cloudProducts = rows.map(r => ({
        id: r.id,
        name: r.name,
        category: r.category,
        categoryName: r.category_name,
        subcategory: r.subcategory || "",
        brand: r.brand,
        originalPrice: Number(r.original_price),
        discountedPrice: Number(r.discounted_price),
        rating: Number(r.rating || 5.0),
        reviewsCount: Number(r.reviews_count || 0),
        image: r.image,
        description: r.description || "",
        specs: (typeof r.specs === "object" && r.specs) ? r.specs : {},
        inStock: Boolean(r.in_stock),
        quantity: Number(r.quantity || 0),
        featured: Boolean(r.featured)
      }));

      const isChanged = JSON.stringify(cloudProducts) !== JSON.stringify(state.products);
      if (isChanged || state.products.length === 0) {
        state.products = cloudProducts;
        saveProducts();
        applyFilters();
        renderProducts();
        renderFeaturedProducts();
        renderAdminProducts();
        renderAdminBrands();
        renderAdminCategoriesTree();
        updateAllProductSteppers();
        populateAdminBrandDropdown();
      }
      return cloudProducts;
    }
  } catch (err) {
    console.warn("[Supabase Products] Could not sync products from cloud:", err);
  }
  return state.products;
}

// Sync all categories from Supabase cloud database into frontend and admin
async function syncCategoriesFromCloud() {
  if (!isSupabaseConfigured()) {
    return state.categories;
  }

  try {
    const rows = await supabaseFetch("categories?select=*&order=created_at.asc");
    if (Array.isArray(rows) && rows.length > 0) {
      state.categories = rows.map(r => ({
        id: r.id,
        name: r.name,
        image: r.image || "",
        subcategories: Array.isArray(r.subcategories) ? r.subcategories : []
      }));
      try {
        localStorage.setItem("ntt_categories", JSON.stringify(state.categories));
      } catch (e) {}
      renderAdminCategoriesTree();
      populateAdminCategoryDropdown();
      return state.categories;
    }
  } catch (err) {
    console.warn("[Supabase Categories] Could not sync categories from cloud:", err);
  }
  return state.categories;
}

async function updateOrderStatus(orderId, newStatus) {
  // Update locally first for instant UI response
  const orders = loadAdminOrders();
  const order = orders.find(o => o.id === orderId);
  if (order) {
    order.status = newStatus;
    saveAdminOrders(orders);
    renderAdminOrders();
    renderAdminDashboardStats();
  }
  showToast(`Order ${orderId} status set to ${newStatus}`);

  // Sync to Supabase cloud database
  if (!isSupabaseConfigured()) return;
  try {
    await supabaseFetch(`orders?id=eq.${encodeURIComponent(orderId)}`, {
      method: "PATCH",
      body: JSON.stringify({
        status: newStatus,
        updated_at: new Date().toISOString()
      })
    });
    console.log(`[Supabase Orders] Order ${orderId} status synced to cloud: ${newStatus}`);
  } catch (err) {
    console.warn("[Supabase Orders] Failed to update status in cloud:", err);
  }
}

async function clearAdminOrders(forceNoConfirm) {
  if (forceNoConfirm || confirm("Clear all orders from the admin dashboard?")) {
    saveAdminOrders([]);
    renderAdminDashboardStats();
    renderAdminOrders();
    showToast("All orders wiped successfully.");

    if (!isSupabaseConfigured()) return;
    try {
      await supabaseFetch("orders?id=neq.placeholder", {
        method: "DELETE"
      });
      console.log("[Supabase Orders] Orders cleared from cloud database.");
    } catch (err) {
      console.warn("[Supabase Orders] Failed to clear cloud orders:", err);
    }
  }
}

// --- ADMIN SPA NAVIGATION ENGINE ---
let currentAdminSection = "dashboard";
let currentProductTab = "inventory";

function switchAdminSection(section) {
  currentAdminSection = section;

  // Update navigation items
  document.querySelectorAll("[data-admin-nav]").forEach(el => {
    const target = el.getAttribute("data-admin-nav");
    if (target === section) {
      el.classList.add("active");
    } else {
      el.classList.remove("active");
    }
  });

  // Switch visible sections
  const secDashboard = document.getElementById("admin-section-dashboard");
  const secProducts = document.getElementById("admin-section-products");
  const secOrders = document.getElementById("admin-section-orders");

  if (secDashboard) secDashboard.classList.toggle("hidden", section !== "dashboard");
  if (secProducts) secProducts.classList.toggle("hidden", section !== "products");
  if (secOrders) secOrders.classList.toggle("hidden", section !== "orders");

  // Update breadcrumb and header title
  const breadcrumb = document.getElementById("admin-breadcrumb");
  const title = document.getElementById("admin-page-title");
  if (breadcrumb) breadcrumb.textContent = `SYSTEM / ${section.toUpperCase()}`;
  if (title) title.textContent = `${section.toUpperCase()}.`;

  // Render current active view
  if (section === "dashboard") {
    renderAdminDashboardStats();
    syncAdminOrdersFromCloud();
  } else if (section === "products") {
    switchProductTab(currentProductTab);
  } else if (section === "orders") {
    renderAdminOrders();
    syncAdminOrdersFromCloud();
  }

  // Close mobile drawer if open
  closeAdminMobileDrawer();
}

function switchProductTab(tab) {
  currentProductTab = tab;

  // Update tab navigation buttons
  document.querySelectorAll("[data-product-tab]").forEach(el => {
    const target = el.getAttribute("data-product-tab");
    if (target === tab) {
      el.className = "pb-3 border-b-2 border-[#ff5500] text-white font-mono-custom text-xs font-black tracking-wider uppercase cursor-pointer select-none transition-colors";
    } else {
      el.className = "pb-3 border-b-2 border-transparent text-zinc-500 hover:text-zinc-300 font-mono-custom text-xs font-bold tracking-wider uppercase cursor-pointer select-none transition-colors";
    }
  });

  // Dynamic header action button
  const actionBtnText = document.getElementById("product-tab-action-text");
  const actionBtn = document.getElementById("product-tab-action-btn");
  if (actionBtnText && actionBtn) {
    if (tab === "inventory") {
      actionBtnText.textContent = "ADD_INVENTORY";
      actionBtn.onclick = () => openAddProductModal();
    } else if (tab === "brands") {
      actionBtnText.textContent = "ADD_BRANDS";
      actionBtn.onclick = () => openAddProductModal();
    } else if (tab === "categories") {
      actionBtnText.textContent = "ADD_CATEGORIES";
      actionBtn.onclick = () => openAddCategoryModal();
    }
  }

  // Toggle tab panels
  const paneInv = document.getElementById("product-tab-inventory");
  const paneBrands = document.getElementById("product-tab-brands");
  const paneCats = document.getElementById("product-tab-categories");

  if (paneInv) paneInv.classList.toggle("hidden", tab !== "inventory");
  if (paneBrands) paneBrands.classList.toggle("hidden", tab !== "brands");
  if (paneCats) paneCats.classList.toggle("hidden", tab !== "categories");

  if (tab === "inventory") renderAdminProducts();
  if (tab === "brands") renderAdminBrands();
  if (tab === "categories") renderAdminCategoriesTree();
}

// --- ADMIN DASHBOARD STATS & RECENT TRANSACTIONS (100% Real Data, Zero Fake Data) ---
function renderAdminDashboardStats() {
  const orders = loadAdminOrders();
  const totalRevenueEl = document.getElementById("dash-total-revenue");
  const avgOrderEl = document.getElementById("dash-avg-order");
  const dispatchQueueEl = document.getElementById("dash-dispatch-queue");
  const transactionsContainer = document.getElementById("dash-recent-transactions");

  const totalRev = orders.reduce((sum, o) => sum + (Number(o.total) || 0), 0);
  const avgOrder = orders.length > 0 ? Math.round(totalRev / orders.length) : 0;
  const dispatchCount = orders.filter(o => o.status === "IN DISPATCH" || o.status === "PROCESSING").length;

  if (totalRevenueEl) totalRevenueEl.textContent = `₹${totalRev.toLocaleString('en-IN')}`;
  if (avgOrderEl) avgOrderEl.textContent = `₹${avgOrder.toLocaleString('en-IN')}`;
  if (dispatchQueueEl) dispatchQueueEl.textContent = dispatchCount;

  if (!transactionsContainer) return;

  if (orders.length === 0) {
    transactionsContainer.innerHTML = `
      <div class="py-12 text-center text-zinc-500 font-mono-custom text-xs">
        No orders yet. Customer orders placed in this browser will appear here.
      </div>
    `;
    return;
  }

  const latest = orders.slice(0, 5);
  transactionsContainer.innerHTML = latest.map(order => {
    let pillClass = "pill-orange";
    if (order.status === "DELIVERED") pillClass = "pill-green";
    if (order.status === "CANCELLED") pillClass = "pill-neutral";

    const itemsSummary = (order.items || []).map(i => `${i.quantity}x ${i.name}`).join(", ") || "Machinery Order";

    return `
      <div class="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 p-3 sm:p-3.5 bg-[#161616] rounded-2xl border border-[#222] w-full min-w-0 overflow-hidden">
        <div class="flex items-start sm:items-center gap-3 min-w-0 flex-1 w-full">
          <div class="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center font-mono-custom font-bold text-[11px] sm:text-xs text-[#ff5500] shrink-0">
            ORD
          </div>
          <div class="min-w-0 flex-1">
            <div class="flex items-center justify-between sm:justify-start gap-2 min-w-0">
              <span class="text-xs font-bold text-white uppercase font-sans truncate">${order.customer?.name || "Customer"}</span>
              <span class="text-[10px] font-mono-custom text-zinc-400 shrink-0 whitespace-nowrap">${order.id}</span>
            </div>
            <p class="text-[10px] font-mono-custom text-zinc-300 truncate w-full mt-0.5" title="${itemsSummary.replace(/"/g, '&quot;')}">
              ${itemsSummary}
            </p>
          </div>
        </div>
        <div class="flex items-center justify-between sm:justify-end gap-3 sm:gap-4 w-full sm:w-auto pt-2.5 sm:pt-0 border-t sm:border-t-0 border-zinc-800/80 shrink-0">
          <span class="font-mono-custom font-black text-sm text-white">₹${Number(order.total || 0).toLocaleString('en-IN')}</span>
          <span class="${pillClass} shrink-0 text-center">${order.status}</span>
        </div>
      </div>
    `;
  }).join("");
}

// --- ADMIN ORDERS VIEW (4-Column Layout, Clean Empty State & Failure Safeguard) ---
function renderAdminOrders() {
  const container = document.getElementById("admin-orders-list");
  if (!container) return;

  const orders = loadAdminOrders();
  if (orders.length === 0) {
    container.innerHTML = `
      <div class="admin-card rounded-[24px] sm:rounded-[28px] p-8 sm:p-12 text-center text-zinc-500 font-mono-custom text-xs">
        No orders yet. Customer orders placed in this browser will appear here.
      </div>
    `;
    return;
  }

  // Safeguard C: Check for any orders where email delivery failed
  const failedEmailOrders = orders.filter(o => 
    o.emailStatus === "FAILED_DELIVERY" || 
    (typeof o.status === "string" && o.status.toLowerCase().includes("email"))
  );

  const failureBannerHtml = failedEmailOrders.length > 0 ? `
    <div id="admin-email-failure-banner" class="mb-5 p-4 rounded-2xl bg-rose-500/15 border-2 border-rose-500/60 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
      <div class="flex items-center gap-3">
        <div class="w-10 h-10 rounded-xl bg-rose-500/20 text-rose-400 flex items-center justify-center shrink-0 border border-rose-500/40">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
        </div>
        <div>
          <span class="text-xs font-black uppercase tracking-wider text-rose-400 font-mono-custom block">⚠️ Attention: Email Notification Failure</span>
          <p class="text-xs text-zinc-200 mt-0.5"><span class="font-bold text-white">${failedEmailOrders.length} order(s)</span> experienced an automated email notification failure. Order details are safely preserved in the database below.</p>
        </div>
      </div>
      <span class="px-3 py-1.5 rounded-lg bg-rose-950/80 border border-rose-500/50 text-rose-300 text-[10px] font-black uppercase font-mono-custom shrink-0">Email Delivery Issue</span>
    </div>
  ` : "";

  container.innerHTML = failureBannerHtml + orders.map(order => {
    let pillClass = "pill-orange";
    if (order.status === "DELIVERED") pillClass = "pill-green";
    if (order.status === "CANCELLED") pillClass = "pill-neutral";

    const isEmailFailed = order.emailStatus === "FAILED_DELIVERY" || (typeof order.status === "string" && order.status.toLowerCase().includes("email"));
    const emailBadgeHtml = isEmailFailed ? `
      <div class="mt-2 inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-rose-950/80 border border-rose-500/50 text-rose-400 text-[10px] font-bold font-mono-custom uppercase">
        <span class="w-1.5 h-1.5 rounded-full bg-rose-400 animate-ping"></span>
        <span>Email Undelivered</span>
      </div>
    ` : "";

    const itemsSummary = (order.items || []).map(i => `${i.quantity}x ${i.name} (₹${(i.price * i.quantity).toLocaleString('en-IN')})`).join("<br/>") || "1x Industrial Equipment Order";

    return `
      <div class="admin-card rounded-[24px] sm:rounded-[28px] md:rounded-[36px] p-4 sm:p-6 transition-all hover:border-[#333] overflow-hidden mb-4">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-4 sm:gap-6 divide-y md:divide-y-0 md:divide-x divide-zinc-800/80">
          
          <!-- Col 1: Customer -->
          <div class="flex items-start gap-3 sm:gap-3.5 md:pr-2 min-w-0">
            <div class="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-[#ff5500]">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
            </div>
            <div class="min-w-0 flex-1">
              <span class="text-[9px] font-mono-custom uppercase tracking-wider text-zinc-300 font-bold block mb-1">CLIENT_IDENTITY</span>
              <h4 class="font-bold text-white uppercase text-sm leading-snug break-words font-sans">${order.customer?.name || "Customer"}</h4>
              <div class="flex items-center gap-1.5 mt-1 text-xs text-white font-semibold font-mono-custom">
                <svg class="shrink-0" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                <span class="break-all">${order.customer?.phone || "N/A"}</span>
              </div>
              <span class="text-[10px] font-mono-custom text-zinc-400 block mt-1 whitespace-nowrap">${order.id}</span>
              ${emailBadgeHtml}
            </div>
          </div>

          <!-- Col 2: Shipping Coordinates -->
          <div class="pt-3.5 md:pt-0 md:px-5 min-w-0">
            <div class="flex items-center gap-1.5 text-[9px] font-mono-custom uppercase tracking-wider text-zinc-300 font-bold mb-2">
              <svg class="shrink-0" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              <span>SHIPPING_COORDINATES</span>
            </div>
            <p class="text-xs text-white font-mono-custom leading-relaxed uppercase break-words">
              ${order.customer?.address || "Address details on record."}
            </p>
          </div>

          <!-- Col 3: Manifest Details -->
          <div class="pt-3.5 md:pt-0 md:px-5 min-w-0">
            <div class="flex items-center gap-1.5 text-[9px] font-mono-custom uppercase tracking-wider text-zinc-300 font-bold mb-2">
              <svg class="shrink-0" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="16.5" y1="9.4" x2="7.5" y2="4.21"/><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>
              <span>MANIFEST_DETAILS</span>
            </div>
            <div class="text-xs text-white font-mono-custom leading-relaxed line-clamp-3 break-words">
              ${itemsSummary}
            </div>
            <div class="mt-2 text-sm font-black text-white font-mono-custom">
              TOTAL: ₹${Number(order.total || 0).toLocaleString('en-IN')}
            </div>
          </div>

          <!-- Col 4: Fulfillment -->
          <div class="pt-3.5 md:pt-0 md:pl-5 flex flex-col justify-between gap-3 min-w-0">
            <div>
              <div class="flex items-center justify-between mb-1.5">
                <span class="text-[9px] font-mono-custom uppercase tracking-wider text-zinc-500 font-bold">FULFILLMENT</span>
                <span class="${pillClass} flex items-center gap-1 shrink-0">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                  <span>${order.status}</span>
                </span>
              </div>
            </div>

            <div>
              <label class="text-[9px] font-mono-custom uppercase tracking-wider text-zinc-500 font-bold block mb-1.5">UPDATE STATUS</label>
              <div class="relative">
                <select onchange="updateOrderStatus('${order.id}', this.value)" class="w-full bg-[#161616] border border-zinc-800 hover:border-zinc-700 text-white rounded-xl px-3 py-2 text-xs font-mono-custom font-bold focus:outline-none focus:border-[#ff5500] appearance-none pr-8 transition-colors">
                  <option value="PROCESSING" ${order.status === "PROCESSING" ? "selected" : ""}>PROCESSING</option>
                  <option value="IN DISPATCH" ${order.status === "IN DISPATCH" ? "selected" : ""}>IN DISPATCH</option>
                  <option value="DELIVERED" ${order.status === "DELIVERED" ? "selected" : ""}>DELIVERED</option>
                  <option value="CANCELLED" ${order.status === "CANCELLED" ? "selected" : ""}>CANCELLED</option>
                </select>
                <svg class="absolute right-3 top-2.5 text-zinc-400 pointer-events-none" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>
              </div>
            </div>

          </div>

        </div>
      </div>
    `;
  }).join("");
}

// --- MASTER INVENTORY RENDERING (Tab 1: Rounded Card Layout, Star, Chips, Price, Actions) ---
function renderAdminProducts() {
  const container = document.getElementById("admin-product-list");
  if (!container) return;

  const totalCountSpan = document.getElementById("admin-total-count");
  const inStockCountSpan = document.getElementById("admin-instock-count");
  const outStockCountSpan = document.getElementById("admin-outstock-count");
  const itemsCountSpan = document.getElementById("admin-items-count");

  const totalCount = state.products.length;
  const inStockCount = state.products.filter(p => p.inStock).length;
  const outStockCount = totalCount - inStockCount;

  if (totalCountSpan) totalCountSpan.textContent = totalCount;
  if (inStockCountSpan) inStockCountSpan.textContent = inStockCount;
  if (outStockCountSpan) outStockCountSpan.textContent = outStockCount;

  const filtered = state.products.filter(p => {
    if (!state.adminSearchQuery) return true;
    return p.name.toLowerCase().includes(state.adminSearchQuery) ||
           p.brand.toLowerCase().includes(state.adminSearchQuery) ||
           p.id.toLowerCase().includes(state.adminSearchQuery);
  });

  if (itemsCountSpan) itemsCountSpan.textContent = filtered.length;

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="admin-card rounded-[20px] py-16 text-center text-zinc-500 font-mono-custom text-xs">
        No inventory items found matching "${state.adminSearchQuery || ''}"
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(product => {
    const isFeatured = !!product.featured;
    return `
      <div class="admin-card rounded-[20px] p-4 sm:p-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 transition-all hover:border-[#333]">
        <!-- Left group: Star + Thumbnail + Details -->
        <div class="flex items-center gap-3.5 flex-1 min-w-0 w-full">
          <!-- Star Button -->
          <button onclick="toggleProductFeatured('${product.id}')" title="Toggle Featured" class="w-10 h-10 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center shrink-0 transition-colors">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="${isFeatured ? '#ff5500' : 'none'}" stroke="${isFeatured ? '#ff5500' : '#71717a'}" stroke-width="2">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
          </button>

          <!-- Thumbnail -->
          <img src="${product.image}" alt="${product.name}" class="w-14 h-14 sm:w-20 sm:h-20 rounded-[12px] object-contain bg-white/5 p-1 sm:p-1.5 border border-white/10 shrink-0" onerror="this.src='/logo.png'" />

          <!-- Name & Chips -->
          <div class="min-w-0 flex-1">
            <div class="flex flex-wrap items-center gap-1.5 sm:gap-2 mb-1 sm:mb-1.5">
              <span class="font-bold text-white uppercase text-xs sm:text-sm leading-snug break-words font-sans">${product.name}</span>
              <span class="px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-[9px] sm:text-[10px] font-mono-custom font-bold text-zinc-300 shrink-0">TR_RATING ${product.rating || '5.0'}</span>
            </div>
            <div class="flex flex-wrap items-center gap-1.5 sm:gap-2">
              <span class="px-1.5 sm:px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[9px] sm:text-[10px] font-mono-custom text-zinc-400 font-bold uppercase">ID: ${String(product.id).toUpperCase()}</span>
              <span class="px-1.5 sm:px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[9px] sm:text-[10px] font-mono-custom text-[#ff5500] font-bold uppercase">CAT: ${product.categoryName || product.category}</span>
              <span class="px-1.5 sm:px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[9px] sm:text-[10px] font-mono-custom text-zinc-400 font-bold uppercase">${product.brand}</span>
            </div>
          </div>
        </div>

        <!-- Right group: Stock + Price + Actions -->
        <div class="flex items-center justify-between md:justify-end gap-3 sm:gap-6 w-full md:w-auto pt-3 md:pt-0 border-t md:border-t-0 border-zinc-800/80 shrink-0">
          <!-- Stock block centered -->
          <div class="text-center shrink-0 cursor-pointer" onclick="toggleProductStock('${product.id}')" title="Click to toggle stock status">
            <div class="font-mono-custom text-base font-black ${product.inStock ? 'text-white' : 'text-red-400'}">
              # ${product.quantity ?? (product.inStock ? 10 : 0)}
            </div>
            <div class="text-[9px] font-mono-custom uppercase tracking-wider text-zinc-500 font-bold">UNITS IN STOCK</div>
          </div>

          <!-- Price block right-aligned -->
          <div class="text-right shrink-0">
            <div class="text-xs text-zinc-500 line-through font-mono-custom font-bold">₹${product.originalPrice ? product.originalPrice.toLocaleString('en-IN') : product.discountedPrice.toLocaleString('en-IN')}</div>
            <div class="text-lg font-black text-white font-mono-custom leading-tight">₹${product.discountedPrice.toLocaleString('en-IN')}</div>
            <div class="text-[9px] font-mono-custom uppercase tracking-wider text-zinc-500 font-bold">VALUE_SET</div>
          </div>

          <!-- Actions stacked vertically -->
          <div class="flex flex-col items-center gap-2 shrink-0">
            <button onclick="openEditProductModal('${product.id}')" title="Edit Product" class="p-2 rounded-lg text-zinc-500 hover:text-white hover:bg-white/10 transition-colors">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
            </button>
            <button onclick="deleteProduct('${product.id}')" title="Delete Product" class="p-2 rounded-lg text-zinc-500 hover:text-red-400 hover:bg-red-500/10 transition-colors">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><line x1="10" y1="11" x2="10" y2="17"/><line x1="14" y1="11" x2="14" y2="17"/></svg>
            </button>
          </div>
        </div>
      </div>
    `;
  }).join("");
}

// --- BRANDS VIEW (Tab 2: Dynamically Read from state.products, Restyled Row Look) ---
function renderAdminBrands() {
  const container = document.getElementById("admin-brands-list");
  if (!container) return;

  const brandMap = new Map();
  (state.products || []).forEach(p => {
    const b = (p.brand || "GENERIC").trim().toUpperCase();
    if (!brandMap.has(b)) {
      brandMap.set(b, { name: b, count: 0 });
    }
    brandMap.get(b).count++;
  });
  const brands = Array.from(brandMap.values()).sort((a, b) => b.count - a.count);

  if (brands.length === 0) {
    container.innerHTML = `<div class="admin-card rounded-[20px] p-12 text-center text-zinc-500 font-mono-custom text-xs">No brands found in inventory.</div>`;
    return;
  }

  container.innerHTML = brands.map(brand => `
    <div class="admin-card rounded-[20px] p-4 sm:p-5 flex items-center justify-between gap-4 transition-all hover:border-[#333]">
      <div class="flex items-center gap-4">
        <div class="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center font-mono-custom font-black text-base text-[#ff5500]">
          ${brand.name.slice(0, 2)}
        </div>
        <div>
          <h4 class="text-base font-black text-white uppercase font-sans tracking-wide">${brand.name}</h4>
          <span class="pill-neutral mt-1">CATALOGUE LINE</span>
        </div>
      </div>

      <div class="flex items-center gap-6">
        <div class="text-center">
          <div class="font-mono-custom text-base font-black text-white"># ${brand.count}</div>
          <div class="text-[9px] font-mono-custom uppercase tracking-wider text-zinc-500 font-bold">MODELS IN INVENTORY</div>
        </div>

        <button onclick="filterInventoryByBrand('${brand.name}')" class="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-xs font-mono-custom font-bold text-zinc-200 border border-white/10 hover:border-white/20 transition-all flex items-center gap-1.5">
          <span>View Models</span>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14"/><path d="M12 5l7 7-7 7"/></svg>
        </button>
      </div>
    </div>
  `).join("");
}

function filterInventoryByBrand(brandName) {
  state.adminSearchQuery = brandName.toLowerCase();
  const searchInput = document.getElementById("admin-search-input");
  if (searchInput) searchInput.value = brandName;
  switchProductTab("inventory");
}

// --- CATEGORIES TREE VIEW (Tab 3: Search, Table Header, 3-Zone Cards) ---
function renderAdminCategoriesTree() {
  const container = document.getElementById("admin-categories-tree");
  if (!container) return;

  const searchQuery = (document.getElementById("category-search-input")?.value || "").toLowerCase().trim();

  if (!state.categories || state.categories.length === 0) {
    loadAdminCategories();
  }

  const filtered = state.categories.filter(cat => {
    if (!searchQuery) return true;
    if (cat.name.toLowerCase().includes(searchQuery)) return true;
    return (cat.subcategories || []).some(sub => sub.name.toLowerCase().includes(searchQuery));
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="admin-card rounded-[24px] p-12 text-center text-zinc-500 font-mono-custom text-xs">
        No categories found matching "${searchQuery}".
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(cat => {
    const linkedCount = (state.products || []).filter(p => p.category === cat.id).length;

    const subsHtml = (cat.subcategories || []).map(sub => {
      const isFeatured = !!sub.featured;
      return `
        <div class="inline-flex items-center gap-2 px-2.5 py-1.5 rounded-xl border border-zinc-800 bg-[#161616] hover:border-zinc-700 transition-colors shrink-0">
          <button onclick="toggleCategoryFeatured('${cat.id}', '${sub.id}')" title="Toggle Featured Sub-category" class="p-1 rounded hover:bg-white/5 transition-colors">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="${isFeatured ? '#ff5500' : 'none'}" stroke="${isFeatured ? '#ff5500' : '#71717a'}" stroke-width="2">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
          </button>

          <img src="${sub.image || cat.image}" alt="${sub.name}" class="w-10 h-10 rounded-lg object-contain bg-white/5 p-1 border border-zinc-800 shrink-0" onerror="this.src='/logo.png'" />

          <span class="text-xs font-bold text-white uppercase font-sans whitespace-nowrap">${sub.name}</span>

          <div class="h-4 w-px bg-zinc-800"></div>

          <button onclick="editSubCategoryPrompt('${cat.id}', '${sub.id}')" title="Rename Sub-category" class="p-1 text-zinc-500 hover:text-white transition-colors">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
          </button>

          <div class="h-4 w-px bg-zinc-800"></div>

          <button onclick="deleteSubCategory('${cat.id}', '${sub.id}')" title="Delete Sub-category" class="p-1 text-zinc-500 hover:text-red-400 transition-colors">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
          </button>
        </div>
      `;
    }).join("");

    return `
      <div class="admin-card rounded-[24px] p-5 sm:p-6 transition-all hover:border-[#333]">
        <div class="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          
          <!-- ZONE 1: LEFT (~30%) -->
          <div class="flex items-center gap-4 w-full lg:w-[28%] shrink-0">
            <img src="${cat.image}" alt="${cat.name}" class="w-16 h-16 rounded-xl object-contain bg-white/5 p-1 border border-zinc-800 shrink-0" onerror="this.src='/logo.png'" />
            <div class="min-w-0 flex-1">
              <h4 class="text-base font-black text-white uppercase font-sans truncate">${cat.name}</h4>
              <span class="pill-neutral mt-1">${linkedCount} LINKED</span>
            </div>
          </div>

          <!-- ZONE 2: MIDDLE (Subcategory chips wrap) -->
          <div class="flex flex-wrap items-center gap-2.5 flex-1 w-full lg:w-auto">
            ${subsHtml}
            <button onclick="openAddSubCategoryModal('${cat.id}')" title="Add Sub-category" class="inline-flex items-center gap-1.5 px-3 py-2.5 rounded-xl border-2 border-dashed border-zinc-700 hover:border-[#ff5500] text-zinc-400 hover:text-white transition-all text-xs font-mono-custom font-bold uppercase">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
              <span>ADD SUB</span>
            </button>
          </div>

          <!-- ZONE 3: RIGHT (Pencil & Bin) -->
          <div class="flex lg:flex-col items-center justify-end gap-3 shrink-0 self-end lg:self-center w-full lg:w-auto pt-3 lg:pt-0 border-t lg:border-t-0 border-zinc-800">
            <button onclick="editCategoryPrompt('${cat.id}')" title="Edit Main Category" class="p-2 rounded-xl text-zinc-500 hover:text-white hover:bg-white/10 transition-colors">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
            </button>
            <button onclick="deleteCategory('${cat.id}')" title="Delete Category" class="p-2 rounded-xl text-zinc-500 hover:text-red-400 hover:bg-red-500/10 transition-colors">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
            </button>
          </div>

        </div>
      </div>
    `;
  }).join("");
}

// --- PRODUCT ACTIONS (Featured Star, Edit, Delete, Stock Toggle) ---
function toggleProductFeatured(productId) {
  const product = state.products.find(p => p.id === productId);
  if (!product) return;
  product.featured = !product.featured;
  saveProducts();
  renderAdminProducts();
  renderFeaturedProducts();
  showToast(`${product.name.slice(0, 18)}... ${product.featured ? 'marked as Featured' : 'unfeatured'}.`);

  if (isSupabaseConfigured()) {
    supabaseFetch(`products?id=eq.${encodeURIComponent(productId)}`, {
      method: "PATCH",
      body: JSON.stringify({
        featured: product.featured,
        updated_at: new Date().toISOString()
      })
    }).catch(e => console.warn("[Supabase Products] Featured sync failed:", e));
  }
}

async function deleteProduct(productId) {
  const product = state.products.find(p => p.id === productId);
  if (!product) return;
  if (!confirm(`Are you sure you want to delete "${product.name}" from inventory?`)) return;

  // Immediately remove from local state and update all views
  state.products = state.products.filter(p => p.id !== productId);
  saveProducts();
  applyFilters();
  renderAdminProducts();
  renderAdminBrands();
  renderAdminCategoriesTree();
  renderProducts();
  renderFeaturedProducts();
  updateAllProductSteppers();
  showToast(`Product ${product.name.slice(0, 18)}... deleted.`);

  // Cloud deletion: Remove permanently from Supabase products table
  if (isSupabaseConfigured()) {
    try {
      await supabaseFetch(`products?id=eq.${encodeURIComponent(productId)}`, {
        method: "DELETE"
      });
      console.log(`[Supabase Products] Product ${productId} deleted from cloud database.`);
    } catch (err) {
      console.warn(`[Supabase Products] Failed to delete product ${productId} from cloud:`, err);
    }
  }
}

function openEditProductModal(productId) {
  const product = state.products.find(p => p.id === productId);
  if (!product) return;

  const idInput = document.getElementById("edit-product-id");
  const nameInput = document.getElementById("edit-product-name");
  const brandInput = document.getElementById("edit-product-brand");
  const saleInput = document.getElementById("edit-product-sale-price");
  const mrpInput = document.getElementById("edit-product-mrp");
  const qtyInput = document.getElementById("edit-product-quantity");
  const descInput = document.getElementById("edit-product-desc");

  if (idInput) idInput.value = product.id;
  if (nameInput) nameInput.value = product.name;
  if (brandInput) brandInput.value = product.brand;
  if (saleInput) saleInput.value = product.discountedPrice;
  if (mrpInput) mrpInput.value = product.originalPrice;
  if (qtyInput) qtyInput.value = product.quantity ?? (product.inStock ? 10 : 0);
  if (descInput) descInput.value = product.description || "";

  document.getElementById("modal-edit-product")?.classList.add("active");
  document.getElementById("modal-edit-product-backdrop")?.classList.add("active");
}

function closeEditProductModal() {
  document.getElementById("modal-edit-product")?.classList.remove("active");
  document.getElementById("modal-edit-product-backdrop")?.classList.remove("active");
}

function handleSaveEditProduct(e) {
  if (e) e.preventDefault();
  const idInput = document.getElementById("edit-product-id");
  const nameInput = document.getElementById("edit-product-name");
  const brandInput = document.getElementById("edit-product-brand");
  const saleInput = document.getElementById("edit-product-sale-price");
  const mrpInput = document.getElementById("edit-product-mrp");
  const qtyInput = document.getElementById("edit-product-quantity");
  const descInput = document.getElementById("edit-product-desc");

  const productId = idInput?.value;
  const product = state.products.find(p => p.id === productId);
  if (!product) return;

  const newName = nameInput?.value.trim();
  const newBrand = brandInput?.value.trim();
  const newSale = parseInt(saleInput?.value, 10);
  const newMrp = parseInt(mrpInput?.value, 10);
  const newQty = parseInt(qtyInput?.value, 10);

  if (!newName || !newBrand || isNaN(newSale) || newSale <= 0) {
    showToast("Please fill all required fields correctly!");
    return;
  }

  product.name = newName;
  product.brand = newBrand.toUpperCase();
  product.discountedPrice = newSale;
  product.originalPrice = (!isNaN(newMrp) && newMrp >= newSale) ? newMrp : newSale;
  product.quantity = isNaN(newQty) ? 0 : Math.max(0, newQty);
  product.inStock = product.quantity > 0;
  if (descInput) product.description = descInput.value.trim();

  saveProducts();
  applyFilters();
  renderAdminProducts();
  renderAdminBrands();
  renderProducts();
  renderFeaturedProducts();
  updateAllProductSteppers();
  closeEditProductModal();
  showToast(`Updated product "${product.name.slice(0, 18)}..." successfully!`);

  if (isSupabaseConfigured()) {
    supabaseFetch(`products?id=eq.${encodeURIComponent(product.id)}`, {
      method: "PATCH",
      body: JSON.stringify({
        name: product.name,
        brand: product.brand,
        discounted_price: product.discountedPrice,
        original_price: product.originalPrice,
        quantity: product.quantity,
        in_stock: product.inStock,
        description: product.description,
        updated_at: new Date().toISOString()
      })
    }).catch(e => console.warn("[Supabase Products] Edit sync failed:", e));
  }
}

function updateSingleProductPrice(productId) {
  const product = state.products.find(p => p.id === productId);
  if (!product) return;

  const saleInput = document.getElementById(`admin-sale-${productId}`);
  const mrpInput = document.getElementById(`admin-mrp-${productId}`);

  if (!saleInput || !mrpInput) return;

  const newSalePrice = parseInt(saleInput.value, 10);
  const newMrpPrice = parseInt(mrpInput.value, 10);

  if (isNaN(newSalePrice) || newSalePrice < 0) {
    showToast("Invalid Sale Price entered!");
    return;
  }

  product.discountedPrice = newSalePrice;
  if (!isNaN(newMrpPrice) && newMrpPrice >= newSalePrice) {
    product.originalPrice = newMrpPrice;
  }

  saveProducts();
  applyFilters();
  renderAdminProducts();
  renderProducts();
  renderFeaturedProducts();
  updateAllProductSteppers();
  showToast(`Updated Price for ${product.name.slice(0, 18)}... to ₹${newSalePrice.toLocaleString('en-IN')}!`);

  if (isSupabaseConfigured()) {
    supabaseFetch(`products?id=eq.${encodeURIComponent(product.id)}`, {
      method: "PATCH",
      body: JSON.stringify({
        discounted_price: product.discountedPrice,
        original_price: product.originalPrice,
        updated_at: new Date().toISOString()
      })
    }).catch(e => console.warn("[Supabase Products] Price sync failed:", e));
  }
}

function toggleProductStock(productId) {
  const product = state.products.find(p => p.id === productId);
  if (!product) return;

  product.inStock = !product.inStock;
  if (!product.inStock) {
    product.quantity = 0;
  } else if (!product.quantity || product.quantity <= 0) {
    product.quantity = 10;
  }

  saveProducts();
  applyFilters();
  renderAdminProducts();
  renderProducts();
  renderFeaturedProducts();
  updateAllProductSteppers();
  showToast(`${product.name.slice(0, 18)}... status: ${product.inStock ? 'In Stock' : 'Out of Stock'}.`);

  if (isSupabaseConfigured()) {
    supabaseFetch(`products?id=eq.${encodeURIComponent(product.id)}`, {
      method: "PATCH",
      body: JSON.stringify({
        in_stock: product.inStock,
        quantity: product.quantity,
        updated_at: new Date().toISOString()
      })
    }).catch(e => console.warn("[Supabase Products] Stock sync failed:", e));
  }
}

async function resetProductsToDefault() {
  const confirmed = confirm("Are you sure? This will restore original factory defaults to both local storage and cloud database.");
  if (!confirmed) return;

  state.products = JSON.parse(JSON.stringify(PRODUCTS_DATA));
  saveProducts();
  state.categories = JSON.parse(JSON.stringify(DEFAULT_CATEGORIES));
  saveAdminCategories();
  localStorage.removeItem("ntt_orders");
  applyFilters();
  renderAdminProducts();
  renderAdminBrands();
  renderAdminCategoriesTree();
  renderAdminDashboardStats();
  renderAdminOrders();
  renderProducts();
  renderFeaturedProducts();
  updateAllProductSteppers();
  initAddProductForm();
  showToast("Restoring factory defaults...");

  if (isSupabaseConfigured()) {
    try {
      await supabaseFetch("products?id=neq.placeholder", { method: "DELETE" });
      for (const p of PRODUCTS_DATA) {
        await supabaseFetch("products", {
          method: "POST",
          headers: { "Prefer": "resolution=merge-duplicates" },
          body: JSON.stringify({
            id: p.id,
            name: p.name,
            category: p.category,
            category_name: p.categoryName,
            subcategory: p.subcategory || null,
            brand: p.brand,
            original_price: p.originalPrice,
            discounted_price: p.discountedPrice,
            rating: p.rating,
            reviews_count: p.reviewsCount,
            image: p.image,
            description: p.description,
            specs: p.specs,
            in_stock: p.inStock,
            quantity: 10,
            featured: false
          })
        });
      }
      showToast("Factory defaults restored to cloud database!");
    } catch (err) {
      console.warn("Could not reset cloud products:", err);
    }
  }
}

// --- CATEGORY OPERATIONS (Featured Star, Add, Delete, Rename) ---
function toggleCategoryFeatured(catId, subId) {
  const cat = state.categories.find(c => c.id === catId);
  if (!cat) return;
  const sub = (cat.subcategories || []).find(s => s.id === subId);
  if (!sub) return;

  sub.featured = !sub.featured;
  saveAdminCategories();
  renderAdminCategoriesTree();
  showToast(`Sub-category "${sub.name}" ${sub.featured ? 'featured' : 'unfeatured'}.`);
}

function deleteCategory(catId) {
  const cat = state.categories.find(c => c.id === catId);
  if (!cat) return;
  if (!confirm(`Delete main category "${cat.name}" and its subcategories?`)) return;

  state.categories = state.categories.filter(c => c.id !== catId);
  saveAdminCategories();
  renderAdminCategoriesTree();
  populateAdminCategoryDropdown();
  showToast(`Category "${cat.name}" deleted.`);
}

function deleteSubCategory(catId, subId) {
  const cat = state.categories.find(c => c.id === catId);
  if (!cat) return;
  const sub = (cat.subcategories || []).find(s => s.id === subId);
  if (!sub) return;
  if (!confirm(`Delete sub-category "${sub.name}"?`)) return;

  cat.subcategories = (cat.subcategories || []).filter(s => s.id !== subId);
  saveAdminCategories();
  renderAdminCategoriesTree();
  showToast(`Sub-category "${sub.name}" removed.`);
}

function editCategoryPrompt(catId) {
  const cat = state.categories.find(c => c.id === catId);
  if (!cat) return;
  const newName = prompt(`Enter new name for category "${cat.name}":`, cat.name);
  if (newName && newName.trim()) {
    cat.name = newName.trim();
    saveAdminCategories();
    renderAdminCategoriesTree();
    populateAdminCategoryDropdown();
    showToast(`Category renamed to "${cat.name}".`);
  }
}

function editSubCategoryPrompt(catId, subId) {
  const cat = state.categories.find(c => c.id === catId);
  if (!cat) return;
  const sub = (cat.subcategories || []).find(s => s.id === subId);
  if (!sub) return;
  const newName = prompt(`Enter new name for sub-category "${sub.name}":`, sub.name);
  if (newName && newName.trim()) {
    sub.name = newName.trim();
    saveAdminCategories();
    renderAdminCategoriesTree();
    showToast(`Sub-category renamed to "${sub.name}".`);
  }
}

// --- MODAL CONTROLLERS & MEDIA CAPTURE ---
let addProductInStock = true;
let addProductStockManualOverride = false;
let currentProductImageBase64 = "";
let currentCategoryCoverBase64 = "";
let currentSubCategoryThumbBase64 = "";
let webcamStream = null;

function openAddProductModal() {
  document.getElementById("modal-add-product")?.classList.add("active");
  document.getElementById("modal-add-product-backdrop")?.classList.add("active");
  populateAdminBrandDropdown();
  populateAdminCategoryDropdown();
  autoSuggestSkuField();
}

function closeAddProductModal() {
  document.getElementById("modal-add-product")?.classList.remove("active");
  document.getElementById("modal-add-product-backdrop")?.classList.remove("active");
}

function openAddCategoryModal() {
  document.getElementById("modal-add-category")?.classList.add("active");
  document.getElementById("modal-add-category-backdrop")?.classList.add("active");
}

function closeAddCategoryModal() {
  document.getElementById("modal-add-category")?.classList.remove("active");
  document.getElementById("modal-add-category-backdrop")?.classList.remove("active");
}

function openAddSubCategoryModal(catId) {
  const cat = state.categories.find(c => c.id === catId);
  if (!cat) return;

  const parentIdInput = document.getElementById("add-subcategory-parent-id");
  const parentNameSpan = document.getElementById("add-subcategory-parent-name");
  if (parentIdInput) parentIdInput.value = cat.id;
  if (parentNameSpan) parentNameSpan.textContent = cat.name;

  document.getElementById("modal-add-subcategory")?.classList.add("active");
  document.getElementById("modal-add-subcategory-backdrop")?.classList.add("active");
}

function closeAddSubCategoryModal() {
  document.getElementById("modal-add-subcategory")?.classList.remove("active");
  document.getElementById("modal-add-subcategory-backdrop")?.classList.remove("active");
}

function toggleAdminMobileDrawer() {
  const drawer = document.getElementById("admin-mobile-drawer");
  const backdrop = document.getElementById("admin-mobile-backdrop");
  if (drawer && backdrop) {
    const isClosed = drawer.classList.contains("-translate-x-full");
    if (isClosed) {
      drawer.classList.remove("-translate-x-full");
      backdrop.classList.remove("hidden");
    } else {
      drawer.classList.add("-translate-x-full");
      backdrop.classList.add("hidden");
    }
  }
}

function closeAdminMobileDrawer() {
  const drawer = document.getElementById("admin-mobile-drawer");
  const backdrop = document.getElementById("admin-mobile-backdrop");
  if (drawer) drawer.classList.add("-translate-x-full");
  if (backdrop) backdrop.classList.add("hidden");
}

function initAddProductForm() {
  const form = document.getElementById("add-product-form");
  if (!form) return;

  autoSuggestSkuField();
  populateAdminBrandDropdown();
  populateAdminCategoryDropdown();
  updateAddProductStockUI();
}

function populateAdminBrandDropdown() {
  const select = document.getElementById("add-product-brand");
  if (!select) return;

  const brandSet = new Set();
  (state.products || []).forEach(p => {
    const b = (p.brand || "").trim().toUpperCase();
    if (b) brandSet.add(b);
  });
  if (brandSet.size === 0) {
    ["BOSCH", "MAKITA", "DEWALT", "HIKOKI", "STANLEY", "BLACK+DECKER"].forEach(b => brandSet.add(b));
  }
  const sortedBrands = Array.from(brandSet).sort();

  const currentVal = select.value || (sortedBrands[0] || "BOSCH");
  select.innerHTML = sortedBrands.map(b => `<option value="${b}">${b}</option>`).join("") +
    `<option value="__new__">+ New brand</option>`;

  if (currentVal && select.querySelector(`option[value="${currentVal}"]`)) {
    select.value = currentVal;
  }
  onBrandSelectChange(select);
}

function onBrandSelectChange(selectEl) {
  const customInput = document.getElementById("add-product-custom-brand");
  if (!selectEl) return;
  if (selectEl.value === "__new__") {
    if (customInput) {
      customInput.classList.remove("hidden");
      customInput.required = true;
      customInput.focus();
    }
  } else {
    if (customInput) {
      customInput.classList.add("hidden");
      customInput.required = false;
      customInput.value = "";
    }
  }
}

function suggestNextSku() {
  let maxNum = 0;
  if (state.products && state.products.length > 0) {
    state.products.forEach(p => {
      if (!p || !p.id) return;
      const match = String(p.id).match(/^ntt-(\d+)$/i);
      if (match) {
        const num = parseInt(match[1], 10);
        if (!isNaN(num) && num > maxNum) maxNum = num;
      }
    });
  }
  const nextNum = maxNum + 1;
  return `ntt-${String(nextNum).padStart(3, "0")}`;
}

function autoSuggestSkuField() {
  const skuInput = document.getElementById("add-product-sku");
  if (skuInput) {
    skuInput.value = suggestNextSku();
  }
}

function populateAdminCategoryDropdown() {
  const select = document.getElementById("add-product-category");
  if (!select) return;

  if (!state.categories || state.categories.length === 0) {
    loadAdminCategories();
  }

  const currentVal = select.value || "power-tools";
  select.innerHTML = state.categories.map(cat => {
    return `<option value="${cat.id}" data-name="${cat.name}">${cat.name}</option>`;
  }).join("") + `<option value="__new__">+ Add New Category...</option>`;

  if (currentVal && select.querySelector(`option[value="${currentVal}"]`)) {
    select.value = currentVal;
  }

  onCategorySelectChange(select);
}

function onCategorySelectChange(selectEl) {
  const subCategorySelect = document.getElementById("add-product-subcategory");
  const customInput = document.getElementById("add-product-custom-category");

  if (!selectEl) return;

  if (selectEl.value === "__new__") {
    if (customInput) {
      customInput.classList.remove("hidden");
      customInput.focus();
    }
    if (subCategorySelect) {
      subCategorySelect.disabled = true;
      subCategorySelect.classList.add("opacity-50", "cursor-not-allowed");
      subCategorySelect.innerHTML = `<option value="">Select SubCategory...</option>`;
    }
    return;
  }

  if (customInput) {
    customInput.classList.add("hidden");
    customInput.value = "";
  }

  const selectedCat = (state.categories || []).find(c => c.id === selectEl.value);
  if (subCategorySelect) {
    if (selectedCat && selectedCat.subcategories && selectedCat.subcategories.length > 0) {
      subCategorySelect.disabled = false;
      subCategorySelect.classList.remove("opacity-50", "cursor-not-allowed");
      subCategorySelect.innerHTML = `<option value="">Select SubCategory...</option>` +
        selectedCat.subcategories.map(s => `<option value="${s.id}">${s.name}</option>`).join("");
    } else {
      subCategorySelect.disabled = true;
      subCategorySelect.classList.add("opacity-50", "cursor-not-allowed");
      subCategorySelect.innerHTML = `<option value="">No subcategories available</option>`;
    }
  }
}

function onStockQuantityChange(val) {
  const qty = parseInt(val, 10);
  if (!addProductStockManualOverride) {
    addProductInStock = !isNaN(qty) && qty > 0;
    updateAddProductStockUI();
  }
}

function toggleAddProductStockStatus() {
  addProductStockManualOverride = true;
  addProductInStock = !addProductInStock;
  updateAddProductStockUI();
}

function updateAddProductStockUI() {
  const btn = document.getElementById("add-product-stock-btn");
  const dot = document.getElementById("add-product-stock-dot");
  const label = document.getElementById("add-product-stock-label");
  if (!btn || !dot || !label) return;

  if (addProductInStock) {
    btn.className = "w-full py-3 px-4 rounded-2xl text-xs font-bold font-mono-custom transition-all bg-emerald-950/70 border border-emerald-500/40 text-emerald-400 hover:bg-emerald-900/80 flex items-center justify-center gap-2";
    dot.className = "w-2 h-2 rounded-full bg-emerald-400";
    label.textContent = "● In Stock";
  } else {
    btn.className = "w-full py-3 px-4 rounded-2xl text-xs font-bold font-mono-custom transition-all bg-red-950/70 border border-red-500/40 text-red-400 hover:bg-red-900/80 flex items-center justify-center gap-2";
    dot.className = "w-2 h-2 rounded-full bg-red-400";
    label.textContent = "○ Out of Stock";
  }
}

function handleProductImageFile(file) {
  if (!file) return;
  if (!file.type || !file.type.startsWith("image/")) {
    showToast("Please select a valid image file!");
    return;
  }

  const reader = new FileReader();
  reader.onload = function(e) {
    const img = new Image();
    img.onload = function() {
      const maxDim = 800;
      let width = img.width;
      let height = img.height;
      if (width > height && width > maxDim) {
        height = Math.round((height * maxDim) / width);
        width = maxDim;
      } else if (height > maxDim) {
        width = Math.round((width * maxDim) / height);
        height = maxDim;
      }

      const canvas = document.createElement("canvas");
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0, width, height);

      currentProductImageBase64 = canvas.toDataURL("image/jpeg", 0.82);
      showProductImagePreview(
        currentProductImageBase64,
        file.name || "uploaded-tool.jpg",
        `${Math.round((currentProductImageBase64.length * 0.75) / 1024)} KB`
      );
    };
    img.src = e.target.result;
  };
  reader.readAsDataURL(file);
}

function showProductImagePreview(dataUrl, name, sizeText) {
  currentProductImageBase64 = dataUrl;
  const card = document.getElementById("image-preview-card");
  const thumb = document.getElementById("image-preview-thumb");
  const nameEl = document.getElementById("preview-filename");
  const sizeEl = document.getElementById("preview-filesize");
  const removeBtn = document.getElementById("remove-preview-btn");
  const badge = document.getElementById("image-status-badge");

  if (card && thumb) {
    thumb.src = dataUrl;
    if (nameEl) nameEl.textContent = name;
    if (sizeEl) sizeEl.textContent = sizeText || "Ready to save";
    card.classList.remove("hidden");
    if (removeBtn) removeBtn.classList.remove("hidden");
    if (badge) {
      badge.textContent = "Image Ready";
      badge.className = "text-[9px] font-mono-custom uppercase font-bold text-emerald-400 bg-emerald-950/70 border border-emerald-500/30 px-2 py-0.5 rounded";
    }
  }
}

function removeProductImagePreview() {
  currentProductImageBase64 = "";
  const card = document.getElementById("image-preview-card");
  const removeBtn = document.getElementById("remove-preview-btn");
  const badge = document.getElementById("image-status-badge");
  const fileInput = document.getElementById("add-product-file-input");
  const cameraInput = document.getElementById("add-product-camera-input");

  if (card) card.classList.add("hidden");
  if (removeBtn) removeBtn.classList.add("hidden");
  if (fileInput) fileInput.value = "";
  if (cameraInput) cameraInput.value = "";
  if (badge) {
    badge.textContent = "No Image Selected";
    badge.className = "text-[9px] font-mono-custom uppercase font-bold text-zinc-500 bg-zinc-900 border border-[#2a2a2a] px-2 py-0.5 rounded";
  }
}

function triggerCameraCapture() {
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  if (isMobile) {
    const cameraInput = document.getElementById("add-product-camera-input");
    if (cameraInput) cameraInput.click();
    return;
  }

  if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    openWebcamModal();
  } else {
    const cameraInput = document.getElementById("add-product-camera-input");
    if (cameraInput) cameraInput.click();
  }
}

function openWebcamModal() {
  const modal = document.getElementById("webcam-modal-backdrop");
  const video = document.getElementById("webcam-video");
  if (!modal || !video) return;

  modal.classList.remove("hidden");
  navigator.mediaDevices.getUserMedia({ video: { facingMode: "environment" }, audio: false })
    .then(stream => {
      webcamStream = stream;
      video.srcObject = stream;
      video.play();
    })
    .catch(err => {
      console.warn("Desktop webcam unavailable, fallback to camera file input", err);
      closeWebcamModal();
      const cameraInput = document.getElementById("add-product-camera-input");
      if (cameraInput) cameraInput.click();
    });
}

function closeWebcamModal() {
  const modal = document.getElementById("webcam-modal-backdrop");
  const video = document.getElementById("webcam-video");
  if (modal) modal.classList.add("hidden");
  if (webcamStream) {
    webcamStream.getTracks().forEach(track => track.stop());
    webcamStream = null;
  }
  if (video) video.srcObject = null;
}

function captureWebcamSnapshot() {
  const video = document.getElementById("webcam-video");
  const canvas = document.getElementById("webcam-canvas");
  if (!video || !canvas) return;

  canvas.width = video.videoWidth || 640;
  canvas.height = video.videoHeight || 480;
  const ctx = canvas.getContext("2d");
  ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

  currentProductImageBase64 = canvas.toDataURL("image/jpeg", 0.82);
  showProductImagePreview(
    currentProductImageBase64,
    "camera-snapshot.jpg",
    `${Math.round((currentProductImageBase64.length * 0.75) / 1024)} KB`
  );
  closeWebcamModal();
}

function handleAddNewProduct(e) {
  if (e) e.preventDefault();

  const titleInput = document.getElementById("add-product-title");
  const brandSelect = document.getElementById("add-product-brand");
  const customBrandInput = document.getElementById("add-product-custom-brand");
  const skuInput = document.getElementById("add-product-sku");
  const categorySelect = document.getElementById("add-product-category");
  const subcategorySelect = document.getElementById("add-product-subcategory");
  const customCategoryInput = document.getElementById("add-product-custom-category");
  const salePriceInput = document.getElementById("add-product-sale-price");
  const mrpInput = document.getElementById("add-product-mrp");
  const quantityInput = document.getElementById("add-product-quantity");
  const descInput = document.getElementById("add-product-desc");

  const title = (titleInput?.value || "").trim();
  let brand = (brandSelect?.value || "").trim();
  if (brand === "__new__") {
    brand = (customBrandInput?.value || "").trim();
  }
  const sku = (skuInput?.value || "").trim();
  const salePrice = parseInt(salePriceInput?.value, 10);
  const mrp = parseInt(mrpInput?.value, 10);
  const quantity = parseInt(quantityInput?.value, 10);
  const description = (descInput?.value || "").trim();
  const subcategory = (subcategorySelect?.value || "").trim();

  // Validate required fields
  if (!title) {
    showToast("Product Title is required!");
    titleInput?.focus();
    return;
  }
  if (!brand) {
    showToast("Brand is required!");
    if (brandSelect?.value === "__new__") {
      customBrandInput?.focus();
    } else {
      brandSelect?.focus();
    }
    return;
  }
  if (!sku) {
    showToast("SKU is required!");
    skuInput?.focus();
    return;
  }
  if (isNaN(salePrice) || salePrice <= 0) {
    showToast("Please enter a valid Sale Price greater than 0!");
    salePriceInput?.focus();
    return;
  }
  if (isNaN(quantity) || quantity < 0) {
    showToast("Please enter a valid non-negative Quantity!");
    quantityInput?.focus();
    return;
  }

  // Check duplicate SKU
  const existingProductIndex = state.products.findIndex(p => p.id.toLowerCase() === sku.toLowerCase());
  if (existingProductIndex !== -1) {
    if (!confirm(`Product with SKU "${sku}" already exists. Overwrite this item?`)) {
      return;
    }
  }

  // Category resolution
  let categorySlug = categorySelect?.value || "power-tools";
  const selectedOption = categorySelect?.selectedOptions ? categorySelect.selectedOptions[0] : null;
  let categoryName = selectedOption?.getAttribute("data-name") || "Power Tools";

  if (categorySlug === "__new__") {
    const customName = (customCategoryInput?.value || "").trim();
    if (!customName) {
      showToast("Please enter a name for the new category!");
      customCategoryInput?.focus();
      return;
    }
    categoryName = customName;
    categorySlug = customName.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
    
    // Add to categories
    state.categories.push({
      id: categorySlug,
      name: categoryName,
      image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=400&q=80",
      subcategories: []
    });
    saveAdminCategories();
  }

  const image = currentProductImageBase64 || "https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=600&q=80";
  const finalMrp = (!isNaN(mrp) && mrp >= salePrice) ? mrp : salePrice;

  const newProduct = {
    id: sku,
    name: title,
    category: categorySlug,
    categoryName: categoryName,
    subcategory: subcategory,
    brand: brand.toUpperCase(),
    originalPrice: finalMrp,
    discountedPrice: salePrice,
    rating: 5.0,
    reviewsCount: 1,
    image: image,
    description: description || `${brand.toUpperCase()} industrial grade ${title}. Designed for professional reliability and high-durability performance.`,
    specs: {
      "SKU": sku,
      "Brand": brand.toUpperCase(),
      "Category": categoryName,
      "Availability": addProductInStock ? "In Stock" : "Out of Stock",
      "Stock Units": String(quantity)
    },
    inStock: addProductInStock,
    quantity: quantity,
    featured: false
  };

  if (existingProductIndex !== -1) {
    state.products[existingProductIndex] = newProduct;
  } else {
    state.products.unshift(newProduct);
  }

  saveProducts();
  applyFilters();
  renderAdminProducts();
  renderAdminBrands();
  renderAdminCategoriesTree();
  renderProducts();
  renderFeaturedProducts();
  updateAllProductSteppers();
  populateAdminBrandDropdown();
  populateAdminCategoryDropdown();

  showToast(`Product "${title.slice(0, 18)}..." (${sku}) saved!`);
  resetAddProductForm();
  closeAddProductModal();

  if (isSupabaseConfigured()) {
    const supabaseRow = {
      id: newProduct.id,
      name: newProduct.name,
      category: newProduct.category,
      category_name: newProduct.categoryName,
      subcategory: newProduct.subcategory || null,
      brand: newProduct.brand,
      original_price: Number(newProduct.originalPrice),
      discounted_price: Number(newProduct.discountedPrice),
      rating: Number(newProduct.rating || 5.0),
      reviews_count: Number(newProduct.reviewsCount || 0),
      image: newProduct.image,
      description: newProduct.description,
      specs: newProduct.specs || {},
      in_stock: Boolean(newProduct.inStock),
      quantity: Number(newProduct.quantity || 0),
      featured: Boolean(newProduct.featured),
      updated_at: new Date().toISOString()
    };

    supabaseFetch("products", {
      method: "POST",
      headers: { "Prefer": "resolution=merge-duplicates" },
      body: JSON.stringify(supabaseRow)
    }).then(() => {
      console.log(`[Supabase Products] Product ${newProduct.id} synced to cloud.`);
    }).catch(err => {
      console.warn("[Supabase Products] Failed to sync new product:", err);
    });
  }
}

function resetAddProductForm() {
  const form = document.getElementById("add-product-form");
  if (form) form.reset();

  removeProductImagePreview();
  addProductInStock = true;
  addProductStockManualOverride = false;
  updateAddProductStockUI();

  const customCat = document.getElementById("add-product-custom-category");
  if (customCat && customCat.classList) customCat.classList.add("hidden");

  const customBrand = document.getElementById("add-product-custom-brand");
  if (customBrand && customBrand.classList) {
    customBrand.classList.add("hidden");
    customBrand.required = false;
    customBrand.value = "";
  }

  const subSelect = document.getElementById("add-product-subcategory");
  if (subSelect) {
    subSelect.disabled = true;
    subSelect.classList.add("opacity-50", "cursor-not-allowed");
    subSelect.innerHTML = `<option value="">Select SubCategory...</option>`;
  }

  populateAdminBrandDropdown();
  autoSuggestSkuField();
}

// --- CATEGORY & SUB-CATEGORY CREATION HANDLERS ---
function handleCategoryCoverFile(file) {
  if (!file) return;
  const reader = new FileReader();
  reader.onload = function(e) {
    currentCategoryCoverBase64 = e.target.result;
    const preview = document.getElementById("add-category-cover-preview");
    const placeholder = document.getElementById("add-category-cover-placeholder");
    if (preview) {
      preview.src = currentCategoryCoverBase64;
      preview.classList.remove("hidden");
    }
    if (placeholder) placeholder.classList.add("hidden");
  };
  reader.readAsDataURL(file);
}

function handleAddNewCategory(e) {
  if (e) e.preventDefault();
  const nameInput = document.getElementById("add-category-name");
  const name = (nameInput?.value || "").trim();
  if (!name) {
    showToast("Please enter a Category Name!");
    return;
  }

  const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
  const image = currentCategoryCoverBase64 || "https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=400&q=80";

  state.categories.push({
    id: slug,
    name: name,
    image: image,
    subcategories: []
  });

  saveAdminCategories();
  renderAdminCategoriesTree();
  populateAdminCategoryDropdown();
  closeAddCategoryModal();
  if (nameInput) nameInput.value = "";
  currentCategoryCoverBase64 = "";
  showToast(`Category "${name}" created successfully!`);
}

function handleSubCategoryThumbFile(file) {
  if (!file) return;
  const reader = new FileReader();
  reader.onload = function(e) {
    currentSubCategoryThumbBase64 = e.target.result;
    const preview = document.getElementById("add-subcategory-thumb-preview");
    const placeholder = document.getElementById("add-subcategory-thumb-placeholder");
    if (preview) {
      preview.src = currentSubCategoryThumbBase64;
      preview.classList.remove("hidden");
    }
    if (placeholder) placeholder.classList.add("hidden");
  };
  reader.readAsDataURL(file);
}

function handleAddNewSubCategory(e) {
  if (e) e.preventDefault();
  const parentId = document.getElementById("add-subcategory-parent-id")?.value;
  const nameInput = document.getElementById("add-subcategory-name");
  const name = (nameInput?.value || "").trim();

  if (!parentId || !name) {
    showToast("Please enter a Sub-category Name!");
    return;
  }

  const cat = state.categories.find(c => c.id === parentId);
  if (!cat) return;

  const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
  const image = currentSubCategoryThumbBase64 || cat.image;

  if (!cat.subcategories) cat.subcategories = [];
  cat.subcategories.push({
    id: slug,
    name: name,
    image: image,
    featured: false
  });

  saveAdminCategories();
  renderAdminCategoriesTree();
  closeAddSubCategoryModal();
  if (nameInput) nameInput.value = "";
  currentSubCategoryThumbBase64 = "";
  showToast(`Sub-category "${name}" added to ${cat.name}!`);
}

// --- ADD TO CART QUANTITY SELECTION MODAL LOGIC ---
function openQuantityModal(productId) {
  const product = state.products.find(p => p.id === productId);
  if (!product) return;

  state.selectedProductForQty = product;
  state.selectedQtyCount = 1;

  const brandSpan = document.getElementById("qty-modal-product-brand");
  if (brandSpan) brandSpan.textContent = product.brand;

  const nameH4 = document.getElementById("qty-modal-product-name");
  if (nameH4) nameH4.textContent = product.name;

  const priceSpan = document.getElementById("qty-modal-product-unit-price");
  if (priceSpan) priceSpan.textContent = `₹${product.discountedPrice.toLocaleString('en-IN')} / unit`;

  const imgEl = document.getElementById("qty-modal-product-img");
  if (imgEl) imgEl.src = product.image;

  const qtyInput = document.getElementById("qty-modal-input");
  if (qtyInput) qtyInput.value = 1;

  updateQtyModalSubtotal();

  const backdrop = document.getElementById("qty-modal-backdrop");
  const modal = document.getElementById("qty-modal");

  if (backdrop && modal) {
    backdrop.classList.add("active");
    modal.classList.add("active");
  }
}

function closeQuantityModal() {
  document.getElementById("qty-modal-backdrop")?.classList.remove("active");
  document.getElementById("qty-modal")?.classList.remove("active");
}

function changeQtyCount(delta) {
  state.selectedQtyCount = Math.max(1, state.selectedQtyCount + delta);
  const qtyInput = document.getElementById("qty-modal-input");
  if (qtyInput) qtyInput.value = state.selectedQtyCount;
  updateQtyModalSubtotal();
}

function setQtyPreset(count) {
  state.selectedQtyCount = count;
  const qtyInput = document.getElementById("qty-modal-input");
  if (qtyInput) qtyInput.value = count;
  updateQtyModalSubtotal();
}

function updateQtyModalSubtotal() {
  if (!state.selectedProductForQty) return;
  const total = state.selectedProductForQty.discountedPrice * state.selectedQtyCount;
  const subtotalSpan = document.getElementById("qty-modal-subtotal");
  if (subtotalSpan) {
    subtotalSpan.textContent = `₹${total.toLocaleString('en-IN')}`;
  }
}

function confirmAddToCart() {
  if (!state.selectedProductForQty) return;
  addToCart(state.selectedProductForQty.id, state.selectedQtyCount);
  closeQuantityModal();
}

// --- EXPOSE GLOBAL FUNCTIONS TO WINDOW OBJECT ---
window.addToCart = addToCart;
window.openCheckoutModal = openCheckoutModal;
window.closeCheckoutModal = closeCheckoutModal;
window.openQuantityModal = openQuantityModal;
window.closeQuantityModal = closeQuantityModal;
window.changeQtyCount = changeQtyCount;
window.setQtyPreset = setQtyPreset;
window.updateQtyModalSubtotal = updateQtyModalSubtotal;
window.confirmAddToCart = confirmAddToCart;
window.openViewModal = openViewModal;
window.closeViewModal = closeViewModal;
window.openCallModal = openCallModal;
window.closeCallModal = closeCallModal;
window.openCartDrawer = openCartDrawer;
window.closeCartDrawer = closeCartDrawer;
window.removeFromCart = removeFromCart;
window.updateQuantity = updateQuantity;
window.changeCheckoutQty = changeCheckoutQty;
window.closeOrderSuccessModal = closeOrderSuccessModal;
window.resetProductsToDefault = resetProductsToDefault;
window.toggleProductStock = toggleProductStock;
window.updateSingleProductPrice = updateSingleProductPrice;
window.clearAllFilters = clearAllFilters;
window.renderAdminProducts = renderAdminProducts;
window.initAddProductForm = initAddProductForm;
window.suggestNextSku = suggestNextSku;
window.autoSuggestSkuField = autoSuggestSkuField;
window.populateAdminCategoryDropdown = populateAdminCategoryDropdown;
window.onCategorySelectChange = onCategorySelectChange;
window.onStockQuantityChange = onStockQuantityChange;
window.toggleAddProductStockStatus = toggleAddProductStockStatus;
window.handleProductImageFile = handleProductImageFile;
window.showProductImagePreview = showProductImagePreview;
window.removeProductImagePreview = removeProductImagePreview;
window.triggerCameraCapture = triggerCameraCapture;
window.openWebcamModal = openWebcamModal;
window.closeWebcamModal = closeWebcamModal;
window.captureWebcamSnapshot = captureWebcamSnapshot;
window.handleAddNewProduct = handleAddNewProduct;
window.resetAddProductForm = resetAddProductForm;
window.state = state;
window.PRODUCTS_DATA = PRODUCTS_DATA;
window.loadSavedProducts = loadSavedProducts;
window.saveProducts = saveProducts;
window.applyFilters = applyFilters;
window.handleCardStep = handleCardStep;
window.renderCardCartButton = renderCardCartButton;
window.updateAllProductSteppers = updateAllProductSteppers;
window.handleAdminLoginSubmit = handleAdminLoginSubmit;
window.handleAdminLogout = handleAdminLogout;
window.hashPasswordSHA256 = hashPasswordSHA256;
window.isAdminLoggedIn = isAdminLoggedIn;
window.getAdminPasswordHash = getAdminPasswordHash;
window.getProductCartQty = getProductCartQty;

// New Admin Redesign Exports
window.switchAdminSection = switchAdminSection;
window.switchProductTab = switchProductTab;
window.renderAdminDashboardStats = renderAdminDashboardStats;
window.renderAdminOrders = renderAdminOrders;
window.renderAdminBrands = renderAdminBrands;
window.filterInventoryByBrand = filterInventoryByBrand;
window.renderAdminCategoriesTree = renderAdminCategoriesTree;
window.toggleProductFeatured = toggleProductFeatured;
window.deleteProduct = deleteProduct;
window.openEditProductModal = openEditProductModal;
window.closeEditProductModal = closeEditProductModal;
window.handleSaveEditProduct = handleSaveEditProduct;
window.toggleCategoryFeatured = toggleCategoryFeatured;
window.deleteCategory = deleteCategory;
window.deleteSubCategory = deleteSubCategory;
window.editCategoryPrompt = editCategoryPrompt;
window.editSubCategoryPrompt = editSubCategoryPrompt;
window.openAddProductModal = openAddProductModal;
window.closeAddProductModal = closeAddProductModal;
window.openAddCategoryModal = openAddCategoryModal;
window.closeAddCategoryModal = closeAddCategoryModal;
window.handleCategoryCoverFile = handleCategoryCoverFile;
window.handleAddNewCategory = handleAddNewCategory;
window.openAddSubCategoryModal = openAddSubCategoryModal;
window.closeAddSubCategoryModal = closeAddSubCategoryModal;
window.handleSubCategoryThumbFile = handleSubCategoryThumbFile;
window.handleAddNewSubCategory = handleAddNewSubCategory;
window.toggleAdminMobileDrawer = toggleAdminMobileDrawer;
window.closeAdminMobileDrawer = closeAdminMobileDrawer;
window.loadAdminCategories = loadAdminCategories;
window.saveAdminCategories = saveAdminCategories;
window.loadAdminOrders = loadAdminOrders;
window.saveAdminOrders = saveAdminOrders;
window.recordOrderLocally = recordOrderLocally;
window.saveNewOrder = saveNewOrder;
window.syncAdminOrdersFromCloud = syncAdminOrdersFromCloud;
window.isSupabaseConfigured = isSupabaseConfigured;
window.SUPABASE_CONFIG = SUPABASE_CONFIG;
window.setSupabaseCredentials = function(url, anonKey) {
  if (url) SUPABASE_CONFIG.url = url;
  if (anonKey) SUPABASE_CONFIG.anonKey = anonKey;
  return syncAdminOrdersFromCloud();
};
window.updateOrderStatus = updateOrderStatus;
window.clearAdminOrders = clearAdminOrders;
window.dispatchOrderEmail = dispatchOrderEmail;
window.populateAdminBrandDropdown = populateAdminBrandDropdown;
window.onBrandSelectChange = onBrandSelectChange;
window.syncProductsFromCloud = syncProductsFromCloud;
window.syncCategoriesFromCloud = syncCategoriesFromCloud;
window.deleteProduct = deleteProduct;

// Auto-sync products from Supabase cloud database every 10 seconds so deletions/additions reflect in real time on client-side
if (typeof window !== "undefined") {
  setInterval(() => {
    if (isSupabaseConfigured()) {
      syncProductsFromCloud();
    }
  }, 10000);

  // Auto-sync admin orders from Supabase cloud database every 15 seconds while on admin view
  setInterval(() => {
    if (document.getElementById("admin-orders-list") && isSupabaseConfigured()) {
      syncAdminOrdersFromCloud();
    }
  }, 15000);

  // Instant refresh on window focus
  window.addEventListener("focus", () => {
    if (isSupabaseConfigured()) {
      syncProductsFromCloud();
      syncCategoriesFromCloud();
      if (document.getElementById("admin-orders-list")) {
        syncAdminOrdersFromCloud();
      }
    }
  });
}
