"use client";
import { motion, useTransform, useScroll } from "motion/react";
import { useRef } from "react";
const UsHeroSection = () => {
  const heroContainer = useRef<null>(null);
  const { scrollYProgress } = useScroll({
    target: heroContainer,
    offset: ["end end", "end center"],
  });
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 0.5]);
  const imageOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.5]);
  const textScale = useTransform(scrollYProgress, [0, 0.75], [0.8, 1]);
  return (
    <div ref={heroContainer} className="h-dvh grid grid-rows-[1fr,.3fr]">
      <motion.div
        style={{
          scale: imageScale,
          opacity: imageOpacity,
        }}
        className="bg-[url('/images/TeamMeetings.jpg')] bg-cover bg-center"
      />
      <div className="container">
        <motion.h1
          style={{
            scale: textScale,
          }}
          className="relative bg-backgroundClr mx-10 px-2 py-20 lg:px-6 lg:py-32 lg:-mt-52 text-center text-4xl lg:text-6xl 2xl:text-8xl font-medium"
        >
          La valeur se crée ensemble: Comprendre nos clients et leurs besoins,
          c’est créer l’impact.
        </motion.h1>
      </div>
    </div>
  );
};

export default UsHeroSection;
