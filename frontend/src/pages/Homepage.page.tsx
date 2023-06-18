import React from "react";
//componente de layout footer e navbar
import {
  InfoCard,
  ProjectCard,
  HeroSection,
  PersonalCard,
  Features,
} from "../components/index"; //componente

import icons from "../utils/icons/icons";

export default function Homepage() {
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
      description: "Mongo DB, Express, React and Node.js Tecnologias escalaveis e modernas para sistemas web",
    },
    {
      id: 2,
      icon: icons.next,
      title: "J.A.M - STACK",
      description: "Javascript, Apis, Markup, usando tecnologias como Next strapi e git desenvolvendo soluçues seguras e escalavais para Web",
    },
    {
      id: 3,
      icon: icons.js,
      title: "FULL WEB - STACK",
      description: "Uma analise profunda desde a abistração a parte tecnica de um projeto trazendo soluçoes atuais e metodos de pagamentos como stripe",
    },
   
  ];
  return (
    <>
      <div className="dark w-full h-auto bg-gradient-to-r from-cyan-400 to-blue-900">
        <div>
          <HeroSection text="Sua Historia começa com quem faz Historia !" />
        </div>
        <section className="pb-7">
          <div>
            <PersonalCard />
          </div>
          <div className="mb-24">
            <InfoCard textsProps={textProps} index={0}/>
            <div className="flex justify-center gap-4">
              <ProjectCard projects={projects} columns={3} />
            </div>
          </div>
          <div>
            <InfoCard textsProps={textProps} index={1}/>
            <div className="mb-24">
              <Features features={featuresData}></Features>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
