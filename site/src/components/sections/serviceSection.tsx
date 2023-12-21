import React from "react";
import { ButtonComponent } from "../utilsComponents";
import CardProject from "../cards/projectCard";
import { FaLongArrowAltRight } from "react-icons/fa";
import ServiceCard from "../cards/serviceCard";
import Wrapper from "../../layout/wrapper";

export default function ServiceSection() {
  return (
    <div className=" bg-[#f1f1f199] mt-20">
      <Wrapper>
        <div className="flex flex-col items-center gap-10 self-stretch px-6 py-12 md:px-28 md:py-[72px]">
          <h1 className="text-[#7DFFAF] text-regular text-base">Services</h1>
          <h2 className="font-semibold text-4xl font-sans">Nossos Serviços</h2>
          <div className="grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1 gap-8 items-start  ">
            <ServiceCard />
            <ServiceCard />
            <ServiceCard />
          </div>
          <ButtonComponent
            className="bg-white rounded-md text-blue-gray-500 py-2 px-4
            shadow transition-transform active:scale-95 active:bg-blue-gray-50
            border border-transparent hover:border-gray-500"
          >
            See All
            <FaLongArrowAltRight />
          </ButtonComponent>
        </div>
      </Wrapper>
    </div>
  );
}
