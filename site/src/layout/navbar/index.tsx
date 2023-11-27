import React from "react";
import Wrapper from "../wrapper";
import Link from "next/link";
import Image from "next/image";
import Menu from "./menu";

export default function Navbar() {
  const [showSubmenu, setShowSubmenu] = React.useState(false);

  return (
    <header className="bg-[#ffffff] shrink-0 w-max-[1440px] h-20 overflow-hidden">
      <Wrapper className="flex flex-row items-center justify-between py-1 h-full w-full">
        <Link href={"/"}>
          <div className="text-center font-sans font-extrabold text-[#12121299]">
            {/* <Image src={""} alt={""}/> */}
            LOGO HERE
          </div>
        </Link>
        <Menu showSubmenu={showSubmenu} setShowSubmenu={setShowSubmenu} />
      </Wrapper>
    </header>
  );
}
