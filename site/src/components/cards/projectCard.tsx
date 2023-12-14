import Link from "next/link";
import React from "react";
import { SiJavascript } from "react-icons/si";

export default function CardProject() {
  return (
    <Link href={`/(landing_page)/projects/$DevLinks`}>
      <div
        className="flex flex-col items-start gap-6 w-auto p-3 rounded-md
      bg-white text-[#4E4563] border border-transparent hover:border-blue-gray-200
      transition-all duration-75 shadow"
      >
        <div className="h-40 self-stretch rounded-md bg-gray-500"></div>
        <div className="flex justify-between items-start self-stretch">
          <p className="text-sm not-italic font-normal leading-6">
            Jul - Dec 2022
          </p>
          <p>
            <SiJavascript className="w-6 h-6" />
          </p>
        </div>
        <h2 className="text-xl not-italic font-semibold leading-6">DevLinks</h2>
        <p className="text-ellipsis text-medium not-italic font-normal leading-6">
          A link agragator for social media.
        </p>
      </div>
    </Link>
  );
}
