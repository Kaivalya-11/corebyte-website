import type { ElementType, ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/cn";

// ─────────────────────────────────────────────────────────────
// ContainerProps
//
// Uses a polymorphic pattern via the `as` prop.
// The component inherits all valid HTML attributes of whatever
// element `as` resolves to, so callers can pass aria-*, data-*,
// role, etc. without any extra prop declarations.
// ─────────────────────────────────────────────────────────────

type ContainerOwnProps<E extends ElementType = "div"> = {
  /**
   * The HTML element or React component to render as the container root.
   * Defaults to `"div"`. Pass `"section"`, `"article"`, `"main"`, etc.
   * to match your semantic HTML needs without adding wrapper elements.
   *
   * @default "div"
   * @example <Container as="section" id="services">…</Container>
   */
  as?: E;

  /**
   * Additional Tailwind classes to merge onto the container.
   * Merged safely via cn() — no class conflicts.
   */
  className?: string;
};

/**
 * ContainerProps merges ContainerOwnProps with all valid props
 * of the resolved HTML element, excluding `as` and `className`
 * from the element's own props to avoid conflicts.
 */
export type ContainerProps<E extends ElementType = "div"> = ContainerOwnProps<E> &
  Omit<ComponentPropsWithoutRef<E>, keyof ContainerOwnProps<E>>;

// ─────────────────────────────────────────────────────────────
// Container
//
// Responsibilities (by design — do not add to this list):
//   ✓ Max-width constraint   (max-w-[var(--container-max)])
//   ✓ Horizontal centering   (mx-auto)
//   ✓ Responsive side gutters (px-4 sm:px-6 lg:px-10 xl:px-16)
//   ✗ NO vertical padding or margin  →  caller's responsibility
//   ✗ NO background, border, shadow  →  caller's responsibility
//   ✗ NO flex or grid layout         →  caller's responsibility
// ─────────────────────────────────────────────────────────────

/**
 * Container — width-constraint wrapper for all page content.
 *
 * Centers content horizontally within the design-system max-width
 * (1440px from Design Tokens) and applies responsive horizontal
 * gutters so content never touches the viewport edges on any device.
 *
 * The component is polymorphic: pass `as` to change the rendered
 * element without adding extra DOM nodes.
 *
 * **What this component does:**
 * - Constrains content to `--container-max` (1440px)
 * - Centers itself horizontally with `mx-auto`
 * - Applies responsive horizontal padding (16px → 24px → 40px → 64px)
 *
 * **What this component does NOT do:**
 * - Add vertical spacing — handle that at the section level
 * - Set background, borders, or shadows — those are layout concerns
 * - Apply grid or flex — those are content concerns
 *
 * @example Basic usage
 * ```tsx
 * <Container>
 *   <p>Page content</p>
 * </Container>
 * ```
 *
 * @example Semantic element
 * ```tsx
 * <Container as="section" id="services" aria-label="Services">
 *   <ServicesGrid />
 * </Container>
 * ```
 *
 * @example Custom max-width override
 * ```tsx
 * <Container className="max-w-3xl">
 *   <BlogPost />
 * </Container>
 * ```
 */
function Container<E extends ElementType = "div">({
  as,
  className,
  children,
  ...rest
}: ContainerProps<E>) {
  // Resolve the element — default to "div" if not provided
  const Tag = (as ?? "div") as ElementType;

  return (
    <Tag
      className={cn(
        // ── Width constraint (Design Tokens: Container Max Width 1440px)
        "w-full max-w-[var(--container-max)]",
        // ── Horizontal centering
        "mx-auto",
        // ── Responsive horizontal gutters
        // 16px on mobile → 24px on sm → 40px on lg → 64px on xl
        // Keeps content off the edges on all viewport widths.
        // Section-level components add vertical padding independently.
        "px-4 sm:px-6 lg:px-10 xl:px-16",
        className
      )}
      {...rest}
    >
      {children}
    </Tag>
  );
}

// Named export for direct imports and tree-shaking
export { Container };

// Default export for convenience
export default Container;
