import styles from './MainPage.module.css';
import { Toaster } from 'react-hot-toast';
import { useRouter } from 'next/router';
import { Htag } from '../../components/Common/Htag/Htag';
import { useEffect, useState } from 'react';
import { setLocale } from '../../helpers/locale.helper';


export const MainPage = (): JSX.Element => {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.Telegram?.WebApp) {
        const tg = window.Telegram.WebApp;
        tg.ready();
        setUser(tg.initDataUnsafe.user);
    }
  }, []);

  return (
    <>
      <Toaster
        position="top-center"
        reverseOrder={true}
        toastOptions={{
          duration: 2000,
        }}
      />
      <div className={styles.wrapper}>
        <Htag tag='xl'>
          {setLocale(router.locale).accentune}
        </Htag>
        {user && <p>Welcome, {user}</p>}
      </div>
    </>
  );
};
