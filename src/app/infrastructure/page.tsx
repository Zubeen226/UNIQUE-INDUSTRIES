"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Cpu,
  Activity,
  Wrench,
  Settings,
  Layers,
  Zap,
  Compass,
  ShieldCheck,
  ChevronRight,
  Sparkles,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import QuoteModal from "@/components/QuoteModal";
import MachineGraphic from "@/components/MachineGraphic";

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

export default function InfrastructurePage() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [quoteCategory, setQuoteCategory] = useState("");
  const [selectedMachine, setSelectedMachine] = useState<Machine | null>(null);
  const [hoveredMachineId, setHoveredMachineId] = useState<number | null>(null);
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

  return (
    <>
      <Navbar onRequestQuote={() => setIsQuoteOpen(true)} />
      
      <main className="min-h-screen bg-white pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-accent flex items-center justify-center gap-1.5">
              <Sparkles size={12} />
              In-House Capabilities
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-primary tracking-tight">
              Our Manufacturing Infrastructure
            </h1>
            <div className="w-16 h-1 bg-accent rounded mx-auto" />
            <p className="text-sm text-navy-500 max-w-xl mx-auto leading-relaxed">
              Explore the advanced fabrication machinery, milling centers, and EDM profile cutters operating at our Faridabad facility to secure absolute component precision.
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {machines.map((mac) => {
              const IconComponent = mac.icon;
              return (
                <motion.div
                  key={mac.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: mac.id * 0.05 }}
                  onMouseEnter={() => setHoveredMachineId(mac.id)}
                  onMouseLeave={() => setHoveredMachineId(null)}
                  className="bg-navy-50 rounded-xl overflow-hidden border border-gray-100 flex flex-col hover:shadow-lg transition-all duration-300"
                >
                  <div className="aspect-video w-full bg-slate-950 relative overflow-hidden">
                    {mac.image ? (
                      <Image
                        src={mac.image}
                        alt={mac.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                        sizes="(max-width: 768px) 100vw, 33vw"
                        unoptimized
                      />
                    ) : (
                      <MachineGraphic type={mac.id} isHovered={hoveredMachineId === mac.id} />
                    )}
                  </div>

                  <div className="p-6 md:p-8 space-y-6 flex-1 flex flex-col justify-between">
                    <div className="space-y-4">
                      <div className="flex items-center gap-2 text-accent">
                        <IconComponent size={20} />
                        <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
                          {mac.brand}
                        </span>
                      </div>
                      
                      <h3 className="text-xl font-bold text-primary tracking-tight">
                        {mac.name}
                      </h3>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                        <div>
                          <h4 className="text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-2">
                            Specifications
                          </h4>
                          <ul className="space-y-1.5">
                            {mac.specs.map((spec, i) => (
                              <li key={i} className="text-xs text-navy-600 flex items-start gap-1.5 leading-relaxed">
                                <span className="text-accent mt-1">•</span>
                                <span>{spec}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-2">
                            Applications
                          </h4>
                          <ul className="space-y-1.5">
                            {mac.apps.map((app, i) => (
                              <li key={i} className="text-xs text-navy-600 flex items-start gap-1.5 leading-relaxed">
                                <span className="text-accent mt-1">•</span>
                                <span>{app}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="pt-6 border-t border-gray-100 mt-6 flex items-center justify-between">
                      <div className="flex gap-2">
                        {mac.capacity && (
                          <span className="text-[10px] font-mono text-gray-400 bg-white border border-gray-200 px-2 py-1 rounded">
                            Cap: {mac.capacity.split("|")[0]}
                          </span>
                        )}
                        {mac.bedLength && (
                          <span className="text-[10px] font-mono text-gray-400 bg-white border border-gray-200 px-2 py-1 rounded">
                            Bed: {mac.bedLength}
                          </span>
                        )}
                        {mac.tableSize && (
                          <span className="text-[10px] font-mono text-gray-400 bg-white border border-gray-200 px-2 py-1 rounded">
                            Size: {mac.tableSize}
                          </span>
                        )}
                      </div>
                      
                      <button
                        onClick={() => {
                          setQuoteCategory(`Custom machining - ${mac.name}`);
                          setIsQuoteOpen(true);
                        }}
                        className="px-4 py-2 bg-primary hover:bg-navy-800 text-white font-bold text-xs rounded-lg transition-colors cursor-pointer"
                      >
                        Inquire Capacity
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </main>

      <FloatingWhatsApp />
      <Footer onRequestQuote={() => setIsQuoteOpen(true)} />

      <QuoteModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
        selectedProductCategory={quoteCategory}
      />
    </>
  );
}
