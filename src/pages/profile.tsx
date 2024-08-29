import { ProfilePage } from "../../page_components/ProfilePage/ProfilePage";
import Head from 'next/head';
import { setLocale } from "../../helpers/locale.helper";
import { useEffect } from "react";
import { getUser } from "../../helpers/user.helper";
import { useSetup } from "../../hooks/useSetup";


function Profile(): JSX.Element {
  const { router, dispatch, webApp, tgUser } = useSetup();

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
        <title>{setLocale(router.locale).accentune + ' | ' + setLocale(router.locale).profile}</title>
        <meta name='description' content={setLocale(router.locale).accentune + ' | ' + setLocale(router.locale).profile} />
        <meta property='og:title' content={setLocale(router.locale).accentune + ' | ' + setLocale(router.locale).profile} />
        <meta name='og:description' content={setLocale(router.locale).accentune + ' | ' + setLocale(router.locale).profile} />
        <meta charSet="utf-8" />
      </Head>
      <ProfilePage />
    </>
  );
}

export default Profile;
