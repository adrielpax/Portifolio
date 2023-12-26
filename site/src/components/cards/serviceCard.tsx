import Link from "next/link";
import React from "react";
import { SiJavascript } from "react-icons/si";
import { ButtonComponent } from "../utilsComponents";

export default function ServiceCard() {
  return (
    <div className="flex flex-row">
      <div className="h-auto w-full self-stretch rounded-md bg-gray-500"></div>
      <div
        className="flex flex-col items-start gap-6 w-auto p-3 rounded-md
        bg-white text-[#4E4563] border border-transparent
        transition-all duration-75 shadow"
      >
        {/* <div className="flex justify-between items-start self-stretch">
          <p className="text-sm not-italic font-normal leading-6">
          
          </p>  
          <p>
          <SiJavascript className="w-6 h-6" />
          </p>
        </div> */}
        <h2 className="text-lg not-italic font-semibold leading-6">
          Service X
        </h2>
        <p className="text-ellipsis text-sm not-italic text-justify font-normal leading-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
          incidunt exercitationem accusantium, nihil laudantium saepe dolores
        </p>
        <p className="text-ellipsis text-sm not-italic text-justify font-normal leading-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
          incidunt exercitationem accusantium, nihil laudantium saepe dolores
        </p>
        <div className="w-full flex justify-center">
          <Link href={`/web-page/services/$serviceX`}>
            <ButtonComponent
              className="bg-white rounded-md text-blue-gray-500 py-2 px-4
            shadow-sm transition-transform active:scale-95 active:bg-blue-gray-50
            border border-transparent hover:border-blue-gray-100 text-xs"
            >
              Saber Mais
            </ButtonComponent>
          </Link>
        </div>
      </div>
    </div>
  );
}
