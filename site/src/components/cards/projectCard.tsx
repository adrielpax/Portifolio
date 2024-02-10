import Link from "next/link";
import Image from "next/image";
import React from "react";
import { SiJavascript } from "react-icons/si";
import { FaFire, FaReact } from "react-icons/fa";
import { ButtonComponent } from "../utilsComponents";
import { useRouter } from "next/navigation";

interface CardProps {
  name: string;
  description: string;
  date_posted: string;
  github_link: string;
  url_link: string;
  image: string;
  type: string[];
}

export default function CardProject({
  name,
  description,
  date_posted,
  github_link,
  url_link,
  image,
  type,
}: CardProps) {
  const route = useRouter()
  const dynamicUrl = `/web-site/projects/${name.toLowerCase().replace(/\s/g, "")}`;

  return (
    <div
      className="hover:-translate-y-[2px] transition-all shadow hover:shadow-md rounded-2xl p-2
      flex flex-col items-stretch bg-white w-[300px]"
    >
      {image ? (
        <Image
          src={image}
          alt={`project-${"yourfinance image"}`}
          width={300}
          height={300}
          className="rounded-lg"
        />
      ) : (
        <div className="w-auto h-[264px] bg-gray-200 rounded-lg"></div>
      )}
      <div
        className="flex flex-col items-start gap-2  w-auto py-4 px-2
        bg-white text-[#12121299] border border-transparent rounded-b-2xl
          font-semibold text-sm font-sans"
      >
        <div className="flex justify-between items-center px-2 self-stretch text-[#0047FF]">
          <p className="text-xs not-italic font-semibold">
            {date_posted}
          </p>
          <p className="flex items-center gap-4 ">
            <FaFire className="w-4 h-4" />
          </p>
        </div>
        <div className="flex flex-col w-full mx-2  items-start">
          <h2 className="text-xl not-italic font-semibold font-sans">{name}</h2>
        </div>
        <p className="text-ellipsis not-italic mx-2 font-sans text-xs leading-1">
          {description}
        </p>
     
          <ButtonComponent
            className="bg-white rounded-full text-[#121212] py-2 px-5
            w-full shadow active:scale-95 active:bg-blue-gray-900 border
            hover:bg-gray-900 hover:text-white transition-all m-0"

            onClick={()=>route.push(dynamicUrl)}
          >
            Ver mais
          </ButtonComponent>
    
      </div>
    </div>
  );
}
