import { SolutionsTypes } from "@/data/data";
import {
  AnimatePresence,
  motion,
  MotionValue,
  useTransform,
} from "motion/react";
import { useState } from "react";

interface RotateEnteringInterface {
  scrollYProgress: MotionValue<number>;
  bgColor: string;
  startScale: number;
  endScale: number;
  vpStart: number;
  vpEnd: number;
  startRotate: number;
  endRotate: number;
  firstBgImage: string;
  title: string;
  description: string;
  solutionsList: SolutionsTypes[];
}

const RotateEnteringSection = ({
  scrollYProgress,
  bgColor,
  startScale,
  endScale,
  vpStart,
  vpEnd,
  startRotate,
  endRotate,
  firstBgImage,
  title,
  description,
  solutionsList,
}: RotateEnteringInterface) => {
  const scale = useTransform(
    scrollYProgress,
    [vpStart, vpEnd],
    [startScale, endScale]
  );
  const rotate = useTransform(
    scrollYProgress,
    [vpStart, vpEnd],
    [startRotate, endRotate]
  );
  const [revealImg, setRevealImg] = useState({
    show: false,
    image: firstBgImage,
    key: "0",
  });
  return (
    <motion.div
      style={{
        scale,
        rotate,
        backgroundColor: `var(--${bgColor})`,
        // backgroundImage: `linear-gradient(to bottom, transparent, transparent, var(--${bgColor}) 10%, var(--${bgColor}) 90%, transparent)`,
      }}
      className="coloredBgSectionPadding | sticky top-0 h-dvh"
    >
      <div className="bg-backgroundClr py-6 px-10 md:p-10 shadow-6 rounded-xl grid grid-cols-1 md:grid-cols-2 md:gap-10 h-full w-full relative isolate">
        <div className="absolute inset-0 -z-1 opacity-20 bg-[url('/svg/bgPatterns.svg')] bg-center bg-cover" />
        <div className="grid grid-rows-[1fr,.5fr] gap-y-5 order-2 md:order-1">
          <div>
            <AnimatePresence initial={false} mode="wait">
              <motion.div
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                exit={{
                  opacity: 0.5,
                }}
                style={{
                  backgroundImage: `url(${revealImg.image})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
                key={revealImg.key}
                className="overflow-clip w-11/12 md:w-5/6 mx-auto aspect-video grid place-content-center mt-10 rounded-lg shadow-6"
              />
            </AnimatePresence>
          </div>
          <p className="mainParagraph w-11/12 md:w-5/6 mx-auto">
            {description}
          </p>
        </div>
        <div className="grid grid-rows-[auto,1fr] md:px-10 order-1 md:order-2">
          <h3 className="text-4xl xl:text-7xl py-10">{title}</h3>
          <ul>
            {solutionsList.map((el) => (
              <motion.li
                onHoverStart={() =>
                  setRevealImg({
                    show: true,
                    image: el.image,
                    key: el.id.toString(),
                  })
                }
                onHoverEnd={() =>
                  setRevealImg({
                    show: false,
                    image: el.image,
                    key: el.id.toString(),
                  })
                }
                key={el.id}
                className="py-2 md:py-4 text-xl hover:bg-accent2 transition-colors px-4 rounded-2xl hover:rounded-2xl"
              >
                {el.label}
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default RotateEnteringSection;
