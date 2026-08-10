"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Award, PhoneCall, Sun, Moon } from "lucide-react";

interface NavbarProps {
  onRequestQuote: () => void;
}

export default function Navbar({ onRequestQuote }: NavbarProps) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const handleScroll = () => {
      // Background styling toggle
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Scroll progress percentage calculation
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Initial theme set
    const savedTheme = localStorage.getItem("theme");
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initialTheme = savedTheme || (systemPrefersDark ? "dark" : "light");
    setTheme(initialTheme);
    if (initialTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
    localStorage.setItem("theme", nextTheme);
    if (nextTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/#about" },
    { name: "Infrastructure", href: "/infrastructure" },
    { name: "Dealer Inquiry", href: "/dealer-inquiry" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 glass-header shadow-sm transition-all duration-300 ${
        scrolled ? "py-2.5 shadow-md" : "py-3.5"
      }`}
    >
      {/* Scroll Progress Bar */}
      <div className="absolute bottom-0 left-0 h-[2px] bg-accent" style={{ width: `${scrollProgress}%` }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <Image
              src="/images/logo.png"
              alt="Unique Industries Logo"
              width={160}
              height={64}
              className="h-14 w-auto object-contain group-hover:scale-105 transition-transform"
              style={theme === "dark" ? { filter: "invert(1)", mixBlendMode: "screen" } : undefined}
            />
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-semibold tracking-wide transition-colors ${
                    isActive ? "text-accent" : "text-primary dark:text-gray-300 hover:text-accent dark:hover:text-accent"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Action Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="tel:+919312745516"
              className="flex items-center gap-1.5 text-xs font-semibold text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-white transition-colors"
            >
              <PhoneCall size={14} className="text-accent" />
              <span>+91 93127 45516</span>
            </Link>

            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full border border-gray-200 dark:border-navy-700 text-gray-500 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-navy-800 transition-colors cursor-pointer"
              aria-label="Toggle theme"
            >
              {theme === "light" ? <Moon size={15} /> : <Sun size={15} />}
            </button>

            <button
              onClick={onRequestQuote}
              className="px-5 py-2 bg-primary dark:bg-accent hover:bg-navy-800 dark:hover:bg-orange-600 text-white text-xs font-bold tracking-wide rounded-full shadow-lg hover:shadow-navy-900/10 transition-all cursor-pointer"
            >
              Request Quote
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-3">
            {/* Mobile Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-1.5 rounded-full border border-gray-200 dark:border-navy-700 text-gray-500 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-navy-800 transition-colors cursor-pointer"
              aria-label="Toggle theme"
            >
              {theme === "light" ? <Moon size={14} /> : <Sun size={14} />}
            </button>

            <button
              onClick={onRequestQuote}
              className="px-3 py-1.5 bg-accent hover:bg-orange-600 text-white text-xs font-bold rounded-full cursor-pointer"
            >
              Quote
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-primary dark:text-white hover:text-accent transition-colors p-1 cursor-pointer"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white dark:bg-navy-900 border-t border-gray-100 dark:border-navy-800 mt-2.5 overflow-hidden"
          >
            <div className="px-4 py-4 space-y-3 shadow-inner">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`block py-2 text-sm font-semibold tracking-wide transition-colors ${
                      isActive ? "text-accent pl-2 border-l-2 border-accent" : "text-primary dark:text-gray-300 hover:text-accent dark:hover:text-accent"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
              <div className="border-t border-gray-100 dark:border-navy-800 pt-4 flex flex-col gap-3">
                <Link
                  href="tel:+919312745516"
                  className="flex items-center gap-2 text-sm font-semibold text-gray-600 dark:text-gray-400"
                >
                  <PhoneCall size={16} className="text-accent" />
                  <span>+91 93127 45516</span>
                </Link>
                <button
                  onClick={() => {
                    setIsOpen(false);
                    onRequestQuote();
                  }}
                  className="w-full text-center py-2.5 bg-primary dark:bg-accent hover:bg-navy-800 dark:hover:bg-orange-600 text-white text-xs font-bold rounded-lg cursor-pointer"
                >
                  Request a Quote
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
