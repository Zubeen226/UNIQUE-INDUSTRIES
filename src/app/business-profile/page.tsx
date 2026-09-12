"use client";

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
  Wrench,
  Zap,
  Compass,
  Activity,
} from "lucide-react";

export default function BusinessProfile() {
  const printProfile = () => {
    window.print();
  };

  const capabilities = [
    {
      title: "Precision CNC Machining",
      desc: "High-grade turning, boring, and profiling using multi-axis Japanese and domestic CNC centers (LMW LL20T L5).",
      icon: Cpu,
    },
    {
      title: "Custom Jig & Fixture Design",
      desc: "Specialized mechanical assemblies, custom jigs, and workholding fixtures engineered for repeat precision component manufacturing.",
      icon: Settings,
    },
    {
      title: "Mechanical Fabrication & Tooling",
      desc: "High-accuracy custom tooling, metal component fabrication, surface grinding, plasma cutting, and structural welding for industrial machinery.",
      icon: Wrench,
    },
  ];

  const machines = [
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
        "Industrial testing equipment parts",
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
        "Best Surface Finish: ≤ 1.5 µm",
        "Maximum Cutting Speed: ≥ 100 mm²/min",
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
        "Swing Over Bed: 20\" to 28\" (500 - 700 mm)",
        "Admit Between Centers: 4.5 to 5 Feet",
        "Spindle Bore: 2\" to 4.13\" (52 - 105 mm)",
        "Metric Threads: 0.5 to 7 mm pitch range",
        "Lead Screw Diameter: 1.25\" to 1.5\" (4 TPI)",
        "Main Motor Power: 3 HP to 5 HP (3-Phase)",
      ],
      apps: [
        "Heavy turning & facing operations",
        "Taper and thread cutting (Metric & Inch)",
        "Long shaft machining & maintenance",
        "Raw stock cutting and preparation",
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
        "Distance Between Centers: 39 Inches",
        "Spindle Bore: 2 Inches (52 mm)",
        "Spindle Speeds: 8 Speeds (30 – 750 RPM)",
        "Required Motor Power: 1.5 to 2.0 HP",
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
        "Max Longitudinal Travel: 19 Inches",
        "Max Cross Travel: 9 Inches (225 mm)",
        "Spindle Center to Table Distance: Max 14\"",
        "Grinding Wheel Speed: 2,800 RPM",
        "Flatness & Parallelism Accuracy: 0.005 mm",
        "Micro-feed Vertical Graduation: 0.01 mm",
        "Motor Power: 1.0 HP (3-Phase, 415V)",
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
        "Power Supply: 3-Phase, 415V AC, 50/60 Hz",
        "Output Current Range: 20 – 100 Amps",
        "Duty Cycle: 60% @ 100A | 100% @ 77A",
        "Quality Cut (Mild Steel): Up to 25 mm",
        "Severance Cut (Mild Steel): Up to 32 mm",
        "Quality Cut (Stainless Steel): Up to 16 mm",
        "Required Air Pressure: 4.5 – 5.5 bar",
        "Arc Striking: HF Pilot Arc",
      ],
      apps: [
        "Heavy metal plate profiling & shapes",
        "Stainless steel & carbon steel cutting",
        "Structural frame component fabrication",
        "Beveling and weld joint preparation",
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
        "Power Supply: 3-Phase, 415V AC, 50/60 Hz",
        "Output Current Range: 30 – 310 Amps",
        "Adjustable Arc Force: 0 – 10% control",
        "Duty Cycle: 60% @ 310A | 100% @ 240A",
        "Compatible Electrodes: 8, 10 & 12 Gauge",
        "Insulating Grade: Class H (High thermal)",
        "Cooling System: High-speed turbo fan",
        "Safety Class: IP21S | Over-current protection",
      ],
      apps: [
        "Heavy-duty structural framework welding",
        "Testing instrument casing & base fabrication",
        "Machine bed and mounting bracket assembly",
        "High-strength joint welding for steel & MS",
      ],
      image: "/images/machines/arc_welder.png",
    },
    {
      id: 8,
      name: "Bandsaw Cutting Machine",
      brand: "New Bansal Bandsaw Machine",
      qty: "1 Unit",
      capacity: "Max Cutting Diameter: 10 Inches",
      icon: ShieldCheck,
      specs: [
        "Round Bar Cutting Capacity: Up to 10 Inches",
        "Square Section Cutting Capacity: 8\" × 8\"",
        "Blade Size (L × W × T): 3000 × 27 × 0.9 mm",
        "Blade Drive Motor: 2.0 HP (3-Phase, 415V)",
        "Cutting Speeds: Step Pulley (25-85 m/min)",
        "Feed Control: Hydraulic Cylinder",
        "Coolant System: Integrated pump",
        "Vice Clamping: Manual screw with quick lock",
      ],
      apps: [
        "Raw round bar & pipe stock preparation",
        "Solid metal sections & angles cutting",
        "Batch cutting of raw materials for assembly",
        "Precision perpendicular and straight cuts",
      ],
      image: "/images/machines/bandsaw.png",
    },
  ];

  return (
    <div className="business-profile-page min-h-screen bg-slate-50 text-slate-900 py-10 px-4 sm:px-6 lg:px-8 print:bg-white print:text-black print:p-0 print:m-0">
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
            className="px-4 py-2 bg-accent hover:bg-sky-700 text-white rounded-lg text-xs font-bold flex items-center gap-1.5 shadow-sm transition-colors cursor-pointer"
          >
            <Printer size={14} />
            Print / Save to PDF
          </button>
        </div>
      </div>

      {/* Main Profile Document Sheet */}
      <div className="profile-card max-w-4xl mx-auto bg-white p-12 rounded-2xl shadow-xl border border-gray-200/60 print:shadow-none print:border-none print:p-0 print:m-0 relative overflow-hidden">
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
              Manufacturer of Precision Industrial Components, Tooling & Mechanical Assemblies
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
              Established in Ghaziabad, Uttar Pradesh, <strong>Unique Industries</strong> is a premier mechanical engineering manufacturer and industrial supplier specializing in high-grade CNC turning & machined components, specialized jigs & fixtures, precision tooling, and heavy mechanical component fabrication. Under the veteran leadership of <strong>Mohd. Rafiq Ansari</strong>, we have built a trusted reputation across manufacturing, automotive, and industrial engineering sectors in India by committing to premium quality materials, state-of-the-art machinery, and an expert engineering workforce.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-50 p-4 rounded-xl border border-gray-100 text-center print:bg-white print:border">
              <h4 className="text-lg font-bold text-accent">100%</h4>
              <p className="text-[10px] text-slate-500 uppercase font-bold tracking-wide mt-1">Quality Guaranteed</p>
            </div>
            <div className="bg-slate-50 p-4 rounded-xl border border-gray-100 text-center print:bg-white print:border">
              <h4 className="text-lg font-bold text-accent">Advanced</h4>
              <p className="text-[10px] text-slate-500 uppercase font-bold tracking-wide mt-1">In-House CNC & EDM Shop</p>
            </div>
            <div className="bg-slate-50 p-4 rounded-xl border border-gray-100 text-center print:bg-white print:border">
              <h4 className="text-lg font-bold text-accent">Micron Precision</h4>
              <p className="text-[10px] text-slate-500 uppercase font-bold tracking-wide mt-1">High Accuracy Machining</p>
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
                  <div className="w-9 h-9 rounded-lg bg-blue-50 text-accent flex items-center justify-center">
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

        {/* MACHINERY & INFRASTRUCTURE DETAIL CARDS */}
        <div className="space-y-8 mb-10">
          <div className="space-y-2">
            <h2 className="text-base font-bold text-primary uppercase tracking-wider border-l-4 border-accent pl-3">
              Machinery & Production Capacity
            </h2>
            <p className="text-xs text-slate-600 leading-relaxed">
              Our tooling facility in Ghaziabad is equipped with modern vertical machining centers, precision CNC turn-mills, and high-frequency EDM wire-cutting setups to assure micron-level tolerance compliance.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8">
            {machines.map((mac) => {
              const IconComponent = mac.icon;
              return (
                <div
                  key={mac.id}
                  className="border border-slate-200/80 rounded-xl overflow-hidden flex flex-col md:flex-row hover:shadow-md transition-shadow duration-300 break-inside-avoid print:shadow-none print:border print:border-gray-200"
                >
                  {/* Left block - Machine Image */}
                  <div className="relative w-full md:w-64 h-48 md:h-auto bg-slate-100 print:bg-white overflow-hidden shrink-0 print:w-48 print:h-44">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={mac.image}
                      alt={mac.name}
                      loading="eager"
                      className="w-full h-full object-cover opacity-90"
                    />
                  </div>

                  {/* Right block - Machine Info */}
                  <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-accent">
                          <IconComponent size={16} />
                          <span className="text-[9px] font-bold uppercase tracking-widest text-slate-400">
                            {mac.brand}
                          </span>
                        </div>
                        <span className="text-[10px] font-bold uppercase px-2 py-0.5 bg-slate-100 text-slate-700 rounded-full border border-slate-200">
                          {mac.qty}
                        </span>
                      </div>
                      
                      <h3 className="text-lg font-bold text-primary tracking-tight">
                        {mac.name}
                      </h3>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                        <div>
                          <h4 className="text-[9px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                            Specifications
                          </h4>
                          <ul className="space-y-1">
                            {mac.specs.slice(0, 5).map((spec, i) => (
                              <li key={i} className="text-[11px] text-slate-600 flex items-start gap-1 leading-relaxed">
                                <span className="text-accent">•</span>
                                <span>{spec}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-[9px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                            Applications
                          </h4>
                          <ul className="space-y-1">
                            {mac.apps.map((app, i) => (
                              <li key={i} className="text-[11px] text-slate-600 flex items-start gap-1 leading-relaxed">
                                <span className="text-accent">•</span>
                                <span>{app}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="pt-3 border-t border-slate-100 flex gap-2">
                      {mac.capacity && (
                        <span className="text-[9px] font-mono text-slate-500 bg-slate-50 border border-slate-200 px-2 py-0.5 rounded">
                          Cap: {mac.capacity.split("|")[0]}
                        </span>
                      )}
                      {mac.bedLength && (
                        <span className="text-[9px] font-mono text-slate-500 bg-slate-50 border border-slate-200 px-2 py-0.5 rounded">
                          Bed: {mac.bedLength}
                        </span>
                      )}
                      {mac.tableSize && (
                        <span className="text-[9px] font-mono text-slate-500 bg-slate-50 border border-slate-200 px-2 py-0.5 rounded">
                          Size: {mac.tableSize}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* STANDARDS COMPLIANCE */}
        <div className="space-y-6 mb-10 break-inside-avoid">
          <h2 className="text-base font-bold text-primary uppercase tracking-wider border-l-4 border-accent pl-3 mb-4">
            Quality Assurance & Standards
          </h2>
          <div className="bg-slate-50 p-5 rounded-xl border border-slate-200/50 space-y-4 print:bg-white print:border">
            <p className="text-xs text-slate-600 leading-relaxed">
              Every mechanical component, jig, and fixture manufactured at Unique Industries undergoes multi-stage inspections using master gauges traceable to national standards:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
              <div className="flex gap-2">
                <CheckCircle size={15} className="text-emerald-600 shrink-0 mt-0.5" />
                <span className="text-slate-600 text-[11px]">Strict dimensional accuracy conforming to ISO and BIS engineering guidelines.</span>
              </div>
              <div className="flex gap-2">
                <CheckCircle size={15} className="text-emerald-600 shrink-0 mt-0.5" />
                <span className="text-slate-600 text-[11px]">Micron-level tolerance verification for internal boring & turned shafts.</span>
              </div>
              <div className="flex gap-2">
                <CheckCircle size={15} className="text-emerald-600 shrink-0 mt-0.5" />
                <span className="text-slate-600 text-[11px]">Rigorous alignment and load testing on all custom jigs & fixture assemblies.</span>
              </div>
              <div className="flex gap-2">
                <CheckCircle size={15} className="text-emerald-600 shrink-0 mt-0.5" />
                <span className="text-slate-600 text-[11px]">Physical inspection using certified verniers, micrometers & dial gauges.</span>
              </div>
            </div>
          </div>
        </div>

        {/* FOOTER & CORPORATE INFORMATION */}
        <div className="border-t border-slate-200 pt-8 mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 text-xs break-inside-avoid">
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
