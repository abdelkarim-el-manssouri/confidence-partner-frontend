import PageWrapper from "@/utils/PageWrapper";
import UsHeroSection from "../components/us-components/UsHeroSection";
import WhyUs from "../components/us-components/WhyUs";
import Stats from "../components/us-components/Stats";

const page = () => {
  return (
    <PageWrapper>
      <UsHeroSection />
      <WhyUs />
      <Stats />
    </PageWrapper>
  );
};

export default page;
