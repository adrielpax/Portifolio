"use client";
import React from "react";
import Wrapper from "../wrapper";
import Link from "next/link";
import Image from "next/image";
import Menu from "./menu";
import { ButtonComponent } from "../../components/homeComponents";

import { HiCheckCircle } from "react-icons/hi2";

export default function Navbar() {
  const [showSubmenu, setShowSubmenu] = React.useState(false);
  const [mobileMenu, setMobileMenu] = React.useState(false);
  const [showNav, setShowNav] = React.useState("translate-y-0");
  const [scrollNav, setScrollNav] = React.useState(0);

  React.useEffect(() => {
    const controllNavbar = () => {
      if (window.scrollY > 100) {
        if (window.scrollY > scrollNav) {
          setShowNav("-translate-y-[80px]");
        } else {
          setShowNav("shadow");
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
      className={`${showNav} bg-white shrink-0 w-max-[1440px] h-20 overflow-visible sticky z-50 top-0 shadow
      transition-all ease-in-out decoration-lime-300`}
    >
      <Wrapper className="flex flex-row items-center justify-between py-1 h-full w-full">
        <Link href={"/"}>
          <div className="text-center font-sans font-extrabold text-[#12121299] px-5">
            {/* <Image src={""} alt={""}/> */}
            LOGO HERE
          </div>
        </Link>
        <Menu showSubmenu={showSubmenu} setShowSubmenu={setShowSubmenu} />
        <div className="hidden md:flex items-center gap-1">
          <ButtonComponent
            className="scale-90 bg-[whitesmoke] text-[#12121299]
              rounded-md hover:text-white hover:bg-gradient-to-r from-[#0047FF] to-[#00F0FF]
              shadow transition-transform active:scale-95 hover:opacity-75"
            icon={<HiCheckCircle className="w-5 h-5" />}
          >
            solicitar serviço
          </ButtonComponent>
        </div>
      </Wrapper>
    </header>
  );
}
