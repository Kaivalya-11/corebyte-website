"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { GlassCard } from "@/components/ui/GlassCard";

export function AboutPhilosophy() {
  return (
    <section className="relative py-16 lg:py-24">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Column: Editorial Statement */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white leading-tight">
              &ldquo;We don&apos;t simply develop software.<br />
              <span className="gradient-text">We build digital products people enjoy using.</span>&rdquo;
            </h2>
          </motion.div>

          {/* Right Column: Supporting Paragraphs */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-6"
          >
            <GlassCard className="p-8 border-white/5 bg-surface/30">
              <div className="space-y-6 text-white/80 font-body text-base md:text-lg leading-relaxed">
                <p>
                  At CoreByte Studios, we refuse to treat software development as a pure assembly line. We embrace <strong className="text-white">Design-first thinking</strong> because user interfaces solve problems before the first line of code is written.
                </p>
                <p>
                  We prioritize <strong className="text-white">Engineering quality</strong> and <strong className="text-white">Long-term maintainability</strong> over rushing to market with fragile technical debt. We believe in building foundations that can evolve.
                </p>
                <p>
                  Every product we release is audited for <strong className="text-white">Performance</strong>, ensuring lightning-fast load times, and <strong className="text-white">Accessibility</strong>, ensuring inclusivity for all users. Finally, we architect for <strong className="text-white">Scalability</strong>, so when your business grows, your software scales seamlessly alongside it.
                </p>
              </div>
            </GlassCard>
          </motion.div>

        </div>
      </Container>
    </section>
  );
}
