"use client";
import { motion } from "motion/react";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

interface PropsInterface {
  children: React.ReactNode;
  href: string;
  className?: string;
}

export const PrimaryShinyButton = ({
  children,
  href,
  className,
}: PropsInterface) => {
  return (
    <Link href={href}>
      <motion.button
        initial={{ "--x": "100%", scale: 1 }}
        animate={{ "--x": "-100%" }}
        whileTap={{ scale: 0.97 }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          repeatDelay: 1,
          type: "spring",
          stiffness: 20,
          damping: 15,
          mass: 2,
          scale: {
            type: "spring",
            stiffness: 10,
            damping: 5,
            mass: 0.1,
          },
        }}
        className={twMerge(
          "relative rounded-xl radial-gradient group py-4 w-full md:w-fit",
          className
        )}
      >
        <span className="relative linear-mask text-2xl 2xl:text-6xl text-white">
          {children}
        </span>
        <span className="block absolute inset-0 rounded-xl p-1 linear-overlay" />
      </motion.button>
    </Link>
  );
};

export const SecondaryShinyButton = ({
  children,
  href,
  className,
}: PropsInterface) => {
  return (
    <Link href={href}>
      <motion.button
        initial={{ "--x": "100%", scale: 1 }}
        animate={{ "--x": "-100%" }}
        whileTap={{ scale: 0.97 }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          repeatDelay: 1,
          type: "spring",
          stiffness: 20,
          damping: 15,
          mass: 2,
          scale: {
            type: "spring",
            stiffness: 10,
            damping: 5,
            mass: 0.1,
          },
        }}
        className={twMerge("rounded-xl relative radial-gradient2", className)}
      >
        <span className="h-full w-full md:w-fit block relative linear-mask">
          {children}
        </span>
        <span className="block absolute inset-0 rounded-xl p-1 linear-overlay" />
      </motion.button>
    </Link>
  );
};
