import { Input } from "@material-tailwind/react";
import renderThemeChanger from '../../../hook/darkModeHook';
interface Props {
    prop:{
        text:string
    }
}

export function InputComponent({prop}:Props){
    const theme = renderThemeChanger()
    return(
        <Input 
        className={`${theme?'text-white':''}`}
        label={prop.text} 
        size="md"
        color={`${theme?'purple':'blue'}`}
        />
    )
}