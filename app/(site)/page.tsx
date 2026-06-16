import Image from "next/image";
import Link from "next/link";
import { Github, Linkedin, BadgeCheck, MapPin, MessageCircle } from "lucide-react";

import CardMy from "@/components/card";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import Skills from "@/components/skills";
import SegmentControl from "@/components/ui/SegmentControl";

import {
  getChampionProjects,
  getProjects,
  getCertifications,
} from "@/lib/sanity/data";

export default async function Home() {
  const [champions, projects, certifications] = await Promise.all([
    getChampionProjects(),
    getProjects(),
    getCertifications(),
  ]);

  return (
    <div className="relative flex flex-col items-center mx-auto max-w-150 my-8 pb-9 bg-white">
      <CardMy
        className="flex flex-col items-start justify-center mx-2
         border-zinc-500/20 rounded-xl border-none bg-none shadow-none hover:shadow-none"
      >
        <div className="flex flex-row items-center gap-4 mb-2">
          <Tooltip>
            <div
              className="relative min-w-24 h-24 md:w-28 md:h-28 rounded-full border-2 ring-4
            ring-white border-zinc-800/20"
            >
              <TooltipTrigger asChild>
                <Image
                  src={"/images/profile.png"}
                  className="relative rounded-full object-cover object-top"
                  fill
                  alt={"Adriel Silva"}
                />
              </TooltipTrigger>
              <TooltipContent side="bottom">
                <p>Adriel L. | Analista de Sistemas</p>
              </TooltipContent>
              {/* Indicador de disponibilidade (app feel) */}
              <span className="absolute bottom-1.5 right-1.5 flex h-4 w-4">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400/70" />
                <span className="relative inline-flex h-4 w-4 rounded-full border-2 border-white bg-green-500" />
              </span>
            </div>
          </Tooltip>
          <div className="min-w-0">
            <h2
              className="flex items-center gap-1 mb-0.5 scroll-m-20 text-base text-zinc-900
            font-semibold tracking-tight"
            >
              Adriel Silva
              <BadgeCheck className="h-4 w-4 shrink-0 text-blue-500" />
            </h2>
            <h3 className="scroll-m-20 pb-0.5 text-sm text-zinc-600 font-semibold tracking-tight">
              Desenvolvedor Full-Stack & Especialista em Automação.
            </h3>
            <p className="flex items-center gap-1 text-xs text-zinc-500">
              <MapPin className="h-3 w-3" /> Betim, MG · Brasil
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-start py-1 mb-3">
          <span
            className="mb-2 inline-flex w-fit items-center gap-1.5 rounded-full border border-green-200
          bg-green-50 px-2.5 py-1 text-[11px] font-medium text-green-700"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
            Disponível para novos projetos
          </span>
          <p className="text-xs text-zinc-500">
            Sistemas de Informação — UNA. Construindo plataformas SaaS, MVPs e
            sistemas que escalam negócios.
          </p>
        </div>
        <div className="my-3 w-full">
          <Skills />
        </div>

        <div className="flex items-stretch gap-2 w-full">
          <Link
            href="https://typebot.co/my-typebot-75c4uvl"
            className="flex-1"
          >
            <Button
              size="sm"
              className="group h-11 w-full cursor-pointer gap-1.5 rounded-xl text-xs font-medium
              bg-black text-white shadow-none transition-colors
              hover:bg-black/70"
            >
              <MessageCircle className="h-4 w-4" />
              Entrar em Contato
            </Button>
          </Link>
          <Link href="https://github.com/adrielpax" target="_blank">
            <Button
              variant="outline"
              size="sm"
              aria-label="GitHub"
              className="h-11 w-11 cursor-pointer rounded-xl border-zinc-200 text-zinc-600
              transition-colors hover:bg-zinc-50"
            >
              <Github />
            </Button>
          </Link>

          <Link href="https://linkedin.com/in/adriel-lucas" target="_blank">
            <Button
              variant="outline"
              size="sm"
              aria-label="LinkedIn"
              className="h-11 w-11 cursor-pointer rounded-xl border-zinc-200 text-zinc-600
              transition-colors hover:bg-zinc-50"
            >
              <Linkedin />
            </Button>
          </Link>
        </div>
      </CardMy>

      <SegmentControl
        champions={champions}
        projects={projects}
        certifications={certifications}
      />
    </div>
  );
}
