import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

// ─────────────────────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────────────────────

/** The HTML heading element to render. Controls semantics only. */
export type HeadingLevel = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

/**
 * Visual style variant. Controls font size, weight, colour, and
 * letter-spacing — completely independent of the HTML level rendered.
 *
 * | Variant   | Intended use                                  |
 * |-----------|-----------------------------------------------|
 * | display   | Hero headline — largest text on the page      |
 * | hero      | Sub-hero headline or page title               |
 * | section   | Section titles (Services, Portfolio, etc.)    |
 * | card      | Card and widget headings                      |
 * | eyebrow   | Tiny all-caps label above a main heading      |
 */
export type HeadingVariant = "display" | "hero" | "section" | "card" | "eyebrow";

/** Text alignment — matches Tailwind text-{align} utilities. */
export type HeadingAlign = "left" | "center" | "right";

// ─────────────────────────────────────────────────────────────
// Props
// ─────────────────────────────────────────────────────────────

export interface HeadingProps {
  /**
   * The HTML heading element to render.
   *
   * This controls the **semantic outline** of the page (important for
   * accessibility and SEO) — it has no effect on visual size.
   * Use `variant` to control visual appearance.
   *
   * @default "h2"
   */
  level?: HeadingLevel;

  /**
   * Visual style variant. Controls typography — not semantics.
   *
   * Choose based on the visual role of the text on screen,
   * not on what level the outline requires.
   *
   * @default "section"
   */
  variant?: HeadingVariant;

  /**
   * Text alignment.
   *
   * @default "left"
   */
  align?: HeadingAlign;

  /**
   * Additional Tailwind classes. Merged safely via cn().
   * Use to apply colour overrides, gradient text, or layout positioning.
   *
   * @example className="gradient-text"
   */
  className?: string;

  children: ReactNode;
}

// ─────────────────────────────────────────────────────────────
// Variant maps
//
// Each variant maps to a set of Tailwind classes sourced from the
// design documentation:
//
//   Hero.md          → display: Space Grotesk 64px / 700
//   Hero.md          → hero:    Space Grotesk ~48px / 700
//   Services.md      → section: heading for major sections ~36px
//   Cards.md         → card:    card / widget heading ~20px
//   Brand Personality → eyebrow: small, tracked label
//
// Responsive scaling: display and hero use clamp-style responsive
// steps (text-4xl → text-6xl, etc.) so they adapt gracefully from
// mobile to ultra-wide without magic numbers.
//
// Color: all variants use `text-text` (--color-text: #f0f4ff) from the
// design token system. Never hardcode hex here — use the token.
// Callers can override via className (e.g. `gradient-text`).
// ─────────────────────────────────────────────────────────────

const VARIANT_CLASSES: Record<HeadingVariant, string> = {
  /**
   * display — Hero headline.
   * Spec (Hero.md): Space Grotesk, 64px, weight 700, tracking tight.
   * Responsive: scales from 40px (mobile) → 56px (md) → 64px (lg+).
   */
  display:
    "font-heading font-bold tracking-tight leading-[1.1] " +
    "text-4xl md:text-5xl lg:text-[4rem] " +
    "text-text",

  /**
   * hero — Sub-hero or page-level title.
   * Slightly smaller than display; used for page headers or
   * prominent sub-sections below the hero.
   */
  hero:
    "font-heading font-bold tracking-tight leading-[1.15] " +
    "text-3xl md:text-4xl lg:text-5xl " +
    "text-text",

  /**
   * section — Major section titles (Services, Portfolio, Process…).
   * Spec (Services.md): clear, prominent heading for each homepage section.
   */
  section:
    "font-heading font-bold tracking-tight leading-[1.2] " +
    "text-2xl md:text-3xl lg:text-4xl " +
    "text-text",

  /**
   * card — Card and widget headings.
   * Spec (Cards.md): readable within a glass card at smaller size.
   */
  card:
    "font-heading font-semibold tracking-tight leading-snug " +
    "text-lg md:text-xl " +
    "text-text",

  /**
   * eyebrow — Tiny all-caps label placed above a main heading.
   * Common pattern: badge → eyebrow → display (seen in Hero spec).
   * Uses Inter (body font) to contrast with the Space Grotesk heading below it.
   * Color is muted to recede visually relative to the heading it introduces.
   */
  eyebrow:
    "font-body font-semibold tracking-[0.12em] leading-none uppercase " +
    "text-xs md:text-sm " +
    "text-primary",
};

const ALIGN_CLASSES: Record<HeadingAlign, string> = {
  left: "text-left",
  center: "text-center",
  right: "text-right",
};

// ─────────────────────────────────────────────────────────────
// Component
// ─────────────────────────────────────────────────────────────

/**
 * Heading — typography primitive for all heading text.
 *
 * **Core principle: separate semantic level from visual variant.**
 *
 * - `level` chooses the rendered HTML element (`h1`–`h6`).
 *   This defines the document outline and is critical for accessibility
 *   and SEO. Screen readers and search engines use this hierarchy.
 *
 * - `variant` chooses the visual appearance (`display`, `hero`, `section`,
 *   `card`, `eyebrow`). Visual size has no relation to HTML level.
 *
 * This means you can render a visually large `display` heading as `h2`
 * (when `h1` is already used elsewhere on the page), or a small `card`
 * heading as `h3` without any visual inconsistency.
 *
 * **What this component does:**
 * - Applies the correct font family, size, weight, and color from the design system
 * - Handles responsive type scaling for display/hero variants
 * - Accepts className for one-off overrides (e.g. `gradient-text`)
 *
 * **What this component does NOT do:**
 * - Add margins or spacing — that is the section's responsibility
 * - Set layout (flex, grid, position) — caller's concern
 * - Animate — wrap with `<FadeUp>` from `components/animations/` if needed
 *
 * @example Section heading (most common usage)
 * ```tsx
 * <Heading level="h2" variant="section">What We Build</Heading>
 * ```
 *
 * @example Hero headline with gradient text
 * ```tsx
 * <Heading level="h1" variant="display" className="gradient-text">
 *   Transforming Ideas Into Digital Reality
 * </Heading>
 * ```
 *
 * @example Eyebrow + display pair (per Hero spec)
 * ```tsx
 * <Heading level="h2" variant="eyebrow">Modern Software Studio</Heading>
 * <Heading level="h1" variant="display">Transforming Ideas</Heading>
 * ```
 *
 * @example Centered card heading
 * ```tsx
 * <Heading level="h3" variant="card" align="center">Web Development</Heading>
 * ```
 */
function Heading({
  level = "h2",
  variant = "section",
  align = "left",
  className,
  children,
}: HeadingProps) {
  const Tag = level;

  return (
    <Tag
      className={cn(
        VARIANT_CLASSES[variant],
        ALIGN_CLASSES[align],
        className
      )}
    >
      {children}
    </Tag>
  );
}

// Named export only — no default export (per project convention)
export { Heading };
