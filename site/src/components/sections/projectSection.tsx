import React from "react";
import { ButtonComponent } from "../utilsComponents";
import CardProject from "../cards/projectCard";
import { FaLongArrowAltRight } from "react-icons/fa";
import Wrapper from "../../layout/wrapper";

export default function ProjectSection() {
  return (
    <div className="bg-[whitesmoke]">
      <Wrapper>
        <div className="flex flex-col items-center gap-10 self-stretch px-6 py-12 md:px-28 md:py-[72px] bg-[transparent] rounded-md">
          <h1 className="text-[#7DFFAF] text-regular text-base">Projects</h1>
          <h2 className="font-semibold text-4xl font-sans">
            Nossos principais Projetos
          </h2>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 items-start  ">
            <CardProject />
            <CardProject />
            <CardProject />
          </div>
          <ButtonComponent
            className="bg-white rounded-md text-blue-gray-500 py-4 px-10
            shadow active:scale-95 active:bg-blue-gray-900
            border border-transparent hover:bg-gray-900 hover:text-white transition-all"
          >
            See All
            <FaLongArrowAltRight />
          </ButtonComponent>
        </div>
      </Wrapper>
    </div>
  );
}
