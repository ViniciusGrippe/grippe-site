import React from 'react';

import type { AppProps } from 'next/app';
import Head from 'next/head';

import { GlobalStyle } from '~/styles/global';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Head>
        <title>Vinícius Grippe - Front-end Developer and UX/UI Designer</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons+Round"
          rel="stylesheet"
        />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="img/apple-touch-icon.png "
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="img/favicon-32x32.png "
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="img/favicon-16x16.png "
        />
        <link rel="manifest" href="/site.webmanifest " />
        <link
          rel="mask-icon"
          href="img/safari-pinned-tab.svg"
          color="#010103 "
        />
        <meta name="msapplication-TileColor" content="#f9f9fb " />
        <meta name="theme-color" content="#f9f9fb " />
      </Head>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
