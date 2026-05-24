import CardMy from "@/components/card";
import Image from "next/image";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { BadgeCheck, Github, Linkedin } from "lucide-react";
import TrainingCard from "@/components/trainingCard";
import CertificationCards from "@/components/certificationCard";
import Skills from "@/components/skills";
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import Link from "next/link";
import ReadMoreButton from "@/components/readmore";
import CarroselProjects from "@/components/CarroselProjects";

export default function Home() {
  return (
    <div
      className="bg-linear-to-tr md:justify-center items-center
      from-white to-white flex flex-col mx-auto max-w-150 my-8 pb-9 h-100vh"
    >
      <CardMy
        className="flex flex-col items-start justify-center mx-2 
         border-zinc-500/20 rounded-xl border-none bg-none shadow-none hover:shadow-none"
      >
        <div className="flex flex-row gap-3 mb-2">
          <Tooltip>
            <div
              className="relative flex flex-row min-w-26 h-26 md:w-32 md:h-32 rounded-full border-2 ring-4
            ring-white border-zinc-800/20"
            >
              <TooltipTrigger asChild>
                <Image
                  src={"/images/profile.png"}
                  className="relative rounded-full"
                  fill
                  objectFit="cover"
                  objectPosition="top"
                  alt={"profileimage"}
                />
              </TooltipTrigger>
              <TooltipContent side="bottom">
                <p>Adriel L. | Analista de Sistemas</p>
              </TooltipContent>
            </div>
          </Tooltip>
          <div>
            <h2
              className="flex items-start mt-4 gap-0.5 mb-2 scroll-m-20 text-base text-zinc-800 
            font-semibold tracking-tight first:mt-0"
            >
              {"Adriel Silva"}
            </h2>
            <h3 className="scroll-m-20 pb-0.5 text-sm text-zinc-600 font-semibold tracking-tight first:mt-0">
              Desenvolvedor Full-Stack & Especialista em Automação.
            </h3>
            <p className="text-xs text-zinc-500 mb-4">
              Sistemas de informação - UNA
            </p>
          </div>

          {/* <BadgeCheck className="text-blue-500  h-4 w-4" /> */}
        </div>

        <div className="flex flex-col justify-start py-1 mb-2">
          <blockquote className=" italic text-xs text-zinc-400">
            Betim, Minas Gerais, Brasil
          </blockquote>
          <p className=" [&:not(:first-child)]:mt-0.5 text-xs text-zinc-500">
            Construindo plataformas SaaS, MVPs e sistemas que escalam negócios.
          </p>
        </div>
        <div className="my-3 w-full">
          <Skills />
        </div>

        <div className="flex gap-2 w-full">
          <Link href="https://typebot.co/my-typebot-75c4uvl" className="w-full">
            <Button
              size="sm"
              className="rounded-lg cursor-pointer px-3 py-4 ring ring-white w-full
              bg-gradient-to-tr hover:shadow-md shadow-amber-500 from-amber-600 to-amber-500 text-xs"
            >
              Entrar em Contato
            </Button>
          </Link>
          <Link href="https://github.com/adrielpax" target="_blank">
            <Button
              variant="outline"
              size="sm"
              className="rounded-lg cursor-pointer px-3 py-4 text-xs"
            >
              {" "}
              <Github />
            </Button>
          </Link>

          <Link href="https://linkedin.com/in/adriel-lucas" target="_blank">
            <Button
              variant="outline"
              size="sm"
              className="rounded-lg cursor-pointer px-3 py-4 text-xs"
            >
              <Linkedin />
            </Button>
          </Link>
        </div>
      </CardMy>
      <CardMy className="flex flex-col items-stretch justify-center my-6 border-none shadow-none bg-none p-0 w-full">
        <h3
          className="scroll-m-20 text-xl px-3
         text-zinc-600 font-semibold tracking-tight first:mt-0 mb-4"
        >
          Projetos Campeões
        </h3>
        <blockquote className="px-3 italic text-sm text-zinc-400 mb-4">
          Alguns projetos ainda podem estar em desenvolvimento,
          <br /> porem são projetos feitos por mim automonamente e com uso real
          no mercado !
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
                    className="rounded-full cursor-pointer  
                  hover:scale-105 bg-gradient-to-tr from-amber-400 to-amber-500 ring 
                  px-6 py-6 shadow-amber-400 shadow-lg"
                  >
                    Clique e Veja mais !
                  </Button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </CardMy>
      <CarroselProjects />

      {/* Habilidades */}
      {/* <CardMy
          className="flex flex-col items-stretch justify-center mx-4 md:mx-16
          md:px-6 md:py-5 border-zinc-500/20 rounded-xl"
        >
        <blockquote className="italic text-sm text-zinc-400 mb-4">
        Habilidades em{" "}
            <span
              className="bg-amber-200 px-1 rounded-full
            text-amber-800"
            >
              dourado
            </span>{" "}
            são certificadas officialmente.
            <br /> outras habilidades são desenvolvidas 100% atraves de projetos
            e auto-aprendizado !
          </blockquote>
      
        </CardMy> */}
      {/* Formações */}
      {/* <CardMy
        className="flex flex-col items-stretch justify-center mx-4 md:mx-16
      md:px-6 md:py-5 border-zinc-500/20 rounded-xl"
      >
        <h3 className="scroll-m-20 text-xl text-zinc-600 font-semibold tracking-tight first:mt-0">
          Formação Academica
        </h3>
        <blockquote className="italic text-sm text-zinc-400 mb-4">
          Algumas formações podem estar em andamento... <br /> apenas formações
          relevantes e de longo prazo em constante atualização !
        </blockquote>
        <TrainingCard />
      </CardMy> */}

      {/* champions projects */}

      {/* Projetos */}

      {/* certificações */}
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
    </div>
  );
}
