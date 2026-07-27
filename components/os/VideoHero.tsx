"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowRight, Play } from "lucide-react";

/**
 * Hero cinematográfico claro.
 * Fundo: mesh gradient animado + grão (0 KB). Se você adicionar um vídeo em
 * public/videos/hero.mp4, ele é usado no lugar do mesh automaticamente.
 */
export default function VideoHero() {
  const [videoOk, setVideoOk] = useState(true);
  const ref = useRef<HTMLElement>(null);

  // Parallax suave do fundo conforme o scroll
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      className="hud-grain relative h-[62vh] min-h-[400px] w-full overflow-hidden md:h-[78vh] md:min-h-[540px]"
    >
      {/* Mesh gradient animado */}
      <motion.div style={{ y: bgY }} className="absolute inset-0">
        <div className="hud-aurora absolute inset-[-12%]">
          <span className="left-[6%] top-[12%] h-[26rem] w-[26rem]" style={{ background: "#f5822b66" }} />
          <span className="right-[4%] top-[4%] h-[30rem] w-[30rem]" style={{ background: "#7aa7ff55", animationDelay: "2s" }} />
          <span className="bottom-[2%] left-[28%] h-[32rem] w-[32rem]" style={{ background: "#ff9d6e55", animationDelay: "5s" }} />
          <span className="bottom-[10%] right-[22%] h-[22rem] w-[22rem]" style={{ background: "#c9a7ff4d", animationDelay: "8s" }} />
        </div>

        {/* Vídeo opcional */}
        {videoOk && (
          <video
            className="absolute inset-0 h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            onError={() => setVideoOk(false)}
          >
            <source src="/videos/hero.mp4" type="video/mp4" />
          </video>
        )}
      </motion.div>

      {/* Camadas de leitura (claras) */}
      <div className="absolute inset-0 hud-grid opacity-50" />
      <div className="absolute inset-0 bg-gradient-to-t from-hud-bg via-hud-bg/45 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-white/75 via-white/20 to-transparent" />

      {/* Conteúdo */}
      <motion.div
        style={{ y: contentY, opacity: fade }}
        className="relative z-10 flex h-full flex-col justify-end p-5 pb-8 sm:p-6 md:p-12 lg:p-16"
      >
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl"
        >
          <span className="hud-label mb-3 flex items-center gap-2">
            <span className="h-px w-7 bg-hud-amber" /> Adriel Silva · Full-Stack & Automação
          </span>

          <h1 className="font-display text-4xl font-bold leading-[1.05] tracking-tight text-hud-text md:text-6xl">
            Construo <span className="text-hud-amber">sistemas</span> que
            <br className="hidden md:block" /> escalam negócios.
          </h1>

          <p className="mt-4 max-w-lg text-sm leading-relaxed text-hud-muted md:text-base">
            Do MVP à produção: plataformas SaaS, automações e IA aplicada.
            Explore os projetos e os bastidores no blog.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href="/projetos"
              className="group inline-flex items-center gap-2 rounded-2xl bg-hud-amber px-6 py-3.5
              font-display text-sm font-semibold tracking-wide text-white
              shadow-[0_10px_30px_rgba(245,130,43,0.35)] transition-all duration-300
              hover:-translate-y-0.5 hover:shadow-[0_18px_44px_rgba(245,130,43,0.45)]"
            >
              <Play className="h-4 w-4 fill-white" /> Ver projetos
            </Link>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 rounded-2xl border border-hud-line bg-white/70 px-6 py-3.5
              font-display text-sm font-medium tracking-wide text-hud-text backdrop-blur-xl
              shadow-[0_6px_20px_rgba(17,24,39,0.08)] transition-all duration-300
              hover:-translate-y-0.5 hover:shadow-[0_14px_32px_rgba(17,24,39,0.12)]"
            >
              Ler o blog <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
