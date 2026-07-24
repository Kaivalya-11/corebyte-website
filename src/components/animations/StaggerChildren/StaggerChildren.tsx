"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { DURATION, EASE } from "@/constants/animation";
import { cn } from "@/lib/cn";
import type { ReactNode } from "react";

// ─────────────────────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────────────────────

export interface StaggerChildrenProps {
  children: ReactNode;
  /** Additional Tailwind classes merged via `cn()`. */
  className?: string;
  /** Delay before stagger sequence starts (seconds). @default 0 */
  delay?: number;
  /** Delay between each child's entrance (seconds). @default 0.1 */
  staggerDelay?: number;
  /** If true, animation triggers only once. @default true */
  once?: boolean;
  /** IntersectionObserver threshold. @default 0.1 */
  threshold?: number;
}

export interface StaggerItemProps {
  children: ReactNode;
  /** Additional Tailwind classes merged via `cn()`. */
  className?: string;
}

// ─────────────────────────────────────────────────────────────
// Variants
// ─────────────────────────────────────────────────────────────

const containerVariants = (staggerDelay: number, delay: number) => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren: staggerDelay,
      delayChildren: delay,
    },
  },
});

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: DURATION.slow,
      ease: EASE.smooth,
    },
  },
};

const itemVariantsReduced = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: DURATION.fast },
  },
};

// ─────────────────────────────────────────────────────────────
// StaggerItem
// ─────────────────────────────────────────────────────────────

/**
 * StaggerItem — individual child within a `StaggerChildren` container.
 *
 * Must be a direct child of `StaggerChildren`.
 * Automatically inherits stagger timing from the parent.
 *
 * @example
 * ```tsx
 * <StaggerChildren>
 *   <StaggerItem>First</StaggerItem>
 *   <StaggerItem>Second</StaggerItem>
 * </StaggerChildren>
 * ```
 */
function StaggerItem({ children, className }: StaggerItemProps) {
  const prefersReduced = useReducedMotion();

  return (
    <motion.div
      variants={prefersReduced ? itemVariantsReduced : itemVariants}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}

StaggerItem.displayName = "StaggerItem";

// ─────────────────────────────────────────────────────────────
// StaggerChildren
// ─────────────────────────────────────────────────────────────

/**
 * StaggerChildren — scroll-triggered staggered entrance container.
 *
 * Wraps a set of `StaggerItem` children and staggers their entrance
 * animation sequentially when scrolled into the viewport.
 *
 * @example Trust indicators row
 * ```tsx
 * <StaggerChildren staggerDelay={0.08}>
 *   <StaggerItem>✓ Responsive Design</StaggerItem>
 *   <StaggerItem>✓ AI Integration</StaggerItem>
 *   <StaggerItem>✓ SEO Optimized</StaggerItem>
 * </StaggerChildren>
 * ```
 */
function StaggerChildren({
  children,
  className,
  delay = 0,
  staggerDelay = 0.1,
  once = true,
  threshold = 0.1,
}: StaggerChildrenProps) {
  const [ref, inView] = useInView({ triggerOnce: once, threshold });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants(staggerDelay, delay)}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}

StaggerChildren.displayName = "StaggerChildren";

export { StaggerChildren, StaggerItem };
