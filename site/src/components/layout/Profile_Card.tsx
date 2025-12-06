import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { MdVerified } from "react-icons/md";
import { TfiTag } from "react-icons/tfi";

interface MainCardProps {
  onOpenContact?: () => void;
}

const MainCard: React.FC<MainCardProps> = ({ onOpenContact }) => {
  const avatarImage = "/images/perfil-pro.jpeg";
  return (
    <div className="w-auto">
      <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6
       hover:bg-gradient-to-br from-black/10 via-white/10 to-black/10 mt-12
      ">
         {/*  hover:scale-105 
        transition-all duration-300 */}
   
   
        <div
          className="w-full max-w-[875px] flex flex-col md:flex-row items-center 
          gap-4 justify-start group md:items-start text-center md:text-left"
        >
          {/* Avatar */}

          {!avatarImage ? (
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center text-4xl font-bold mb-4">
              AL
            </div>
          ) : (

          
              <img className="rounded-full group-hover:border-blue-500 
            cursor-pointer w-40 h-40 border-4 border-white/5 -mt-12 md:m-0" src={avatarImage} />
        
        
          )}

          {/* Info */}
          <div className="flex flex-col">
            <h2 className="text-2xl text-white flex text-left items-center font-bold gap-2 mb-2">  <MdVerified className="text-blue-600 text-shadow-yellow-400/80" /> Adriel L.  </h2>
            <p className="text-cyan-400 text-left mb-4">Analista de Sistemas Web | Soluções Tecnologicas e Digitais</p>
            <p className="text-gray-300 text-sm leading-relaxed mb-6 text-justify ">
              Especializado em interfaces modernas, automação e soluções
              digitais. Apaixonado por tecnologia e sempre em busca de novos
              desafios.
            </p>

            {/* Social Links */}
            <div className="flex md:flex-row flex-col gap-4 items-center">
              <div className="flex flex-row gap-4 items-center">

                <a
                  href="https://github.com/SEU_USUARIO"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-xl bg-white/10 p-2
                 rounded-full 
                border border-white/10 text-xs flex items-center gap-2  hover:bg-white/20 space-x-2"
                  aria-label="GitHub Profile"
                >
                  <FaGithub className="w-5 h-5" />
                  Github
                </a>
                <a
                  href="https://linkedin.com/in/SEU_USUARIO"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-xl bg-white/10 p-2 rounded-full 
                border border-white/10 text-xs  flex items-center gap-2 hover:bg-white/20 space-x-2"
                  aria-label="LinkedIn Profile"
                >
                  <FaLinkedin className=" w-5 h-5" />
                  Linkedin
                </a>
                <a
                  href="mailto:seu@email.com"
                  className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-xl bg-white/10 p-2 rounded-full 
                border border-white/10 text-xs  flex items-center gap-2 hover:bg-white/20 space-x-2"
                  aria-label="Send Email"
                >
                  <FaEnvelope className=" w-5 h-5" />
                  Email
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainCard;
