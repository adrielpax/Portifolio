"use client";

import React, { useState } from 'react'

const GaleryContentsProps = [
    {
        // Add properties for gallery contents here
        title: "Web E-Commerce Precinho rei",
        description: " Projeto de e-commerce completo com carrinho de compras, sistema de pagamento integrado e painel administrativo para gerenciar produtos e pedidos.",
        link: "#",
        habilidades: ["React", "Node.js", "MongoDB", "Stripe"],
        imageUrl: "/path/to/image1.jpg",
    },
    {
        title: "Web App Meu Barbeiro App",
        description: " Aplicativo web para agendamento de serviços em barbearias, com sistema de notificações e perfil de usuário.",
        link: "#",
        habilidades: ["React", "Node.js", "Firebase"],
        imageUrl: "/path/to/image2.jpg",    
    },
    {
        title: "Landing Page Elluxus Vidraçaria",
        description: " Landing page moderna e responsiva para uma vidraçaria, destacando serviços, portfólio e formulário de contato.",
        habilidades: ["HTML", "CSS", "JavaScript"],
        link: "#",
        imageUrl: "/path/to/image3.jpg",    
    }
]

function GaleryContents() {
  const [hovered, setHovered] = useState<number | null>(null);

  const isHighlighted = (idx: number) => {
    if (hovered === null) return false;
    return idx === hovered || idx === hovered - 1 || idx === hovered + 1;
  };

  return (
    <div className='flex flex-wrap gap-6 items-center justify-center'>
      {GaleryContentsProps.map((gallery, index) => {
        const highlighted = isHighlighted(index);
        return (
          <div key={index}
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
            className={`flex flex-col gap-4 border rounded-lg p-4 bg-white/5 backdrop-blur-sm w-auto justify-center items-center max-w-sm transition-all ${highlighted ? 'border-cyan-400/60 shadow-lg' : 'border-white/10'}`}>

              {/* fixed image area */}
              <div className='w-full h-40 overflow-hidden rounded-lg bg-gradient-to-r from-white/5 to-white/3 flex items-center justify-center'>
                {gallery.imageUrl ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={gallery.imageUrl} alt={gallery.title} className='w-full h-full object-cover' />
                ) : (
                  <div className='text-white/40 text-sm'>Imagem não disponível</div>
                )}
              </div>

              <div className='w-full'>
                  <h3 className={`text-white font-bold text-lg mb-2 transition-colors ${highlighted ? 'text-cyan-400' : ''}`}>
                      {gallery.title}
                  </h3>
                  <div className='flex flex-wrap gap-2 mb-2'>
                      {gallery.habilidades && gallery.habilidades.map((habilidade, idx) => (
                          <span key={idx} className='text-xs text-cyan-500 bg-white/10 rounded-full px-2 py-1'>
                              {habilidade}
                          </span>
                      ))}
                  </div>
                  <p className={`text-gray-300 text-sm leading-relaxed ${highlighted ? 'text-white' : ''}`}>
                      {gallery.description}
                  </p>
                  <a href={gallery.link} className={`text-cyan-500 hover:underline mt-4 inline-block bg-white/10 rounded-full px-2 py-1 shadow-lg hover:bg-white/20 transition-colors duration-200 blur-effect border border-white/10 flex w-full items-center justify-center gap-2 text-xs ${highlighted ? 'bg-white/5' : ''}`}>
                     ver mais
                  </a>
              </div>
          </div>
        )
      })}

    </div>
  )
}

export default GaleryContents
