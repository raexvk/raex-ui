"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Crosshair } from "./grid-decoration";
import { Badge } from "./badge";

interface ComponentCardProps {
  slug: string;
  displayName: string;
  description: string;
  accentColor: string;
  category: string;
  component: React.ComponentType<{ value: number; size: number }>;
}

export function ComponentCard({
  slug,
  displayName,
  description,
  accentColor,
  category,
  component: Component,
}: ComponentCardProps) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setValue((v) => (v + 1) % 10);
    }, 1800);
    return () => clearInterval(interval);
  }, []);

  return (
    <Link
      href={`/components/${slug}`}
      className="group block rounded-xl border border-border bg-card hover:border-white/20 transition-all duration-200 hover:scale-[1.01] overflow-hidden"
    >
      {/* Preview area */}
      <div className="relative h-[280px] bg-background flex items-center justify-center">
        <Component value={value} size={80} />
        {/* Crosshair decorations */}
        <div className="absolute top-3 left-3">
          <Crosshair />
        </div>
        <div className="absolute top-3 right-3">
          <Crosshair />
        </div>
        <div className="absolute bottom-3 left-3">
          <Crosshair />
        </div>
        <div className="absolute bottom-3 right-3">
          <Crosshair />
        </div>
      </div>

      {/* Content */}
      <div className="p-5 border-t border-border">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-lg font-medium text-foreground group-hover:text-white transition-colors">
              {displayName}
            </h3>
            <p className="text-sm text-muted mt-1 leading-relaxed">
              {description}
            </p>
          </div>
          <ArrowUpRight className="w-4 h-4 text-muted group-hover:text-foreground transition-colors mt-1 shrink-0" />
        </div>
        <div className="flex items-center gap-2 mt-3">
          <span
            className="w-1.5 h-1.5 rounded-full shrink-0"
            style={{ backgroundColor: accentColor }}
          />
          <Badge>{category}</Badge>
        </div>
      </div>
    </Link>
  );
}
