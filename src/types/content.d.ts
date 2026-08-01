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
  category: string;
  description: string;
  overview: string;
  features: string[];
  techStack: string[];
  image: string;
  colSpan: "full" | "half" | "featured"; // semantic grid mapping
  status: string;
  liveUrl: string;
  primaryAction: string;
  secondaryAction: string;
  githubUrl?: string;
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

// Hero

export interface HeroWidget {
  id: string;
  /** Lucide icon name — resolved at component level */
  icon: string;
  label: string;
  detail: string;
  /** Color token name for icon/border theming (e.g. "primary", "success") */
  color: "primary" | "success" | "secondary" | "text";
}

export interface HeroWorkspace {
  /** URL shown in the browser chrome address bar */
  url: string;
  /** Active file tab label */
  activeTab: string;
  /** Inactive tab labels */
  inactiveTabs: string[];
  /** Status badge text in tab bar (e.g. "BUILD PASSING") */
  statusBadge: string;
  /** Code comment line at the top of the code block */
  codeComment: string;
  /** Key-value pairs rendered inside the code block object */
  codeEntries: { key: string; value: string; color: "success" | "primary" }[];
  /** Footer items shown below the code block */
  footerLeft: string;
  footerRight: string;
}

export interface HeroContent {
  badge: string;
  headline: {
    line1: string;
    line2: string;
  };
  description: string;
  cta: {
    primary: string;
    secondary: string;
  };
  trustIndicators: string[];
  workspace: HeroWorkspace;
  widgets: HeroWidget[];
}
