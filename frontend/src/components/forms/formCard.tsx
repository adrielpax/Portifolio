import { useState } from 'react'
import renderThemeChanger from '../../hook/darkModeHook';
import { TextArea } from './input/textArea';
import {
    Button,Input,Tooltip
} from '@material-tailwind/react';
import { useFormik } from 'formik';
import requestBodyForm from '../../hook/requestBodyForm';


export function FormCard(){
    const [email,setEmail] = useState(String);
    const [name,setName] = useState(String);
    const theme =  renderThemeChanger();   

    const {schemaValidation,onSubmitPostApi} = requestBodyForm()

    const { values, 
        handleBlur, 
        handleChange, 
        handleSubmit,
        errors,
        touched,
        } = useFormik({
        initialValues:{
            name:'',
            email:'',
            message:'',
            date:new Date().toLocaleDateString()
        },
        validationSchema: schemaValidation,
        onSubmit: onSubmitPostApi,
    })


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
                onSubmit={handleSubmit}
                className='flex flex-col md:flex-col gap-2 items-center 
                justify-center bg-transparent mx-auto my-5 w-auto h-auto'
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
                    className={`${errors.email && touched.email? 
                        'text-pink-500':
                        ''}`}
                    type='email'
                    variant='outlined'
                    label='Seu email'
                    color={theme?'purple':'blue'}
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
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
                    type='submit'
                    variant='text'
                    className={`${theme?
                        'text-white bg-[#313131b6] hover:bg-[#8000f2] shadow-none hover:shadow hover:shadow-[#8000f2]'
                        :'bg-[#c5c4c46c] hover:bg-light-blue-600 hover:text-white hover:border-white'} h-10 w-48 rounded`}
                    >
                    Send a email
                </Button>
                </Tooltip>
            </form>
        </div>
    )
}