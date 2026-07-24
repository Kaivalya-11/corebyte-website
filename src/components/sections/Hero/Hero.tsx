"use client";

import {
  ArrowRight,
  Check,
  Code2,
  Cpu,
  Lock,
  Rocket,
  ShieldCheck,
  Sparkles,
  Terminal,
  Zap,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import {
  BackgroundGlow,
  BrandMark,
  GridBackground,
  NoiseTexture,
} from "@/components/brand";
import { FadeUp, FloatIn, StaggerChildren, StaggerItem } from "@/components/animations";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { GlassCard } from "@/components/ui/Glasscard";
import { Heading } from "@/components/ui/Heading";
import { HERO_CONTENT } from "@/content/hero";
import type { HeroWidget } from "@/types/content";

// ─────────────────────────────────────────────────────────────
// Icon resolver — maps content string names to Lucide components
// ─────────────────────────────────────────────────────────────

const ICON_MAP: Record<string, LucideIcon> = {
  Sparkles,
  Zap,
  ShieldCheck,
  Rocket,
};

// ─────────────────────────────────────────────────────────────
// Widget position / style configuration
// ─────────────────────────────────────────────────────────────

type WidgetPosition = {
  position: string;
  borderColor: string;
  direction: "left" | "right";
  delay: number;
};

const WIDGET_POSITIONS: Record<string, WidgetPosition> = {
  ai: {
    position: "absolute -top-5 -left-3 sm:-left-8",
    borderColor: "border-primary/30 shadow-glow/30",
    direction: "left",
    delay: 0.7,
  },
  performance: {
    position: "absolute -top-6 -right-3 sm:-right-8",
    borderColor: "border-success/30 shadow-glow/30",
    direction: "right",
    delay: 0.8,
  },
  security: {
    position: "absolute -bottom-6 -left-3 sm:-left-8",
    borderColor: "border-white/20",
    direction: "left",
    delay: 0.9,
  },
  deploy: {
    position: "absolute -bottom-5 -right-3 sm:-right-8",
    borderColor: "border-secondary/30",
    direction: "right",
    delay: 1.0,
  },
};

// ─────────────────────────────────────────────────────────────
// Color class maps for widget theming
// ─────────────────────────────────────────────────────────────

const WIDGET_ICON_BG: Record<HeroWidget["color"], string> = {
  primary: "bg-primary/10 text-primary border border-primary/20",
  success: "bg-success/10 text-success border border-success/20",
  secondary: "bg-secondary/10 text-secondary border border-secondary/20",
  text: "bg-surface-raised text-text border border-white/10",
};

/**
 * CoreByte Studios Hero — Animated Section
 *
 * Designed per the official Hero 1.0 Art Direction specification.
 * Reflects BrandBible.md values: Quality First, Precision Engineering,
 * Client Trust, and Artificial Intelligence Innovation.
 *
 * Background Architecture:
 * 1. Base #050816
 * 2. 32px GridBackground (3% opacity)
 * 3. Radial BackgroundGlow (blue-purple gradient blur) with pulse
 * 4. NoiseTexture SVG film grain (2.5% opacity)
 * 5. Radial Vignette Overlay
 *
 * Animation Choreography (~1.8s total):
 * - Left column: Staggered FadeUp (badge → headline → desc → buttons → trust)
 * - Right column: FloatIn browser mockup from right
 * - Floating widgets: FloatIn from alternating sides with continuous float
 */
export function Hero() {
  const { badge, headline, description, cta, trustIndicators, workspace, widgets } =
    HERO_CONTENT;

  return (
    <section className="relative min-h-[calc(100vh-80px)] flex items-center py-20 lg:py-32 bg-bg text-text overflow-hidden">
      {/* ── 1. Reusable Brand Background Layer Stack ───────────── */}
      <BackgroundGlow position="top-center" intensity="medium" className="glow-pulse" />
      <GridBackground mask="fade-bottom" />
      <NoiseTexture opacity={0.025} />

      {/* Soft Radial Vignette Overlay for Focal Grounding */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,rgba(5,8,22,0.6)_70%,rgba(5,8,22,0.95)_100%)] pointer-events-none -z-10"
      />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* ── 2. Left Column (6 Grid Columns / 50% Desktop Width) ── */}
          <div className="lg:col-span-6 flex flex-col items-start gap-6 sm:gap-8 text-left z-10">
            {/* Brand Motto Status Badge */}
            <FadeUp delay={0}>
              <Badge variant="primary" size="md" className="gap-2.5 py-1.5 px-4">
                <BrandMark size="sm" theme="color" decorative />
                <span>{badge}</span>
              </Badge>
            </FadeUp>

            {/* Space Grotesk Display Headline */}
            <FadeUp delay={0.1}>
              <Heading level="h1" variant="display" className="max-w-xl">
                {headline.line1} <br className="hidden sm:inline" />
                <span className="gradient-text">{headline.line2}</span>
              </Heading>
            </FadeUp>

            {/* Inter Body Large Description */}
            <FadeUp delay={0.2}>
              <p className="text-text-muted text-lg sm:text-xl leading-relaxed max-w-lg font-body">
                {description}
              </p>
            </FadeUp>

            {/* Action CTAs */}
            <FadeUp delay={0.3}>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto pt-1">
                <Button variant="primary" size="lg" className="group">
                  <span>{cta.primary}</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button variant="secondary" size="lg">
                  {cta.secondary}
                </Button>
              </div>
            </FadeUp>

            {/* Polished Trust Guarantee Row */}
            <FadeUp delay={0.4}>
              <div className="pt-6 sm:pt-8 border-t border-white/10 w-full">
                <StaggerChildren
                  staggerDelay={0.08}
                  delay={0.1}
                  className="grid grid-cols-2 sm:flex sm:flex-wrap items-center gap-x-6 gap-y-3 text-xs sm:text-sm text-text-muted font-body"
                >
                  {trustIndicators.map((indicator) => (
                    <StaggerItem key={indicator}>
                      <div className="flex items-center gap-2">
                        <div className="p-1 rounded-full bg-primary/15 text-primary">
                          <Check className="w-3.5 h-3.5" />
                        </div>
                        <span>{indicator}</span>
                      </div>
                    </StaggerItem>
                  ))}
                </StaggerChildren>
              </div>
            </FadeUp>
          </div>

          {/* ── 3. Right Column (6 Grid Columns / 50% Desktop Width) ─ */}
          <div className="lg:col-span-6 relative w-full max-w-xl lg:max-w-none mx-auto z-10 pt-4 lg:pt-0">
            {/* Ambient Card Backlight Halo */}
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-tr from-primary/25 via-secondary/25 to-transparent blur-3xl rounded-3xl -z-10"
            />

            {/* Primary Browser / Workspace Mockup */}
            <FloatIn direction="right" delay={0.2} duration={0.6}>
              <GlassCard className="p-0 overflow-hidden border-white/15 shadow-[0_24px_60px_rgba(0,0,0,0.85)]">
                {/* Browser Header Bar */}
                <div className="flex items-center justify-between px-4 py-3 bg-surface/90 border-b border-white/10 select-none">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>
                  <div className="flex items-center gap-2 px-3.5 py-1 rounded-full bg-black/50 border border-white/10 text-xs text-text-muted font-mono">
                    <Lock className="w-3 h-3 text-success" />
                    <span className="text-text/90">{workspace.url}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-text-muted font-mono">
                    <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
                    <span className="hidden sm:inline">LIVE v1.0</span>
                  </div>
                </div>

                {/* IDE Workspace Main Content */}
                <div className="p-5 sm:p-7 space-y-5 font-mono text-xs sm:text-sm">
                  {/* File Tab Header */}
                  <div className="flex items-center justify-between pb-3 border-b border-white/10">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-primary/15 text-primary border border-primary/20 text-xs font-semibold">
                        <Terminal className="w-3.5 h-3.5" />
                        <span>{workspace.activeTab}</span>
                      </div>
                      {workspace.inactiveTabs.map((tab) => (
                        <span
                          key={tab}
                          className="text-text-muted text-xs hidden sm:inline"
                        >
                          {tab}
                        </span>
                      ))}
                    </div>
                    <Badge
                      variant="success"
                      size="sm"
                      className="font-mono text-[10px] tracking-wider"
                    >
                      {workspace.statusBadge}
                    </Badge>
                  </div>

                  {/* Craftsmanship Syntax Code Block */}
                  <div className="space-y-1.5 text-text-muted bg-black/60 p-4 sm:p-5 rounded-xl border border-white/10 leading-relaxed overflow-x-auto">
                    <p className="text-secondary/90 font-medium">
                      {`{${workspace.codeComment}}`}
                    </p>
                    <p className="text-text">
                      <span className="text-primary font-bold">const</span> studio ={" "}
                      &#123;
                    </p>
                    {workspace.codeEntries.map((entry) => (
                      <p key={entry.key} className="pl-4">
                        {entry.key}:{" "}
                        <span className={`text-${entry.color}`}>{entry.value}</span>,
                      </p>
                    ))}
                    <p className="text-text">&#125;;</p>
                  </div>

                  {/* Status Metrics Bar */}
                  <div className="flex items-center justify-between pt-1 text-xs text-text-muted border-t border-white/5">
                    <div className="flex items-center gap-2">
                      <Code2 className="w-3.5 h-3.5 text-primary" />
                      <span>{workspace.footerLeft}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Cpu className="w-3.5 h-3.5 text-secondary" />
                      <span>{workspace.footerRight}</span>
                    </div>
                  </div>
                </div>
              </GlassCard>
            </FloatIn>

            {/* ── 4. Asymmetrical Floating Mini Widgets ───────────────── */}
            {widgets.map((widget) => {
              const pos = WIDGET_POSITIONS[widget.id];
              if (!pos) return null;
              const IconComponent = ICON_MAP[widget.icon];
              if (!IconComponent) return null;

              return (
                <FloatIn
                  key={widget.id}
                  direction={pos.direction}
                  delay={pos.delay}
                  float
                  className={`${pos.position} hidden sm:block z-20`}
                >
                  <GlassCard
                    hover
                    className={`p-3 sm:p-3.5 flex items-center gap-3 ${pos.borderColor} bg-surface/95 backdrop-blur-xl transition-transform hover:scale-105`}
                  >
                    <div className={`p-2 rounded-lg ${WIDGET_ICON_BG[widget.color]}`}>
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[11px] font-semibold text-text">
                        {widget.label}
                      </div>
                      <div className="text-[10px] text-text-muted font-body">
                        {widget.detail}
                      </div>
                    </div>
                  </GlassCard>
                </FloatIn>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
