// ─────────────────────────────────────────────
// CoreByte Studios — Services Content
// Source: Services.md / Homepage Blueprint.md Section 04
// ─────────────────────────────────────────────

import type { Service } from "@/types/content";

export const SERVICES: Service[] = [
  {
    id: "web-development",
    title: "Web Development",
    description:
      "High-performance websites and web applications built with modern technologies. From marketing sites to complex platforms, engineered for speed, SEO, and scale.",
    icon: "Globe",
    features: [
      "Next.js & React",
      "SEO Optimized",
      "Performance First",
      "Responsive Design",
    ],
  },
  {
    id: "custom-applications",
    title: "Custom Applications",
    description:
      "Bespoke software solutions tailored to your business logic. We build the tools your team actually needs — clean, maintainable, and built to grow with you.",
    icon: "LayoutDashboard",
    features: [
      "Full-Stack Development",
      "Database Architecture",
      "API Integration",
      "Scalable Systems",
    ],
  },
  {
    id: "ui-ux-design",
    title: "UI/UX Design",
    description:
      "Thoughtful design that converts visitors into clients. We craft interfaces that feel intuitive, look premium, and communicate your brand with clarity.",
    icon: "Palette",
    features: [
      "User Research",
      "Wireframing",
      "Design Systems",
      "Figma Prototypes",
    ],
  },
  {
    id: "ai-solutions",
    title: "AI Solutions",
    description:
      "Integrate the power of artificial intelligence into your product. From chatbots to intelligent automation, we make AI accessible and practical for your business.",
    icon: "Sparkles",
    features: [
      "OpenAI Integration",
      "Custom AI Workflows",
      "Intelligent Automation",
      "Data Processing",
    ],
  },
];
