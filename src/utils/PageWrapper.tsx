"use client";
import { motion } from "motion/react";
const PageWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      variants={PageTransitionVariants}
      initial="initial"
      animate="animate"
    >
      {children}
    </motion.div>
  );
};

export default PageWrapper;

const PageTransitionVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: [0.76, 0, 0.24, 1],
    },
  },
};
