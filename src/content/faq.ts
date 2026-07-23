// ─────────────────────────────────────────────
// CoreByte Studios — FAQ Content
// Source: FAQ.md (6 questions) / Content Strategy.md
// Tone: Professional, Friendly, Confident, Simple (Brand Personality.md)
// ─────────────────────────────────────────────

import type { FAQItem } from "@/types/content";

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: "faq-cost",
    question: "How much does a website cost?",
    answer:
      "Every project is different, so pricing depends on scope, complexity, and timeline. A straightforward marketing website typically starts from a few hundred dollars, while complex web applications vary significantly. We provide a detailed, transparent quote after our free discovery call — no surprises.",
  },
  {
    id: "faq-timeline",
    question: "How long does development take?",
    answer:
      "A standard website takes between 2–4 weeks from design to launch. More complex applications can take 6–12 weeks depending on features and integrations. We always share a clear timeline upfront so you know exactly what to expect.",
  },
  {
    id: "faq-hosting",
    question: "Do you provide hosting?",
    answer:
      "We recommend and help set up hosting on Vercel, the best platform for Next.js applications. It's fast, reliable, and scales automatically. We guide you through the entire process and make sure everything is running smoothly before we hand it over.",
  },
  {
    id: "faq-redesign",
    question: "Can you redesign an existing website?",
    answer:
      "Absolutely. Whether you need a visual refresh, a performance overhaul, or a full rebuild from the ground up, we assess your current site and recommend the most effective approach. We can work with your existing content and migrate everything cleanly.",
  },
  {
    id: "faq-ai",
    question: "Do you build AI-powered applications?",
    answer:
      "Yes — AI integration is one of our core services. We've worked with OpenAI APIs to build chatbots, intelligent automation workflows, content generation tools, and data processing systems. If you have an idea that involves AI, let's talk.",
  },
  {
    id: "faq-support",
    question: "Do you offer ongoing support?",
    answer:
      "Yes. We believe in long-term relationships, not one-off deliveries. We offer maintenance, updates, and support packages so your site stays fast, secure, and up to date. Think of us as your dedicated technical partner.",
  },
];
