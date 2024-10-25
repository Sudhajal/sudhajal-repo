
import React from "react";
import BackgroundImage from "./BackgroundImage";
import LogoImage from "./LogoImage";
import ScrollPrompt from "./ScrollPrompt";

interface ScrollExploreSectionProps {
  backgroundImageSrc: string;
  logoImageSrc: string;
}

const ScrollExploreSection: React.FC<ScrollExploreSectionProps> = ({
  backgroundImageSrc,
  logoImageSrc,
}) => {
  return (
    <section className="flex relative flex-col items-end px-20 pt-52 pb-20 w-full min-h-[706px] max-md:px-5 max-md:pt-24 max-md:max-w-full">
      <BackgroundImage src={backgroundImageSrc} />
      <div className="flex relative flex-col  w-[900px]">
        <div className="justify-center">
        <LogoImage src={logoImageSrc} />
        </div>
        <ScrollPrompt />
      </div>
    </section>
          
  );
};

export default ScrollExploreSection;
