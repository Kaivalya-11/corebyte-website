import { Badge } from "@/components/ui/Badge";
import { Heading } from "@/components/ui/Heading";
import { StaggerChildren, StaggerItem } from "@/components/animations";
import { cn } from "@/lib/cn";
import type { ReactNode } from "react";

// ─────────────────────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────────────────────

export interface SectionHeaderProps {
  /** Optional eyebrow badge or text rendered above title */
  eyebrow?: string;

  /** Main section title */
  title: string;

  /** Accent text within title rendered with gradient-text styling */
  titleGradient?: string;

  /** Optional section description below title */
  description?: string;

  /** Text alignment preset. @default "center" */
  align?: "left" | "center";

  /** Custom container class override */
  className?: string;

  /** Optional action element on the right (e.g. "View All" link) when align="left" */
  action?: ReactNode;
}

// ─────────────────────────────────────────────────────────────
// Component
// ─────────────────────────────────────────────────────────────

/**
 * SectionHeader — reusable header primitive for homepage and subpage sections.
 *
 * Enforces visual consistency across section titles with built-in
 * scroll animation (`FadeUp`), brand typography rules, and responsive alignment.
 *
 * Spacing / Hierarchy (matching diagram):
 * 1. Badge (CAPABILITIES) - Centered
 * 2. Heading (What We Build) - Centered & text-balanced
 * 3. Subtitle (Modern digital solutions...) - Centered & text-balanced (no widows)
 * 4. 48-64px bottom margin to cards grid
 */
function SectionHeader({
  eyebrow,
  title,
  titleGradient,
  description,
  align = "center",
  className,
  action,
}: SectionHeaderProps) {
  const isCenter = align === "center";

  return (
    <StaggerChildren
      staggerDelay={0.1}
      className={cn(
        "flex flex-col mb-12 lg:mb-16 w-full",
        isCenter ? "items-center text-center mx-auto max-w-2xl" : "items-start text-left max-w-xl",
        className
      )}
    >
      {/* 1. Badge (Centered) */}
      {eyebrow && (
        <StaggerItem className={cn("mb-3 flex w-full", isCenter ? "justify-center" : "justify-start")}>
          <Badge variant="primary" size="sm" className="px-3.5 py-1 text-xs font-semibold tracking-wider uppercase">
            {eyebrow}
          </Badge>
        </StaggerItem>
      )}

      {/* 2 & 3. Heading + Subtitle Block */}
      <div
        className={cn(
          "w-full flex flex-col",
          isCenter ? "items-center text-center justify-center" : "items-start text-left",
          !isCenter && action && "sm:flex-row sm:items-end justify-between"
        )}
      >
        <div className={cn("w-full flex flex-col", isCenter && "items-center text-center justify-center")}>
          {/* Heading (What We Build) */}
          <StaggerItem className="w-full">
            <Heading
              level="h2"
              variant="section"
              align={align}
              className={cn("w-full text-balance", isCenter && "text-center mx-auto")}
            >
              {title}
              {titleGradient && (
                <>
                  {" "}
                  <span className="gradient-text">{titleGradient}</span>
                </>
              )}
            </Heading>
          </StaggerItem>

          {/* Subtitle (Modern digital solutions...) - max-w-xl + text-balance avoids word widows */}
          {description && (
            <StaggerItem>
              <p
                className={cn(
                  "mt-3 text-text-muted/90 text-base sm:text-lg leading-relaxed font-body max-w-xl text-balance",
                  isCenter ? "text-center mx-auto" : "text-left"
                )}
              >
                {description}
              </p>
            </StaggerItem>
          )}
        </div>

        {!isCenter && action && (
          <StaggerItem className="shrink-0 mt-4 sm:mt-0">
            {action}
          </StaggerItem>
        )}
      </div>
    </StaggerChildren>
  );
}

SectionHeader.displayName = "SectionHeader";

export { SectionHeader };
