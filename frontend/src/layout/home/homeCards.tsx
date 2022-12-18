import {Tooltip,Button} from '@material-tailwind/react';
import renderThemeChanger from '../../hook/darkModeHook';
import changeHiddenCard from '../../hook/changeHiddenCard'; 
import { useEffect, useState } from 'react';

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
    const theme = renderThemeChanger();
    
    const [scrolled,setScrolled] = useState(false);

    useEffect(()=>{
        window.addEventListener('scroll',hiddenCard)
    },[]);
    

    const hiddenCard = ()=>{
        if(window.scrollY >= 640){
            setScrolled(true)

        }else{
            setScrolled(false)

        }
    }
    
    return(
        <div className={`${scrolled? 'opacity-100 transition-opacity ease-in delay-600':
        'opacity-0 transition-opacity ease-out delay-600'}
        lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center z-10`}>
            <div className={`px-4 py-5 flex-auto rounded 
            shadow-md md:shadow-xl md:hover:shadow-2xl 
            ${theme? 'bg-[#141414]':'bg-white border-b-4 border-light-blue-500'}`}>
                <Tooltip content={props.content}
                    interactive={true}
                >
                    <Button variant='filled' 
                    className={`${props.color} p-3 
                    text-center inline-flex items-center 
                    justify-center w-12 h-12 mb-5 shadow-lg rounded 
                    ${theme?'bg-[#313131] shadow-none hover:shadow-none hover:bg-[#8000f2] focus:bg-[#8000f2]':'bg-light-blue-500'} `}>
                        {props.icon}
                    </Button>
                </Tooltip>
                <h6 className={`text-xl font-semibold ${theme? 'text-[whitesmoke]':'text-blue-gray-600'}`}>
                    {props.title}
                </h6>
                <p className={`mt-2 mb-4 text-slate-500 text-justify ${theme?'text-[whitesmoke]':'text-blue-gray-600'}`}>
                    {props.text}
                </p>
            </div>
        </div>
    )
}