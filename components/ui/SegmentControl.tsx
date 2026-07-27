"use client";

import { useState } from "react";
import Image from "next/image";
import { FolderKanban, ShieldCheck, Trophy } from "lucide-react";

import GaleriaInsta from "../GaleriaInsta";
import CertificationCards from "../certificationCard";
import { resolveImage } from "@/lib/sanity/data";
import type {
  ChampionProject,
  Project,
  Certification,
} from "@/lib/sanity/types";

interface Props {
  champions: ChampionProject[];
  projects: Project[];
  certifications: Certification[];
}

export default function SegmentControl({
  champions,
  projects,
  certifications,
}: Props) {
  const [activeTab, setActiveTab] = useState("projects-champions");

  const tabBtn = (active: boolean) =>
    `flex flex-1 items-center justify-center gap-1.5 rounded-xl py-2.5 text-xs font-semibold
    transition-all duration-300 ${
      active
        ? "bg-white text-zinc-900 shadow-sm"
        : "text-zinc-500 hover:text-zinc-800"
    }`;

  return (
    <div className="flex flex-col items-start w-full px-2 my-4">
      {/* Segment Control estilo pill (iOS) */}
      <div className="flex w-full gap-1 rounded-2xl border border-zinc-200/70 bg-zinc-100/80 p-1 backdrop-blur">
        <button
          onClick={() => setActiveTab("projects-champions")}
          aria-label="Projetos Campeões"
          className={tabBtn(activeTab === "projects-champions")}
        >
          <Trophy className="h-4 w-4" />
          <span>Campeões</span>
        </button>
        <button
          onClick={() => setActiveTab("principal-projects")}
          aria-label="Galeria de Projetos"
          className={tabBtn(activeTab === "principal-projects")}
        >
          <FolderKanban className="h-4 w-4" />
          <span>Projetos</span>
        </button>
        <button
          onClick={() => setActiveTab("certifiedAt")}
          aria-label="Certificações"
          className={tabBtn(activeTab === "certifiedAt")}
        >
          <ShieldCheck className="h-4 w-4" />
          <span>Certificados</span>
        </button>
      </div>

      {/* Conteúdo */}
      <div className="w-full mt-6 rounded-xl text-start">
        {activeTab === "projects-champions" && (
          <div className="flex flex-col w-full">
            <h3 className="px-1 text-sm font-semibold tracking-tight text-zinc-900">
              Projetos Campeões
            </h3>
            <p className="px-1 pb-3 text-xs text-zinc-400">
              Casos reais de uso de mercado.
            </p>

            <div className="flex flex-col gap-2">
              {champions.map((item) => {
                const img = resolveImage(item.image, 160);
                return (
                  <div
                    key={item._id}
                    className="group rounded-2xl border border-zinc-200/80 bg-zinc-50 p-3
                    transition-colors hover:border-zinc-300"
                  >
                    <div className="flex items-center gap-3">
                      {img && (
                        <Image
                          src={img}
                          alt={item.title}
                          width={48}
                          height={48}
                          unoptimized
                          className="h-20 w-20 shrink-0 rounded-full object-cover ring-1 ring-cyan-200"
                        />
                      )}
                      <div className="min-w-0">
                        <h2 className="truncate text-sm font-semibold text-zinc-900">
                          {item.title}
                        </h2>
                        <p className="line-clamp-2 text-xs leading-relaxed text-zinc-500">
                          {item.description}
                        </p>
                      </div>
                    </div>

                   
                    {item.link && (
                      <a
                        href={item.link}
                        className="mt-2.5 inline-flex w-full self-center gap-1 text-xs font-medium text-cyan-600
                        transition-colors hover:text-cyan-700"
                      >
                        Saiba mais →
                      </a>
                    )}
                     {item.protectionText && (
                      <p className="mt-2.5 line-clamp-3 rounded-lg bg-white h-auto px-3 py-2 text-[11px] italic leading-relaxed text-zinc-400">
                        {item.protectionText}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {activeTab === "principal-projects" && (
          <GaleriaInsta projects={projects} />
        )}

        {activeTab === "certifiedAt" && (
          <div className="flex flex-col w-full">
            <h3 className="px-1 text-sm font-semibold tracking-tight text-zinc-900">
              Certificações
            </h3>
            <p className="px-1 pb-3 text-xs text-zinc-400">
              Conhecimentos validados em ferramentas e tecnologias.
            </p>
            <CertificationCards certifications={certifications} />
          </div>
        )}
      </div>
    </div>
  );
}
