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
           

            <img className="rounded-full w-40 h-40 border-4 border-white/5" src={avatarImage} />
         
          )}

          {/* Info */}
          <div className="flex flex-col">
            <h2 className="text-2xl text-white font-bold mb-2">Adriel Lucas</h2>
            <p className="text-cyan-400 mb-4">Desenvolvedor Full Stack</p>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
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
                className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-xl"
                aria-label="GitHub Profile"
                >
                <FaGithub />
              </a>
              <a
                href="https://linkedin.com/in/SEU_USUARIO"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-xl"
                aria-label="LinkedIn Profile"
                >
                <FaLinkedin />
              </a>
              <a
                href="mailto:seu@email.com"
                className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-xl"
                aria-label="Send Email"
                >
                <FaEnvelope />
              </a>
              </div>
              {/* <button
                onClick={onOpenContact}
                className="w-[200px] bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 
                p-2 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-green-500/25 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50"
                >
                Vamos Conversar
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainCard;
