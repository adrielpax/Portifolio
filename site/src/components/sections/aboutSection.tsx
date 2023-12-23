import React from "react";
import { ButtonComponent } from "../utilsComponents";
// import { ListTech } from "../../utils/list-tech";
// import icons from "../../utils/icons/icons";
import {
  FaPython,
  FaReact,
  FaNodeJs,
  FaLongArrowAltRight,
} from "react-icons/fa";
import { SiJavascript, SiTailwindcss } from "react-icons/si";
import Image from "next/image";
import Wrapper from "../../layout/wrapper";

export default function AboutSection() {
  return (
    <div className="flex items-start justify-center mx-auto gap-[136px] self-stretch md:p-10 bg-white">
      <Wrapper>
        <div
          className="flex md:items-start justify-center mx-auto md:gap-16 flex-[1_0_0] md:rounded-lg p-[72px]
        bg-gradient-to-t from-[#0047FF] to-[#00F0FF] flex-col md:flex-row
        text-white items-start gap-16 self-stretch px-6 py-12"
        >
          <div className="flex w-full md:w-auto justify-center">
            <Image
              src={"/imgs/about.png"}
              alt="image"
              width={300}
              height={300}
            />
          </div>
          <div className="flex flex-col items-start w-auto md:w-[592px] gap-7  md:gap-8 self-stretch">
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
              Com a Square Oden, você poderá alcançar seu público-alvo de forma
              eficiente e direcionada. Nossas soluções de marketing digital são
              personalizadas para atender às necessidades específicas do seu
              negócio.
            </p>
            <ButtonComponent
              className="bg-[#121212] rounded-lg z-20 
            shadow-none transition-transform py-4 px-10 text-base
            active:scale-95  text-white active:bg-gray-900 hover:bg-gray-900
            border-4 border-transparent active:border-gray-800"
            >
              My Resume
              <FaLongArrowAltRight />
            </ButtonComponent>
          </div>
        </div>
      </Wrapper>
    </div>
  );
}
