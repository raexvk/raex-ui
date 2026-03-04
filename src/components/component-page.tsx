import { promises as fs } from "fs";
import path from "path";
import Link from "next/link";
import { CodeBlock } from "./code-block";
import { DigitDemo } from "./digit-demo";
import { CopyButton } from "./copy-button";
import { COMPONENTS } from "@/lib/registry";

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

  // Find next component
  const currentIndex = COMPONENTS.findIndex((c) => c.slug === name);
  const nextComponent = COMPONENTS[(currentIndex + 1) % COMPONENTS.length];

  return (
    <div className="container-main py-[var(--space-lg)]">
      {/* 01 — HEADER */}
      <nav className="font-mono text-[var(--text-xs)] text-[var(--color-text-muted)] mb-[var(--space-lg)]">
        <Link
          href="/"
          className="hover:text-[var(--color-text-primary)] transition-colors duration-150"
        >
          [ raex ui ]
        </Link>
        {" / "}
        <Link
          href="/#components"
          className="hover:text-[var(--color-text-primary)] transition-colors duration-150"
        >
          components
        </Link>
        {" / "}
        <span className="text-[var(--color-text-secondary)]">{name}</span>
      </nav>

      <h1 className="font-normal mb-3" style={{ fontSize: "var(--text-xl)" }}>
        {displayName}
      </h1>

      <p className="text-[var(--color-text-secondary)] max-w-2xl leading-relaxed lowercase mb-4">
        {description}
      </p>

      <div className="flex items-center gap-3 mb-2">
        <span className="font-mono text-[var(--text-xs)] text-[var(--color-text-muted)]">
          [ {category} ] &middot; v1.0.0 &middot; &lt;3kb &middot; zero deps
        </span>
      </div>

      <a
        href={`https://github.com/venkataramanab/animated-digit-transitions/blob/main/src/lib/digit-transitions/${fileName}`}
        target="_blank"
        rel="noopener noreferrer"
        className="font-mono text-[var(--text-xs)] text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors duration-150 inline-block mb-[var(--space-md)]"
      >
        GitHub &#8599;
      </a>

      <div className="rule mb-[var(--space-xl)]" />

      {/* 02 — LIVE PREVIEW */}
      <section className="mb-[var(--space-xl)]">
        <div className="bg-[var(--color-bg-subtle)] border border-[var(--color-line)] flex items-center justify-center py-20 px-8">
          <DigitDemo component={component} size={120} />
        </div>
      </section>

      <div className="rule mb-[var(--space-xl)]" />

      {/* 03 — INSTALL */}
      <section className="mb-[var(--space-xl)]">
        <span className="bracket-label block mb-[var(--space-md)]">[ INSTALL ]</span>
        <div className="relative border border-[var(--color-line-strong)] bg-[var(--color-bg-subtle)]">
          <CopyButton text={installCommand} />
          <pre className="p-[var(--space-md)] text-sm font-mono terminal-prompt">
            <code>{installCommand}</code>
          </pre>
        </div>
      </section>

      <div className="rule mb-[var(--space-xl)]" />

      {/* 04 — USAGE */}
      <section className="mb-[var(--space-xl)]">
        <span className="bracket-label block mb-[var(--space-md)]">[ USAGE ]</span>
        <CodeBlock code={usageCode} />
      </section>

      <div className="rule mb-[var(--space-xl)]" />

      {/* 05 — PROPS */}
      <section className="mb-[var(--space-xl)]">
        <span className="bracket-label block mb-[var(--space-md)]">[ PROPS ]</span>
        <div className="border-t border-[var(--color-line)]">
          <table className="w-full text-sm">
            <thead>
              <tr>
                <th className="text-left px-0 py-3 font-mono text-[var(--text-xxs)] text-[var(--color-text-muted)] uppercase tracking-wider border-b border-[var(--color-line)]">Prop</th>
                <th className="text-left px-4 py-3 font-mono text-[var(--text-xxs)] text-[var(--color-text-muted)] uppercase tracking-wider border-b border-[var(--color-line)]">Type</th>
                <th className="text-left px-4 py-3 font-mono text-[var(--text-xxs)] text-[var(--color-text-muted)] uppercase tracking-wider border-b border-[var(--color-line)]">Default</th>
                <th className="text-left px-4 py-3 font-mono text-[var(--text-xxs)] text-[var(--color-text-muted)] uppercase tracking-wider border-b border-[var(--color-line)]">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-0 py-3 font-mono text-sm border-b border-[var(--color-line)]" style={{ color: accentColor }}>value</td>
                <td className="px-4 py-3 font-mono text-[var(--color-text-secondary)] border-b border-[var(--color-line)]">number</td>
                <td className="px-4 py-3 font-mono text-[var(--color-text-muted)] border-b border-[var(--color-line)]">0</td>
                <td className="px-4 py-3 text-[var(--color-text-secondary)] border-b border-[var(--color-line)]">Digit to display (0-9)</td>
              </tr>
              <tr>
                <td className="px-0 py-3 font-mono text-sm border-b border-[var(--color-line)]" style={{ color: accentColor }}>size</td>
                <td className="px-4 py-3 font-mono text-[var(--color-text-secondary)] border-b border-[var(--color-line)]">number</td>
                <td className="px-4 py-3 font-mono text-[var(--color-text-muted)] border-b border-[var(--color-line)]">64</td>
                <td className="px-4 py-3 text-[var(--color-text-secondary)] border-b border-[var(--color-line)]">Width in pixels. Height is 1.5x width.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <div className="rule mb-[var(--space-xl)]" />

      {/* 06 — NEXT COMPONENT */}
      <section className="mb-[var(--space-md)]">
        <div className="flex items-center justify-between">
          <span className="font-mono text-[var(--text-xs)] text-[var(--color-text-muted)] uppercase tracking-wider">
            Next &#8594;
          </span>
          <Link
            href={`/components/${nextComponent.slug}`}
            className="text-[var(--text-lg)] text-[var(--color-text-primary)] hover:text-[var(--color-accent)] transition-colors duration-150"
          >
            {nextComponent.label}
          </Link>
        </div>
      </section>
    </div>
  );
}
