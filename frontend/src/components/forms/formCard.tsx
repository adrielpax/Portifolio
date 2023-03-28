import { useState } from 'react'
import renderThemeChanger from '../../hook/darkModeHook';
import { TextArea } from './input/textArea';
import {
    Button,Input,Tooltip
} from '@material-tailwind/react';



export function FormCard(){
    const [email,setEmail] = useState(String);
    const [name,setName] = useState(String);
    const theme =  renderThemeChanger();    
    return(
        <div className={`        
        rounded p-4 lg:w-96 h-auto md:w-[28rem] mx-auto
        ${theme? 'bg-[#141414]':'bg-white shadow shadow-blue-gray-200'} 
        border-b-4 ${theme?'border-[#8800ff]':'border-light-blue-500'}`}>

            <div className='flex mx-auto'>

                <h2 className='mx-auto text-xl text-gray-800'
                >Me mande uma mensagem</h2>
                    
            </div>

            <form 
                className='flex flex-col md:flex-col gap-2 items-center justify-center bg-transparent mx-auto my-5 w-auto h-auto'
            >
                <Input 
                    className={``}
                    type='nome'
                    variant='outlined'
                    label='Seu nome ou Empresa'
                    color={theme?'purple':'blue'}
                    value={name}
                    onChange={({target:{value}})=>setName(value)}
                /> 
                <Input 
                    className={``}
                    type='email'
                    variant='outlined'
                    label='Seu email'
                    color={theme?'purple':'blue'}
                    value={email}
                    onChange={({target:{value}})=>setEmail(value)}
                />  
                <TextArea/>

                <Tooltip
                interactive={true}
                content={'Responderei em no maximo (1)um ou (2)Dois Dias'}
                placement={'top'}
                animate={{
                    mount: { scale: 1, y: 0 },
                    unmount: { scale: 0, y: 25 },
                  }}
                >
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
                </Tooltip>
            </form>
        </div>
    )
}