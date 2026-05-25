"use client";

import { useState } from "react";
import CardMy from "../card";
import { Button } from "./button";
import Image from "next/image";
import CarroselProjects from "../CarroselProjects";
import CertificationCards from "../certificationCard";

export default function SegmentControl() {
  // Estado para controlar qual aba está ativa (ex: 'projects-champions', 'analytics', 'certifiedAt')
  const [activeTab, setActiveTab] = useState("projects-champions");

  return (
    <div className="flex flex-col items-start w-full px-2 my-3">
      {/* Botões do Segment Control */}
      <div className="flex p-1  rounded-lg shadow-sm w-full justify-between">
        <button
          onClick={() => setActiveTab("projects-champions")}
          className={`px-6 py-2 text-sm w-full font-medium rounded-md transition-all ${
            activeTab === "projects-champions"
              ? "bg-black text-white shadow-sm"
              : "text-gray-600 hover:text-gray-900"
          }`}
        >
          Projetos Campeôes
        </button>
        <button
          onClick={() => setActiveTab("principal-projects")}
          className={`px-6 py-2 text-sm w-full font-medium rounded-md transition-all ${
            activeTab === "principal-projects"
              ? "bg-black text-white shadow-sm"
              : "text-gray-600 hover:text-gray-900"
          }`}
        >
          Projetos Principais
        </button>
        <button
          onClick={() => setActiveTab("certifiedAt")}
          className={`px-6 py-2 text-sm w-full font-medium rounded-md transition-all ${
            activeTab === "certifiedAt"
              ? "bg-black text-white shadow-sm"
              : "text-gray-600 hover:text-gray-900"
          }`}
        >
          Certificações
        </button>
      </div>

      {/* Conteúdo Principal que muda conforme a aba clicada */}
      <div className="w-full mt-6 rounded-xl text-start">
        {activeTab === "projects-champions" && (
          <CardMy className="flex flex-col items-stretch justify-center border-none shadow-none bg-none p-0 w-full">
            <h3 className="px-3 scroll-m-20 pb-2 text-xl text-zinc-600 font-semibold tracking-tight first:mt-0">
              Projetos Campeões 
            </h3>
            <blockquote className="px-3 italic text-sm text-zinc-400 mb-4">
                Projetos de caso de uso real de mercado !
            </blockquote>

            <div
              className="flex flex-col w-full border border-amber-500 transition duration-300
          bg-gradient-to-tr from-amber-500/10 via-amber-100/10 to-yellow-500/10 
          rounded-2xl"
            >
              {[
                {
                  icon: "/images/trofeus/meu-barbeiro.png",
                  title: "🏆​ Meu Barbeiro App 🏆​",
                  descriptiton:
                    "Fundador do meu barbeiro um web app que automatiza as trocas de mensagens dos barbeiros, otimizando tempo e agendamentos.",
                  ProtectionText:
                    "O projeto é pantentiado e tem seus direitos reservados de imagem e technologia intelectual. qualquer uso ou copia, serão tomadas medidas de acordo com as leis: Lei do Software (Lei nº 9.609/98), Direito Autoral (Lei nº 9.610/98), Registro no INPI (Instituto Nacional da Propriedade Industrial).",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col gap-4 justify-center items-center
                  p-4 group hover:bg-white/5 transition duration-300 border-b 
                  border-zinc-300 last:border-b-0 text-center"
                >
                  <div className="flex flex-row items-center gap-4">
                    <Image
                      src={item.icon}
                      alt={item.title}
                      objectFit="cover"
                      width={80}
                      height={80}
                      className={`rounded-full text-xs border-3 z-10
                  border-amber-400 p-1 flex items-center justify-center bg-amber-400/5
                    group-hover:scale-105 transition-transform duration-300 shadow-lg shadow-amber-400`}
                    />
                    <div className="flex flex-col items-start justify-start">
                      <h2 className="flex items-center gap-2 scroll-m-20 pb-2 text-md text-zinc-800 font-semibold tracking-tight first:mt-0">
                        {item.title}
                      </h2>
                      <h3 className="scroll-m-20 text-left max-w-md pb-2 text-xs text-zinc-600 font-semibold ">
                        {item.descriptiton}
                      </h3>
                    </div>
                  </div>
                  <div>
                    <blockquote className="italic text-justify text-xs text-zinc-400 mb-4 bg-gray-100 rounded-xl px-4 py-2 border">
                      {item.ProtectionText}
                    </blockquote>
                    <a
                      href="https://barberboost.vercel.app/"
                      className="cursor-pointer"
                    >
                      <Button
                        className="rounded-lg cursor-pointer  
                  hover:scale-105 bg-gradient-to-tr from-amber-400 to-amber-500 ring 
                  px-8 py-2 shadow-amber-400 shadow-lg"
                      >
                        Saiba mais
                      </Button>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </CardMy>
        )}

        {activeTab === "principal-projects" && <CarroselProjects />}

        {activeTab === "certifiedAt" && (
          <CardMy className="flex flex-col items-stretch justify-center bg-none shadow-none border-none">
            <h3 className="px-3 scroll-m-20 pb-2 text-xl text-zinc-600 font-semibold tracking-tight first:mt-0">
              Certificações Tecnicas & Officiais
            </h3>
            <blockquote className="px-3 italic text-sm text-zinc-400 mb-4">
              Essas certificações são para apredizados especificos
              <br /> consolidando e validando conhecimentos em ferramantas e
              technologias.
            </blockquote>
            <CertificationCards />
          </CardMy>
        )}
      </div>
    </div>
  );
}
