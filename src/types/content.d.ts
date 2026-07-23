// ─────────────────────────────────────────────
// CoreByte Studios — Content Type Definitions
// ─────────────────────────────────────────────

// Navigation

export interface NavLink {
  label: string;
  href: string;
}

// Services

export type ServiceId =
  | "web-development"
  | "custom-applications"
  | "ui-ux-design"
  | "ai-solutions";

export interface Service {
  id: ServiceId;
  title: string;
  description: string;
  /** Lucide icon name — resolved at component level */
  icon: string;
  features: string[];
}

// Portfolio

export type ProjectStatus = "live" | "in-development" | "completed" | "cta";

export interface PortfolioProject {
  id: string;
  title: string;
  description: string;
  tags: string[];
  status: ProjectStatus;
  image: string | null;
  liveUrl: string | null;
  githubUrl: string | null;
  /** When true, card renders as the "Your project could be next" CTA */
  isCta?: boolean;
}

// FAQ

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

// Process

export interface ProcessStep {
  id: string;
  /** Display number e.g. "01" */
  step: string;
  title: string;
  description: string;
}

// Technologies

export interface Technology {
  id: string;
  name: string;
  /** Relative path to logo in /public/icons/tech/ — empty until Sprint 3 */
  icon: string;
}

// Socials

export type SocialPlatform =
  | "github"
  | "linkedin"
  | "instagram"
  | "email";

export interface Social {
  id: SocialPlatform;
  label: string;
  href: string;
  /** Lucide icon name — resolved at component level */
  icon: string;
}
