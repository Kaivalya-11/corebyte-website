import { forwardRef } from "react";
import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

// ─────────────────────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────────────────────

/** Visual style variant for the badge. */
export type BadgeVariant = "primary" | "secondary" | "outline" | "success";

/** Size preset controlling padding, font size, and dimensions. */
export type BadgeSize = "sm" | "md";

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  /**
   * Visual style variant.
   * - `primary`: Brand primary blue subtle badge.
   * - `secondary`: Dark surface background with border.
   * - `outline`: Transparent background with subtle border.
   * - `success`: Semantic success green indicator badge.
   *
   * @default "primary"
   */
  variant?: BadgeVariant;

  /**
   * Size preset.
   * - `sm`: Compact size.
   * - `md`: Standard size.
   *
   * @default "md"
   */
  size?: BadgeSize;

  /** Additional Tailwind classes merged safely via `cn()`. */
  className?: string;

  children?: ReactNode;
}

// ─────────────────────────────────────────────────────────────
// Style Maps (Record types — no if/else chains)
// ─────────────────────────────────────────────────────────────

const BASE_CLASSES =
  "inline-flex items-center justify-center font-body font-medium " +
  "rounded-full whitespace-nowrap select-none transition-colors";

const VARIANT_CLASSES: Record<BadgeVariant, string> = {
  /**
   * primary — Brand accent badge (e.g. ✨ Modern Software Studio)
   */
  primary:
    "bg-primary/10 text-primary border border-primary/20",

  /**
   * secondary — Subtle dark surface badge for metadata / tags
   */
  secondary:
    "bg-surface-raised text-text-muted border border-white/10",

  /**
   * outline — Transparent bordered badge
   */
  outline:
    "bg-transparent text-text border border-white/20",

  /**
   * success — Status badge for live / active states (e.g. Status: Live)
   */
  success:
    "bg-success/10 text-success border border-success/20",
};

const SIZE_CLASSES: Record<BadgeSize, string> = {
  sm: "px-2.5 py-0.5 text-xs gap-1",
  md: "px-3.5 py-1 text-xs md:text-sm gap-1.5",
};

// ─────────────────────────────────────────────────────────────
// Component
// ─────────────────────────────────────────────────────────────

/**
 * Badge — compact visual indicator primitive.
 *
 * Extends `React.HTMLAttributes<HTMLSpanElement>`.
 *
 * Used for status indicators, feature tags, category labels, and
 * trust badges across hero, service cards, and portfolio sections.
 *
 * @example Hero status badge
 * ```tsx
 * <Badge variant="primary" size="md">
 *   ✨ Modern Software Studio
 * </Badge>
 * ```
 *
 * @example Live status indicator
 * ```tsx
 * <Badge variant="success" size="sm">
 *   Live
 * </Badge>
 * ```
 *
 * @example Technology tag
 * ```tsx
 * <Badge variant="secondary" size="sm">
 *   Next.js
 * </Badge>
 * ```
 */
const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ variant = "primary", size = "md", className, children, ...rest }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(
          BASE_CLASSES,
          VARIANT_CLASSES[variant],
          SIZE_CLASSES[size],
          className
        )}
        {...rest}
      >
        {children}
      </span>
    );
  }
);

Badge.displayName = "Badge";

// Named export only — no default export
export { Badge };
