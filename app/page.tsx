import CardMy from "@/components/card";
import Image from "next/image";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { Github, Linkedin } from "lucide-react";
import TrainingCard from "@/components/trainingCard";
import CertificationCards from "@/components/certificationCard";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <div
      className="bg-gradient-to-tr gap-12
  from-white to-white flex flex-col mx-auto
    max-w-[1200px] my-8 pb-9"
    >
      <CardMy
        className="flex flex-col md:flex-row items-stretch justify-center mx-4 md:mx-16
      md:px-6 md:py-5 border-zinc-500/20 rounded-xl"
      >
        <Tooltip>
          <div
            className="relative w-56 h-56 md:min-w-74 md:min-h-74 rounded-full border-2 ring-4
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

        <div className="flex flex-col justify-start px-4 py-5">
          <h2 className="scroll-m-20 pb-2 text-3xl text-zinc-800 font-semibold tracking-tight first:mt-0">
            {"Adriel Silva."}
          </h2>
          <h3 className="scroll-m-20 pb-2 text-xl text-zinc-600 font-semibold tracking-tight first:mt-0">
            Analista e Desenvolvedor de Sistemas e Soluções em Technologia
          </h3>

          <p className="leading-7 [&:not(:first-child)]:mt-2 text-zinc-500">
            Analista de Sistemas Jr | Automação Industrial | CLP | CRMs |
            Salesforce | N8N e Automação de processos.
          </p>
          <blockquote className="mt-4 italic text-sm text-zinc-400">
            Betim, Minas Gerais, Brasil
          </blockquote>
          <div className="flex gap-2 flex-wrap w-full py-3 mt-4">
            <Button variant="outline" size="lg">
              {" "}
              <Github /> Github
            </Button>
            <Button variant="outline" size="lg">
              <Linkedin /> Linkedin
            </Button>
            <Button size="lg">Quer entrar em contato ?</Button>
          </div>
        </div>
      </CardMy>

      <CardMy
        className="flex flex-col items-stretch justify-center mx-4 md:mx-16
      md:px-6 md:py-5 border-zinc-500/20 rounded-xl"
      >
        <h3 className="scroll-m-20 text-xl text-zinc-600 font-semibold tracking-tight first:mt-0">
          Minhas Habilidades
        </h3>
        <blockquote className="italic text-sm text-zinc-400 mb-4">
          Habilidades em <span className="bg-amber-200 px-1 rounded-full
          text-amber-800">dourado</span>  são certificadas officialmente.
        </blockquote>
        <Skills />
      </CardMy>

      <CardMy
        className="flex flex-col items-stretch justify-center mx-4 md:mx-16
      md:px-6 md:py-5 border-zinc-500/20 rounded-xl"
      >
        <h3 className="scroll-m-20 pb-2 text-xl text-zinc-600 font-semibold tracking-tight first:mt-0">
          Formação Academica
        </h3>
         <blockquote className="italic text-sm text-zinc-400 mb-4">
          Algumas formações podem estar em andamento
        </blockquote>
        <TrainingCard />
      </CardMy>

      <CardMy
        className="flex flex-col items-stretch justify-center mx-4 md:mx-16
      md:px-6 md:py-5 border-zinc-500/20 rounded-xl"
      >
        <h3 className="scroll-m-20 pb-2 text-xl text-zinc-600 font-semibold tracking-tight first:mt-0">
          Certificações Tecnicas & Officiais
        </h3>
        <CertificationCards />
      </CardMy>
    </div>
  );
}
