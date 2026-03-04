import { promises as fs } from "fs";
import path from "path";
import Link from "next/link";
import { CodeBlock } from "./code-block";
import { DigitDemo } from "./digit-demo";
import { ClockDemo } from "./clock-demo";
import { CopyButton } from "./copy-button";
import { Badge } from "./badge";
import { DottedDivider, SectionLabel, Crosshair } from "./grid-decoration";

interface ComponentPageProps {
  name: string;
  displayName: string;
  description: string;
  accentColor: string;
  fileName: string;
  category: string;
  component: React.ComponentType<{ value: number; size: number }>;
  variant: string;
}

export async function ComponentPage({
  name,
  displayName,
  description,
  accentColor,
  fileName,
  category,
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
  const importPath = `animated-digit-transitions/${name}`;

  return (
    <div className="max-w-[1200px] mx-auto px-6 py-12">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 mb-8">
        <Link
          href="/#components"
          className="mono-label hover:text-foreground transition-colors"
        >
          Components
        </Link>
        <span className="text-border font-mono text-xs">/</span>
        <span className="mono-label text-foreground">{displayName}</span>
      </nav>

      {/* Header */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-3">
          <h1 className="text-3xl sm:text-4xl font-bold">{displayName}</h1>
          <Badge color={accentColor}>{category}</Badge>
        </div>
        <p className="text-muted text-lg max-w-2xl">{description}</p>
      </div>

      <DottedDivider className="mb-12" />

      {/* Live Demo */}
      <section className="mb-16">
        <SectionLabel label="Live Demo" className="mb-6" />
        <DigitDemo component={component} size={100} />
      </section>

      <DottedDivider className="mb-12" />

      {/* Clock Demo */}
      <section className="mb-16">
        <SectionLabel label="Clock Demo" className="mb-6" />
        <div className="rounded-lg border border-border bg-card overflow-hidden">
          <div className="flex items-center gap-2 px-4 py-2.5 border-b border-border">
            <span className="flex gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
            </span>
            <span className="mono-label ml-2">live preview</span>
          </div>
          <div className="flex items-center justify-center p-10">
            <ClockDemo variant={variant} size={44} />
          </div>
        </div>
      </section>

      <DottedDivider className="mb-12" />

      {/* Installation */}
      <section className="mb-16">
        <SectionLabel label="Installation" className="mb-6" />
        <div className="space-y-4">
          <div className="relative rounded-lg border border-border overflow-hidden">
            <div className="px-4 py-2 border-b border-border bg-card font-mono text-sm text-muted flex items-center gap-2">
              <span className="flex gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
              </span>
              <span className="ml-2">terminal</span>
            </div>
            <div className="relative">
              <CopyButton text={installCommand} />
              <pre
                className="p-4 text-sm font-mono terminal-prompt"
                style={{ backgroundColor: "#0d1117" }}
              >
                <code>{installCommand}</code>
              </pre>
            </div>
          </div>

          <div className="rounded-lg border border-border bg-card p-4">
            <span className="mono-label block mb-2">Individual import</span>
            <code className="text-sm font-mono text-muted">
              import {"{"} {displayName} {"}"} from &quot;{importPath}&quot;
            </code>
          </div>

          <details className="group">
            <summary className="cursor-pointer text-sm text-muted hover:text-foreground transition-colors py-2 font-mono">
              Or copy the source directly
            </summary>
            <div className="mt-2">
              <CodeBlock code={sourceCode} title={fileName} />
            </div>
          </details>
        </div>
      </section>

      <DottedDivider className="mb-12" />

      {/* Usage */}
      <section className="mb-16">
        <SectionLabel label="Usage" className="mb-6" />
        <CodeBlock code={usageCode} />
      </section>

      <DottedDivider className="mb-12" />

      {/* Props */}
      <section className="mb-16">
        <SectionLabel label="Props" className="mb-6" />
        <div className="rounded-lg border border-border overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-card">
                <th className="text-left px-4 py-3 mono-label">Prop</th>
                <th className="text-left px-4 py-3 mono-label">Type</th>
                <th className="text-left px-4 py-3 mono-label">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-border">
                <td
                  className="px-4 py-3 font-mono text-sm"
                  style={{ color: accentColor }}
                >
                  value
                </td>
                <td className="px-4 py-3 font-mono text-muted">number</td>
                <td className="px-4 py-3 text-muted">
                  Digit to display (0-9)
                </td>
              </tr>
              <tr className="border-t border-border">
                <td
                  className="px-4 py-3 font-mono text-sm"
                  style={{ color: accentColor }}
                >
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

      <DottedDivider className="mb-12" />

      {/* Dependencies */}
      <section className="mb-16">
        <SectionLabel label="Dependencies" className="mb-6" />
        <div className="flex flex-wrap gap-2">
          <Badge variant="outline">react &gt;=18</Badge>
          <Badge variant="outline">framer-motion &gt;=10</Badge>
        </div>
        <p className="text-muted text-sm mt-3">
          No Tailwind CSS required. Zero external dependencies beyond peer deps.
        </p>
      </section>

      <DottedDivider className="mb-12" />

      {/* Links */}
      <section>
        <SectionLabel label="Links" className="mb-6" />
        <div className="flex flex-wrap gap-4">
          <a
            href="https://www.npmjs.com/package/animated-digit-transitions"
            target="_blank"
            rel="noopener noreferrer"
            className="mono-label hover:text-foreground transition-colors"
          >
            npm package &rarr;
          </a>
          <a
            href={`https://github.com/venkataramanab/animated-digit-transitions/blob/main/src/lib/digit-transitions/${fileName}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mono-label hover:text-foreground transition-colors"
          >
            source on github &rarr;
          </a>
        </div>
      </section>
    </div>
  );
}
