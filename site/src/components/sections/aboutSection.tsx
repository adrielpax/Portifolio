import React from "react";
import { ButtonComponent } from "../homeComponents";

export default function AboutSection() {
  return (
    <div className="flex items-start gap-[136px] self-stretch md:p-10 bg-white">
      <div
        className="flex md:items-start md:gap-[136px] flex-[1_0_0] md:rounded-2xl p-[72px]
        bg-gradient-to-t from-[#0047FF] to-[#00F0FF] flex-col md:flex-row
        text-white items-start gap-10 self-stretch px-6 py-12"
      >
        <div
          className="w-[303.435px] h-[213.808px] shrink-0 bg-white
        md:w-[488px] md:h-[396px]"
        ></div>
        <div className="flex flex-col items-start gap-8 self-stretch">
          <div className="flex items-center gap-6"></div>
          <h1>about me</h1>
          <h2>Sub title here ok ??</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
            voluptatum eligendi quaerat illum placeat optio, assumenda dolor sed
            aliquam? Officia, totam natus nulla provident ipsam ullam quo
            officiis tempore voluptatem?
          </p>
          <ButtonComponent className="bg-blue-500 rounded-md">
            My Resume
          </ButtonComponent>
        </div>
      </div>
    </div>
  );
}
