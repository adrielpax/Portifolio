import { useState } from "react";
import { Button } from "@material-tailwind/react"
import renderThemeChanger from '../../hook/darkModeHook'

interface Props{
    prop:{
      text:string,
      full:boolean,
      hidden:string
    }
  }

export const DialogButton = ({prop}:Props)=>{
    const [open, setOpen] = useState(false)

    const handleOpen = () => setOpen(!open)

    const theme = renderThemeChanger();
    return(
    <Button 
          size='sm'
          fullWidth={prop.full}
          variant='filled'
          onClick={handleOpen}
          className={`${prop.hidden} rounded lg:inline-block bg-light-blue-700
          hover:bg-blue-300 dark:bg-[#8000f2] 
          dark:hover:bg-[#4c0e81]
          dark:text-white dark:shadow-none`}
        >
         <span>{prop.text}</span> 
        </Button>
    )
}

