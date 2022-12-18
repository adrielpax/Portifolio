import React from 'react'; 
import * as H from '../layout/home/home';
import {FaDesktop,FaMobile,FaDatabase} from 'react-icons/fa'
import { InfoCard } from '../components/infoCard';
import { SwiperCard } from '../components/swiperCard';
import content from '../messages/pt.json'
import { FormCard } from '../components/formCard';

export async function getStaticProps(){
    const res = await fetch('/api/data/data.js')
    const data = res.json()

    return{
        props:{
            data,
        }
    }
}

interface props {
    data: JSON
}

export function Homepage({data}:props){
    
    const icon = {
        front:<FaDesktop className='w-full h-full'/>,
        mobile:<FaMobile className='w-full h-full'/>,
        data:<FaDatabase className='w-full h-full'/>,
    }

    //const {aboutMe}:string = data
    //console.log(aboutMe)
    
    return(
        <div className="dark w-full h-auto bg-gradient-to-r from-cyan-400 to-blue-900
            dark:bg-gradient-to-r dark:to-[#8000f2] dark:from-[#911037]
        ">
            <div>
                <H.HeroSection/>
            </div>
            <h1>{}</h1>
            <section className='mb-40 pb-7'>
                <div>
                    <H.PersonalCard/>
                </div>
                <div className={`container mx-auto my-40 px-4`}>
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
            <div className={``}>
            <InfoCard Title={'About Me'} index={false} type={0}
                text={""}
                />
            <InfoCard Title={'Tecnologies'} index={true} type={0}
                text={''}
                />
            <InfoCard Title={'Language'} index={true} type={1}
                text={''}
                />
            </div>
            <div className={`
                flex flex-wrap justify-center gap-2`}>
                <SwiperCard/>
            </div>
                <FormCard/>
            </section>
        </div>
    )
}