import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Chip
} from "@material-tailwind/react";
import Image from "next/image";
import renderThemeChanger from '../hook/darkModeHook';
import {TbWorld} from 'react-icons/tb';

export default function ProjectCard(){
    const theme = renderThemeChanger();
    return(
        <Card className={`${theme?'bg-[#313131b6]':'bg-[#c4c2c250]'} flex mx-auto w-96 rounded my-20 shadow-md md:shadow-xl md:hover:shadow-2xl`}>
            <CardHeader color="gray" className="relative h-56 rounded text-center">
                <Image
                    alt="Image YourFinance"
                    src="/imgs/yourfinance.png"
                    fill={true}
                />
            </CardHeader>
            {/*<CardBody className="text-center">
                <Typography variant="h5" className="mb-2">
                    YourFinance
                </Typography>
                <Typography>
                    Project use ReactJS , created to control your finance .. its to be a Real Project
                </Typography>
            </CardBody>*/}
            <CardFooter divider className={`flex gap-2 justify-between py-3 ${theme?'border-[#8800ff]':'border-light-blue-500'}`}>
                <Typography variant="small" className='flex gap-2 justify-between'>
                    <a 
                        className={`flex items-center gap-1 ${theme?'text-[#d324ea]':'text-light-blue-500'}`}
                        target="_blank"
                        href="https://yourfinance.netlify.app/" rel="noreferrer">
                        <TbWorld 
                        className="m-1 mt-0"
                        />
                        Site
                    </a>
                    <Chip variant="filled" value={"Tecnical Project"} 
                        className={`${theme?'bg-[#8800ff]':'bg-light-blue-500'}`}
                    />
                </Typography>
            </CardFooter>
        </Card>
    )
}