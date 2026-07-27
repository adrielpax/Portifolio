"use client";
import React, { useState, useCallback } from "react";
import Image from "next/image";
import { resolveImage } from "@/lib/sanity/data";
import type { Project } from "@/lib/sanity/types";

interface PopupState {
  open: boolean;
  projeto: Project | null;
}

export default function GaleriaInsta({ projects }: { projects: Project[] }) {
  const projetos = projects;
  const [popup, setPopup] = useState<PopupState>({ open: false, projeto: null });

  const abrirPopup = useCallback((projeto: Project) => {
    setPopup({ open: true, projeto });
  }, []);

  const fecharPopup = useCallback(() => {
    setPopup({ open: false, projeto: null });
  }, []);

  return (
    <>
      {/* Grid */}
      <section aria-label="Galeria de projetos">
        <div className="grid grid-cols-3 gap-[2px]">
          {projetos.map((projeto) => {
            const src = resolveImage(projeto.image, 600);
            return (
              <button
                key={projeto._id}
                onClick={() => abrirPopup(projeto)}
                className="relative aspect-square overflow-hidden bg-zinc-100 dark:bg-zinc-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                aria-label={`Abrir detalhes: ${projeto.title}`}
              >
                {src && (
                  <Image
                    src={src}
                    alt={projeto.title}
                    fill
                    unoptimized
                    className="object-cover transition-opacity duration-200 active:opacity-70"
                  />
                )}
              </button>
            );
          })}
        </div>
      </section>

      {/* Overlay + Bottom Sheet */}
      {popup.open && popup.projeto && (
        <div
          className="fixed inset-0 z-50 flex items-end justify-center bg-black/70"
          onClick={fecharPopup}
          role="dialog"
          aria-modal="true"
          aria-label={`Detalhes: ${popup.projeto.title}`}
        >
          <div
            className="w-full max-w-lg rounded-t-2xl bg-white dark:bg-zinc-900 overflow-hidden animate-slide-up"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Handle */}
            <div className="flex justify-center pt-3 pb-1">
              <div className="w-9 h-1 rounded-full bg-zinc-300 dark:bg-zinc-600" />
            </div>

            {/* Imagem */}
            <div className="relative aspect-square w-full">
              {resolveImage(popup.projeto.image, 1080) && (
                <Image
                  src={resolveImage(popup.projeto.image, 1080)!}
                  alt={popup.projeto.title}
                  fill
                  unoptimized
                  className="object-cover"
                />
              )}
              <button
                onClick={fecharPopup}
                className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/40 flex items-center justify-center text-white text-sm"
                aria-label="Fechar"
              >
                ✕
              </button>
            </div>

            {/* Ações estilo Instagram */}
            <div className="flex items-center gap-4 px-4 py-3 border-b border-zinc-100 dark:border-zinc-800">
              <button
                className="text-zinc-700 dark:text-zinc-300 hover:text-red-500 transition-colors"
                aria-label="Curtir"
              >
                <HeartIcon />
              </button>
              <button
                className="text-zinc-700 dark:text-zinc-300 hover:text-blue-500 transition-colors"
                aria-label="Comentar"
              >
                <CommentIcon />
              </button>
              {popup.projeto.link && (
                <a
                  href={popup.projeto.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-700 dark:text-zinc-300 hover:text-blue-500 transition-colors"
                  aria-label="Ver projeto"
                >
                  <LinkIcon />
                </a>
              )}
              <button
                className="ml-auto text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 transition-colors"
                aria-label="Salvar"
              >
                <BookmarkIcon />
              </button>
            </div>

            {/* Descrição */}
            <div className="px-4 py-3 pb-8">
              <p className="text-sm text-zinc-800 dark:text-zinc-200 leading-relaxed">
                <span className="font-semibold">
                  {popup.projeto.username ?? "dev"}{" "}
                </span>
                {popup.projeto.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

// Ícones inline leves (sem dependência extra)
function HeartIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  );
}

function CommentIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  );
}

function LinkIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

function BookmarkIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
    </svg>
  );
}