"use client";
import { motion } from "motion/react";
const TogetherUnderstandSection = () => {
  return (
    <section className="mainParagraph | container my-32 md:my-40 w-5/6 2xl:w-11/12 mx-auto">
      <motion.p
        initial={{ y: 48, opacity: 1 }}
        whileInView={{
          y: 0,
          opacity: 1,
        }}
        transition={{ ease: "easeInOut", duration: 0.75 }}
        className="mb-10"
      >
        Comprendre une entreprise, ce n’est pas juste décortiquer ses chiffres
        et ses procédures. C’est entrer dans sa dynamique, s’imprégner dans sa
        culture d’entreprise, capter son énergie, saisir ce qui l’entrave et ce
        qui peut la faire avancer. Chez Confidence Partner, nous ne faisons pas
        que poser un diagnostic, nous révélons le potentiel caché derrière
        chaque problème, chaque décision, chaque processus.
      </motion.p>
      <motion.p
        initial={{ y: 48, opacity: 1 }}
        whileInView={{
          y: 0,
          opacity: 1,
        }}
        transition={{ ease: "easeInOut", duration: 0.75 }}
      >
        Au lieu d’imposer des solutions toutes faites, nous abordons avec vous
        une approche qui affronte vos défis et s’adapte vers vos ambitions. Nous
        optimisons, structurons, transformons avec une vision claire : faire de
        la complexité une base de croissance, et du changement une force
        motrice. Plus qu’un simple cabinet de conseil, mais plutôt le miroir
        critique et le stratège qui vous permettent d’avancer plus vite et plus
        loin.
      </motion.p>
    </section>
  );
};

export default TogetherUnderstandSection;
