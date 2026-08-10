"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FileText,
  Printer,
  MapPin,
  Phone,
  Mail,
  Award,
  Settings,
  Cpu,
  Layers,
  ShieldCheck,
  CheckCircle,
  Building,
} from "lucide-react";

export default function BusinessProfile() {
  const printProfile = () => {
    window.print();
  };

  const capabilities = [
    {
      title: "Precision CNC/VMC Machining",
      desc: "High-grade turning, boring, and profiling using multi-axis Japanese and domestic CNC centers (Macpower & Feeler VMC).",
      icon: Cpu,
    },
    {
      title: "Custom Jig & Fixture Design",
      desc: "Specialized mechanical assemblies engineered for repeat component manufacturing and quality stress testing.",
      icon: Settings,
    },
    {
      title: "Material Testing Instrumentation",
      desc: "Quality verification instruments conforming to national and global standards for rubber, plastic, cables, and textiles.",
      icon: ShieldCheck,
    },
  ];

  const machines = [
    { name: "VMC (Vertical Machining Center)", spec: "Travel: 800 x 500 x 550 mm | Feeler (Taiwan)", qty: "1 Unit" },
    { name: "CNC Turning Center", spec: "Max Dia: 350 mm | Travel: 185/550 mm | Macpower", qty: "1 Unit" },
    { name: "Wire Cut EDM", spec: "Max Workpiece: 400 x 300 mm | Concord", qty: "1 Unit" },
    { name: "Heavy Duty Manual Lathe", spec: "Bed Length: 8 Feet | Radial Precision Setup", qty: "1 Unit" },
    { name: "Medium Duty Manual Lathe", spec: "Bed Length: 6 Feet | Rapid Turning Spindle", qty: "1 Unit" },
    { name: "Surface Grinding Machine", spec: "Table Size: 600 x 200 mm | Mirror Grinding", qty: "1 Unit" },
    { name: "CNC Plasma Cutting Machine", spec: "Capacity: 32 mm Sheet Steel | Multi-speed Torch", qty: "1 Unit" },
    { name: "Arc Welding Machine", spec: "Welding Amp: 400A | Heavy Frame Fabrication", qty: "1 Unit" },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 py-10 px-4 sm:px-6 lg:px-8 print:bg-white print:text-black print:p-0 print:m-0">
      {/* Controls Container - Hidden on print */}
      <div className="max-w-4xl mx-auto mb-8 flex justify-between items-center bg-white p-4 rounded-xl shadow-sm border border-gray-100 print:hidden">
        <div className="flex items-center gap-2.5">
          <FileText className="text-accent" size={22} />
          <div>
            <h1 className="text-sm font-bold text-slate-800">Corporate Business Profile</h1>
            <p className="text-[10px] text-slate-400">Unique Industries • Ghaziabad</p>
          </div>
        </div>
        <div className="flex gap-3">
          <Link
            href="/"
            className="px-4 py-2 border border-gray-200 text-slate-600 rounded-lg text-xs font-semibold hover:bg-slate-50 transition-colors"
          >
            Back to Home
          </Link>
          <button
            onClick={printProfile}
            className="px-4 py-2 bg-accent hover:bg-orange-600 text-white rounded-lg text-xs font-bold flex items-center gap-1.5 shadow-sm transition-colors cursor-pointer"
          >
            <Printer size={14} />
            Print / Save to PDF
          </button>
        </div>
      </div>

      {/* Main Profile Document Sheet */}
      <div className="max-w-4xl mx-auto bg-white p-12 rounded-2xl shadow-xl border border-gray-200/60 print:shadow-none print:border-none print:p-0 print:m-0 relative overflow-hidden">
        {/* Decorative corner element - Hidden on print */}
        <div className="absolute top-0 right-0 w-40 h-40 bg-accent/5 rounded-full translate-x-20 -translate-y-20 print:hidden" />

        {/* PAGE 1: HEADER SECTION */}
        <div className="border-b-2 border-accent pb-8 mb-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <Building className="text-accent" size={28} />
              <h1 className="text-3xl font-extrabold tracking-tight text-primary uppercase">
                Unique Industries
              </h1>
            </div>
            <p className="text-xs text-slate-500 uppercase tracking-widest font-bold">
              Manufacturer of Precision Industrial Components & Testing Instruments
            </p>
          </div>
          <div className="text-left md:text-right text-xs text-slate-500 space-y-1">
            <p className="font-bold text-slate-800">GSTIN: 09BMVPA8872N1ZZ</p>
            <p>Ghaziabad, Uttar Pradesh, India</p>
            <p>uniqueindustries2018@gmail.com</p>
          </div>
        </div>

        {/* OVERVIEW SECTION */}
        <div className="space-y-6 mb-10">
          <div>
            <h2 className="text-base font-bold text-primary uppercase tracking-wider border-l-4 border-accent pl-3 mb-3">
              Executive Overview
            </h2>
            <p className="text-xs text-slate-600 leading-relaxed text-justify">
              Established in Ghaziabad, Uttar Pradesh, <strong>Unique Industries</strong> is a premier engineering manufacturer and industrial supplier specializing in high-grade CNC/VMC machined components, specialized jigs & fixtures, and comprehensive material testing instrumentation. Under the veteran leadership of <strong>Mohd. Rafiq Ansari</strong>, we have built a trusted reputation across manufacturing, automotive, and laboratory testing sectors in India by committing to premium quality materials, state-of-the-art machinery, and an expert engineering workforce.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-50 p-4 rounded-xl border border-gray-100 text-center print:bg-white print:border">
              <h4 className="text-lg font-bold text-accent">100%</h4>
              <p className="text-[10px] text-slate-500 uppercase font-bold tracking-wide mt-1">Quality Guaranteed</p>
            </div>
            <div className="bg-slate-50 p-4 rounded-xl border border-gray-100 text-center print:bg-white print:border">
              <h4 className="text-lg font-bold text-accent">Advanced</h4>
              <p className="text-[10px] text-slate-500 uppercase font-bold tracking-wide mt-1">In-House CNC/EDM Shop</p>
            </div>
            <div className="bg-slate-50 p-4 rounded-xl border border-gray-100 text-center print:bg-white print:border">
              <h4 className="text-lg font-bold text-accent">ASTM / ISO</h4>
              <p className="text-[10px] text-slate-500 uppercase font-bold tracking-wide mt-1">Compliant Calibration</p>
            </div>
          </div>
        </div>

        {/* CORE CAPABILITIES */}
        <div className="space-y-6 mb-10">
          <h2 className="text-base font-bold text-primary uppercase tracking-wider border-l-4 border-accent pl-3 mb-4">
            Core Engineering Offerings
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {capabilities.map((cap, i) => {
              const Icon = cap.icon;
              return (
                <div key={i} className="border border-slate-200/80 rounded-xl p-5 space-y-3">
                  <div className="w-9 h-9 rounded-lg bg-orange-50 text-accent flex items-center justify-center">
                    <Icon size={18} />
                  </div>
                  <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wide leading-tight">
                    {cap.title}
                  </h3>
                  <p className="text-[11px] text-slate-500 leading-relaxed">
                    {cap.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* PAGE BREAK FOR PRINT */}
        <div className="print:page-break-after-always print:my-10" />

        {/* MACHINERY & INFRASTRUCTURE */}
        <div className="space-y-6 mb-10">
          <h2 className="text-base font-bold text-primary uppercase tracking-wider border-l-4 border-accent pl-3 mb-4">
            Infrastructure & Machining Setup
          </h2>
          <p className="text-xs text-slate-600 leading-relaxed mb-4">
            Our state-of-the-art tooling facility in Ghaziabad is equipped with modern vertical machining centers, precision CNC turn-mills, and high-frequency EDM wire-cutting setups to assure micron-level compliance.
          </p>

          <div className="border border-slate-200 rounded-xl overflow-hidden shadow-sm">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="bg-slate-100 text-slate-700 uppercase font-bold tracking-wider border-b border-slate-200 text-[10px] print:bg-gray-100">
                  <th className="py-3 px-4">Machine Description</th>
                  <th className="py-3 px-4">Technical Specification / Capacity</th>
                  <th className="py-3 px-4 text-center">Quantity</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {machines.map((m, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/50 print:hover:bg-transparent">
                    <td className="py-3 px-4 font-bold text-slate-800">{m.name}</td>
                    <td className="py-3 px-4 text-slate-600">{m.spec}</td>
                    <td className="py-3 px-4 text-center text-slate-800 font-semibold">{m.qty}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* STANDARDS COMPLIANCE */}
        <div className="space-y-6 mb-10">
          <h2 className="text-base font-bold text-primary uppercase tracking-wider border-l-4 border-accent pl-3 mb-4">
            Quality Assurance & Standards
          </h2>
          <div className="bg-slate-50 p-5 rounded-xl border border-slate-200/50 space-y-4 print:bg-white print:border">
            <p className="text-xs text-slate-600 leading-relaxed">
              Every instrument designed and manufactured at Unique Industries undergoes multi-stage inspections using master gauges traceable to national labs:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
              <div className="flex gap-2">
                <CheckCircle size={15} className="text-emerald-600 shrink-0 mt-0.5" />
                <span className="text-slate-600 text-[11px]">Strict calibration conforming to ASTM, ISO, and BIS guidelines.</span>
              </div>
              <div className="flex gap-2">
                <CheckCircle size={15} className="text-emerald-600 shrink-0 mt-0.5" />
                <span className="text-slate-600 text-[11px]">Traceable certification accompanying all mechanical stress sensors.</span>
              </div>
              <div className="flex gap-2">
                <CheckCircle size={15} className="text-emerald-600 shrink-0 mt-0.5" />
                <span className="text-slate-600 text-[11px]">Extensive pre-packing load test runs simulating severe operations.</span>
              </div>
              <div className="flex gap-2">
                <CheckCircle size={15} className="text-emerald-600 shrink-0 mt-0.5" />
                <span className="text-slate-600 text-[11px]">Physical calibration using certified master weights and load cells.</span>
              </div>
            </div>
          </div>
        </div>

        {/* FOOTER & CORPORATE INFORMATION */}
        <div className="border-t border-slate-200 pt-8 mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
          <div className="space-y-3">
            <h3 className="font-bold text-primary uppercase tracking-wider text-[11px]">Corporate Headquarters</h3>
            <ul className="space-y-2 text-slate-600">
              <li className="flex items-start gap-2">
                <MapPin size={14} className="text-accent shrink-0 mt-0.5" />
                <span>Khasra No.- 367/368, Near By Madhyamik Vidyalya, Surya Vihar, Hisali, MuradNagar, Ghaziabad, Uttar Pradesh - 201206</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={14} className="text-accent shrink-0" />
                <span>uniqueindustries2018@gmail.com</span>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="font-bold text-primary uppercase tracking-wider text-[11px]">Direct Contact Lines</h3>
            <ul className="space-y-2 text-slate-600">
              <li className="flex items-center gap-2">
                <Phone size={14} className="text-accent shrink-0" />
                <span>+91 93127 45516 / +91 81308 18486</span>
              </li>
              <li className="flex items-center gap-2">
                <Award size={14} className="text-accent shrink-0" />
                <span>GSTIN: 09BMVPA8872N1ZZ (Verified Registered Enterprise)</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
