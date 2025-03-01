"use client";
import Link from "next/link";
import { cva, VariantProps } from "class-variance-authority";
import { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";
import { motion, HTMLMotionProps } from "motion/react";
import { twMerge } from "tailwind-merge";

type ButtonBaseProps = VariantProps<typeof buttonClasses> & {
  children: React.ReactNode;
};

interface ButtonAsAnchorProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
}

interface ButtonAsButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  href?: never;
}

type ButtonProps = ButtonBaseProps &
  (ButtonAsAnchorProps | ButtonAsButtonProps);

const buttonClasses = cva("relative rounded-3xl capitalize outline-none", {
  variants: {
    variant: {
      primary: [""],
      secondary: [
        "bg-opacity-10 border border-transparent-white backdrop-filter-[12px] hover:bg-opacity-20 transition-colors ease-in",
      ],
    },
    size: {
      small: "text-xs px-3 h-7",
      medium: "text-md px-8 h-12",
      large: "text-2xl px-40 py-6",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "medium",
  },
});

export const Button = ({ children, variant, size, ...props }: ButtonProps) => {
  const classes = buttonClasses({ variant, size, className: props.className });

  if ("href" in props && props.href !== undefined) {
    return (
      <Link {...props} className={twMerge(classes, "radial-gradient")}>
        <motion.span
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
          }}
          className="linear-mask"
        ></motion.span>
        {children}
      </Link>
    );
  }

  return (
    // <motion.button
    //   initial={{ "--x": "100%", scale: 1 }}
    //   animate={{ "--x": "-100%" }}
    //   whileTap={{ scale: 0.97 }}
    //   transition={{
    //     repeat: Infinity,
    //     repeatType: "loop",
    //     repeatDelay: 1,
    //     type: "spring",
    //     stiffness: 20,
    //     damping: 15,
    //     mass: 2,
    //   }}
    //   {...(props as HTMLMotionProps<"button">)}
    //   className={classes}
    // >
    //   {children}
    // </motion.button>

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
      {...(props as HTMLMotionProps<"button">)}
      className={twMerge(
        classes,
        "px-6 py-2 rounded-md relative radial-gradient"
      )}
    >
      <span className="linear-mask text-neutral-100 tracking-wide font-light h-full w-full block relative linear-mask">
        {children}
      </span>
      <span className="block absolute inset-0 rounded-md p-px linear-overlay" />
    </motion.button>
  );
};

{
  /* <motion.button
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
  className="px-6 py-2 rounded-md relative radial-gradient"
>
  <span className="text-neutral-100 h-full w-full block relative linear-mask">
    Start now
  </span>
  <span className="block absolute inset-0 rounded-md p-px linear-overlay" />
</motion.button>; */
}
