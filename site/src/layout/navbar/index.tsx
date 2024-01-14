import React from "react";
import Wrapper from "../wrapper";
import Link from "next/link";
import Image from "next/image";
import Menu from "./menu";
import { ButtonComponent } from "../../components/utilsComponents";

import MobileMenu from "./mobileMenu";

import { FaRegCircle, FaTools, FaWindowClose } from "react-icons/fa";
import { usePathname, useRouter } from "next/navigation";

import WarnningNavbar from "../../components/utilsComponents/warnningNavbar";

export default function Navbar() {
  const [showSubmenu, setShowSubmenu] = React.useState(false);
  const [mobileMenu, setMobileMenu] = React.useState(false);
  const [showNav, setShowNav] = React.useState("translate-y-0");
  const [scrollNav, setScrollNav] = React.useState(0);

  const route = useRouter();
  const pathname = usePathname();
  const [separateRoute, setSeparateRoute] = React.useState(false);

  //   if (window.scrollY > scrollNav) {
  //     setShowNav("-translate-y-[80px] scale-95");
  //   } else {
  //     setShowNav("shadow md:scale-95 rounded-lg");
  //   }
  // } else {
  //   setShowNav("translate-y-0");
  // }

  React.useEffect(() => {
    const path = () => {
      if (pathname && pathname.includes("")) {
        if (pathname.includes("portfolio")) {
          setSeparateRoute(true);
        } else {
          setSeparateRoute(false);
        }
      } else {
        console.error("o pathname e indefinido");
      }
    };

    path();

    const controllNavbar = () => {
      if (window.scrollY > 100) {
        if (window.scrollY > scrollNav) {
          setShowNav("");
        } else {
          setShowNav("");
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
  }, [mobileMenu, pathname, scrollNav]);

  return (
    <header
      className={`${showNav} bg-white shrink-0 w-full h-[50px] md:h-[80px] overflow-visible fixed z-50 top-0 shadow
      transition-all ease-in-out decoration-lime-300`}
    >
      <Wrapper className="flex flex-row items-center text-[#12121299] justify-between py-1 h-full w-full">
        {!separateRoute ? (
          <Link href={"/web-site/"} className="flex ">
            <div className="scale-75 md:scale-105">
              <Image
                src="/imgs/SquareOden-logo.svg"
                alt={""}
                width={100}
                height={100}
              />
            </div>
          </Link>
        ) : (
          <Link href={"/portfolio"}>
            <h1 className="text-xl font-semibold font-sans text-[#121212] ml-10 text-center">
              Adriel{""}Dev
            </h1>
          </Link>
        )}

        {!separateRoute ? (
          <>
            <Menu showSubmenu={showSubmenu} setShowSubmenu={setShowSubmenu} />
            <MobileMenu showSubmenu={showSubmenu} setShowSubmenu={setShowSubmenu}/>
          </>
        ) : (
          <div className="flex w-full justify-end">
            <ButtonComponent
              className="bg-[#f1f1f199]  shadow-none text-[#12121299]
              rounded-lg hover:text-[#0047FF] hover:bg-white border-4 border-gray-100
              transition-transform active:scale-90 py-4 px-10 my-1 scale-75"
              icon={<FaTools className="w-6 h-6" />}
            >
              <p className={``}>Developer</p>
            </ButtonComponent>
          </div>
        )}
      </Wrapper>
      {/* <div className="w-full flex items-center justify-center">
        <WarnningNavbar scrollNav={scrollNav} />
      </div> */}
      {!separateRoute && (
        <Wrapper>
          <div className="flex w-full justify-end mt-5">
            <ButtonComponent
              className="bg-[#f1f1f199]  shadow-none text-[#12121299]
              rounded-lg hover:text-[#0047FF] hover:bg-white border-4 border-gray-100
              transition-transform active:scale-90 py-4 px-10 my-1 scale-90"
              icon={<FaTools className="w-6 h-6" />}
            >
              <p className={``}>Em desenvolvimento</p>
            </ButtonComponent>
          </div>
        </Wrapper>
      )}
    </header>
  );
}
