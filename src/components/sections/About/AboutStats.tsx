"use client";

import { useEffect, useRef } from "react";
import { motion, useInView, useSpring, useTransform } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { GlassCard } from "@/components/ui/GlassCard";

interface AnimatedNumberProps {
  value: number;
  suffix?: string;
  decimals?: number;
}

function AnimatedNumber({ value, suffix = "", decimals = 0 }: AnimatedNumberProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  // Spring animation for smooth counting
  const springValue = useSpring(0, {
    stiffness: 50,
    damping: 20,
    mass: 1,
  });

  // Start animation when in view
  useEffect(() => {
    if (isInView) {
      springValue.set(value);
    }
  }, [isInView, value, springValue]);

  // Transform raw value into formatted string
  const display = useTransform(springValue, (current) => {
    return current.toFixed(decimals);
  });

  return (
    <span ref={ref} className="font-heading font-bold text-4xl lg:text-5xl text-white">
      <motion.span>{display}</motion.span>
      {suffix}
    </span>
  );
}

const STATS = [
  { value: 100, suffix: "+", label: "Projects Delivered", decimals: 0 },
  { value: 5, suffix: "★", label: "Client Satisfaction", decimals: 0 },
  { value: 24, suffix: "/7", label: "Support & Monitoring", decimals: 0 },
  { value: 99.9, suffix: "%", label: "Uptime Focus", decimals: 1 },
];

export function AboutStats() {
  return (
    <section className="relative py-16 lg:py-24">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {STATS.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <GlassCard className="p-8 text-center border-white/5 bg-gradient-to-br from-white/5 to-transparent flex flex-col gap-2 shadow-glow">
                <AnimatedNumber value={stat.value} suffix={stat.suffix} decimals={stat.decimals} />
                <p className="text-white/60 font-body text-sm uppercase tracking-widest mt-2 font-semibold">
                  {stat.label}
                </p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
