import { Input } from "@material-tailwind/react";

interface Props {
    prop:{
        text:string
    }
}

export function InputComponent({prop}:Props){
   
    return(
        <Input 
        className={`text-white`}
        label={prop.text} 
        size="md"
        color={`blue`}
        />
    )
}