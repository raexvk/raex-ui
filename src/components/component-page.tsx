import { promises as fs } from "fs";
import path from "path";
import Link from "next/link";
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
    <div className="container-main py-[var(--space-lg)]">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 mb-[var(--space-lg)]">
        <Link
          href="/#components"
          className="font-mono text-[var(--text-xs)] text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] transition-colors duration-150"
        >
          Components
        </Link>
        <span className="font-mono text-[var(--text-xs)] text-[var(--color-text-muted)]">/</span>
        <span className="font-mono text-[var(--text-xs)] text-[var(--color-text-primary)]">
          {displayName}
        </span>
      </nav>

      {/* Header */}
      <div className="mb-[var(--space-lg)]">
        <div className="flex items-baseline gap-4 mb-3">
          <h1 className="font-normal" style={{ fontSize: "var(--text-xl)" }}>
            {displayName}
          </h1>
          <span className="font-mono text-[var(--text-xs)] text-[var(--color-text-muted)]">
            [ {category} ]
          </span>
        </div>
        <p className="text-[var(--color-text-secondary)] max-w-2xl leading-relaxed lowercase">
          {description}
        </p>
      </div>

      <div className="rule mb-[var(--space-xl)]" />

      {/* Live Demo */}
      <section className="mb-[var(--space-xl)]">
        <span className="bracket-label block mb-[var(--space-md)]">[ Live Demo ]</span>
        <DigitDemo component={component} size={100} />
      </section>

      <div className="rule mb-[var(--space-xl)]" />

      {/* Clock Demo */}
      <section className="mb-[var(--space-xl)]">
        <span className="bracket-label block mb-[var(--space-md)]">[ Clock Demo ]</span>
        <div className="border border-[var(--color-line)] bg-[var(--color-bg-subtle)]">
          <div className="flex items-center px-4 py-2 border-b border-[var(--color-line)]">
            <span className="font-mono text-[var(--text-xxs)] text-[var(--color-text-muted)] uppercase tracking-wider">
              [ live preview ]
            </span>
          </div>
          <div className="flex items-center justify-center p-10">
            <ClockDemo variant={variant} size={44} />
          </div>
        </div>
      </section>

      <div className="rule mb-[var(--space-xl)]" />

      {/* Installation */}
      <section className="mb-[var(--space-xl)]">
        <span className="bracket-label block mb-[var(--space-md)]">[ Install ]</span>
        <div className="space-y-4">
          <div className="relative border border-[var(--color-line-strong)] bg-[var(--color-bg-subtle)]">
            <CopyButton text={installCommand} />
            <pre className="p-[var(--space-md)] text-sm font-mono terminal-prompt">
              <code>{installCommand}</code>
            </pre>
          </div>

          <div className="border border-[var(--color-line)] bg-[var(--color-bg-subtle)] p-[var(--space-md)]">
            <span className="font-mono text-[var(--text-xxs)] text-[var(--color-text-muted)] uppercase tracking-wider block mb-2">
              Individual import
            </span>
            <code className="text-sm font-mono text-[var(--color-text-secondary)]">
              import {"{"} {displayName} {"}"} from &quot;{importPath}&quot;
            </code>
          </div>

          <details className="group">
            <summary className="cursor-pointer font-mono text-[var(--text-xs)] text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] transition-colors duration-150 py-2">
              Or copy the source directly
            </summary>
            <div className="mt-2">
              <CodeBlock code={sourceCode} title={fileName} />
            </div>
          </details>
        </div>
      </section>

      <div className="rule mb-[var(--space-xl)]" />

      {/* Usage */}
      <section className="mb-[var(--space-xl)]">
        <span className="bracket-label block mb-[var(--space-md)]">[ Usage ]</span>
        <CodeBlock code={usageCode} />
      </section>

      <div className="rule mb-[var(--space-xl)]" />

      {/* Props */}
      <section className="mb-[var(--space-xl)]">
        <span className="bracket-label block mb-[var(--space-md)]">[ Props ]</span>
        <div className="border border-[var(--color-line)] overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-[var(--color-bg-subtle)]">
                <th className="text-left px-4 py-3 font-mono text-[var(--text-xxs)] text-[var(--color-text-muted)] uppercase tracking-wider">Prop</th>
                <th className="text-left px-4 py-3 font-mono text-[var(--text-xxs)] text-[var(--color-text-muted)] uppercase tracking-wider">Type</th>
                <th className="text-left px-4 py-3 font-mono text-[var(--text-xxs)] text-[var(--color-text-muted)] uppercase tracking-wider">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-[var(--color-line)]">
                <td className="px-4 py-3 font-mono text-sm" style={{ color: accentColor }}>
                  value
                </td>
                <td className="px-4 py-3 font-mono text-[var(--color-text-secondary)]">number</td>
                <td className="px-4 py-3 text-[var(--color-text-secondary)]">
                  Digit to display (0-9)
                </td>
              </tr>
              <tr className="border-t border-[var(--color-line)]">
                <td className="px-4 py-3 font-mono text-sm" style={{ color: accentColor }}>
                  size
                </td>
                <td className="px-4 py-3 font-mono text-[var(--color-text-secondary)]">number</td>
                <td className="px-4 py-3 text-[var(--color-text-secondary)]">
                  Width in pixels. Height is automatically 1.5x width.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <div className="rule mb-[var(--space-xl)]" />

      {/* Dependencies */}
      <section className="mb-[var(--space-xl)]">
        <span className="bracket-label block mb-[var(--space-md)]">[ Dependencies ]</span>
        <div className="flex flex-wrap gap-4">
          <span className="font-mono text-[var(--text-xs)] text-[var(--color-text-muted)]">[ react &gt;=18 ]</span>
          <span className="font-mono text-[var(--text-xs)] text-[var(--color-text-muted)]">[ framer-motion &gt;=10 ]</span>
        </div>
        <p className="text-[var(--color-text-secondary)] text-sm mt-3">
          No Tailwind CSS required. Zero external dependencies beyond peer deps.
        </p>
      </section>

      <div className="rule mb-[var(--space-xl)]" />

      {/* Links */}
      <section>
        <span className="bracket-label block mb-[var(--space-md)]">[ Links ]</span>
        <div className="flex flex-wrap gap-6">
          <a
            href="https://www.npmjs.com/package/animated-digit-transitions"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[var(--text-xs)] text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors duration-150"
          >
            npm
          </a>
          <a
            href={`https://github.com/venkataramanab/animated-digit-transitions/blob/main/src/lib/digit-transitions/${fileName}`}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[var(--text-xs)] text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors duration-150"
          >
            source
          </a>
        </div>
      </section>
    </div>
  );
}
