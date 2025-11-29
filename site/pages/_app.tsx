import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Theme } from "@radix-ui/themes";
import Head from 'next/head';
import Nav from '@/src/components/layout/Nav';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <link rel="icon" href="/favicon.ico" />
        
        {/* Preload fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link 
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;500;600&display=swap" 
          rel="stylesheet" 
        />
        
        {/* Meta tags para SEO */}
        <meta name="author" content="Adriel Lucas" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="pt-BR" />
        
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="pt_BR" />
        <meta property="og:site_name" content="Adriel Lucas - Portfólio" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@seu_twitter" />
      </Head>

      {/* Nav colocado no layout global sem alterar o design das páginas */}


      <main>
        <div className="absolute -z-50 h-full w-full">
          <img src="/images/bg-two.png" width={"100%"} height={"100"} />
        </div>
      
        <Nav />
        <Component {...pageProps} />
      </main>
    </>
  );
}