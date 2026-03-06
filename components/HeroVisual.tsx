"use client";

import { motion } from "framer-motion";

export function HeroVisual() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="relative w-full max-w-2xl mx-auto mt-14 md:mt-20 flex justify-center items-center min-h-[220px] md:min-h-[280px]"
    >
      {/* Glow behind the whole visual */}
      <div
        className="absolute inset-0 rounded-full blur-[80px] opacity-40"
        style={{
          background: "radial-gradient(circle, rgba(139, 92, 246, 0.35) 0%, rgba(59, 130, 246, 0.2) 50%, transparent 70%)",
        }}
      />

      {/* Floating document cards */}
      {[
        { delay: 0, x: -80, y: -20, w: "56px", h: "72px", label: "PDF" },
        { delay: 0.15, x: 0, y: -40, w: "64px", h: "80px", label: "Docs" },
        { delay: 0.3, x: 80, y: -20, w: "52px", h: "68px", label: "PDF" },
      ].map((card, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, x: card.x, y: card.y }}
          transition={{ duration: 0.6, delay: 0.6 + card.delay, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="absolute rounded-xl border border-white/15 bg-white/[0.06] backdrop-blur-sm shadow-xl flex flex-col items-center justify-center gap-1"
          style={{ width: card.w, height: card.h }}
        >
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 3 + i * 0.5, repeat: Infinity, ease: "easeInOut" }}
            className="text-[10px] font-medium text-zinc-500 uppercase tracking-wider"
          >
            {card.label}
          </motion.div>
          <div className="w-4 h-0.5 bg-white/10 rounded" />
        </motion.div>
      ))}

      {/* Center: lock + "Private" badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="relative z-10 flex flex-col items-center gap-3"
      >
        <motion.div
          animate={{ boxShadow: ["0 0 30px rgba(139, 92, 246, 0.25)", "0 0 50px rgba(139, 92, 246, 0.4)", "0 0 30px rgba(139, 92, 246, 0.25)"] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-16 h-16 md:w-20 md:h-20 rounded-2xl border border-violet-500/40 bg-gradient-to-br from-violet-500/20 to-blue-500/20 flex items-center justify-center"
        >
          <svg className="w-8 h-8 md:w-10 md:h-10 text-violet-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
          </svg>
        </motion.div>
        <span className="text-xs font-medium uppercase tracking-[0.2em] text-violet-300/90">On-device only</span>
      </motion.div>

      {/* Subtle grid / rays (optional depth) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl" aria-hidden>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-white/[0.03]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] rounded-full border border-white/[0.04]" />
      </div>
    </motion.div>
  );
}
