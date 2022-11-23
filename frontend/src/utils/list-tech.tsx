import { Button, Tooltip } from "@material-tailwind/react";

interface Props {
    props:{
        text: string
        color: string
        colorIcon: string
        icon: JSX.Element
    }
}

export function ListTech({props}:Props){
    return(
    <li>
        <Tooltip 
            interactive={true}
            content={props.text}>
            <Button
                variant='filled' 
                className={`${props.colorIcon} p-3 
                text-center inline-flex items-center
                justify-center w-12 h-12 mb-5 rounded 
                ${props.color} font-semibold hover:-translate-y-1
                dark:shadow-gray-900`}
            >
                {props.icon}                              
            </Button>
        </Tooltip>
    </li>
    )
}