"use client"

import React from 'react'
import Link from 'next/link'
import { FaEnvelope, FaProjectDiagram, FaNewspaper } from 'react-icons/fa'

interface CTACardsProps {
  onOpenContact?: () => void
}

const CTACards: React.FC<CTACardsProps> = ({ onOpenContact }) => {
  const cards = [
    {
      id: 'contact',
      title: 'Entrar em Contato',
      desc: 'Fale sobre projetos, vagas ou parcerias. Respondo rápido!',
      icon: <FaEnvelope className="w-5 h-5" />,
      action: () => onOpenContact && onOpenContact(),
      aria: 'Abrir formulário de contato',
    },
    {
      id: 'projects',
      title: 'Ver Projetos',
      desc: 'Veja projetos recentes, estudos de caso e tecnologias utilizadas.',
      icon: <FaProjectDiagram className="w-5 h-5" />,
      href: '/showcase',
      aria: 'Ir para projetos',
    },
    {
      id: 'blog',
      title: 'Ler o Blog',
      desc: 'Artigos sobre desenvolvimento, automação e dicas práticas.',
      icon: <FaNewspaper className="w-5 h-5" />,
      href: '/blog',
      aria: 'Ir para o blog',
    },
  ]

  return (
    <div className="w-full max-w-[875px]">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        {cards.map((c) => (
          <article
            key={c.id}
            className="group bg-gradient-to-br from-white/3 to-white/6 border border-white/6 rounded-xl p-5 shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200"
            aria-label={c.aria}
            role="article"
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-white/6 group-hover:bg-cyan-500/20 flex items-center justify-center text-cyan-400">
                {c.icon}
              </div>

              <div className="flex-1">
                <h3 className="text-white font-semibold text-base">{c.title}</h3>
                <p className="text-sm text-white/70 mt-1">{c.desc}</p>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-end">
              {c.href ? (
                <Link href={c.href} className="inline-flex items-center gap-2 text-xs text-cyan-400 bg-white/5 px-3 py-2 rounded-full border border-white/6 hover:bg-white/10 transition-colors">
                  <span>Ir</span>
                </Link>
              ) : (
                <button onClick={c.action} className="inline-flex items-center gap-2 text-xs text-cyan-400 bg-white/5 px-3 py-2 rounded-full border border-white/6 hover:bg-white/10 transition-colors" aria-label={c.aria}>
                  <span>Abrir</span>
                </button>
              )}
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}

export default CTACards
