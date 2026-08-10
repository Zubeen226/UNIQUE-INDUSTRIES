"use client";

import { motion } from "framer-motion";

interface MachineGraphicProps {
  type: number; // 1 to 8 matching the machines
  isHovered: boolean;
}

export default function MachineGraphic({ type, isHovered }: MachineGraphicProps) {
  // Common Grid Overlay
  const renderGrid = () => (
    <g className="opacity-20">
      <pattern id="cad-grid" width="10" height="10" patternUnits="userSpaceOnUse">
        <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#cbd5e1" strokeWidth="0.5" />
      </pattern>
      <rect width="100%" height="100%" fill="url(#cad-grid)" />
    </g>
  );

  switch (type) {
    case 1: // CNC Machining Center
      return (
        <svg viewBox="0 0 400 240" className="w-full h-full bg-slate-900 rounded-lg overflow-hidden">
          {renderGrid()}
          {/* Machine Outer Frame */}
          <rect x="60" y="40" width="280" height="160" rx="6" fill="#1e293b" stroke="#334155" strokeWidth="2" />
          <rect x="80" y="60" width="240" height="120" rx="4" fill="#0f172a" stroke="#F97316" strokeWidth="1" strokeDasharray="4 2" />
          
          {/* Tool Spindle */}
          <g className="origin-top">
            <motion.g
              animate={isHovered ? { y: [0, 30, -10, 0], x: [0, 40, -40, 0] } : {}}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            >
              <rect x="180" y="50" width="40" height="40" fill="#475569" rx="2" />
              <rect x="195" y="90" width="10" height="20" fill="#94a3b8" />
              {/* Spindle head */}
              <polygon points="190,110 210,110 200,125" fill="#f1f5f9" />
              {/* Laser / Spark effect */}
              {isHovered && (
                <motion.circle
                  cx="200"
                  cy="125"
                  r="6"
                  fill="#F97316"
                  animate={{ scale: [1, 2, 1], opacity: [0.8, 0.2, 0.8] }}
                  transition={{ repeat: Infinity, duration: 0.5 }}
                />
              )}
            </motion.g>
          </g>
          {/* Workpiece */}
          <rect x="130" y="150" width="140" height="30" fill="#334155" rx="2" stroke="#475569" />
          <line x1="60" y1="180" x2="340" y2="180" stroke="#F97316" strokeWidth="2" />
          
          {/* Technical Text overlays */}
          <text x="70" y="55" fill="#64748b" className="font-mono text-[9px] uppercase tracking-widest font-semibold">
            CNC Vertical Mill VMC
          </text>
          <text x="280" y="190" fill="#F97316" className="font-mono text-[9px] uppercase tracking-widest font-bold">
            AXIS ACTIVE
          </text>
        </svg>
      );

    case 2: // Wire Cut EDM
      return (
        <svg viewBox="0 0 400 240" className="w-full h-full bg-slate-900 rounded-lg overflow-hidden">
          {renderGrid()}
          {/* EDM chamber */}
          <rect x="80" y="30" width="240" height="180" rx="8" fill="#1e293b" stroke="#334155" strokeWidth="2" />
          
          {/* Upper Guide */}
          <rect x="185" y="45" width="30" height="30" fill="#475569" rx="2" />
          {/* Lower Guide */}
          <rect x="185" y="165" width="30" height="30" fill="#475569" rx="2" />
          
          {/* Electrode Wire */}
          <line x1="200" y1="75" x2="200" y2="165" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="3 3" />
          
          {/* Workpiece block */}
          <motion.rect
            x="140"
            y="100"
            width="120"
            height="40"
            rx="3"
            fill="#0f172a"
            stroke="#64748b"
            strokeWidth="1.5"
            animate={isHovered ? { x: [140, 160, 120, 140] } : {}}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          />

          {/* Glowing spark node */}
          {isHovered && (
            <motion.circle
              cx="200"
              cy="120"
              r="4"
              fill="#38bdf8"
              className="shadow-lg shadow-sky-500"
              animate={{ scale: [1, 2.5, 1], opacity: [1, 0, 1] }}
              transition={{ repeat: Infinity, duration: 0.2 }}
            />
          )}

          <text x="90" y="45" fill="#64748b" className="font-mono text-[9px] uppercase tracking-widest font-semibold">
            EDM WIRE WS600
          </text>
          <text x="90" y="198" fill="#38bdf8" className="font-mono text-[9px] uppercase tracking-widest font-bold">
            SPARK VOLTAGE: ON
          </text>
        </svg>
      );

    case 3: // Manual Lathe Machine 8 Feet
    case 4: // Manual Lathe Machines 6 Feet
      return (
        <svg viewBox="0 0 400 240" className="w-full h-full bg-slate-900 rounded-lg overflow-hidden">
          {renderGrid()}
          {/* Lathe Bed */}
          <rect x="50" y="140" width="300" height="40" fill="#1e293b" rx="2" stroke="#334155" strokeWidth="2" />
          
          {/* Headstock */}
          <rect x="50" y="70" width="70" height="70" fill="#334155" rx="3" />
          <circle cx="85" cy="105" r="20" fill="#0f172a" stroke="#475569" strokeWidth="2" />
          
          {/* Chuck & Shaft */}
          <rect x="120" y="95" width="20" height="20" fill="#64748b" />
          <motion.rect
            x="140"
            y="98"
            width="120"
            height="14"
            fill="#94a3b8"
            animate={isHovered ? { skewY: [0, 0.5, -0.5, 0] } : {}}
            transition={{ repeat: Infinity, duration: 0.1 }}
          />

          {/* Tailstock */}
          <rect x="280" y="80" width="50" height="60" fill="#334155" rx="3" />
          <polygon points="280,105 260,105 280,100" fill="#64748b" />

          {/* Toolpost */}
          <motion.g
            animate={isHovered ? { x: [0, 40, -20, 0] } : {}}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
          >
            <rect x="180" y="112" width="25" height="28" fill="#475569" rx="1" />
            <polygon points="180,112 170,107 180,105" fill="#f1f5f9" />
          </motion.g>

          <text x="60" y="60" fill="#64748b" className="font-mono text-[9px] uppercase tracking-widest font-semibold">
            {type === 3 ? "HEAVY DUTY LATHE - 8FT" : "PRECISION LATHE - 6FT"}
          </text>
          {isHovered && (
            <text x="250" y="200" fill="#F97316" className="font-mono text-[9px] uppercase tracking-widest font-bold">
              SPINDLE: 1200 RPM
            </text>
          )}
        </svg>
      );

    case 5: // Surface Grinding Machine
      return (
        <svg viewBox="0 0 400 240" className="w-full h-full bg-slate-900 rounded-lg overflow-hidden">
          {renderGrid()}
          {/* Base */}
          <rect x="60" y="160" width="280" height="30" fill="#1e293b" rx="2" stroke="#334155" />
          
          {/* Table */}
          <motion.rect
            x="100"
            y="145"
            width="200"
            height="15"
            fill="#334155"
            rx="1"
            animate={isHovered ? { x: [100, 140, 60, 100] } : {}}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          />

          {/* Grinding Column */}
          <rect x="185" y="40" width="30" height="105" fill="#1e293b" />
          
          {/* Grinding Wheel */}
          <motion.g
            animate={isHovered ? { rotate: 360 } : {}}
            transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
            style={{ transformOrigin: "200px 95px" }}
          >
            <circle cx="200" cy="95" r="28" fill="#475569" stroke="#64748b" strokeWidth="2" />
            <circle cx="200" cy="95" r="8" fill="#0f172a" />
            <line x1="200" y1="67" x2="200" y2="123" stroke="#334155" strokeWidth="2" />
          </motion.g>

          <text x="70" y="55" fill="#64748b" className="font-mono text-[9px] uppercase tracking-widest font-semibold">
            SAI SURFACE GRINDER 8x18
          </text>
          {isHovered && (
            <text x="240" y="210" fill="#ea580c" className="font-mono text-[9px] uppercase tracking-widest font-bold">
              GRINDING ACTIVE
            </text>
          )}
        </svg>
      );

    case 6: // Plasma Cutting Machine
      return (
        <svg viewBox="0 0 400 240" className="w-full h-full bg-slate-900 rounded-lg overflow-hidden">
          {renderGrid()}
          {/* Cutting Bed */}
          <rect x="70" y="150" width="260" height="30" fill="#1e293b" rx="2" stroke="#334155" />
          
          {/* Metal Sheet */}
          <rect x="90" y="142" width="220" height="8" fill="#64748b" />
          
          {/* Plasma Torch Assembly */}
          <motion.g
            animate={isHovered ? { x: [0, 160, -40, 0] } : {}}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          >
            {/* Gantry structure */}
            <rect x="110" y="50" width="20" height="92" fill="#475569" opacity="0.8" />
            <rect x="105" y="70" width="30" height="20" fill="#F97316" rx="2" />
            {/* Torch tip */}
            <polygon points="115,90 125,90 120,142" fill="#e2e8f0" />
            {/* Plasma beam */}
            {isHovered && (
              <motion.line
                x1="120"
                y1="142"
                x2="120"
                y2="152"
                stroke="#06b6d4"
                strokeWidth="3"
                animate={{ opacity: [1, 0.4, 1] }}
                transition={{ repeat: Infinity, duration: 0.1 }}
              />
            )}
          </motion.g>

          <text x="80" y="45" fill="#64748b" className="font-mono text-[9px] uppercase tracking-widest font-semibold">
            PLASMA CUTTER CAPACITY: MS 32MM / SS 20MM
          </text>
          {isHovered && (
            <text x="250" y="200" fill="#06b6d4" className="font-mono text-[9px] uppercase tracking-widest font-bold">
              ARC ESTABLISHED
            </text>
          )}
        </svg>
      );

    case 7: // Arc Welding Machine
      return (
        <svg viewBox="0 0 400 240" className="w-full h-full bg-slate-900 rounded-lg overflow-hidden">
          {renderGrid()}
          {/* Welding Machine unit */}
          <rect x="60" y="60" width="110" height="120" rx="6" fill="#1e293b" stroke="#334155" strokeWidth="2" />
          <circle cx="85" cy="85" r="8" fill="#F97316" />
          <rect x="115" y="80" width="40" height="10" fill="#0f172a" rx="1" />
          <circle cx="95" cy="140" r="10" fill="#0f172a" />
          <circle cx="135" cy="140" r="10" fill="#0f172a" />

          {/* Electrodes / Cables */}
          <path d="M 95 140 Q 140 220 220 180" fill="none" stroke="#475569" strokeWidth="4" />
          <path d="M 135 140 Q 200 220 250 140" fill="none" stroke="#dc2626" strokeWidth="4" />

          {/* Welding Torch & Metal piece */}
          <g>
            {/* Workpiece */}
            <rect x="220" y="130" width="100" height="20" fill="#64748b" rx="1" />
            <rect x="260" y="110" width="15" height="20" fill="#475569" />
            
            {/* Welder hand/torch */}
            <motion.g
              animate={isHovered ? { x: [-5, 5, -5], y: [-2, 2, -2] } : {}}
              transition={{ repeat: Infinity, duration: 0.1 }}
            >
              <line x1="250" y1="140" x2="265" y2="120" stroke="#f1f5f9" strokeWidth="3" />
              <rect x="240" y="137" width="12" height="6" fill="#1e293b" />
            </motion.g>

            {/* Spark explosion */}
            {isHovered && (
              <motion.g
                animate={{ scale: [1, 2, 0.5], opacity: [1, 1, 0] }}
                transition={{ repeat: Infinity, duration: 0.3 }}
                style={{ originX: "262px", originY: "130px" }}
              >
                <circle cx="262" cy="130" r="8" fill="#fde047" />
                <line x1="262" y1="130" x2="250" y2="120" stroke="#fef08a" strokeWidth="1.5" />
                <line x1="262" y1="130" x2="275" y2="125" stroke="#fef08a" strokeWidth="1.5" />
                <line x1="262" y1="130" x2="265" y2="145" stroke="#fef08a" strokeWidth="1.5" />
              </motion.g>
            )}
          </g>

          <text x="70" y="45" fill="#64748b" className="font-mono text-[9px] uppercase tracking-widest font-semibold">
            ARC WELDER 8/10/12 GAUGE
          </text>
          {isHovered && (
            <text x="240" y="200" fill="#fde047" className="font-mono text-[9px] uppercase tracking-widest font-bold">
              DISCHARGE STABLE
            </text>
          )}
        </svg>
      );

    case 8: // Bandsaw Cutting Machine
      return (
        <svg viewBox="0 0 400 240" className="w-full h-full bg-slate-900 rounded-lg overflow-hidden">
          {renderGrid()}
          {/* Base */}
          <rect x="80" y="150" width="240" height="40" fill="#1e293b" rx="2" stroke="#334155" />
          
          {/* Wheels for Bandsaw blade */}
          <motion.circle
            cx="120"
            cy="100"
            r="30"
            fill="#334155"
            stroke="#64748b"
            strokeWidth="2"
            animate={isHovered ? { rotate: 360 } : {}}
            transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
          />
          <motion.circle
            cx="280"
            cy="100"
            r="30"
            fill="#334155"
            stroke="#64748b"
            strokeWidth="2"
            animate={isHovered ? { rotate: 360 } : {}}
            transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
          />

          {/* Endless Blade */}
          <line x1="120" y1="70" x2="280" y2="70" stroke="#cbd5e1" strokeWidth="1.5" />
          <line x1="120" y1="130" x2="280" y2="130" stroke="#cbd5e1" strokeWidth="1.5" />

          {/* Solid Metal rod being cut */}
          <rect x="180" y="115" width="40" height="30" fill="#94a3b8" rx="1" />
          <motion.line
            x1="180"
            y1="130"
            x2="220"
            y2="130"
            stroke="#F97316"
            strokeWidth="2"
            animate={isHovered ? { opacity: [1, 0, 1] } : {}}
            transition={{ repeat: Infinity, duration: 0.1 }}
          />

          <text x="90" y="45" fill="#64748b" className="font-mono text-[9px] uppercase tracking-widest font-semibold">
            BANDSAW CAPACITY: 10-INCH DIAMETER
          </text>
          {isHovered && (
            <text x="240" y="215" fill="#F97316" className="font-mono text-[9px] uppercase tracking-widest font-bold">
              FEED RATE: AUTOMATIC
            </text>
          )}
        </svg>
      );

    default:
      return null;
  }
}
