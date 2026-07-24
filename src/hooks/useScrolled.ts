// ─────────────────────────────────────────────
// CoreByte Studios — useScrolled Hook
//
// Returns true once the page has scrolled past
// a pixel threshold. Used by the Navbar to toggle
// between transparent and glassmorphism states.
// ─────────────────────────────────────────────

"use client";

import { useState, useEffect } from "react";

/**
 * Detects whether the page has scrolled past a threshold.
 *
 * @param threshold - Pixel distance from the top (default 20px)
 * @returns `true` when `window.scrollY > threshold`
 *
 * @example
 * ```tsx
 * const scrolled = useScrolled(20);
 * // scrolled === true when user has scrolled > 20px
 * ```
 */
export function useScrolled(threshold = 20): boolean {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > threshold);
    };

    // Check initial state (page may already be scrolled on mount)
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  return scrolled;
}
