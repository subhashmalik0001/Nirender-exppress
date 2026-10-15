"use client";

import React, { createContext, useContext, useState, useEffect, useCallback } from "react";
import {
  supabase,
  DEFAULT_CATEGORIES,
  mapRowToProduct,
  mapProductToRow,
  mapRowToOrder
} from "../supabase";

const StoreContext = createContext(null);

export function StoreProvider({ children }) {
  // --- PRODUCTS STATE (Cloud DB Driven - Supabase SSOT) ---
  const [products, setProducts] = useState([]);
  const [loadingProducts, setLoadingProducts] = useState(true);

  // --- CATEGORIES STATE ---
  const [categories, setCategories] = useState(DEFAULT_CATEGORIES);
  const [loadingCategories, setLoadingCategories] = useState(true);

  // --- ORDERS STATE (Admin) ---
  const [orders, setOrders] = useState([]);
  const [loadingOrders, setLoadingOrders] = useState(true);

  // --- CART STATE ---
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);

  // --- MODALS STATE ---
  const [selectedProductForView, setSelectedProductForView] = useState(null);
  const [selectedProductForCall, setSelectedProductForCall] = useState(null);
  const [selectedProductForQty, setSelectedProductForQty] = useState(null);
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [successOrder, setSuccessOrder] = useState(null);

  // --- FILTER STATES ---
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [brandFilter, setBrandFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  // --- TOAST NOTIFICATION ---
  const [toastMessage, setToastMessage] = useState(null);

  const showToast = useCallback((msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(prev => prev === msg ? null : prev);
    }, 3500);
  }, []);

  // --- LOAD CART FROM LOCALSTORAGE ---
  useEffect(() => {
    try {
      const savedCart = localStorage.getItem("ntt_cart");
      if (savedCart) setCart(JSON.parse(savedCart));
    } catch (e) {
      console.warn("Could not load cart from localStorage", e);
    }
  }, []);

  // --- SAVE CART TO LOCALSTORAGE ---
  useEffect(() => {
    try {
      localStorage.setItem("ntt_cart", JSON.stringify(cart));
    } catch (e) {
      console.warn("Could not save cart to localStorage", e);
    }
  }, [cart]);

  // --- 1. FETCH PRODUCTS FROM SUPABASE CLOUD DATABASE ---
  const fetchProducts = useCallback(async () => {
    try {
      setLoadingProducts(true);
      const { data, error } = await supabase
        .from("products")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        console.error("[Supabase DB] Products fetch error:", error);
        showToast("Error loading catalog from cloud: " + error.message);
      } else if (data) {
        const mapped = data.map(mapRowToProduct).filter(Boolean);
        setProducts(mapped);
      }
    } catch (err) {
      console.error("[Store] Network error fetching cloud products:", err);
    } finally {
      setLoadingProducts(false);
    }
  }, [showToast]);

  // --- 2. FETCH CATEGORIES FROM SUPABASE CLOUD DATABASE ---
  const fetchCategories = useCallback(async () => {
    try {
      setLoadingCategories(true);
      const { data, error } = await supabase
        .from("categories")
        .select("*")
        .order("created_at", { ascending: true });

      if (error) {
        console.warn("[Store] Categories fetch warning:", error.message);
      } else if (data && data.length > 0) {
        const mapped = data.map(r => ({
          id: r.id,
          name: r.name,
          image: r.image || "",
          subcategories: Array.isArray(r.subcategories) ? r.subcategories : []
        }));
        setCategories(mapped);
      }
    } catch (err) {
      console.warn("[Store] Falling back to default categories:", err.message);
    } finally {
      setLoadingCategories(false);
    }
  }, []);

  // --- 3. FETCH ORDERS FROM SUPABASE CLOUD DATABASE ---
  const fetchOrders = useCallback(async () => {
    try {
      setLoadingOrders(true);
      const { data, error } = await supabase
        .from("orders")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        console.error("[Store] Orders fetch error:", error);
      } else if (data) {
        const mapped = data.map(mapRowToOrder).filter(Boolean);
        setOrders(mapped);
      }
    } catch (err) {
      console.error("[Store] Network error fetching orders:", err);
    } finally {
      setLoadingOrders(false);
    }
  }, []);

  // --- INITIAL DATA FETCH + REALTIME SUBSCRIPTIONS ---
  useEffect(() => {
    fetchProducts();
    fetchCategories();
    fetchOrders();

    // 1) Realtime listener for Products table
    const productsChannel = supabase
      .channel("cloud-realtime-products")
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "products" },
        (payload) => {
          console.log("[Supabase Realtime] Products change:", payload.eventType, payload);
          if (payload.eventType === "INSERT") {
            const newProd = mapRowToProduct(payload.new);
            if (newProd) {
              setProducts(prev => {
                const exists = prev.some(p => p.id === newProd.id);
                if (exists) return prev.map(p => p.id === newProd.id ? newProd : p);
                return [newProd, ...prev];
              });
            }
          } else if (payload.eventType === "UPDATE") {
            const updatedProd = mapRowToProduct(payload.new);
            if (updatedProd) {
              setProducts(prev => prev.map(p => p.id === updatedProd.id ? updatedProd : p));
            }
          } else if (payload.eventType === "DELETE") {
            const targetId = payload.old ? payload.old.id : null;
            if (targetId) {
              setProducts(prev => prev.filter(p => p.id !== targetId));
              setCart(prev => prev.filter(p => p.id !== targetId));
            } else {
              // Fallback refresh if ID is missing in payload
              fetchProducts();
            }
          }
        }
      )
      .subscribe();

    // 2) Realtime listener for Orders table
    const ordersChannel = supabase
      .channel("cloud-realtime-orders")
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "orders" },
        (payload) => {
          console.log("[Supabase Realtime] Orders change:", payload.eventType, payload);
          if (payload.eventType === "INSERT") {
            const newOrder = mapRowToOrder(payload.new);
            if (newOrder) {
              setOrders(prev => {
                const exists = prev.some(o => o.id === newOrder.id);
                if (exists) return prev.map(o => o.id === newOrder.id ? newOrder : o);
                return [newOrder, ...prev];
              });
            }
          } else if (payload.eventType === "UPDATE") {
            const updatedOrder = mapRowToOrder(payload.new);
            if (updatedOrder) {
              setOrders(prev => prev.map(o => o.id === updatedOrder.id ? updatedOrder : o));
            }
          } else if (payload.eventType === "DELETE") {
            const targetId = payload.old ? payload.old.id : null;
            if (targetId) {
              setOrders(prev => prev.filter(o => o.id !== targetId));
            } else {
              fetchOrders();
            }
          }
        }
      )
      .subscribe();

    // 3) Realtime listener for Categories table
    const categoriesChannel = supabase
      .channel("cloud-realtime-categories")
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "categories" },
        () => {
          fetchCategories();
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(productsChannel);
      supabase.removeChannel(ordersChannel);
      supabase.removeChannel(categoriesChannel);
    };
  }, [fetchProducts, fetchCategories, fetchOrders]);

  // --- CART OPERATIONS ---
  const addToCart = useCallback((product, qty = 1) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + qty } : item
        );
      } else {
        return [...prev, { ...product, quantity: qty }];
      }
    });
    showToast(`Added ${qty}x ${product.name.slice(0, 20)}... to bag!`);
  }, [showToast]);

  const updateCartQty = useCallback((productId, qty) => {
    if (qty <= 0) {
      removeFromCart(productId);
      return;
    }
    setCart(prev =>
      prev.map(item => item.id === productId ? { ...item, quantity: qty } : item)
    );
  }, []);

  const removeFromCart = useCallback((productId) => {
    setCart(prev => prev.filter(item => item.id !== productId));
    showToast("Item removed from bag.");
  }, [showToast]);

  const clearCart = useCallback(() => {
    setCart([]);
  }, []);

  // --- PRODUCT CRUD OPERATIONS (100% PERSISTED TO CLOUD DB) ---

  // 1) ADD PRODUCT (Insert to Supabase DB)
  const addProduct = async (productData) => {
    const newProduct = {
      ...productData,
      rating: productData.rating || 5.0,
      reviewsCount: productData.reviewsCount || 1,
      inStock: Boolean(productData.inStock),
      quantity: Number(productData.quantity || 10),
      featured: Boolean(productData.featured)
    };

    // Optimistic UI update
    setProducts(prev => {
      const idx = prev.findIndex(p => p.id === newProduct.id);
      if (idx !== -1) {
        const copy = [...prev];
        copy[idx] = newProduct;
        return copy;
      }
      return [newProduct, ...prev];
    });

    try {
      const row = mapProductToRow(newProduct);
      const { data, error } = await supabase
        .from("products")
        .upsert(row, { onConflict: "id" })
        .select();

      if (error) {
        console.error("[Supabase Products] Insert error:", error);
        showToast("Error saving to cloud: " + error.message);
        // Rollback optimistic state
        setProducts(prev => prev.filter(p => p.id !== newProduct.id));
        return { success: false, error };
      } else {
        console.log(`[Supabase Products] Product ${newProduct.id} saved in cloud DB.`);
        showToast(`Product "${newProduct.name.slice(0, 20)}..." saved in cloud!`);
        if (data && data[0]) {
          const synced = mapRowToProduct(data[0]);
          setProducts(prev => prev.map(p => p.id === synced.id ? synced : p));
        }
        return { success: true, data };
      }
    } catch (err) {
      console.error("[Supabase Products] Network error:", err);
      showToast("Network error saving product to cloud.");
      setProducts(prev => prev.filter(p => p.id !== newProduct.id));
      return { success: false, error: err };
    }
  };

  // 2) EDIT PRODUCT (Update row in Supabase DB)
  const editProduct = async (productId, updates) => {
    const original = products.find(p => p.id === productId);
    setProducts(prev =>
      prev.map(p => p.id === productId ? { ...p, ...updates } : p)
    );

    try {
      const target = products.find(p => p.id === productId);
      const merged = { ...target, ...updates };
      const row = mapProductToRow(merged);
      const { data, error } = await supabase
        .from("products")
        .update(row)
        .eq("id", productId)
        .select();

      if (error) {
        console.error("[Supabase Products] Update error:", error);
        showToast("Error updating product in cloud: " + error.message);
        // Rollback
        if (original) {
          setProducts(prev => prev.map(p => p.id === productId ? original : p));
        }
        return { success: false, error };
      } else {
        showToast("Product updated in cloud DB!");
        if (data && data[0]) {
          const synced = mapRowToProduct(data[0]);
          setProducts(prev => prev.map(p => p.id === productId ? synced : p));
        }
        return { success: true, data };
      }
    } catch (err) {
      console.error("[Supabase Products] Network error:", err);
      if (original) {
        setProducts(prev => prev.map(p => p.id === productId ? original : p));
      }
      return { success: false, error: err };
    }
  };

  // 3) DELETE PRODUCT (Delete row permanently from Supabase DB)
  const deleteProduct = async (productId) => {
    const target = products.find(p => p.id === productId);
    const title = target ? target.name.slice(0, 20) : productId;

    // Optimistic removal from state and cart
    setProducts(prev => prev.filter(p => p.id !== productId));
    setCart(prev => prev.filter(p => p.id !== productId));

    try {
      const { error } = await supabase
        .from("products")
        .delete()
        .eq("id", productId);

      if (error) {
        console.error("[Supabase Products] Delete error:", error);
        showToast("Failed to delete from cloud: " + error.message);
        // Rollback
        if (target) {
          setProducts(prev => [target, ...prev]);
        }
        return { success: false, error };
      } else {
        console.log(`[Supabase Products] Product ${productId} deleted from cloud DB.`);
        showToast(`Product "${title}..." permanently deleted.`);
        return { success: true };
      }
    } catch (err) {
      console.error("[Supabase Products] Network error:", err);
      if (target) {
        setProducts(prev => [target, ...prev]);
      }
      showToast("Network error deleting product.");
      return { success: false, error: err };
    }
  };

  // 4) TOGGLE STOCK (Live DB update)
  const toggleProductStock = async (productId) => {
    const target = products.find(p => p.id === productId);
    if (!target) return;

    const newInStock = !target.inStock;
    const newQty = newInStock ? (target.quantity > 0 ? target.quantity : 10) : 0;

    setProducts(prev =>
      prev.map(p => p.id === productId ? { ...p, inStock: newInStock, quantity: newQty } : p)
    );
    showToast(`${target.name.slice(0, 20)}... ${newInStock ? 'In Stock' : 'Out of Stock'}.`);

    try {
      const { error } = await supabase
        .from("products")
        .update({ in_stock: newInStock, quantity: newQty, updated_at: new Date().toISOString() })
        .eq("id", productId);
      if (error) throw error;
    } catch (e) {
      console.warn("Stock toggle sync failed", e);
      setProducts(prev => prev.map(p => p.id === productId ? target : p));
    }
  };

  // 5) TOGGLE FEATURED (Live DB update)
  const toggleProductFeatured = async (productId) => {
    const target = products.find(p => p.id === productId);
    if (!target) return;

    const newFeatured = !target.featured;
    setProducts(prev =>
      prev.map(p => p.id === productId ? { ...p, featured: newFeatured } : p)
    );
    showToast(`${target.name.slice(0, 20)}... ${newFeatured ? 'marked Featured' : 'unfeatured'}.`);

    try {
      const { error } = await supabase
        .from("products")
        .update({ featured: newFeatured, updated_at: new Date().toISOString() })
        .eq("id", productId);
      if (error) throw error;
    } catch (e) {
      console.warn("Featured toggle sync failed", e);
      setProducts(prev => prev.map(p => p.id === productId ? target : p));
    }
  };

  // --- CATEGORIES OPERATIONS (SUPABASE SYNCED) ---
  const addCategory = async (categoryData) => {
    const newCategory = {
      id: categoryData.id || categoryData.name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, ""),
      name: categoryData.name,
      image: categoryData.image || "https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=400&q=80",
      subcategories: categoryData.subcategories || []
    };

    setCategories(prev => [...prev, newCategory]);
    showToast(`Category "${newCategory.name}" added!`);

    try {
      await supabase.from("categories").upsert({
        id: newCategory.id,
        name: newCategory.name,
        image: newCategory.image,
        subcategories: newCategory.subcategories,
        updated_at: new Date().toISOString()
      });
    } catch (e) {
      console.warn("Category add sync failed", e);
    }
  };

  const addSubcategory = async (parentId, subcategoryData) => {
    const subcat = {
      id: subcategoryData.id || subcategoryData.name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, ""),
      name: subcategoryData.name,
      image: subcategoryData.image || "https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=200&q=80",
      featured: Boolean(subcategoryData.featured)
    };

    let updatedCat = null;
    setCategories(prev =>
      prev.map(cat => {
        if (cat.id === parentId) {
          updatedCat = { ...cat, subcategories: [...(cat.subcategories || []), subcat] };
          return updatedCat;
        }
        return cat;
      })
    );
    showToast(`Subcategory "${subcat.name}" added!`);

    if (updatedCat) {
      try {
        await supabase
          .from("categories")
          .update({ subcategories: updatedCat.subcategories, updated_at: new Date().toISOString() })
          .eq("id", parentId);
      } catch (e) {
        console.warn("Subcategory add sync failed", e);
      }
    }
  };

  const deleteCategory = async (categoryId) => {
    setCategories(prev => prev.filter(c => c.id !== categoryId));
    showToast("Category removed.");

    try {
      await supabase.from("categories").delete().eq("id", categoryId);
    } catch (e) {
      console.warn("Category delete sync failed", e);
    }
  };

  // --- ORDERS / CHECKOUT PIPELINE (SUPABASE + DUAL DISPATCH) ---
  const submitOrder = async (orderPayload) => {
    const orderId = orderPayload.id || `NTT-${Date.now().toString().slice(-6)}`;
    const fullOrder = {
      id: orderId,
      date: new Date().toISOString(),
      customer: orderPayload.customer,
      items: orderPayload.items,
      itemsText: orderPayload.itemsText || orderPayload.items.map(i => `${i.quantity}x ${i.name}`).join(", "),
      subtotal: orderPayload.subtotal,
      deliveryCharge: orderPayload.deliveryCharge || 50,
      total: orderPayload.total,
      status: "PROCESSING",
      emailStatus: "PENDING"
    };

    // 1. Optimistic local update
    setOrders(prev => [fullOrder, ...prev]);
    clearCart();
    setCheckoutOpen(false);
    setSuccessOrder(fullOrder);

    // 2. Safeguard A: Immediate Supabase write
    try {
      const row = {
        id: fullOrder.id,
        customer_name: fullOrder.customer.name,
        phone: fullOrder.customer.phone,
        alt_phone: fullOrder.customer.altPhone || null,
        email: fullOrder.customer.email || null,
        address: fullOrder.customer.address,
        city: fullOrder.customer.city || null,
        state: fullOrder.customer.state || null,
        pincode: fullOrder.customer.pincode || null,
        payment_method: "Cash on Delivery (COD)",
        items: fullOrder.items,
        items_text: fullOrder.itemsText,
        subtotal: fullOrder.subtotal,
        delivery_charge: fullOrder.deliveryCharge,
        total: fullOrder.total,
        status: fullOrder.status,
        email_status: fullOrder.emailStatus,
        created_at: fullOrder.date,
        updated_at: fullOrder.date
      };

      const { error } = await supabase.from("orders").insert(row);
      if (error) {
        console.error("[Supabase Orders] Insertion failed:", error);
      } else {
        console.log(`[Supabase Orders] Order ${orderId} saved to database.`);
      }
    } catch (err) {
      console.warn("[Supabase Orders] Cloud sync error:", err);
    }

    // 3. Safeguard B: Dual-channel email dispatch
    dispatchOrderEmail(fullOrder);

    showToast(`Order ${orderId} Placed Successfully!`);
    return fullOrder;
  };

  const dispatchOrderEmail = async (orderData) => {
    const payload = {
      _subject: `⚡ NEW ORDER PLACED! - Narindra Express (#${orderData.id})`,
      _template: "table",
      _captcha: "false",
      _url: "https://www.narindraexpress.in",
      Store_Domain: "www.narindraexpress.in",
      Live_Store_URL: "https://www.narindraexpress.in",
      Admin_Dashboard: "https://www.narindraexpress.in/admin",
      Order_ID: orderData.id,
      Customer_Name: orderData.customer?.name || "Customer",
      Customer_Phone: orderData.customer?.phone || "N/A",
      Alt_Phone: orderData.customer?.altPhone || "N/A",
      Customer_Email: orderData.customer?.email || "Not Provided",
      Delivery_Address: orderData.customer?.address || "N/A",
      City: orderData.customer?.city || "N/A",
      State: orderData.customer?.state || "Punjab",
      Pincode: orderData.customer?.pincode || "N/A",
      Payment_Method: "Cash on Delivery (COD)",
      Ordered_Items: orderData.itemsText,
      Items_Subtotal: `₹${(orderData.subtotal || 0).toLocaleString('en-IN')}`,
      Delivery_Charge: "₹50 (Flat Delivery)",
      Total_Amount_Payable: `₹${(orderData.total || 0).toLocaleString('en-IN')}`,
      Order_Timestamp: new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })
    };

    if (orderData.customer?.email && orderData.customer.email.includes("@")) {
      payload._replyto = orderData.customer.email;
    }

    try {
      const res = await fetch("https://formsubmit.co/ajax/Narindraexpress1@gmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify(payload)
      });
      const result = await res.json().catch(() => ({}));
      const isSuccess = res.ok && (result.success === true || result.success === "true");

      if (isSuccess) {
        setOrders(prev =>
          prev.map(o => o.id === orderData.id ? { ...o, emailStatus: "DELIVERED" } : o)
        );
        await supabase
          .from("orders")
          .update({ email_status: "DELIVERED", updated_at: new Date().toISOString() })
          .eq("id", orderData.id);
      } else {
        setOrders(prev =>
          prev.map(o => o.id === orderData.id ? { ...o, emailStatus: "FAILED_DELIVERY", status: "PROCESSING (Email Issue)" } : o)
        );
        await supabase
          .from("orders")
          .update({ email_status: "FAILED_DELIVERY", status: "PROCESSING (Email Issue)", updated_at: new Date().toISOString() })
          .eq("id", orderData.id);
      }
    } catch (e) {
      console.warn("[Email Dispatch] Failed:", e);
    }
  };

  const updateOrderStatus = async (orderId, newStatus) => {
    setOrders(prev =>
      prev.map(o => o.id === orderId ? { ...o, status: newStatus } : o)
    );
    showToast(`Order ${orderId} set to ${newStatus}`);

    try {
      await supabase
        .from("orders")
        .update({ status: newStatus, updated_at: new Date().toISOString() })
        .eq("id", orderId);
    } catch (e) {
      console.warn("Order status update failed", e);
    }
  };

  const clearAllOrders = async () => {
    setOrders([]);
    showToast("All orders cleared from pipeline.");

    try {
      await supabase.from("orders").delete().neq("id", "placeholder_protection");
    } catch (e) {
      console.warn("Clear orders failed", e);
    }
  };

  // --- DERIVED METRICS ---
  const cartSubtotal = cart.reduce(
    (sum, item) => sum + (item.discountedPrice * item.quantity),
    0
  );
  const cartTotal = cart.length > 0 ? cartSubtotal + 50 : 0;
  const cartCount = cart.reduce((count, item) => count + item.quantity, 0);

  return (
    <StoreContext.Provider
      value={{
        products,
        loadingProducts,
        categories,
        orders,
        loadingOrders,
        cart,
        cartOpen,
        setCartOpen,
        cartSubtotal,
        cartTotal,
        cartCount,
        addToCart,
        updateCartQty,
        removeFromCart,
        clearCart,
        addProduct,
        editProduct,
        deleteProduct,
        toggleProductStock,
        toggleProductFeatured,
        addCategory,
        addSubcategory,
        deleteCategory,
        submitOrder,
        updateOrderStatus,
        clearAllOrders,
        fetchOrders,
        fetchProducts,
        selectedProductForView,
        setSelectedProductForView,
        selectedProductForCall,
        setSelectedProductForCall,
        selectedProductForQty,
        setSelectedProductForQty,
        checkoutOpen,
        setCheckoutOpen,
        successOrder,
        setSuccessOrder,
        categoryFilter,
        setCategoryFilter,
        brandFilter,
        setBrandFilter,
        searchQuery,
        setSearchQuery,
        toastMessage,
        showToast
      }}
    >
      {children}
    </StoreContext.Provider>
  );
}

export function useStore() {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error("useStore must be used within a StoreProvider");
  }
  return context;
}
