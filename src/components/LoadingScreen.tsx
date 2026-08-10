"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cpu } from "lucide-react";

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsVisible(false), 300);
          return 100;
        }
        return prev + Math.floor(Math.random() * 15) + 5;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-primary"
        >
          {/* Background grid */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(249,115,22,0.08),transparent)] pointer-events-none" />
          
          <div className="relative z-10 flex flex-col items-center">
            {/* Spinning Industrial Gear / Cog SVG */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
              className="mb-6 text-accent"
            >
              <Cpu size={64} className="stroke-[1.5]" />
            </motion.div>

            {/* Title */}
            <h1 className="text-2xl font-bold tracking-widest text-white uppercase mb-2">
              Unique Industries
            </h1>
            <p className="text-sm font-medium tracking-wider text-gray-400 uppercase mb-8">
              Precision Testing Instruments
            </p>

            {/* Progress Container */}
            <div className="w-64 h-1.5 bg-navy-800 rounded-full overflow-hidden relative">
              <motion.div
                className="h-full bg-accent rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${Math.min(progress, 100)}%` }}
                transition={{ duration: 0.1 }}
              />
            </div>

            {/* Percentage */}
            <div className="mt-3 text-xs font-mono tracking-widest text-accent">
              {Math.min(progress, 100)}% LOADED
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
