import Tilt from "react-parallax-tilt";
import ListTechIcons from "../common/ListTechIcons";

export default function MainCard() {
  return (
    <Tilt
      glareEnable={true}
      glareMaxOpacity={0}
      glareColor="rgba(0,255,255,0.2)"
      scale={1.02}
      transitionSpeed={1500}
      tiltMaxAngleX={5}
      tiltMaxAngleY={5}
      className="w-full flex justify-center"
    >
      <div
        className="bg-black/50 backdrop-blur-xl 
        rounded-2xl border border-gray-700 text-left
        px-6 py-8 sm:px-8 sm:py-10 max-w-md w-[90%] 
        hover:border-cyan-500
        
        transition-all duration-500 ease-in-out"
      >
        <div className="flex flex-col md:flex-row justify-start gap-5 my-4">
          <img
            src="https://media.licdn.com/dms/image/v2/D4D03AQEdx7KBS6-w7A/profile-displayphoto-shrink_200_200/B4DZaEk0EAHwAc-/0/1745980965618?e=1754524800&v=beta&t=WzgEXuzOnUaiDT7y75Cnwu5zpgd56u3-xxfQDX9P2Nc"
            alt="Adriel Lucas"
            className="rounded-xl w-28 h-28 object-cover"
          />
          <h1 className="text-3xl sm:text-4xl font-semibold mb-4 text-white leading-tight tracking-tight">
            Olá, eu sou <span className="text-cyan-400">Adriel Lucas_</span>
          </h1>
        </div>

        <p className="text-gray-400 text-base leading-relaxed">
          Analista e Desenvolvedor Full Stack com foco em soluções digitais.
        </p>
        <div className="mt-4">
          <p className="text-gray-500 text-sm mb-2">Domínio de Tecnologias:</p>
          <ListTechIcons />
        </div>
      </div>
    </Tilt>
  );
}
