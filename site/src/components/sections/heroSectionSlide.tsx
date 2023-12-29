import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { HeroSection } from "./heroSection";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

export function HeroSectionSlide() {
  return (
    <Carousel
      autoPlay={true}
      infiniteLoop={true}
      showThumbs={false}
      showIndicators={false}
      showStatus={false}
      swipeable={false}
      renderArrowPrev={(clickHandler, hasPrev) => (
        <>
          <div
            onClick={clickHandler}
            className="absolute right-[31px] md:right-[51px] 
            bottom-0 w-[30px] md:w-[50px] h-[30px] md:h-[50px] 
            bg-transparent z-10 flex items-center justify-center cursor-pointer hover:opacity-90"
          >
            <AiOutlineArrowLeft className="text-sm md:text-lg" />
          </div>
        </>
      )}
      renderArrowNext={(clickHandler, hasNext) => (
        <>
          <div
            onClick={clickHandler}
            className="absolute right-0 bottom-0 w-[30px] md:w-[50px] 
            h-[30px] md:h-[50px] bg-transparent z-10 flex items-center 
            justify-center cursor-pointer hover:opacity-90"
          >
            <AiOutlineArrowRight className="text-sm md:text-lg" />
          </div>
        </>
      )}
    >
      <div>
        <HeroSection />
      </div>
      <div>
        <HeroSection  />
      </div>
    </Carousel>
  );
}
