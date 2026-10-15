"use client";

import React, { useState, useEffect } from "react";

export default function Splash() {
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => setVisible(false), 500);
    }, 700);

    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className={`splash-screen ${fadeOut ? "fade-out" : ""}`}>
      <div className="splash-logo-container">
        <div className="splash-pulse-ring"></div>
        <img src="/logo.png" alt="Narindra Express Logo" className="w-12 h-12 object-contain" />
      </div>
      <h2 className="splash-title">Narindra Express</h2>
      <span className="splash-subtitle">Hardware & Heavy Machinery</span>
      <div className="splash-loader-bar">
        <div className="splash-loader-progress"></div>
      </div>
    </div>
  );
}
