"use client";

import { motion } from "framer-motion";
import { SectionReveal, SectionRevealItem } from "@/components/ui/SectionReveal";
import { LockSecurityAnimation } from "@/components/LockSecurityAnimation";

const features = [
  {
    title: "Runs locally",
    desc: "Your data never leaves your machine.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h3.75a3.75 0 003.75-3.75V8.25a3.75 3.75 0 00-3.75-3.75h-3.75z" />
      </svg>
    ),
  },
  {
    title: "No cloud uploads",
    desc: "Nothing is sent to external servers.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    title: "Built for sensitive data",
    desc: "Research, legal, healthcare.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25h-10.5a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
  },
];

const ease = [0.25, 0.46, 0.45, 0.94];

export function PrivacySection() {
  return (
    <section className="py-20 md:py-28 px-6 relative" id="privacy">
      <div className="max-w-6xl mx-auto">
        <SectionReveal>
          <SectionRevealItem>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, ease }}
              className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500 text-center mb-6"
            >
              Privacy
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, ease }}
              className="font-display text-3xl sm:text-4xl md:text-5xl text-center text-white tracking-tight"
            >
              Your documents never
              <br />
              <span className="text-zinc-400">leave your machine.</span>
            </motion.h2>
          </SectionRevealItem>
        </SectionReveal>

        <SectionRevealItem delay={0.1}>
          <LockSecurityAnimation />
        </SectionRevealItem>

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08, ease }}
              whileHover={{ y: -4 }}
              className="glass-strong rounded-2xl p-8 border border-white/10 hover:border-emerald-500/30 group relative overflow-hidden transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative">
                <div className="w-14 h-14 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-400 mb-4">
                  {f.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{f.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
