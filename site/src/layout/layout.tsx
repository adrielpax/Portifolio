import Navbar from './navbar';
import {Footer} from './footer';

export function Layout({children}:any){
    //const [data,error] = useSWR('/api/navigation',fetch) 

    return(
     <>
        <Navbar/>
            <main>{children}</main>
        <Footer/>
     </>
    )
}