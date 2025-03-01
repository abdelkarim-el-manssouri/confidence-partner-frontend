import { Metadata } from "next";
import HeroSection from "./components/homePage-components/HeroSection";
import WhoWeAre from "./components/homePage-components/WhoWeAre";
import BriefDefinition from "./components/BriefDefinition";
import HomeIntroParagraph from "./components/homePage-components/HomeIntroParagraph";
import OurValues from "./components/homePage-components/OurValues";
import PageWrapper from "@/utils/PageWrapper";
// import CtaSection from "./components/CtaSection";
// import SectionDivider from "@/ui/SectionDivider";
// import DividerLine from "@/ui/DividerLine";

export const metadata: Metadata = {
  title: "confidence Partner Consulting",
  description: "This is Next.js Home",
};

export default function Home() {
  return (
    <PageWrapper>
      <HeroSection />
      <HomeIntroParagraph />
      <BriefDefinition
        className="mainParagraph container | text-center px-10 lg:px-60 py-sectionPadding 2xl:mb-[15rem]"
        content="Au cœur du Maroc, CONFIDENCE PARTNER CONSULTING se distingue comme un cabinet de conseil dédié à l'art de la Qualité, de l'Hygiène, de la Sécurité, de l'Environnement et de l'Excellence Opérationnelle. Nos services élaborent des solutions en conseil, études, ingénierie, audit et formation, guidant nos partenaires vers des horizons conformes aux normes internationales: ISO 9001, ISO 14001, ISO 45001, ISO 22000, ISO 50001, ainsi que les standards NFPA, FM Global, APSAD et MASE."
      />
      <WhoWeAre />
      <OurValues />
      {/* <CtaSection /> */}
    </PageWrapper>
  );
}
