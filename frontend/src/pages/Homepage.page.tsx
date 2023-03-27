import React from 'react'; 
import { useQuery , gql} from '@apollo/client';

import * as H from '../components/home/home';//componente de layout footer e navbar
import {FaDesktop,FaMobile,FaDatabase} from 'react-icons/fa'; //componente icone utilitario
import { InfoCard } from '../components/infoCard'; //componente
import { SwiperCard } from '../components/swiperCard'; //componente
import { FormCard } from '../components/forms/formCard'; //componente

/*const GET_MESSAGE = gql`
    query {
        aboutMe
    }
`;

export async function getStaticProps(){
    const {data} = await useQuery(GET_MESSAGE);
    return {
        props:{
            message:data.aboutMe
        }
    }
}

interface props {
    message:string
}*/

export default function Homepage(){

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
                <H.HeroSection text='Sua Historia começa com quem faz Historia !'/>
            </div>
            <h1></h1>
            <section className='pb-7'>
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
                    :'Sobre mim'
                }`} 
                index={false} 
                type={0}
                text={`${ false ?
                    'This message is Loading waiting ...'
                    :'Olá, meu nome é Adriel e tenho 19 anos. Estou cursando Análise e Desenvolvimento de Sistemas e buscando um estágio na área de tecnologia da informação. Meu objetivo a longo prazo é me tornar um especialista no ecossistema JavaScript e tenho um grande interesse em aprender e aplicar as novas tecnologias nesse campo. Tenho habilidades sólidas em tecnologias como Node.js, React.js, React Native, MongoDB, Express, Tailwind, TypeScript, Next.js, GraphQL, API Rest e tenho fluência no inglês. Além disso, sou uma pessoa apaixonada por aprendizado rápido, comunicação eficiente, criatividade e design, e tenho conhecimentos básicos em contabilidade e mercado financeiro. Meu sonho é um dia desenvolver meu próprio negócio na área de tecnologia e criar soluções incríveis que possam transformar a vida das pessoas. Estou animado para começar essa jornada e contribuir para o crescimento de uma empresa.'
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