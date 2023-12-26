import React from "react";
import Wrapper from "../wrapper";
import Link from "next/link";
import Image from "next/image";
import Menu from "./menu";
import { ButtonComponent } from "../../components/utilsComponents";

import MobileMenu from "./mobileMenu";

import { FaRegCircle, FaTools, FaWindowClose } from "react-icons/fa";
import { useRouter } from "next/navigation";

import WarnningNavbar from "../../components/utilsComponents/warnningNavbar";

import { BiCube } from "react-icons/bi";

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
          setShowNav("shadow md:scale-95 rounded-lg");
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
      className={`${showNav} bg-white shrink-0 w-full h-[80px] overflow-visible fixed z-50 top-0 shadow
      transition-all ease-in-out decoration-lime-300 `}
    >
      <Wrapper className="flex flex-row items-center text-[#12121299] justify-around md:justify-between py-1 h-full w-full">
        <Link href={"/web-page/homepage"} className="flex ">
          {/* <div
            className="text-center font-medium text-[#0047FF] hover:text-[#0008ff] px-5
          flex items-center gap-2 text-2xl bg-white"
          >
            Square Oden
          </div>
          <FaRegCircle className="w-14 h-14 relative right-20" /> */}
          <div className="scale-75">
            <Image
              src="/imgs/SquareOden-logo.svg"
              alt={""}
              width={200}
              height={200}
            />
          </div>
        </Link>
        <Menu showSubmenu={showSubmenu} setShowSubmenu={setShowSubmenu} />
        <MobileMenu />
      </Wrapper>
      <div className="w-full flex items-center justify-center">
        <WarnningNavbar scrollNav={scrollNav} />
      </div>
      <Wrapper>
        <div className="flex w-full justify-end mt-5">
          <ButtonComponent
            className="bg-[#ffffff99]  shadow-none text-[#12121299]
          rounded-md hover:text-[#0047FF] hover:bg-white border border-transparent
          transition-transform active:scale-90 hover:opacity-75 p-4 py-2 my-1 scale-75"
            icon={<FaTools className="w-6 h-6" />}
          >
            Em desenvolvimento
          </ButtonComponent>
        </div>
      </Wrapper>
    </header>
  );
}
