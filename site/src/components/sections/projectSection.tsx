import React from "react";
import { ButtonComponent } from "../homeComponents";
import CardProject from "../cards/projectCard";

export default function ProjectSection() {
  return (
    <div className="flex md:flex-col items-center gap-10 self-stretch px-6 py-12 flex-row md:px-28 md:py-[72px] bg-[#E3F7FF]">
      <div className="flex flex-col md:flex-row items-start gap-8 self-stretch">
        <CardProject />
        <CardProject />
        <CardProject />
      </div>
      <ButtonComponent className="flex min-w-[112px] justify-center items-center gap-2 px-6 py-4 rounded-lg">
        See All
      </ButtonComponent>
    </div>
  );
}
