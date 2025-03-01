"use client";
// import { Button } from "@/ui/button";
import {
  motion,
  useScroll,
  useTransform,
  useMotionTemplate,
} from "motion/react";
import Image from "next/image";
import { useRef } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { twMerge } from "tailwind-merge";
import ourHustoryImg from "../../../../../public/images/house.jpg";
import { PrimaryShinyButton } from "@/ui/ShinyButton";

const WhyUs = () => {
  const whyRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: whyRef,
    offset: ["start end", "center center"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0.4, 1]);
  return (
    <div className="bg-[linear-gradient(to_bottom,_var(--background),_var(--background),_var(--lightGreen)_10%,_var(--lightGreen)_90%,_var(--background))]">
      <motion.div
        style={{
          opacity,
        }}
        ref={whyRef}
        className="coloredBgSectionMargin | h-full shadow-6 rounded-3xl md:mb-20 bg-backgroundClr"
      >
        <div className="container lg:px-10 py-20 2xl:py-52">
          <motion.h2
            initial={{
              y: 48,
              opacity: 0,
              filter: "blur(10px)",
            }}
            whileInView={{
              y: 0,
              opacity: 1,
              filter: "blur(0px)",
            }}
            transition={{
              duration: 0.75,
              ease: "easeInOut",
              delay: 0.3,
            }}
            className="text-4xl lg:text-7xl 2xl:text-8xl text-center"
          >
            Pourquoi Nous Choisir ?
          </motion.h2>

          <SmoothScrollHero />
        </div>
      </motion.div>
    </div>
  );
};

export default WhyUs;

export const SmoothScrollHero = () => {
  return (
    <>
      <Hero />
      <Schedule />
    </>
  );
};

const SECTION_HEIGHT = 1500;

const Hero = () => {
  return (
    <div className={`relative w-full h-[calc(${SECTION_HEIGHT}px + 100vh)]`}>
      <ParallaxImages />
    </div>
  );
};

const ParallaxImages = () => {
  return (
    <div className="px-4 pt-[200px] relative">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-60">
        <DescText
          title="Focus sur la Sécurité"
          text="Grâce à notre expertise en QHSE et SOP, nous plaçons la sécurité des personnes et des processus au cœur de nos interventions. Prévenir les accidents, réduire les temps d'arrêt, et garantir des opérations fluides sont nos priorités."
          className="order-2"
        />
        <ParallaxImg
          src="https://images.unsplash.com/photo-1606836591695-4d58a73eba1e?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="And example of a space launch"
          start={-200}
          end={200}
          className="w-full"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-60">
        <DescText
          title="Construire Ensemble, Pas Seulement Extraire de la Valeur"
          text="Plutôt que d'adopter une approche transactionnelle, nous travaillons main dans la main avec vous pour créer une valeur durable. Nos solutions ne se limitent pas à la conformité réglementaire elles vous orientent vers des objectifs stratégiques tout en relevant les défis opérationnels."
          className="order-2 md:order-1"
        />
        <ParallaxImg
          src="https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="An example of a space launch"
          start={200}
          end={-150}
          className="mx-auto md:w-2/3 md:order-2"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-60">
        <DescText
          title="Une Relation Basée sur la Confiance"
          text="Chaque interaction est marquée par l'intégrité et la transparence. Nous célébrons vos succès comme les nôtres, car chaque étape franchie ensemble renforce le lien de confiance."
          className="order-2"
        />
        <ParallaxImg
          src="https://images.unsplash.com/photo-1551836022-8b2858c9c69b?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Orbiting satellite"
          start={-200}
          end={200}
          className="m-auto md:w-4/5"
        />
      </div>
      <ParallaxImg
        src="https://plus.unsplash.com/premium_photo-1683134361837-3a99d74372e4?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Orbiting satellite"
        start={0}
        end={-500}
        className="mx-auto w-full z-9 relative"
      />
    </div>
  );
};

const ParallaxImg = ({
  className,
  alt,
  src,
  start,
  end,
}: {
  className?: string;
  alt: string;
  src: string;
  start: number;
  end: number;
}) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: [`${start}px end`, `end ${end * -1}px`],
  });

  const opacity = useTransform(scrollYProgress, [0.75, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0.75, 1], [1, 0.85]);

  const y = useTransform(scrollYProgress, [0, 1], [start, end]);
  const transform = useMotionTemplate`translateY(${y}px) scale(${scale})`;

  return (
    <motion.img
      src={src}
      alt={alt}
      className={twMerge("rounded-xl", className)}
      ref={ref}
      style={{ transform, opacity }}
      loading="lazy"
    />
  );
};

