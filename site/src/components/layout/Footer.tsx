"use client";

import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="w-full mt-12 py-8 border-t border-white/5 text-sm text-center">
      <div className="max-w-[900px] mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <span className="text-cyan-400">Adriel Lucas</span>
          <div className="text-xs text-white/60">Analista de Sistemas Web • Portfólio Pessoal</div>
        </div>

        <div className="flex items-center gap-4">
          <Link href="/about" className="hover:underline">Sobre</Link>
          <Link href="/blog" className="hover:underline">Blog</Link>
          <Link href="/projects" className="hover:underline">Projetos</Link>
          <Link href="/showcase" className="hover:underline">Showcase</Link>
        </div>
      </div>

      <div className="mt-4 text-xs text-white/50">© {new Date().getFullYear()} Adriel Lucas. Todos os direitos reservados.</div>
    </footer>
  );
};

export default Footer;
