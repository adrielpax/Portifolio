import ButtonComponent from "../buttons/button";
import { FaLongArrowAltRight } from "react-icons/fa";
import Image, { ImageLoader } from "next/image";

import localData from "./dataSections.json";
import { VscDebugStart } from "react-icons/vsc";

interface SectionProp {
  title: string;
  description: string;
  image: string;
  subtitle: string;
  background: string;
}

export function HeroSection() {
  const { title, description, image, subtitle, background, btn_one, btn_two } =
    localData.data["hero-section"];

  return (
    // bg-gradient-to-b from-[#0047FF] to-[#00F0FF]
    <div
      className={`w-auto bg-[#f1f1f110] flex flex-col-reverse justify-center items-start gap-16 self-stretch p-12
      md:gap-6 lg:gap-32 md:px-28 md:py-24 md:items-center md:flex-row mx-auto`}
    >
      <div
        className="flex flex-col w-auto items-start gap-7 self-stretch md:text-left pt-14
          lg:w-[592px] md:flex-col md:items-start md:gap-8 text-[#12121299] font-sans"
      >
        <h1 className="text-4xl font-bold ">{title}</h1>
        <h2 className="text-2xl font-medium">{subtitle}</h2>
        {/* <p className="text-justify">
          {description}
        </p> */}
        <div className="flex flex-col md:flex-row md:items-start justify-around md:justify-between w-full md:w-[430px] gap-4">
          <ButtonComponent
            className="bg-[#121212] rounded-full z-20 font-light
            shadow-none transition-transform py-3 px-9 text-base
            active:scale-100 text-white hover:bg-gray-900 scale-100
            active:border-gray-700 border-4 border-transparent"
          >
            {btn_one}
            <VscDebugStart className="w-5 h-5" />
          </ButtonComponent>
          <ButtonComponent
            className="bg-white rounded-full text-blue-gray-500 py-3 px-9 text-base
            shadow transition-transform active:scale-100 active:bg-blue-gray-50 scale-100
            hover:bg-gray-100 active:border-gray-400 border-4 border-transparent"
          >
            {btn_two}
            <FaLongArrowAltRight />
          </ButtonComponent>
        </div>
      </div>

      <div className="flex justify-center items-center w-full md:w-auto h-auto">
        <Image
          src={image}
          alt="hero-image"
          width={400}
          height={400}
          loading="lazy"
          className=" pointer-events-none select-none"
        />
      </div>
    </div>
  );
}
