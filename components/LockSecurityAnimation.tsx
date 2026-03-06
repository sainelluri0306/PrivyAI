"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const DOC_COUNT = 6;
const ORBIT_RADIUS = 100;
const ease = [0.25, 0.46, 0.45, 0.94];

export function LockSecurityAnimation() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.25 });

  return (
    <div ref={ref} className="relative flex items-center justify-center min-h-[280px] py-12">
      {/* Lock - visible after docs converge */}
      <motion.div
        className="absolute z-20 flex items-center justify-center"
        initial={{ scale: 0.85, opacity: 0 }}
        animate={
          isInView
            ? {
                scale: 1,
                opacity: 1,
                transition: { delay: 0.9, duration: 0.5, ease },
              }
            : {}
        }
      >
        <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500/90 to-cyan-500/90 flex items-center justify-center shadow-lg border border-emerald-400/30 ring-4 ring-emerald-500/20">
          <svg
            className="w-8 h-8 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
          </svg>
        </div>
      </motion.div>

      {/* Documents - single ring, move in and fade */}
      {Array.from({ length: DOC_COUNT }).map((_, i) => {
        const angle = (i / DOC_COUNT) * Math.PI * 2 - Math.PI / 2;
        const x = Math.cos(angle) * ORBIT_RADIUS;
        const y = Math.sin(angle) * ORBIT_RADIUS;

        return (
          <motion.div
            key={i}
            className="absolute z-10 w-9 h-11 rounded-lg bg-gradient-to-b from-zinc-600 to-zinc-700 border border-white/10 flex items-center justify-center text-[7px] text-zinc-400"
            initial={{ x: 0, y: 0, opacity: 0 }}
            animate={
              isInView
                ? {
                    x: [x, x * 0.4, 0],
                    y: [y, y * 0.4, 0],
                    scale: [1, 0.6, 0],
                    opacity: [0.9, 0.6, 0],
                    transition: {
                      duration: 1.1,
                      times: [0, 0.5, 1],
                      ease,
                      delay: i * 0.04,
                    },
                  }
                : {}
            }
          >
            PDF
          </motion.div>
        );
      })}
    </div>
  );
}
