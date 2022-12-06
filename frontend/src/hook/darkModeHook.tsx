import React from 'react';
import { useTheme } from 'next-themes';


export default function darkModeHook(){
    const {systemTheme , theme, setTheme} = useTheme();
    const renderThemeChanger = () => {
        const currentTheme = theme === "system" ? systemTheme : theme ;
        if(currentTheme ==="dark"){
            return true
        }else{
            return false
        }
    };
    return renderThemeChanger()
}