import '@/styles/index.scss';
import '@/styles/app.scss';

import type { AppProps } from 'next/app';
import Head from 'next/head';

import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { Nav } from '@/components/Nav';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Jack Purvis</title>
      </Head>

      <div className="layout">
        <Header />

        <div className="layout__main">
          <div className="layout__left">
            <Nav />
          </div>

          <Component {...pageProps} />

          <div className="layout__right" />
        </div>

        <Footer />
      </div>
    </>
  );
}
