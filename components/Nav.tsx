"use client";

import { motion } from "framer-motion";
import { CTAButton } from "@/components/ui/CTAButton";

const LINKS = [
  { href: "#product-magic", label: "How it works" },
  { href: "#privacy", label: "Privacy" },
  { href: "#who", label: "For teams" },
];

export function Nav() {
  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="fixed top-0 left-0 right-0 z-50 px-4 py-3 md:px-8"
    >
      <div className="glass rounded-2xl px-4 py-2.5 md:px-6 md:py-3 flex items-center justify-between max-w-7xl mx-auto">
        <a href="#" className="font-semibold text-lg tracking-tight text-white hover:opacity-90 transition-opacity">
          PrivyAI
        </a>
        <div className="flex items-center gap-4 md:gap-6">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-zinc-400 hover:text-white transition-colors hidden sm:inline-block"
            >
              {link.label}
            </a>
          ))}
          <CTAButton href="#early-access" primary className="!py-2 !px-4 text-sm font-medium">
            Join waitlist
          </CTAButton>
        </div>
      </div>
    </motion.nav>
  );
}
