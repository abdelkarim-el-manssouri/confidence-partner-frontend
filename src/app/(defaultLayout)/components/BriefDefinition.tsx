"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "motion/react";

interface DefinitionInterface {
  content: string;
  className?: string;
}

const BriefDefinition = ({ content, className }: DefinitionInterface) => {
  return <Definition content={content} className={className} />;
};
export default BriefDefinition;

const Definition = ({ content, className }: DefinitionInterface) => {
  const textRef = useRef<null>(null);
  const { scrollYProgress } = useScroll({
    target: textRef,
    offset: ["start .7", "end .4"],
  });
  const words1 = content.split(" ");
  return (
    <div className="">
      <p className="sr-only">{content}</p>
      <p ref={textRef} className={className}>
        {words1.map((lettre, i) => {
          const start = i / words1.length;
          const end = start + 1 / words1.length;
          return (
            <Paragraph key={i} range={[start, end]} progress={scrollYProgress}>
              {lettre}
            </Paragraph>
          );
        })}
      </p>
    </div>
  );
};

const Paragraph = ({
  children,
  range,
  progress,
}: {
  children: string;
  range: [number, number];
  progress: MotionValue<number>;
}) => {
  const characters = children.split("");
  const amount = range[1] - range[0];
  const step = amount / children.length;
  return (
    <span className="inline-block">
      {characters.map((character: string, i: number) => {
        const start = range[0] + step * i;
        const end = range[0] + step * (i + 1);
        return (
          <Character key={i} range={[start, end]} progress={progress}>
            {character}
          </Character>
        );
      })}
      <span>&nbsp;</span>
    </span>
  );
};

const Character = ({
  children,
  range,
  progress,
}: {
  children: string;
  range: [number, number];
  progress: MotionValue<number>;
}) => {
  const opacity = useTransform(progress, range, [0, 1]);

  return (
    <span className="relative">
      <span className="absolute opacity-10">{children}</span>
      <motion.span style={{ opacity }}>{children}</motion.span>
    </span>
  );
};
