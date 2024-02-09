import React from "react";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import { ButtonComponent } from "../../components/utilsComponents";
import Wrapper from "../wrapper";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import {
  FaExpeditedssl,
  FaRegCopyright,
  FaRegRegistered,
} from "react-icons/fa";
import { TbServicemark } from "react-icons/tb";
import Link from "next/link";
import { MdOutlineSecurity } from "react-icons/md";

export function Footer() {
  const [separateRoute, setSeparateRoute] = React.useState(false);

  const route = useRouter();
  const pathname = usePathname();

  React.useEffect(() => {
    const path = () => {
      if (pathname && pathname.includes("")) {
        if (pathname.includes("/")) {
          setSeparateRoute(true);
        } else {
          setSeparateRoute(false);
        }
      } else {
        console.error("o pathname e indefinido");
      }
    };

    path();
  }, [pathname]);

  return (
    <footer className="relative bottom-0 h-auto">
      <div className="flex flex-col items-center md:gap-6 h-auto md:px-28 py-10 bg-[#121212] opacity-95 text-white font-semibold text-sm font-sans">
        {!separateRoute ? (
          <Wrapper className="flex flex-col gap-20 mb-20 md:mb-0 scale-90 md:flex-row md:justify-between h-40">
            <div className="opacity-95 h-auto w-80  text-white text-base text-left py-4 px-6">
              Site Map
              <ul className="mt-3 font-normal flex flex-col gap-1">
                <li className="cursor-pointer hover:text-[#00F0FF]">Home</li>
                <li className="cursor-pointer hover:text-[#00F0FF]">Sobre</li>
                <li className="cursor-pointer hover:text-[#00F0FF]">
                  Projetos
                </li>
                <li className="cursor-pointer hover:text-[#00F0FF]">
                  Serviços
                </li>
                <li className="cursor-pointer hover:text-[#00F0FF]">Contato</li>
                <li className="cursor-pointer hover:text-[#00F0FF]">
                  Produtos
                </li>
              </ul>
            </div>
            <div className="opacity-95 h-auto w-80 text-white text-base text-left py-4 px-6 ">
              Nossas Politicas
              <ul className="mt-3 font-normal flex flex-col gap-1">
                <li className="cursor-pointer hover:text-[#00F0FF]">
                  Política de privacidade
                </li>
                <li className="cursor-pointer hover:text-[#00F0FF]">
                  Termos e condições
                </li>
                <li className="cursor-pointer hover:text-[#00F0FF]">
                  Política de entrega
                </li>
                <li className="cursor-pointer hover:text-[#00F0FF]">
                  Política de segurança
                </li>
                <li className="cursor-pointer hover:text-[#00F0FF]">
                  Política de Cookies
                </li>
                <li className="cursor-pointer hover:text-[#00F0FF]">
                  Política de Terceiros
                </li>
              </ul>
            </div>
            <div className="flex md:flex-wrap opacity-95 h-auto w-80 text-white text-base font-normal text-center">
              <div className="flex w-auto h-auto items-center gap-1">
                <FaExpeditedssl className="w-12 h-12 text-green-500" /> SSL Security Protection
              </div>
              <div className="flex items-center w-auto h-auto gap-1">
                <MdOutlineSecurity className="w-12 h-12 text-cyan-500" /> LGPD data Protection
              </div>
            </div>
          </Wrapper>
        ) : (
          <></>
        )}
        <Wrapper>
          <div className="w-full flex mt-96 md:mt-0 h-auto justify-stretch md:flex-row items-center flex-col-reverse gap-8 px-2">
            {!separateRoute ? (
              <div className="w-auto flex flex-col md:flex-row justify-center items-center">
                <Image
                  src={"/imgs/SquareOden-logo-footer.svg"}
                  alt="SquareOden-logo"
                  width={200}
                  height={200}
                />
                <div className="flex gap-2 flex-row items-end text-base mt-24 -ml-20">
                  <FaRegCopyright />
                  <FaRegRegistered />
                  <TbServicemark />
                </div>
                <Link
                  href="/"
                  className="flex items-center text-white hover:text-[#00F0FF] gap-2 font-normal font-sans text-base"
                >
                  All rights reserved SquareOden 2021
                </Link>
              </div>
            ) : (
              <></>
            )}

            <ButtonComponent
              className="bg-[whitesmoke] text-[#121212] rounded-lg p-2 hover:bg-[#121212]
              shadow transition-transform active:scale-95 active:bg-[#121212] border-4 hover:text-[white]"
              onClick={() => route.push(`${pathname}`)}
            >
              <BsFillArrowUpCircleFill className="w-5 h-5" />
            </ButtonComponent>

            <div className="flex flex-col justify-center md:flex-row gap-12 items-center">
              {!separateRoute ? (
                <div className="flex flex-wrap md:flex-row gap-6 font-normal font-sans text-base">
                  <a
                    href="https://github.com/"
                    className="hover:text-[#00F0FF]"
                  >
                    Github
                  </a>
                  <a
                    href="https://linkedin.com/"
                    className="hover:text-[#00F0FF]"
                  >
                    Linkedin
                  </a>
                  <a
                    href="https://instagram.com/"
                    className="hover:text-[#00F0FF]"
                  >
                    Instagram
                  </a>
                </div>
              ) : (
                <div className="flex flex-col md:flex-row w-auto gap-6 font-normal font-sans text-base">
                  All rights reserved adriel dev 2021
                  <a
                    href="https://github.com/"
                    className="hover:text-[#00F0FF]"
                  >
                    Github
                  </a>
                  <a
                    href="https://linkedin.com/"
                    className="hover:text-[#00F0FF]"
                  >
                    Linkedin
                  </a>
                  <a
                    href="https://instagram.com/"
                    className="hover:text-[#00F0FF]"
                  >
                    Instagram
                  </a>
                </div>
              )}
            </div>
          </div>
        </Wrapper>
      </div>
    </footer>
  );
}
