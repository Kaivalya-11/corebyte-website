// ─────────────────────────────────────────────
// CoreByte Studios — Portfolio Content
// Source: Portfolio.md / Homepage Blueprint.md Section 05
// ─────────────────────────────────────────────
// NOTE: image paths will 404 until Sprint 3 supplies screenshots.
// isCta card is intentional — renders as the "Your project could be next"
// placeholder card per the wireframe spec.
// ─────────────────────────────────────────────

import type { PortfolioProject } from "@/types/content";

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: "personal-portfolio",
    title: "Personal Portfolio",
    description:
      "A sleek, animated developer portfolio built with Next.js and Framer Motion. Designed to make a lasting first impression and showcase projects with clarity.",
    tags: ["Next.js", "TypeScript", "Framer Motion", "Tailwind CSS"],
    status: "live",
    image: "/images/portfolio/personal-portfolio.png",
    liveUrl: "#",
    githubUrl: null,
  },
  {
    id: "siddhi-vinayak-events",
    title: "SiddhiVinayak Events",
    description:
      "A full-featured event management website for a premium events company. Built with rich animations, a gallery system, and an integrated inquiry form.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js"],
    status: "in-development",
    image: "/images/portfolio/siddhi-vinayak-events.png",
    liveUrl: null,
    githubUrl: null,
  },
  {
    id: "your-project",
    title: "Your Project Could Be Next",
    description:
      "Have an idea? We'd love to hear it. Let's build something amazing together.",
    tags: [],
    status: "cta",
    image: null,
    liveUrl: null,
    githubUrl: null,
    isCta: true,
  },
];
