import { PrimaryShinyButton } from "@/ui/ShinyButton";

const YouHeroSection = () => {
  return (
    <div className="h-dvh grid grid-cols-12 grid-rows-12 py-10 relative isolate bg-gradient-to-b from-transparent to-fadedjade">
      <div className="absolute inset-0 -z-1 opacity-10 bg-[url('/svg/bgPatterns.svg')] bg-cover bg-center" />
      <div className="col-span-12 row-span-3" />
      <div className="col-span-2 row-span-3 bg-black-2 bg-[url('/images/peopleStanding.jpg')] bg-cover bg-right bg-no-repeat" />

      <div className="bg-black-2 col-span-2 row-span-9 rounded-tr-[48px] rounded-bl-[48px] bg-[url('/images/peopleStanding.jpg')] bg-cover bg-right bg-no-repeat" />

      <div className="col-span-8 row-span-6 grid content-center p-5 lg:p-14">
        <h1 className="text-3xl lg:text-5xl 2xl:text-[5rem] shadow-black-2 text-shadow-xs !leading-snug">
          Dépassons les standards, réinventons la performance <br />
          Transformons l’ambition en performance
        </h1>
        <PrimaryShinyButton href="/contact" className="mt-10">
          <span className="px-16">get in touch</span>
        </PrimaryShinyButton>
      </div>
      <div className="col-span-2 row-span-6 rounded-tr-3xl" />
      <div className="row-span-3 col-span-8 bg-[url('/images/peopleStanding.jpg')] bg-cover bg-right bg-no-repeat" />
    </div>
  );
};

export default YouHeroSection;
