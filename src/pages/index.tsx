import { MainPage } from "../../page_components/MainPage/MainPage";
import Head from 'next/head';
import { setLocale } from "../../helpers/locale.helper";
import { useEffect } from "react";
import { getUser } from "../../helpers/user.helper";
import { useSetup } from "../../hooks/useSetup";


function Main(): JSX.Element {
  const { router, dispatch, webApp, tgUser } = useSetup();

  if (webApp) {
    webApp.expand();
  }

  useEffect(() => {
    if (tgUser) {
      getUser({
        userId: tgUser?.id,
        webApp: webApp,
        text: setLocale(router.locale).errors.get_user_error,
        dispatch: dispatch,
      });
    }
  }, [router, tgUser, webApp, dispatch]);

  return (
    <>
      <Head>
        <title>{setLocale(router.locale).accentune}</title>
        <meta name='description' content={setLocale(router.locale).accentune} />
        <meta property='og:title' content={setLocale(router.locale).accentune} />
        <meta name='og:description' content={setLocale(router.locale).accentune} />
        <meta charSet="utf-8" />
      </Head>
      <MainPage />
    </>
  );
}

export default Main;
