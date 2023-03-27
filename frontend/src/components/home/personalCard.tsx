import { useEffect, useState } from "react";
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Tooltip,
} from "@material-tailwind/react";
import renderThemeChanger from '../../hook/darkModeHook';
import Image from 'next/image';

export function PersonalCard(){

    const [scrolled,setScrolled] = useState(false);

    const changeHiddenCard = ()=>{
        if(window.scrollY >= 120){
            setScrolled(true)
        }else{
            setScrolled(false)
        }
    }

    useEffect(()=>{
        window.addEventListener('scroll',changeHiddenCard)
    },[])


    return(
    <Card className={`${scrolled? 'opacity-100 transition-opacity ease-in delay-600':
        'opacity-0 transition-opacity ease-out delay-600'} rounded shadow-md 
        md:shadow-xl md:hover:shadow-2xl my-32 bg-transparent w-96 mx-auto 
        ${renderThemeChanger()? 'bg-[#141414] border-b-8 border-[#540DFA]':'bg-white border-b-4 border-light-blue-500'}`}
        >
        <CardHeader floated={false} className={`relative
            self-center h-60 w-40 rounded shadow-2 shadow-none bg-transparent`}>
            <Image
                src="/imgs/dree.png"
                fill
                unoptimized={false}
                alt={"Dree"}
                className='bg-transparent'
            />
        </CardHeader>
        <CardBody className="text-center">
            <Typography variant="h4" color="blue-gray" className={`${renderThemeChanger()? 'text-white':''} mb-2`}>
                Adriel Lucas
            </Typography>
            <Typography color="blue" 
                className={`${renderThemeChanger()? 'text-[#c37fff]':''} font-medium`} textGradient>
                Web Developer / Full-Stack
            </Typography>
        </CardBody>

        <CardFooter className="flex justify-center gap-7 pt-2">
            <Tooltip content="Like">
                <Typography
                    as="a"
                    href="#facebook"
                    variant="lead"
                    color="blue"
                    textGradient
                >
                    <i className="fab fa-facebook" />
                </Typography>
                </Tooltip>
                <Tooltip content="Follow">
                <Typography
                    as="a"
                    href="#twitter"
                    variant="lead"
                    color="light-blue"
                    textGradient
                    >
                    <i className="fab fa-twitter" />
                </Typography>
                </Tooltip>
                <Tooltip content="Follow">
                <Typography
                    as="a"
                    href="#instagram"
                    variant="lead"
                    color="purple"
                    textGradient
                    >
                    <i className="fab fa-instagram" />
                </Typography>
            </Tooltip>
        </CardFooter>
    </Card>
    )
}