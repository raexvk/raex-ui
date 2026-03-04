"use client";

import { useState } from "react";
import { ComponentCard } from "./component-card";
import { COMPONENTS, getCategories } from "@/lib/registry";

export function LandingCards() {
  const [filter, setFilter] = useState("all");
  const categories = getCategories();

  const filtered =
    filter === "all"
      ? COMPONENTS
      : COMPONENTS.filter((c) => c.category === filter);

  const tabs = [
    { key: "all", label: "All" },
    ...categories.map((cat) => ({ key: cat, label: cat })),
  ];

  return (
    <div>
      {/* Filter tabs — bracket style */}
      <div className="flex gap-6 mb-8">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setFilter(tab.key)}
            className={`font-mono text-[var(--text-xs)] uppercase tracking-wider transition-colors duration-150 ${
              filter === tab.key
                ? "text-[var(--color-text-primary)]"
                : "text-[var(--color-text-muted)] hover:text-[var(--color-text-secondary)]"
            }`}
          >
            {filter === tab.key ? `[ ${tab.label} ]` : tab.label}
          </button>
        ))}
      </div>

      {/* Grid — 2 columns max */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-[1px] bg-[var(--color-line)]">
        {filtered.map((comp) => (
          <ComponentCard
            key={comp.slug}
            slug={comp.slug}
            displayName={comp.label}
            description={comp.shortDescription}
            category={comp.category}
            component={comp.component}
          />
        ))}
      </div>
    </div>
  );
}
