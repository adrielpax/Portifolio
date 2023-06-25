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
        <div className="fixed h-auto items-center z-40 mx-auto">
          <Confetti className="flex w-screen" />
        </div>
      )}
      <div className="dark w-full h-auto bg-gradient-to-r from-cyan-400 to-blue-900">
        <div id="up">
          <HeroSection text="Sua Historia começa com quem faz Historia !" />
        </div>
        <section className="pb-7">
          <FloatButton />
          <div id="profile">
            <PersonalCard />
          </div>
          <div id="projects" className="mb-24">
            <React.Suspense fallback={<Loading />}>
              <InfoCardComponent textsProps={textProps} index={0} />
            </React.Suspense>
            <div className="flex justify-center gap-4">
              <React.Suspense fallback={<Loading />}>
                <ProjectComponent projects={projects} columns={2} />
              </React.Suspense>
            </div>
          </div>
          <div id="stacks">
            <React.Suspense fallback={<Loading />}>
              <InfoCardComponent textsProps={textProps} index={1} />
            </React.Suspense>
            <div className="mb-24">
              <React.Suspense fallback={<Loading />}>
                <FeaturesComponent features={featuresData}></FeaturesComponent>
              </React.Suspense>
            </div>
          </div>
          <React.Suspense fallback={<Loading />}>
            <InfoCardComponent textsProps={textProps} index={2} />
          </React.Suspense>
          <div id="contact"></div>
        </section>
      </div>
    </div>
  );
}
