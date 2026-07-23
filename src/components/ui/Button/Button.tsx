import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

// ─────────────────────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────────────────────

/** Visual style variant for the button. */
export type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";

/** Size preset controlling padding, typography, and dimensions. */
export type ButtonSize = "sm" | "md" | "lg" | "icon";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Visual style variant.
   * - `primary`: Main CTA with Blue → Purple gradient, hover lift & glow.
   * - `secondary`: Dark surface background with border and hover lift.
   * - `outline`: Transparent background with white/20 border and glass hover.
   * - `ghost`: Minimal transparent background with subtle text hover.
   *
   * @default "primary"
   */
  variant?: ButtonVariant;

  /**
   * Size preset.
   * - `sm`: Compact size (36px min-height).
   * - `md`: Standard CTA size (48px min-height / 16px × 32px padding).
   * - `lg`: Prominent size (56px min-height).
   * - `icon`: Circular icon button (48px × 48px).
   *
   * @default "md"
   */
  size?: ButtonSize;

  /**
   * Controls loading state.
   * Disables interactive behavior, sets `aria-busy="true"`, and displays
   * a CSS animated spinner.
   *
   * @default false
   */
  loading?: boolean;

  /** Additional Tailwind classes merged safely via `cn()`. */
  className?: string;

  children?: ReactNode;
}

// ─────────────────────────────────────────────────────────────
// Style Maps (Record types — no if/else chains or CVA)
// ─────────────────────────────────────────────────────────────

const BASE_CLASSES =
  "inline-flex items-center justify-center font-body font-medium select-none cursor-pointer " +
  "rounded-full transition-all duration-300 ease-out " +
  "focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2 " +
  "disabled:opacity-50 disabled:pointer-events-none disabled:cursor-not-allowed " +
  "aria-disabled:opacity-50 aria-disabled:pointer-events-none";

const VARIANT_CLASSES: Record<ButtonVariant, string> = {
  /**
   * primary — Main Call-To-Action (Design spec: Buttons.md)
   * Gradient: Blue (#2563EB) → Purple (#7C3AED)
   * Hover: Lift 4px (-translate-y-1), glow shadow, brighter gradient
   * Click: Scale 0.98
   */
  primary:
    "bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] text-white " +
    "shadow-md hover:-translate-y-1 hover:shadow-glow hover:brightness-110 " +
    "active:scale-[0.98]",

  /**
   * secondary — Secondary action on dark surface
   * Dark surface background with border and glass hover effect
   */
  secondary:
    "bg-surface text-text border border-white/10 " +
    "hover:bg-surface-raised hover:border-white/20 hover:-translate-y-1 " +
    "active:scale-[0.98]",

  /**
   * outline — Border-only secondary action (Design spec: Buttons.md)
   * Transparent background, 20% white border
   * Hover: Glass background, 40% white border, lift 4px
   */
  outline:
    "bg-transparent text-text border border-white/20 " +
    "hover:bg-white/10 hover:border-white/40 hover:-translate-y-1 hover:backdrop-blur-md " +
    "active:scale-[0.98]",

  /**
   * ghost — Minimal subtle action
   * Hover: Glass hover background
   */
  ghost:
    "bg-transparent text-text-muted hover:text-text " +
    "hover:bg-white/10 active:scale-[0.98]",
};

const SIZE_CLASSES: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-xs md:text-sm min-h-[36px] gap-2",
  md: "px-8 py-4 text-sm md:text-base min-h-[48px] gap-2.5", // 16px x 32px padding per spec
  lg: "px-10 py-5 text-base md:text-lg min-h-[56px] gap-3",
  icon: "w-12 h-12 p-3 text-base aspect-square shrink-0", // 48px circular per spec
};

// ─────────────────────────────────────────────────────────────
// Loading Spinner (CSS-only animation)
// ─────────────────────────────────────────────────────────────

function LoadingSpinner() {
  return (
    <svg
      className="animate-spin h-4 w-4 text-current shrink-0"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
  );
}

// ─────────────────────────────────────────────────────────────
// Component
// ─────────────────────────────────────────────────────────────

/**
 * Button — interactive CTA primitive for user actions.
 *
 * Extends `React.ButtonHTMLAttributes<HTMLButtonElement>`.
 *
 * **Design Tokens & Specs:**
 * - `primary`: Blue → Purple gradient, 999px radius, 16px × 32px padding (md size),
 *   hover lift 4px, glow shadow, scale 0.98 on click.
 * - `secondary`: Dark surface background with border and hover lift.
 * - `outline`: Transparent background, 20% white border, glass hover effect.
 * - `ghost`: Subtle hover background without border.
 * - `icon`: Circular 48px button.
 *
 * @example Primary CTA Button
 * ```tsx
 * <Button variant="primary" size="md">
 *   Start Your Project
 * </Button>
 * ```
 *
 * @example Loading State
 * ```tsx
 * <Button loading variant="primary">
 *   Submitting...
 * </Button>
 * ```
 *
 * @example Outline Variant
 * ```tsx
 * <Button variant="outline" size="sm">
 *   Learn More
 * </Button>
 * ```
 */
function Button({
  type = "button",
  variant = "primary",
  size = "md",
  loading = false,
  disabled = false,
  className,
  children,
  ...rest
}: ButtonProps) {
  const isEffectiveDisabled = disabled || loading;

  return (
    <button
      type={type}
      disabled={isEffectiveDisabled}
      aria-busy={loading}
      aria-disabled={isEffectiveDisabled}
      className={cn(
        BASE_CLASSES,
        VARIANT_CLASSES[variant],
        SIZE_CLASSES[size],
        className
      )}
      {...rest}
    >
      {loading && <LoadingSpinner />}
      {children}
    </button>
  );
}

Button.displayName = "Button";

// Named export only — no default export
export { Button };
