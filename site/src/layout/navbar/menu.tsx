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
    <ul className="hidden md:flex flex-row items-center gap-2 md:gap-3 font-semibold text-sm font-sans z-50">
      {hardData.data.menu.map((item) => {
        return (
          <React.Fragment key={item.id}>
            {!!item?.subMenu ? (
              <li
                className="cursor-pointer flex items-center gap-2 select-none text-[#12121299] 
              hover:text-light-blue-500 transition-all ease-in-out"
                onMouseEnter={() => setShowSubmenu(true)}
                // onMouseLeave={() => setShowSubmenu(false)}
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
                    className="bg-white flex flex-col top-12 right-20 min-w-[250px]
                    p-2 text-slate-700 shadow gap-2"
                  >
                    {hardData.data.subMenu.map((subItem) => {
                      return (
                        <li key={subItem.id} className="text-[#12121299] hover:text-light-blue-500 transition-all ease-in-out
                        cursor-pointer flex p-3 bg-[whitesmoke] hover:bg-white rounded ">
                          <Link href={subItem.url}>
                            {subItem.name}
                            {/* <span className="opacity-50 text-sm">
                              {subItem?.doc_count}
                            </span> */}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </li>
            ) : (
              <li
                className="cursor-pointer rounded p-1 hover:text-light-blue-500 text-[#12121299]
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
