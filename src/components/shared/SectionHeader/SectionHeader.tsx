import { Badge } from "@/components/ui/Badge";
import { Heading } from "@/components/ui/Heading";
import { FadeUp } from "@/components/animations";
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
 * @example Centered section header (Services, Process, FAQ)
 * ```tsx
 * <SectionHeader
 *   eyebrow="OUR SERVICES"
 *   title="What We Build"
 *   description="Modern digital solutions crafted for businesses of every size."
 * />
 * ```
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
    <FadeUp className={cn("flex flex-col gap-4 mb-12 md:mb-16", isCenter ? "items-center text-center mx-auto max-w-2xl" : "items-start text-left max-w-xl", className)}>
      {eyebrow && (
        <Badge variant="primary" size="sm" className="px-3.5 py-1 text-xs font-semibold tracking-wider uppercase">
          {eyebrow}
        </Badge>
      )}

      <div className={cn("flex flex-col sm:flex-row sm:items-end justify-between w-full gap-4", !isCenter && action && "sm:flex-row sm:items-end")}>
        <div>
          <Heading level="h2" variant="section" align={align}>
            {title}
            {titleGradient && (
              <>
                {" "}
                <span className="gradient-text">{titleGradient}</span>
              </>
            )}
          </Heading>

          {description && (
            <p className="mt-3 text-text-muted text-base sm:text-lg leading-relaxed font-body">
              {description}
            </p>
          )}
        </div>

        {!isCenter && action && <div className="shrink-0">{action}</div>}
      </div>
    </FadeUp>
  );
}

SectionHeader.displayName = "SectionHeader";

export { SectionHeader };
