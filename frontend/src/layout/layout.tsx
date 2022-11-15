import {NavbarPage} from './navbar';
import {Footer} from './footer';


export function Layout({children}:any){
    //const [data,error] = useSWR('/api/navigation',fetch) 

    
    return(
     <>
        <NavbarPage/>
            <main className='h-auto'>{children}</main>
        <Footer/>
     </>
    )
}