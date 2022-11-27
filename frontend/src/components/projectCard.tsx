import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography
} from "@material-tailwind/react";
import Image from "next/image";

import {TbWorld} from 'react-icons/tb';

export function ProjectCard(){
    return(
        <Card className="flex mx-auto w-96 rounded my-20 shadow-md md:shadow-xl md:hover:shadow-2xl">
            <CardHeader color="gray" className="relative h-56 rounded text-center">
                <Image
                    alt="Image YourFinance"
                    src="/imgs/yourfinance.png"
                    fill={true}
                />
            </CardHeader>
            <CardBody className="text-center">
                <Typography variant="h5" className="mb-2">
                    YourFinance
                </Typography>
                <Typography>
                    Project use ReactJS , created to control your finance .. its to be a Real Project
                </Typography>
            </CardBody>
            <CardFooter divider className="flex items-center justify-between py-3">
                <Typography variant="small">
                    <a 
                        className="flex items-center gap-1 text-light-blue-400"
                        target="_blank"
                        href="https://yourfinance.netlify.app/">
                        <TbWorld 
                        className="m-1 mt-0"
                        />
                        Site
                    </a>
                </Typography>
            </CardFooter>
        </Card>
    )
}