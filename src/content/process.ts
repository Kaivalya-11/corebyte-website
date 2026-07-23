// ─────────────────────────────────────────────
// CoreByte Studios — Process Steps Content
// Source: CoreByte Experience.md / Homepage Blueprint.md Section 06
// ─────────────────────────────────────────────

import type { ProcessStep } from "@/types/content";

export const PROCESS_STEPS: ProcessStep[] = [
  {
    id: "step-understand",
    step: "01",
    title: "Understand",
    description:
      "We start by listening. A deep-dive discovery session to understand your goals, audience, and challenges. No assumptions — just clarity.",
  },
  {
    id: "step-strategize",
    step: "02",
    title: "Strategize",
    description:
      "We map out the architecture, technology stack, and roadmap. Every decision is intentional, documented, and aligned with your business objectives.",
  },
  {
    id: "step-design",
    step: "03",
    title: "Design",
    description:
      "Wireframes and high-fidelity designs that reflect your brand. We iterate until the design feels exactly right before we write a line of code.",
  },
  {
    id: "step-develop",
    step: "04",
    title: "Develop",
    description:
      "Clean, maintainable code built on modern technologies. We build in sprints with regular updates so you always know where the project stands.",
  },
  {
    id: "step-launch",
    step: "05",
    title: "Launch",
    description:
      "Rigorous testing, performance optimization, and a smooth deployment to production. We make sure everything is perfect before going live.",
  },
  {
    id: "step-grow",
    step: "06",
    title: "Grow",
    description:
      "Launch is just the beginning. We offer ongoing support, analytics review, and iterative improvements to help your product grow over time.",
  },
];
