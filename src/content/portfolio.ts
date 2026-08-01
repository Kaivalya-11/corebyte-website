import type { PortfolioProject } from "@/types/content";

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: "jarvis-ai",
    title: "Jarvis AI",
    category: "AI Desktop Assistant",
    description: "A next-generation AI desktop assistant focused on intelligent automation, voice interaction, local execution, and productivity workflows.",
    overview: "Jarvis AI is a comprehensive local desktop assistant designed to seamlessly integrate with your operating system. It focuses on offline capabilities, utilizing local LLMs for privacy and speed, while exposing robust voice interaction and custom macro automation tailored for power users.",
    features: [
      "Local LLM execution for absolute privacy",
      "Seamless voice-to-text and intent recognition",
      "Customizable productivity workflows and macros",
      "Cross-platform OS integration"
    ],
    techStack: ["Electron", "React", "Python", "OpenAI"],
    image: "/images/portfolio/jarvis-ai.jpg",
    colSpan: "featured",
    status: "In Development",
    liveUrl: "",
    githubUrl: "", // No public repo yet
    primaryAction: "Coming Soon",
    secondaryAction: "View Details",
  },
  {
    id: "wavex",
    title: "Wavex Music Streaming Platform",
    category: "Music Streaming",
    description: "A modern music streaming platform featuring seamless playback, playlist management, responsive design, and an immersive listening experience built with the MERN stack.",
    overview: "Wavex is a high-performance web-based music streaming service designed to compete with industry leaders. It features gapless playback, intelligent playlist generation algorithms, and an ultra-responsive UI crafted with Tailwind CSS and Framer Motion.",
    features: [
      "Gapless audio playback with custom audio engine",
      "Intelligent playlist generation",
      "Real-time user synchronization",
      "Highly responsive mobile-first UI"
    ],
    techStack: ["MongoDB", "Express", "React", "Node.js"],
    image: "/images/portfolio/wavex.jpg",
    colSpan: "half",
    status: "Beta",
    liveUrl: "https://wavex-mocha.vercel.app/",
    githubUrl: "https://github.com/Kaivalya/wavex", // Assuming standard URL format for placeholder
    primaryAction: "Live Demo",
    secondaryAction: "View Details",
  },
  {
    id: "personal-portfolio",
    title: "Personal Portfolio",
    category: "Web Portfolio",
    description: "My personal portfolio showcasing premium UI/UX, frontend engineering, responsive design, and modern web animations.",
    overview: "A premium digital resume and showcase built to demonstrate absolute mastery over modern frontend web technologies. Focuses on meticulously crafted micro-interactions, flawless responsive design, and an immersive user experience.",
    features: [
      "Complex Framer Motion orchestrated animations",
      "Dynamic data-driven content mapping",
      "Fully responsive Bento grid layouts",
      "Optimized for 100/100 Lighthouse performance"
    ],
    techStack: ["Next.js", "Tailwind CSS", "Framer Motion"],
    image: "/images/portfolio/personal-portfolio.jpg",
    colSpan: "half",
    status: "Live",
    liveUrl: "https://my-portfolio-eight-topaz-41.vercel.app/",
    githubUrl: "https://github.com/Kaivalya/portfolio",
    primaryAction: "Live Demo",
    secondaryAction: "View Details",
  },
  {
    id: "aura-commerce",
    title: "Aura Commerce",
    category: "Headless Storefront",
    description: "An e-commerce website built during my first year of engineering. A complete redesign is planned as part of CoreByte Studios.",
    overview: "Aura Commerce represents early explorations into headless architecture and digital storefronts. While currently marked as legacy, it serves as the foundational blueprint for CoreByte Studios' upcoming enterprise-grade e-commerce solutions.",
    features: [
      "Headless Shopify Plus integration",
      "Static site generation for lightning-fast loads",
      "Custom cart and checkout flows",
      "Framer Motion page transitions"
    ],
    techStack: ["Shopify Plus", "Next.js", "Framer Motion"],
    image: "/images/portfolio/aura.png",
    colSpan: "half",
    status: "Legacy Project",
    liveUrl: "",
    githubUrl: "",
    primaryAction: "Coming Soon",
    secondaryAction: "View Details",
  },
];
