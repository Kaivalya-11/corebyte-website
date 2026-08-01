import Image from "next/image";
import { cn } from "@/lib/cn";

// ─────────────────────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────────────────────

export type LogoVariant = "full" | "stacked" | "mark";
export type LogoTheme = "light" | "dark";

export interface LogoProps {
  /**
   * Layout variant of the logo.
   * - `full`: Horizontal full logo with logomark and wordmark.
   * - `stacked`: Vertical stacked logo.
   * - `mark`: Hexagonal logomark icon only.
   *
   * @default "full"
   */
  variant?: LogoVariant;

  /**
   * Color theme variant.
   * - `dark`: Optimized for dark backgrounds (white text/reverse mark).
   * - `light`: Optimized for light backgrounds (black/color mark).
   *
   * @default "dark"
   */
  theme?: LogoTheme;

  /** Override image width in pixels. Defaults according to variant. */
  width?: number;

  /** Override image height in pixels. Defaults according to variant. */
  height?: number;

  /** Prioritize image loading (useful when logo is in hero/navbar). */
  priority?: boolean;

  /** Additional Tailwind CSS classes merged via `cn()`. */
  className?: string;

  /** Accessibility alt text. Defaults to "CoreByte Studios". */
  alt?: string;
}

// ─────────────────────────────────────────────────────────────
// Asset Mappings (Design System: Brand Assets)
// ─────────────────────────────────────────────────────────────

const ASSET_MAP: Record<LogoVariant, Record<LogoTheme, { src: string; width: number; height: number }>> = {
  full: {
    dark: { src: "/images/brand/Full-logo-white-nobg.png", width: 220, height: 48 },
    light: { src: "/images/brand/Full-logo-nobg.png", width: 220, height: 48 },
  },
  stacked: {
    dark: { src: "/images/brand/Full-stacked-logo.png", width: 160, height: 120 },
    light: { src: "/images/brand/Full-stacked-logo.png", width: 160, height: 120 },
  },
  mark: {
    dark: { src: "/images/brand/Brand-mark-nobg.png", width: 48, height: 48 },
    light: { src: "/images/brand/Brand-mark-nobg.png", width: 48, height: 48 },
  },
};

// ─────────────────────────────────────────────────────────────
// Component
// ─────────────────────────────────────────────────────────────

/**
 * Logo — CoreByte Studios official logo component.
 *
 * Renders official brand assets from `/images/brand/` supporting full,
 * stacked, and logomark variants in dark and light themes.
 *
 * @example Navbar Logo (Full Dark)
 * ```tsx
 * <Logo variant="full" theme="dark" priority />
 * ```
 *
 * @example Footer Logo (Stacked)
 * ```tsx
 * <Logo variant="stacked" theme="dark" width={140} />
 * ```
 *
 * @example Icon Only (Mark)
 * ```tsx
 * <Logo variant="mark" width={36} height={36} />
 * ```
 */
function Logo({
  variant = "full",
  theme = "dark",
  width,
  height,
  priority = false,
  className,
  alt = "CoreByte Studios",
}: LogoProps) {
  const asset = ASSET_MAP[variant][theme];
  const finalWidth = width ?? asset.width;
  const scale = finalWidth / asset.width;
  const finalHeight = height ?? Math.round(asset.height * scale);

  return (
    <div className={cn("inline-flex items-center shrink-0 select-none", className)}>
      <Image
        src={asset.src}
        alt={alt}
        width={finalWidth}
        height={finalHeight}
        priority={priority || asset.src === "/images/brand/Full-logo-white-nobg.png"}
        className={cn("object-contain", className)}
      />
    </div>
  );
}

Logo.displayName = "Logo";

export { Logo };
