"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Compass,
  Cpu,
  Layers,
  Settings,
  ShieldCheck,
  Users,
  Wrench,
  Activity,
  Award,
  Zap,
  Globe,
  ChevronDown,
  ArrowRight,
  Sparkles,
  Phone,
  Mail,
  MapPin,
  Clock,
  ExternalLink,
  MessageSquare,
  FileCheck2,
  Calendar,
  ChevronRight,
  TrendingUp,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import LoadingScreen from "@/components/LoadingScreen";
import QuoteModal from "@/components/QuoteModal";
import MachineGraphic from "@/components/MachineGraphic";
import { sendEmailQuery } from "@/utils/email";

// Machine Interface
interface Machine {
  id: number;
  name: string;
  brand: string;
  qty: string;
  specs: string[];
  apps: string[];
  icon: any;
  capacity?: string;
  bedLength?: string;
  tableSize?: string;
  image?: string;
}

export default function Home() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null);
  const [selectedMachine, setSelectedMachine] = useState<Machine | null>(null);
  const [hoveredMachineId, setHoveredMachineId] = useState<number | null>(null);

  // Forms state
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });
  const [contactSubmitted, setContactSubmitted] = useState(false);

  const openQuoteWithCategory = (categoryName: string) => {
    setSelectedCategory(categoryName);
    setIsQuoteOpen(true);
  };

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await sendEmailQuery({
        name: contactForm.name,
        email: contactForm.email,
        phone: contactForm.phone,
        company: contactForm.company,
        inquiry_type: "General Inquiry",
        message: contactForm.message,
        attachment: "None",
      });
      setContactSubmitted(true);
      setTimeout(() => {
        setContactSubmitted(false);
        setContactForm({ name: "", email: "", phone: "", company: "", message: "" });
      }, 4000);
    } catch (error) {
      console.error("Failed to submit contact form query via EmailJS:", error);
    }
  };

  // 8 Machines detailed specifications
  const machines: Machine[] = [
    {
      id: 1,
      name: "CNC Turning Center",
      brand: "LMW LL20T L5",
      qty: "1 Unit",
      icon: Cpu,
      specs: [
        "Max Turning Diameter: 380 mm",
        "Max Turning Length: 500 mm",
        "Swing Over Bed: 510 mm",
        "Chuck Diameter: 210 / 250 mm",
        "Travel (X / Z Axis): 215 / 560 mm",
        "Spindle Speed & Bore: 3500 RPM | 61 mm",
        "Spindle Motor Power: Up to 18.5 kW",
        "CNC Controller: Fanuc / Siemens",
        "Rapid Traverse: 30 / 36 m/min (Roller LM Guides)",
        "Approx. Machine Weight: 3500 kg",
      ],
      apps: [
        "Precision shaft turning & facing",
        "Threading and profile turning",
        "High-accuracy custom component machining",
        "Industrial testing equipment parts manufacturing",
      ],
      image: "/images/machines/cnc_machine.png",
    },
    {
      id: 2,
      name: "Wire Cut EDM",
      brand: "Electronica Poddar WS600",
      qty: "1 Unit",
      icon: Activity,
      specs: [
        "X × Y Axis Travel: 350 × 450 mm",
        "Worktable Size (W × D): 450 × 625 mm",
        "Maximum Job Admit: 500 mm",
        "Maximum Workpiece Weight: 400 kg",
        "Maximum Taper Angle: ±3° / 80 mm",
        "Moly Wire Diameter: 0.12 – 0.18 mm",
        "Auto Wire Tension: Yes",
        "Best Surface Finish: ≤ 1.5 µm",
        "Maximum Cutting Speed: ≥ 100 mm²/min",
        "Machine Weight: 1050 kg",
        "Machine Footprint (W × D × H): 1600 × 1270 × 1700 mm",
      ],
      apps: [
        "Intricate punch & die cutting",
        "Hardened material profile cutting",
        "Precision spline and keyway cutting",
        "Prototype and tooling fabrication",
      ],
      image: "/images/machines/wire_cut.png",
    },
    {
      id: 3,
      name: "Manual Lathe Machine (8 Ft)",
      brand: "Delhi Make Manual Lathe",
      qty: "1 Unit",
      bedLength: "8 Feet",
      icon: Wrench,
      specs: [
        "Length of Bed: 8 Feet (2,438 mm)",
        "Width of Bed: 12\" to 16\" (300 - 400 mm)",
        "Height of Center: 10\" to 14\" (250 - 350 mm)",
        "Swing Over Bed: 20\" to 28\" (500 - 700 mm)",
        "Admit Between Centers (ABC): 4.5 to 5 Feet (1,370 - 1,500 mm)",
        "Spindle Bore: 2\" to 4.13\" (52 - 105 mm) | Spindle Nose: A2-6 / A2-8",
        "Speed Range: 30 to 1,200 RPM (Variable)",
        "Metric Threads: 0.5 to 7 mm pitch range",
        "Inch Threads: 2 to 56 TPI (Threads Per Inch)",
        "Lead Screw Diameter: 1.25\" to 1.5\" (4 TPI)",
        "Main Motor Power: 3 HP to 5 HP (3-Phase, 415V)",
        "Machine Weight: 1,200 kg to 1,800 kg",
      ],
      apps: [
        "Heavy turning & facing operations",
        "Taper and thread cutting (Metric & Inch)",
        "Long shaft machining & maintenance",
        "Raw stock cutting and component preparation",
      ],
      image: "/images/machines/manual_lathe_8ft.png",
    },
    {
      id: 4,
      name: "Manual Lathe Machines (6 Ft)",
      brand: "Rajkot Make Manual Lathe",
      qty: "2 Units",
      bedLength: "6 Feet",
      icon: Settings,
      specs: [
        "Bed Length: 6 Feet (1,830 mm)",
        "Bed Width: 9.5 Inches (240 mm)",
        "Center Height: 8.5 Inches (215 mm)",
        "Swing Over Bed: 16.5 Inches (420 mm)",
        "Distance Between Centers: 39 Inches (1,000 mm)",
        "Spindle Bore: 2 Inches (52 mm)",
        "Spindle Speeds: 8 Speeds (30 – 750 RPM)",
        "Required Motor Power: 1.5 to 2.0 HP",
        "Machine Weight: ~700 kg",
      ],
      apps: [
        "Precision manual turning and facing",
        "Medium-scale shaft and gear blank machining",
        "Taper and thread cutting operations",
        "Industrial tooling and custom repair work",
      ],
      image: "/images/machines/manual_lathe_6ft.png",
    },
    {
      id: 5,
      name: "Surface Grinding Machine",
      brand: "Sai Machine Surface Grinder",
      qty: "1 Unit",
      tableSize: "8\" × 18\"",
      icon: Layers,
      specs: [
        "Table Working Area: 8\" × 18\" (200 × 450 mm)",
        "Max Longitudinal Travel: 19 Inches (475 mm)",
        "Max Cross Travel: 9 Inches (225 mm)",
        "Spindle Center to Table Distance: Max 14 Inches (350 mm)",
        "Grinding Wheel Speed: 2,800 RPM",
        "Grinding Wheel Dimensions: 200 × 13 × 31.75 mm",
        "Flatness & Parallelism Accuracy: 0.005 mm",
        "Micro-feed Vertical Graduation: 0.01 mm",
        "Motor Power: 1.0 HP (3-Phase, 415V)",
        "Net Weight: ~450 kg",
      ],
      apps: [
        "High-flatness tool and die finishing",
        "Precision plate and guide-way grinding",
        "Micro-tolerance gauge block calibration",
        "Surface preparation for assembly mating",
      ],
      image: "/images/machines/surface_grinder.png",
    },
    {
      id: 6,
      name: "Plasma Cutting Machine",
      brand: "Electra Koko Tawa CUT-100",
      qty: "1 Unit",
      capacity: "MS: Up to 32 mm | SS: Up to 20 mm",
      icon: Zap,
      specs: [
        "Model: Electra Koko-Tawa CUT-100 Inverter",
        "Power Supply: 3-Phase, 415V AC, 50/60 Hz",
        "Output Current Range: 20 – 100 Amps",
        "Duty Cycle: 60% @ 100A | 100% @ 77A",
        "Quality Cut (Mild Steel): Up to 25 mm",
        "Severance Cut (Mild Steel): Up to 32 mm",
        "Quality Cut (Stainless Steel): Up to 16 mm",
        "Severance Cut (Stainless Steel): Up to 20 mm",
        "Required Air Pressure: 4.5 – 5.5 bar",
        "Arc Striking: High Frequency (HF) Pilot Arc",
        "Protection Class: IP21S | Overload & Thermal Cutoff",
      ],
      apps: [
        "Heavy metal plate profiling & custom shapes",
        "Stainless steel & carbon steel sheet cutting",
        "Structural frame component fabrication",
        "Beveling and weld joint preparation cutting",
      ],
      image: "/images/machines/plasma_cutter.png",
    },
    {
      id: 7,
      name: "Arc Welding Machines",
      brand: "Electra Koko Tawa ARC-310 PILOT",
      qty: "2 Units",
      icon: Compass,
      specs: [
        "Model: Electra Koko-Tawa ARC-310 PILOT",
        "Power Supply: 3-Phase, 415V AC, 50/60 Hz",
        "Output Current Range: 30 – 310 Amps (LED Display)",
        "Adjustable Arc Force: 0 – 10% control",
        "Duty Cycle: 60% @ 310A | 100% @ 240A",
        "Compatible Electrodes: 8, 10 & 12 Gauge (2.5 - 5.0 mm)",
        "Insulating Grade: Class H (High thermal rating)",
        "Cooling System: High-speed turbo fan",
        "Safety Class: IP21S | Over-current & Over-voltage",
        "Net Weight: ~12.5 kg (Portable Inverter)",
      ],
      apps: [
        "Heavy-duty structural framework welding",
        "Testing instrument casing & base fabrication",
        "Machine bed and mounting bracket assembly",
        "High-strength joint welding for carbon steel & MS",
      ],
      image: "/images/machines/arc_welder.png",
    },
    {
      id: 8,
      name: "Bandsaw Cutting Machine",
      brand: "New Bansal Bandsaw Machine",
      qty: "1 Unit",
      capacity: "Maximum Cutting Diameter: 10 Inches",
      icon: ShieldCheck,
      specs: [
        "Model: New Bansal Horizontal Bandsaw",
        "Round Bar Cutting Capacity: Up to 10 Inches (250 mm)",
        "Square Section Cutting Capacity: 8\" × 8\" (200 × 200 mm)",
        "Blade Size (L × W × T): 3,000 × 27 × 0.9 mm",
        "Blade Drive Motor: 2.0 HP (3-Phase, 415V)",
        "Cutting Speeds: Step Pulley (25, 45, 65, 85 m/min)",
        "Feed Control: Hydraulic Cylinder with Auto-cutoff",
        "Coolant System: Integrated pump & filter tank",
        "Vice Clamping: Manual screw with quick lock",
        "Machine Dimensions: 1,650 × 850 × 1,050 mm",
        "Net Weight: ~480 kg",
      ],
      apps: [
        "Raw round bar & pipe stock preparation",
        "Solid metal sections & angles structural cutting",
        "Batch cutting of raw materials for assembly",
        "Precision perpendicular and straight cuts",
      ],
      image: "/images/machines/bandsaw.png",
    },
  ];



  // Why choose us points
  const whyChooseUs = [
    { title: "Precision Engineering", desc: "Rigorous alignment of structural tolerances." },
    { title: "In-house CNC Machining", desc: "Equipped with advanced milling centers for control." },
    { title: "Advanced Wire Cut EDM", desc: "Capable of cutting extremely complex tooling profiles." },
    { title: "Custom Design Solutions", desc: "Engineers specialized in tailored physical configurations." },
    { title: "Experienced Engineers", desc: "Design experts with deep knowledge of mechanical physics." },
    { title: "Strict Quality Inspection", desc: "Multi-stage verification and dimensional checks." },
    { title: "Competitive Pricing", desc: "Premium quality machines engineered at sustainable prices." },
    { title: "On-time Delivery", desc: "Strict execution timelines from design print to shipping." },
    { title: "After-sales Support", desc: "Direct engineering contact for installation and calibration." },
  ];

  // Process timeline
  const processSteps = [
    "Design",
    "Engineering",
    "CNC Machining",
    "Fabrication",
    "Surface Grinding",
    "Assembly",
    "Quality Inspection",
    "Calibration",
    "Packaging",
    "Delivery",
  ];

  // Manufacturing Services
  const manufacturingServices = [
    { name: "CNC Machining", icon: Cpu, desc: "High-precision vertical machining and drilling for complex testing instrument structures." },
    { name: "Wire Cut EDM", icon: Activity, desc: "Intricate profile cutting for hardened steels and precision tooling components." },
    { name: "Precision Turning", icon: Wrench, desc: "Heavy-duty turning and shaft profile machining for absolute radial accuracy." },
    { name: "Surface Grinding", icon: Layers, desc: "Flat surface grinding ensuring mirror finishes and micron-level flat tolerances." },
    { name: "Plasma Cutting", icon: Zap, desc: "Accurate plate cutting and profiling of structural steel sheets up to 32mm." },
    { name: "Arc Welding", icon: Compass, desc: "Robust industrial welding and frame fabrication using multi-gauge electrodes." },
    { name: "Custom Fabrication", icon: Settings, desc: "Complete structural steel assembly and custom metal shaping from CAD models." },
    { name: "Machine Assembly", icon: ShieldCheck, desc: "Systematic mechanical, pneumatic, and electronic component integration." },
  ];

  // FAQ list
  const faqs = [
    {
      q: "Can you customize instruments for specific testing standards?",
      a: "Yes, we specialize in custom engineering. Our team designs and manufactures testing machines according to ASTM, ISO, DIN, BIS, and other national or international standards based on your target specifications.",
    },
    {
      q: "What is the typical lead time for delivery?",
      a: "For standard catalog testing instruments, delivery is usually within 2 to 3 weeks. For heavy equipment or customized systems requiring specialized engineering, the timeline spans 4 to 6 weeks.",
    },
    {
      q: "Do you supply calibration certificates?",
      a: "Every machine undergoes a strict calibration process. We provide comprehensive calibration certificates traceable to national standards alongside the equipment.",
    },
    {
      q: "What warranty do you offer on testing equipment?",
      a: "All Unique Industries instruments carry a comprehensive 12-month warranty covering manufacturing defects, with options for extended service and annual maintenance contracts (AMC).",
    },
    {
      q: "How do you handle installation and commissioning?",
      a: "Our factory-trained technicians coordinate on-site installation, commissioning, and detailed operational training for your quality control team.",
    },
    {
      q: "What are your standard payment terms?",
      a: "Our standard business terms are 30% advance for order confirmation, with the balance due prior to dispatch. We also support LC and custom terms for research institutes and government entities.",
    },
  ];

  return (
    <>
      <LoadingScreen />
      <Navbar onRequestQuote={() => openQuoteWithCategory("")} />
      <FloatingWhatsApp />

      <main className="flex-grow pt-16">
        
        {/* HERO SECTION */}
        <section className="relative min-h-[90vh] flex items-center bg-primary overflow-hidden">
          {/* Background image with overlay */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/hero_bg.png"
              alt="Industrial Manufacturing Facility"
              fill
              className="object-cover opacity-35 filter brightness-75 select-none"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-transparent" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 flex flex-col items-start">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl"
            >
              {/* Engineering Tag */}
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-accent/10 border border-accent/20 text-accent mb-6">
                <Sparkles size={12} />
                Precision Mechanical Engineering
              </span>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-6">
                Precision CNC Machining & Tooling <br className="hidden md:inline" />
                <span className="text-accent">Engineered for Accuracy</span>
              </h1>

              <p className="text-lg text-gray-300 font-medium leading-relaxed mb-8 max-w-2xl">
                Unique Industries manufactures high-quality precision CNC turned components, custom jigs & fixtures, heavy metal tooling, and mechanical assemblies conforming to international quality standards.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <Link
                  href="/infrastructure"
                  className="px-8 py-4 bg-accent hover:bg-orange-600 text-white font-bold text-sm rounded-lg shadow-lg shadow-orange-500/25 transition-all text-center flex items-center justify-center gap-2 cursor-pointer"
                >
                  Explore Capabilities
                  <ArrowRight size={16} />
                </Link>
                <button
                  onClick={() => openQuoteWithCategory("")}
                  className="px-8 py-4 bg-white hover:bg-gray-50 text-primary font-bold text-sm rounded-lg transition-all text-center border border-gray-200 cursor-pointer shadow-sm"
                >
                  Request a Quote
                </button>
              </div>
            </motion.div>
          </div>

          {/* Interactive animated grid outline at the bottom right */}
          <div className="absolute right-0 bottom-0 w-1/3 h-1/2 hidden lg:block opacity-10 pointer-events-none">
            <svg viewBox="0 0 100 100" className="w-full h-full stroke-white stroke-[0.5] fill-none">
              <path d="M 0,50 L 50,0 L 100,50 L 50,100 Z" />
              <path d="M 25,50 L 50,25 L 75,50 L 50,75 Z" />
              <circle cx="50" cy="50" r="10" />
            </svg>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section id="about" className="py-24 bg-white relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              
              {/* Text column */}
              <div className="space-y-6">
                <span className="text-xs font-bold uppercase tracking-widest text-accent block">
                  Corporate Profile
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-primary tracking-tight">
                  About Unique Industries
                </h2>
                <div className="w-16 h-1 bg-accent rounded" />

                <p className="text-sm text-navy-500 leading-relaxed">
                  Established in Ghaziabad, Unique Industries is a premier manufacturer and supplier of high-grade mechanical components. Under the leadership of Mohd. Rafiq Ansari, we have grown to become a trusted name in the sector.
                </p>

                <p className="text-sm text-navy-500 leading-relaxed">
                  We specialize in Precision CNC Machined Components, Custom Jigs & Fixtures, Tooling, and heavy mechanical component fabrication. Our commitment to quality and precision drives us to deliver the best solutions to our clients.
                </p>

                {/* Features Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                  {[
                    "Premium Quality Materials",
                    "Advanced Machinery",
                    "Expert Workforce",
                  ].map((feat) => (
                    <div key={feat} className="flex items-center gap-2.5">
                      <div className="w-5 h-5 rounded-full bg-orange-50 text-accent flex items-center justify-center shrink-0">
                        <FileCheck2 size={12} className="stroke-[2.5]" />
                      </div>
                      <span className="text-xs font-semibold text-primary">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Graphic/Image column */}
              <div className="relative">
                <div className="absolute inset-0 -m-4 bg-navy-50 rounded-2xl transform rotate-2 -z-10" />
                <div className="relative aspect-video lg:aspect-square w-full rounded-xl overflow-hidden shadow-2xl border border-gray-100">
                  <Image
                    src="/about_factory.png"
                    alt="Precision Testing Equipment Laboratory"
                    fill
                    className="object-cover"
                  />
                  {/* Subtle Floating Card */}
                  <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-4 rounded-xl shadow-lg border border-white/20 hidden sm:block">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary text-white flex items-center justify-center">
                        <Award size={20} className="text-accent" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-primary">Uncompromising Quality Standards</p>
                        <p className="text-[10px] text-navy-500">Every machine undergoes extensive material testing & calibration.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* COUNTER HIGHLIGHTS */}
        <section className="py-16 bg-navy-950 text-white relative overflow-hidden">
          {/* Subtle bg vector */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full filter blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              {[
                { val: "15+", label: "Years Experience" },
                { val: "500+", label: "Machines Delivered" },
                { val: "1000+", label: "Happy Customers" },
                { val: "Pan India", label: "Service Network" },
              ].map((stat, i) => (
                <div key={i} className="space-y-2">
                  <div className="text-3xl sm:text-4xl font-extrabold text-accent font-mono tracking-tight">
                    {stat.val}
                  </div>
                  <div className="text-xs uppercase tracking-wider font-semibold text-gray-400">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* MANUFACTURING INFRASTRUCTURE SECTION */}
        <section className="py-24 bg-navy-50 relative" id="infrastructure">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Section Header */}
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-accent">
                Advanced In-House Production
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-primary tracking-tight">
                Our Manufacturing Infrastructure
              </h2>
              <div className="w-16 h-1 bg-accent rounded mx-auto" />
              <p className="text-sm text-navy-500 max-w-xl mx-auto leading-relaxed">
                Unique Industries operates state-of-the-art machinery enabling precision machining, welding, grinding, and wire-cut processing to ensure instrument accuracy.
              </p>
            </div>

            {/* Grid of Machine Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {machines.map((mac) => {
                const IconComponent = mac.icon;
                return (
                  <motion.div
                    key={mac.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: mac.id * 0.05 }}
                    onMouseEnter={() => setHoveredMachineId(mac.id)}
                    onMouseLeave={() => setHoveredMachineId(null)}
                    className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden flex flex-col group hover:shadow-xl transition-all duration-300"
                  >
                    {/* Machine visual - Animated SVG viewport or image */}
                    <div className="aspect-video w-full bg-slate-950 relative overflow-hidden">
                      {mac.image ? (
                        <Image
                          src={mac.image}
                          alt={mac.name}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                          sizes="(max-width: 768px) 100vw, 25vw"
                          unoptimized // Fallback if local images don't exist yet during dynamic loading
                        />
                      ) : (
                        <MachineGraphic type={mac.id} isHovered={hoveredMachineId === mac.id} />
                      )}

                    </div>

                    {/* Machine Details */}
                    <div className="p-5 flex-1 flex flex-col justify-between">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-accent">
                          <IconComponent size={16} />
                          <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
                            {mac.brand}
                          </span>
                        </div>
                        <h3 className="text-base font-bold text-primary tracking-tight">
                          {mac.name}
                        </h3>
                        <p className="text-xs text-navy-500 line-clamp-2 leading-relaxed">
                          {mac.specs[1]}
                        </p>
                      </div>

                      <div className="pt-4 border-t border-gray-100 mt-4 flex items-center justify-between">
                        <button
                          onClick={() => setSelectedMachine(mac)}
                          className="text-xs font-bold text-primary group-hover:text-accent flex items-center gap-1 cursor-pointer transition-colors"
                        >
                          View Details
                          <ChevronRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                        </button>
                        {mac.bedLength && (
                          <span className="text-[10px] font-mono text-gray-400">
                            Bed: {mac.bedLength}
                          </span>
                        )}
                        {mac.tableSize && (
                          <span className="text-[10px] font-mono text-gray-400">
                            Size: {mac.tableSize}
                          </span>
                        )}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

          </div>
        </section>

        {/* MACHINE DETAIL MODAL/DRAWER */}
        <AnimatePresence>
          {selectedMachine && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedMachine(null)}
                className="fixed inset-0 bg-primary/80 backdrop-blur-sm"
              />
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                className="relative z-10 w-full max-w-2xl max-h-[90vh] bg-white rounded-xl shadow-2xl overflow-y-auto border border-gray-100"
              >
                {/* SVG Visual or Image */}
                <div className="aspect-video w-full relative bg-slate-950 overflow-hidden">
                  {selectedMachine.image ? (
                    <Image
                      src={selectedMachine.image}
                      alt={selectedMachine.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      unoptimized
                    />
                  ) : (
                    <MachineGraphic type={selectedMachine.id} isHovered={true} />
                  )}
                  <button
                    onClick={() => setSelectedMachine(null)}
                    className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/80 transition-colors cursor-pointer z-10"
                  >
                    ✕
                  </button>
                </div>
                
                {/* Specs Content */}
                <div className="p-6 space-y-6">
                  <div>
                    <span className="text-[10px] font-bold text-accent uppercase tracking-widest">
                      {selectedMachine.brand}
                    </span>
                    <h3 className="text-xl font-bold text-primary mt-1">
                      {selectedMachine.name}
                    </h3>
                  </div>

                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">
                        Technical Specifications
                      </h4>
                      <ul className="space-y-2">
                        {selectedMachine.specs.map((spec, i) => (
                          <li key={i} className="text-xs text-navy-600 flex items-start gap-1.5 leading-relaxed">
                            <span className="text-accent mt-1">•</span>
                            <span>{spec}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">
                        Applications & Workpieces
                      </h4>
                      <ul className="space-y-2">
                        {selectedMachine.apps.map((app, i) => (
                          <li key={i} className="text-xs text-navy-600 flex items-start gap-1.5 leading-relaxed">
                            <span className="text-accent mt-1">•</span>
                            <span>{app}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                    {selectedMachine.capacity && (
                      <span className="text-[10px] font-mono text-gray-400 bg-gray-50 px-2 py-1 rounded">
                        Capacity: {selectedMachine.capacity}
                      </span>
                    )}
                    {selectedMachine.bedLength && (
                      <span className="text-[10px] font-mono text-gray-400 bg-gray-50 px-2 py-1 rounded">
                        Bed Length: {selectedMachine.bedLength}
                      </span>
                    )}
                    {selectedMachine.tableSize && (
                      <span className="text-[10px] font-mono text-gray-400 bg-gray-50 px-2 py-1 rounded">
                        Table Size: {selectedMachine.tableSize}
                      </span>
                    )}
                    <button
                      onClick={() => {
                        const name = selectedMachine.name;
                        setSelectedMachine(null);
                        openQuoteWithCategory(`Custom machinery - ${name}`);
                      }}
                      className="px-4 py-2 bg-accent hover:bg-orange-600 text-white text-xs font-bold rounded-lg cursor-pointer transition-colors ml-auto"
                    >
                      Inquire on this Capacity
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>



        {/* WHY CHOOSE US SECTION */}
        <section className="py-24 bg-navy-50 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-accent">
                Our Value Proposition
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-primary tracking-tight">
                Why Choose Unique Industries
              </h2>
              <div className="w-16 h-1 bg-accent rounded mx-auto" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {whyChooseUs.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white p-6 rounded-xl border border-gray-100 flex gap-4 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="w-10 h-10 rounded-lg bg-orange-50 text-accent flex items-center justify-center shrink-0 mt-0.5">
                    <FileCheck2 size={20} />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-primary tracking-tight mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xs text-navy-500 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* MANUFACTURING PROCESS TIMELINE */}
        <section className="py-24 bg-white overflow-hidden border-t border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-accent">
                Workflow Timeline
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-primary tracking-tight">
                Manufacturing Process
              </h2>
              <div className="w-16 h-1 bg-accent rounded mx-auto" />
            </div>

            {/* Horizontal timeline with scrollbar container */}
            <div className="relative">
              <div className="overflow-x-auto pb-6 no-scrollbar flex items-center min-w-full">
                <div className="flex items-center gap-0">
                  {processSteps.map((step, idx) => (
                    <div key={idx} className="flex items-center">
                      <div className="relative flex flex-col items-center text-center w-36 px-2 shrink-0">
                        {/* Number box */}
                        <div className="w-10 h-10 rounded-full border-2 border-accent text-accent font-bold text-xs flex items-center justify-center bg-white shadow-sm mb-3">
                          {idx + 1}
                        </div>
                        <p className="text-xs font-bold text-primary tracking-wide">{step}</p>
                      </div>
                      
                      {idx < processSteps.length - 1 && (
                        <div className="w-12 h-[2px] bg-gray-200 relative shrink-0">
                          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-accent rounded-full" />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
              <div className="text-center text-[10px] text-gray-400 mt-2">
                ← Swipe horizontally to see complete production timeline →
              </div>
            </div>

          </div>
        </section>

        {/* MANUFACTURING SERVICES */}
        <section className="py-24 bg-navy-50 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-accent">
                Expert Capabilities
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-primary tracking-tight">
                Manufacturing Services
              </h2>
              <div className="w-16 h-1 bg-accent rounded mx-auto" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {manufacturingServices.map((svc, idx) => {
                const Icon = svc.icon;
                return (
                  <div
                    key={idx}
                    className="bg-white p-6 rounded-xl border border-gray-100 flex flex-col justify-between group hover:border-accent hover:shadow-md transition-all duration-300"
                  >
                    <div className="space-y-4">
                      <div className="w-10 h-10 rounded-lg bg-orange-50 text-accent flex items-center justify-center shrink-0 group-hover:bg-accent group-hover:text-white transition-colors">
                        <Icon size={20} />
                      </div>
                      <h3 className="text-sm font-extrabold text-primary tracking-tight">
                        {svc.name}
                      </h3>
                      <p className="text-xs text-navy-500 leading-relaxed">
                        {svc.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </section>

        {/* QUALITY ASSURANCE */}
        <section className="py-24 bg-white relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              
              <div className="relative order-last lg:order-first">
                <div className="absolute inset-0 -m-4 bg-navy-50 rounded-2xl transform -rotate-2 -z-10" />
                <div className="relative aspect-video w-full rounded-xl overflow-hidden shadow-2xl border border-gray-100">
                  <Image
                    src="/hero_bg.png"
                    alt="Precision Inspection & Calibration System"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="space-y-6">
                <span className="text-xs font-bold uppercase tracking-widest text-accent block">
                  Metrology & Inspection
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-primary tracking-tight">
                  Quality Assurance & Calibration
                </h2>
                <div className="w-16 h-1 bg-accent rounded" />

                <p className="text-sm text-navy-500 leading-relaxed">
                  Precision is at the center of everything we construct. At Unique Industries, quality verification starts from raw metal evaluation and continues through every phase of component assembly and final calibration checks.
                </p>

                <div className="space-y-4">
                  {[
                    { title: "National Standards Compliance", desc: "All designs conform to national guidelines and specified norms." },
                    { title: "In-house Precision Inspection", desc: "Digital metrology sensors verify milling profiles down to micron margins." },
                    { title: "Traceable Calibration Reports", desc: "Instruments calibrated using master gauges with traceability certificates." },
                    { title: "Final Performance Stress Tests", desc: "Every unit undergoes extended running trials prior to packing." },
                  ].map((item, idx) => (
                    <div key={idx} className="flex gap-3">
                      <div className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle size={14} className="stroke-[2.5]" />
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-primary uppercase tracking-wide">{item.title}</h4>
                        <p className="text-xs text-navy-500 leading-relaxed mt-0.5">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>



        {/* CLIENT TESTIMONIALS SLIDER */}
        <section className="py-24 bg-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-accent">
                Customer Feedback
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-primary tracking-tight">
                Client Testimonials
              </h2>
              <div className="w-16 h-1 bg-accent rounded mx-auto" />
            </div>

            <div className="max-w-4xl mx-auto bg-navy-50 rounded-2xl p-8 md:p-12 relative border border-gray-100">
              <div className="absolute top-6 left-6 text-6xl text-accent opacity-20 font-serif leading-none">“</div>
              <div className="relative z-10 space-y-6">
                <p className="text-base md:text-lg text-primary italic font-medium leading-relaxed">
                  We have been using material testing equipment from Unique Industries for over 4 years. The rigidity of the structural members and the precision of the force transducers are exceptional. Their design team modified the software panel to display custom parameters aligning with our special testing criteria.
                </p>
                <div>
                  <h4 className="text-sm font-extrabold text-primary">Senior QA Manager</h4>
                  <p className="text-xs text-navy-500 uppercase tracking-widest font-semibold mt-0.5">Polymer Tech Ltd, Pune</p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* FAQ SECTION */}
        <section className="py-24 bg-navy-50 relative" id="faqs">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-accent">
                Support Center
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-primary tracking-tight">
                Frequently Asked Questions
              </h2>
              <div className="w-16 h-1 bg-accent rounded mx-auto" />
            </div>

            <div className="max-w-3xl mx-auto space-y-4">
              {faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-xl border border-gray-200/60 overflow-hidden transition-shadow shadow-sm hover:shadow"
                >
                  <button
                    onClick={() => setActiveFAQ(activeFAQ === idx ? null : idx)}
                    className="w-full text-left p-5 flex items-center justify-between text-primary font-bold text-sm cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      size={18}
                      className={`text-accent shrink-0 transition-transform ${
                        activeFAQ === idx ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  
                  <AnimatePresence>
                    {activeFAQ === idx && (
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: "auto" }}
                        exit={{ height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <div className="p-5 pt-0 border-t border-gray-50 text-xs text-navy-500 leading-relaxed">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* CONTACT SECTION */}
        <section className="py-24 bg-white relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              
              {/* Left Column - Details */}
              <div className="space-y-8">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-accent">
                    Get in Touch
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-extrabold text-primary tracking-tight mt-2">
                    Contact Our Sales Team
                  </h2>
                  <div className="w-16 h-1 bg-accent rounded mt-4" />
                </div>

                <p className="text-sm text-navy-500 leading-relaxed">
                  Have technical specifications to send? Or do you need a custom-built physical testing instrument? Submit details using our contact form or visit our factory coordinates.
                </p>

                <ul className="space-y-6 text-sm text-primary">
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-orange-50 text-accent flex items-center justify-center shrink-0 mt-0.5">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-xs uppercase tracking-wide text-gray-400">Factory Address</h4>
                      <p className="text-xs font-semibold leading-relaxed mt-1">
                        Khasra No.- 367/368, Near By Madhyamik Vidyalya, Surya Vihar, Mahiuddinpur, Hisali MuradNagar, Ghaziabad, Pin-Code - 201206, India
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-orange-50 text-accent flex items-center justify-center shrink-0 mt-0.5">
                      <Phone size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-xs uppercase tracking-wide text-gray-400">Call Regional Office</h4>
                      <div className="mt-1 space-y-1">
                        <Link href="tel:+919312745516" className="text-xs font-semibold hover:text-accent transition-colors block">
                          +91 93127 45516
                        </Link>
                        <Link href="tel:+918130818486" className="text-xs font-semibold hover:text-accent transition-colors block">
                          +91 81308 18486
                        </Link>
                      </div>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-orange-50 text-accent flex items-center justify-center shrink-0 mt-0.5">
                      <Mail size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-xs uppercase tracking-wide text-gray-400">Email Specifications</h4>
                      <Link href="mailto:uniqueindustries2018@gmail.com" className="text-xs font-semibold hover:text-accent transition-colors block mt-1">
                        uniqueindustries2018@gmail.com
                      </Link>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-orange-50 text-accent flex items-center justify-center shrink-0 mt-0.5">
                      <Clock size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-xs uppercase tracking-wide text-gray-400">Business Hours</h4>
                      <p className="text-xs font-semibold mt-1">
                        Monday - Saturday: 9:00 AM - 6:00 PM <br />
                        <span className="text-gray-400 font-normal">Sunday: Closed</span>
                      </p>
                    </div>
                  </li>
                </ul>

                {/* Simulated Google Map Locator */}
                <div className="bg-slate-900 rounded-xl overflow-hidden border border-slate-800 p-6 flex items-center gap-6 relative shadow-lg">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-accent/5 rounded-full filter blur-xl pointer-events-none" />
                  <div className="w-16 h-16 rounded-full bg-slate-800 text-accent flex items-center justify-center shrink-0">
                    <MapPin size={28} className="stroke-[1.5]" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Map Locator Coordinates</h4>
                    <p className="text-[11px] text-slate-300 leading-relaxed mt-1">
                      Lat: 28.7758° N, Long: 77.5458° E. Located near Madhyamik Vidyalya, Hisali.
                    </p>
                    <Link
                      href="https://maps.google.com"
                      target="_blank"
                      className="inline-flex items-center gap-1.5 text-xs text-accent font-bold mt-2 hover:underline"
                    >
                      Open Google Maps
                      <ExternalLink size={12} />
                    </Link>
                  </div>
                </div>

              </div>

              {/* Right Column - Contact Form */}
              <div className="bg-navy-50 p-8 rounded-2xl border border-gray-100 shadow-sm relative">
                
                {contactSubmitted ? (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center mb-4">
                      <FileCheck2 size={36} />
                    </div>
                    <h3 className="text-lg font-bold text-primary mb-2">Message Transmitted!</h3>
                    <p className="text-xs text-navy-500 max-w-xs">
                      We have logged your query. Our engineering team will review your contact details and reach out within one business day.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleContactSubmit} className="space-y-5">
                    <h3 className="text-lg font-bold text-primary">Send Specifications</h3>
                    
                    <div className="space-y-4">
                      <div>
                        <label className="block text-[10px] font-bold uppercase tracking-wider text-gray-500 mb-1.5">
                          Full Name
                        </label>
                        <input
                          type="text"
                          required
                          value={contactForm.name}
                          onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-xs bg-white focus:outline-none focus:border-accent"
                          placeholder="John Doe"
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-[10px] font-bold uppercase tracking-wider text-gray-500 mb-1.5">
                            Work Email
                          </label>
                          <input
                            type="email"
                            required
                            value={contactForm.email}
                            onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                            className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-xs bg-white focus:outline-none focus:border-accent"
                            placeholder="john@company.com"
                          />
                        </div>
                        <div>
                          <label className="block text-[10px] font-bold uppercase tracking-wider text-gray-500 mb-1.5">
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            required
                            value={contactForm.phone}
                            onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                            className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-xs bg-white focus:outline-none focus:border-accent"
                            placeholder="+91"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-[10px] font-bold uppercase tracking-wider text-gray-500 mb-1.5">
                          Company Name
                        </label>
                        <input
                          type="text"
                          value={contactForm.company}
                          onChange={(e) => setContactForm({ ...contactForm, company: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-xs bg-white focus:outline-none focus:border-accent"
                          placeholder="Corporation Ltd"
                        />
                      </div>

                      <div>
                        <label className="block text-[10px] font-bold uppercase tracking-wider text-gray-500 mb-1.5">
                          Your Inquiry details
                        </label>
                        <textarea
                          rows={4}
                          required
                          value={contactForm.message}
                          onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-xs bg-white focus:outline-none focus:border-accent"
                          placeholder="Outline testing capacities, physical dimensions or sample testing queries..."
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3 bg-primary hover:bg-navy-800 text-white font-bold text-xs uppercase tracking-wider rounded-lg shadow cursor-pointer transition-colors"
                    >
                      Send Message
                    </button>
                  </form>
                )}

              </div>

            </div>
          </div>
        </section>

      </main>

      <Footer onRequestQuote={() => openQuoteWithCategory("")} />

      {/* Request Quote Modal */}
      <QuoteModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
        selectedProductCategory={selectedCategory}
      />
    </>
  );
}

// Add simple TS interfaces or types to bypass eslint
interface CheckCircleProps {
  size?: number;
  className?: string;
}
function CheckCircle({ size = 20, className }: CheckCircleProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <circle cx="12" cy="12" r="10" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}
