import Link from "next/link";
import Image from "next/image";
import React from "react";
import { SiJavascript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { MdOutlineStorage } from "react-icons/md";

export default function PersonalCardProject() {
  const url = "/portfolio/projects/$asda";
  return (
    <Link href={url}>
      <div
        className="hover:-translate-y-[2px] transition-all  rounded-xl p-2
          flex flex-col items-stretch w-[300px]"
      >
        <Image
          src={"/imgs/yourfinance.gif"}
          alt={`project-${"yourfinance image"}`}
          width={300}
          height={300}
          className="rounded-t-md"
        />
        <div
          className="flex flex-col items-start gap-6 w-auto py-4 px-6
          bg-[#fff] text-[#12121299] rounded-b-md
          font-semibold text-sm font-sans border shadow hover:shadow-md"
        >
          {/* <div className="h-40 self-stretch rounded-md bg-gray-500"></div> */}
          <div className="flex justify-between items-start self-stretch text-[#0047FF]">
            <div className="flex flex-col justify-center">
              <p className="text-xs not-italic font-semibold">
                Jul - Dec - 2021{}
              </p>
              <div className="scale-75 -ml-6">
                <div className="flex gap-2 justify-around">
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
                </div>
              </div>
            </div>
            <p className="flex items-center gap-4 ">
              <SiJavascript className="w-4 h-4" />
              <FaReact className="w-4 h-4" />
              <MdOutlineStorage className="w-4 h-4" />
            </p>
          </div>
          <div className="flex flex-col w-full  items-start gap-2">
            <h2 className="text-xl not-italic font-semibold font-sans">
              App - Finance{}
            </h2>
            <p className="text-ellipsis not-italic font-sans text-xs leading-1">
              A web application that allows you to manage your finances.
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}
