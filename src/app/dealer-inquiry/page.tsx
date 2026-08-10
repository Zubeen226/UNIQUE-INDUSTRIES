"use client";

import { useState } from "react";
import { Globe, MapPin, Send, CheckCircle, Award, Sparkles } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import QuoteModal from "@/components/QuoteModal";
import confetti from "canvas-confetti";
import { sendEmailQuery } from "@/utils/email";

export default function DealerInquiryPage() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    region: "",
    sectors: "",
    currentProducts: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      await sendEmailQuery({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        company: formData.company,
        inquiry_type: "Partnership",
        message: `Target Territory Region: ${formData.region || "None"}\nClient Sectors: ${formData.sectors || "None"}\nCurrent Products Handled: ${formData.currentProducts || "None"}\n\nBrief Cover Letter / Company Profile: ${formData.message || "None"}`,
        attachment: "None",
      });

      setSubmitting(false);
      setSuccess(true);
      confetti({
        particleCount: 100,
        spread: 80,
        origin: { y: 0.65 },
        colors: ["#F97316", "#0F172A", "#1E293B"],
      });
    } catch (error) {
      console.error("Failed to submit dealer inquiry via EmailJS:", error);
      setSubmitting(false);
    }
  };

  return (
    <>
      <Navbar onRequestQuote={() => setIsQuoteOpen(true)} />

      <main className="min-h-screen bg-white pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-accent flex items-center justify-center gap-1.5">
              <Sparkles size={12} />
              Distribution Network
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-primary tracking-tight">
              Authorized Distributorship Program
            </h1>
            <div className="w-16 h-1 bg-accent rounded mx-auto" />
            <p className="text-sm text-navy-500 max-w-xl mx-auto leading-relaxed">
              Partner with Unique Industries to deliver high-performance testing instruments to industrial quality laboratories and testing centers in your region.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            
            {/* Left Column - Partnership Value */}
            <div className="space-y-8">
              <h2 className="text-xl font-bold text-primary">Why Partner with Us?</h2>
              
              <div className="space-y-6">
                {[
                  {
                    title: "Comprehensive Instrument Catalog",
                    desc: "Access a wide portfolio of rubber, plastic, cable, leather, and construction testing equipment designed to support national and global testing norms.",
                  },
                  {
                    title: "Engineering & Technical Backing",
                    desc: "Our design division coordinates directly with your clients to supply technical drawings, custom modifications, and calibration specifications.",
                  },
                  {
                    title: "Marketing & Training Support",
                    desc: "Receive catalog print formats, technical specification sheets, and detailed operational training for your sales and maintenance team.",
                  },
                  {
                    title: "Protected Sales Regions",
                    desc: "Eligible distributors receive exclusive regional representation to manage local inquiries and supply contracts with high profit margins.",
                  },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="w-10 h-10 rounded-lg bg-orange-50 text-accent flex items-center justify-center shrink-0 mt-0.5">
                      <Award size={20} />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-primary tracking-tight">{item.title}</h3>
                      <p className="text-xs text-navy-500 leading-relaxed mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Inquiry Form */}
            <div className="bg-navy-50 p-8 rounded-2xl border border-gray-100 shadow-sm">
              {success ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center mb-4">
                    <CheckCircle size={36} />
                  </div>
                  <h3 className="text-lg font-bold text-primary mb-2">Dealer Inquiry Submitted!</h3>
                  <p className="text-xs text-navy-500 max-w-xs">
                    Thank you, <span className="font-semibold text-primary">{formData.name}</span>.
                    Our business development team will review your corporate profile and contact you at{" "}
                    <span className="font-semibold text-primary">{formData.email}</span> within 2-3 business days.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h3 className="text-lg font-bold text-primary">Submit Inquiry</h3>
                  
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[10px] font-bold uppercase tracking-wider text-gray-500 mb-1.5">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-xs bg-white focus:outline-none focus:border-accent"
                          placeholder="Your Name"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold uppercase tracking-wider text-gray-500 mb-1.5">
                          Company Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-xs bg-white focus:outline-none focus:border-accent"
                          placeholder="Distribution Co."
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[10px] font-bold uppercase tracking-wider text-gray-500 mb-1.5">
                          Work Email *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-xs bg-white focus:outline-none focus:border-accent"
                          placeholder="info@distributor.com"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold uppercase tracking-wider text-gray-500 mb-1.5">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-xs bg-white focus:outline-none focus:border-accent"
                          placeholder="+91"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-wider text-gray-500 mb-1.5">
                        Target Representation Region / Territory *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.region}
                        onChange={(e) => setFormData({ ...formData, region: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-xs bg-white focus:outline-none focus:border-accent"
                        placeholder="e.g. Western India, Gujarat & Maharashtra, or Country Name"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[10px] font-bold uppercase tracking-wider text-gray-500 mb-1.5">
                          Current Products Handled
                        </label>
                        <input
                          type="text"
                          value={formData.currentProducts}
                          onChange={(e) => setFormData({ ...formData, currentProducts: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-xs bg-white focus:outline-none focus:border-accent"
                          placeholder="e.g. Weighing balances, ovens"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold uppercase tracking-wider text-gray-500 mb-1.5">
                          Target Client Sectors
                        </label>
                        <input
                          type="text"
                          value={formData.sectors}
                          onChange={(e) => setFormData({ ...formData, sectors: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-xs bg-white focus:outline-none focus:border-accent"
                          placeholder="e.g. Polymer, Auto parts"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-wider text-gray-500 mb-1.5">
                        Brief Cover Letter / Company Profile
                      </label>
                      <textarea
                        rows={3}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-xs bg-white focus:outline-none focus:border-accent"
                        placeholder="Describe your current distribution network and sales team capacity..."
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-3 bg-primary hover:bg-navy-800 text-white font-bold text-xs uppercase tracking-wider rounded-lg shadow flex items-center justify-center gap-2 cursor-pointer transition-colors"
                  >
                    {submitting ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Transmitting...
                      </>
                    ) : (
                      <>
                        <Send size={14} />
                        Submit Inquiry
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

          </div>

        </div>
      </main>

      <FloatingWhatsApp />
      <Footer onRequestQuote={() => setIsQuoteOpen(true)} />

      <QuoteModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
      />
    </>
  );
}
