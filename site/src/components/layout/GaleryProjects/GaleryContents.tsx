"use client";

import Image from 'next/image';
import React, { useState } from 'react'


const GaleryContentsProps = [
    {
        title: "Web E-Commerce Precinho rei",
        description: " Projeto de e-commerce completo com carrinho de compras, sistema de pagamento integrado e painel administrativo para gerenciar produtos e pedidos.",
        link: "https://precinhorei.vercel.app",
        habilidades: ["React", "Node.js", "MongoDB", "Stripe"],
        imageUrl: "/images/precinhorei.png",
    },
    {
        title: "Web App Meu Barbeiro App",
        description: " Aplicativo web para agendamento de serviços em barbearias, com sistema de notificações e perfil de usuário.",
        link: "https://barberboost.vercel.app",
        habilidades: ["React", "Node.js", "Firebase"],
        imageUrl: "/images/meubarbeiro.png",    
    },
    {
        title: "Landing Page Elluxus Vidraçaria",
        description: " Landing page moderna e responsiva para uma vidraçaria, destacando serviços, portfólio e formulário de contato.",
        habilidades: ["HTML", "CSS", "JavaScript"],
        link: "https://elluxus.vercel.app",
        imageUrl: "/images/elluxus.png",    
    },
    {
        title: "Website Elevar Digital",
        description: " Website institucional para uma agência de marketing digital, com seções sobre a empresa, serviços oferecidos e blog.",
        habilidades: ["Next.js", "Tailwind CSS"],
        link: "https://elevar-digital.vercel.app",
        imageUrl: "/images/elevardigital.png",    
    }
]

function GaleryContents() {
  return (
    <div className=' flex flex-wrap gap-6 items-center justify-center '>
    
        {GaleryContentsProps.map((gallery, index) => (  
            <div key={index} className=' flex flex-col gap-4 border border-white/10 rounded-lg p-4
            bg-white/5 backdrop-blur-sm w-auto justify-center items-center 
            max-w-sm hover:border-cyan-400/50 transition-all backdrop-blur-md 
            '>
                <div className='w-full overflow-hidden rounded-lg object-fill'>
                    <Image src={gallery.imageUrl} alt={gallery.title} objectFit='contain' width={400} height={400}/>
                </div>
                <div className='w-full'>
                    <h3 className=' text-white font-bold text-lg mb-2'>
                        {gallery.title}
                    </h3>
                    <div className='flex flex-wrap gap-2 mb-2'>
                        {gallery.habilidades && gallery.habilidades.map((habilidade, idx) => (
                            <span key={idx} className='text-xs text-cyan-500 bg-white/10 rounded-full px-2 py-1'>
                                {habilidade}
                            </span>
                        ))}
                    </div>
                    <p className='text-gray-300 text-sm leading-relaxed'>
                        {gallery.description}
                    </p>
                     <a href={gallery.link} className='
                    text-cyan-500 hover:underline mt-4 inline-block bg-white/10 rounded-full px-2 py-1
                    shadow-lg hover:bg-white/20 transition-colors duration-200 blur-effect 
                    border border-white/10 flex w-full items-center justify-center items-center gap-2 w-auto text-xs'>
                         ver mais
                    </a>
                </div>
            </div>
        ))}

    </div>
  )
}

export default GaleryContents