import { cn } from "@/lib/cn";

// ─────────────────────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────────────────────

export type BackgroundGlowPosition =
  | "top-center"
  | "top-left"
  | "top-right"
  | "center"
  | "bottom-center";

export type BackgroundGlowIntensity = "subtle" | "medium" | "high";

export interface BackgroundGlowProps {
  /**
   * Position preset for the ambient glow anchor.
   * @default "top-center"
   */
  position?: BackgroundGlowPosition;

  /**
   * Opacity and blur intensity.
   * @default "medium"
   */
  intensity?: BackgroundGlowIntensity;

  /** Additional Tailwind CSS classes merged via `cn()`. */
  className?: string;
}

// ─────────────────────────────────────────────────────────────
// Position & Intensity Maps
// ─────────────────────────────────────────────────────────────

const POSITION_CLASSES: Record<BackgroundGlowPosition, string> = {
  "top-center": "top-0 left-1/2 -translate-x-1/2 -translate-y-1/3",
  "top-left": "top-0 left-0 -translate-x-1/4 -translate-y-1/4",
  "top-right": "top-0 right-0 translate-x-1/4 -translate-y-1/4",
  center: "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
  "bottom-center": "bottom-0 left-1/2 -translate-x-1/2 translate-y-1/3",
};

const INTENSITY_CLASSES: Record<BackgroundGlowIntensity, string> = {
  subtle: "from-primary/10 via-secondary/10 opacity-60 blur-[100px]",
  medium: "from-primary/20 via-secondary/20 opacity-80 blur-[120px]",
  high: "from-primary/30 via-secondary/30 opacity-100 blur-[140px]",
};

// ─────────────────────────────────────────────────────────────
// Component
// ─────────────────────────────────────────────────────────────

/**
 * BackgroundGlow — reusable ambient background lighting component.
 *
 * Casts a subtle blue-to-purple radial ambient blur using brand tokens,
 * creating depth behind hero sections and primary CTAs without background image assets.
 *
 * @example Top Center Glow (Hero)
 * ```tsx
 * <BackgroundGlow position="top-center" intensity="medium" />
 * ```
 */
function BackgroundGlow({
  position = "top-center",
  intensity = "medium",
  className,
}: BackgroundGlowProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "absolute w-[500px] sm:w-[700px] lg:w-[900px] h-[500px] sm:h-[700px] lg:h-[900px]",
        "bg-gradient-to-tr to-transparent rounded-full pointer-events-none -z-10",
        POSITION_CLASSES[position],
        INTENSITY_CLASSES[intensity],
        className
      )}
    />
  );
}

BackgroundGlow.displayName = "BackgroundGlow";

export { BackgroundGlow };
