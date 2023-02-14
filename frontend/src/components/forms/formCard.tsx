import { useState } from 'react'
import {Button, Input} from '@material-tailwind/react'
import renderThemeChanger from '../../hook/darkModeHook';
import { TextArea } from './input/textArea';


export function FormCard(){
    const [email,setEmail] = useState(String);
    const theme =  renderThemeChanger()
    return(
        <div className={`${theme? 'bg-[#141414]':'bg-white shadow shadow-blue-gray-200'} rounded p-4 w-96 h-[18rem] md:w-[28rem] mx-auto
        border-b-4 ${theme?'border-[#8800ff]':'border-light-blue-500'}`}>
            <form 
                className='flex flex-col md:flex-col gap-2 items-center justify-center bg-transparent mx-auto my-5 w-auto h-auto'
            >
                <Input 
                    className={``}
                    type='email'
                    variant='outlined'
                    label='Your email'
                    color={theme?'purple':'blue'}
                    value={email}
                    onChange={({target:{value}})=>setEmail(value)}
                />  
                <TextArea/>
                <Button 
                    variant='text'
                    className={`${theme?
                        'text-white bg-[#313131b6] hover:bg-[#8000f2] shadow-none hover:shadow hover:shadow-[#8000f2]'
                        :'bg-[#c5c4c46c] hover:bg-light-blue-600 hover:text-white hover:border-white'} h-10 w-48 rounded`}
                    >
                    <a
                        target="_blank" 
                        href={`mailto:adrieldev174@gmail.com?CC=adriel.aprendiz@gmail.com&Subject=%F3la%20gostaria%20de%20entrar%20em%20contato%20com%20voc%EA%20%21&Body=%0A`}
                    >
                        Send a email
                    </a>
                </Button>
            </form>
        </div>
    )
}