import { ComponentPage } from "@/components/component-page";
import { ThreadUnravel } from "@/lib/digit-transitions/thread-unravel";

export default function ThreadUnravelPage() {
  return (
    <ComponentPage
      name="thread-unravel"
      displayName="ThreadUnravel"
      description="A single continuous stroke path that unravels and restitches to form each digit. Uses SVG stroke-dashoffset animation for a hand-drawn effect."
      accentColor="#38bdf8"
      fileName="thread-unravel.tsx"
      component={ThreadUnravel}
      variant="thread-unravel"
    />
  );
}
