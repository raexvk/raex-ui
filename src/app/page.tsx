import { HeroClock } from "@/components/hero-clock";
import { LandingCards } from "@/components/landing-cards";
import { CopyButton } from "@/components/copy-button";
import { COMPONENTS } from "@/lib/registry";

export default function Home() {
  const installCommand = "npm install animated-digit-transitions";

  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      {/* Hero */}
      <div className="text-center mb-16">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4 tracking-tight">
          Animated Digit Transitions
        </h1>
        <p className="text-muted text-lg mb-10 max-w-xl mx-auto">
          {COMPONENTS.length} beautiful animated digit components for React, powered by Framer
          Motion. Zero dependencies on Tailwind CSS.
        </p>
        <HeroClock />
      </div>

      {/* Install */}
      <div className="mb-16">
        <div className="relative max-w-md mx-auto rounded-lg border border-border overflow-hidden">
          <CopyButton text={installCommand} />
          <pre
            className="p-4 text-sm font-mono text-center"
            style={{ backgroundColor: "#0d1117" }}
          >
            <code>{installCommand}</code>
          </pre>
        </div>
      </div>

      {/* Components Grid */}
      <section>
        <h2 className="text-xl font-semibold mb-6 text-center">Components</h2>
        <LandingCards />
      </section>
    </div>
  );
}
