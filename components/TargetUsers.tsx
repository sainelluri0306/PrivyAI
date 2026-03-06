"use client";

import { motion } from "framer-motion";

const users = [
  {
    title: "Research",
    bullets: ["Literature reviews in minutes", "Compare hundreds of papers", "Extract methods instantly"],
    gradient: "from-violet-500/20 to-blue-500/10",
    border: "border-violet-500/20 hover:border-violet-500/40",
    icon: "🔬",
  },
  {
    title: "Legal",
    bullets: ["Contracts analyzed locally", "Clause extraction", "Faster review"],
    gradient: "from-blue-500/20 to-cyan-500/10",
    border: "border-blue-500/20 hover:border-blue-500/40",
    icon: "⚖️",
  },
];

const ease = [0.25, 0.46, 0.45, 0.94];

export function TargetUsers() {
  return (
    <section className="py-20 md:py-28 px-6 relative" id="who">
      <div className="max-w-5xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease }}
          className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500 text-center mb-6"
        >
          For teams
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease }}
          className="font-display text-3xl sm:text-4xl text-center text-white tracking-tight mb-12 md:mb-14"
        >
          Built for research & legal
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {users.map((u, i) => (
            <motion.div
              key={u.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08, ease }}
              whileHover={{ y: -4 }}
              className={`glass-strong rounded-2xl p-8 md:p-10 border ${u.border} bg-gradient-to-br ${u.gradient} transition-all duration-300 cursor-default`}
            >
              <span className="text-3xl mb-4 block">{u.icon}</span>
              <h3 className="text-xl font-display-semibold text-white mb-4">{u.title}</h3>
              <ul className="space-y-2">
                {u.bullets.map((b) => (
                  <li key={b} className="flex items-center gap-2 text-zinc-500 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-white/60 shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
