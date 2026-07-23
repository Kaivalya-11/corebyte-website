import { cn } from "@/lib/cn";

// ─────────────────────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────────────────────

export interface NoiseTextureProps {
  /**
   * Opacity level of the noise texture overlay (0.01 - 0.1).
   * @default 0.03
   */
  opacity?: number;

  /** Additional Tailwind CSS classes merged via `cn()`. */
  className?: string;
}

// ─────────────────────────────────────────────────────────────
// Component
// ─────────────────────────────────────────────────────────────

/**
 * NoiseTexture — subtle film grain overlay component.
 *
 * Renders an inline SVG noise filter to add tactile depth to glass panels
 * and dark backgrounds without loading external image assets.
 *
 * @example Default Noise Overlay
 * ```tsx
 * <NoiseTexture opacity={0.03} />
 * ```
 */
function NoiseTexture({ opacity = 0.03, className }: NoiseTextureProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "absolute inset-0 pointer-events-none -z-10 select-none overflow-hidden mix-blend-overlay",
        className
      )}
      style={{ opacity }}
    >
      <svg className="h-full w-full opacity-100" xmlns="http://www.w3.org/2000/svg">
        <filter id="corebyte-noise">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.8"
            numOctaves="3"
            stitchTiles="stitch"
          />
        </filter>
        <rect width="100%" height="100%" filter="url(#corebyte-noise)" />
      </svg>
    </div>
  );
}

NoiseTexture.displayName = "NoiseTexture";

export { NoiseTexture };
