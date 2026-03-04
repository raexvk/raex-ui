import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "outline";
  color?: string;
  className?: string;
}

export function Badge({
  children,
  variant = "default",
  color,
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-2 py-0.5 rounded-full font-mono text-[10px] font-medium uppercase tracking-wider",
        variant === "default" && "bg-white/5 text-muted",
        variant === "outline" && "border border-border text-muted",
        className
      )}
      style={
        color
          ? {
              backgroundColor: color + "15",
              color: color,
              borderColor: color + "30",
            }
          : undefined
      }
    >
      {children}
    </span>
  );
}
