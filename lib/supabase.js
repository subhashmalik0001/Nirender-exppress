import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://qssgwytrtpyxukjypfxy.supabase.co";
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFzc2d3eXRydHB5eHVranlwZnh5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTIwNDY1MjksImV4cCI6MjEwNzYyMjUyOX0.DjLggD9Wdg8pGRzZA8gGRybcJ0doyG4kAL20-0i_8uU";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Default catalog fallback in case of offline or initial sync
export const DEFAULT_PRODUCTS = [
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
    inStock: true,
    quantity: 25,
    featured: true
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
    inStock: true,
    quantity: 18,
    featured: true
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
    inStock: true,
    quantity: 12,
    featured: true
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
    inStock: true,
    quantity: 8,
    featured: true
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
    inStock: true,
    quantity: 6,
    featured: false
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
    inStock: true,
    quantity: 15,
    featured: false
  },
  {
    id: "ntt-007",
    name: "ESAB Sentinel A50 Auto-Darkening Welding Helmet",
    category: "welding",
    categoryName: "Welding Equipment",
    brand: "ESAB",
    originalPrice: 17500,
    discountedPrice: 13900,
    rating: 4.9,
    reviewsCount: 88,
    image: "https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=600&q=80",
    description: "Revolutionary shell design, ergonomic 5-point headgear, and high clarity true-color optical class lens for maximum eye protection.",
    specs: { "Viewing Area": "100 x 60 mm", "Optical Class": "1/1/1/2", Shades: "DIN 5-8 / 9-13", Sensors: "4 Arc Sensors" },
    inStock: true,
    quantity: 10,
    featured: false
  },
  {
    id: "ntt-008",
    name: "Taparia 1272 Professional Mechanical Tool Set (72 Pcs)",
    category: "hand-tools",
    categoryName: "Hand Tools",
    brand: "TAPARIA",
    originalPrice: 7800,
    discountedPrice: 5850,
    rating: 4.9,
    reviewsCount: 156,
    image: "https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?auto=format&fit=crop&w=600&q=80",
    description: "All-in-one comprehensive mechanic toolkit with chrome vanadium sockets, ratchet handles, extension bars, and combination wrenches.",
    specs: { Pieces: "72 Pieces", Material: "Chrome Vanadium Steel", Drive: "1/2 inch & 1/4 inch", Finish: "Mirror Chrome" },
    inStock: true,
    quantity: 30,
    featured: false
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
    reviewsCount: 43,
    image: "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?auto=format&fit=crop&w=600&q=80",
    description: "Cast iron construction bench vice with 360-degree swivel base, precision-machined anvil surface, and hardened steel serrated jaws.",
    specs: { "Jaw Width": "150 mm", "Jaw Opening": "150 mm", "Clamping Force": "2500 kg", Weight: "14.5 kg" },
    inStock: true,
    quantity: 14,
    featured: false
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
    reviewsCount: 92,
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80",
    description: "Industry-standard precision caliper with AOS inductive sensor technology, hardened stainless steel jaws, and high-readout LCD screen.",
    specs: { Range: "0 - 150 mm", Resolution: "0.01 mm", Accuracy: "+/- 0.02 mm", Origin: "Japan Genuine" },
    inStock: true,
    quantity: 11,
    featured: false
  },
  {
    id: "ntt-011",
    name: "Bosch GLM 50-27 CG Professional Green Laser Measure",
    category: "measuring",
    categoryName: "Measuring & Precision",
    brand: "BOSCH",
    originalPrice: 14500,
    discountedPrice: 11800,
    rating: 4.8,
    reviewsCount: 67,
    image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=600&q=80",
    description: "Rugged green laser tape with Bluetooth connectivity, IP65 water/dust resistance, and drop resilience up to 1.5 meters on hard concrete.",
    specs: { "Measuring Range": "0.05 - 50.00 m", "Laser Diode": "515 nm (Green)", Accuracy: "+/- 1.5 mm", "Battery Type": "2x 1.5V LR6 AA" },
    inStock: true,
    quantity: 9,
    featured: false
  },
  {
    id: "ntt-012",
    name: "Makita 100mm Diamond Cutting Wheel Discs (Pack of 10)",
    category: "abrasives",
    categoryName: "Cutting & Abrasives",
    brand: "MAKITA",
    originalPrice: 1850,
    discountedPrice: 1390,
    rating: 4.7,
    reviewsCount: 140,
    image: "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?auto=format&fit=crop&w=600&q=80",
    description: "Continuous rim diamond segment blades for fast, chip-free cutting of granite, marble, porcelain tiles, and hard concrete slabs.",
    specs: { Diameter: "100 mm (4 inch)", Bore: "20 / 16 mm", "Max RPM": "15300 RPM", "Pack Quantity": "10 Pieces" },
    inStock: true,
    quantity: 50,
    featured: false
  }
];

