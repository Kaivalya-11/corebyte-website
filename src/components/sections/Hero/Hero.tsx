import {
  ArrowRight,
  Check,
  Code2,
  Layers,
  Lock,
  Rocket,
  ShieldCheck,
  Sparkles,
  Terminal,
  Zap,
} from "lucide-react";
import {
  BackgroundGlow,
  BrandMark,
  GridBackground,
  NoiseTexture,
} from "@/components/brand";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { GlassCard } from "@/components/ui/Glasscard";
import { Heading } from "@/components/ui/Heading";

/**
 * Hero Section — Premium Showcase (Sprint 3 Polish)
 *
 * Polished Hero section reflecting CoreByte Studios brand values:
 * Quality First, Engineering Precision, Scalability, and AI Innovation.
 *
 * Background:
 * - Ambient blue-purple background glow
 * - Subtle 32px engineering grid pattern
 * - SVG film grain noise texture
 * - Radial vignette for focal grounding
 *
 * Layout:
 * - Responsive 12-column grid (6 cols Left text, 6 cols Right browser showcase)
 * - Browser mockup serves as dominant visual hero element
 * - 4 floating asymmetrical widgets communicating AI, Performance, Security, & Deployment
 */
export function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-80px)] flex items-center py-20 lg:py-32 bg-bg text-text overflow-hidden">
      {/* ── 1. Reusable Brand Background Stack ────────────────── */}
      <BackgroundGlow position="top-center" intensity="medium" />
      <GridBackground mask="fade-bottom" />
      <NoiseTexture opacity={0.025} />

      {/* Soft Vignette Overlay for Understated Focal Grounding */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,rgba(5,8,22,0.6)_70%,rgba(5,8,22,0.95)_100%)] pointer-events-none -z-10"
      />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* ── 2. Left Column (6 Grid Columns) — Text & CTAs ────── */}
          <div className="lg:col-span-6 flex flex-col items-start gap-6 sm:gap-8 text-left z-10">
            {/* Brand Status Badge */}
            <Badge variant="primary" size="md" className="gap-2.5 py-1.5 px-4">
              <BrandMark size="sm" theme="color" decorative />
              <span>Modern Software Studio · Design. Develop. Scale.</span>
            </Badge>

            {/* Main Headline */}
            <Heading level="h1" variant="display" className="max-w-xl">
              Transforming Ideas <br className="hidden sm:inline" />
              <span className="gradient-text">Into Digital Reality</span>
            </Heading>

            {/* Body Description */}
            <p className="text-text-muted text-lg sm:text-xl leading-relaxed max-w-lg font-body">
              We design, develop, and scale modern websites, custom web applications,
              and AI-powered digital solutions that help businesses grow faster.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto pt-1">
              <Button variant="primary" size="lg" className="group">
                <span>Start Your Project</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="secondary" size="lg">
                View Our Work
              </Button>
            </div>

            {/* Polished Trust Indicators */}
            <div className="pt-6 sm:pt-8 border-t border-white/10 w-full">
              <div className="grid grid-cols-2 sm:flex sm:flex-wrap items-center gap-x-6 gap-y-3 text-xs sm:text-sm text-text-muted font-body">
                <div className="flex items-center gap-2">
                  <div className="p-1 rounded-full bg-primary/15 text-primary">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span>Responsive Design</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="p-1 rounded-full bg-primary/15 text-primary">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span>AI Integration</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="p-1 rounded-full bg-primary/15 text-primary">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span>SEO Optimized</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="p-1 rounded-full bg-primary/15 text-primary">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span>Modern Architecture</span>
                </div>
              </div>
            </div>
          </div>

          {/* ── 3. Right Column (6 Grid Columns) — Product Showcase ── */}
          <div className="lg:col-span-6 relative w-full max-w-xl lg:max-w-none mx-auto z-10 pt-4 lg:pt-0">
            {/* Ambient Card Backlight Halo */}
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-tr from-primary/25 via-secondary/25 to-transparent blur-3xl rounded-3xl -z-10"
            />

            {/* Primary Browser / Workspace Mockup */}
            <GlassCard className="p-0 overflow-hidden border-white/15 shadow-[0_24px_60px_rgba(0,0,0,0.85)]">
              {/* Browser Window Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-surface/90 border-b border-white/10 select-none">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="flex items-center gap-2 px-3.5 py-1 rounded-full bg-black/50 border border-white/10 text-xs text-text-muted font-mono">
                  <Lock className="w-3 h-3 text-success" />
                  <span className="text-text/90">https://corebyte.studios</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-text-muted font-mono">
                  <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
                  <span className="hidden sm:inline">LIVE v1.0</span>
                </div>
              </div>

              {/* IDE Workspace Content */}
              <div className="p-5 sm:p-7 space-y-5 font-mono text-xs sm:text-sm">
                {/* File Tab & Build Status */}
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-primary/15 text-primary border border-primary/20 text-xs font-semibold">
                      <Terminal className="w-3.5 h-3.5" />
                      <span>app/page.tsx</span>
                    </div>
                    <span className="text-text-muted text-xs hidden sm:inline">next.config.ts</span>
                  </div>
                  <Badge variant="success" size="sm" className="font-mono text-[10px] tracking-wider">
                    BUILD PASSING
                  </Badge>
                </div>

                {/* Craftsmanship Code Block */}
                <div className="space-y-1.5 text-text-muted bg-black/60 p-4 sm:p-5 rounded-xl border border-white/10 leading-relaxed overflow-x-auto">
                  <p className="text-secondary/90 font-medium">{"// Precision Digital Craftsmanship"}</p>
                  <p className="text-text">
                    <span className="text-primary font-bold">const</span> studio = &#123;
                  </p>
                  <p className="pl-4">
                    name: <span className="text-success">&quot;CoreByte Studios&quot;</span>,
                  </p>
                  <p className="pl-4">
                    motto: <span className="text-success">&quot;Design. Develop. Scale.&quot;</span>,
                  </p>
                  <p className="pl-4">
                    promise: <span className="text-success">&quot;Ideas → Digital Reality&quot;</span>,
                  </p>
                  <p className="pl-4">
                    quality: <span className="text-primary">&quot;Zero Compromise&quot;</span>,
                  </p>
                  <p className="text-text">&#125;;</p>
                </div>

                {/* Mockup Status Bar */}
                <div className="flex items-center justify-between pt-1 text-xs text-text-muted border-t border-white/5">
                  <div className="flex items-center gap-2">
                    <Code2 className="w-3.5 h-3.5 text-primary" />
                    <span>Next.js 15 · TypeScript</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Layers className="w-3.5 h-3.5 text-secondary" />
                    <span>AI Engine Ready</span>
                  </div>
                </div>
              </div>
            </GlassCard>

            {/* ── 4. Asymmetrical Floating Mini Widgets ───────────────── */}

            {/* Widget 1: AI Engine (Top-Left) */}
            <GlassCard
              hover
              className="absolute -top-5 -left-3 sm:-left-8 p-3 sm:p-3.5 hidden sm:flex items-center gap-3 border-primary/30 shadow-glow/30 bg-surface/95 backdrop-blur-xl transition-transform hover:scale-105 z-20"
            >
              <div className="p-2 rounded-lg bg-primary/10 text-primary border border-primary/20">
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[11px] font-semibold text-text">AI Integration</div>
                <div className="text-[10px] text-text-muted font-body">OpenAI Pipeline Active</div>
              </div>
            </GlassCard>

            {/* Widget 2: Performance Score (Top-Right) */}
            <GlassCard
              hover
              className="absolute -top-6 -right-3 sm:-right-8 p-3 sm:p-3.5 hidden sm:flex items-center gap-3 border-success/30 shadow-glow/30 bg-surface/95 backdrop-blur-xl transition-transform hover:scale-105 z-20"
            >
              <div className="p-2 rounded-lg bg-success/10 text-success border border-success/20">
                <Zap className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[11px] font-semibold text-text">100/100 Lighthouse</div>
                <div className="text-[10px] text-text-muted font-body">Speed Index 0.4s</div>
              </div>
            </GlassCard>

            {/* Widget 3: Security SSL (Bottom-Left) */}
            <GlassCard
              hover
              className="absolute -bottom-6 -left-3 sm:-left-8 p-3 sm:p-3.5 hidden sm:flex items-center gap-3 border-white/20 bg-surface/95 backdrop-blur-xl transition-transform hover:scale-105 z-20"
            >
              <div className="p-2 rounded-lg bg-surface-raised text-text border border-white/10">
                <ShieldCheck className="w-4 h-4 text-success" />
              </div>
              <div>
                <div className="text-[11px] font-semibold text-text">Zero-Trust Security</div>
                <div className="text-[10px] text-text-muted font-body">256-bit SSL Encrypted</div>
              </div>
            </GlassCard>

            {/* Widget 4: Auto-Deployment (Bottom-Right) */}
            <GlassCard
              hover
              className="absolute -bottom-5 -right-3 sm:-right-8 p-3 sm:p-3.5 hidden sm:flex items-center gap-3 border-secondary/30 bg-surface/95 backdrop-blur-xl transition-transform hover:scale-105 z-20"
            >
              <div className="p-2 rounded-lg bg-secondary/10 text-secondary border border-secondary/20">
                <Rocket className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[11px] font-semibold text-text">CI/CD Vercel Deploy</div>
                <div className="text-[10px] text-text-muted font-body">Auto Build Passed</div>
              </div>
            </GlassCard>
          </div>
        </div>
      </Container>
    </section>
  );
}
