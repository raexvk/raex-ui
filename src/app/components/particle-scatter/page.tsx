import { ComponentPage } from "@/components/component-page";
import { ParticleScatter } from "@/lib/digit-transitions/particle-scatter";

export default function ParticleScatterPage() {
  return (
    <ComponentPage
      name="particle-scatter"
      displayName="ParticleScatter"
      description="Firefly dots scatter and reform into digits using spring physics. Each of the 35 dots (7x5 grid) animates independently with staggered delays."
      accentColor="#a3e635"
      fileName="particle-scatter.tsx"
      component={ParticleScatter}
      variant="particle-scatter"
    />
  );
}
