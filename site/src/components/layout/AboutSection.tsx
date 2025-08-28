import { ReactNode } from 'react';
import { FaUser, FaLaptopCode, FaServer, FaDatabase, FaMobileAlt } from 'react-icons/fa';

interface Skill {
  icon: ReactNode;
  label: string;
  description: string;
}

const AboutSection: React.FC = () => {
  const skills: Skill[] = [
    {
      icon: <FaLaptopCode className="text-2xl text-cyan-400" />,
      label: "Frontend",
      description: "React, Next.js, Vue.js"
    },
    {
      icon: <FaServer className="text-2xl text-blue-400" />,
      label: "Backend", 
      description: "Node.js, Python, PHP"
    },
    {
      icon: <FaDatabase className="text-2xl text-purple-400" />,
      label: "Database",
      description: "MySQL, PostgreSQL, MongoDB"
    },
    {
      icon: <FaMobileAlt className="text-2xl text-red-400" />,
      label: "Mobile",
      description: "React Native, Flutter"
    }
  ];

  return (
    <div className="w-full max-w-md mt-4">
      <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6">
        <h3 className="text-xl font-bold mb-4 text-cyan-400 flex items-center gap-2">
          <FaUser />
          Sobre Mim
        </h3>
        
        <div className="space-y-4 text-white">
          <p className="text-white text-sm leading-relaxed">
            Desenvolvedor Full Stack com experiência em tecnologias modernas como React, 
            Node.js, Python e muito mais. Apaixonado por criar soluções digitais inovadoras 
            e interfaces que proporcionam excelente experiência ao usuário.
          </p>
          
          <p className="text-white text-sm leading-relaxed">
            Especializado em desenvolvimento web, automação de processos e integração de APIs. 
            Sempre buscando aprender novas tecnologias e aplicar as melhores práticas de desenvolvimento.
          </p>
          
          {/* Skills Grid */}
          <div className="grid grid-cols-2 gap-3 mt-6">
            {skills.map((skill, index) => (
              <div 
                key={index}
                className="text-center p-3 bg-black/50 rounded-lg border border-white/5 hover:border-white/20 transition-colors duration-300"
              >
                <div className="flex justify-center mb-2">
                  {skill.icon}
                </div>
                <p className="text-sm font-medium text-white mb-1">{skill.label}</p>
                <p className="text-xs text-gray-400">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;