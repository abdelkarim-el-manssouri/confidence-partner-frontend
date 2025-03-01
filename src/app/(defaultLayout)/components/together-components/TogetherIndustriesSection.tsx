"use client";
import { motion } from "motion/react";

const TogetherIndustriesSection = () => {
  return (
    <div className="bg-[linear-gradient(to_bottom,_var(--background),_var(--background),_var(--lightYellow)_10%,_var(--lightYellow)_90%,_var(--background))]">
      <div className="coloredBgSectionMargin | relative isolate h-full shadow-6 rounded-3xl md:mb-20 bg-backgroundClr">
        <div className="absolute inset-0 -z-1 opacity-20 bg-[url('/svg/bgPatterns.svg')] bg-center bg-cover" />
        <div className="container lg:px-10 py-20 2xl:py-52">
          <TogetherIndustriesContent />
        </div>
      </div>
    </div>
  );
};

export default TogetherIndustriesSection;

const TogetherIndustriesContent = () => {
  return (
    <section className="md:my-28">
      <motion.h1
        initial={{ y: "100%", opacity: 1 }}
        whileInView={{
          y: 0,
          opacity: 1,
        }}
        transition={{ ease: "easeInOut", duration: 0.75 }}
        className="text-center text-4xl lg:text-6xl xl:text-7xl"
      >
        Au-delà de l’expertise, l’inattendu
      </motion.h1>
      <div className="w-11/12 md:w-5/6 2xl:w-11/12 mx-auto">
        <motion.div
          initial={{ y: 48, opacity: 1 }}
          whileInView={{
            y: 0,
            opacity: 1,
          }}
          transition={{ ease: "easeInOut", duration: 0.75 }}
          className="mainParagraph | mt-16 md:mt-32"
        >
          <p className="mb-6">
            Nous nous enfonçons au cœur des industries pour capter les
            mutations, décoder les tendances et maîtriser les standards de
            qualité et de sécurité. Ici, un projet est plus qu’une mission :
            c’est une pièce unique.
          </p>
          <p className="mb-6">
            Qu’il s’agisse de{" "}
            <span className="bold">l’analyse des risques professionnels</span>,
            des <span className="bold">études de danger</span>, ou de la gestion
            des <span className="bold">flux et circulation</span>, notre
            objectif ultime est de vous introduire des solutions adéquates pour
            chaque situation.
          </p>
          <p className="mb-6">
            Nous vous accompagnons au-delà des formations classiques, avec des{" "}
            <span className="bold">formations pratiques</span> et managériales
            sur des sujets cruciaux comme la{" "}
            <span className="bold">sécurité incendie</span> et le{" "}
            <span className="bold">travail en hauteur</span>.
          </p>
        </motion.div>
        <motion.p
          initial={{ y: 48, opacity: 1 }}
          whileInView={{
            y: 0,
            opacity: 1,
          }}
          transition={{ ease: "easeInOut", duration: 0.75 }}
          className="mainParagraph | mt-20"
        >
          Et ce n’est qu’une partie, nos <span className="bold">audits</span>{" "}
          vont vous permettre de souffler un peu, car nous sommes là pour mettre
          en lumière tous les aspects de vos processus. Que ce soit pour
          vérifier la conformité de votre système de{" "}
          <span className="bold">qualité, sécurité, environnement</span> ou{" "}
          <span className="bold">énergie</span>, nos évaluations sont pensées
          pour ne pas juste pointer les problèmes, pour vous donner une feuille
          de route solide et claire, prête à révolutionner vos pratiques.
        </motion.p>
      </div>
      <motion.p
        initial={{ y: 48, opacity: 1 }}
        whileInView={{
          y: 0,
          opacity: 1,
        }}
        transition={{ ease: "easeInOut", duration: 0.75 }}
        className="text-center font-hurme capitalize text-4xl lg:text-5xl xl:text-6xl mt-20 md:my-14 2xl:px-24 lg:my-32 font-normal"
      >
        Au fond, ce qui nous fait <span className="text-accent">avancer</span>,
        c’est <span className="text-accent">votre confiance</span>. <br /> On y
        met tout notre cœur, et ça se voit!
      </motion.p>
    </section>
  );
};
