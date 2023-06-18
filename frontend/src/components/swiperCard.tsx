import {Swiper,SwiperSlide} from 'swiper/react';
//import { ProjectCard } from '../components/projectCard';
import { Pagination } from 'swiper';
import renderThemeChanger from '../hook/darkModeHook';
import dynamic from 'next/dynamic';

import "swiper/css";
import "swiper/css/pagination";
import { useEffect, useState } from 'react';


const DynamicCard = dynamic(async ()=> await import('../components/projectCard'),{
    ssr:false,
    loading:()=> {
        return <h2 className='flex justify-center p-4 mx-auto my-4'>Loading...</h2>
    },
})

export function SwiperCard(){
    const theme = renderThemeChanger()

    /*const [scrolled,setScrolled] = useState(false);

    useEffect(()=>{
        window.addEventListener('scroll',hiddenCard)
    },[]);
    

    const hiddenCard = ()=>{
        if(window.scrollY >= 2140){
            setScrolled(true)
        }else{
            setScrolled(false)
        }
    }*/

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
            /** ${scrolled? 'opacity-100 transition-opacity ease-in delay-600':
            'opacity-0 transition-opacity ease-out delay-600'} */
            className={`bg-white border-b-4 border-light-blue-500 h-auto md:w-[80%] md:mx-auto my-20 rounded  
            shadow-md md:shadow-xl md:hover:shadow-2xl `}
        >
            <SwiperSlide>
                <h3 
                    className={`${theme?'text-[whitesmoke]':'text-white'} 
                    text-xl font-bold text-center mt-4 mx-auto w-[100%]`}
                >
                    YourFinance
                </h3>
                <DynamicCard/>
            </SwiperSlide>
           
        </Swiper>
    )    
}