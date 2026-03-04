"use client";

import { ComponentCard } from "./component-card";
import { ParticleScatter } from "@/lib/digit-transitions/particle-scatter";
import { ThreadUnravel } from "@/lib/digit-transitions/thread-unravel";
import { InkBloom } from "@/lib/digit-transitions/ink-bloom";
import { FlipDot } from "@/lib/digit-transitions/flip-dot";

const COMPONENTS = [
  {
    name: "particle-scatter",
    displayName: "Particle Scatter",
    description: "Firefly dots scatter and reform into digits",
    color: "#a3e635",
    href: "/components/particle-scatter",
    component: ParticleScatter,
  },
  {
    name: "thread-unravel",
    displayName: "Thread Unravel",
    description: "Single-line unravel and restitch animation",
    color: "#38bdf8",
    href: "/components/thread-unravel",
    component: ThreadUnravel,
  },
  {
    name: "ink-bloom",
    displayName: "Ink Bloom",
    description: "Ink-in-water dissolve and form effect",
    color: "#c084fc",
    href: "/components/ink-bloom",
    component: InkBloom,
  },
  {
    name: "flip-dot",
    displayName: "Flip Dot",
    description: "Cascading dot-flip grid display",
    color: "#fbbf24",
    href: "/components/flip-dot",
    component: FlipDot,
  },
];

export function LandingCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {COMPONENTS.map((comp) => (
        <ComponentCard key={comp.name} {...comp} />
      ))}
    </div>
  );
}
