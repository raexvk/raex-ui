import { promises as fs } from "fs";
import path from "path";
import { CodeBlock } from "./code-block";
import { DigitDemo } from "./digit-demo";
import { ClockDemo } from "./clock-demo";
import { CopyButton } from "./copy-button";

interface ComponentPageProps {
  name: string;
  displayName: string;
  description: string;
  accentColor: string;
  fileName: string;
  component: React.ComponentType<{ value: number; size: number }>;
  variant: string;
}

export async function ComponentPage({
  name,
  displayName,
  description,
  accentColor,
  fileName,
  component,
  variant,
}: ComponentPageProps) {
  const filePath = path.join(
    process.cwd(),
    "src/lib/digit-transitions",
    fileName
  );
  const sourceCode = await fs.readFile(filePath, "utf-8");

  const usageCode = `import { ${displayName} } from "animated-digit-transitions";

export function MyComponent() {
  const [digit, setDigit] = useState(0);
  return <${displayName} value={digit} size={64} />;
}`;

  const installCommand = "npm install animated-digit-transitions";

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">{displayName}</h1>
        <p className="text-muted text-lg">{description}</p>
      </div>

      {/* Live Demo */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-4">Live Demo</h2>
        <DigitDemo component={component} size={100} />
      </section>

      {/* Clock Demo */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-4">Clock Demo</h2>
        <div className="flex items-center justify-center p-8 rounded-xl bg-card border border-border">
          <ClockDemo variant={variant} size={40} />
        </div>
      </section>

      {/* Install */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-4">Installation</h2>
        <div className="space-y-4">
          <div className="relative rounded-lg border border-border overflow-hidden">
            <div className="px-4 py-2 border-b border-border bg-card text-sm text-muted font-mono">
              npm
            </div>
            <div className="relative">
              <CopyButton text={installCommand} />
              <pre className="p-4 text-sm font-mono" style={{ backgroundColor: "#0d1117" }}>
                <code>{installCommand}</code>
              </pre>
            </div>
          </div>
          <details className="group">
            <summary className="cursor-pointer text-sm text-muted hover:text-foreground transition-colors py-2">
              Or copy the source directly
            </summary>
            <div className="mt-2">
              <CodeBlock code={sourceCode} title={fileName} />
            </div>
          </details>
        </div>
      </section>

      {/* Usage */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-4">Usage</h2>
        <CodeBlock code={usageCode} />
      </section>

      {/* Props */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-4">Props</h2>
        <div className="rounded-lg border border-border overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-card">
                <th className="text-left px-4 py-3 font-medium">Prop</th>
                <th className="text-left px-4 py-3 font-medium">Type</th>
                <th className="text-left px-4 py-3 font-medium">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-border">
                <td className="px-4 py-3 font-mono text-sm" style={{ color: accentColor }}>
                  value
                </td>
                <td className="px-4 py-3 font-mono text-muted">number</td>
                <td className="px-4 py-3 text-muted">
                  Digit to display (0-9)
                </td>
              </tr>
              <tr className="border-t border-border">
                <td className="px-4 py-3 font-mono text-sm" style={{ color: accentColor }}>
                  size
                </td>
                <td className="px-4 py-3 font-mono text-muted">number</td>
                <td className="px-4 py-3 text-muted">
                  Width in pixels. Height is automatically 1.5x width.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Dependencies */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Dependencies</h2>
        <p className="text-muted text-sm">
          This component requires{" "}
          <code className="px-1.5 py-0.5 rounded bg-white/5 font-mono text-xs">
            react &gt;=18
          </code>{" "}
          and{" "}
          <code className="px-1.5 py-0.5 rounded bg-white/5 font-mono text-xs">
            framer-motion &gt;=10
          </code>{" "}
          as peer dependencies. No Tailwind CSS required.
        </p>
      </section>
    </div>
  );
}
