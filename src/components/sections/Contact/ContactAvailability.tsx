"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";

export function ContactAvailability() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
    >
      <GlassCard className="p-5 border-white/5 bg-surface/40 flex items-center gap-4">
        <div className="relative flex h-3 w-3 shrink-0">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
        </div>
        <div>
          <h4 className="text-sm font-heading font-bold text-white mb-0.5">
            Available for new projects
          </h4>
          <p className="text-xs text-white/60 font-body">
            Typical response time: Within 24 hours
          </p>
        </div>
      </GlassCard>
    </motion.div>
  );
}
