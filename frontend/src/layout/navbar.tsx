//import Link from 'next/link';
import {useState,useEffect} from 'react';
import {
    MenuClose,
    MenuOpen
} from '../utils/nav-utils';
// M of Material tailwind
import {
    Typography,
    Navbar,
    Button,
    MobileNav,
    IconButton,
} from '@material-tailwind/react';
import { DarkMode } from '../components/darkModeButtom';


export function NavbarPage(){
    const [openNav,setOpenNav] = useState(false)

    useEffect(()=>{
        window.addEventListener(
            "resize",
            ()=> window.innerWidth >= 960 && setOpenNav(false)
        )
    },[])    

    //const darkIcon = <FaCloudSun/>

    return(
        <Navbar 
            color='white'
            fullWidth
            className='fixed mx-auto max-w-screen-xl py-2 px-4 lg:px-8 lg:py-4 
            z-50 bg-opacity-100 shadow-md md:shadow-xl md:hover:shadow-2xl
            dark:border-[#18191a] bg-[#fdfeff] dark:bg-[#18191a]'
        >
            <div className='container mx-auto flex items-center justify-between text-blue-gray-900'>
                <Typography
                    as="a"
                    href="#"
                    variant="small"
                    className="mr-4 cursor-pointer py-1.5 font-normal"
                >
                    <span className='font-semibold text-lg dark:text-white'>Adriel Dev</span>
                </Typography>
                {/*<div className='hidden lg:block'>{NavList}</div>*/}
                <div className='flex flex-1 flex-row-reverse mr-8'>
                    <DarkMode/>
                </div>
                <Button 
                    variant="filled"
                    className='hidden rounded lg:inline-block bg-light-blue-300
                    hover:bg-blue-700 dark:bg-[#8000f2] 
                    dark:hover:bg-[#4c0e81]
                    dark:text-white dark:shadow-none 
                    '
                    size='sm'
                >
                    <span>Contact Me</span>
                </Button>
                <IconButton
                    variant='text'
                    className='ml-auto h-6 w-6 
                        text-inherit 
                        lg:hidden
                        hover:bg-transparent 
                        focus:bg-transparent 
                        active:bg-transparent '
                    ripple={false}
                    onClick={()=> setOpenNav(!openNav)}
                >
                {
                    openNav ?
                    <>
                        {MenuOpen}
                    </>
                    :
                    <>
                        {MenuClose}
                    </> 
                    
                }
                </IconButton>
            </div>
            <MobileNav open={openNav}>
                {/*NavList*/}
                <Button
                    variant="filled"
                    size='sm'
                    fullWidth
                    color="blue"
                    className='mb-2 rounded lg:inline-block bg-light-blue-300
                    hover:bg-blue-700 dark:bg-[#8000f2] 
                    dark:hover:bg-[#4c0e81]
                    dark:text-white 
                    '
                    
                >
                    <span>Contact Me</span>
                </Button>
            </MobileNav>
        </Navbar>    
    )    
}