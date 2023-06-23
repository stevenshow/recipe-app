import App from 'next/app';
import Head from 'next/head';

import '../app/globals.css'

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Head>
          <html lang="en" translate="no" />
        </Head>
        <Component {...pageProps} />
      </>
    );
  }
}

export default MyApp;