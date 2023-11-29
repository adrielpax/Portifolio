import React from "react";
import { SiJavascript } from "react-icons/si";

export default function CardProject() {
  return (
    <div
      className="flex flex-col items-start gap-6 flex-[1_0_0] p-6 rounded-2xl
    bg-white text-[#4E4563]"
    >
      <div className="h-40 self-stretch rounded-2xl bg-gray-500">Image</div>
      <div className="flex justify-between items-start self-stretch">
        <p className="text-sm not-italic font-normal leading-6">12.15.202</p>
        <p>
          <SiJavascript />
        </p>
      </div>
      <h2 className="text-xl not-italic font-medium leading-6">Title</h2>
      <p className="text-ellipsis text-base not-italic font-normal leading-6">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quod
      </p>
    </div>
  );
}
