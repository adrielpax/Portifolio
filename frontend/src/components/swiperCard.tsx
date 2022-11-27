import {Swiper,SwiperSlide} from 'swiper/react';
import { ProjectCard } from '../components/projectCard';
import { Pagination } from 'swiper';
import renderThemeChanger from '../hook/darkModeHook';

import "swiper/css";
import "swiper/css/pagination";


export function SwiperCard(){
    const theme = renderThemeChanger()
    return(
        <Swiper
            slidesPerView={1}
            centeredSlides={true}
            spaceBetween={30}
            pagination={{
                clickable:true
            }}
            modules={[Pagination]}

            //onSlideChange={()=>{}}
            //onSwiper={(swiper)=>{}}
            className={`${theme?'bg-gray-900':'bg-[whitesmoke]'} h-auto md:w-[80%] md:mx-auto my-20 rounded  
            shadow-md md:shadow-xl md:hover:shadow-2xl`}
        >
            <SwiperSlide>
                <h3 
                    className={`${theme?'text-[whitesmoke]':'text-blue-gray-600'} 
                    text-xl font-bold text-center mt-4 mx-auto w-[100%]`}
                >
                    Technical Project
                </h3>
                <ProjectCard/>
            </SwiperSlide>
           
        </Swiper>
    )    
}