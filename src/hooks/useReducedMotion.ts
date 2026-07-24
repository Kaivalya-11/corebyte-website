// ─────────────────────────────────────────────
// CoreByte Studios — useReducedMotion Hook
//
// Centralizes the reduced-motion preference check.
// All animation wrappers import this hook rather than
// depending directly on framer-motion internals.
// ─────────────────────────────────────────────

"use client";

import { useReducedMotion as useFramerReducedMotion } from "framer-motion";

/**
 * Returns `true` when the user has enabled
 * `prefers-reduced-motion: reduce` in their OS settings.
 *
 * Animation wrapper components must check this value and
 * fall back to instant opacity transitions (no movement).
 */
export function useReducedMotion(): boolean {
  return useFramerReducedMotion() ?? false;
}
