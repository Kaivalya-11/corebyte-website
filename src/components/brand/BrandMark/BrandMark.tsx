import Image from "next/image";
import { cn } from "@/lib/cn";

// ─────────────────────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────────────────────

export type BrandMarkSize = "sm" | "md" | "lg" | number;
export type BrandMarkTheme = "color" | "white" | "black" | "reverse";

export interface BrandMarkProps {
  /**
   * Preset size or custom pixel dimensions.
   * - `sm`: 24px x 24px
   * - `md`: 36px x 36px
   * - `lg`: 48px x 48px
   * - `number`: Custom pixel size
   *
   * @default "md"
   */
  size?: BrandMarkSize;

  /**
   * Color theme asset to display.
   * - `color`: Gradient blue-purple brand mark (default)
   * - `white`: White brand mark for dark backgrounds
   * - `black`: Solid black brand mark
   * - `reverse`: Reverse contrast mark
   *
   * @default "color"
   */
  theme?: BrandMarkTheme;

  /**
   * If true, marks the image as decorative (`aria-hidden="true"`).
   *
   * @default true
   */
  decorative?: boolean;

  /** Additional Tailwind CSS classes merged via `cn()`. */
  className?: string;

  /** Alt text when `decorative` is false. Defaults to "CoreByte Studios Brand Mark". */
  alt?: string;
}

// ─────────────────────────────────────────────────────────────
// Size & Asset Maps
// ─────────────────────────────────────────────────────────────

const SIZE_MAP: Record<"sm" | "md" | "lg", number> = {
  sm: 24,
  md: 36,
  lg: 48,
};

const THEME_MAP: Record<BrandMarkTheme, string> = {
  color: "/images/brand/Brand-mark.png",
  white: "/images/brand/Brand-mark-white.png",
  black: "/images/brand/Brand-mark-black.png",
  reverse: "/images/brand/Brand-mark-reverse.png",
};

// ─────────────────────────────────────────────────────────────
// Component
// ─────────────────────────────────────────────────────────────

/**
 * BrandMark — CoreByte Studios hexagonal emblem component.
 *
 * Symbolizes engineering precision, stability, and continuous innovation.
 *
 * @example Default Brand Mark
 * ```tsx
 * <BrandMark size="md" />
 * ```
 *
 * @example Decorative Large White Mark
 * ```tsx
 * <BrandMark size="lg" theme="white" decorative />
 * ```
 */
function BrandMark({
  size = "md",
  theme = "color",
  decorative = true,
  className,
  alt = "CoreByte Studios Brand Mark",
}: BrandMarkProps) {
  const pixelSize = typeof size === "number" ? size : SIZE_MAP[size];
  const src = THEME_MAP[theme];

  return (
    <div
      className={cn("inline-flex items-center justify-center shrink-0 select-none", className)}
      aria-hidden={decorative ? "true" : undefined}
    >
      <Image
        src={src}
        alt={decorative ? "" : alt}
        width={pixelSize}
        height={pixelSize}
        style={{ width: pixelSize, height: pixelSize }}
        className="object-contain"
      />
    </div>
  );
}

BrandMark.displayName = "BrandMark";

export { BrandMark };
