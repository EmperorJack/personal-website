import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="end">
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content="Jack Purvis | Personal Website" />
        <link rel="apple-touch-icon" href="/logo192.png" />
        <title>Jack Purvis</title>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
