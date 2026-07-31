// ─────────────────────────────────────────────
// CoreByte Studios — Why CoreByte Content
// Tone: Professional, Confident, Modern
// ─────────────────────────────────────────────

export interface WhyCoreByteItem {
  id: string;
  title: string;
  description: string;
  icon: "Zap" | "Sparkles" | "Shield" | "Code";
}

export const WHY_COREBYTE: WhyCoreByteItem[] = [
  {
    id: "speed",
    title: "Uncompromising Speed",
    description: "We deliver high-quality digital products in weeks, not months. Our streamlined agile process gets your product to market faster without sacrificing quality.",
    icon: "Zap",
  },
  {
    id: "ai-first",
    title: "AI-Powered Innovation",
    description: "We don't just build software, we build intelligent systems. From LLM integrations to intelligent agents, we put your product at the cutting edge.",
    icon: "Sparkles",
  },
  {
    id: "premium",
    title: "Premium Aesthetics",
    description: "First impressions matter. We obsess over typography, motion, and interaction design to ensure your digital presence is truly world-class.",
    icon: "Code",
  },
  {
    id: "reliable",
    title: "Enterprise Reliability",
    description: "Built on robust, scalable cloud infrastructure. Our solutions are designed to handle traffic spikes and grow seamlessly with your business.",
    icon: "Shield",
  },
];
