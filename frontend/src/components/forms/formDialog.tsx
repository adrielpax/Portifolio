import { InputComponent } from "./input/input";
import { TextArea } from "./input/textArea";
import renderThemeChanger from '../../hook/darkModeHook';

export function FormComponent(){
    const theme = renderThemeChanger();
    
    return(
        <form 
            className={`${theme?'text-white':''} flex mx-auto flex-col gap-4 w-[60%] h-auto rounded`}>
            <InputComponent
            prop={{
                text: 'Seu Nome'
            }}/>
            <InputComponent prop={{
                text: 'Seu Email'
            }}/>
          <TextArea/>
        </form>
    )
}