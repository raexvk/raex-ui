import { ParticleScatter } from "@/lib/digit-transitions/particle-scatter";
import { ThreadUnravel } from "@/lib/digit-transitions/thread-unravel";
import { InkBloom } from "@/lib/digit-transitions/ink-bloom";
import { FlipDot } from "@/lib/digit-transitions/flip-dot";

export interface ComponentMeta {
  slug: string;
  displayName: string;
  label: string;
  shortDescription: string;
  longDescription: string;
  accentColor: string;
  fileName: string;
  component: React.ComponentType<{ value: number; size: number }>;
}

export const COMPONENTS: ComponentMeta[] = [
  {
    slug: "particle-scatter",
    displayName: "ParticleScatter",
    label: "Particle Scatter",
    shortDescription: "Firefly dots scatter and reform into digits",
    longDescription:
      "Firefly dots scatter and reform into digits using spring physics. Each of the 35 dots (7x5 grid) animates independently with staggered delays.",
    accentColor: "#a3e635",
    fileName: "particle-scatter.tsx",
    component: ParticleScatter,
  },
  {
    slug: "thread-unravel",
    displayName: "ThreadUnravel",
    label: "Thread Unravel",
    shortDescription: "Single-line unravel and restitch animation",
    longDescription:
      "A single continuous stroke path that unravels and restitches to form each digit. Uses SVG stroke-dashoffset animation for a hand-drawn effect.",
    accentColor: "#38bdf8",
    fileName: "thread-unravel.tsx",
    component: ThreadUnravel,
  },
  {
    slug: "ink-bloom",
    displayName: "InkBloom",
    label: "Ink Bloom",
    shortDescription: "Ink-in-water dissolve and form effect",
    longDescription:
      "An ink-in-water dissolve effect where digits bloom in with blur and scale, creating an organic morphing transition between values.",
    accentColor: "#c084fc",
    fileName: "ink-bloom.tsx",
    component: InkBloom,
  },
  {
    slug: "flip-dot",
    displayName: "FlipDot",
    label: "Flip Dot",
    shortDescription: "Cascading dot-flip grid display",
    longDescription:
      "A cascading dot-flip grid that simulates a physical flip-dot display. Dots flip with spring physics in a diagonal cascade pattern.",
    accentColor: "#fbbf24",
    fileName: "flip-dot.tsx",
    component: FlipDot,
  },
];

export const COMPONENT_MAP: Record<
  string,
  React.ComponentType<{ value: number; size: number }>
> = Object.fromEntries(COMPONENTS.map((c) => [c.slug, c.component]));

export function getComponentBySlug(slug: string): ComponentMeta | undefined {
  return COMPONENTS.find((c) => c.slug === slug);
}

export function getAllSlugs(): string[] {
  return COMPONENTS.map((c) => c.slug);
}
