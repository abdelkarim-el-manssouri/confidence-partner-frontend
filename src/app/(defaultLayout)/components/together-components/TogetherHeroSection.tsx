"use client";
import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from "motion/react";
import { useRef } from "react";

const TogetherHeroSection = () => {
  return (
    <div className="relative w-full h-dvh grid grid-rows-[1fr,.5fr]">
      <div className="container text-center grid place-content-center">
        <ParallaxText start={0} end={0}>
          Partenaires
        </ParallaxText>
        <ParallaxText start={150} end={-20}>
          pas mercenaires
        </ParallaxText>
      </div>
      <div className="grid grid-cols-3 gap-6 px-6">
        <ParallaxDiv
          start={100}
          end={-300}
          src="https://plus.unsplash.com/premium_photo-1664475797780-8dcf49285f1f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <ParallaxDiv
          start={0}
          end={0}
          src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <ParallaxDiv
          start={67}
          end={-200}
          src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
      </div>
    </div>
  );
};

export default TogetherHeroSection;

const ParallaxText = ({
  children,
  start,
  end,
}: {
  children: React.ReactNode;
  start: number;
  end: number;
}) => {
  const titleRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: titleRef,
    offset: [`${start}px end`, `end ${end * -1}px`],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.6, 0.7, 1], [0, 0, 1, 0]);
  const scale = useTransform(
    scrollYProgress,
    [0, 0.25, 0.75, 1],
    [0.7, 1, 1, 0.7]
  );

  const blur = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [12, 0, 0, 12]);

  const y = useTransform(scrollYProgress, [0, 1], [start, end]);
  const transform = useMotionTemplate`translateY(${y}px) scale(${scale})`;
  const filter = useMotionTemplate`blur(${blur}px)`;
  return (
    <motion.div
      ref={titleRef}
      style={{ opacity, transform, filter }}
      className="font-hurme text-7xl md:text-8xl 2xl:text-[12rem] uppercase"
    >
      {children}
    </motion.div>
  );
};

const ParallaxDiv = ({
  src,
  start,
  end,
}: {
  src: string;
  start: number;
  end: number;
}) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: [`${start}px end`, `end ${end * -1}px`],
  });

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.3, 0.45, 1],
    [0, 0, 1, 0]
  );
  const scale = useTransform(scrollYProgress, [0.75, 1], [1, 0.85]);
  const y = useTransform(scrollYProgress, [0, 1], [start, end]);
  const transform = useMotionTemplate`translateY(${y}px) scale(${scale})`;
  return (
    <motion.div
      style={{
        backgroundImage: `url(${src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        transform,
        opacity,
      }}
      ref={containerRef}
      className="rounded-xl shadow-6"
    />
  );
};
