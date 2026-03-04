import { ComponentPage } from "@/components/component-page";
import { FlipDot } from "@/lib/digit-transitions/flip-dot";

export default function FlipDotPage() {
  return (
    <ComponentPage
      name="flip-dot"
      displayName="FlipDot"
      description="A cascading dot-flip grid that simulates a physical flip-dot display. Dots flip with spring physics in a diagonal cascade pattern."
      accentColor="#fbbf24"
      fileName="flip-dot.tsx"
      component={FlipDot}
      variant="flip-dot"
    />
  );
}
