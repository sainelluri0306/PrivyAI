"use client";

import { motion } from "framer-motion";

type Props = {
  children: React.ReactNode;
  href?: string;
  primary?: boolean;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
};

export function CTAButton({
  children,
  href,
  primary = true,
  className = "",
  onClick,
  type = "button",
  disabled = false,
}: Props) {
  const wrapperClass =
    "relative inline-flex rounded-xl p-[2px] " +
    (primary
      ? "bg-gradient-to-r from-violet-500 via-blue-500 to-cyan-500 bg-[length:200%_100%] animate-gradient-border"
      : "");

  const innerClass =
    "relative flex items-center justify-center font-semibold rounded-[10px] transition-all duration-300 " +
    (primary
      ? "px-8 py-4 bg-[#05050a] text-white hover:text-white hover:shadow-[0_0_30px_rgba(139,92,246,0.4)] hover:bg-white/5"
      : "px-8 py-4 glass text-white hover:bg-white/10 hover:border-white/20 ") +
    " " +
    className;

  if (href) {
    return (
      <a href={href} className={wrapperClass}>
        <motion.span
          className={innerClass}
          whileHover={primary ? { boxShadow: "0 0 40px rgba(139, 92, 246, 0.35)" } : undefined}
          whileTap={{ scale: 0.98 }}
          transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          {children}
        </motion.span>
      </a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={wrapperClass}
      disabled={disabled}
      whileTap={{ scale: 0.99 }}
    >
      <motion.span
        className={innerClass}
        whileHover={primary ? { boxShadow: "0 0 40px rgba(139, 92, 246, 0.35)" } : undefined}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
      >
        {children}
      </motion.span>
    </motion.button>
  );
}
