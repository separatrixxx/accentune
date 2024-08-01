import { FirstPartPage } from '../../page_components/FirstPartPage/FirstPartPage';
import Head from 'next/head';
import { useRouter } from "next/router";
import { setLocale } from "../../helpers/locale.helper";
import { useEffect, useState } from 'react';
import { getBlocks } from '../../helpers/firstPart.helper';
import { Blocks } from '../../interfaces/firstPart.interface';


function Part1(): JSX.Element {
  const router = useRouter();

  const [blocks, setBlocks] = useState<Blocks>({});

  useEffect(() => {
    getBlocks(setBlocks)
  }, [setBlocks]);

  return (
    <>
      <Head>
        <title>{setLocale(router.locale).accentune + ' | ' + setLocale(router.locale).first_part}</title>
        <meta name='description' content={setLocale(router.locale).accentune + ' | ' + setLocale(router.locale).first_part} />
        <meta property='og:title' content={setLocale(router.locale).accentune + ' | ' + setLocale(router.locale).first_part} />
        <meta name='og:description' content={setLocale(router.locale).accentune + ' | ' + setLocale(router.locale).first_part} />
        <meta charSet="utf-8" />
      </Head>
      <FirstPartPage blocks={blocks} />
    </>
  );
}

export default Part1;