export const DEFAULT_CATEGORIES = [
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
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=400&q=80",
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
    image: "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?auto=format&fit=crop&w=400&q=80",
    subcategories: [
      { id: "cutting-wheels", name: "Cutting Wheels", image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=200&q=80", featured: true },
      { id: "flap-discs", name: "Flap Discs", image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=200&q=80", featured: true },
      { id: "grinding-wheels", name: "Grinding Wheels", image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=200&q=80", featured: false },
      { id: "diamond-blades", name: "Diamond Blades", image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=200&q=80", featured: false }
    ]
  }
];

// Helper to normalize Supabase product row to frontend format
export function mapRowToProduct(r) {
  if (!r) return null;
  return {
    id: r.id,
    name: r.name || "Untitled Product",
    category: r.category || "power-tools",
    categoryName: r.category_name || r.categoryName || "Tools",
    subcategory: r.subcategory || "",
    brand: (r.brand || "GENUINE").toUpperCase(),
    originalPrice: Number(r.original_price ?? r.originalPrice ?? 0),
    discountedPrice: Number(r.discounted_price ?? r.discountedPrice ?? 0),
    rating: Number(r.rating || 5.0),
    reviewsCount: Number(r.reviews_count ?? r.reviewsCount ?? 0),
    image: r.image || "https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=600&q=80",
    description: r.description || "",
    specs: (typeof r.specs === "object" && r.specs) ? r.specs : {},
    inStock: Boolean(r.in_stock ?? r.inStock ?? true),
    quantity: Number(r.quantity ?? 10),
    featured: Boolean(r.featured),
    createdAt: r.created_at || r.createdAt || new Date().toISOString(),
    updatedAt: r.updated_at || r.updatedAt || new Date().toISOString()
  };
}

// Helper to map frontend product to Supabase row format (strictly matches products table schema)
export function mapProductToRow(p) {
  if (!p) return null;
  const discPrice = Number(p.discountedPrice ?? p.discounted_price ?? 0);
  const origPrice = Number(p.originalPrice ?? p.original_price ?? discPrice);
  return {
    id: p.id,
    name: p.name || "Untitled Product",
    category: p.category || "power-tools",
    category_name: p.categoryName || p.category_name || "Tools",
    subcategory: p.subcategory || null,
    brand: (p.brand || "GENUINE").toUpperCase(),
    original_price: isNaN(origPrice) ? (isNaN(discPrice) ? 0 : discPrice) : origPrice,
    discounted_price: isNaN(discPrice) ? 0 : discPrice,
    rating: Number(p.rating || 5.0),
    reviews_count: Number(p.reviewsCount ?? p.reviews_count ?? 0),
    image: p.image || "https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=600&q=80",
    description: p.description || "",
    specs: (typeof p.specs === "object" && p.specs) ? p.specs : {},
    in_stock: Boolean(p.inStock ?? p.in_stock ?? true),
    quantity: Number(p.quantity ?? 10),
    featured: Boolean(p.featured ?? false),
    created_at: p.createdAt || p.created_at || new Date().toISOString(),
    updated_at: new Date().toISOString()
  };
}

// Helper to map Supabase order row
export function mapRowToOrder(r) {
  return {
    id: r.id,
    date: r.created_at,
    customer: {
      name: r.customer_name,
      phone: r.phone,
      altPhone: r.alt_phone || "",
      email: r.email || "",
      address: r.address,
      city: r.city || "",
      state: r.state || "",
      pincode: r.pincode || ""
    },
    items: Array.isArray(r.items) ? r.items : [],
    itemsText: r.items_text || "",
    subtotal: Number(r.subtotal || 0),
    deliveryCharge: Number(r.delivery_charge || 50),
    total: Number(r.total || 0),
    status: r.status || "PROCESSING",
    emailStatus: r.email_status || "PENDING"
  };
}
