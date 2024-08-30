import { MainPage } from "../../page_components/MainPage/MainPage";
import Head from 'next/head';
import { setLocale } from "../../helpers/locale.helper";
import { useEffect } from "react";
import { getUser } from "../../helpers/user.helper";
import { useSetup } from "../../hooks/useSetup";
import { getPromo } from "../../helpers/promo.helper";


function Main(): JSX.Element {
  const { router, dispatch, webApp, tgUser, subject } = useSetup();

  if (webApp) {
    webApp.expand();
  }

  useEffect(() => {
    if (tgUser) {
      getUser({
        userId: tgUser?.id,
        webApp: webApp,
        subject: subject,
        text: setLocale(router.locale).errors.get_user_error,
        dispatch: dispatch,
      });
    }

    getPromo({
      webApp: webApp,
      subject: subject,
      router: router,
    }, dispatch)
  }, [router, tgUser, webApp, subject, dispatch]);

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
