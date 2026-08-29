"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView, useReducedMotion } from "motion/react";
import { Boxes, Globe, Layers, PenLine } from "lucide-react";

import Spotlight from "./Spotlight";
import type { Project } from "@/lib/sanity/types";

/**
 * Faixa de prova.
 * Todos os números são derivados do conteúdo real do portfólio — se um projeto
 * sair do ar ou entrar um novo, o número acompanha sozinho.
 */
export default function ProofStrip({
  projects,
  posts,
}: {
  projects: Project[];
  posts: number;
}) {
  const live = projects.filter((p) => Boolean(p.link)).length;
  const stack = new Set(projects.flatMap((p) => p.stack ?? []));

  const items = [
    { icon: Globe, value: live, label: "projetos no ar" },
    { icon: Boxes, value: projects.length, label: "no portfólio" },
    { icon: Layers, value: stack.size, label: "tecnologias aplicadas" },
    { icon: PenLine, value: posts, label: posts === 1 ? "artigo" : "artigos" },
  ].filter((i) => i.value !== 0);

  if (items.length === 0) return null;

  return (
    <Spotlight className="hud-panel grid grid-cols-2 divide-x divide-y divide-hud-line/70 sm:grid-cols-4 sm:divide-y-0">
      {items.map((it) => (
        <div key={it.label} className="flex flex-col items-center gap-1 px-4 py-6 text-center">
          <it.icon className="mb-1 h-4 w-4 text-hud-detail" />
          <p className="font-display text-3xl font-bold leading-none text-hud-text">
            <CountUp value={it.value} />
          </p>
          <p className="text-[11px] leading-tight text-hud-muted">{it.label}</p>
        </div>
      ))}
    </Spotlight>
  );
}

/** Conta de 0 até o valor na primeira vez que entra na viewport. */
function CountUp({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduced = useReducedMotion();
  const [shown, setShown] = useState(reduced ? value : 0);

  useEffect(() => {
    if (!inView || reduced) return;
    const controls = animate(0, value, {
      duration: 0.9,
      ease: "easeOut",
      onUpdate: (v) => setShown(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, reduced, value]);

  return <span ref={ref}>{reduced ? value : shown}</span>;
}
