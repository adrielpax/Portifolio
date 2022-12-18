import { useState } from 'react'
import {Button, Input} from '@material-tailwind/react'
import renderThemeChanger from '../hook/darkModeHook';


export function FormCard(){
    const [email,setEmail] = useState(String);
    const theme =  renderThemeChanger()
    return(
        <div className={`${theme? 'bg-[#141414]':'bg-white shadow shadow-blue-gray-200'} rounded p-4 w-96 md:w-[28rem] mx-auto`}>
            <form 
                className='flex flex-col md:flex-row gap-2 items-center justify-center bg-transparent mx-auto my-5 w-auto'
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
                <Button 
                    variant='text'
                    className={`${theme?
                        'text-white bg-[#313131b6] hover:bg-[#8000f2] shadow-none hover:shadow hover:shadow-[#8000f2]'
                        :'bg-[#c5c4c46c] hover:bg-light-blue-600 hover:text-white hover:border-white'} h-10 w-48 rounded`}
                    >
                    <a
                        target="_blank" 
                        href={`mailto:${email}`}
                    >
                        Send a email
                    </a>
                </Button>
            </form>
        </div>
    )
}