import type { Metadata } from "next";

import Reveal from "@/components/os/Reveal";
import ProjectCard from "@/components/os/ProjectCard";
import { getProjects } from "@/lib/sanity/data";

export const metadata: Metadata = {
  title: "Projetos",
  description:
    "Portfólio de projetos e sistemas construídos por Adriel Silva — SaaS, e-commerce, automações e MVPs em produção.",
  alternates: { canonical: "/projetos" },
};

export default async function ProjetosPage() {
  const projects = await getProjects();
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);
  const live = projects.filter((p) => p.link).length;

  return (
    <div className="px-5 py-10 md:px-12 lg:px-16">
      <Reveal>
        <header className="mb-9">
          <span className="hud-label flex items-center gap-2">
            <span className="text-hud-accent">PRJ</span>
            <span className="h-px w-8 bg-hud-line" /> Portfólio
          </span>
          <h1 className="mt-2 font-display text-3xl font-bold tracking-tight text-hud-text md:text-4xl">
            Projetos
          </h1>
          <p className="mt-1.5 max-w-xl text-sm leading-relaxed text-hud-muted">
            {projects.length} projetos — {live} com versão no ar para você abrir e
            testar. Cada um tem o problema que resolvia e como foi resolvido.
          </p>
        </header>
      </Reveal>

      {featured.length > 0 && (
        <section className="mb-12">
          <span className="hud-label mb-3 block">Principais</span>
          <div className="grid gap-4 md:grid-cols-2">
            {featured.map((p, i) => (
              <Reveal key={p._id} delay={i * 0.06}>
                <ProjectCard project={p} />
              </Reveal>
            ))}
          </div>
        </section>
      )}

      {rest.length > 0 && (
        <section>
          <span className="hud-label mb-3 block">Outros projetos</span>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((p, i) => (
              <Reveal key={p._id} delay={(i % 3) * 0.06}>
                <ProjectCard project={p} />
              </Reveal>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
