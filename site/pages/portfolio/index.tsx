import React from "react";
import {
  ButtonComponent,
  PersonalCard,
} from "../../src/components/utilsComponents";
import ContactSection from "../../src/components/sections/contactSection";
import { ProjectSection } from "../../src/components/sections";
import { FaLongArrowAltRight } from "react-icons/fa";
import PersonalProjectSection from "../../portfolio/src/sections/personalProjectSection";
import PersonalContactSection from "../../portfolio/src/sections/personalContactSection";
import Head from "next/head";

export default function PersonalPortifolio() {
  const handleContact = () => {
    window.scrollBy(0, 2120);
  };
  return (
    <div>
      <Head>
        <title>Adriel Developer Full-Stack | Personal Portfolio.</title>
        <meta name="author" content="Adriel._ll" />
        <meta
          name="keywords"
          content="Developer full-stack nextjs reactjs javascript mongodb postgreSql nodejs typescript express fastify axios"
        />
        <meta
          name="description"
          content="Desenvolvedor Web / Full-Stack - Transformando linhas de código em experiências inovadoras."
        />
      </Head>
      <div className="h-auto">
        <div className="flex items-start justify-center mx-auto gap-[136px] self-stretch md:p-10 bg-white mt-20">
          <div
            className="flex md:items-start justify-center mx-auto md:gap-8 flex-[1_0_0] md:rounded-2xl md:p-[72px]
          bg-gradient-to-b from-[#0047FF] to-[#00F0FF] flex-col lg:flex-row
          text-white items-start gap-10 self-stretch px-6 py-12"
          >
            <PersonalCard />
            <div className="flex flex-col items-start w-auto md:w-[592px] p-6 gap-7 md:gap-8 self-stretch">
              <div className="flex items-center gap-6  text-[#654AEE]">
                {/* <FaPython className="w-5 h-5" />
                  <FaReact className="w-5 h-5" />
                  <SiJavascript className="w-5 h-5" />
                  <FaNodeJs className="w-5 h-5" />
                  <SiTailwindcss className="w-5 h-5" /> 
                  */}
              </div>
              <h1 className="text-[#7DFFAF] text-regular text-base">
                Personal portfolio
              </h1>
              <h2 className="font-semibold text-4xl font-sans">
                Transformando linhas de código em experiências inovadoras.
              </h2>
              <p className="font-regular font-medium font-sans text-justify">
                Sou um desenvolvedor full-stack apaixonado por transformar
                ideias em soluções digitais.
              </p>
              <p className="font-regular font-medium font-sans text-justify">
                Busco meu primeiro desafio profissional para aplicar minha
                habilidade técnica e contribuir para projetos inovadores.
              </p>

              <ButtonComponent
                className="bg-[#121212] rounded-full z-20 font-medium
              shadow-none py-4 px-10 text-base hover:bg-white hover:text-cyan-600
            text-white active:bg-gray-400 border-4 border-transparent active:border-gray-600 transition-all"
                onClick={() => handleContact()}
              >
                Entrar em contato <FaLongArrowAltRight />
              </ButtonComponent>
            </div>
          </div>
        </div>
        <PersonalProjectSection />
        <ContactSection />
      </div>
    </div>
  );
}
