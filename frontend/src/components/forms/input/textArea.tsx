import { Textarea } from "@material-tailwind/react";
import renderThemeChanger from '../../../hook/darkModeHook';

export function TextArea(){
    const theme = renderThemeChanger();
    return(
        <Textarea 
            label="Deixe uma mensagem!"
            color={`${theme?'purple':'blue'}`}
        />
    )
}