//import Link from 'next/link';
import {useState,useEffect, use} from 'react';
import {
    NavList,
    MenuClose,
    MenuOpen
} from '../utils/nav-utils'
// M of Material tailwind
import {
    Typography,
    Navbar,
    Button,
    MobileNav,
    IconButton,
} from '@material-tailwind/react'



export function NavbarPage(){
    const [openNav,setOpenNav] = useState(false)

    useEffect(()=>{
        window.addEventListener(
            "resize",
            ()=> window.innerWidth >= 960 && setOpenNav(false)
        )
    },[])    

    return(
        <Navbar 
            fullWidth
            className='mx-auto max-w-screen-xl py-2 px-4 lg:px-8 lg:py-4 rounded'
        >
            <div className='container mx-auto flex items-center justify-between text-blue-gray-900'>
                <Typography
                    as="a"
                    href="#"
                    variant="small"
                    className="mr-4 cursor-pointer py-1.5 font-normal"
                >
                    <span className='font-semibold text-lg'>Adriel Dev</span>
                </Typography>
                <div className='hidden lg:block'>{NavList}</div>
                <Button 
                    variant="filled"
                    className='hidden rounded lg:inline-block bg-light-blue-300
                    hover:bg-blue-700'
                    size='sm'
                >
                    <span>Buy Now</span>
                </Button>
                <IconButton
                    variant='text'
                    className='ml-auto h-6 w-6 
                        text-inherit hover:bg-transparent focus:bg-transparent 
                        active:bg-transparent lg:hidden'
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
                {NavList}
                <Button
                    variant="filled"
                    size='sm'
                    fullWidth
                    color="blue"
                    className='mb-2'
                >
                    <span>Buy Now</span>
                </Button>
            </MobileNav>
        </Navbar>    
    )    
}