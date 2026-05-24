'use client'
import React, { useState } from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { BadgeCheck, ChevronDown } from "lucide-react";

function Skills() {
   // Estado para controlar se o container está expandido
  const [isExpanded, setIsExpanded] = useState(false);

  // Função para alternar o estado
  const toggleExpand = () => setIsExpanded(!isExpanded);
  return (
    <>
      <h4 className="text-xs text-zinc-500">Habilidades Tecnicas:</h4>
      <div className="flex items-center justify-between w-full">
        <div  className={`transition-all duration-300 ease-in-out ${
          isExpanded 
            ? 'flex flex-wrap gap-3' 
            : 'flex flex-row overflow-hidden max-h-24'
        }`}>
          {[
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
              description:
                "Desenvolvimento de Sistemas e interfaces com o maior framework que impulsiona o React",
            },
                  {
              icon: "/images/skills/react.png",
              title: "React.JS",
              description:
                "Desenvolvimento de Sistemas e interfaces com o maior framework que impulsiona o React",
            },
            {
              icon: "/images/skills/tailwindcss.png",
              title: "Tailwind.CSS",
              description:
                "Desenvolvimento de Sistemas e interfaces com o maior framework que impulsiona o React",
            },
            {
              icon: "/images/skills/nodejs.jpeg",
              title: "Node.JS",
              description:
                "Desenvolvimento de Sistemas e interfaces com o maior framework que impulsiona o React",
            },
            {
              icon: "/images/skills/python.png",
              title: "Python",
              description:
                "Desenvolvimento de Sistemas e interfaces com o maior framework que impulsiona o React",
            },
            {
              icon: "/images/skills/git.png",
              title: "Git",
              description:
                "Desenvolvimento de Sistemas e interfaces com o maior framework que impulsiona o React",
            },
            {
              icon: "/images/skills/github.png",
              title: "Git Hub",
              description:
                "Desenvolvimento de Sistemas e interfaces com o maior framework que impulsiona o React",
            },
            {
              icon: "/images/skills/postgreSQL.png",
              title: "PostgresSQL & SQL",
              description:
                "Desenvolvimento de Sistemas e interfaces com o maior framework que impulsiona o React",
            },  {
              icon: "/images/skills/n8n.png",
              title: "n8n",
              description:
                "Desenvolvimento de Sistemas e interfaces com o maior framework que impulsiona o React",
            },
             {
              icon: "/images/skills/Java.png",
              title: "Java",
              description:
                "Desenvolvimento de Sistemas e interfaces com o maior framework que impulsiona o React",
            },
             {
              icon: "/images/skills/SpringBoot.png",
              title: "SpringBoot",
              description:
                "Desenvolvimento de Sistemas e interfaces com o maior framework que impulsiona o React",
            },
          ].map((card, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row gap-4 items-center
        group hover:bg-white/5 transition duration-300  
        border-zinc-300 last:border-b-0 group-hover:border-${card.color}"
            >
              {card.certified ? (
                <>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Image
                        src={card.icon}
                        alt={card.title}
                        objectFit="cover"
                        width={50}
                        height={50}
                        className={` rounded-md text-xs border-2 shadow-amber-300 shadow-md
                      border-amber-300  flex items-center justify-center bg-amber-300/40
                      group-hover:scale-110 transition-transform duration-300 `}
                      />
                    </TooltipTrigger>
                    <TooltipContent side="bottom">
                      <p className="flex items-center gap-2">
                        {" "}
                        <BadgeCheck />
                        Certificado Official em {card.title}
                      </p>
                    </TooltipContent>
                  </Tooltip>
                </>
              ) : (
                <>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Image
                        src={card.icon}
                        alt={card.title}
                        objectFit="cover"
                        width={50}
                        height={50}
                        className={`bg-white rounded-md text-xs
                        flex items-center justify-center
                        group-hover:scale-110 transition-transform duration-300`}
                      />
                    </TooltipTrigger>
                    <TooltipContent side="bottom">
                      <p className="flex items-center gap-2"> {card.title}</p>
                    </TooltipContent>
                  </Tooltip>
                </>
              )}

              {/* <div className="flex flex-col">
                       <h3 className="text-zinc-600 font-bold text-lg mb-2 lg:text-left">
                       {card.title}
                       </h3>
                       
                       <p
                       className="text-gray-500 text-sm leading-relaxed
                       text-center lg:text-left"
                       >
                       {card.description}
                       </p>
                       </div> */}
            </div>
          ))}
        </div>
        <button  onClick={toggleExpand}  className={`transition-all duration-300 ease-in-out ${
          isExpanded 
            ? 'rotate-180' 
            : ''
        }`}>
          <ChevronDown />
        </button>
      </div>
    </>
  );
}

export default Skills;
