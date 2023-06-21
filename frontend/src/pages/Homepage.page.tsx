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
} from "../components/index"; //componente

import icons from "../utils/icons/icons";
import FloatButton from "../components/buttons/floatButton";
import { useHomePopulation } from "../hook/useHomePupulation";

const InfoCardComponent = React.lazy(() => import("../components/infoCard"));
const FeaturesComponent = React.lazy(
  () => import("../components/featuredCards")
);
const ProjectComponent = dynamic(
  async () => await import("../components/projectCard"),
  {
    ssr: false,
    loading: () => {
      return <Loading />;
    },
  }
);

export default function Homepage() {
  const { isLoading, projects, textProps, featuresData } = useHomePopulation();
  return (
    <>
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
          <div id="contact"></div>
        </section>
      </div>
    </>
  );
}
