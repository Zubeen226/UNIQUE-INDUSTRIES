"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, CheckCircle, FileText } from "lucide-react";
import confetti from "canvas-confetti";
import { sendEmailQuery } from "@/utils/email";

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedProductCategory?: string;
}

export default function QuoteModal({
  isOpen,
  onClose,
  selectedProductCategory = "",
}: QuoteModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    inquiryType: selectedProductCategory ? "Request for Quotation" : "General Inquiry",
    message: "",
    customSpecs: "",
  });
  const [file, setFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const inquiryTypes = [
    "General Inquiry",
    "Request for Quotation",
    "Partnership",
    "Careers",
    "Other",
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await sendEmailQuery({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        company: formData.company,
        inquiry_type: formData.inquiryType,
        message: `Technical Specifications / Testing Standards: ${formData.customSpecs || "None"}\n\nAdditional Details: ${formData.message || "None"}`,
        attachment: file ? file.name : "None",
      });

      setIsSubmitting(false);
      setIsSuccess(true);
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#F97316", "#0F172A", "#334155"],
      });
    } catch (error) {
      console.error("Failed to submit RFQ via EmailJS:", error);
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setIsSuccess(false);
    setFormData({
      name: "",
      company: "",
      email: "",
      phone: "",
      inquiryType: "General Inquiry",
      message: "",
      customSpecs: "",
    });
    setFile(null);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-primary/80 backdrop-blur-md"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative z-10 w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden flex flex-col max-h-[90vh]"
          >
            {/* Header */}
            <div className="bg-primary text-white p-6 flex justify-between items-center">
              <div>
                <h3 className="text-xl font-bold tracking-wide">Request a Quotation</h3>
                <p className="text-xs text-gray-400 mt-1">
                  Provide your technical requirements for an engineered solution
                </p>
              </div>
              <button
                onClick={handleClose}
                className="text-gray-400 hover:text-white transition-colors cursor-pointer"
              >
                <X size={24} />
              </button>
            </div>

            {/* Content Body */}
            <div className="overflow-y-auto p-6 flex-1">
              {!isSuccess ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-1.5">
                        Company Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent"
                        placeholder="Engineering Corp"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-1.5">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent"
                        placeholder="john@company.com"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent"
                        placeholder="+91 XXXXX XXXXX"
                      />
                    </div>
                  </div>

                   <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-1.5">
                      Inquiry Type *
                    </label>
                    <select
                      value={formData.inquiryType}
                      onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent bg-white text-gray-800"
                    >
                      {inquiryTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-1.5">
                      Technical Specifications / Testing Standards
                    </label>
                    <textarea
                      rows={3}
                      value={formData.customSpecs}
                      onChange={(e) => setFormData({ ...formData, customSpecs: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent"
                      placeholder="e.g. Conform to ASTM D412, capacity 5kN, grips for rubber sheet testing..."
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-1.5">
                      Attach RFQ / Technical Drawing (Optional)
                    </label>
                    <div className="border-2 border-dashed border-gray-200 rounded-lg p-4 flex flex-col items-center justify-center hover:border-accent/40 transition-colors bg-gray-50 relative">
                      <input
                        type="file"
                        onChange={(e) => setFile(e.target.files?.[0] || null)}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                        accept=".pdf,.doc,.docx,.jpg,.png,.dwg"
                      />
                      <FileText className="text-gray-400 mb-2" size={28} />
                      <p className="text-xs text-gray-500 font-medium">
                        {file ? file.name : "Drag & drop files or click to upload"}
                      </p>
                      <p className="text-[10px] text-gray-400 mt-1">
                        PDF, DOCX, DWG, PNG up to 10MB
                      </p>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-1.5">
                      Additional Message
                    </label>
                    <textarea
                      rows={2}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent"
                      placeholder="Describe your testing application..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full orange-gradient-bg hover:opacity-95 text-white font-bold text-sm py-3 px-6 rounded-lg shadow-lg flex items-center justify-center gap-2 cursor-pointer transition-opacity"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Processing RFQ...
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        Submit RFQ
                      </>
                    )}
                  </button>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center mb-4">
                    <CheckCircle size={40} className="stroke-[1.5]" />
                  </div>
                  <h4 className="text-lg font-bold text-primary mb-2">
                    RFQ Submitted Successfully!
                  </h4>
                  <p className="text-sm text-gray-500 max-w-sm mb-6">
                    Thank you, <span className="font-semibold text-primary">{formData.name}</span>.
                    Our team will review your details for{" "}
                    <span className="italic">{formData.inquiryType}</span> and get in touch with you at{" "}
                    <span className="font-semibold text-primary">{formData.email}</span> within 24
                    hours.
                  </p>
                  <button
                    onClick={handleClose}
                    className="px-6 py-2 border border-gray-200 rounded-lg text-sm text-gray-600 hover:bg-gray-50 hover:text-primary transition-colors cursor-pointer"
                  >
                    Close Window
                  </button>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
