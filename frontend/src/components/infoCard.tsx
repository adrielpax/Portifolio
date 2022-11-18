import { 
    Typography, 
    Button,
    IconButton,
} from "@material-tailwind/react"

import {
    IoLogoJavascript,
    IoLogoNodejs,
    IoLogoGithub
} from 'react-icons/io';

import {
    SiMongodb,
    SiGraphql,
    SiReact,
    SiTailwindcss,
    SiLinkedin,
    SiExpo
} from 'react-icons/si';
import {TbBrandNextjs} from 'react-icons/tb'
import {FaGitAlt, FaPython} from 'react-icons/fa'
import { ListTech } from "../utils/list-tech";

interface Props{
    Title:string
    index:boolean
}

export function InfoCard({Title,index}:Props){

    const icons = {
        react:<SiReact className="h-[100%] w-[100%]"/>,
        node:<IoLogoNodejs className="h-[100%] w-[100%]"/>,
        js:<IoLogoJavascript className="h-[100%] w-[100%]"/>,
        graph:<SiGraphql className="h-[100%] w-[100%]"/>,
        mongo:<SiMongodb className="h-[100%] w-[100%]"/>,
        git:<FaGitAlt className="h-[100%] w-[100%]"/>,
        python:<FaPython className="h-[100%] w-[100%]"/>,
        tailwind:<SiTailwindcss className="h-[100%] w-[100%]"/>,
        next:<TbBrandNextjs className="h-[100%] w-[100%]"/>,
        expo:<SiExpo className="h-[100%] w-[100%]"/>,
        github:<IoLogoGithub className=""/>,
        linkedin:<SiLinkedin className=" "/>,
    }

    return(
        <div className="bg-white dark:bg-gray-900 w-[80%] mx-auto my-12 h-auto rounded  
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
                            className='rounded bg-[whitesmoke] hover:bg-gray-300 m-4'
                        >   
                            GitHub
                        </Button>
                        <Button 
                            variant="text"
                            size='sm'
                            color="light-blue"
                            className='rounded bg-[whitesmoke] hover:bg-gray-300 m-4'
                        > 
                            Linkedin
                        </Button>
                </div>
                </>) : (
                <div className="p-4 grid md:grid-flow-col">
                    <div className="relative p-4">
                        <span>I have Expirience</span>
                        <ul className="grid md:grid-flow-col mt-8 "> 
                            <ListTech 
                                props={{
                                    text: "Java Script",
                                    color: "bg-yellow-500",
                                    colorIcon: "text-black",
                                    icon:icons.js
                                }}
                            /> 
                            <ListTech 
                                props={{
                                    text: "Node JS",
                                    color: "bg-green-400",
                                    colorIcon: "text-white",
                                    icon:icons.node
                                }}
                            /> 
                            <ListTech 
                                props={{
                                    text: "React JS",
                                    color: "bg-light-blue-400",
                                    colorIcon: "text-white",
                                    icon:icons.react
                                }}
                            />
                            <ListTech 
                                props={{
                                    text: "Git",
                                    color: "bg-orange-900",
                                    colorIcon: "text-white",
                                    icon:icons.git
                                }}
                            />  
                            <ListTech 
                                props={{
                                    text: "Python",
                                    color: "bg-blue-900",
                                    colorIcon: "text-yellow-700",
                                    icon:icons.python
                                }}
                            />  
                        </ul>
                    </div>
                    <div className="relative p-4 md:pl-10 md:border-l md:border-blue-500">
                        <span>I am studing</span>
                        <ul className="grid md:grid-flow-col mt-8 ">
                            <ListTech 
                                props={{
                                    text: "Mongo DB",
                                    color: "bg-gray-900",
                                    colorIcon: "text-green-800",
                                    icon:icons.mongo
                                }}
                            />
                             <ListTech 
                                props={{
                                    text: "TailwindCss",
                                    color: "bg-gradient-to-r from-cyan-500 to-blue-500",
                                    colorIcon: "text-white",
                                    icon:icons.tailwind
                                }}
                            />
                             <ListTech 
                                props={{
                                    text: "Grapql",
                                    color: "bg-pink-600",
                                    colorIcon: "text-white",
                                    icon:icons.graph
                                }}
                            />
                            <ListTech 
                                props={{
                                    text: "Expo",
                                    color: "bg-black",
                                    colorIcon: "text-white",
                                    icon:icons.expo
                                }}
                            />        
                        </ul>
                    </div>
                </div>
                    )
                }
            </div>
        </div>
    )
}