const DescText = ({
  text,
  className,
  title,
}: {
  text: string;
  className: string;
  title: string;
}) => {
  return (
    <div
      className={twMerge(
        className,
        "relative backdrop-blur-md even:order-2 rounded-2xl z-1 py-12 px-6 grid place-content-center gap-y-8"
      )}
    >
      <h3 className="text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl">{title}</h3>
      <p className="mainParagraph">{text}</p>
    </div>
  );
};

const Schedule = () => {
  return (
    <section className="-mt-[8rem] md:-mt-0">
      <div className="grid grid-cols-1 md:grid-cols-[1fr,.5fr] gap-20 md:gap-0 w-11/12 mx-auto">
        <div className="md:w-5/6 order-2 md:order-1">
          <motion.h4
            variants={inViewAnimationVariants}
            initial="initial"
            whileInView="animate"
            className="mb-10 md:mb-20 text-4xl lg:text-5xl xl:text-6xl"
          >
            Notre histoire
          </motion.h4>
          <ScheduleItem parag="l’équipe de Confidence Partner croit que derrière chaque défi se cache une occasion de transformation. en plaçant l’humain au cœur de notre démarche, Nous ne nous limitons pas de faire un audit ou de réorganiser des processus, nous nous immergeons dans l’histoire de chaque entreprise,  les personnes qui la composent et ceux qui contribuent à sa continuité parce que chaque solution, chaque changement, commence par comprendre les vrais besoins, les aspirations, et les défis uniques de ceux qui font vivre l’entreprise." />
          <ScheduleItem parag="Nous intervenons avec un objectif simple : GUIDER nos clients VERS L'ÉVOLUTION  de manière  durable, et flexible en optimisant leurs processus et en facilitant leur transformation PAR des stratégies conçues spécialement pour vous en gestion du changement, Lean management et audit. Nous savons qu’un changement véritable passe par un accompagnement constant, une écoute attentive, et une confiance mutuelle qui se construit au fil du temps." />
          <PrimaryShinyButton
            href="/us/ourStory"
            className="w-full md:w-fit px-16 mt-10"
          >
            <span>Decouvrez plus</span>
            <FaArrowRight className="inline ml-2" />
          </PrimaryShinyButton>
        </div>
        <Image
          src={ourHustoryImg}
          alt="image"
          className="aspect-video md:sticky top-12 rounded-md shadow-1 order-1 md:order-2"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-[.5fr,1fr] gap-20 md:gap-0 w-11/12 mx-auto mt-24 md:mt-60">
        <Image
          src={ourHustoryImg}
          alt="image"
          className="aspect-video md:sticky top-12 rounded-md shadow-2"
        />
        <div className="md:w-5/6 md:ml-auto">
          <motion.h4
            variants={inViewAnimationVariants}
            initial="initial"
            whileInView="animate"
            className="mb-10 md:mb-20 text-4xl lg:text-5xl xl:text-6xl"
          >
            Notre équipe, notre force.
          </motion.h4>
          <ScheduleItem parag="Chacun de nos consultants partage cette volonté d’aller au-delà des attentes, de s'investir dans chaque projet comme s’il s’agissait du leur." />
          <ScheduleItem parag="Nous sommes unis par une même énergie, celle de repousser les limites de ce qui est possible. Et bien que nous soyons résolument tournés vers l'excellence, nous n'oublions jamais que ce qui fait notre force, est cette capacité à rester accessibles, ouverts, et authentiques. le succès ne réside pas dans l’élitisme, mais dans la capacité à travailler ensemble, à comprendre les défis et à trouver des solutions concrètes, humaines." />
          <PrimaryShinyButton
            href="/us/ourTeam"
            className="w-full md:w-fit px-16 mt-10"
          >
            <span>Decouvrez plus</span>
            <FaArrowRight className="inline ml-2" />
          </PrimaryShinyButton>
        </div>
      </div>
    </section>
  );
};

const ScheduleItem = ({ parag }: { parag: string }) => {
  return (
    <motion.div
      variants={inViewAnimationVariants}
      initial="initial"
      whileInView="animate"
      className="mb-5 md:mb-9"
    >
      <p className="mainParagraph">{parag}</p>
    </motion.div>
  );
};

const inViewAnimationVariants = {
  initial: { y: 48, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: { ease: "easeInOut", duration: 0.75 },
  },
};
