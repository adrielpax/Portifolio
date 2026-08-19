"use client";

import Image from "next/image";
import Link from "next/link";
import { Github, Linkedin, MapPin, ArrowUpRight } from "lucide-react";

export interface AsideStats {
  /** Projetos com link ao vivo (verificável). */
  live: number;
  /** Total de projetos no portfólio. */
  total: number;
  /** Certificações cadastradas. */
  certs: number;
}

/**
 * Painel de contexto do sistema.
 * As métricas vêm do conteúdo real — nada de número fixo no código.
 */
export default function RightAside({ stats }: { stats: AsideStats }) {
  const cards = [
    { value: String(stats.live), label: "no ar" },
    { value: String(stats.total), label: "projetos" },
    { value: String(stats.certs), label: "certificados" },
  ];

  return (
    <aside className="sticky top-0 hidden h-screen w-72 shrink-0 flex-col gap-4 overflow-y-auto border-l border-hud-line p-4 xl:flex">
      {/* Perfil */}
      <div className="hud-panel p-4">
        <div className="flex items-center gap-3">
          <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full ring-1 ring-hud-line">
            <Image
              src="/images/profile.png"
              alt="Adriel Silva"
              fill
              className="object-cover object-top"
            />
          </div>
          <div className="min-w-0">
            <p className="truncate font-display text-sm font-semibold tracking-tight text-hud-text">
              Adriel Silva
            </p>
            <p className="hud-label">Full-Stack & Automação</p>
          </div>
        </div>

        <p className="mt-3 flex items-center gap-1.5 text-xs text-hud-muted">
          <MapPin className="h-3 w-3 shrink-0" /> Betim, MG · Brasil
        </p>

        <div className="mt-3 flex gap-2">
          <Link
            href="https://github.com/adrielpax"
            target="_blank"
            aria-label="GitHub"
            className="grid h-9 flex-1 place-items-center rounded-lg border border-hud-line bg-white/60 text-hud-muted transition-all hover:-translate-y-0.5 hover:text-hud-text hover:shadow-md"
          >
            <Github className="h-4 w-4" />
          </Link>
          <Link
            href="https://linkedin.com/in/adriel-lucas"
            target="_blank"
            aria-label="LinkedIn"
            className="grid h-9 flex-1 place-items-center rounded-lg border border-hud-line bg-white/60 text-hud-muted transition-all hover:-translate-y-0.5 hover:text-hud-text hover:shadow-md"
          >
            <Linkedin className="h-4 w-4" />
          </Link>
        </div>
      </div>

      {/* Números reais do portfólio */}
      <div className="grid grid-cols-3 gap-2">
        {cards.map((s) => (
          <div key={s.label} className="hud-panel p-3 text-center">
            <p className="font-display text-xl font-bold text-hud-accent">
              {s.value}
            </p>
            <p className="hud-label mt-0.5 !text-[9px]">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Disponibilidade */}
      <div className="hud-panel p-4">
        <span className="hud-label">Disponibilidade</span>
        <p className="mt-2 flex items-center gap-2 text-xs font-medium text-emerald-600">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/70" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          Aberto a novos projetos
        </p>
        <p className="mt-2 text-xs leading-relaxed text-hud-muted">
          Freelas, CLT ou parceria em produto. Foco em SaaS, MVPs e automação.
        </p>
        <a
          href="https://typebot.co/my-typebot-75c4uvl"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 flex items-center justify-center gap-1.5 rounded-lg bg-hud-accent px-3 py-2.5
          font-display text-xs font-semibold text-white shadow-[0_6px_18px_rgba(0,113,227,0.3)]
          transition-all hover:-translate-y-0.5 hover:shadow-[0_10px_24px_rgba(0,113,227,0.4)]"
        >
          Falar comigo <ArrowUpRight className="h-3.5 w-3.5" />
        </a>
      </div>

      <p className="hud-label mt-auto text-center">AdrielDev · © 2026</p>
    </aside>
  );
}
