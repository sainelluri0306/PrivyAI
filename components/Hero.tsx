"use client";

import { motion } from "framer-motion";
import { CTAButton } from "@/components/ui/CTAButton";
import { HeroVisual } from "@/components/HeroVisual";

const ease = [0.25, 0.46, 0.45, 0.94];

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-32 relative overflow-hidden">
      {/* Stronger, layered background orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[450px] rounded-full blur-[120px]"
          style={{ background: "radial-gradient(circle, rgba(88, 28, 135, 0.35) 0%, rgba(139, 92, 246, 0.15) 40%, transparent 70%)" }}
        />
        <motion.div
          animate={{ opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] rounded-full blur-[100px]"
          style={{ background: "radial-gradient(circle, rgba(59, 130, 246, 0.25) 0%, transparent 70%)" }}
        />
        <div
          className="absolute top-2/3 left-1/4 w-[300px] h-[300px] rounded-full blur-[90px] opacity-30"
          style={{ background: "radial-gradient(circle, rgba(34, 211, 238, 0.2) 0%, transparent 70%)" }}
        />
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease }}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          <span className="text-xs font-medium uppercase tracking-[0.15em] text-zinc-400">100% on-device · No data leaves your machine</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.08, ease }}
          className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight"
        >
          <span className="bg-gradient-to-r from-white via-violet-200 to-cyan-200 bg-clip-text text-transparent">
            Ask your documents.
          </span>
          <br />
          <span className="text-zinc-400">Nothing leaves your machine.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5, ease }}
          className="mt-8 text-lg text-zinc-500 max-w-md mx-auto font-normal"
        >
          Drop a folder. Ask a question. Get answers from hundreds of papers or contracts in minutes.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.45, ease }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <CTAButton href="#early-access" primary className="!px-8 !py-3.5 text-sm font-medium">
            Join waitlist
          </CTAButton>
          <a
            href="#product-magic"
            className="group flex items-center gap-2 text-sm text-zinc-500 hover:text-white transition-colors"
          >
            See how it works
            <span className="inline-block transition-transform group-hover:translate-y-0.5">↓</span>
          </a>
        </motion.div>
      </div>

      <HeroVisual />
    </section>
  );
}
