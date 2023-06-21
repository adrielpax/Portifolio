//import Link from 'next/link';
import React, { useState, useEffect } from "react";
import { MenuClose, MenuOpen } from "../utils/nav-utils";
// M of Material tailwind
import {
  Typography,
  Navbar,
  MobileNav,
  IconButton,
} from "@material-tailwind/react";
import { ButtonComponent } from "../components";

export function NavbarPage() {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  //const darkIcon = <FaCloudSun/>

  return (
    <div className="mx-auto">
      <Navbar
        color="white"
        fullWidth
        className="fixed mx-auto py-2 px-4 lg:px-8  
            z-50 bg-opacity-100 shadow-md md:shadow-xl md:hover:shadow-2xl rounded-sm
            dark:border-[#18191a] bg-[#fdfeff] dark:bg-[#18191a]"
      >
        <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
          <Typography
            as="a"
            href="/"
            variant="small"
            className="mr-4 cursor-pointer py-1.5 font-normal"
          >
            <span className="font-semibold text-lg dark:text-white">
              Adriel Dev
            </span>
          </Typography>
          <div className="hidden lg:block">
            <ul className="flex gap-4">
              <li className="hover:text-blue-500">
                <a href="#profile">Profile</a>
              </li>
              <li className="hover:text-blue-500">
                <a href="#projects">Projects</a>
              </li>
              <li className="hover:text-blue-500">
                <a href="#stacks">Stacks</a>
              </li>
              <li className="hover:text-blue-500">
                <a href="#contact">Contate me</a>
              </li>
            </ul>
          </div>
          <a href="#contact" className="block lg:hidden">
            <ButtonComponent
              className={`  
              text-blue-gray-500 font-semibold py-2 px-4 rounded border border-blue-gray-100
              bg-[whitesmoke] hover:text-blue-500 hover:bg-white shadow-xl hover:border-blue-100
              `}
            >
              Entrar em Contato
            </ButtonComponent>
          </a>
          {/* <IconButton
            variant="text"
            className="ml-auto h-6 w-6 
                        text-inherit 
                        lg:hidden
                        hover:bg-transparent 
                        focus:bg-transparent 
                        active:bg-transparent "
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? <>{MenuOpen}</> : <>{MenuClose}</>}
          </IconButton> */}
        </div>
      </Navbar>
    </div>
  );
}
