"use client";

import { motion } from "framer-motion";
import { SectionReveal, SectionRevealItem } from "@/components/ui/SectionReveal";

const exampleQueries = [
  "What methods appear across these papers?",
  "Extract all liability clauses.",
];

const ease = [0.25, 0.46, 0.45, 0.94];

export function SolutionSection() {
  return (
    <section className="py-32 px-6 relative" id="solution">
      <div className="max-w-6xl mx-auto">
        <SectionReveal>
          <SectionRevealItem>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, ease }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-center text-white tracking-tight"
            >
              Drop your documents.
              <br />
              <span className="bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
                Get answers instantly.
              </span>
            </motion.h2>
          </SectionRevealItem>
        </SectionReveal>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.1, ease }}
          className="mt-20"
        >
          <div className="glass-strong rounded-2xl overflow-hidden border border-white/10">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-white/[0.02]">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
              </div>
              <span className="text-xs text-zinc-500 ml-4">PrivyAI</span>
            </div>

            <div className="p-6 flex flex-wrap items-center justify-center gap-6 border-b border-white/5">
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15, duration: 0.4, ease }}
                whileHover={{ y: -2 }}
                className="flex items-center gap-3 px-4 py-3 rounded-xl bg-violet-500/10 border border-violet-500/20"
              >
                <span className="text-2xl">📁</span>
                <span className="text-sm text-zinc-300">Upload folder</span>
              </motion.div>
              <span className="text-zinc-600">→</span>
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.22, duration: 0.4, ease }}
                whileHover={{ y: -2 }}
                className="flex items-center gap-3 px-4 py-3 rounded-xl bg-blue-500/10 border border-blue-500/20"
              >
                <span className="text-2xl">⚡</span>
                <span className="text-sm text-zinc-300">Private analysis</span>
              </motion.div>
              <span className="text-zinc-600">→</span>
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.4, ease }}
                whileHover={{ y: -2 }}
                className="flex items-center gap-3 px-4 py-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20"
              >
                <span className="text-2xl">✨</span>
                <span className="text-sm text-zinc-300">Insights appear</span>
              </motion.div>
            </div>

            <div className="p-6 space-y-4">
              <p className="text-xs text-zinc-500 uppercase tracking-wider">
                Example queries
              </p>
              {exampleQueries.map((q, i) => (
                <motion.div
                  key={q}
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.25 + i * 0.08, duration: 0.4, ease }}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl glass border border-white/5 hover:border-white/10 transition-colors"
                >
                  <div className="w-2 h-2 rounded-full bg-violet-400" />
                  <span className="text-zinc-300 text-sm">{q}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
