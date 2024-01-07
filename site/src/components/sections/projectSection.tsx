import React, { useState } from "react";
import { ButtonComponent } from "../utilsComponents";
import CardProject from "../cards/projectCard";
import { FaLongArrowAltRight } from "react-icons/fa";
import Wrapper from "../../layout/wrapper";
import { usePathname } from "next/navigation";

import localData from "../../components/cards/dataCard.json";

export default function ProjectSection() {
  const pathname = usePathname();
  const portfolio = pathname.includes("portfolio");
  const { data } = localData;
  const [cnt, setCnt] = useState(6);
  const pages = [];

  for (let page = 0; page < data.projects.length; page++) {
    pages.push(
      <CardProject
        key={page}
        name={""}
        description={""}
        date_posted={""}
        github_link={""}
        url_link={""}
        image={""}
        type={[]}
      />
    );
  }

  return (
    <div
      className={`${
        pathname.includes("portfolio") ? "bg-white" : "bg-[whitesmoke]"
      }`}
    >
      <Wrapper>
        <div className="flex flex-col items-center gap-5 self-stretch px-6 py-12 md:px-28 md:py-[72px] bg-[transparent] rounded-md">
          <h1 className="text-[#0047FF] text-regular text-base">
            {portfolio ? "Personal Projects" : `${"Nossos Projetos"}`}
          </h1>
          <h2 className="text-3xl font-semibold font-sans text-[#121212]">
            {portfolio
              ? "Veja alguns projetos Tecnicos"
              : `${"Alguns de Nossos Projetos"}`}
          </h2>
          <p className="text-xs text-[#12121299] mb-12">
            alguns dos nossos projetos tecnicos ainda estao em desenvolvimento !
          </p>
          <div className="flex flex-wrap gap-8 items-start  ">
            {data.projects.map((item, index) => (
              <CardProject
                key={index}
                name={item.name}
                description={item.description}
                date_posted={item.date_posted}
                github_link={item.github_link}
                url_link={item.url_link}
                image={item.image}
                type={item.type}
              />
            ))}
            {pages}
          </div>
          <ButtonComponent
            className="bg-white rounded-full text-[#121212] py-4 px-10
            shadow active:scale-95 active:bg-blue-gray-900 mt-16
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
