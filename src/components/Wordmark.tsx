import { cn } from "@/lib/utils";
import { site } from "@/config/site";

interface Props {
  className?: string;
  size?: "sm" | "md" | "lg";
  onDark?: boolean;
}

const SIZES = {
  sm: { kicker: "text-[7px] tracking-[0.32em]", main: "text-lg sm:text-xl" },
  md: { kicker: "text-[8px] tracking-[0.4em]", main: "text-xl lg:text-3xl" },
  lg: { kicker: "text-[11px] tracking-[0.6em]", main: "text-5xl md:text-7xl" },
} as const;

export function Wordmark({ className, size = "md", onDark = true }: Props) {
  const s = SIZES[size];
  return (
    <span className={cn("flex select-none flex-col items-center leading-none", className)}>
      {site.brand.kicker && (
        <span
          className={cn(
            "ui-font font-semibold uppercase",
            s.kicker,
            onDark ? "text-paper/80" : "text-ink/70",
          )}
        >
          {site.brand.kicker}
        </span>
      )}
      <span className={cn("display flex items-baseline gap-[0.18em]", s.main)}>
        <span
          className={cn(
            "uppercase",
            onDark ? "text-paper" : "text-ink",
          )}
          style={{ WebkitTextStroke: "0.5px currentColor" }}
        >
          {site.brand.nameTop}
        </span>
        <span
          className="uppercase text-brand"
          style={{
            WebkitTextStroke: "0.02em rgb(var(--ink))",
            paintOrder: "stroke fill",
            textShadow: "0.05em 0.05em 0 rgb(var(--ink))",
          }}
        >
          {site.brand.nameBottom}
        </span>
      </span>
    </span>
  );
}
