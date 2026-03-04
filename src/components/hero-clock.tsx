"use client";

import { useState } from "react";
import { ClockDemo } from "./clock-demo";
import { COMPONENTS } from "@/lib/registry";

export function HeroClock() {
  const [activeVariant, setActiveVariant] = useState(COMPONENTS[0].slug);

  return (
    <div className="flex flex-col items-center gap-6">
      {/* Terminal frame */}
      <div className="rounded-lg border border-border bg-card overflow-hidden w-full max-w-xl">
        <div className="flex items-center gap-2 px-4 py-2.5 border-b border-border">
          <span className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
          </span>
          <span className="mono-label ml-2">live preview</span>
        </div>
        <div className="flex items-center justify-center py-8 px-4">
          <ClockDemo variant={activeVariant} size={40} />
        </div>
      </div>

      {/* Variant toggles */}
      <div className="flex gap-2 flex-wrap justify-center">
        {COMPONENTS.map(({ slug, label, accentColor }) => (
          <button
            key={slug}
            onClick={() => setActiveVariant(slug)}
            className={`px-3 py-1.5 rounded-full font-mono text-[10px] uppercase tracking-wider font-medium transition-all border ${
              activeVariant === slug
                ? "border-white/20 text-white"
                : "border-transparent text-muted hover:text-foreground"
            }`}
            style={
              activeVariant === slug
                ? {
                    backgroundColor: accentColor + "20",
                    borderColor: accentColor + "40",
                  }
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
