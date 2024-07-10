import styles from './MainPage.module.css';
import { Toaster } from 'react-hot-toast';
import { useRouter } from 'next/router';
import { Htag } from '../../components/Common/Htag/Htag';
import { useEffect, useState } from 'react';
import { setLocale } from '../../helpers/locale.helper';


interface User {
  id: number;
  first_name: string;
  last_name?: string;
  username?: string;
}

export const MainPage = (): JSX.Element => {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [info, setInfo] = useState<string>('Всё ок');
  const [initDataUnsafe, setInitDataUnsafe] = useState<any>(null);

  useEffect(() => {
    const checkTelegramWebApp = () => {
      if (typeof window !== 'undefined' && window.Telegram?.WebApp) {
        const tg = window.Telegram.WebApp;
        tg.ready();

        const initUser: User = tg.initDataUnsafe.user;
        console.log(tg.initDataUnsafe);
        setInitDataUnsafe(tg.initDataUnsafe.user);
        setUser(initUser);
      } else {
        setInfo('Ошибка с window.Telegram?.WebApp');
      }
    };

    if (document.readyState === 'complete') {
      checkTelegramWebApp();
    } else {
      window.addEventListener('load', checkTelegramWebApp);
      return () => window.removeEventListener('load', checkTelegramWebApp);
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
        {user && <p>Welcome, {user.first_name} {user.last_name} (@{user.username})</p>}
        <Htag tag='m'>
          {info}
        </Htag>
        <Htag tag='l'>
          {initDataUnsafe}
        </Htag>
      </div>
    </>
  );
};
