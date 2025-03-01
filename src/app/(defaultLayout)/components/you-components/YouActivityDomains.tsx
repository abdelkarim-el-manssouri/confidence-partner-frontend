import BriefDefinition from "../BriefDefinition";
import SwitchContentOnScroll from "../SwitchContentOnScroll";

const YouActivityDomains = () => {
  return (
    <>
      <div className="container my-20 2xl:my-40 pt-28">
        <h4 className="text-center text-4xl lg:text-5xl xl:text-6xl">
          Une expertise adaptée à votre secteur
        </h4>
        <BriefDefinition
          className="mainParagraph container | text-center px-10 lg:px-60 py-sectionPadding 2xl:mb-[15rem]"
          content="Que vous soyez une PME ambitieuse ou une organisation en quête de transformation, vous savez que l’essentiel réside dans l’audace de franchir de nouvelles étapes, d’explorer de nouvelles avenues et de renforcer vos équipes pour naviguer dans un environnement en constante évolution. C'est cette vision qui fait de vous le partenaire avec lequel nous aimons avancer, main dans la main, pour aller toujours plus loin."
        />
      </div>
      <YouActivityDomainsContent />
    </>
  );
};

export default YouActivityDomains;

const YouActivityDomainsContent = () => {
  return <SwitchContentOnScroll />;
};
