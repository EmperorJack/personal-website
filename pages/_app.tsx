import '@/styles/index.scss';
import '@/styles/app.scss';

import type { AppProps } from 'next/app';
import Head from 'next/head';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Jack Purvis</title>
      </Head>

      <Component {...pageProps} />
    </>
  );
}
