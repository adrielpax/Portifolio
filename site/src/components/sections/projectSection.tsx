import React from "react";
import { ButtonComponent } from "../homeComponents";
import CardProject from "../cards/projectCard";
import { FaLongArrowAltRight } from "react-icons/fa";

export default function ProjectSection() {
  return (
    <div className="flex flex-col items-center gap-10 self-stretch px-6 py-12 md:px-28 md:py-[72px] bg-[#E3F7FF]">
      <div className="flex flex-col md:flex-row items-start gap-8 ">
        <CardProject />
        <CardProject />
        <CardProject />
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
  );
}
