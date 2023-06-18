import React from 'react'; 
import { useQuery , gql} from '@apollo/client';

import * as H from '../components/homeComponents/home';//componente de layout footer e navbar
import {FaDesktop,FaMobile,FaDatabase} from 'react-icons/fa'; //componente icone utilitario
import { InfoCard } from '../components/infoCard'; //componente
import { SwiperCard } from '../components/swiperCard'; //componente
import { FormCard } from '../components/forms/formCard'; //componente


export default function ENG_PAGE(){

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
                <H.HeroSection text='Your story begins with those who are prepared to make history.'/>
            </div>
            <h1></h1>
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
            <InfoCard 
                Title={`${ false ?
                    'Loading..'
                    :'About Me'
                }`} 
                index={false} 
                type={0}
                text={`${ false ?
                    'This message is Loading waiting ...'
                    :"Hello, my name is Adriel and I'm 19 years old. I'm currently studying Systems Analysis and Development and looking for an internship in the field of information technology. My long-term goal is to become an expert in the JavaScript ecosystem and I have a keen interest in learning and applying new technologies in this field. I have solid skills in technologies such as Node.js, React.js, React Native, MongoDB, Express, Tailwind, TypeScript, Next.js, GraphQL, Rest API, and I'm fluent in English. Additionally, I'm a person passionate about fast learning, efficient communication, creativity, and design, and I have basic knowledge in accounting and financial markets. My dream is to one day develop my own business in the technology industry and create incredible solutions that can transform people's lives. I'm excited to start this journey and contribute to the growth of a company.."
                }`}
                />
            <InfoCard Title={'Tecnologies'} index={true} type={0}
                text={'bla'}
                />
            <InfoCard Title={'Language'} index={true} type={1}
                text={'bla bla'}
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