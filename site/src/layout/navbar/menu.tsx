import React from "react";
import hardData from "./dataNavbar.json";
import Link from "next/link";
import { FaAngleDown } from "react-icons/fa";
import { ButtonComponent } from "../../components/utilsComponents";
import { VscAccount } from "react-icons/vsc";
import { HiCheckCircle } from "react-icons/hi2";
import { useRouter } from "next/navigation";
interface MenuProps {
  showSubmenu: boolean;
  setShowSubmenu: (...args: any[]) => void;
}

export default function Menu({ showSubmenu, setShowSubmenu }: MenuProps) {
  const route = useRouter();
  return (
    <>
      <ul
        className="hidden md:flex flex-row justify-end items-center gap-2 md:gap-3 font-semibold text-sm font-sans z-50
    text-[#12121299]"
      >
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
        <div className="hidden md:flex items-center ">
          <ButtonComponent
            className="bg-transparent rounded-full border-transparent w-44 text-xs
            hover:text-[#fbfcff] hover:bg-gray-900 active:border-gray-500 border-4
              shadow-sm transition-all hover:opacity-95 py-2 px-5 md:scale-75 lg:scale-100"
            icon={<HiCheckCircle className="w-5 h-5 " />}
            onClick={() => {
              route.push("/web-page/services/request-service");
            }}
          >
            solicitar serviço
          </ButtonComponent>
          {/* <div className="flex justify-between items-center">
            <div>
              <ButtonComponent
                className="scale-75 bg-transparent shadow-none hover:bg-[whitesmoke]
                  rounded-full hover:text-[#0047FF] border-transparent active:border-gray-500 border-4
                  transition-transform active:scale-90 hover:opacity-75 py-2 px-3"
                icon={<VscAccount className="w-8 h-8" />}
              >
                <span className="bg-red-500 rounded-full w-4 h-4 z-50 absolute bottom-1 right-2"></span>
              </ButtonComponent>
            </div>
          </div> */}
        </div>
      </ul>
    </>
  );
}