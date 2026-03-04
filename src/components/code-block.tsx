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
    <div className="relative group rounded-lg border border-border overflow-hidden">
      {title && (
        <div className="px-4 py-2 border-b border-border bg-card text-sm text-muted font-mono flex items-center gap-2">
          <span className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
          </span>
          <span className="ml-2">{title}</span>
        </div>
      )}
      <div className="relative">
        <CopyButton text={code.trim()} />
        <div
          className="overflow-x-auto p-4 text-sm [&_pre]:!bg-transparent [&_code]:!bg-transparent"
          style={{ backgroundColor: "#0d1117" }}
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </div>
  );
}
