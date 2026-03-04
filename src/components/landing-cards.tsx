"use client";

import { useState } from "react";
import { ComponentCard } from "./component-card";
import { SectionLabel } from "./grid-decoration";
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
      <SectionLabel
        label="Components"
        detail={`${COMPONENTS.length} variants`}
        className="mb-6"
      />

      {/* Filter tabs */}
      <div className="flex gap-2 mb-8">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setFilter(tab.key)}
            className={`px-3 py-1.5 rounded-full font-mono text-[10px] uppercase tracking-wider font-medium transition-all border ${
              filter === tab.key
                ? "border-accent/40 bg-accent/10 text-accent"
                : "border-border text-muted hover:text-foreground hover:border-white/20"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {filtered.map((comp) => (
          <ComponentCard
            key={comp.slug}
            slug={comp.slug}
            displayName={comp.label}
            description={comp.shortDescription}
            accentColor={comp.accentColor}
            category={comp.category}
            component={comp.component}
          />
        ))}
      </div>
    </div>
  );
}
