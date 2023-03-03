import '../src/styles/index.scss';
import '../src/styles/app.scss';

import type { AppProps } from 'next/app';
import Head from 'next/head';

import { Footer } from '../src/components/Footer';
import { Header } from '../src/components/Header';
import { Nav } from '../src/components/Nav';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Jack Purvis</title>
      </Head>

      <Header />

      <Nav />

      <Component {...pageProps} />

      <Footer />
    </>
  );
}

// TODO: replace react flexbox grid layout with css solution
// const App = () => (
//   <Grid fluid>
//     <Row>
//       <Col xs={12}>
//         <Header />
//       </Col>
//     </Row>

//     <Row>
//       <Col xs={12} sm={3} md={2}>
//         {/* <Nav /> */}
//       </Col>
//       <Col xs={12} sm={9} md={8}>
//         <DefaultPageComponent />
//       </Col>

//       <Col xs={0} sm={0} md={2} />
//     </Row>

//     <Row>
//       <Col xs={12}>
//         <Footer />
//       </Col>
//     </Row>
//   </Grid>
// );
