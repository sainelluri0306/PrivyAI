"use client";

import { Fragment } from "react";
import { motion } from "framer-motion";

const steps = [
  { label: "Documents", icon: "📁" },
  { label: "Local AI Engine", icon: "⚡" },
  { label: "Structured Insights", icon: "✨" },
];

const ease = [0.25, 0.46, 0.45, 0.94];

export function ProductFlowSection() {
  return (
    <section className="py-20 md:py-28 px-6 relative" id="how-it-works">
      <div className="max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease }}
          className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500 text-center mb-8"
        >
          Flow
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease }}
          className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-6"
        >
          {steps.map((step, i) => (
            <Fragment key={step.label}>
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.45, ease }}
                className="glass-strong rounded-2xl px-5 py-4 border border-white/10 flex items-center gap-3 md:min-w-[200px] justify-center"
              >
                <span className="text-2xl">{step.icon}</span>
                <span className="text-white font-medium text-base md:text-lg">{step.label}</span>
              </motion.div>
              {i < steps.length - 1 && (
                <span className="text-zinc-500 text-xl hidden md:inline shrink-0">→</span>
              )}
              {i < steps.length - 1 && (
                <span className="text-zinc-500 text-lg md:hidden shrink-0">↓</span>
              )}
            </Fragment>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
