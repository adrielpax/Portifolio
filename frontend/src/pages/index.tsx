//import Head from 'next/head'
//import Image from 'next/image'
import type {ReactElement} from 'react'
import { NextPageWithLayout } from './_app'
import  Homepage  from './Homepage'

const Page: NextPageWithLayout = ()=>{
  return (
    <>
      <Homepage/>
    </>
  )
}

Page.getLayout = function getLayout(page:ReactElement){
  return(
    <main className='mx-auto max-w-screen-xl'>{page}</main>
  )
}

export default Page;
