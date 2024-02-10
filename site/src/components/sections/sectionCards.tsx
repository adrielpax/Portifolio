import React from "react";
import { ButtonComponent } from "../utilsComponents";
// import { ListTech } from "../../utils/list-tech";
// import icons from "../../utils/icons/icons";
import {
  FaPython,
  FaReact,
  FaNodeJs,
  FaLongArrowAltRight,
  FaMoneyBillWave,
} from "react-icons/fa";
import { IoEyeSharp, IoPeopleSharp } from "react-icons/io5";
import { SiJavascript, SiTailwindcss } from "react-icons/si";
import { BsGraphUpArrow } from "react-icons/bs";
import { GiReceiveMoney } from "react-icons/gi";
import InputButton from "../forms/input/inputButton";
import Image from "next/image";
import Wrapper from "../../layout/wrapper";
import localData from "./dataSections.json";

export default function SectionCards() {
  const { title, description, image } = localData.data["section-two"];
  return (
    <div className="flex items-start justify-center mx-auto gap-[136px] self-stretch md:p-10 bg-white ">
      <Wrapper>
        <div
          className="flex md:items-start justify-center mx-auto md:gap-8 flex-[1_0_0] md:rounded-lg p-[72px]
        bg-[#121212] opacity-95 flex-col md:flex-row
        text-[white] items-start gap-16 self-stretch px-6 py-12"
        >
          <div className="w-full md:w-auto justify-center flex ">
            <Image src={image} alt="more-costumers" width={300} height={300} />
          </div>
          <div className="flex flex-col items-start w-auto md:w-[592px] gap-7  md:gap-8 self-stretch">
            {/* <div className="flex items-center justify-between gap-6  text-[#654AEE]">
              <GiReceiveMoney className="w-5 h-5" />
              <FaMoneyBillWave className="w-5 h-5" />
              <IoPeopleSharp className="w-5 h-5" />
            </div>
            <h1 className="text-[#7DFFAF] text-regular text-base"></h1> */}
            <h2 className="font-semibold text-4xl font-sans ">{title}</h2>
            <p className="font-regular font-medium font-sans text-justify ">
              {description}
            </p>
            <div className="flex items-center justify-between">
              {/* <InputButton /> */}

              {/* <ButtonComponent
              className="bg-[#121212] rounded-md z-20 
            shadow-none transition-transform py-2 px-4
            active:scale-95  text-white active:bg-[#12121299]
            border border-transparent hover:border-white"
            >
              My Resume
              <FaLongArrowAltRight />
            </ButtonComponent> */}
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
}
