import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ExternalLink, Quote } from "lucide-react";

import VideoHero from "@/components/os/VideoHero";
import Reveal from "@/components/os/Reveal";
import SkillsPanel from "@/components/os/SkillsPanel";
import ProjectCard from "@/components/os/ProjectCard";
import ProofStrip from "@/components/os/ProofStrip";
import ProfileCard from "@/components/os/ProfileCard";
import {
  getProjects,
  getPosts,
  getTestimonials,
  resolveImage,
} from "@/lib/sanity/data";
import { formatDate } from "@/lib/format";

export default async function Home() {
  const [projects, posts, testimonials] = await Promise.all([
    getProjects(),
    getPosts(),
    getTestimonials(),
  ]);

  const featured = projects.filter((p) => p.featured);
  const rail = featured.length > 0 ? featured : projects.slice(0, 3);

  return (
    <div className="pb-20">
      <VideoHero />

      <div className="space-y-12 px-4 py-10 sm:px-5 md:space-y-16 md:px-12 md:py-14 lg:px-16">
        {/* ── Cartão de visitas (o primeiro contato, sobretudo no celular) ── */}
        <Reveal>
          <ProfileCard />
        </Reveal>

        {/* ── Prova em números reais ── */}
        <Reveal>
          <ProofStrip projects={projects} posts={posts.length} />
        </Reveal>

        {/* ── Projetos em destaque ── */}
        <section>
          <Reveal>
            <SectionHeader
              code="PRJ"
              title="Projetos em produção"
              subtitle="Sistemas reais, no ar — abra e teste."
              href="/projetos"
              linkLabel="Ver todos"
            />
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {rail.map((p, i) => (
              <Reveal key={p._id} delay={(i % 3) * 0.06}>
                <ProjectCard project={p} />
              </Reveal>
            ))}
          </div>
        </section>

        {/* ── Stack técnica (colapsável) ── */}
        <section>
          <Reveal>
            <SkillsPanel />
          </Reveal>
        </section>

        {/* ── Depoimentos (só aparece com conteúdo real) ── */}
        {testimonials.length > 0 && (
          <section>
            <Reveal>
              <SectionHeader
                code="REF"
                title="O que dizem"
                subtitle="Quem já trabalhou comigo."
                href="/projetos"
                linkLabel="Ver projetos"
              />
            </Reveal>
            <div className="grid gap-4 md:grid-cols-2">
              {testimonials.map((t, i) => {
                const avatar = resolveImage(t.avatar, 120);
                return (
                  <Reveal key={t._id} delay={i * 0.06}>
                    <figure className="hud-panel h-full p-6">
                      <Quote className="h-5 w-5 text-hud-accent" />
                      <blockquote className="mt-3 text-sm leading-relaxed text-hud-text/85">
                        {t.quote}
                      </blockquote>
                      <figcaption className="mt-4 flex items-center gap-3">
                        {avatar && (
                          <Image
                            src={avatar}
                            alt={t.author}
                            width={36}
                            height={36}
                            unoptimized
                            className="h-9 w-9 rounded-full object-cover ring-1 ring-hud-line"
                          />
                        )}
                        <span className="min-w-0">
                          <span className="block truncate font-display text-sm font-semibold text-hud-text">
                            {t.author}
                          </span>
                          {t.role && (
                            <span className="block truncate text-xs text-hud-muted">
                              {t.role}
                            </span>
                          )}
                        </span>
                      </figcaption>
                    </figure>
                  </Reveal>
                );
              })}
            </div>
          </section>
        )}

        {/* ── Blog ── */}
        {posts.length > 0 && (
          <section>
            <Reveal>
              <SectionHeader
                code="LOG"
                title="Do blog"
                subtitle="Bastidores, IA e construção de produtos."
                href="/blog"
                linkLabel="Todos os posts"
              />
            </Reveal>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {posts.slice(0, 3).map((post, i) => {
                const cover = resolveImage(post.coverImage, 720);
                return (
                  <Reveal key={post._id} delay={i * 0.06}>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="card-glass group flex h-full flex-col overflow-hidden rounded-2xl"
                    >
                      <div className="relative aspect-[16/10] overflow-hidden bg-hud-surface-2">
                        {cover && (
                          <Image
                            src={cover}
                            alt={post.title}
                            fill
                            unoptimized
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                        )}
                      </div>
                      <div className="flex flex-1 flex-col p-4">
                        <div className="mb-2 flex flex-wrap gap-1.5">
                          {post.tags?.slice(0, 2).map((t) => (
                            <span
                              key={t}
                              className="rounded-md border border-hud-line px-1.5 py-0.5 font-mono text-[10px] text-hud-steel"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                        <h3 className="font-display text-[15px] font-semibold leading-snug text-hud-text">
                          {post.title}
                        </h3>
                        <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-hud-muted">
                          {post.excerpt}
                        </p>
                        <span className="hud-label mt-auto pt-3">
                          {formatDate(post.publishedAt)}
                        </span>
                      </div>
                    </Link>
                  </Reveal>
                );
              })}
            </div>
          </section>
        )}

        {/* ── CTA ── */}
        <Reveal>
          <div className="hud-panel hud-brackets flex flex-col items-center gap-3 p-10 text-center">
            <span className="hud-label">Disponível para novos projetos</span>
            <h2 className="font-display text-2xl font-bold tracking-tight text-hud-text md:text-3xl">
              Tem um sistema para construir?
            </h2>
            <p className="max-w-md text-sm leading-relaxed text-hud-muted">
              Me conta o problema que você precisa resolver — respondo com uma
              proposta de como atacar, não com um orçamento genérico.
            </p>
            <a
              href="https://typebot.co/my-typebot-75c4uvl"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-2 rounded-xl bg-hud-accent px-7 py-3.5
              font-display text-sm font-semibold text-white shadow-[0_10px_28px_rgba(0,113,227,0.32)]
              transition-all hover:-translate-y-0.5 hover:shadow-[0_18px_40px_rgba(0,113,227,0.45)]"
            >
              Iniciar conversa <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </Reveal>
      </div>
    </div>
  );
}

function SectionHeader({
  code,
  title,
  subtitle,
  href,
  linkLabel,
}: {
  code: string;
  title: string;
  subtitle: string;
  href: string;
  linkLabel: string;
}) {
  return (
    <div className="mb-5 flex items-end justify-between gap-4">
      <div>
        <span className="hud-label flex items-center gap-2">
          <span className="text-hud-accent">{code}</span>
          <span className="h-px w-6 bg-hud-line" />
        </span>
        <h2 className="mt-1 font-display text-2xl font-bold tracking-tight text-hud-text">
          {title}
        </h2>
        <p className="text-sm text-hud-muted">{subtitle}</p>
      </div>
      <Link
        href={href}
        className="hidden shrink-0 items-center gap-1 font-display text-xs font-medium text-hud-accent transition-transform hover:translate-x-0.5 sm:flex"
      >
        {linkLabel} <ArrowUpRight className="h-3.5 w-3.5" />
      </Link>
    </div>
  );
}
