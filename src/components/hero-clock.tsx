"use client";

import { useState } from "react";
import { ClockDemo } from "./clock-demo";
import { COMPONENTS } from "@/lib/registry";

export function HeroClock() {
  const [activeVariant, setActiveVariant] = useState(COMPONENTS[0].slug);

  return (
    <div className="flex flex-col items-center gap-8">
      <div className="flex items-center justify-center min-h-[120px]">
        <ClockDemo variant={activeVariant} size={52} />
      </div>
      <div className="flex gap-2">
        {COMPONENTS.map(({ slug, label, accentColor }) => (
          <button
            key={slug}
            onClick={() => setActiveVariant(slug)}
            className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all border ${
              activeVariant === slug
                ? "border-white/20 text-white"
                : "border-transparent text-muted hover:text-foreground"
            }`}
            style={
              activeVariant === slug
                ? { backgroundColor: accentColor + "20", borderColor: accentColor + "40" }
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
