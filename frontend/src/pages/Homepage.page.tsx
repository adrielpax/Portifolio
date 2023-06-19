import React from "react";
import dynamic from 'next/dynamic';
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

const InfoCardComponent = React.lazy(() => import("../components/infoCard"));
const FeaturesComponent = React.lazy(
  () => import("../components/featuredCards")
);
const ProjectComponent = dynamic(async() => await import("../components/projectCard"),{
  ssr:false,
  loading:()=>{
    return <Loading/>
  }
});

export default function Homepage() {
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);
  
  const projects = [
    {
      id: 1,
      title: "YourFinance",
      subtitle: "Create With React.JS is a Simple Tecnical Project",
      image: "/imgs/yourfinance.gif",
      link: "https://yourfinance.netlify.app/",
    },
    {
      id: 1,
      title: "Ecommerce",
      subtitle: "em breve",
      image: "",
      link: "",
    },
    {
      id: 1,
      title: "FullStack Dashboard",
      subtitle: "em Breve",
      image: "",
      link: "",
    },
    // Adicione mais objetos de projeto conforme necessário
  ];
  const textProps = [
    {
      id: 1,
      title: "Destaque de Projetos",
      subTitle:
        "Mostrando ao mundo talento e criatividade através dos projetos incríveis que desenvolvi, Deixando uma marca duradoura com soluções inovadoras e designs impressionantes.",
    },
    {
      id: 2,
      title: "Stacks e Habilidades",
      subTitle:
        "Stacks construidas ao longo do tempo, com melhorias contantes e objetivos diferentes",
    },
  ];
  const featuresData = [
    {
      id: 1,
      icon: icons.mongo,
      title: "M.E.R.N - STACK",
      colorIcon: "text-green-500",
      description:
        "Mongo DB, Express, React and Node.js Tecnologias escalaveis e modernas para sistemas web",
    },
    {
      id: 2,
      icon: icons.next,
      title: "J.A.M - STACK",
      colorIcon: "text-black",
      description:
        "Javascript, Apis, Markup, usando tecnologias como Next strapi e git desenvolvendo soluções seguras e escalavais para Web",
    },
    {
      id: 3,
      icon: icons.js,
      title: "FULL WEB - STACK",
      colorIcon: "text-yellow-800",
      description:
        "Uma analise profunda desde a abstração a parte tecnica de um projeto trazendo soluções atuais e metodos de pagamentos como stripe",
    },
  ];

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
                <ProjectComponent projects={projects} columns={3} />
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
