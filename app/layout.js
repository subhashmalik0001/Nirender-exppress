import "./globals.css";
import { StoreProvider } from "@/lib/context/StoreContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import QuickViewModal from "@/components/QuickViewModal";
import QtyModal from "@/components/QtyModal";
import CallNowModal from "@/components/CallNowModal";
import CheckoutModal from "@/components/CheckoutModal";
import OrderSuccessModal from "@/components/OrderSuccessModal";
import Toast from "@/components/Toast";
import Splash from "@/components/Splash";

export const viewport = {
  themeColor: "#0a0a0a",
};

export const metadata = {
  metadataBase: new URL("https://www.narindraexpress.in"),
  title: "Narindra Express - Professional Grade Tools & Heavy Machinery",
  description: "Narindra Express offers products designed to meet the needs of professionals and DIY enthusiasts alike. Built to last, providing reliability and performance for all your industrial projects.",
  keywords: "narindra express, industrial tools india, hardware store kotkapura, power tools online, bosch tools india, makita angle grinder, dewalt drill machine, esab welding machine, mitutoyo vernier caliper",
  openGraph: {
    title: "Narindra Express - Since 1998",
    description: "Professional-grade hardware for the modern tradesman. Heavy machinery, power tools, and welding equipment.",
    url: "https://www.narindraexpress.in",
    siteName: "Narindra Express",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 600,
        alt: "Narindra Express Logo",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:ital,wght@1,800&family=Baloo+2:wght@400;500;600;700;800&family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#0a0a0a] text-zinc-100 flex flex-col min-h-screen font-sans selection:bg-[#ff5500] selection:text-white">
        <StoreProvider>
          <Splash />
          <Header />
          <div className="flex-1 flex flex-col">
            {children}
          </div>
          <Footer />

          {/* Global Interactive Modals & Drawers */}
          <CartDrawer />
          <QuickViewModal />
          <QtyModal />
          <CallNowModal />
          <CheckoutModal />
          <OrderSuccessModal />
          <Toast />
        </StoreProvider>
      </body>
    </html>
  );
}
