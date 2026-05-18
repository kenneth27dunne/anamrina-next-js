"use client";

import { motion, useReducedMotion } from "framer-motion";

const presets = {
  fadeUp: { initial: { opacity: 0, y: 36 }, animate: { opacity: 1, y: 0 } },
  slideLeft: { initial: { opacity: 0, x: -40 }, animate: { opacity: 1, x: 0 } },
  slideRight: { initial: { opacity: 0, x: 40 }, animate: { opacity: 1, x: 0 } },
};

const ease = [0.22, 1, 0.36, 1];

export default function ScrollReveal({
  children,
  variant = "fadeUp",
  className,
  style,
  delay = 0,
  amount = 0.45,
}) {
  const reduceMotion = useReducedMotion();
  const preset = presets[variant] ?? presets.fadeUp;

  if (reduceMotion) {
    return (
      <div className={className} style={style}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      className={className}
      style={style}
      initial={preset.initial}
      whileInView={preset.animate}
      viewport={{ once: true, amount, margin: "0px 0px -8% 0px" }}
      transition={{ duration: 0.72, ease, delay }}
    >
      {children}
    </motion.div>
  );
}
