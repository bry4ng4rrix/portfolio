import type { Variants } from "framer-motion";

// Variants framer-motion partagés entre les sections
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export const fadeSide: Variants = {
  hidden: (dir: number) => ({ opacity: 0, x: dir * 32 }),
  show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export const staggerContainer: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};
