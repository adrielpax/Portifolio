
import React from 'react'
import { SiN8N } from "react-icons/si";
import { RiNextjsLine } from "react-icons/ri";
import { FaWordpress } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";

const CardContentProps = [
    {
        icon:<SiN8N />,
        color: "text-pink-500/80",
        title: "N8N",
        description: "Desenvolvimento de fluxos automatizados para otimizar processos empresariais utilizando a plataforma N8N.",
    },
    {
        icon:<RiNextjsLine />,
        color: "text-cyan-500/80",
        title: "Next.js",
        description: "Criação de aplicações web modernas e performáticas utilizando o framework Next.js, focado em SSR e SSG.",
    },
    {
        icon:<FaWordpress />,
        color: "text-blue-500/80",
        title: "WordPress",
        description: "Desenvolvimento e customização de sites utilizando WordPress, incluindo temas e plugins personalizados.",
    },
    {
        icon:<FaPython />,
        color: "text-yellow-500",
        title: "Python",
        description: "Desenvolvimento de scripts e aplicações utilizando Python para automação, análise de dados e desenvolvimento web.",
    },
    {
        icon:<FaNodeJs />,
        color: "text-green-500/80",
        title: "Node.js",
        description: "Criação de aplicações backend escaláveis e eficientes utilizando Node.js e suas principais bibliotecas.",
    }
]

function CardsContent() {
  return (
    <div className='w-full border border-white/20 transition duration-300
   bg-gradient-to-tr from-white/10 via-black/10 to-white/10 rounded-2xl '>

        {CardContentProps.map((card, index) => (
            <div key={index} className='flex flex-col md:flex-row gap-4 items-center
            p-4 group hover:bg-white/5 transition duration-300 border-b 
            border-white/10 last:border-b-0 group-hover:border-${card.color}'>
                <div className={`${card.color} text-8xl rounded-full 
                border-2 border-white/10 p-4 flex items-center justify-center bg-white/5
                group-hover:scale-105 transition-transform duration-300 shadow-lg shadow`}>
                    {card.icon}
                </div>
                <div className='flex flex-col'>
                    <h3 className='text-white font-bold text-lg mb-2'>
                        {card.title}
                    </h3>
                    <p className='text-gray-300 text-sm leading-relaxed
                    text-left '>
                        {card.description}
                    </p>
                </div>
            </div>
        ))}

    </div>
  )
}

export default CardsContent