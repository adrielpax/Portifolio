import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const MainCard: React.FC = () => {
  const avatarImage = "/images/perfil-pro.jpeg";
  return (
    <div className="w-full max-w-md">
      <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6">
        <div className="flex flex-col items-center text-center">
          {/* Avatar */}

          {!avatarImage ? (
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center text-4xl font-bold mb-4">
              AL
            </div>
          ) : (
            <img className="rounded-lg my-4" src={avatarImage} />
          )}

          {/* Info */}
          <h2 className="text-2xl text-white font-bold mb-2">Adriel Lucas</h2>
          <p className="text-cyan-400 mb-4">Desenvolvedor Full Stack</p>
          <p className="text-gray-300 text-sm leading-relaxed mb-6">
            Especializado em interfaces modernas, automação e soluções digitais.
            Apaixonado por tecnologia e sempre em busca de novos desafios.
          </p>

          {/* Social Links */}
          <div className="flex gap-4">
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
        </div>
      </div>
    </div>
  );
};

export default MainCard;
