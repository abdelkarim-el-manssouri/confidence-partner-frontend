"use client";
import Image from "next/image";
import { useTransform, motion, useScroll, MotionValue } from "motion/react";
import { useRef } from "react";
import { projects } from "@/data/data";
// import { Button } from "@/ui/button";
import { PrimaryShinyButton } from "@/ui/ShinyButton";
import { FiArrowRight } from "react-icons/fi";

export default function OurValues() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <>
      <section ref={container} className="mt-[50dvh] container">
        <div className="px-10 lg:w-5/6 mx-auto grid gap-14 -mt-[26rem] lg:-mt-80 2xl:-mt-[40rem]">
          <motion.h3
            initial={{ y: 48, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 0.75 }}
            className="text-5xl font-bold uppercase"
          >
            nos valeurs
          </motion.h3>
          <motion.p
            initial={{ y: 48, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 0.75 }}
            className="mainParagraph | text-fontColor3"
          >
            Dans le domaine du conseil, la magie opère lorsque le consultant et
            l’entreprise unissent leurs forces. Chaque échange devient une
            source d’enrichissement mutuel, ouvrant la voie à des solutions
            innovantes et sur mesure. La confiance et l’écoute sont essentielles
            pour avancer ensemble vers l’excellence. En cultivant cette
            collaboration, nous posons les bases d’un avenir prometteur.
          </motion.p>
          <motion.div
            initial={{ y: 48, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 0.75 }}
          >
            <PrimaryShinyButton href="us">
              <span className="px-16">
                discover more
                <FiArrowRight className="inline group-hover:-rotate-45 transition-transform ml-3" />
              </span>
            </PrimaryShinyButton>
          </motion.div>
        </div>
        {projects.map((project, i) => {
          const targetScale = 1 - (projects.length - i) * 0.05;
          return (
            <Card
              key={`p_${i}`}
              i={i}
              {...project}
              progress={scrollYProgress}
              range={[i * 0.25, 1]}
              targetScale={targetScale}
            />
          );
        })}
      </section>
    </>
  );
}

interface CardProps {
  i: number;
  title: string;
  description: string;
  src: string;
  color: string;
  bgColor: string;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
}

const Card = ({
  i,
  title,
  description,
  src,
  color,
  bgColor,
  progress,
  range,
  targetScale,
}: CardProps) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className="h-dvh flex justify-center items-center sticky top-0"
    >
      <motion.div
        style={{
          backgroundColor: bgColor,
          color: color,
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
        }}
        className="lg:w-3/4 2xl:w-5/6 h-[600px] lg:h-[400px] 2xl:h-[500px] relative md:-top-[10%] rounded-3xl p-10 2xl:p-16 shadow-6 isolate"
      >
        <div className="absolute inset-0 -z-1 opacity-20 bg-cover bg-center bg-[url('/svg/bgPatterns.svg')]" />
        <div className="grid grid-rows-2 lg:grid-rows-none lg:grid-cols-2 gap-10 h-full">
          <div className="grid grid-rows-[90px,1fr] lg:grid-rows-[.6fr,1fr]">
            <h4 className="self-center text-5xl lg:text-6xl 2xl:text-7xl">
              {title}
            </h4>
            <p className="text-2xl lg:text-3xl 2xl:text-4xl">{description}</p>
          </div>

          <div className="relative rounded-xl overflow-clip">
            <motion.div className="w-full h-full" style={{ scale: imageScale }}>
              <Image
                fill
                src={`/images/${src}`}
                alt="image"
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
