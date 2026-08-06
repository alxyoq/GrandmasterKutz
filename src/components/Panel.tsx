import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { PlaceholderArt, type ArtVariant } from "./PlaceholderArt";

export type PanelShape =
  | "flat"
  | "a"
  | "b"
  | "top-up"
  | "top-down"
  | "bottom-up"
  | "bottom-down";

const SHAPE_CLASS: Record<PanelShape, string> = {
  flat: "shape-flat",
  a: "shape-a",
  b: "shape-b",
  "top-up": "shape-top-up",
  "top-down": "shape-top-down",
  "bottom-up": "shape-bottom-up",
  "bottom-down": "shape-bottom-down",
};

/** Literal strings so Tailwind's scanner picks the responsive variants up. */
const SHAPE_CLASS_MD: Record<PanelShape, string> = {
  flat: "md:shape-flat",
  a: "md:shape-a",
  b: "md:shape-b",
  "top-up": "md:shape-top-up",
  "top-down": "md:shape-top-down",
  "bottom-up": "md:shape-bottom-up",
  "bottom-down": "md:shape-bottom-down",
};

interface PanelProps {
  children: ReactNode;
  /** Diagonal edge treatment. Falls back to a straight rectangle on mobile. */
  shape?: PanelShape;
  mobileShape?: PanelShape;
  className?: string;
  innerClassName?: string;
  id?: string;
  as?: "div" | "section" | "article" | "aside";
}

/**
 * A comic book panel: solid ink outline, optional angled edges.
 * The outline is produced by nesting a clipped inner box inside a clipped
 * ink-filled outer box, so the border follows the diagonal.
 */
export function Panel({
  children,
  shape = "flat",
  mobileShape,
  className,
  innerClassName,
  id,
  as: Tag = "div",
}: PanelProps) {
  const clip = cn(SHAPE_CLASS[mobileShape ?? shape], SHAPE_CLASS_MD[shape]);

  return (
    <Tag
      id={id}
      className={cn("relative bg-ink p-[var(--stroke)]", clip, className)}
    >
      <div className={cn("relative h-full w-full overflow-hidden", clip, innerClassName)}>
        {children}
      </div>
    </Tag>
  );
}

/* ------------------------------------------------------------------ */

interface SmartImageProps {
  src?: string;
  alt: string;
  variant?: ArtVariant;
  index?: number;
  label?: string;
  className?: string;
  imgClassName?: string;
}

/** Renders an image when a src exists, otherwise the built-in comic artwork. */
export function SmartImage({
  src,
  alt,
  variant = "scene",
  index = 0,
  label,
  className,
  imgClassName,
}: SmartImageProps) {
  if (!src) {
    return (
      <PlaceholderArt
        variant={variant}
        index={index}
        label={label}
        className={className}
      />
    );
  }
  return (
    <div className={cn("relative h-full w-full overflow-hidden bg-ink", className)}>
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        className={cn("h-full w-full object-cover", imgClassName)}
      />
    </div>
  );
}
