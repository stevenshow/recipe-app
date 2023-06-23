import App from 'next/app';
import Head from 'next/head';

import '../app/globals.css'

function MyApp({ Component, pageProps }) {
  return (
      <>
        <Head>
          <html lang="en" translate="no" />
        </Head>
        <Component {...pageProps} />
      </>
  )
}

export default MyApp
