"use client";

import Link from "next/link";
import Image from "next/image";
import { Award, Mail, Phone, MapPin, Clock, ArrowUp, Linkedin, Twitter, Facebook, Youtube } from "lucide-react";

interface FooterProps {
  onRequestQuote: () => void;
}

export default function Footer({ onRequestQuote }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary dark:bg-[#070a10] text-white border-t border-navy-800 dark:border-navy-900/50">
      
      {/* Upper CTA Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-navy-800 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold tracking-wide">Have Technical Specifications to Discuss?</h3>
            <p className="text-sm text-gray-400 mt-1">Get in touch with our design engineers for customized testing equipment solutions.</p>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={onRequestQuote}
              className="px-6 py-3 bg-accent hover:bg-orange-600 text-white text-sm font-bold rounded-lg shadow-lg shadow-orange-500/10 transition-all cursor-pointer"
            >
              Request Quote
            </button>
            <Link
              href="/dealer-inquiry"
              className="px-6 py-3 border border-navy-700 hover:bg-navy-800 text-white text-sm font-bold rounded-lg transition-colors"
            >
              Dealer Inquiry
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* Column 1: Brand & Info */}
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <Image
              src="/images/logo.png"
              alt="Unique Industries Logo"
              width={160}
              height={64}
              className="h-14 w-auto object-contain"
              style={{ filter: "invert(1)", mixBlendMode: "screen" }}
            />
          </div>
          <p className="text-xs text-gray-400 leading-relaxed">
            Unique Industries is a premier manufacturer of high-quality laboratory, scientific, electrical, mechanical, and material testing instruments in India.
          </p>
          <div className="flex items-center gap-3.5">
            <Link href="https://linkedin.com" target="_blank" className="w-8 h-8 rounded-lg bg-navy-800 hover:bg-accent text-gray-300 hover:text-white flex items-center justify-center transition-colors">
              <Linkedin size={15} />
            </Link>
            <Link href="https://twitter.com" target="_blank" className="w-8 h-8 rounded-lg bg-navy-800 hover:bg-accent text-gray-300 hover:text-white flex items-center justify-center transition-colors">
              <Twitter size={15} />
            </Link>
            <Link href="https://facebook.com" target="_blank" className="w-8 h-8 rounded-lg bg-navy-800 hover:bg-accent text-gray-300 hover:text-white flex items-center justify-center transition-colors">
              <Facebook size={15} />
            </Link>
            <Link href="https://youtube.com" target="_blank" className="w-8 h-8 rounded-lg bg-navy-800 hover:bg-accent text-gray-300 hover:text-white flex items-center justify-center transition-colors">
              <Youtube size={15} />
            </Link>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-wider text-accent mb-6">Quick Links</h4>
          <ul className="space-y-3.5 text-xs text-gray-400">
            <li>
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
            </li>
            <li>
              <Link href="/infrastructure" className="hover:text-white transition-colors">Infrastructure</Link>
            </li>
            <li>
              <Link href="/dealer-inquiry" className="hover:text-white transition-colors">Dealer Inquiries</Link>
            </li>
            <li>
              <Link href="/business-profile" className="hover:text-white transition-colors font-semibold text-accent">Business Profile (PDF)</Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Factory Address & Contact */}
        <div className="space-y-4">
          <h4 className="text-xs font-bold uppercase tracking-wider text-accent">Contact Details</h4>
          <ul className="space-y-4 text-xs text-gray-400">
            <li className="flex items-start gap-2.5">
              <MapPin size={16} className="text-accent shrink-0 mt-0.5" />
              <span>Khasra No.- 367/368, Near By Madhyamik Vidyalya, Surya Vihar, Mahiuddinpur, Hisali MuradNagar, Ghaziabad, Pin-Code - 201206, India</span>
            </li>
            <li className="flex items-start gap-2.5">
              <Phone size={16} className="text-accent shrink-0 mt-0.5" />
              <div>
                <Link href="tel:+919312745516" className="hover:text-white transition-colors block">+91 93127 45516</Link>
                <Link href="tel:+918130818486" className="hover:text-white transition-colors block mt-1">+91 81308 18486</Link>
              </div>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail size={16} className="text-accent shrink-0" />
              <Link href="mailto:uniqueindustries2018@gmail.com" className="hover:text-white transition-colors">uniqueindustries2018@gmail.com</Link>
            </li>
            <li className="flex items-center gap-2.5 pt-1">
              <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-accent/15 border border-accent/30 text-accent shrink-0 uppercase tracking-wider">GSTIN</span>
              <span className="font-semibold text-gray-300 tracking-wider select-all">09BMVPA8872N1ZZ</span>
            </li>
            <li className="flex items-start gap-2.5">
              <Clock size={16} className="text-accent shrink-0 mt-0.5" />
              <div>
                <p>Mon - Sat: 9:00 AM - 6:00 PM</p>
                <p className="text-[10px] text-gray-500">Sunday Closed</p>
              </div>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom Footer bar */}
      <div className="bg-navy-900 dark:bg-[#05070a] py-6 border-t border-navy-800 dark:border-navy-900/50 text-xs text-gray-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {currentYear} Unique Industries. All rights reserved. Designed for precision.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <button
              onClick={scrollToTop}
              className="w-8 h-8 rounded bg-navy-800 hover:bg-accent text-white flex items-center justify-center cursor-pointer transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </div>
      </div>

    </footer>
  );
}
