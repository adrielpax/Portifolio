import {Swiper,SwiperSlide} from 'swiper/react';
import { ProjectCard } from '../components/projectCard';
import { Pagination } from 'swiper';
import renderThemeChanger from '../hook/darkModeHook';

import "swiper/css";
import "swiper/css/pagination";
import { useEffect, useState } from 'react';


export function SwiperCard(){
    const theme = renderThemeChanger()

    const [scrolled,setScrolled] = useState(false);

    useEffect(()=>{
        window.addEventListener('scroll',hiddenCard)
    },[]);
    

    const hiddenCard = ()=>{
        if(window.scrollY >= 2140){
            setScrolled(true)
        }else{
            setScrolled(false)
        }
    }

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
            className={`${theme?'bg-[#141414]':'bg-white border-b-4 border-light-blue-500'} h-auto md:w-[80%] md:mx-auto my-20 rounded  
            shadow-md md:shadow-xl md:hover:shadow-2xl  ${scrolled? 'opacity-100 transition-opacity ease-in delay-600':
            'opacity-0 transition-opacity ease-out delay-600'}`}
        >
            <SwiperSlide>
                <h3 
                    className={`${theme?'text-[whitesmoke]':'text-blue-gray-600'} 
                    text-xl font-bold text-center mt-4 mx-auto w-[100%]`}
                >
                    YourFinance
                </h3>
                <ProjectCard/>
            </SwiperSlide>
           
        </Swiper>
    )    
}