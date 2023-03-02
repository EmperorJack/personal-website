import '../src/styles/index.scss';
import '../src/styles/app.scss';

import type { AppProps } from 'next/app';

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
