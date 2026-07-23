import type { ComponentPropsWithoutRef, ReactNode } from "react";
import Link from "next/link";
import { cn } from "@/lib/cn";

// ─────────────────────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────────────────────

/** Visual style variant. */
export type ButtonVariant = "primary" | "secondary" | "ghost" | "icon";

/** Size preset controlling padding, font size, and dimensions. */
export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonBaseProps {
  /**
   * Visual style variant.
   * - `primary`: Blue → Purple gradient, white text, hover lift & glow.
   * - `secondary`: Transparent background, white border (20%), glass hover.
   * - `ghost`: Transparent, subtle background hover.
   * - `icon`: Circular icon button (e.g., social icons, arrows).
   *
   * @default "primary"
   */
  variant?: ButtonVariant;

  /**
   * Size preset.
   * - `sm`: Compact size (36px min-height).
   * - `md`: Standard size (48px min-height / 16px x 32px padding per spec).
   * - `lg`: Prominent size (56px min-height).
   *
   * @default "md"
   */
  size?: ButtonSize;

  /**
   * Optional URL. When provided, the component renders a Next.js `<Link>`.
   */
  href?: string;

  /**
   * Indicates an external link. When `true` and `href` is provided,
   * adds `target="_blank"` and `rel="noopener noreferrer"`.
   *
   * @default false
   */
  external?: boolean;

  /**
   * Disables interaction and applies muted opacity.
   *
   * @default false
   */
  disabled?: boolean;

  /**
   * Additional Tailwind classes merged via `cn()`.
   */
  className?: string;

  children?: ReactNode;
}

type AnchorOrButtonProps = Omit<ComponentPropsWithoutRef<"button">, keyof ButtonBaseProps> &
  Omit<ComponentPropsWithoutRef<"a">, keyof ButtonBaseProps>;

export type ButtonProps = ButtonBaseProps & AnchorOrButtonProps;

// ─────────────────────────────────────────────────────────────
// Variant & Size Maps
// ─────────────────────────────────────────────────────────────

const BASE_CLASSES =
  "inline-flex items-center justify-center font-body font-medium select-none cursor-pointer " +
  "transition-all duration-300 ease-out " +
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
    "rounded-full shadow-md " +
    "hover:-translate-y-1 hover:shadow-glow hover:brightness-110 " +
    "active:scale-[0.98]",

  /**
   * secondary — Secondary action (Design spec: Buttons.md)
   * Border: White 20%, Transparent background
   * Hover: Glass background, border opacity boost, lift 4px
   * Click: Scale 0.98
   */
  secondary:
    "bg-transparent text-text border border-white/20 rounded-full " +
    "hover:bg-white/10 hover:border-white/40 hover:-translate-y-1 hover:backdrop-blur-md " +
    "active:scale-[0.98]",

  /**
   * ghost — Minimal subtle action
   * Hover: Glass hover background
   */
  ghost:
    "bg-transparent text-text-muted hover:text-text rounded-full " +
    "hover:bg-white/10 active:scale-[0.98]",

  /**
   * icon — Circular action for social icons / arrows (Design spec: Buttons.md)
   * 48px circular default container (md)
   */
  icon:
    "rounded-full border border-white/10 bg-surface/50 text-text-muted " +
    "hover:text-primary hover:border-primary/50 hover:bg-surface-raised hover:-translate-y-0.5 hover:shadow-glow " +
    "active:scale-95",
};

const SIZE_CLASSES: Record<ButtonVariant, Record<ButtonSize, string>> = {
  primary: {
    sm: "px-4 py-2 text-xs md:text-sm min-h-[36px] gap-2",
    md: "px-8 py-4 text-sm md:text-base min-h-[48px] gap-2.5", // 16px x 32px per spec
    lg: "px-10 py-5 text-base md:text-lg min-h-[56px] gap-3",
  },
  secondary: {
    sm: "px-4 py-2 text-xs md:text-sm min-h-[36px] gap-2",
    md: "px-8 py-4 text-sm md:text-base min-h-[48px] gap-2.5",
    lg: "px-10 py-5 text-base md:text-lg min-h-[56px] gap-3",
  },
  ghost: {
    sm: "px-3 py-1.5 text-xs md:text-sm min-h-[36px] gap-2",
    md: "px-6 py-3 text-sm md:text-base min-h-[48px] gap-2.5",
    lg: "px-8 py-4 text-base md:text-lg min-h-[56px] gap-3",
  },
  icon: {
    sm: "w-9 h-9 p-2 text-sm",
    md: "w-12 h-12 p-3 text-base", // 48px circular per spec
    lg: "w-14 h-14 p-4 text-lg",
  },
};

// ─────────────────────────────────────────────────────────────
// Component
// ─────────────────────────────────────────────────────────────

/**
 * Button — interactive CTA primitive for actions and navigation.
 *
 * Supports both standard HTML button behavior and Next.js link navigation
 * when `href` is provided.
 *
 * **Design Tokens & Specs:**
 * - `primary`: Blue → Purple gradient, 999px radius, 16px × 32px padding (md size),
 *   hover lift 4px, glow shadow, scale 0.98 on click.
 * - `secondary`: Transparent background, 20% white border, glass hover effect.
 * - `icon`: Circular 48px button for social links and navigation controls.
 *
 * @example Primary CTA Button
 * ```tsx
 * <Button variant="primary" size="md">
 *   Start Your Project
 * </Button>
 * ```
 *
 * @example Link Button with external target
 * ```tsx
 * <Button href="https://github.com" external variant="secondary">
 *   View GitHub
 * </Button>
 * ```
 *
 * @example Circular Icon Button
 * ```tsx
 * <Button variant="icon" aria-label="Social Link">
 *   <GithubIcon />
 * </Button>
 * ```
 */
function Button({
  variant = "primary",
  size = "md",
  href,
  external = false,
  disabled = false,
  className,
  children,
  ...rest
}: ButtonProps) {
  const combinedClasses = cn(
    BASE_CLASSES,
    VARIANT_CLASSES[variant],
    SIZE_CLASSES[variant][size],
    className
  );

  if (href && !disabled) {
    const isExternal = external || href.startsWith("http") || href.startsWith("//");
    return (
      <Link
        href={href}
        className={combinedClasses}
        {...(isExternal
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
        {...(rest as Omit<ComponentPropsWithoutRef<typeof Link>, "href">)}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      type="button"
      disabled={disabled}
      aria-disabled={disabled}
      className={combinedClasses}
      {...(rest as ComponentPropsWithoutRef<"button">)}
    >
      {children}
    </button>
  );
}

// Named export only — no default export (per project convention)
export { Button };
