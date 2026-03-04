"use client";

import { useState } from "react";
import { ClockDemo } from "./clock-demo";
import { COMPONENTS } from "@/lib/registry";

export function HeroClock() {
  const [activeVariant, setActiveVariant] = useState(COMPONENTS[0].slug);

  return (
    <div className="flex flex-col gap-6">
      {/* Preview frame */}
      <div className="border border-[var(--color-line)] bg-[var(--color-bg-subtle)]">
        <div className="flex items-center px-4 py-2 border-b border-[var(--color-line)]">
          <span className="font-mono text-[var(--text-xxs)] text-[var(--color-text-muted)] uppercase tracking-wider">
            [ live preview ]
          </span>
        </div>
        <div className="flex items-center justify-center py-10 px-4">
          <ClockDemo variant={activeVariant} size={40} />
        </div>
      </div>

      {/* Variant toggles */}
      <div className="flex gap-4 flex-wrap">
        {COMPONENTS.map(({ slug, label }) => (
          <button
            key={slug}
            onClick={() => setActiveVariant(slug)}
            className={`font-mono text-[var(--text-xs)] uppercase tracking-wider transition-colors duration-150 ${
              activeVariant === slug
                ? "text-[var(--color-text-primary)]"
                : "text-[var(--color-text-muted)] hover:text-[var(--color-text-secondary)]"
            }`}
          >
            {activeVariant === slug ? `[ ${label} ]` : label}
          </button>
        ))}
      </div>
    </div>
  );
}
