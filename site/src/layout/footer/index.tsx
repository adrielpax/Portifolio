import { BsFillArrowUpCircleFill } from "react-icons/bs";
import { FormCard } from "../../components/forms/formCard";
import { ButtonComponent } from "../../components/utilsComponents";
import { FooterList } from "../../utils/footer-utils";
import { SiNintendogamecube } from "react-icons/si";
import Wrapper from "../wrapper";
import { usePathname, useRouter } from "next/navigation";

export function Footer() {
  const route = useRouter();
  const pathname = usePathname();
  return (
    <div>
      <div className="flex items-center gap-6 md:px-28 py-3 bg-black text-white">
        <Wrapper>
          <div className="w-full flex justify-between md:flex-row items-center flex-col-reverse gap-8 font-sans text-xs">
            <a
              href="/"
              className="flex items-center text-white hover:text-[#0047FF] gap-2"
            >
              All rights reserved <SiNintendogamecube className="w-5 h-5" />{" "}
              SquareOden 2023
            </a>

            <div className="flex flex-row gap-4 items-center">
              <a
                href="https://github.com/"
                className="hover:text-light-blue-500"
              >
                Github
              </a>
              <a
                href="https://linkedin.com/"
                className="hover:text-light-blue-500"
              >
                Linkedin
              </a>
              <a
                href="https://instagram.com/"
                className="hover:text-light-blue-500"
              >
                Instagram
              </a>
              <ButtonComponent
                className="bg-[#121212] rounded p-2 hover:bg-blue-gray-900
              shadow transition-transform active:scale-95 active:bg-blue-500"
              onClick={()=>route.push(`${pathname}`)}
              >
                <BsFillArrowUpCircleFill className="text-white w-5 h-5" />
              </ButtonComponent>
            </div>
          </div>
        </Wrapper>
      </div>
    </div>
  );
}
