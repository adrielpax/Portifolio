import {Tooltip,Button} from '@material-tailwind/react';
import renderThemeChanger from '../../hook/darkModeHook';
interface Props {
    props:{
        content:string,
        title:string,
        text:string,
        icon:JSX.Element,
        color:string,
        bgColor:string
    }
}

export function HomeCard({props}:Props){
    return(
        <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center z-10">
            <div className={`px-4 py-5 flex-auto rounded 
            shadow-md md:shadow-xl md:hover:shadow-2xl 
            ${renderThemeChanger()? 'bg-gray-900':'bg-white'}`}>
                <Tooltip content={props.content}
                    interactive={true}
                >
                    <Button variant='filled' 
                    className={`${props.color} p-3 
                    text-center inline-flex items-center 
                    justify-center w-12 h-12 mb-5 shadow-lg rounded 
                    ${props.bgColor} `}>
                        {props.icon}
                    </Button>
                </Tooltip>
                <h6 className="text-xl font-semibold text-blue-gray-600">
                    {props.title}
                </h6>
                <p className="mt-2 mb-4 text-slate-500 text-justify text-blue-gray-600">
                    {props.text}
                </p>
            </div>
        </div>
    )
}