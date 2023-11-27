import {Html,Head,Main,NextScript} from 'next/document';
// import { Poppins } from 'next/font/google';

// const poppinsFont = Poppins({
//   weight: '700',
//   subsets: ['latin'],
//   variable: '--font-poppins',
// });

export default function Document(){
    return(
        <Html>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin=""/>
                <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" 
                    rel="stylesheet"/>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500&display=swap" rel="stylesheet"/>
                <title>Adriel Developer | Personal Portifolio</title>
            </Head>
            <body className='bg-[#e9eef3] dark:bg-[#18191a]'>
                <Main/>
                <NextScript/>
            </body>
        </Html>
    )
}