// ─────────────────────────────────────────────
// CoreByte Studios — Site Configuration
// Runtime metadata used by Next.js metadata exports and OG tags.
// ─────────────────────────────────────────────

export const SITE_CONFIG = {
  name: "CoreByte Studios",
  tagline: "Transforming Ideas Into Digital Reality",
  description:
    "CoreByte Studios is a modern software agency building premium websites, web applications, AI solutions, and digital experiences for startups and businesses.",
  url: "https://corebytestudios.com",
  contactEmail: "hello@corebytestudios.com",
  ogImage: "/og-image.png",
  twitterHandle: "@corebyteStudios",
} as const;

export type SiteConfig = typeof SITE_CONFIG;
