"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { fadeUp, fadeUpReduced, DURATION, EASE } from "@/animations";
import { cn } from "@/lib/cn";
import type { ReactNode } from "react";

// ─────────────────────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────────────────────

export interface FadeUpProps {
  children: ReactNode;
  /** Additional Tailwind classes merged via `cn()`. */
  className?: string;
  /** Delay before animation starts (seconds). @default 0 */
  delay?: number;
  /** Animation duration (seconds). @default 0.5 */
  duration?: number;
  /** If true, animation triggers only once. @default true */
  once?: boolean;
  /** IntersectionObserver threshold for trigger. @default 0.1 */
  threshold?: number;
}

// ─────────────────────────────────────────────────────────────
// Component
// ─────────────────────────────────────────────────────────────

/**
 * FadeUp — scroll-triggered fade-in + translate-up animation wrapper.
 *
 * Wraps children in a `motion.div` that animates from invisible (24px below)
 * to visible position when scrolled into the viewport.
 *
 * Uses `react-intersection-observer` for scroll detection and
 * `useReducedMotion()` to respect accessibility preferences.
 *
 * @example Basic fade-up on scroll
 * ```tsx
 * <FadeUp>
 *   <Heading level="h2" variant="section">What We Build</Heading>
 * </FadeUp>
 * ```
 *
 * @example Delayed entrance
 * ```tsx
 * <FadeUp delay={0.3}>
 *   <p>This appears 300ms after scrolling into view.</p>
 * </FadeUp>
 * ```
 */
function FadeUp({
  children,
  className,
  delay = 0,
  duration = DURATION.slow,
  once = true,
  threshold = 0.1,
}: FadeUpProps) {
  const prefersReduced = useReducedMotion();
  const [ref, inView] = useInView({ triggerOnce: once, threshold });

  const variants = prefersReduced ? fadeUpReduced : fadeUp;

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      transition={{
        duration: prefersReduced ? DURATION.fast : duration,
        delay,
        ease: prefersReduced ? "easeOut" : [...EASE.smooth],
      }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}

FadeUp.displayName = "FadeUp";

export { FadeUp };
