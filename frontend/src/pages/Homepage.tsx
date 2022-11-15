import { SwiperCard } from '../components/swiperCard';
import * as H from '../layout/home/home';
import { InfoCard } from '../components/sectionCard';
// bg-gradient-to-r from-cyan-500 to-blue-500

export function Homepage(){
    return(
        <div className="w-full h-auto ">
            <H.HeroSection/>
            <section className='mb-40'>
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap justify-around">
                        <H.HomeCard/>
                    </div>
                </div>
            </section>
            <InfoCard Title={'About Me'}/>
            <InfoCard Title={'Tecnologies'}/>
            <div className="flex flex-wrap justify-center gap-2">
                <SwiperCard/>
            </div>
        </div>
    )
}