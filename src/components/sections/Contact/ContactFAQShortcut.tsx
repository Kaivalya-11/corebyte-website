"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight01Icon } from "hugeicons-react";
import { GlassCard } from "@/components/ui/GlassCard";

export function ContactFAQShortcut() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2 }}
      className="mt-8"
    >
      <Link href="/#faq">
        <GlassCard hover className="p-6 border-white/5 bg-white/[0.02] flex items-center justify-between group cursor-pointer">
          <div>
            <h4 className="text-base font-heading font-bold text-white mb-1">
              Still have questions?
            </h4>
            <p className="text-sm text-white/60 font-body">
              Browse our frequently asked questions.
            </p>
          </div>
          <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-primary/20 group-hover:border-primary/50 transition-colors">
            <ArrowRight01Icon className="w-4 h-4 text-white group-hover:text-primary transition-colors group-hover:translate-x-0.5" />
          </div>
        </GlassCard>
      </Link>
    </motion.div>
  );
}
