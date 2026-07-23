// ─────────────────────────────────────────────
// CoreByte Studios — Class Name Utility
// Merges Tailwind classes safely using clsx + tailwind-merge.
// Usage: cn("base-class", condition && "conditional-class", props.className)
// ─────────────────────────────────────────────

import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}
