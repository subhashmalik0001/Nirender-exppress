# Narindra Express — Professional Grade Industrial E-Commerce Platform

[![Next.js 16](https://img.shields.io/badge/Next.js-16.4.1-black?logo=next.js)](https://nextjs.org/)
[![React 19](https://img.shields.io/badge/React-19.3.1-61dafb?logo=react)](https://react.dev/)
[![Supabase](https://img.shields.io/badge/Supabase-PostgreSQL%20%2B%20Realtime-3ecf8e?logo=supabase)](https://supabase.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS%203.4-38bdf8?logo=tailwind-css)](https://tailwindcss.com/)
[![License: ISC](https://img.shields.io/badge/License-ISC-orange.svg)](https://opensource.org/licenses/ISC)

> **Narindra Express (Since 1998)** — Built for heavy tradesmen, contractors, and industrial workshops across India. Complete e-commerce catalog featuring real-time cloud inventory synchronization, administrative hardware dashboard, webcam snapshot intake, Blinkit-style cart stepper, and multi-channel fulfillment notifications.

---

## 🚀 Live Production Links

- **Live Storefront:** [https://www.narindraexpress.in](https://www.narindraexpress.in)
- **GitHub Repository:** [https://github.com/subhashmalik0001/Nirender-exppress](https://github.com/subhashmalik0001/Nirender-exppress)

---

## ⚡ Key Architectural Features

### 1. Cloud-Native Realtime Synchronization (Supabase PostgreSQL)
- **Zero Local Mock Drift:** All product data, categories, and customer orders are read and written directly to Supabase (`public.products`, `public.categories`, `public.orders`).
- **Postgres Realtime Broadcasts:** Listens for `INSERT`, `UPDATE`, and `DELETE` database mutations via Supabase WebSockets (`supabase_realtime`) with `REPLICA IDENTITY FULL`, keeping all browser tabs and client devices synchronized instantly.
- **Optimistic UI with Automatic Rollback:** Fast UI updates with guaranteed database persistence and automatic rollback on network anomalies.

### 2. High-Tech Industrial Aesthetic
- **Signature Industrial Theme:** Premium Black-White-Orange color palette with glassmorphism overlays and custom typography.
- **Blinkit-Style Cart Stepper:** Quick-add buttons that morph dynamically into count steppers directly on product cards and cart drawers.
- **Micro-Interactions:** Custom loaders, squish-click animations, toast alerts, and responsive off-canvas side drawers.

### 3. Dedicated Administrative Control Center (`/admin`)
- **Real-Time KPI Metrics:** Live tracking of Gross Revenue, Completed Orders, Pending Dispatches, and Average Order Value (AOV).
- **Comprehensive Inventory Management:** Instant live toggles for In-Stock/Out-of-Stock and Home Featured status with instant cloud updates.
- **Webcam Photo Intake:** Direct hardware camera integration in the admin browser to capture and upload tool photos without external uploads.
- **Dynamic Category & Subcategory Builder:** Manage product taxonomy dynamically from the admin panel.

### 4. Multi-Channel Order Fulfillment
- **Automated Order Dispatch:** Saves complete customer shipping details and cart manifests directly into Postgres.
- **Dual Notification Stream:** Instant WhatsApp order link generation alongside direct email confirmation alerts.

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| **Framework** | Next.js 16 (App Router with Turbopack) |
| **UI Library** | React 19 (Server & Client Components) |
| **Database** | Supabase (PostgreSQL with Row Level Security) |
| **Realtime Engine** | Supabase Realtime Channels (PostgreSQL WAL streaming) |
| **Styling** | Vanilla CSS + Tailwind CSS 3.4 |
| **Icons** | Lucide React |
| **Deployment** | Vercel (Edge Network with SSL) |

---

## 📂 Project Structure

```
narindra-techno-tools/
├── app/                        # Next.js App Router Pages
│   ├── layout.js               # Global layout, fonts, and StoreProvider
│   ├── page.js                 # Homepage with Hero & Featured Products
│   ├── products/page.js        # Full Catalog with Brand & Category Filters
│   ├── about/page.js           # Company History & 30-Year Heritage
│   ├── contact/page.js         # Contact & Workshop Location Details
│   └── admin/                  # Administrative Control Center
│       ├── page.js             # Inventory, KPIs, and Order Processing
│       └── login/page.js       # SHA-256 Auth Gated Access
├── components/                 # Reusable UI Components
│   ├── Header.jsx              # Responsive Navigation Bar with Cart Badge
│   ├── Footer.jsx              # Footer Links and Business Details
│   ├── ProductCard.jsx         # Card with Blinkit Stepper & Fast Buy
│   ├── CartDrawer.jsx          # Sliding Bag Drawer with Total Calculation
│   └── ...                     # Modals (QuickView, Checkout, Qty, Call)
├── lib/
│   ├── supabase.js             # Supabase Client, Schemas, and Mappers
│   └── context/
│       └── StoreContext.js     # Global State Management with Realtime Sync
├── supabase/
│   └── migrations/             # SQL Migrations, Table Schemas & RLS Policies
├── public/                     # Static WebP/PNG Assets & Logos
├── package.json                # Project Scripts and Dependencies
└── vercel.json                 # Next.js Deployment Configuration
```

---

## ⚙️ Getting Started Locally

### 1. Clone Repository
```bash
git clone https://github.com/subhashmalik0001/Nirender-exppress.git
cd Nirender-exppress
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Configure Environment Variables
Create a `.env` or `.env.local` file:
```env
NEXT_PUBLIC_SUPABASE_URL=https://qssgwytrtpyxukjypfxy.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### 4. Start Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the storefront, or [http://localhost:3000/admin](http://localhost:3000/admin) for the admin portal.

### 5. Production Build
```bash
npm run build
npm run start
```

---

## 🔒 Security & Data Integrity

- **Row Level Security (RLS):** All tables are safeguarded with granular policies for public storefront access and verified mutations.
- **Zero Local Fallback Masking:** Product lists strictly reflect the cloud database state.
- **Client-Side SHA-256 Hashing:** Admin portal authentication ensures secure access without transmitting raw passwords.

---

## 📝 License
This project is licensed under the ISC License.
