"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare } from "lucide-react";

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Show tooltip after 5 seconds, then hide after 5 seconds, and repeat
    const timer = setTimeout(() => setShowTooltip(true), 5000);
    const hideTimer = setTimeout(() => setShowTooltip(false), 10000);

    return () => {
      clearTimeout(timer);
      clearTimeout(hideTimer);
    };
  }, []);

  const handleWhatsAppClick = () => {
    const phoneNumber = "919312745516"; // Primary contact number
    const text = encodeURIComponent(
      "Hello Unique Industries! I am interested in your testing instruments and would like to receive a catalog and price list."
    );
    window.open(`https://wa.me/${phoneNumber}?text=${text}`, "_blank");
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      {/* Tooltip */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, x: 20, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 20, scale: 0.9 }}
            className="hidden md:block bg-white text-primary text-xs font-semibold px-4 py-2.5 rounded-xl shadow-xl border border-gray-100 max-w-[200px]"
          >
            <p>Need instant quote? Chat with our experts on WhatsApp!</p>
            <div className="absolute right-[-6px] top-1/2 -translate-y-1/2 w-3 h-3 bg-white border-r border-t border-gray-100 rotate-45" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Button */}
      <motion.button
        onClick={handleWhatsAppClick}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="w-14 h-14 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full flex items-center justify-center shadow-2xl transition-colors cursor-pointer relative"
        aria-label="Contact on WhatsApp"
      >
        {/* Pulsing outer ring */}
        <span className="absolute inset-0 rounded-full bg-emerald-500/30 animate-ping -z-10" />
        {/* Custom SVG WhatsApp-like bubble or icon */}
        <MessageSquare size={26} className="fill-white stroke-none" />
      </motion.button>
    </div>
  );
}
