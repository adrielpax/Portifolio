import { Cards } from '../components/cards';
import * as H from '../layout/home/home';
import { InfoCard } from '../components/sectionCard';
// bg-gradient-to-r from-cyan-500 to-blue-500

export function Homepage(){
    return(
        <div className="w-full h-auto ">
            <H.HeroSection/>
            <section className='mb-40'>
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap">
                        <H.HomeCard/>
                        <H.HomeCard/>
                        <H.HomeCard/>
                    </div>
                </div>
            </section>
            <InfoCard/>
            <div className="flex flex-wrap justify-center gap-2">
                <Cards/>
            </div>
            <div className="flex flex-wrap mt-20">
                <H.ProjectCard/>
            </div>
        </div>
    )
}