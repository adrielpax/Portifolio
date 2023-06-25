//import Head from 'next/head'
//import Image from 'next/image'
import type {ReactElement} from 'react';
import { NextPageWithLayout } from './_app';
import  Homepage  from './Homepage';
import Dashboard from './dashboard';
// import PageNotFound from './404.page';

const Page: NextPageWithLayout = ()=>{
  return (
    <>
      <Homepage/>   
      <Dashboard/> 
    </>
  )
}

Page.getLayout = function getLayout(page:ReactElement){
  return(
    <main className=''>{page}</main>
  )
}

export default Page;
