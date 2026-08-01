import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { SITE_CONFIG } from "@/config/site";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

// ── Heading Font: Space Grotesk ───────────────────────────
// Use: All headings (h1–h6), display text, section titles
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

// ── Body Font: Inter ──────────────────────────────────────
// Use: Body text, paragraphs, navigation links, captions
const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

// ── Site Metadata ─────────────────────────────────────────
export const viewport = {
  themeColor: "#050505", // Matching bg-bg
};

export const metadata: Metadata = {
  title: {
    default: "CoreByte Studios | Modern Web Development & AI Solutions",
    template: "%s | CoreByte Studios",
  },
  description: SITE_CONFIG.description,
  metadataBase: new URL(SITE_CONFIG.url),
  keywords: [
    "Web Development",
    "Next.js",
    "React",
    "AI Development",
    "Software Agency",
    "UI UX",
    "Portfolio",
    "TypeScript",
    "Node.js",
    "CoreByte Studios",
  ],
  authors: [{ name: "CoreByte Studios", url: SITE_CONFIG.url }],
  creator: "CoreByte Studios",
  publisher: "CoreByte Studios",
  category: "Technology",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", type: "image/png" },
    ],
  },
  openGraph: {
    type: "website",
    siteName: "CoreByte Studios",
    title: "CoreByte Studios",
    description: "Transforming Ideas Into Digital Reality.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "CoreByte Studios",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CoreByte Studios",
    description: "Transforming Ideas Into Digital Reality.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

// ── Root Layout ───────────────────────────────────────────
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-bg text-text">
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:p-4 focus:bg-primary focus:text-white font-body font-bold rounded-br-lg top-0 left-0 outline-none focus:ring-2 focus:ring-white"
        >
          Skip to main content
        </a>
        <Navbar />
        <div className="flex-1">{children}</div>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
