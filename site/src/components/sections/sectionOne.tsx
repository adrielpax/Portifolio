import React from "react";
import { ButtonComponent } from "../utilsComponents";
// import { ListTech } from "../../utils/list-tech";
// import icons from "../../utils/icons/icons";
import {
  FaPython,
  FaReact,
  FaNodeJs,
  FaLongArrowAltRight,
  FaInstagram,
} from "react-icons/fa";
import { IoEyeSharp, IoPeopleSharp } from "react-icons/io5";
import { SiJavascript, SiTailwindcss } from "react-icons/si";
import { BsGraphUpArrow } from "react-icons/bs";
import Image from 'next/image'

export default function SectionOne() {
  return (
    <div className="flex items-start justify-center mx-auto gap-[136px] self-stretch md:p-10 bg-white ">
      <div
        className="flex md:items-start justify-center mx-auto md:gap-8 flex-[1_0_0] md:rounded-2xl p-[72px]
        bg-white flex-col md:flex-row
        text-white items-start gap-10 self-stretch px-6 py-12"
      >
        <div className="flex flex-col items-start w-auto md:w-[592px]  md:gap-8 self-stretch">
          <div className="flex items-center gap-6  text-[#654AEE]">
            <BsGraphUpArrow className="w-5 h-5" />
            <IoEyeSharp className="w-5 h-5" />
            <FaInstagram className="w-5 h-5"/>
          </div>
          <h1 className="text-[#7DFFAF] text-regular text-base"></h1>
          <h2 className="font-semibold text-4xl font-sans text-[#12121299]">
            Aumente sua visibilidade online
          </h2>
          <p className="font-regular font-medium font-sans text-justify text-[#12121299]">
            Com a Square Oden, você poderá alcançar seu público-alvo de forma
            eficiente e direcionada. Nossas soluções de marketing digital são
            personalizadas para atender às necessidades específicas do seu
            negócio.
          </p>
          <ButtonComponent
            className="bg-[#121212] rounded-md z-20 
            shadow-none transition-transform py-2 px-4
            active:scale-95  text-white active:bg-[#12121299]
            border border-transparent hover:border-white"
          >
            My Resume
            <FaLongArrowAltRight />
          </ButtonComponent>
        </div>

        <Image src={"/imgs/one.png"} alt="images" width={300} height={300} />
      </div>
    </div>
  );
}
