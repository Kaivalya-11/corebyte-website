// ─────────────────────────────────────────────
// CoreByte Studios — Hero Content
// Source: Hero 1.0 Art Direction Specification
// ─────────────────────────────────────────────

import type { HeroContent } from "@/types/content";

export const HERO_CONTENT: HeroContent = {
  badge: "Modern Software Studio · Design. Develop. Scale.",

  headline: {
    line1: "Transforming Ideas",
    line2: "Into Digital Reality",
  },

  description:
    "We design, develop, and scale modern websites, custom web applications, and AI-powered digital solutions that help businesses grow faster.",

  cta: {
    primary: "Start Your Project",
    secondary: "View Our Work",
  },

  trustIndicators: [
    "Responsive Design",
    "AI Integration",
    "SEO Optimized",
    "Modern Architecture",
  ],

  workspace: {
    url: "https://corebyte.studios",
    activeTab: "app/page.tsx",
    inactiveTabs: ["next.config.ts"],
    statusBadge: "BUILD PASSING",
    codeComment: "// Precision Digital Craftsmanship",
    codeEntries: [
      { key: "name", value: '"CoreByte Studios"', color: "success" },
      { key: "motto", value: '"Design. Develop. Scale."', color: "success" },
      { key: "promise", value: '"Ideas → Digital Reality"', color: "success" },
      { key: "quality", value: '"Zero Compromise"', color: "primary" },
    ],
    footerLeft: "Next.js 15 · TypeScript",
    footerRight: "AI Engine Active",
  },

  widgets: [
    {
      id: "ai",
      icon: "Sparkles",
      label: "AI Integration",
      detail: "OpenAI Pipeline Active",
      color: "primary",
    },
    {
      id: "performance",
      icon: "Zap",
      label: "100/100 Lighthouse",
      detail: "Speed Index 0.4s",
      color: "success",
    },
    {
      id: "security",
      icon: "ShieldCheck",
      label: "Zero-Trust Security",
      detail: "256-bit SSL Encrypted",
      color: "text",
    },
    {
      id: "deploy",
      icon: "Rocket",
      label: "CI/CD Vercel Deploy",
      detail: "Auto Build Passed",
      color: "secondary",
    },
  ],
};
