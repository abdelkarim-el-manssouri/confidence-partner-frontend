// import { Button } from "@/ui/button";
import { PrimaryShinyButton } from "@/ui/ShinyButton";
import { FaArrowRight } from "react-icons/fa6";
// import Tile from "@/ui/Tile";
// import Link from "next/link";

const HeroSection = () => {
  return <HeroContent />;
};

export default HeroSection;

const HeroContent = () => {
  return (
    <>
      <div className="h-dvh relative overflow-clip isolate backdrop-blur-sm">
        {/* <div className="absolute size-32 rounded-full top-[70%] right-[15%] bg-gradient-to-tl from-meta-5 to-transparent mix-blend-multiply animate-blob filter blur-sm" />
        <div className="absolute size-32 rounded-full top-[72%] right-[13%] bg-gradient-to-br from-meta-5 to-transparent mix-blend-multiply animate-blob animation-delay-2000 filter blur-sm" /> 
        <div className="absolute size-50 rounded-full top-[5%] left-[5%]  bg-gradient-to-r from-meta-5 to-transparent mix-blend-multiply animate-blob filter blur-sm" />*/}
        {/* <div className="absolute size-80 rounded-full top-[50%] left-[10%] bg-gradient-to-tr from-meta-5 to-transparent mix-blend-multiply animate-blob animation-delay-2000 filter blur-md" />
        <div className="absolute size-80 rounded-full top-[55%] left-[8%] bg-gradient-to-bl from-meta-5 to-transparent mix-blend-multiply animate-blob filter blur-md" /> */}
        {/* <div className="absolute size-50 rounded-full top-[20%] right-[8%] bg-gradient-to-tr from-meta-5 to-transparent mix-blend-multiply filter blur-md animate-blob animation-delay-2000 filter blur-md" />
        <div className="absolute size-50 rounded-full top-[17%] right-[6%] bg-gradient-to-bl from-meta-5 to-transparent mix-blend-multiply filter blur-md animate-blob filter blur-md" /> */}
        <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-backgroundClr to-transparent" />
        <div className="absolute inset-0 -z-1 opacity-10 bg-center bg-cover bg-[url('/svg/bgPatterns3.svg')]" />
        <div className="container h-full grid gap-20 lg:gap-16 2xl:gap-40 place-content-center z-10 text-center pt-[var(--navbarHeight)]">
          <h1 className="text-background-color | text-5xl lg:text-8xl 2xl:text-9xl uppercase">
            Au cœur de votre entreprise,
            <br /> la confiance en action.
          </h1>
          <h2 className="text-3xl lg:text-4xl 2xl:text-6xl font-medium">
            Avez-vous une vision audacieuse
            <span className="text-accent font-bold -rotate-[20deg] inline-block text-6xl 2xl:text-7xl font-quicksand">
              ?
            </span>
            <br />
            Nous la transformons en réalité.
          </h2>

          <PrimaryShinyButton
            href="/contact"
            className="group md:w-1/2 mx-auto"
          >
            <span className="">
              contactez nous
              <FaArrowRight className="group-hover:-rotate-45 transition-transform inline ml-3" />
            </span>
          </PrimaryShinyButton>
        </div>
      </div>
    </>
  );
};
