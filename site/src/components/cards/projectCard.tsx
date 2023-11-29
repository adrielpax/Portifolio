import React from "react";
import { SiJavascript } from "react-icons/si";

export default function CardProject() {
  return (
    <div
      className="flex flex-col items-start gap-6 w-96 p-6 rounded-2xl
    bg-white text-[#4E4563]"
    >
      <div className="h-40 self-stretch rounded-2xl bg-gray-500"></div>
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
  );
}
