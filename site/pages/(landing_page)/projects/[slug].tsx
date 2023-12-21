import React from "react";
import Wrapper from "../../../src/layout/wrapper";
import { ButtonComponent } from "../../../src/components/utilsComponents";
import { CgAlbum } from "react-icons/cg";
import { FaArrowLeft, FaLongArrowAltRight } from "react-icons/fa";
import { useRouter } from "next/navigation";
import ContactSection from "../../../src/components/sections/contactSection";

export default function Page() {
  const router = useRouter();
  return (
    <div className="min-h-screen">
      <Wrapper className="w-screen h-full flex flex-col items-center md:flex-row md:items-start gap-6 bg-white mt-20">
        <div className="py-6">
          <div className="md:w-[800px] h-[300px] self-stretch bg-[#12121260] rounded-t-md">
            <ButtonComponent
              className="bg-white rounded-md p-3 hover:bg-blue-gray-100 relative top-4 left-4
            shadow transition-transform active:scale-95 active:bg-blue-gray-50"
              onClick={() => router.back()}
            >
              <FaArrowLeft className="text-[#121212] w-5 h-5" />
            </ButtonComponent>
          </div>
          <div className="bg-[whitesmoke] shadow-md rounded-b-md pt-8 pr-12 pb-12 pl-12 flex flex-col gap-6 items-start justify-start shrink-0 md:w-[800px] relative ">
            <div className="flex flex-row items-center justify-between self-stretch shrink-0 relative">
              <div>Jul - 20 . 2023</div>
              <div>icon icon icon</div>
            </div>
            <h1>Title here</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit
              saepe maiores debitis, officia cumque optio nobis molestias
              laboriosam ut! Quos illum earum a ducimus sed facere voluptas
              repudiandae tenetur laudantium!
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit
              saepe maiores debitis, officia cumque optio nobis molestias
              laboriosam ut! Quos illum earum a ducimus sed facere voluptas
              repudiandae tenetur laudantium!
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit
              saepe maiores debitis, officia cumque optio nobis molestias
              laboriosam ut! Quos illum earum a ducimus sed facere voluptas
              repudiandae tenetur laudantium!
            </p>
          </div>
        </div>
        <div className="my-6 w-full self-stretch">
          <div className="bg-[whitesmoke] shadow rounded-md p-8 flex flex-col gap-6 shrink-0 w-full relative ">
            <h1>Title Here</h1>
            <ButtonComponent
              className="bg-[#121212] rounded-md z-20 
            shadow-none transition-transform py-2 px-4 w-auto
            active:scale-95  text-white active:bg-[#12121299]
            border border-transparent hover:border-white"
            >
              <CgAlbum className="w-5 h-5" />
              My Resume
            </ButtonComponent>
            <ButtonComponent
              className="bg-blue-500 rounded-md text-white py-2 px-4
            shadow transition-transform active:scale-95 active:bg-blue-300
            border border-transparent hover:border-white w-auto"
            >
              Get in Touch
              <FaLongArrowAltRight />
            </ButtonComponent>
          </div>
        </div>
      </Wrapper>
      <ContactSection/>
    </div>
  );
}
