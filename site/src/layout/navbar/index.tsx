"use client";
import React from "react";
import Wrapper from "../wrapper";
import Link from "next/link";
import Image from "next/image";
import Menu from "./menu";
import { ButtonComponent } from "../../components/utilsComponents";
import { VscAccount } from "react-icons/vsc";
import MobileMenu from "./mobileMenu";

import { HiCheckCircle } from "react-icons/hi2";
import { SiNintendogamecube } from "react-icons/si";
import { FaTools } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { Button, Tooltip } from "@material-tailwind/react";

export default function Navbar() {
  const [showSubmenu, setShowSubmenu] = React.useState(false);
  const [mobileMenu, setMobileMenu] = React.useState(false);
  const [showNav, setShowNav] = React.useState("translate-y-0");
  const [scrollNav, setScrollNav] = React.useState(0);
  const route = useRouter();

  React.useEffect(() => {
    const controllNavbar = () => {
      if (window.scrollY > 100) {
        if (window.scrollY > scrollNav) {
          setShowNav("-translate-y-[80px] scale-95");
        } else {
          setShowNav("shadow md:scale-95 rounded-md");
        }
      } else {
        setShowNav("translate-y-0");
      }
      setScrollNav(window.scrollY);
    };

    window.addEventListener("scroll", controllNavbar);
    return () => {
      window.addEventListener("scroll", controllNavbar);
    };
  }, [mobileMenu, scrollNav]);

  return (
    <header
      className={`${showNav} bg-white shrink-0 w-full h-20 overflow-visible fixed z-50 top-0 shadow
      transition-all ease-in-out decoration-lime-300 `}
    >
      <Wrapper className="flex flex-row items-center text-[#12121299] justify-around md:justify-between py-1 h-full w-full">
        <Link href={"/"}>
          <div
            className="text-center font-sans font-extrabold text-[#181d41] hover:text-[#0047FF] px-5
          flex items-center gap-2"
          >
            {/* <Image src={""} alt={""}/> */}
            <SiNintendogamecube className="w-10 h-10" />
            SQUARE ODEN
          </div>
        </Link>
        <Menu showSubmenu={showSubmenu} setShowSubmenu={setShowSubmenu} />
        <MobileMenu />
        <div className="hidden md:flex items-center gap-1">
          <div className="flex justify-between items-center">
            <div>
              <ButtonComponent
                className="scale-90 bg-transparent  shadow-none
                  rounded-md hover:text-[#0047FF] border border-transparent
                  transition-transform active:scale-95 hover:opacity-75 p-4"
                icon={<VscAccount className="w-8 h-8" />}
              >
                <span className="bg-red-500 rounded-full w-4 h-4 z-50 absolute bottom-3 right-3"></span>
              </ButtonComponent>
            </div>
          </div>
          <ButtonComponent
            className="scale-90 bg-transparent border
              rounded-md hover:text-white hover:bg-gradient-to-r from-[#0047FF] to-[#00F0FF]
              shadow-sm transition-all active:scale-95 hover:opacity-95 py-2 px-4"
            icon={<HiCheckCircle className="w-5 h-5" />}
            onClick={() => {
              route.push("/(landing_page)/services/request-service");
            }}
          >
            solicitar serviço
          </ButtonComponent>
        </div>
      </Wrapper>
      <Wrapper>
        <div className="flex w-full justify-end">
          <ButtonComponent
            className="bg-[#ffffff99]  shadow-none text-[#12121299]
          rounded-md hover:text-[#0047FF] hover:bg-white border border-transparent
          transition-transform active:scale-90 hover:opacity-75 p-4 py-2 my-1 scale-75"
            icon={<FaTools className="w-6 h-6" />}
          >
            In development
          </ButtonComponent>
        </div>
      </Wrapper>
    </header>
  );
}
