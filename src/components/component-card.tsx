"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

interface ComponentCardProps {
  name: string;
  displayName: string;
  description: string;
  color: string;
  href: string;
  component: React.ComponentType<{ value: number; size: number }>;
}

export function ComponentCard({
  name,
  displayName,
  description,
  color,
  href,
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
      href={href}
      className="group block rounded-xl border border-border bg-card p-6 hover:border-white/20 transition-all"
    >
      <div className="flex items-center justify-center mb-6 h-[90px]">
        <Component value={value} size={48} />
      </div>
      <h3
        className="font-semibold text-lg mb-1 group-hover:opacity-80 transition-opacity"
        style={{ color }}
      >
        {displayName}
      </h3>
      <p className="text-sm text-muted">{description}</p>
    </Link>
  );
}
