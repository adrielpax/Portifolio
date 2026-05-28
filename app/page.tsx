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
import CarroselProjects from "@/components/GaleriaInsta";
import SegmentControl from "@/components/ui/SegmentControl";

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
     <SegmentControl/>
     
     

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
     
    </div>
  );
}
