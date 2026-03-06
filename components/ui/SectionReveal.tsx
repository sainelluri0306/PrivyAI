"use client";

import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const transition = {
  duration: 0.6,
  ease: [0.25, 0.46, 0.45, 0.94],
};

export function SectionReveal({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      initial="initial"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.06,
            delayChildren: 0.08,
          },
        },
      }}
      transition={transition}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function SectionRevealItem({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      variants={fadeUp}
      transition={{ ...transition, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
