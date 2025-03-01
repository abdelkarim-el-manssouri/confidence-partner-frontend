import { activityFields } from "@/data/data";
import { FeatureTitle } from "./features/Title";

const SwitchContentOnScroll = () => {
  return (
    <div className="bg-[linear-gradient(to_bottom,_var(--background),_var(--background),_var(--lightGreen)_10%,_var(--lightGreen)_90%,_var(--background))]">
      <div className="coloredBgSectionMargin | h-full shadow-6 rounded-3xl mb-20 bg-backgroundClr lg:px-10 relative isolate">
        <div className="absolute inset-0 -z-1 opacity-15 bg-[url('/svg/bgPatterns.svg')] bg-center bg-cover" />
        <div className="container">
          <div className="grid grid-cols-3 items-start w-full md:gap-20">
            <div className="py-[50dvh] pr-10 md:pr-0">
              <ul>
                {activityFields.map((el) => (
                  <li key={el.id}>
                    <h3 className="py-6 md:py-16 text-3xl lg:text-6xl font-semibold">
                      <FeatureTitle id={el.id}>{el.title}</FeatureTitle>
                    </h3>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-span-2 sticky top-0 h-dvh flex items-center">
              <div className="relative w-full aspect-reverseVideo md:aspect-video bg-gradient-to-bl from-backgroundClr to-accent2 rounded-md">
                {activityFields.map((el) => (
                  <el.card id={el.id} key={el.id} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SwitchContentOnScroll;
