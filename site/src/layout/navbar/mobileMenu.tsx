import React from "react";
import { ButtonComponent } from "../../components/utilsComponents";
import { MdOutlineMenuOpen } from "react-icons/md";
import { VscCloseAll } from "react-icons/vsc";
import hardData from "./dataNavbar.json";
import Link from "next/link";
import { FaAngleDown } from "react-icons/fa";
import { HiCheckCircle } from "react-icons/hi2";

interface MenuProps {
  showSubmenu: boolean;
  setShowSubmenu: (...args: any[]) => void;
}

export default function MobileMenu({ showSubmenu, setShowSubmenu }: MenuProps) {
  const [openMenu, setOpenMenu] = React.useState(true);

  const clickToggle = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <div className="block md:hidden">
      <ButtonComponent
        className="shadow-none p-2 rounded-md"
        onClick={() => clickToggle()}
      >
        {openMenu ? (
          <MdOutlineMenuOpen className="w-8 h-8 text-[#12121299]" />
        ) : (
          <VscCloseAll className="w-8 h-8 text-[#12121299]" />
        )}
      </ButtonComponent>
      <ButtonComponent
        onClick={() => clickToggle()}
        className={`${
          openMenu ? "hidden" : "flex"
        } flex-col md:hidden font-bold absolute top-[50px] left-0 w-full
        h-[calc(100vh-50px)] bg-white border-t text-slate-500 
        transform-translate transition-all z-50`}
      >
        <ul
          className="flex flex-col justify-center items-center gap-2 font-semibold text-sm font-sans z-50
        text-[#12121299] my-5 "
        >
          {hardData.data.menu.map((item) => {
            return (
              <React.Fragment key={item.id}>
                {!!item?.subMenu ? (
                  <li
                    className="cursor-pointer gap-2 relative select-none py-5 my-5 border-b  
              hover:text-light-blue-500 transform-translate transition-all delay-600"
                    onMouseEnter={() => setShowSubmenu(true)}
                    onMouseLeave={() => setShowSubmenu(false)}
                  >
                    {item.name}
                    <FaAngleDown
                      className={`${
                        showSubmenu
                          ? "transform-translate transition-all rotate-180"
                          : "transition-all"
                      }`}
                    />
                    {showSubmenu && (
                      <ul
                        className="bg-white absolute top-5 -right-15 min-w-[250px]
                    p-2 text-slate-700 shadow-md flex flex-col gap-1 justify-between rounded z-50
                    transition-transform duration-700 border-b"
                      >
                        {hardData.data.subMenu.map((subItem) => {
                          return (
                            <Link key={subItem.id} href={subItem.url}>
                              <li
                                className=" hover:text-light-blue-500 border-b
                            transition-all ease-in-out text-[#12121299]
                            cursor-pointer flex p-3 hover:bg-[whitesmoke] bg-white rounded "
                              >
                                {subItem.name}
                                {/* <span className="opacity-50 text-sm">
                              {subItem?.doc_count}
                            </span> */}
                              </li>
                            </Link>
                          );
                        })}
                      </ul>
                    )}
                  </li>
                ) : (
                  <li
                    className="cursor-pointer rounded p-1 hover:text-light-blue-500 
              transition-all duration-200 ease-in-out"
                  >
                    <Link href={item?.route || "/"}>{item.name}</Link>
                  </li>
                )}
              </React.Fragment>
            );
          })}
        </ul>
        <Link
          href="/web-site/services/request-service"
          className="bg-transparent rounded-full border-transparent w-full text-xs
            hover:text-[#fbfcff] hover:bg-gray-900 active:border-gray-500 border-4
              shadow-sm transition-all hover:opacity-95 py-2 px-5 md:scale-75 lg:scale-100"
        >
          <HiCheckCircle className="w-5 h-5 " /> solicitar serviço
        </Link>
      </ButtonComponent>
    </div>
  );
}
