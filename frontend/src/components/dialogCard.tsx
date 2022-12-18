import {useState} from 'react';
import { 
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
 } from '@material-tailwind/react';
import { FormComponent } from './formComponent';
import renderThemeChanger from '../hook/darkModeHook';

interface Props{
  prop:{
    text:string,
    full:boolean,
    hidden:string
  }
}

export function DialogCard({prop}:Props){

    const [open, setOpen] = useState(false)

    const handleOpen = () => setOpen(!open)

    const theme = renderThemeChanger();
    return(
        <>
        <Button 
          size='sm'
          fullWidth={prop.full}
          variant='filled'
          onClick={()=>handleOpen()}
          className={`${prop.hidden} rounded lg:inline-block bg-light-blue-300
          hover:bg-blue-700 dark:bg-[#8000f2] 
          dark:hover:bg-[#4c0e81]
          dark:text-white dark:shadow-none`}
        >
         <span>{prop.text}</span> 
        </Button>
        <Dialog
          dismiss={{
            enabled:true, 
          }} 
          size='xxl' 
          open={open} 
          handler={handleOpen} 
          className={`${theme?'bg-[#141414]':''} backdrop-blur-none rounded`}>
        <DialogHeader className={`${theme?'text-white':''} mx-auto`}>Entre em Contato Comigo !</DialogHeader>
        <DialogBody divider className='flex items-center flex-col'>
          <h3 className={`${theme?'text-white':''} mb-4`}>Me mande uma mensagem ou um email!</h3>
          <FormComponent/>
        </DialogBody>
        <DialogFooter className='mx-auto'>
          <Button
            className={`${theme?'bg-[#3131315e]':'bg-[#e3e3e3] hover:bg-[#ff51517c]'} rounded mr-5`}
            variant="text"
            color="red"
            onClick={handleOpen}
          >
            <span>Cancel</span>
          </Button>
          <Button 
            className={`${theme?'bg-[#3131315e]':'bg-[#e3e3e3] hover:bg-light-blue-500 hover:text-white'} rounded`}
            variant="text" 
            color="blue" 
            onClick={handleOpen}>
            <span>Confirm</span>
          </Button>
        </DialogFooter>
        </Dialog>
        </>
    )
}