"use client";
// import { motion } from "motion/react";
import { twMerge } from "tailwind-merge";
import { useFeatureStore } from "./store";

type FeatureCardProps = {
  gradient: string;
  children: React.ReactNode;
} & CardProps;

type CardProps = {
  id: string;
};

const FeatureCard = ({ gradient, children, id }: FeatureCardProps) => {
  const inViewFeature = useFeatureStore((state) => state.inViewFeature);
  // const setFullscreenFeature = useFeatureStore(
  //   (state) => state.setFullscreenFeature
  // );

  return (
    <div
      className={twMerge(
        "absolute inset-0 h-full w-full rounded-md transition-opacity",
        inViewFeature === id
          ? "active-card opacity-100"
          : "pointer-events-none opacity-0"
      )}
    >
      <div
        className={twMerge(
          "gradient absolute inset-0 origin-bottom-left rounded-md bg-gradient-to-br grid grid-cols-2",
          gradient
        )}
      />
      {children}
    </div>
  );
};

export const Btp = ({ id }: CardProps) => {
  return (
    <FeatureCard id={id} gradient="from-[#f7f0ff] to-[#a78afe]">
      <div className="grid grid-rows-3 md:grid-rows-1 md:grid-cols-3 absolute inset-0 p-4">
        <div
          style={{
            backgroundImage:
              "url('https://img.freepik.com/free-photo/two-colleagues-working-project_114579-2770.jpg?t=st=1739123589~exp=1739127189~hmac=306b4923921748a1d0e3e88ff4bbaef4547167a399d16f60d92524533f0988ed&w=826')",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
          className="bg-backgroundClr row-span-1 w-11/12 mx-auto md:w-full -translate-y-12 md:translate-y-0 shadow-6 order-2 md:order-1"
        />
        <div className="order-1 md:order-2 row-span-2 md:z-1 md:col-span-2 grid place-content-center gap-y-4 md:gap-y-8 px-6 py-14 md:py-0 md:px-14 bg-backgroundClr md:h-4/6 my-auto md:-ml-10 shadow-6">
          <h4 className="h3-heading | uppercase font-semibold">btp</h4>
          <p className="mainParagraph">
            Retards de chantier, coûts qui explosent, gestion des sous-traitants
            compliquée… Le secteur du BTP est un terrain où chaque erreur coûte
            cher.
          </p>
        </div>
      </div>
    </FeatureCard>
  );
};

export const Energies = ({ id }: CardProps) => {
  return (
    <FeatureCard id={id} gradient="from-[#f5fbff] to-[#fdeea9]">
      <div className="grid grid-rows-[1fr,1fr] md:grid-rows-1 md:grid-cols-[1fr,.7fr] absolute inset-0 p-4">
        <div className="grid gap-y-6 p-10 py-16 md:py-10 bg-backgroundClr md:my-auto shadow-6 -ml-8 md:-ml-0 md:-mr-10">
          <h4 className="h3-heading | font-semibold">Énergies</h4>
          <p className="mainParagraph ">
            Entre la transition énergétique, les exigences réglementaires et
            l’optimisation des ressources, les acteurs du secteur doivent
            constamment évoluer. Mauvaise gestion des coûts, manque d’agilité,
            difficultés à innover… autant de freins
          </p>
        </div>
        <div
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
          className="relative z-1 p-4 bg-backgroundClr shadow-6 -translate-y-6 md:-translate-y-0 -mr-2 md:-mr-0 md:h-2/6 md:my-auto"
        />
      </div>
    </FeatureCard>
  );
};

export const Industrie = ({ id }: CardProps) => {
  return (
    <FeatureCard id={id} gradient="from-[#f5fff7] to-[#adf8ff]">
      <div className="grid grid-rows-[.3fr,1fr,.3fr] gap-3 md:gap-0 md:grid-rows-[.4fr,1fr,.4fr] absolute inset-0 p-4">
        <div
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1496247749665-49cf5b1022e9?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
          className="shadow-6"
        />
        <div className="grid place-content-center gap-y-4 md:gap-y-8 text-center px-2 md:px-14 bg-backgroundClr md:h-4/6 md:my-auto shadow-6">
          <h4 className="h3-heading | font-semibold">Industrie</h4>
          <p className="mainParagraph">
            Silos organisationnels, chaînes de production peu flexibles,
            gaspillage des ressources… L’industrie a tout à gagner en intégrant
            des processus optimisés et une gestion rigoureuse.
          </p>
        </div>
        <div
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        />
      </div>
    </FeatureCard>
  );
};

// export const Music = ({ id }: CardProps) => {

//   return (
//     <FeatureCard id={id} gradient="from-[#f7fff5] to-[#adffd8]">
//       <Image
//         className={twMerge(
//           "absolute left-[10%] top-[10%] w-[20%] rounded-xl shadow-lg transition-transform",
//           isFullscreen ? "scale-0" : "scale-100"
//         )}
//         src="/song-1.webp"
//         alt="image"
//       />
//       <Image
//         className={twMerge(
//           "absolute left-[70%] top-[20%] w-[25%] rounded-xl shadow-lg transition-transform",
//           isFullscreen ? "scale-0" : "scale-100"
//         )}
//         src="/song-2.webp"
//         alt="image"
//       />
//       <Image
//         className={twMerge(
//           "absolute left-[20%] top-[60%] w-[30%] rounded-xl shadow-lg transition-transform",
//           isFullscreen ? "scale-0" : "scale-100"
//         )}
//         src="/song-3.webp"
//         alt="image"
//       />
//     </FeatureCard>
//   );
// };

export const Transport = ({ id }: CardProps) => {
  return (
    <FeatureCard id={id} gradient="from-[#fff7f5] to-[#ffd8ad]">
      <div className="absolute inset-0 grid grid-rows-[.3fr,1fr,.3fr] grid-cols-[.7fr,1fr,.7fr] p-4">
        <div
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1495297780779-9efeef6c71a9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
          className="-mb-8 md:-mb-10 ml-4 md:ml-6 relative z-1 shadow-6"
        />
        <div className="col-span-2" />
        <div className="grid place-content-center col-span-3 gap-y-4 md:gap-y-8 text-center px-4 md:px-14 bg-backgroundClr shadow-6">
          <h4 className="h3-heading | font-semibold">Fluidité en mouvement</h4>
          <p className="mainParagraph">
            Des opérations logistiques lourdes, des infrastructures à
            rentabiliser, des délais à respecter : le transport ferroviaire et
            portuaire ne laisse pas de place à l’improvisation.
          </p>
        </div>
        <div className="col-span-2" />
        <div
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1487893667092-772cdd6fe0ec?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
          className="relative z-1 -mt-8 md:-mt-10 mr-4 md:mr-6 shadow-6"
        />
      </div>
    </FeatureCard>
  );
};

export const Services = ({ id }: CardProps) => {
  return (
    <FeatureCard id={id} gradient="from-[#fef5ff] to-[#e1f4ad]">
      <div className="absolute inset-0 grid md:grid-cols-[1fr,.3fr] grid-rows-[1fr,.3fr] p-4">
        <div className="grid place-content-center gap-y-4 order-4 md:order-1 md:gap-y-8 px-4 py-8 md:py-0 md:px-14 bg-backgroundClr shadow-6">
          <h4 className="h3-heading | font-semibold">
            Plus qu’une expertise, une stratégie de croissance
          </h4>
          <p className="mainParagraph">
            Quant à un secteur où la satisfaction client et l’efficacité sont
            reines, il est essentiel de structurer ses opérations pour rester
            compétitif. Manque de visibilité, organisation rigide, pertes de
            temps sur des tâches à faible valeur ajoutée…
          </p>
        </div>
        <div className="md:order-2" />
        <div className="md:order-3" />
        <div
          style={{
            backgroundImage:
              "url('https://media.istockphoto.com/id/1362181407/photo/team-work-and-human-resource-management-concept.jpg?s=2048x2048&w=is&k=20&c=ofAY3nMX_9iLZ0rJKJwD-XPCulmIWRNBAloKxdi6uYE=')",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
          className="-mt-28 md:-mt-14 md:-ml-16 relative z-1 md:shadow-6 order-1 md:order-4"
        />
      </div>
    </FeatureCard>
  );
};
