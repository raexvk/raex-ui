import { codeToHtml } from "shiki";
import { CopyButton } from "./copy-button";

interface CodeBlockProps {
  code: string;
  lang?: string;
  title?: string;
}

export async function CodeBlock({
  code,
  lang = "tsx",
  title,
}: CodeBlockProps) {
  const html = await codeToHtml(code.trim(), {
    lang,
    theme: "github-dark-default",
  });

  return (
    <div className="relative group border border-[var(--color-line-strong)] overflow-hidden">
      {title && (
        <div className="px-[var(--space-md)] py-[var(--space-xs)] border-b border-[var(--color-line)] bg-[var(--color-bg-subtle)] font-mono text-[var(--text-xxs)] text-[var(--color-text-muted)] uppercase tracking-wider">
          {title}
        </div>
      )}
      <div className="relative">
        <CopyButton text={code.trim()} />
        <div
          className="overflow-x-auto p-[var(--space-md)] text-sm [&_pre]:!bg-transparent [&_code]:!bg-transparent"
          style={{ backgroundColor: "var(--color-bg-subtle)" }}
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </div>
  );
}
