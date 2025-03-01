import { FaArrowRight, FaMapLocationDot } from "react-icons/fa6";
import { PiDotOutline, PiPhoneDisconnectFill } from "react-icons/pi";
import { BsMailboxFlag } from "react-icons/bs";
import { FitWithText } from "./FitWithText";
import Image from "next/image";
import { navbarLinks, socialLinks } from "@/data/data";
import Link from "next/link";
import { PrimaryShinyButton } from "@/ui/ShinyButton";

const Footer = () => {
  return (
    <footer
      style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%" }}
      className="relative h-[700px] md:h-[500px]"
    >
      <div className="container relative h-[calc(100dvh+700px)] md:h-[calc(100dvh+500px)] -top-[100dvh]">
        <div className="sticky top-[calc(100dvh-700px)] md:top-[calc(100dvh-500px)] h-[700px] md:h-[500px] py-5 overflow-x-clip md:overflow-x-auto">
          <FooterContent />
        </div>
      </div>
    </footer>
  );
};

export default Footer;

const FooterContent = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="relative min-h-full grid grid-rows-[1fr,auto] rounded-3xl bg-gradient-to-bl from-secondary1 to-fadedjade text-moonMist p-3 md:px-10 text-center capitalize isolate">
      <div
        className="absolute inset-0 -z-1 opacity-10 bg-[url('/svg/bgPatterns3.svg')] bg-center bg-cover"
      />
      <div className="grid grid-rows-[auto,1fr,auto] border-b border-inherit py-6">
        <p className="my-6 text-4xl lg:text-5xl 2xl:text-6xl font-medium font-hurme">
          Prêts? passer à l’action!
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-6 py-4 text-start items-center">
          <div className="p-6 2xl:p-10 col-span-2">
            <p className="text-2xl xl:text-3xl 2xl:text-4xl text-pretty lg:text-balance mb-10 font-medium">
              Avec notre expertise en audit, contrôle QHSE et conduite du
              changement, on n’est pas juste là pour faire le job, on est là
              pour avancer avec vous. Votre réussite, c’est aussi la nôtre.
              Ensemble, on fait bouger les choses.
            </p>
            <PrimaryShinyButton href="/contact">
              <span className="px-16">
                contactez nous
                <FaArrowRight className="group-hover:-rotate-45 transition-transform inline ml-3" />
              </span>
            </PrimaryShinyButton>
          </div>
          <div className="grid place-content-start items-center p-5">
            <span className="block mb-4 text-lg md:text-md text-grainBrown uppercase">
              sitemap
            </span>
            <ul>
              {navbarLinks.map((el) => (
                <li key={el.id} className="text-2xl mb-1">
                  <Link
                    href={el.href}
                    className="flex items-center group hover:text-accent transition-colors"
                  >
                    <PiDotOutline className="opacity-0 group-hover:opacity-100 -ml-4 group-hover:ml-0 transition-[opacity,margin]" />
                    <span>{el.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid place-content-start items-center p-5 -mt-27">
            <span className="block mb-4 text-lg md:text-md text-grainBrown uppercase">
              suivez nous
            </span>
            <ul>
              {socialLinks.map((el) => (
                <li key={el.id} className="text-2xl mb-1">
                  <a
                    href={el.href}
                    className="flex items-center group hover:text-accent transition-colors"
                  >
                    <PiDotOutline className="opacity-0 group-hover:opacity-100 -ml-4 group-hover:ml-0 transition-[opacity,margin]" />
                    <span>{el.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 items-center text-md font-semibold gap-y-10">
          <div className="justify-self-center md:justify-self-start">
            <Link href="/">
              <Image
                src="/svg/primaryLogo.svg"
                alt="website logo"
                className="footer-logo | w-40"
                width="1"
                height="1"
              />
              <span className="sr-only">click to go to homePage</span>
            </Link>
          </div>
          <div className="flex gap-2 justify-self-center">
            <div className="group grid place-content-center border border-inherit rounded-full hover:bg-backgroundClr p-4 transition-colors before:transition relative lg:before:text-xl before:content-['Imm_14,_Apprt_3,_Quartier_Anas_4,_Route_Immouzzer,_Fès,_Maroc'] before:absolute md:before:left-1/2 before:top-[-105%] before:opacity-0 hover:before:opacity-100 before:w-[300px] md:before:w-[500px] before:bg-backgroundClr before:text-accent before:rounded-full before:py-2 before:scale-50 before:hover:scale-100 before:translate-y-10 before:hover:translate-y-0 before:-translate-x-1/2 before:-left-20">
              <FaMapLocationDot className="group-hover:text-accent" />
            </div>
            <a
              href="tel:+212644316520"
              className="group grid place-content-center border border-inherit rounded-full hover:bg-backgroundClr p-4 transition-colors before:transition relative lg:before:text-xl before:content-['+212_644_316_520'] before:absolute before:left-1/2 before:top-[-105%] before:opacity-0 hover:before:opacity-100 before:w-[150px] before:bg-backgroundClr before:text-accent before:rounded-full before:py-2 before:scale-50 before:hover:scale-100 before:translate-y-10 before:hover:translate-y-0 before:-translate-x-1/2"
            >
              <span className="sr-only">phone number</span>
              <PiPhoneDisconnectFill className="group-hover:text-accent" />
            </a>
            <a
              href="mailto:contact@confidence-partner.ma"
              className="group grid place-content-center border border-inherit rounded-full hover:bg-backgroundClr p-4 transition-colors before:transition relative lg:before:text-xl before:content-['contact@confidence-partner.ma'] before:absolute before:left-1/2 before:top-[-105%] before:opacity-0 hover:before:opacity-100 before:w-[220px] before:bg-backgroundClr before:text-accent before:rounded-full before:py-2 before:scale-50 before:hover:scale-100 before:translate-y-10 before:hover:translate-y-0 before:-translate-x-1/2"
            >
              <span className="sr-only">phone number</span>
              <BsMailboxFlag className="group-hover:text-accent" />
            </a>
          </div>
          <div className="justify-self-center md:justify-self-end text-xl col-span-2 md:col-span-1">
            &copy; confidence partner {currentYear} - Tous droits réservés.
          </div>
        </div>
      </div>
      <FitWithText />
    </div>
  );
};
