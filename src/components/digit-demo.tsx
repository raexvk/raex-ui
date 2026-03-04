"use client";

import { useState, useEffect } from "react";

interface DigitDemoProps {
  component: React.ComponentType<{ value: number; size: number }>;
  size?: number;
  autoPlay?: boolean;
}

export function DigitDemo({
  component: Component,
  size = 80,
  autoPlay = true,
}: DigitDemoProps) {
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
      <div className="relative flex items-center justify-center p-10 border border-[var(--color-line)] bg-[var(--color-bg-subtle)]">
        <span className="plus absolute top-2 left-2.5">+</span>
        <span className="plus absolute top-2 right-2.5">+</span>
        <Component value={value} size={size} />
      </div>
      <div className="flex gap-1.5">
        {Array.from({ length: 10 }, (_, i) => (
          <button
            key={i}
            onClick={() => setValue(i)}
            className={`w-9 h-9 font-mono text-sm transition-colors duration-150 ${
              value === i
                ? "bg-[var(--color-text-primary)] text-[var(--color-bg)]"
                : "bg-[var(--color-bg-subtle)] text-[var(--color-text-muted)] hover:bg-[var(--color-bg-hover)] hover:text-[var(--color-text-secondary)]"
            }`}
          >
            {i}
          </button>
        ))}
      </div>
    </div>
  );
}
