"use client";

import Link from 'next/link';
import React, { useState } from 'react';
import { AiFillHome } from 'react-icons/ai';

interface NavLink {
  label: string;
  href: string;
}

const Nav: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks: NavLink[] = [
    { label: 'Home', href: '/' },
 
  ];

  return (
    <nav>
      <div className="px-3 py-4">
        <header className="w-full text-left py-8 max-w-[875px] mx-auto bg-white/5 hover:bg-white/20 backdrop-blur-sm rounded-lg px-4 border border-white/10 flex flex-row items-center justify-between gap-4">
          <div className="text-left px-4">
            <span className="text-cyan-500 flex items-start text-left justify-start text-xs mt-0 p-0">Adriel Lucas | Portifolio Pessoal</span>
            <h1 className="flex items-center justify-start mt-0 p-0 text-lg">Analista de Sistemas Web</h1>
          </div>

          <div className="hidden md:flex items-center gap-6 text-sm">
            <Link href="/" className="flex items-center gap-2 rounded-full border border-white/5 bg-white/10 px-3 py-1 hover:bg-white/20 transition-colors"> <AiFillHome className="w-4 h-4" /> Início </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            aria-label="Abrir menu"
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md bg-white/10 border border-white/5"
            onClick={() => setIsOpen(true)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </header>
      </div>

      {/* Mobile overlay menu */}
      {isOpen && (
        <div className="fixed inset-0 z-50">
          <div className="absolute inset-0 bg-black/50" onClick={() => setIsOpen(false)} />
          <div className="absolute right-0 top-0 h-full w-72 bg-white/5 backdrop-blur-md p-6 border-l border-white/10">
            <div className="flex items-center justify-between mb-6">
              <div className="text-sm font-medium">Menu</div>
              <button aria-label="Fechar menu" onClick={() => setIsOpen(false)} className="p-2 rounded-md bg-white/10">
                ✕
              </button>
            </div>

            <nav className="flex flex-col gap-4">
              {navLinks.map((l) => (
                <Link key={l.href} href={l.href} onClick={() => setIsOpen(false)} className="px-3 py-2 rounded-md hover:bg-white/10">
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Nav;