import { useState } from 'react'
import {Button, Input} from '@material-tailwind/react'

export function FormCard(){
    const [email,setEmail] = useState(String);

    return(
        <div className='bg-white rounded p-4 w-96 md:w-[28rem] mx-auto shadow shadow-blue-gray-200'>
            <form 
                className='flex flex-col md:flex-row gap-2 items-center justify-center bg-transparent mx-auto my-5 w-auto'
            >
                <Input 
                    className='rounded'
                    type='email'
                    variant='outlined'
                    label='Your email'
                    value={email}
                    onChange={({target:{value}})=>setEmail(value)}
                />  
                <Button 
                    variant='filled'
                    className='h-10 w-48 rounded'
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