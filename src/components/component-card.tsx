"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

interface ComponentCardProps {
  slug: string;
  displayName: string;
  description: string;
  category: string;
  component: React.ComponentType<{ value: number; size: number }>;
}

export function ComponentCard({
  slug,
  displayName,
  description,
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
      className="group block border border-[var(--color-line)] bg-[var(--color-bg)] hover:bg-[var(--color-bg-hover)] transition-colors duration-200 relative"
    >
      {/* Plus corners */}
      <span className="plus absolute top-2 left-2.5 group-hover:text-[var(--color-accent)]">+</span>
      <span className="plus absolute top-2 right-2.5 group-hover:text-[var(--color-accent)]">+</span>
      <span className="plus absolute bottom-2 left-2.5 group-hover:text-[var(--color-accent)]">+</span>
      <span className="plus absolute bottom-2 right-2.5 group-hover:text-[var(--color-accent)]">+</span>

      {/* Preview area */}
      <div className="h-[280px] flex items-center justify-center">
        <Component value={value} size={80} />
      </div>

      {/* Dotted separator */}
      <div className="rule-dotted mx-4" />

      {/* Content */}
      <div className="p-5">
        <h3 className="text-[var(--text-lg)] font-normal text-[var(--color-text-primary)] group-hover:text-[var(--color-accent)] transition-colors duration-200">
          {displayName}
        </h3>
        <p className="text-sm text-[var(--color-text-secondary)] mt-1 leading-relaxed lowercase">
          {description}
        </p>
        <div className="flex items-center gap-3 mt-3">
          <span className="font-mono text-[var(--text-xs)] text-[var(--color-text-muted)]">
            [ {category} ]
          </span>
        </div>
      </div>
    </Link>
  );
}
