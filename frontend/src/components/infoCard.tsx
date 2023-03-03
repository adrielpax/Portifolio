import { useTranslations } from "next-intl";
import { 
    Typography, 
    Button,
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
import {GiBrazilFlag,GiUsaFlag} from 'react-icons/gi';
import {FaDoorClosed, FaGitAlt, FaPython} from 'react-icons/fa'
import { ListTech } from "../utils/list-tech";

import renderThemeChanger from '../hook/darkModeHook';
import { GetStaticPropsContext } from "next";
import { useEffect, useState } from "react";

interface Props{
    Title:string
    index:boolean
    type:number
    text:string
}

export function InfoCard({Title,index,type,text}:Props){
    
    //const t = useTranslations("index");
    
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
        brasil:<GiBrazilFlag className="h-[100%] w-[100%]"/>,
        eua:<GiUsaFlag className="h-[100%] w-[100%]"/>,
        github:<IoLogoGithub className=""/>,
        linkedin:<SiLinkedin className=" "/>,
    }

    const theme = renderThemeChanger();
    
    //const [scrolled,setScrolled] = useState(false);
    const [screenChange,setScreenChange] = useState(true);

    useEffect(()=>{
        //window.addEventListener('scroll',hiddenCard)
        window.addEventListener('resize',mobile)
    },[]);
    

    /*const hiddenCard = ()=>{
        if(window.scrollY >= 1040){
            setScrolled(true)
        }else{
            setScrolled(false)
        }
    }
        ${scrolled? 'opacity-100 transition-opacity ease-in delay-600':
            'opacity-0 transition-opacity ease-out delay-600'}
    */
        
    const mobile = ()=>{
        if(window.screenX <= 540){
            setScreenChange(true)
        }else{
            setScreenChange(false)
        }
    }

    return(
        <div className={`${theme? 'bg-[#141414]':'bg-white border-b-4 border-light-blue-500'} 
            w-[80%] mx-auto my-12 h-auto rounded shadow-md md:shadow-xl md:hover:shadow-2xl`}>
            <div className="p-8">
                <Typography 
                    variant="h5"
                    className={`${!theme?'text-blue-gray-600':'text-[whitesmoke]'}`}
                >
                    {Title}
                </Typography>
            {!index ? (
                <>
                <div className={`p-4 text-justify ${!theme?'text-blue-gray-600':'text-[whitesmoke]'}`}>
                    <div>
                        <p>
                            {text}
                        </p>
                        <p className="mt-2"></p>
                    </div>
                </div>
                <div className="relative bottom-0">
                        <a href="https://github.com/T4SpaX" target={'_blank'}>
                        <Button 
                            variant="text"
                            size='sm'
                            color="light-blue"
                            className={`rounded ${theme?
                                'bg-[#3131315e] text-white hover:bg-[#540DFA]':
                                'bg-[whitesmoke] hover:text-white hover:bg-light-blue-500'} 
                            m-4`}
                        >   
                            GitHub
                        </Button>
                        </a>
                        <a href="https://www.linkedin.com/in/adriel-lucas/" target={'_blank'}>
                        <Button 
                            variant="text"
                            size='sm'
                            color="light-blue"
                            className={`rounded ${theme?
                                'bg-[#3131315e] text-white hover:bg-[#540DFA]':
                                'bg-[whitesmoke] hover:text-white hover:bg-light-blue-500'} 
                            m-4`}
                        > 
                                Linkedin
                        </Button>
                        </a>
                </div>
                </>) : (
                <div className={`p-4 grid md:grid-flow-col ${!theme?'text-blue-gray-600':'text-[whitesmoke]'}`}>
                    <div className="relative p-4">
                            {!type ? 
                            (<>
                            <span>I have Expirience</span>
                            <ul className="grid md:grid-flow-col mt-8 "> 
                                <ListTech 
                                    props={{
                                        text: "Java Script",
                                        color: "bg-yellow-500",
                                        colorIcon: "text-black",
                                        icon:icons.js,
                                        mobile:screenChange ? 'right-start':'top'
                                    }}
                                /> 
                                <ListTech 
                                    props={{
                                        text: "Node JS",
                                        color: "bg-green-400",
                                        colorIcon: "text-white",
                                        icon:icons.node,
                                        mobile:screenChange ? 'right-start':'top'
                                    }}
                                /> 
                                <ListTech 
                                    props={{
                                        text: "React JS",
                                        color: "bg-light-blue-400",
                                        colorIcon: "text-white",
                                        icon:icons.react,
                                        mobile:screenChange ? 'right-start':'top'
                                        
                                    }}
                                />
                                <ListTech 
                                    props={{
                                        text: "Git",
                                        color: "bg-orange-900",
                                        colorIcon: "text-white",
                                        icon:icons.git,
                                        mobile:screenChange ? 'right-start':'top'
                                        
                                    }}
                                />  
                                <ListTech 
                                    props={{
                                        text: "Python",
                                        color: "bg-blue-900",
                                        colorIcon: "text-yellow-700",
                                        icon:icons.python,
                                        mobile:screenChange ? 'right-start':'top'
                                                                                
                                    }}
                                />
                            </ul>
                            </>) : (
                            <>
                            <span>Native</span>
                            <ul className="grid md:grid-flow-col mt-8 ">
                            <ListTech 
                                props={{
                                    text: "Portugues Brazil / level: native",
                                    color: "bg-green-800",
                                    colorIcon: "text-yellow-800",
                                    icon:icons.brasil,
                                    mobile:screenChange ? 'right-start':'top'
                                    
                                }}
                                />
                            </ul>
                            </>)}
                    </div>
                    <div className="relative p-4 md:pl-10 md:border-l md:border-blue-500">
                        {!type?
                        (<><span>I am studing</span>
                        <ul className="grid md:grid-flow-col mt-8">
                            <ListTech 
                                props={{
                                    text: "Mongo DB",
                                    color: "bg-gray-900",
                                    colorIcon: "text-green-800",
                                    icon:icons.mongo,
                                    mobile:screenChange ? 'right-start':'top'
                                    
                                }}
                            />
                             <ListTech 
                                props={{
                                    text: "TailwindCss",
                                    color: "bg-gradient-to-r from-cyan-500 to-blue-500",
                                    colorIcon: "text-white",
                                    icon:icons.tailwind,
                                    mobile:screenChange ? 'right-start':'top'
                                    
                                }}
                            />
                             <ListTech 
                                props={{
                                    text: "Grapql",
                                    color: "bg-pink-600",
                                    colorIcon: "text-white",
                                    icon:icons.graph,
                                    mobile:screenChange ? 'right-start':'top'
                                    
                                }}
                            />
                            <ListTech 
                                props={{
                                    text: "Expo",
                                    color: "bg-black",
                                    colorIcon: "text-white",
                                    icon:icons.expo,
                                    mobile:screenChange ? 'right-start':'top'
                                    
                                }}
                            />        
                        </ul></>):(<>
                            <span>Other Language</span>
                            <ul className="grid md:grid-flow-col mt-8 ">
                            <ListTech 
                                props={{
                                    text: "English / level: conversation",
                                    color: "bg-blue-500",
                                    colorIcon: "text-red-800",
                                    icon:icons.eua,
                                    mobile:screenChange ? 'right-start':'top'
                                    
                                }}
                            />
                            </ul>
                        </>)}
                    </div>
                </div>
                    )
                }
            </div>
        </div>
    )
}


export async function getStaticProps({locale}:GetStaticPropsContext){
    return{ 
        props:{
            messages:{...require(`../messages/${locale}.json`)},
        }
    }
}