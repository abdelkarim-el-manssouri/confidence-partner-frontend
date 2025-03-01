import PageWrapper from "@/utils/PageWrapper";
import TogetherHeroSection from "../components/together-components/TogetherHeroSection";
import TogetherUnderstandSection from "../components/together-components/TogetherUnderstandSection";
import TogetherIndustriesSection from "../components/together-components/TogetherIndustriesSection";
import TogetherSolutionsSection from "../components/together-components/TogetherSolutionsSection";

const page = () => {
  return (
    <PageWrapper>
      <TogetherHeroSection />
      <TogetherUnderstandSection />
      <TogetherIndustriesSection />
      <TogetherSolutionsSection />
    </PageWrapper>
  );
};

export default page;
