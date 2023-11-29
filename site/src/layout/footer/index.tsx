import { BsFillArrowUpCircleFill } from "react-icons/bs";
import { FormCard } from "../../components/forms/formCard";
import { ButtonComponent } from "../../components/homeComponents";
import { FooterList } from "../../utils/footer-utils";
import { SiNintendogamecube } from "react-icons/si";

export function Footer() {
  return (
    <div className="flex items-center gap-6 px-28 py-8 bg-black text-white">
      <div className="w-full flex justify-between md:flex-row items-center flex-col">

        <a href="/" className="flex items-center text-white hover:text-[#0047FF] gap-2">All rights reserved <SiNintendogamecube className="w-5 h-5" /> adrieldev 2023</a>

        <div className="flex flex-row gap-4 items-center">
          <a href="/">Github</a>
          <a href="/">Linkedin</a>
          <a href="/">Instagram</a>
          <ButtonComponent className="bg-white rounded-md p-3 hover:bg-blue-gray-100
            shadow transition-transform active:scale-95 active:bg-blue-gray-50">
            <BsFillArrowUpCircleFill className="text-[#121212] w-5 h-5"/>
          </ButtonComponent>
        </div>

      </div>
    </div>
  );
}
