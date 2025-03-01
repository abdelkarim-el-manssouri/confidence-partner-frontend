"use client";
import { useScroll, motion } from "motion/react";
import { useRef } from "react";
import { audits, conseils, engineering, formations } from "@/data/data";
import RotateEnteringSection from "../RotateEnteringSection";

const TogetherSolutionsSection = () => {
  return (
    <section className="container2">
      <motion.h2
        initial={{ y: 48, opacity: 1 }}
        whileInView={{
          y: 0,
          opacity: 1,
        }}
        transition={{ ease: "easeInOut", duration: 0.75 }}
        className="text-4xl lg:text-6xl xl:text-7xl text-center py-40"
      >
        De l’idée à l’exécution:
        <span className="mainParagraph | block">
          {" "}
          découvrez l’univers de nos solutions
        </span>
      </motion.h2>
      <Sections />
    </section>
  );
};
export default TogetherSolutionsSection;

const Sections = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });
  return (
    <div
      ref={container}
      className="relative h-[400vh] overflow-clip bg-black-2"
    >
      <RotateEnteringSection
        scrollYProgress={scrollYProgress}
        bgColor="lightBlue"
        startScale={1}
        endScale={0.8}
        vpStart={0}
        vpEnd={1}
        startRotate={0}
        endRotate={-5}
        firstBgImage={""}
        title="Études et Ingénierie"
        description="Analyses et études techniques pour garantir la sécurité de vos collaborateurs et de vos installations."
        solutionsList={engineering}
      />

      <RotateEnteringSection
        scrollYProgress={scrollYProgress}
        bgColor="babyCream"
        startScale={0.8}
        endScale={1}
        vpStart={0}
        vpEnd={0.3}
        startRotate={5}
        endRotate={0}
        firstBgImage={""}
        title="Formations"
        description="Formations pratiques et managériales, couvrant des thématiques comme la sécurité incendie, le travail en hauteur, ou encore les normes ISO."
        solutionsList={formations}
      />

      <RotateEnteringSection
        scrollYProgress={scrollYProgress}
        bgColor="lightGreen"
        startScale={0.8}
        endScale={1}
        vpStart={0}
        vpEnd={0.7}
        startRotate={-5}
        endRotate={0}
        firstBgImage={""}
        title="Audits"
        description="Évaluations approfondies pour mesurer la conformité de vos systèmes de management."
        solutionsList={audits}
      />

      <RotateEnteringSection
        scrollYProgress={scrollYProgress}
        bgColor="pistachio"
        startScale={0.8}
        endScale={1}
        vpStart={0}
        vpEnd={1}
        startRotate={5}
        endRotate={0}
        firstBgImage={""}
        title="Conseil et Accompagnement"
        description="Assistance sur mesure pour la mise en place de systèmes de management QSE (Qualité, Sécurité, Environnement)."
        solutionsList={conseils}
      />
    </div>
  );
};
