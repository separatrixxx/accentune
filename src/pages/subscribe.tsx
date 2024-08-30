import { FirstPartPage } from '../../page_components/FirstPartPage/FirstPartPage';
import Head from 'next/head';
import { useRouter } from "next/router";
import { setLocale } from "../../helpers/locale.helper";
import { useEffect, useState } from 'react';
import { getBlocks } from '../../helpers/firstPart.helper';
import { Blocks } from '../../interfaces/firstPart.interface';
import { getPrices } from '../../helpers/subscription.helper';
import { useSetup } from '../../hooks/useSetup';
import { SubscribePage } from '../../page_components/SubscribePage/SubscribePage';


function Subscribe(): JSX.Element {
const { router, dispatch, subject } = useSetup();

  useEffect(() => {
    getPrices(subject, dispatch);
  }, [subject, dispatch]);

  return (
    <>
      <Head>
        <title>{setLocale(router.locale).accentune + ' | ' + setLocale(router.locale).subscription}</title>
        <meta name='description' content={setLocale(router.locale).accentune + ' | ' + setLocale(router.locale).subscription} />
        <meta property='og:title' content={setLocale(router.locale).accentune + ' | ' + setLocale(router.locale).subscription} />
        <meta name='og:description' content={setLocale(router.locale).accentune + ' | ' + setLocale(router.locale).subscription} />
        <meta charSet="utf-8" />
      </Head>
      <SubscribePage />
    </>
  );
}

export default Subscribe;
