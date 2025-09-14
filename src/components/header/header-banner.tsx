"use client";
import { useState } from "react";
import { Phone, Mail } from "lucide-react";

function SiteBanner() {
  const [isVisible, setIsVisible] = useState(true);

  const dismissBanner = () => setIsVisible(false);

  if (!isVisible) return null;

  return (
    <div className="relative overflow-hidden bg-[#2d2c7a] px-3 py-1.5 shadow-md text-white">
      {/* Decorative background (optional) */}
      <div className="absolute inset-0 flex items-center justify-center opacity-10">
        <div className="h-20 w-20 rotate-12 rounded-full border border-white"></div>
        <div className="absolute -right-3 h-14 w-14 -rotate-12 rounded-full border border-white"></div>
        <div className="absolute -left-4 h-10 w-10 rotate-45 rounded-full border border-white"></div>
      </div>

      {/* Main content row */}
      <div className="relative z-10 flex items-center justify-between">
        {/* Phone + Email */}
        <div className="flex items-center gap-3 text-[12px] sm:text-xs font-medium">
          <a
            href="tel:+917208046058"
            className="flex items-center gap-1 hover:opacity-80 transition"
          >
            <Phone className="h-3.5 w-3.5" />
            +91 720 804 6058
          </a>

          <a
            href="mailto:egcindia2015@gmail.com"
            className="flex items-center gap-1 hover:opacity-80 transition"
          >
            <Mail className="h-3.5 w-3.5" />
            egcindia2015@gmail.com
          </a>
        </div>

        {/* Close Button (always right) */}
        <button
          className="text-sm font-bold hover:opacity-80 transition"
          onClick={dismissBanner}
          aria-label="Dismiss"
        >
          ✕
        </button>
      </div>
    </div>
  );
}

export default SiteBanner;
