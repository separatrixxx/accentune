import { ProfilePage } from "../../page_components/ProfilePage/ProfilePage";
import Head from 'next/head';
import { useRouter } from "next/router";
import { setLocale } from "../../helpers/locale.helper";


function Profile(): JSX.Element {
  const router = useRouter();

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
