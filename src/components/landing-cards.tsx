"use client";

import { ComponentCard } from "./component-card";
import { COMPONENTS } from "@/lib/registry";

export function LandingCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {COMPONENTS.map((comp) => (
        <ComponentCard
          key={comp.slug}
          name={comp.slug}
          displayName={comp.label}
          description={comp.shortDescription}
          color={comp.accentColor}
          href={`/components/${comp.slug}`}
          component={comp.component}
        />
      ))}
    </div>
  );
}
