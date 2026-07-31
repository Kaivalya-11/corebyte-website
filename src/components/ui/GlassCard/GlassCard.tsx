import { forwardRef } from "react";
import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

// ─────────────────────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────────────────────

export interface GlassCardProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Enables interactive hover micro-interactions (lift 4px, border highlight, and glow shadow).
   * Useful when cards are clickable or act as feature callouts.
   *
   * @default false
   */
  hover?: boolean;

  /** Additional Tailwind classes merged safely via `cn()`. */
  className?: string;

  children?: ReactNode;
}

// ─────────────────────────────────────────────────────────────
// Component
// ─────────────────────────────────────────────────────────────

/**
 * GlassCard — glassmorphism container primitive for cards and interactive panels.
 *
 * Extends `React.HTMLAttributes<HTMLDivElement>`.
 *
 * **Design Tokens & Specs:**
 * - Background: Glassmorphism surface (`glass` class / `rgba(13, 17, 23, 0.7)`)
 * - Blur: 16px backdrop blur
 * - Border: Subtle border (`border border-border`)
 * - Radius: 20px rounded corners (`rounded-2xl`)
 * - Shadow: Medium elevation shadow (`shadow-md`)
 * - Optional Hover: Hover lift (`hover:-translate-y-1`), border glow (`hover:border-primary/50`),
 *   and ambient glow shadow (`hover:shadow-glow`).
 *
 * @example Basic static glass card
 * ```tsx
 * <GlassCard className="p-6">
 *   <h3>Feature Title</h3>
 *   <p>Feature description...</p>
 * </GlassCard>
 * ```
 *
 * @example Interactive service card with hover effect
 * ```tsx
 * <GlassCard hover className="p-8">
 *   <ServiceIcon />
 *   <h3>Web Development</h3>
 * </GlassCard>
 * ```
 */
const GlassCard = forwardRef<HTMLDivElement, GlassCardProps>(
  ({ hover = false, className, children, ...rest }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          // ── Base glass surface styling (Design Tokens: Glassmorphism)
          "glass rounded-2xl shadow-md transition-all duration-300 ease-out text-text",
          // ── Optional hover micro-interaction
          hover &&
            "hover:-translate-y-1 hover:border-primary/50 hover:shadow-glow cursor-pointer",
          className
        )}
        {...rest}
      >
        {children}
      </div>
    );
  }
);

GlassCard.displayName = "GlassCard";

// Named export only — no default export
export { GlassCard };
