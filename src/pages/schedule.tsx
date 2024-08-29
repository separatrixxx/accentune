import { SchedulePage } from "../../page_components/SchedulePage/SchedulePage";
import Head from 'next/head';
import { useRouter } from "next/router";
import { setLocale } from "../../helpers/locale.helper";


function Schedule(): JSX.Element {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>{setLocale(router.locale).accentune + ' | ' + setLocale(router.locale).schedule_of_classes}</title>
        <meta name='description' content={setLocale(router.locale).accentune + ' | ' + setLocale(router.locale).schedule_of_classes} />
        <meta property='og:title' content={setLocale(router.locale).accentune + ' | ' + setLocale(router.locale).schedule_of_classes} />
        <meta name='og:description' content={setLocale(router.locale).accentune + ' | ' + setLocale(router.locale).schedule_of_classes} />
        <meta charSet="utf-8" />
      </Head>
      <SchedulePage />
    </>
  );
}

export default Schedule;
