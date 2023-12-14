import React from "react";
import hardData from "./dataNavbar.json";
import Link from "next/link";
import { FaAngleDown } from "react-icons/fa";

interface MenuProps {
  showSubmenu: boolean;
  setShowSubmenu: (...args: any[]) => void;
}

export default function Menu({ showSubmenu, setShowSubmenu }: MenuProps) {
  return (
    <ul className="hidden md:flex flex-row items-center gap-2 md:gap-3 font-semibold text-sm font-sans z-50
    text-[#12121299]">
      {hardData.data.menu.map((item) => {
        return (
          <React.Fragment key={item.id}>
            {!!item?.subMenu ? (
              <li
                className="cursor-pointer flex items-center gap-2 relative select-none  
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
                    transition-transform duration-700"
                  >
                    {hardData.data.subMenu.map((subItem) => {
                      return (
                        <Link key={subItem.id} href={subItem.url}>
                          <li
                            className=" hover:text-light-blue-500 
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
  );
}
