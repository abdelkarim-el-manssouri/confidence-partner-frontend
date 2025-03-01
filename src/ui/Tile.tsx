"use client";
import { motion } from "motion/react";
const Tile = () => {
  return (
    <motion.div
      whileHover={{
        zIndex: 1,
        backgroundColor: "#EBF29C",
      }}
      transition={{
        duration: 2,
        ease: "easeOut",
      }}
      className="aspect-square"
    />
  );
};

export default Tile;
