import { SecondPartPage } from '../../page_components/SecondPartPage/SecondPartPage';
import Head from 'next/head';
import { useRouter } from "next/router";
import { setLocale } from "../../helpers/locale.helper";
import { useEffect, useState } from 'react';
import { getBlocks } from '../../helpers/firstPart.helper';
import { Blocks } from '../../interfaces/firstPart.interface';
import { useSetup } from '../../hooks/useSetup';


function Part2(): JSX.Element {
  const { router, webApp, subject } = useSetup();

  const [blocks, setBlocks] = useState<Blocks>({});

  useEffect(() => {
    getBlocks({
      webApp: webApp,
      subject: subject,
      router: router,
    }, setBlocks)
  }, [router, webApp, subject, setBlocks]);

  return (
    <>
      <Head>
        <title>{setLocale(router.locale).accentune + ' | ' + setLocale(router.locale).second_part}</title>
        <meta name='description' content={setLocale(router.locale).accentune + ' | ' + setLocale(router.locale).second_part} />
        <meta property='og:title' content={setLocale(router.locale).accentune + ' | ' + setLocale(router.locale).second_part} />
        <meta name='og:description' content={setLocale(router.locale).accentune + ' | ' + setLocale(router.locale).second_part} />
        <meta charSet="utf-8" />
      </Head>
      <SecondPartPage blocks={blocks} />
    </>
  );
}

export default Part2;
