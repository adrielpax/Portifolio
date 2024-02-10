import React from "react";
import { ButtonComponent } from "../../../src/components/utilsComponents";
import { FaLongArrowAltRight } from "react-icons/fa";
import Wrapper from "../../../src/layout/wrapper";
import { usePathname } from "next/navigation";
import PersonalCardProject from "../conponents/personalProjectCard";
import itemData from "../conponents/projectData"

export default function PersonalProjectSection() {
  const pathname = usePathname();
  const portfolio = pathname.includes("portfolio");
  return (
    <div
      className={`${pathname.includes("/") ? "bg-white" : "bg-[whitesmoke]"}`}
    >
      <Wrapper>
        <div className="flex flex-col items-center gap-5 self-stretch px-6 py-12 md:px-28 md:py-[72px] bg-[transparent] rounded-md">
          <h1 className="text-[#0047FF] text-regular text-base">
            {"Personal Projects"}
          </h1>
          <h2 className="text-3xl font-semibold font-sans text-[#121212]">
            {"Veja alguns projetos Tecnicos"}
          </h2>
          <p className="text-xs text-[#12121299] mb-12">
            alguns dos nossos projetos tecnicos ainda estao em desenvolvimento !
          </p>
          {/* <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 items-start  ">
            <PersonalCardProject />
          </div> */}
          <div className="flex flex-wrap gap-8 ">
            {itemData.map((item, index) => (
              <PersonalCardProject 
              key={index}
              slug={item.slug} 
              image={item.image} 
              date_post={item.date_post} 
              title={item.title} 
              description={item.description} 
              tags={item.tags}
              />))}
          </div>
          <ButtonComponent
            className="bg-white rounded-full md:w-auto  text-[#121212] py-3 px-9 text-base
                shadow transition-transform active:scale-100 active:bg-blue-gray-50 scale-100
              hover:bg-gray-100 active:border-gray-400 border-4 border-transparent"
          >
            Veja mais
            <FaLongArrowAltRight />
          </ButtonComponent>
        </div>
      </Wrapper>
    </div>
  );
}
