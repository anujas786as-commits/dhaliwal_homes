"use client";

import React, { useState, useEffect } from "react";
import { MessageSquare } from "lucide-react";

export const WhatsAppWidget: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Reveal button after 1 second of loading
    const timer = setTimeout(() => {
      setIsVisible(true);
      // Briefly show tooltip to draw attention
      setShowTooltip(true);
      const tooltipTimer = setTimeout(() => setShowTooltip(false), 5000);
      return () => clearTimeout(tooltipTimer);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const waUrl = "https://wa.me/61433704645?text=Hello%20Dhaliwal%20Homes%2C%20I%20would%20like%20to%20request%20a%20consultation%20for%20my%20building%20project.";

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center">
      {/* Dynamic Tooltip */}
      <div
        className={`bg-white text-charcoal text-xs font-semibold px-3 py-2 rounded-lg shadow-xl mr-3 border border-gold/20 transition-all duration-300 transform origin-right ${
          showTooltip ? "scale-100 opacity-100 translate-x-0" : "scale-75 opacity-0 translate-x-2 pointer-events-none"
        }`}
      >
        <div className="flex flex-col">
          <span className="text-xs text-gray-400 font-normal uppercase tracking-wider">Online Support</span>
          <span className="text-charcoal font-sans">Chat with an expert</span>
        </div>
        {/* Triangle arrow */}
        <div className="absolute right-[-6px] top-1/2 -translate-y-1/2 w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[6px] border-l-white" />
      </div>

      {/* Pulsing Outer Ring */}
      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="relative flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-2xl hover:bg-[#20ba56] transition-transform duration-300 hover:scale-110 active:scale-95 group focus:outline-none"
        aria-label="Contact Dhaliwal Homes on WhatsApp"
      >
        {/* Pulsing ring animation */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-40 animate-ping group-hover:animate-none -z-10" style={{ animationDuration: "2s" }} />
        
        {/* WhatsApp Icon */}
        <svg
          className="w-7 h-7 fill-current"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.717-1.456L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.965C16.528 2.01 14.069.993 11.488.993c-5.462 0-9.91 4.417-9.914 9.848-.002 1.714.455 3.39 1.324 4.882L1.879 22.09l6.012-1.574zM15.42 12.21c-.24-.12-1.42-.7-1.64-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-1.52-.76-2.5-1.39-3.48-3.08-.26-.45.26-.42.74-1.38.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.195-.47-.393-.407-.54-.415-.14-.007-.3-.008-.46-.008s-.42.06-.64.3c-.22.24-.84.82-.84 2s1.3 2.14 1.48 2.38c.18.24 2.5 3.82 6.06 5.35.85.36 1.5.58 2.01.74.85.27 1.62.23 2.23.14.68-.1 1.42-.58 1.62-1.12.2-.54.2-1.02.14-1.12-.06-.1-.22-.16-.46-.28z" />
        </svg>
      </a>
    </div>
  );
};
