"use client";

import { useState, useEffect, useCallback } from "react";

interface DigitDemoProps {
  component: React.ComponentType<{ value: number; size: number }>;
  size?: number;
  autoPlay?: boolean;
}

export function DigitDemo({ component: Component, size = 80, autoPlay = true }: DigitDemoProps) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!autoPlay) return;
    const interval = setInterval(() => {
      setValue((v) => (v + 1) % 10);
    }, 1500);
    return () => clearInterval(interval);
  }, [autoPlay]);

  return (
    <div className="flex flex-col items-center gap-6">
      <div className="flex items-center justify-center p-8 rounded-xl bg-card border border-border">
        <Component value={value} size={size} />
      </div>
      <div className="flex gap-1.5">
        {Array.from({ length: 10 }, (_, i) => (
          <button
            key={i}
            onClick={() => setValue(i)}
            className={`w-9 h-9 rounded-md text-sm font-mono font-medium transition-all ${
              value === i
                ? "bg-white text-black"
                : "bg-white/5 text-muted hover:bg-white/10 hover:text-foreground"
            }`}
          >
            {i}
          </button>
        ))}
      </div>
    </div>
  );
}
