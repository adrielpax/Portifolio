import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

interface MainCardProps {
  onOpenContact?: () => void;
}

const MainCard: React.FC<MainCardProps> = ({ onOpenContact }) => {
  const avatarImage = "/images/perfil-pro.jpeg";
  return (
    <div className="w-auto">
      <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6">
        <div
          className="w-full max-w-[875px] flex flex-col md:flex-row items-center 
        gap-4 justify-start md:items-start text-center md:text-left"
        >
          {/* Avatar */}

          {!avatarImage ? (
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center text-4xl font-bold mb-4">
              AL
            </div>
          ) : (
           

            <img className="rounded-full hover:border-cyan-500/   
            cursor-pointer w-40 h-40 border-4 border-white/5 " src={avatarImage} />
         
          )}

          {/* Info */}
          <div className="flex flex-col">
            <h2 className="text-2xl text-white font-bold mb-2">Adriel Lucas</h2>
            <p className="text-cyan-400 mb-4">Desenvolvedor Full Stack</p>
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
                <FaGithub  className="w-5 h-5"  />
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
                <FaLinkedin className=" w-5 h-5"  />
                Linkedin
              </a>
              <a
                href="mailto:seu@email.com"
                className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-xl bg-white/10 p-2 rounded-full 
                border border-white/10 text-xs  flex items-center gap-2 hover:bg-white/20 space-x-2"
                aria-label="Send Email"
                >
                <FaEnvelope className=" w-5 h-5"  />
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
