"use client";
import React, { useState } from "react";
import Image from "next/image";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { BadgeCheck, ChevronDown, Sparkles } from "lucide-react";

type Skill = {
  icon: string;
  title: string;
  description: string;
  certified?: boolean;
  /** Habilidade de Inteligência Artificial — recebe destaque especial. */
  ai?: boolean;
};

const skills: Skill[] = [
  {
    icon: "/images/skills/claude.svg",
    title: "Claude Code",
    description:
      "Engenharia de software assistida por IA com Claude Code da Anthropic — automação de desenvolvimento, agentes e fluxos inteligentes.",
    ai: true,
  },
  {
    icon: "/images/skills/openai.svg",
    title: "OpenAI",
    description:
      "Integração de modelos da OpenAI (GPT) em produtos: assistentes, geração de conteúdo e automações inteligentes.",
    ai: true,
  },
  {
    icon: "/images/skills/nextjs.jpeg",
    title: "Next.JS",
    description:
      "Desenvolvimento de Sistemas e interfaces com o maior framework que impulsiona o React",
    certified: true,
  },
  {
    icon: "/images/skills/typescript.png",
    title: "TypeScript",
    description: "Tipagem estática para sistemas robustos e escaláveis.",
  },
  {
    icon: "/images/skills/react.png",
    title: "React.JS",
    description: "Interfaces reativas e componentizadas.",
  },
  {
    icon: "/images/skills/tailwindcss.png",
    title: "Tailwind.CSS",
    description: "Estilização utilitária rápida e consistente.",
  },
  {
    icon: "/images/skills/nodejs.jpeg",
    title: "Node.JS",
    description: "Back-end e APIs em JavaScript no servidor.",
  },
  {
    icon: "/images/skills/python.png",
    title: "Python",
    description: "Automação, scripts e integrações de dados.",
  },
  {
    icon: "/images/skills/git.png",
    title: "Git",
    description: "Versionamento e colaboração de código.",
  },
  {
    icon: "/images/skills/github.png",
    title: "Git Hub",
    description: "Hospedagem, CI/CD e colaboração.",
  },
  {
    icon: "/images/skills/postgresql.png",
    title: "PostgresSQL & SQL",
    description: "Modelagem e consultas de bancos relacionais.",
  },
  {
    icon: "/images/skills/n8n.png",
    title: "n8n",
    description: "Automação de fluxos e integrações no-code/low-code.",
  },
  {
    icon: "/images/skills/java.png",
    title: "Java",
    description: "Aplicações robustas e orientadas a objetos.",
  },
  {
    icon: "/images/skills/springboot.png",
    title: "SpringBoot",
    description: "APIs e microsserviços em Java.",
  },
];

function Skills() {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleExpand = () => setIsExpanded(!isExpanded);

  return (
    <>
      <h4 className="text-xs text-zinc-500">Habilidades Técnicas:</h4>
      <div className="flex items-center justify-between w-full">
        <div
          className={`transition-all duration-300 ease-in-out ${
            isExpanded
              ? "flex flex-wrap gap-3"
              : "flex flex-row gap-2 overflow-hidden max-h-24"
          }`}
        >
          {skills.map((card, index) => {
            const ring = card.ai
              ? "border-2 border-violet-400 bg-violet-50 shadow-md shadow-violet-300/60"
              : card.certified
                ? "border-2 border-amber-300 bg-amber-300/40 shadow-md shadow-amber-300"
                : "bg-white";

            return (
              <div
                key={index}
                className="flex flex-col md:flex-row gap-4 items-center group"
              >
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div className="relative shrink-0">
                      <Image
                        src={card.icon}
                        alt={card.title}
                        width={50}
                        height={50}
                        className={`rounded-md text-xs object-cover
                        flex items-center justify-center
                        group-hover:scale-110 transition-transform duration-300 ${ring}`}
                      />
                      {card.ai && (
                        <span
                          className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center
                          rounded-full bg-gradient-to-tr from-violet-600 to-fuchsia-500 text-white shadow"
                        >
                          <Sparkles className="h-2.5 w-2.5" />
                        </span>
                      )}
                    </div>
                  </TooltipTrigger>
                  <TooltipContent side="bottom">
                    {card.ai ? (
                      <p className="flex items-center gap-1.5">
                        <Sparkles className="h-3.5 w-3.5 text-violet-500" />
                        IA · {card.title}
                      </p>
                    ) : card.certified ? (
                      <p className="flex items-center gap-2">
                        <BadgeCheck />
                        Certificado Oficial em {card.title}
                      </p>
                    ) : (
                      <p className="flex items-center gap-2">{card.title}</p>
                    )}
                  </TooltipContent>
                </Tooltip>
              </div>
            );
          })}
        </div>
        <button
          onClick={toggleExpand}
          aria-label={isExpanded ? "Recolher habilidades" : "Ver todas as habilidades"}
          className={`transition-all duration-300 ease-in-out ${
            isExpanded ? "rotate-180" : ""
          }`}
        >
          <ChevronDown />
        </button>
      </div>
    </>
  );
}

export default Skills;
