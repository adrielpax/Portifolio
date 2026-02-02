
import { MdVerified } from "react-icons/md";
import { TfiTag } from "react-icons/tfi";
import { Github } from 'lucide-react';

interface MainCardProps {
  onOpenContact?: () => void;
}

const mockLinks = [
  {
    name: "GitHub",
    url: "https://github.com/adrielpax",
    icon: <Github />
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/adriel-lucas",
    icon: "",//<FaLinkedin className=" w-5 h-5" />
  },
  {
    name: "Email",
    url: "mailto:adrielsilva.ext@gmail.com",
    icon: "",//<FaEnvelope className=" w-5 h-5" />
  }
]

const MainCard: React.FC<MainCardProps> = ({ onOpenContact }) => {
  const avatarImage = "/images/perfil-pro.jpeg";
  return (
    
    <div className="w-auto">
      
      <div className=" backdrop-blur-md border border-white/10 rounded-xl p-6
       bg-gradient-to-br from-black/50 via-white/10 to-black/10 mt-10
      ">
         {/*  hover:scale-105 
        transition-all duration-300 */}
        
          
        <div
          className="w-full max-w-[875px] flex flex-col md:flex-row items-center 
          gap-4 justify-start group md:items-start text-center md:text-left"
        >
          {/* Avatar */}

          {!avatarImage ? (
            <div className="w-40 h-40 rounded-full bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center text-4xl font-bold mb-4">
              AL
            </div>
          ) : (

          
              <img alt="avatar" className="rounded-full 
            cursor-pointer w-44 h-44 border-4 border-white/5 -mt-12 md:m-0" src={avatarImage} />
        
        
          )}

          {/* Info */}
          <div className="flex flex-col">
            <h2 className="text-2xl text-white flex text-left items-center font-bold gap-2 mb-2">  <MdVerified className="text-blue-600 text-shadow-yellow-400/80" /> Adriel L.  </h2>
            <p className="text-cyan-400/60 text-left mb-4">Analista de Sistemas Web | Soluções Tecnologicas e Digitais</p>
            <p className="text-gray-200/50  text-sm leading-relaxed mb-6 text-left ">
              Especializado em interfaces modernas, automação e soluções
              digitais. Apaixonado por tecnologia e sempre em busca de novos
              desafios.
            </p>

            {/* Social Links */}
            <div className="flex md:flex-row flex-col gap-4 items-center">
              
              <div className="flex flex-wrap md:flex-row gap-4 items-center">

                {mockLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-xl bg-white/10 p-2
                 rounded-lg px-4 font-bold bg-gradient-to-tl  from-black/50 to-zinc-500/10 
                border border-white/10 text-xs flex items-center gap-2  hover:bg-white/20 space-x-2"
                    aria-label={link.name}
                  >
                    {link.icon}
                    {link.name}
                  </a>
                ))}
              </div>
                 <button
            onClick={onOpenContact}
            className="w-auto self-center bg-gradient-to-r text-sm from-green-500/30 to-blue-500/30 border-white/10 border-2 
            hover:from-green-600 hover:to-blue-600 p-2 scale-90 px-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-green-500/25 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50"
          >
            Entrar em Contato
          </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainCard;
