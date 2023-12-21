import React from "react";
import dynamic from "next/dynamic";
//componente de layout footer e navbar
import {
  InfoCard,
  ProjectCard,
  HeroSection,
  PersonalCard,
  Features,
  Loading,
} from "../../src/components/utilsComponents/index"; //componente

import FloatButton from "../../src/components/buttons/floatButton";
import { useHomePopulation } from "../../src/hook/useHomePupulation";
import { useFormPostApi } from "../../src/hook/form";
import Confetti from "react-confetti";
import {
  AboutSection,
  HeroSectionSlide,
  ProjectSection,
} from "../../src/components/sections";
import ContactSection from "../../src/components/sections/contactSection";
import Section from "../../src/components/sections/sectionOne";
import SectionOne from "../../src/components/sections/sectionOne";
import SectionTwo from "../../src/components/sections/sectionTwo";

const InfoCardComponent = React.lazy(
  () => import("../../src/components/utilsComponents/infoCard")
);
const FeaturesComponent = React.lazy(
  () => import("../../src/components/utilsComponents/featuredCards")
);
const ProjectComponent = dynamic(
  async () => await import("../../src/components/utilsComponents/projectCard"),
  {
    ssr: false,
    loading: () => {
      return <Loading />;
    },
  }
);

export default function Homepage() {
  const { isLoading, projects, textProps, featuresData } = useHomePopulation();
  const { showConfetti } = useFormPostApi();
  return (
    <div>
      {showConfetti && (
        <div className="fixed h-auto items-center mx-auto">
          <Confetti className="flex w-screen" />
        </div>
      )}
      <div className="w-full h-auto bg-white">
        <HeroSection text="Sua Historia começa com quem faz Historia !" />
        {/* <HeroSectionSlide /> */}
        <AboutSection />
        <SectionOne />
        <SectionTwo />
        <ProjectSection />
        <ContactSection />
      </div>
    </div>
  );
}
