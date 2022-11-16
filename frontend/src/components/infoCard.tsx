import { 
    Typography, 
    Tooltip,
    Button,
    iconButton,
    IconButton
} from "@material-tailwind/react"

import {
    IoLogoJavascript,
    IoLogoNodejs
} from 'react-icons/io';

import {
    SiMongodb,
    SiGraphql
} from 'react-icons/si';

interface Props{
    Title:string
    index:boolean
}

export function InfoCard({Title,index}:Props){
    return(
        <div className="bg-white w-[80%] mx-auto my-12 h-auto rounded  
            shadow-md md:shadow-xl md:hover:shadow-2xl">
            <div className="p-8 h-[100%]">
                <Typography 
                    variant="h5"
                >
                    {Title}
                </Typography>
            {!index ? (
                <>
                <div className="p-4 text-justify">
                    <div>
                        <p>
                            Meu nome e Adriel completei 18 anos 
                            em junho de 2021 , eu programo desde 
                            os 15 brincava muito com HTML,CSS e 
                            JS e não sabia o poder que tinha em 
                            minhas mãos, começei a me desenvolver 
                            mais com 17 aprofundar bastante em jogos
                            e projetos, e eu estou em busca de um
                            job eu quero começar cedo um bloco de
                            codigo de cada vez, e poder me desenvolver
                            melhor com as tecnologias. #neverstoplearning
                        </p>
                        <p className="mt-2"></p>
                    </div>
                </div>
                <div className="relative bottom-0">
                        <Button 
                            variant="text"
                            size='sm'
                            color="light-blue"
                            className='rounded bg-[whitesmoke] hover:bg-gray-300 mx-1'
                        >
                            GitHub
                        </Button>
                        <Button 
                            variant="text"
                            size='sm'
                            color="light-blue"
                            className='rounded bg-[whitesmoke] hover:bg-gray-300 mx-1'
                        >
                            Linkedin
                        </Button>
                </div>
                </>) : (
                <div className="p-4 grid md:grid-flow-col">
                    <div className="relative p-4">
                        <span>Tenho experiência</span>
                        <ul className="grid md:grid-flow-col mt-8">    
                            <li>
                                <Tooltip content="Java Script">
                                    <Button
                                        variant='filled' 
                                        className="text-white p-3 
                                        text-center inline-flex items-center 
                                        justify-center w-12 h-12 mb-5 shadow-lg rounded 
                                        bg-yellow-600"
                                    >
                                        <IoLogoJavascript
                                            className="h-[100%] w-[100%] text-black"
                                        />
                                    </Button>
                                </Tooltip>
                            </li>
                            <li>
                                <Tooltip content="Node JS">
                                    <Button
                                        variant='filled' 
                                        className="text-white p-3 
                                        text-center inline-flex items-center 
                                        justify-center w-12 h-12 mb-5 shadow-lg rounded 
                                        bg-light-green-600"
                                    >
                                        <IoLogoNodejs
                                            className="h-[100%] w-[100%] text-black"
                                        />
                                    </Button>
                                </Tooltip>
                            </li>
                        </ul>
                    </div>
                    <div className="relative p-4 md:pl-10 md:border-l md:border-blue-500">
                        <span>Estou estudando</span>
                        <ul className="grid md:grid-flow-col mt-8">
                            <li>
                                <Tooltip content="Mongo DB">
                                    <Button
                                        variant='filled' 
                                        className="text-white p-3 
                                        text-center inline-flex items-center 
                                        justify-center w-12 h-12 mb-5 shadow-lg rounded 
                                        bg-gray-900"
                                    >
                                        <SiMongodb
                                            className="h-[100%] w-[100%] text-green-800"
                                        />
                                    </Button>
                                </Tooltip>
                            </li>
                            <li>
                                <Tooltip content="Graphql">
                                    <Button
                                        variant='filled' 
                                        className="text-white p-3 
                                        text-center inline-flex items-center 
                                        justify-center w-12 h-12 mb-5 shadow-lg rounded 
                                        bg-pink-500"
                                    >
                                        <SiGraphql
                                            className="h-[100%] w-[100%] text-white"
                                        />
                                    </Button>
                                </Tooltip>
                            </li>
                        </ul>
                    </div>
                </div>
                    )
                }
            </div>
        </div>
    )
}