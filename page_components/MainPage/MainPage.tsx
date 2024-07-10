import styles from './MainPage.module.css';
import { Toaster } from 'react-hot-toast';
import { useRouter } from 'next/router';
import { Header } from '../../components/Header/Header';
import { useTelegram } from '../../layout/TelegramProvider';


export const MainPage = (): JSX.Element => {
  const router = useRouter();
  const { webApp, user } = useTelegram();
  console.log(user)

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
        <Header />
      </div>
    </>
  );
};
