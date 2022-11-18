import { useEffect, useState } from "react";
import Image from 'next/image';
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Tooltip,
  } from "@material-tailwind/react";

export function PersonalCard(){
    const [scrolled,setScrolled] = useState(false)

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
        'opacity-0 transition-opacity ease-out delay-600'}
        w-96 mx-auto rounded 
        shadow-md md:shadow-xl 
        md:hover:shadow-2xl my-32 dark:bg-gray-900 `}
        >
        <CardHeader floated={false} className="self-center h-32 w-32 rounded-full 
            boder-2 border-light-blue-400 bg-gray-600 ">
        </CardHeader>
        <CardBody className="text-center">
            <Typography variant="h4" color="blue-gray" className="mb-2 dark:text-white">
                Adriel Lucas
            </Typography>
            <Typography color="blue" className="font-medium" textGradient>
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