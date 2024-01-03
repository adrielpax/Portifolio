import Link from "next/link";
import Image from "next/image";
import React from "react";
import { SiJavascript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { MdOutlineStorage } from "react-icons/md";

export default function CardProject() {
  const url = "/web-site/projects/$asd";
  return (
    <Link href={url}>
      <div className="hover:-translate-y-[2px] transition-all shadow hover:shadow-md rounded-2xl p-2
      flex flex-col items-stretch bg-white">
        <Image
          src={"/imgs/yourfinance.gif"}
          alt={`project-${"yourfinance image"}`}
          width={300}
          height={300}
          className="rounded-lg"
        />
        <div
          className="flex flex-col items-start gap-6 w-auto py-4 px-6
      bg-white text-[#12121299] border border-transparent rounded-b-2xl
       font-semibold text-sm font-sans"
        >
          {/* <div className="h-40 self-stretch rounded-md bg-gray-500"></div> */}
          <div className="flex justify-between items-center self-stretch text-[#0047FF]">
            <p className="text-xs not-italic font-semibold leading-6">
              Jul - Dec - 2021{}
            </p>
            {/* <p className="flex items-center gap-4 ">
              <SiJavascript className="w-4 h-4" />
              <FaReact className="w-4 h-4" />
              <MdOutlineStorage className="w-4 h-4" />
            </p> */}
          </div>
          <div className="flex flex-col w-full  items-start gap-4">
            <h2 className="text-xl not-italic font-semibold font-sans">
              YourFinance{}
            </h2>
           
          </div>

          <p className="text-ellipsis not-italic font-sans text-xs leading-1">
            A web application that allows you to manage your finances. Profits and loses using a localStorage for you security data
          </p>
          {/* <div className="flex items-center justify-between w-full">
              <p
                className="h-auto w-auto bg-[#0047FF] py-2 px-3 rounded-full text-white
            text-xs font-thin"
              >
                Technical
              </p>
              <p
                className="h-auto w-auto bg-[#cc00ff] py-2 px-3 rounded-full text-white
            text-xs font-thin"
              >
                Personal
              </p>
            </div> */}
        </div>
      </div>
    </Link>
  );
}
