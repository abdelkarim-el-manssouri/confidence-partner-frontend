import { Metadata } from "next";
import YouHeroSection from "../components/you-components/YouHeroSection";
import YouProblemsSection from "../components/you-components/YouProblemsSection";
import YouActivityDomains from "../components/you-components/YouActivityDomains";
import PageWrapper from "@/utils/PageWrapper";

export const metadata: Metadata = {
  title: "your problems",
  description: "we are here to help you solve your problems",
};

const page = () => {
  return (
    <PageWrapper>
      <YouHeroSection />
      <YouProblemsSection />
      <YouActivityDomains />
    </PageWrapper>
  );
};

export default page;
