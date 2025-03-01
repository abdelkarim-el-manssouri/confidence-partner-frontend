"use client";

import { motion, MotionValue, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

const YouProblemsSection = () => {
  return (
    <>
      <div className="bg-gradient-to-b from-fadedjade to-transparent pt-20 pb-10 md:mb-0 relative isolate">
        <div className="container">
          <p className="mainParagraph | text-center !text-secondary1 my-14 lg:my-20 lg:px-32 lg:py-14 2xl:py-54 rounded-3xl !font-medium">
            Partout où l’excellence opérationnelle est un enjeu, nous sommes
            présents. Des infrastructures aux services, en passant par
            l’industrie et l’énergie, nous accompagnons aussi bien les grandes
            entreprises que les PME et les acteurs du secteur public.
          </p>
        </div>
        <div className="absolute inset-0 -z-1 opacity-10 bg-[url('/svg/bgPatterns.svg')] bg-bottom bg-cover" />
      </div>

      <ProblemsTypes />
    </>
  );
};

export default YouProblemsSection;

const ProblemsTypes = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "start .1"],
  });
  return (
    <div className="bg-[linear-gradient(to_bottom,_var(--background),_var(--background),_var(--babyCream)_10%,_var(--babyCream)_90%,_var(--background))]">
      <div className="coloredBgSectionMargin | h-full shadow-6 rounded-3xl md:mb-20 bg-backgroundClr py-20 px-2 lg:px-10">
        <div className="container overflow-x-clip">
          <div className="my-14 2xl:my-32">
            <h2 className="text-center text-4xl lg:text-5xl xl:text-6xl mb-2 md:mb-0">
              Quand le conseil devient un casse-tête au lieu d’une solution…
            </h2>
            <p className="mainParagraph | text-center">
              Vous cherchez un cabinet de conseil pour redresser la barre, mais
              à chaque fois, c’est le même refrain
            </p>
          </div>
          <div
            ref={containerRef}
            className="my-34 2xl:my-52 grid md:grid-cols-12 md:grid-rows-6 gap-8"
          >
            <Problem1 scrollYProgress={scrollYProgress} />
            <Problem2 scrollYProgress={scrollYProgress} />
            <Problem3 scrollYProgress={scrollYProgress} />
            <Problem4 scrollYProgress={scrollYProgress} />
            <Problem5 scrollYProgress={scrollYProgress} />
          </div>
          <motion.h3
            initial={{ y: 48, opacity: 1 }}
            whileInView={{
              y: 0,
              opacity: 1,
            }}
            transition={{ ease: "easeInOut", duration: 0.75 }}
            className="text-center text-4xl lg:text-5xl xl:text-6xl my-14 2xl:px-24 2xl:mb-32"
          >
            Si tout cela vous semble familier, c’est que vous n’avez pas encore
            rencontré <span className="text-accent"> le bon partenaire</span>.
          </motion.h3>
        </div>
      </div>
    </div>
  );
};

interface ProblemProps {
  scrollYProgress: MotionValue<number>;
}

