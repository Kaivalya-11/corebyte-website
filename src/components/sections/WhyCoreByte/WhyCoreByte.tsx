"use client";

import { Shield01Icon, SparklesIcon, FlashIcon, CodeIcon } from "hugeicons-react";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { GlassCard } from "@/components/ui/GlassCard";
import { FloatIn, StaggerChildren, StaggerItem } from "@/components/animations";
import { WHY_COREBYTE } from "@/content";

const ICON_MAP: Record<string, React.ElementType> = {
  Zap: FlashIcon,
  Sparkles: SparklesIcon,
  Shield: Shield01Icon,
  Code: CodeIcon,
};

export function WhyCoreByte() {
  return (
    <section id="why-us" className="relative py-16 lg:py-20 bg-surface/30 border-y border-white/5 overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center">
          
          {/* Left Content Area */}
          <FloatIn direction="left" className="lg:col-span-5 flex flex-col justify-center">
            <div className="mb-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-wider">
              <SparklesIcon className="w-3.5 h-3.5" />
              <span>The CoreByte Advantage</span>
            </div>
            <Heading level="h2" variant="section" className="mb-6">
              Why Partner With Us?
            </Heading>
            <p className="text-text-muted text-base sm:text-lg leading-relaxed font-body mb-8">
              We merge exceptional design with scalable engineering, ensuring your digital products don&apos;t just look great—they perform flawlessly and drive results.
            </p>
            
            {/* Stats row */}
            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-white/10">
              <div>
                <div className="text-3xl font-heading font-bold text-text mb-1">100<span className="text-primary">+</span></div>
                <div className="text-sm text-text-muted">Projects Delivered</div>
              </div>
              <div>
                <div className="text-3xl font-heading font-bold text-text mb-1">5<span className="text-primary">★</span></div>
                <div className="text-sm text-text-muted">Client Satisfaction</div>
              </div>
            </div>
          </FloatIn>

          {/* Right Cards Area */}
          <div className="lg:col-span-7 lg:pl-10">
            <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 gap-6" staggerDelay={0.1}>
              {WHY_COREBYTE.map((item, index) => {
                const IconComponent = ICON_MAP[item.icon] || CodeIcon;
                return (
                  <StaggerItem key={item.id} className={index % 2 === 1 ? "sm:mt-12" : ""}>
                    <GlassCard hover className="p-8 h-full bg-surface/40 hover:bg-surface/60 transition-all duration-300 border-white/10 hover:border-primary/30 hover:-translate-y-1 hover:shadow-glow group">
                      <div className="mb-6 inline-flex p-3 rounded-2xl bg-white/5 border border-white/10 text-text group-hover:bg-primary/20 group-hover:text-primary group-hover:border-primary/30 transition-all duration-300 group-hover:scale-110 group-hover:-rotate-3">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <h3 className="text-xl font-heading font-semibold text-text mb-3">{item.title}</h3>
                      <p className="text-sm text-text-muted font-body leading-relaxed">{item.description}</p>
                    </GlassCard>
                  </StaggerItem>
                );
              })}
            </StaggerChildren>
          </div>
          
        </div>
      </Container>
    </section>
  );
}
