"use client";

import { motion } from "framer-motion";

const TODAY = [
  "Open dozens of PDFs",
  "Highlight sections",
  "Take messy notes",
  "Search endlessly",
];

const WITH_PRIVY = [
  "Drop folder",
  "Ask question",
  "Get instant answer",
];

const ease = [0.25, 0.46, 0.45, 0.94];

export function PainSection() {
  return (
    <section className="py-20 md:py-28 px-6 relative" id="pain">
      <div className="max-w-5xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease }}
          className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500 text-center mb-6"
        >
          The problem
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, ease }}
          className="font-display text-3xl sm:text-4xl md:text-5xl text-center text-white tracking-tight"
        >
          Reading documents shouldn&apos;t
          <br />
          <span className="text-zinc-500">take hours.</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: 0.1, ease }}
          className="mt-14 grid md:grid-cols-2 gap-6 md:gap-8"
        >
          {/* LEFT - Today */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5, ease }}
            className="rounded-2xl p-6 md:p-8 border border-red-500/25 bg-red-500/5"
          >
            <p className="text-xs font-semibold uppercase tracking-wider text-red-400/90 mb-4">Today</p>
            <ul className="space-y-3">
              {TODAY.map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.06, duration: 0.4, ease }}
                  className="flex items-center gap-2 text-zinc-400"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400/80" />
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* RIGHT - With PrivyAI */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25, duration: 0.5, ease }}
            className="rounded-2xl p-6 md:p-8 border border-emerald-500/30 bg-emerald-500/5"
          >
            <p className="text-xs font-semibold uppercase tracking-wider text-emerald-400/90 mb-4">With PrivyAI</p>
            <ul className="space-y-3">
              {WITH_PRIVY.map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: 8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.35 + i * 0.06, duration: 0.4, ease }}
                  className="flex items-center gap-2 text-zinc-200"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
