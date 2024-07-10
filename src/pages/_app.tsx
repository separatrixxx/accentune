import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';
import { setLocale } from '../../helpers/locale.helper';
import { wrapper } from '../../features/store/store';
import { Provider } from 'react-redux';
import { TelegramProvider } from '../../layout/TelegramProvider';


export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const { store } = wrapper.useWrappedStore(pageProps);
  
  return (
    <TelegramProvider>
      <Head>
        <title>{setLocale(router.locale).accentune}</title>
        <meta name='description' content={setLocale(router.locale).accentune} />
        <meta property='og:title' content={setLocale(router.locale).accentune} />
        <meta property='og:description' content={setLocale(router.locale).accentune} />
        <meta charSet="utf-8" />
        <link rel="icon" href="/logo.svg" type="image/svg+xml" />
        <script async src="https://telegram.org/js/telegram-web-app.js"></script>
      </Head>
      <Component {...pageProps} />
    </TelegramProvider>
  );
}
