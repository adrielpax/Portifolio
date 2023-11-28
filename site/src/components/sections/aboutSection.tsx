import React from "react";
import { ButtonComponent } from "../homeComponents";
// import { ListTech } from "../../utils/list-tech";
// import icons from "../../utils/icons/icons";
import { FaPython, FaReact, FaNodeJs, FaLongArrowAltRight } from "react-icons/fa";
import { SiJavascript, SiTailwindcss } from "react-icons/si";

export default function AboutSection() {
  return (
    <div className="flex items-start justify-center mx-auto gap-[136px] self-stretch md:p-10 bg-white">
      <div
        className="flex md:items-start justify-center mx-auto md:gap-8 flex-[1_0_0] md:rounded-2xl p-[72px]
        bg-gradient-to-t from-[#0047FF] to-[#00F0FF] flex-col md:flex-row
        text-white items-start gap-10 self-stretch px-6 py-12"
      >
        <div
          className="w-auto  h-[266px] shrink-0 bg-white opacity-50"
        ></div>
        <div className="flex flex-col items-start w-auto md:w-[592px]  md:gap-8 self-stretch">
          <div className="flex items-center gap-6  text-[#654AEE]">
            <FaPython className="w-5 h-5" />
            <FaReact className="w-5 h-5" />
            <SiJavascript className="w-5 h-5" />
            <FaNodeJs className="w-5 h-5" />
            <SiTailwindcss className="w-5 h-5" />
          </div>
          <h1 className="text-[#7DFFAF] text-regular text-base">Sobre nós</h1>
          <h2 className="font-semibold text-4xl font-sans">
            Alcance seu público-alvo
          </h2>
          <p className="font-regular font-medium font-sans text-justify">
            Com a Digital Boost, você poderá alcançar seu público-alvo de forma
            eficiente e direcionada. Nossas soluções de marketing digital são
            personalizadas para atender às necessidades específicas do seu
            negócio.
          </p>
          <ButtonComponent
            className="bg-white rounded-md text-blue-gray-500
            shadow transition-transform active:scale-95 active:bg-blue-gray-50
            border border-transparent hover:border-gray-500"
          >
            My Resume
            <FaLongArrowAltRight />
          </ButtonComponent>
        </div>
      </div>
    </div>
  );
}
