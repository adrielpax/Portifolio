/* eslint-disable @next/next/google-font-display */
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Theme } from "@radix-ui/themes";

import Nav from '@/src/components/layout/Nav';
import Footer from '@/src/components/layout/Footer';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    
      {/* Nav colocado no layout global sem alterar o design das páginas */}


      <main>
        <div className="fixed inset-0 -z-50">
          <div
            aria-hidden
            className="w-full h-full"
            style={{
              backgroundImage: "url('/images/bg-two.png')",
              backgroundAttachment: 'fixed',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        </div>

        <Nav />
        <Component {...pageProps} />
        <Footer />
      </main>
    </>
  );
}