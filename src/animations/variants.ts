import type { Variants } from "framer-motion";

// ─────────────────────────────────────────────────────────────
// CoreByte Studios — Motion System (Sprint 6.2)
//
// Principles: Smooth, Fast, Purposeful, Consistent.
// ─────────────────────────────────────────────────────────────

export const DURATION = {
  fast: 0.2,   // 200ms
  normal: 0.3, // 300ms
  slow: 0.5,   // 500ms
} as const;

export const EASE = {
  smooth: [0.25, 0.46, 0.45, 0.94] as const,
  out: "easeOut" as const,
} as const;

// ── Shared Transitions ───────────────────────────────────────
const transitionSmooth = { duration: DURATION.slow, ease: EASE.smooth };
const transitionFast = { duration: DURATION.fast, ease: EASE.out };

// ── Fade Up ──────────────────────────────────────────────────
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: transitionSmooth },
};
export const fadeUpReduced: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: transitionFast },
};

// ── Fade Down ────────────────────────────────────────────────
export const fadeDown: Variants = {
  hidden: { opacity: 0, y: -24 },
  visible: { opacity: 1, y: 0, transition: transitionSmooth },
};
export const fadeDownReduced: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: transitionFast },
};

// ── Fade Left ────────────────────────────────────────────────
export const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -24 },
  visible: { opacity: 1, x: 0, transition: transitionSmooth },
};
export const fadeLeftReduced: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: transitionFast },
};

// ── Fade Right ───────────────────────────────────────────────
export const fadeRight: Variants = {
  hidden: { opacity: 0, x: 24 },
  visible: { opacity: 1, x: 0, transition: transitionSmooth },
};
export const fadeRightReduced: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: transitionFast },
};

// ── Scale In ─────────────────────────────────────────────────
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: DURATION.normal, ease: EASE.out } },
};
export const scaleInReduced: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: transitionFast },
};

// ── Reveal (Fade in place) ───────────────────────────────────
export const reveal: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: DURATION.normal, ease: EASE.out } },
};
export const revealReduced: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: transitionFast },
};

// ── Stagger Container ────────────────────────────────────────
export const staggerContainer = (staggerDelay = 0.1, delay = 0): Variants => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren: staggerDelay,
      delayChildren: delay,
    },
  },
});

// ── Stagger Item ─────────────────────────────────────────────
export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: transitionSmooth },
};
export const staggerItemReduced: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: transitionFast },
};
