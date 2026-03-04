"use client";

import { useState } from "react";
import { ClockDemo } from "./clock-demo";

type Variant = "particle-scatter" | "thread-unravel" | "ink-bloom" | "flip-dot";

const VARIANTS: { variant: Variant; label: string; color: string }[] = [
  { variant: "particle-scatter", label: "Particle Scatter", color: "#a3e635" },
  { variant: "thread-unravel", label: "Thread Unravel", color: "#38bdf8" },
  { variant: "ink-bloom", label: "Ink Bloom", color: "#c084fc" },
  { variant: "flip-dot", label: "Flip Dot", color: "#fbbf24" },
];

export function HeroClock() {
  const [activeVariant, setActiveVariant] = useState<Variant>("particle-scatter");

  return (
    <div className="flex flex-col items-center gap-8">
      <div className="flex items-center justify-center min-h-[120px]">
        <ClockDemo variant={activeVariant} size={52} />
      </div>
      <div className="flex gap-2">
        {VARIANTS.map(({ variant, label, color }) => (
          <button
            key={variant}
            onClick={() => setActiveVariant(variant)}
            className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all border ${
              activeVariant === variant
                ? "border-white/20 text-white"
                : "border-transparent text-muted hover:text-foreground"
            }`}
            style={
              activeVariant === variant
                ? { backgroundColor: color + "20", borderColor: color + "40" }
                : undefined
            }
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
}
