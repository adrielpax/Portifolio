export default function AboutSection() {
  return (
    <div
      className="bg-black/50 backdrop-blur-xl 
      rounded-2xl border border-gray-700 
      px-6 py-8 max-w-md w-[90%] text-left
      hover:border-cyan-500
      transition-all duration-500 ease-in-out"
    >
      <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-cyan-400 tracking-wide">
        Sobre mim_
      </h2>
      <div className="text-gray-400 text-base leading-relaxed space-y-4">
        <p>
          Sou desenvolvedor Full Stack especializado em criar soluções digitais
          modernas e eficientes, integrando desenvolvimento web, automação
          industrial e análise de dados.
        </p>
        <p>
          Trabalho com tecnologias como MERN Stack, TypeScript, Next.js, Docker,
          SQL/NoSQL e integração de sistemas com Python.
        </p>
        <p>
          Ofereço soluções sob medida, combinando engenharia de software,
          automação e inteligência de dados, sempre com foco em inovação,
          qualidade e entrega ágil.
        </p>
      </div>
    </div>
  );
}
