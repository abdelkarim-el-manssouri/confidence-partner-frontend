"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { FiArrowRight } from "react-icons/fi";
import {
  Content,
  OverlayCopyInterface,
  TextParallaxContentInterface,
} from "@/interfaces/whoWeAre";
import { PrimaryShinyButton } from "@/ui/ShinyButton";

const WhoWeAre = () => {
  return (
    <div className="bg-[linear-gradient(to_bottom,_var(--background),_var(--background),_var(--lightBlue)_10%,_var(--lightBlue)_90%,_var(--background))]">
      <div className="h-full">
        <div className="coloredBgSectionMargin | h-full shadow-6 rounded-3xl mb-20 pt-6 bg-backgroundClr">
          <TextParallaxContentExample />
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;

const TextParallaxContentExample = () => {
  return (
    <div className="bg-backgroundClr rounded-3xl">
      <TextParallaxContent
        imgUrl="https://images.unsplash.com/photo-1603201667141-5a2d4c673378?q=80&w=2096&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        subheading="Conçu pour vous"
        heading="Du Sur-Mesure, pas du Prêt-à-Penser."
      >
        <ExampleContent
          contentTitle="CONFIDENCE PARTNER CONSULTING"
          contentDescription="Où chaque défi se transforme en une opportunité."
          contentDescription2="Chaque organisation quelque soit sa taille, son domaine ou son style de
        management traverse des périodes de turbulence, des moments où les
        certitudes vacillent et où les défis semblent insurmontables. C'est dans
        ces instants que la résilience prend tout son sens."
          contentDescription3="En tant que consultants, nous avons été témoins de la force incroyable des entreprises qui embrassent la résilience. Elles ne se contentent pas de survivre aux tempêtes, elles en ressortent renforcées, prêtes à conquérir de nouveaux horizons."
          contentDescription4="Cultivons ensemble cette résilience, pour fonder des entreprises non seulement performantes, mais aussi profondément humaines et adaptatives."
          specificLink="you"
        />
      </TextParallaxContent>
      <TextParallaxContent
        imgUrl="https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        subheading="Qualité"
        heading="Ne jamais compromettre."
      >
        <ExampleContent
          contentTitle="notre mission"
          contentDescription="Au sein de Confidence Partner Consulting, notre mission est d'être le
        partenaire qui transforme vos aspirations en réalités tangibles."
          contentDescription2="Nous
        nous consacrons à vous fournir des analyses approfondies, des
        recommandations expertes et des stratégies innovantes, en alliant une
        expertise pointue et une approche personnalisée, pour vous guider vers
        une performance durable"
          contentDescription3=""
          contentDescription4=""
          specificLink="us"
        />
      </TextParallaxContent>
    </div>
  );
};

const IMG_PADDING = 6;

const TextParallaxContent = ({
  imgUrl,
  subheading,
  heading,
  children,
}: TextParallaxContentInterface) => {
  return (
    <div className={`px-${IMG_PADDING}`}>
      <div className="relative h-[150vh]">
        <StickyImage imgUrl={imgUrl} />
        <OverlayCopy heading={heading} subheading={subheading} />
      </div>
      {children}
    </div>
  );
};

const StickyImage = ({ imgUrl }: { imgUrl: string }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <motion.div
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: `calc(100vh - ${IMG_PADDING * 2}px)`,
        top: IMG_PADDING,
        scale,
      }}
      ref={targetRef}
      className="sticky z-0 overflow-hidden rounded-3xl"
    >
      <motion.div
        className="absolute inset-0 bg-neutral-950/70"
        style={{
          opacity,
        }}
      />
    </motion.div>
  );
};

const OverlayCopy = ({ subheading, heading }: OverlayCopyInterface) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
  const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);

  return (
    <motion.div
      style={{
        y,
        opacity,
      }}
      ref={targetRef}
      className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center text-white"
    >
      <p className="mb-2 text-center text-2xl md:mb-4 md:text-3xl lg:text-5xl 2xl:text-7xl font-hurme">
        {subheading}
      </p>
      <p className="text-center text-4xl font-bold md:text-7xl lg:text-8xl 2xl:text-9xl">
        {heading}
      </p>
    </motion.div>
  );
};

const ExampleContent = ({
  contentTitle,
  contentDescription,
  contentDescription2,
  contentDescription3,
  contentDescription4,
  specificLink,
}: Content) => (
  <div className="mx-auto grid max-w-5xl lg:container lg:px-20 grid-cols-1 gap-8 lg:gap-10 2xl:gap-20 px-4 pb-24 pt-12 lg:py-32 md:grid-cols-12">
    <h3 className="col-span-1 uppercase font-bold md:col-span-4 text-5xl">
      {contentTitle}
    </h3>
    <div className="mainParagraph | col-span-1 md:col-span-8 text-fontColor3 text-pretty">
      <p className="mb-4">{contentDescription}</p>
      <p className="mb-10">{contentDescription2}</p>
      <p className="mb-10">{contentDescription3}</p>
      <p className="mb-10">{contentDescription4}</p>
      <PrimaryShinyButton href={`/${specificLink}`}>
        <span className="px-16">
          En savoir plus{" "}
          <FiArrowRight className="inline group-hover:-rotate-45 transition-transform" />
        </span>
      </PrimaryShinyButton>
    </div>
  </div>
);
