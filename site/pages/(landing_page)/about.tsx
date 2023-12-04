import React from "react";
import { AboutSection } from "../../src/components/sections";
import Wrapper from "../../src/layout/wrapper";
import {
  ButtonComponent,
  PersonalCard,
} from "../../src/components/homeComponents";
import ContactSection from "../../src/components/sections/contactSection";

export default function AboutPage() {
  return (
    <div className="h-auto">
      <div className="flex items-start justify-center mx-auto gap-[136px] self-stretch md:p-10 bg-white">
        <div
          className="flex md:items-start justify-center mx-auto md:gap-8 flex-[1_0_0] md:rounded-2xl p-[72px]
        bg-gradient-to-t from-[#0047FF] to-[#00F0FF] flex-col md:flex-row
        text-white items-start gap-10 self-stretch px-6 py-12"
        >
          <PersonalCard />
          <div className="flex flex-col items-start w-auto md:w-[592px]  md:gap-8 self-stretch">
            <div className="flex items-center gap-6  text-[#654AEE]">
              {/* <FaPython className="w-5 h-5" />
            <FaReact className="w-5 h-5" />
            <SiJavascript className="w-5 h-5" />
            <FaNodeJs className="w-5 h-5" />
            <SiTailwindcss className="w-5 h-5" /> */}
            </div>
            <h1 className="text-[#7DFFAF] text-regular text-base">Sobre nós</h1>
            <h2 className="font-semibold text-4xl font-sans">
              Alcance seu público-alvo
            </h2>
            <p className="font-regular font-medium font-sans text-justify">
              Com a Digital Boost, você poderá alcançar seu público-alvo de
              forma eficiente e direcionada. Nossas soluções de marketing
              digital são personalizadas para atender às necessidades
              específicas do seu negócio.
            </p>
            <ButtonComponent
              className="bg-[#121212] rounded-md z-20 
            shadow-none transition-transform py-2 px-4
            active:scale-95  text-white active:bg-[#12121299]
            border border-transparent hover:border-white"
            >
              My Resume
              {/* <FaLongArrowAltRight /> */}
            </ButtonComponent>
          </div>
        </div>
      </div>

      <ContactSection />
    </div>
  );
}
