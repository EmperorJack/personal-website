import '@/src/styles/index.scss';
import '@/src/styles/app.scss';

import type { AppProps } from 'next/app';
import Head from 'next/head';

import { Footer } from '@/src/components/Footer';
import { Header } from '@/src/components/Header';
import { Nav } from '@/src/components/Nav';

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
