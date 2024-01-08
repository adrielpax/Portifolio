//import Head from 'next/head'
//import Image from 'next/image'
import {useEffect, type ReactElement} from 'react';
import { NextPageWithLayout } from './_app';
import Dashboard from './web-app/dashboard';
// import Homepage from './web-site/.tsx';
import { useRouter } from 'next/navigation';
// import PageNotFound from './404.page';

const Page: NextPageWithLayout = ()=>{
  const router = useRouter();
  useEffect(()=>{
    router.push('/portfolio')
  },[router])
  return (
    <>
      {/* <Homepage/>    */}
    </>
  )
}

Page.getLayout = function getLayout(page:ReactElement){
  return(
    <main className=''>{page}</main>
  )
}

export default Page;
