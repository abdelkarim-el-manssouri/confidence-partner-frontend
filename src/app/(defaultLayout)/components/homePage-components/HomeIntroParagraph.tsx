"use client";
import { motion } from "motion/react";

const HomeIntroParagraph = () => {
  return (
    <div className="grid place-content-center px-4 py-24 lg:py-32 2xl:py-40">
      <p className="container text-center text-3xl lg:text-5xl 2xl:text-7xl leading-snug lg:leading-[1.5] 2xl:leading-snug text-pretty font-medium">
        Chez Confidence Partner Consulting, nous ne faisons{" "}
        <span className="relative">
          pas que conseiller,
          <svg
            viewBox="0 0 261 11"
            fill="none"
            className="absolute left-0 lg:-right-2 -bottom-1.5 lg:-bottom-3 2xl:-bottom-4 translate-y-1"
          >
            <motion.path
              variants={firstAnimationVariants}
              initial="initial"
              whileInView="animate"
              d="M1 2C2.16667 3 6.6 5 15 5C25.5 5 35 5.5 43 8C51 10.5 55.5 11.5 60 9C64.5 6.5 63.5 4 71 3C78.5 2 85 2 93.5 3C102 4 123.5 8 134.5 8C145.5 8 155 3.5 172.5 2C190 0.500002 217.5 5.5 224 5C230.5 4.5 254 4.49998 256 2C258 -0.499977 261.5 3.99998 260 5"
              stroke="#33b1d9"
              strokeWidth="2"
            />
          </svg>
        </span>
        <br />
        nous{" "}
        <span className="relative">
          réinventons l’avenir
          <svg
            viewBox="0 0 283 8"
            fill="none"
            className="absolute left-0 lg:-right-2 -bottom-1.5 lg:-bottom-3 2xl:-bottom-4 translate-y-1"
          >
            <motion.path
              variants={secondAnimationVariants}
              initial="initial"
              whileInView="animate"
              d="M0.5 1.99959C13.5 2.99959 22.5 0.999591 35 1.99959C45 2.79959 61.1667 3.33294 68 3.49961C77.1667 4.16628 97.6 4.79961 106 1.99961C116.5 -1.50039 135.5 2.5 147 3.99961C161.412 5.87901 181.443 2.87717 189 2.49962C199 2 220.167 2.49962 232 2.99962C248 3.5 271.1 1.49962 271.5 1.49962C272 1.49962 243 5.49962 244.5 6.49962C245.7 7.29962 270 6.16628 282 5.49962"
              stroke="#33b1d9"
              strokeWidth="2"
            />
          </svg>
        </span>{" "}
        des entreprises qui osent rêver grand.
      </p>
    </div>
  );
};

export default HomeIntroParagraph;

const firstAnimationVariants = {
  initial: {
    pathLength: 0,
  },
  animate: {
    pathLength: 1,
    transition: {
      duration: 1.25,
      ease: "easeInOut",
    },
  },
};

const secondAnimationVariants = {
  initial: {
    pathLength: 0,
  },
  animate: {
    pathLength: 1,
    transition: {
      duration: 1.25,
      ease: "easeInOut",
      delay: 1,
    },
  },
};
