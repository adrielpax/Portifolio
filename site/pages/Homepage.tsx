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
} from "../src/components/homeComponents/index"; //componente

import FloatButton from "../src/components/buttons/floatButton";
import { useHomePopulation } from "../src/hook/useHomePupulation";
import { useFormPostApi } from "../src/hook/form";
import Confetti from "react-confetti";
import { AboutSection, ProjectSection } from "../src/components/sections";
import ContactSection from "../src/components/sections/contactSection";

const InfoCardComponent = React.lazy(
  () => import("../src/components/homeComponents/infoCard")
);
const FeaturesComponent = React.lazy(
  () => import("../src/components/homeComponents/featuredCards")
);
const ProjectComponent = dynamic(
  async () => await import("../src/components/homeComponents/projectCard"),
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
      <div className="dark w-full h-auto bg-gradient-to-r from-cyan-400 to-blue-900">
        <HeroSection text="Sua Historia começa com quem faz Historia !" />
        <AboutSection />
        <ProjectSection />
        <ContactSection />
      </div>
    </div>
  );
}