const Problem1 = ({ scrollYProgress }: ProblemProps) => {
  const translateCard = useTransform(scrollYProgress, [0, 1], [-100, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  return (
    <motion.div
      style={{
        x: translateCard,
        opacity,
      }}
      className="bg-backgroundClr rounded-2xl h-full grid order-2 md:order-1 grid-rows-2 md:grid-rows-1 md:grid-cols-[.5fr,1fr] items-center gap-10 md:col-span-9 md:row-span-2 p-10 border border-gray-3 hover:shadow-none shadow-6 transition-shadow"
    >
      <div className="order-2">
        <h4 className="text-4xl 2xl:text-6xl">Les prestataires fantômes</h4>
        <p className="mainParagraph | pt-6 h-full xl:text-3xl">
          De grandes firmes de conseil qui vous traitent comme un numéro parmi
          tant d’autres. Peu d’écoute, zéro implication, des suivis inexistants…
          Et quand vous posez des questions, on vous répond par des généralités
          sorties d’un manuel d’entreprise.
        </p>
      </div>
      <div className="h-full w-full bg-[url('https://images.unsplash.com/photo-1642780718726-4d54e3616964?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTl8fEdob3N0JTIwcHJvdmlkZXJzfGVufDB8fDB8fHww')] bg-cover bg-center" />
    </motion.div>
  );
};

const Problem2 = ({ scrollYProgress }: ProblemProps) => {
  const translateCard = useTransform(scrollYProgress, [0, 1], [-200, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  return (
    <motion.div
      style={{
        y: translateCard,
        opacity,
      }}
      className="bg-backgroundClr rounded-2xl h-full grid order-3 md:order-2 grid-rows-2 md:grid-rows-[.5fr,1fr] gap-10 md:col-span-3 md:row-span-4 p-10 border border-gray-3 shadow-6 hover:shadow-none transition-shadow"
    >
      <div className="md:order-2">
        <h4 className="text-4xl 2xl:text-6xl">L’expertise d’un autre siècle</h4>
        <p className="mainParagraph | pt-6 h-full xl:text-3xl">
          Des méthodologies dépassées, des recommandations vagues et une
          compréhension approximative de vos enjeux. Résultat ? Des solutions
          qui tiennent plus du copier-coller que d’une véritable approche sur
          mesure.
        </p>
      </div>
      <div className="h-full w-full bg-[url('https://images.unsplash.com/photo-1540758848354-b6ccc1895225?q=80&w=1762&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-center bg-cover" />
    </motion.div>
  );
};

const Problem3 = ({ scrollYProgress }: ProblemProps) => {
  const translateCard = useTransform(scrollYProgress, [0, 1], [500, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  return (
    <motion.div
      style={{
        y: translateCard,
        opacity,
      }}
      className="bg-backgroundClr rounded-2xl h-full order-1 md:order-3 grid grid-cols-1 grid-rows-2 md:grid-rows-[1fr,.5fr] gap-10 md:col-span-3 md:row-span-4 p-10 border border-gray-3 shadow-6 hover:shadow-none transition-shadow"
    >
      <div>
        <h4 className="text-4xl 2xl:text-6xl">La complexité qui paralyse</h4>
        <p className="mainParagraph | pt-6 h-full xl:text-3xl">
          Processus bureaucratiques interminables, silos rigides, lenteur
          décisionnelle… Vous voulez de l’optimisation, mais tout ce que vous
          obtenez, c’est un énième rapport de 200 pages sans impact concret.
        </p>
      </div>
      <div className="h-full w-full bg-[url('https://images.unsplash.com/photo-1494059980473-813e73ee784b?q=80&w=1769&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-center bg-cover" />
    </motion.div>
  );
};

const Problem4 = ({ scrollYProgress }: ProblemProps) => {
  const translateCard = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  return (
    <motion.div
      style={{
        scale: translateCard,
        opacity,
      }}
      className="bg-backgroundClr rounded-2xl h-full md:order-4 grid place-content-center text-center gap-10 md:col-span-6 md:row-span-2 p-10 border border-gray-3 shadow-6 hover:shadow-none transition-shadow"
    >
      <div>
        <p className="mainParagraph | pt-6 h-full xl:text-3xl">
          et en fin de compte on se retrouve vite à tourner en rond, comme un
          hamster dans sa roue, sans jamais avancer, accumulant des réunions
          sans fin.
        </p>
      </div>
    </motion.div>
  );
};

const Problem5 = ({ scrollYProgress }: ProblemProps) => {
  const translateCard = useTransform(scrollYProgress, [0, 1], [800, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  return (
    <motion.div
      style={{
        x: translateCard,
        opacity,
      }}
      className="bg-backgroundClr rounded-2xl h-full md:order-5 grid md:items-center grid-rows-2 md:grid-rows-1 md:grid-cols-[1fr,.5fr] gap-10 md:col-span-9 md:row-span-2 p-10 border border-gray-3 shadow-6 hover:shadow-none transition-shadow"
    >
      <div className="order-2 md:order-1">
        <h4 className="text-4xl 2xl:text-6xl">Un pilotage à l’aveugle</h4>
        <p className="mainParagraph | pt-6 h-full xl:text-3xl">
          Des objectifs flous, des KPI déconnectés de la réalité, une gestion du
          changement approximative… et à la fin, des équipes démotivées et une
          performance qui stagne.
        </p>
      </div>
      <div className="h-full w-full md:order-2 bg-[url('https://images.unsplash.com/photo-1605710990211-50b342b318ff?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-center bg-cover" />
    </motion.div>
  );
};
