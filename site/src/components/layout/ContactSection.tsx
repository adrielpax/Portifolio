"use client";

import { useEffect, useState } from "react";

import { ContactSectionProps } from "@/src/types";
import useSanityFetch from "@/src/hooks/useSanityFetch";

const ContactSection: React.FC<ContactSectionProps> = ({
  onOpenContact,
  onOpenAdmin,
  showAdminButton,
}) => {
  // Prefer Sanity (mock by default). You can set `mock:false` and NEXT_PUBLIC_SANITY_* envs.
  const { data, loading } = useSanityFetch<number>({ type: "contactsCount" }, { mock: false, delay: 250 });
  const count = Array.isArray(data) ? (data as any).length : (data as unknown as number) || null;

  return (
    <div className="w-full min-w-[356px] ">
      <div className="w-full bg-white/5 hover:bg-white/20 backdrop-blur-md border border-white/10 rounded-xl p-6">
        <h3 className="text-xl font-bold mb-4 text-cyan-400 flex items-center gap-2">
          Contato
          {loading ? (
            <span className="ml-3 text-sm text-gray-400">• carregando…</span>
          ) : (typeof count === 'number' && (
            <span className="ml-3 text-sm text-gray-300">• {count} recebidos</span>
          ))}
        </h3>

        <div className="space-y-4 flex flex-col itens-center">
          <p className="text-gray-300 text-sm">
            Interessado em trabalhar comigo? Tem algum projeto em mente? Vamos
            conversar sobre como posso ajudar a transformar suas ideias em
            realidade!
          </p>

          <button
            onClick={onOpenContact}
            className="w-full self-center max-w-[256px] bg-gradient-to-r from-green-500/80 to-blue-500/80 border-white/10 border-2 
            hover:from-green-600 hover:to-blue-600 px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-green-500/25 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50"
          >
            Entrar em Contato
          </button>

          {/* Admin Button (hidden by default) */}
          {showAdminButton && (
            <button
              onClick={onOpenAdmin}
              className="w-full  bg-red-600/80 hover:bg-red-600 px-4 py-2 rounded-lg text-sm transition-colors duration-300 flex items-center justify-center gap-2 border border-red-500/30 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-50"
            >
              Painel Admin
            </button>
          )}

          {/* Contact Info */}
          <div className="pt-4 border-t border-white/10">
            <div className="space-y-2 text-xs text-white">
              <p className="text-white">📍 Betim, Minas Gerais</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
