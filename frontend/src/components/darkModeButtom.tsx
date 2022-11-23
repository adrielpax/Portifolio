import { Switch } from "@material-tailwind/react";
import { useTheme } from "next-themes";
import { useState } from "react";

import {FaSun,FaMoon} from 'react-icons/fa';

export function DarkMode(){
    const [darkMode,setDarkMode] = useState(true)
    const {systemTheme , theme, setTheme} = useTheme();

    function toogleTheme(){
        setDarkMode(prev => !prev)
        if(darkMode == true){
            setTheme('dark')
        }else{
            setTheme('light')
        }
        console.log(darkMode)
    }

    const renderThemeChanger= () => {
        const currentTheme = theme === "system" ? systemTheme : theme ;
        /*if(currentTheme ==="dark"){
       }*/ 
    };

    
    return(
        <div className="flex">
            <Switch
                onChange={toogleTheme}  
                color="purple"                      
                className='bg-gradient-to-r from-cyan-500 to-blue-500
                dark:bg-gradient-to-r dark:from-[#8000f2] dark:to-[#80002f]
                '
                //label={`${value? 'Light Mode':'Dark Mode'}`}
            />
            {darkMode == true?
                <FaMoon 
                    className="m-2 w-4 h-4 
                        text-gray-900 " role="button" //onClick={() => setTheme('dark')} 
                    /> :
                <FaSun 
                    className="m-2 w-4 h-4 
                        text-yellow-500 " role="button" //onClick={() => setTheme('light')} 
                    />}
        </div>
    )
}