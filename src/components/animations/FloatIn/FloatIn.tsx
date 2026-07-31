"use client";

import { motion, type Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import {
  DURATION,
  fadeDown,
  fadeDownReduced,
  fadeLeft,
  fadeLeftReduced,
  fadeRight,
  fadeRightReduced,
  fadeUp,
  fadeUpReduced,
} from "@/animations";
import { cn } from "@/lib/cn";
import type { ReactNode } from "react";

// ─────────────────────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────────────────────

export type FloatInDirection = "top" | "bottom" | "left" | "right";

export interface FloatInProps {
  children: ReactNode;
  /** Additional Tailwind classes merged via `cn()`. */
  className?: string;
  /** Delay before animation starts (seconds). @default 0 */
  delay?: number;
  /** Animation duration (seconds). @default 0.5 */
  duration?: number;
  /** Direction the element enters from. @default "bottom" */
  direction?: FloatInDirection;
  /**
   * If true, adds a subtle continuous floating animation
   * after the entrance completes (2px Y oscillation, 3s loop).
   * Used for decorative floating widgets.
   *
   * @default false
   */
  float?: boolean;
  /** If true, animation triggers only once. @default true */
  once?: boolean;
  /** IntersectionObserver threshold. @default 0.1 */
  threshold?: number;
}

// ─────────────────────────────────────────────────────────────
// Direction offsets
// ─────────────────────────────────────────────────────────────

const VARIANTS_MAP: Record<FloatInDirection, { standard: Variants; reduced: Variants }> = {
  top: { standard: fadeDown, reduced: fadeDownReduced },
  bottom: { standard: fadeUp, reduced: fadeUpReduced },
  left: { standard: fadeRight, reduced: fadeRightReduced }, // -30x to 0 (moves right)
  right: { standard: fadeLeft, reduced: fadeLeftReduced },  // 30x to 0 (moves left)
};

// ─────────────────────────────────────────────────────────────
// Component
// ─────────────────────────────────────────────────────────────

/**
 * FloatIn — directional entrance animation with optional continuous float.
 *
 * Elements slide in from the specified direction and fade to full opacity.
 * When `float` is enabled, a subtle Y-axis oscillation continues after
 * the entrance — ideal for decorative floating widgets around a hero visual.
 *
 * @example Hero floating widget
 * ```tsx
 * <FloatIn direction="left" delay={0.7} float>
 *   <GlassCard>AI Integration</GlassCard>
 * </FloatIn>
 * ```
 *
 * @example Right-column entrance
 * ```tsx
 * <FloatIn direction="right" delay={0.2} duration={0.6}>
 *   <BrowserMockup />
 * </FloatIn>
 * ```
 */
function FloatIn({
  children,
  className,
  delay = 0,
  duration = DURATION.slow,
  direction = "bottom",
  float = false,
  once = true,
  threshold = 0.1,
}: FloatInProps) {
  const prefersReduced = useReducedMotion();
  const [ref, inView] = useInView({ triggerOnce: once, threshold });
  const directionVariants = VARIANTS_MAP[direction];
  const baseVariants = prefersReduced ? directionVariants.reduced : directionVariants.standard;

  // We clone the variants to inject the custom delay and duration props
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const baseVisible = baseVariants.visible as any;
  const variants: Variants = {
    hidden: baseVariants.hidden,
    visible: {
      ...baseVisible,
      transition: {
        ...(baseVisible.transition || {}),
        delay,
        ...(duration ? { duration: prefersReduced ? DURATION.fast : duration } : {}),
      },
    },
  };

  // Continuous subtle float after entrance (disabled for reduced motion)
  const floatTransition =
    float && !prefersReduced
      ? {
          y: {
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse" as const,
            ease: "easeInOut" as const,
            delay: delay + duration, // Start float after entrance completes
          },
        }
      : undefined;

  const floatAnimate =
    float && !prefersReduced && inView
      ? { y: [-2, 2] }
      : undefined;

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      className={cn(className)}
    >
      {float && !prefersReduced ? (
        <motion.div
          animate={floatAnimate}
          transition={floatTransition}
        >
          {children}
        </motion.div>
      ) : (
        children
      )}
    </motion.div>
  );
}

FloatIn.displayName = "FloatIn";

export { FloatIn };
