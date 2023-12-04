import ButtonComponent from "../buttons/button";
import { FaLongArrowAltRight } from "react-icons/fa";
import { CgAlbum } from "react-icons/cg";
import Wrapper from "../../layout/wrapper";

interface Prop {
  text: string;
}

export function HeroSection({ text }: Prop) {
  return (
    <div
      className="bg-gradient-to-b from-[#0047FF] to-[#00F0FF] w-auto bg-opacity-50
      flex sm:flex-col justify-center items-start gap-4 self-stretch px-6 py-12
      md:gap-6 lg:gap-32 md:px-28 md:py-24 md:items-center md:flex-row mx-auto"
    >
     
        <div
          className="flex flex-col w-auto items-start gap-6 self-stretch md:text-left
          lg:w-[592px] md:flex-col md:items-start md:gap-8 text-white font-sans"
        >
          <h1 className="text-4xl font-bold ">
            Potencialize sua presença online com a SquareUp
          </h1>
          <h2 className="text-2xl font-medium">
            Oferecemos soluções de marketing digital personalizadas para
            impulsionar seus negócios.
          </h2>
          <p className="text-justify">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A nam
            placeat tempora dicta omnis consequuntur non rerum dolore quis natus
            ut reprehenderit doloribus, facilis velit animi adipisci. Voluptas,
            dolorum mollitia!
          </p>
          <div className="flex md:items-start justify-around md:justify-between w-full md:w-[330px] gap-4">
            <ButtonComponent
              className="bg-[#121212] rounded-md z-20 
            shadow-none transition-transform py-2 px-4
            active:scale-95  text-white active:bg-[#12121299]
            border border-transparent hover:border-white"
            >
              <CgAlbum className="w-5 h-5" />
              My Resume
            </ButtonComponent>
            <ButtonComponent
              className="bg-white rounded-md text-blue-gray-500 py-2 px-4
            shadow transition-transform active:scale-95 active:bg-blue-gray-50
            border border-transparent hover:border-gray-500"
            >
              Get in Touch
              <FaLongArrowAltRight />
            </ButtonComponent>
          </div>
        </div>
        <div className="flex justify-center w-full md:w-auto h-auto">
          {/* <div className="w-[312px] h-[266px]  bg-[whitesmoke] opacity-50"></div> */}
        </div>
     
    </div>
  );
}
