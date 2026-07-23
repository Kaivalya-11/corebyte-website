// ─────────────────────────────────────────────
// CoreByte Studios — Shared Component Prop Types
// Types used across multiple components.
// ─────────────────────────────────────────────

import type { ReactNode } from "react";

// ── Common ─────────────────────────────────────

/** Any component that renders children */
export interface WithChildren {
  children: ReactNode;
}

/** Any component that accepts an optional className override */
export interface WithClassName {
  className?: string;
}

/** Combined children + className */
export interface BaseProps extends WithChildren, WithClassName {}

// ── Animation ──────────────────────────────────

/** Controls whether a Framer Motion component is in view */
export type AnimationState = "hidden" | "visible";

/** Shared props for animation wrapper components in components/animations/ */
export interface AnimationProps extends WithChildren, WithClassName {
  /** Delay before the animation starts (in seconds) */
  delay?: number;
  /** Override the animation duration (in seconds) */
  duration?: number;
  /** If true, animation triggers once and does not repeat */
  once?: boolean;
}

// ── Section ────────────────────────────────────

/** Shared props for section-level wrappers */
export interface SectionProps extends WithClassName {
  /** HTML id for anchor navigation */
  id?: string;
  children: ReactNode;
}

// ── Heading ────────────────────────────────────

export type HeadingLevel = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export interface HeadingProps extends WithClassName {
  as?: HeadingLevel;
  children: ReactNode;
}

// ── Button ─────────────────────────────────────

export type ButtonVariant = "primary" | "secondary" | "ghost" | "icon";
export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps extends WithClassName {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: ReactNode;
  disabled?: boolean;
  /** Renders as a Next.js Link when provided */
  href?: string;
  /** Used when href is external */
  external?: boolean;
  onClick?: () => void;
}

// ── Badge ──────────────────────────────────────

export type BadgeVariant = "default" | "primary" | "secondary" | "success" | "warning" | "error";

export interface BadgeProps extends WithClassName {
  variant?: BadgeVariant;
  children: ReactNode;
}
