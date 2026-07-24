"use client";

import { motion, type Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { DURATION, EASE } from "@/constants/animation";
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

const OFFSET: Record<FloatInDirection, { x: number; y: number }> = {
  top: { x: 0, y: -30 },
  bottom: { x: 0, y: 30 },
  left: { x: -30, y: 0 },
  right: { x: 30, y: 0 },
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
  const offset = OFFSET[direction];

  const variants: Variants = {
    hidden: prefersReduced
      ? { opacity: 0 }
      : { opacity: 0, x: offset.x, y: offset.y },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: prefersReduced ? DURATION.fast : duration,
        delay,
        ease: prefersReduced ? "easeOut" : [...EASE.smooth],
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
