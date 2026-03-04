import { ComponentPage } from "@/components/component-page";
import { InkBloom } from "@/lib/digit-transitions/ink-bloom";

export default function InkBloomPage() {
  return (
    <ComponentPage
      name="ink-bloom"
      displayName="InkBloom"
      description="An ink-in-water dissolve effect where digits bloom in with blur and scale, creating an organic morphing transition between values."
      accentColor="#c084fc"
      fileName="ink-bloom.tsx"
      component={InkBloom}
      variant="ink-bloom"
    />
  );
}
