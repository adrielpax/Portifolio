import * as H from '../layout/home/home';
import {FaDesktop,FaMobile,FaDatabase} from 'react-icons/fa'
import { InfoCard } from '../components/infoCard';
import { SwiperCard } from '../components/swiperCard';
// bg-gradient-to-r from-cyan-500 to-blue-500

export function Homepage(){
    const icon = {
        front:<FaDesktop className='w-full h-full'/>,
        mobile:<FaMobile className='w-full h-full'/>,
        data:<FaDatabase className='w-full h-full'/>,
    }
    return(
        <div className="dark w-full h-auto bg-gradient-to-r from-cyan-400 to-blue-900
            dark:bg-gradient-to-r dark:to-[#8000f2] dark:from-[#911037]
        ">
            <div>
                <H.HeroSection/>
            </div>
            <section className='mb-40'>
                <div>
                    <H.PersonalCard/>
                </div>
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap justify-around">
                        <H.HomeCard
                            props={{
                                title:'Mobile Dev',
                                text:'Fast development mobile apps with expo and react native',
                                content:'Mobile: Expo, React-Native',
                                color:'text-white',
                                bgColor:'bg-light-blue-400',
                                icon:icon.mobile
                            }}
                        />
                        <H.HomeCard
                            props={{
                                title:'Front/Back-end Dev',
                                text:'Web dev front end with mvp in tailwind and RESTfull APIs with nodeJS',
                                content:'Front: React / Back: Node',
                                color:'text-white',
                                bgColor:'bg-light-blue-400',
                                icon:icon.front
                            }}
                        />
                         <H.HomeCard
                            props={{
                                title:'Data Dev',
                                text:'Development using mongoDB and SQL',
                                content:'DATA: MongoDB/SQLite',
                                color:'text-white',
                                bgColor:'bg-light-blue-400',
                                icon:icon.data
                            }}
                        />
                    </div>
                </div>
            </section>
    
            <InfoCard Title={'About Me'} index={false} type={0}/>
            <InfoCard Title={'Tecnologies'} index={true} type={0}/>
            <InfoCard Title={'Language'} index={true} type={1}/>
            <div className="flex flex-wrap justify-center gap-2">
                <SwiperCard/>
            </div>
        </div>
    )
}