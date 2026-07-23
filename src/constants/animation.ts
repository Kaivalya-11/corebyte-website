// ─────────────────────────────────────────────
// CoreByte Studios — Framer Motion Variant Presets
//
// Guidelines (Animation Guidelines.md):
//   • Fast: 200ms  • Medium: 300ms  • Slow: 500ms
//   • Principles: Smooth, Natural, Fast, Minimal
//   • Range: 250ms–600ms
//
// All variants include a `reducedMotion` counterpart.
// Components should check useReducedMotion() and swap accordingly.
// ─────────────────────────────────────────────

import type { Variants } from "framer-motion";

// ── Fade Up ──────────────────────────────────
// Use: cards, section headings, content blocks
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export const fadeUpReduced: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.2 } },
};

// ── Fade In ───────────────────────────────────
// Use: page-level transitions, overlays
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

// ── Stagger Container ─────────────────────────
// Use: wraps lists of staggered children
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

// ── Stagger Child ─────────────────────────────
// Use: direct children of staggerContainer
export const staggerChild: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

// ── Scale In ──────────────────────────────────
// Use: badges, icons, modals
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

// ── Slide In Left ─────────────────────────────
// Use: mobile menu, side drawers
export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -24 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

// ── Slide In Right ────────────────────────────
// Use: hero visual panel
export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 24 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

// ── Hover Lift ────────────────────────────────
// Use: directly in `whileHover` on card motion wrappers
export const hoverLift = {
  y: -6,
  transition: { duration: 0.2, ease: "easeOut" },
};

// ── Button Press ──────────────────────────────
// Use: `whileTap` on buttons
export const buttonTap = {
  scale: 0.98,
  transition: { duration: 0.1 },
};

// ── Animation Duration constants (ms) ─────────
export const DURATION = {
  fast: 0.2,
  medium: 0.3,
  slow: 0.5,
} as const;

// ── Easing presets ────────────────────────────
export const EASE = {
  smooth: [0.25, 0.46, 0.45, 0.94] as const,
  out: "easeOut" as const,
  inOut: "easeInOut" as const,
} as const;
