import React from "react";
import { ButtonComponent } from "../utilsComponents";
import CardProject from "../cards/projectCard";
import { FaLongArrowAltRight } from "react-icons/fa";
import Wrapper from "../../layout/wrapper";
import { usePathname } from "next/navigation";
import PersonalCardProject from "../cards/personalProjectCard";

export default function PersonalProjectSection() {
  const pathname = usePathname();
  const portfolio = pathname.includes("portfolio");
  return (
    <div
      className={`${
        pathname.includes("portfolio") ? "bg-white" : "bg-[whitesmoke]"
      }`}
    >
      <Wrapper>
        <div className="flex flex-col items-center gap-5 self-stretch px-6 py-12 md:px-28 md:py-[72px] bg-[transparent] rounded-md">
          <h1 className="text-[#0047FF] text-regular text-base">
            {portfolio ? "Personal Projects" : `${""}`}
          </h1>
          <h2 className="text-3xl font-semibold font-sans text-[#121212]">
            {portfolio ? "Veja alguns projetos Tecnicos" : `${""}`}
          </h2>
          <p className="text-xs text-[#12121299] mb-12">
            alguns dos nossos projetos tecnicos ainda estao em desenvolvimento !
          </p>
          {/* <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 items-start  ">
            <PersonalCardProject />
          </div> */}
          <div className="flex flex-wrap gap-8 ">
            <PersonalCardProject />
          </div>
          <ButtonComponent
            className="bg-white rounded-full text-blue-gray-500 py-4 px-10
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
