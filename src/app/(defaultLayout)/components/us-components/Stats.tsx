"use client";
import {
  animate,
  KeyframeOptions,
  useInView,
  useIsomorphicLayoutEffect,
} from "motion/react";
import BriefDefinition from "../BriefDefinition";
import { useRef } from "react";

const Stats = () => {
  return (
    <section className="container relative isolate h-dvh">
      <div className="absolute inset-0 -z-1 bg-[url('/svg/bgPatterns3.svg')] bg-cover bg-center opacity-10" />
      <div className="absolute h-40 w-full top-0 left-0 bg-gradient-to-b from-backgroundClr to-transparent" />
      <div className="grid grid-rows-[auto,auto,1fr] p-10 min-h-full">
        <h5 className="text-accent text-2xl lg:text-3xl pt-20">
          Our Achievement
        </h5>
        <BriefDefinition
          className="text-3xl lg:text-4xl lg:w-1/2 text-left pt-10"
          content="We champion the bold ideas and brave steps our partners have taken with us, from startups to enterprises. We’re proud of the connections we’ve made along the way."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-10 items-center">
          <StatsNumbers
            from={1}
            to={40}
            definition="Successfully completed more than 180+ projects."
            sign="%"
          />
          {/* <StatsNumbers
            from={1}
            to={25}
            definition="Our creative work has helped clients secure more than $30M+ in funding."
            sign="k+"
          /> */}
          <StatsNumbers
            from={1}
            to={30}
            definition="Countries, global clients from all over the world"
            sign="k+"
          />
          <StatsNumbers
            from={1}
            to={20}
            definition="Passionate Designers and Management Teams"
            sign="+"
          />
        </div>
      </div>
      <div className="absolute h-40 w-full bottom-0 left-0 bg-gradient-to-t from-backgroundClr to-transparent" />
    </section>
  );
};

export default Stats;

interface StatsPropsInterface {
  from: number;
  to: number;
  animationOptions?: KeyframeOptions;
  definition: string;
  sign: string;
}

const StatsNumbers = ({
  from,
  to,
  animationOptions,
  definition,
  sign,
}: StatsPropsInterface) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref);
  useIsomorphicLayoutEffect(() => {
    const element = ref.current;
    if (!element) return;
    if (!inView) return;
    if (window.matchMedia("(prefers-reduced-motion)").matches) {
      element.textContent = String(to);
    }

    element.textContent = String(from);

    const controls = animate(from, to, {
      duration: 2,
      ease: "easeOut",
      ...animationOptions,
      onUpdate(value) {
        element.textContent = value.toFixed(0);
      },
    });

    return () => {
      controls.stop();
    };
  }, [ref, inView, from, to]);
  return (
    <div className="md:text-center">
      <div className="text-9xl lg:text-[11rem] font-semibold font-hurme">
        <span ref={ref} />
        <span className="text-accent">{sign}</span>
      </div>
      <p className="text-2xl w-2/3 md:w-full md:mt-6">{definition}</p>
    </div>
  );
};
