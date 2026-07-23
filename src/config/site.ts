// ─────────────────────────────────────────────
// CoreByte Studios — Site Configuration
// Runtime metadata used by Next.js metadata exports and OG tags.
// ─────────────────────────────────────────────

export const SITE_CONFIG = {
  name: "CoreByte Studios",
  tagline: "Transforming Ideas Into Digital Reality",
  description:
    "CoreByte Studios is a premium software studio. We design, develop, and scale modern websites, web applications, and AI-powered digital solutions that help businesses grow.",
  url: "https://corebyteStudios.com",
  contactEmail: "hello@corebyteStudios.com",
  ogImage: "/images/og/og-default.png",
  twitterHandle: "@corebyteStudios",
} as const;

export type SiteConfig = typeof SITE_CONFIG;
