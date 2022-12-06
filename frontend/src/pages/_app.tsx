import { ReactElement, ReactNode } from 'react';
import { NextPage } from 'next';
import type { AppProps } from 'next/app';
import { NextIntlProvider } from 'next-intl';

import {ThemeProvider} from '@material-tailwind/react';
import {ThemeProvider as ThemeNext} from 'next-themes';
import {Layout} from '../layout/layout';

import '../styles/global.css';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function App({ Component, pageProps }:AppPropsWithLayout) {
  
  const getLayout = Component.getLayout ?? ((page) => page)

  return getLayout(
    <ThemeNext enableSystem={true} attribute="class">
    <ThemeProvider>
      <Layout>
        <NextIntlProvider 
          messages={pageProps.messages}> 
          <Component {...pageProps} />
        </NextIntlProvider> 
      </Layout>
    </ThemeProvider>
  </ThemeNext>
  )
}
