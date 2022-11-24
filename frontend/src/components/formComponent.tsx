import { InputComponent } from "./input";
import { TextArea } from "./textArea";

export function FormComponent(){
    return(
        <form 
        className="flex mx-auto flex-col gap-4 md:w-[30%] bg-white h-auto rounded">
            <InputComponent prop={{
                text: 'Seu Nome'
            }}/>
            <InputComponent prop={{
                text: 'Seu Email'
            }}/>
          <TextArea/>
        </form>
    )
}