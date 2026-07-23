import { cn } from "@/lib/cn";

// ─────────────────────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────────────────────

export type GridBackgroundMask = "fade-bottom" | "fade-center" | "none";

export interface GridBackgroundProps {
  /**
   * Linear or radial mask gradient to fade out grid edges gracefully.
   * - `fade-bottom`: Fades out towards the bottom (ideal for Hero sections).
   * - `fade-center`: Radial fade from center out.
   * - `none`: Unmasked uniform grid.
   *
   * @default "fade-bottom"
   */
  mask?: GridBackgroundMask;

  /** Additional Tailwind CSS classes merged via `cn()`. */
  className?: string;
}

// ─────────────────────────────────────────────────────────────
// Mask Maps
// ─────────────────────────────────────────────────────────────

const MASK_CLASSES: Record<GridBackgroundMask, string> = {
  "fade-bottom": "[mask-image:linear-gradient(to_bottom,white_20%,transparent_90%)]",
  "fade-center": "[mask-image:radial-gradient(ellipse_at_center,white_30%,transparent_80%)]",
  none: "",
};

// ─────────────────────────────────────────────────────────────
// Component
// ─────────────────────────────────────────────────────────────

/**
 * GridBackground — subtle engineering grid background component.
 *
 * Renders an ultra-subtle 32px grid pattern symbolizing technical precision
 * and structural foundation (per BrandBible.md). Pointer events disabled.
 *
 * @example Hero Section Background Grid
 * ```tsx
 * <GridBackground mask="fade-bottom" />
 * ```
 */
function GridBackground({ mask = "fade-bottom", className }: GridBackgroundProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "absolute inset-0 pointer-events-none -z-10 select-none overflow-hidden",
        "bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)]",
        "bg-[size:32px_32px]",
        MASK_CLASSES[mask],
        className
      )}
    />
  );
}

GridBackground.displayName = "GridBackground";

export { GridBackground };
