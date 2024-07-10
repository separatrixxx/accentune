import styles from './MainPage.module.css';
import { Toaster } from 'react-hot-toast';
import { useRouter } from 'next/router';
import { Header } from '../../components/Header/Header';
import { useTelegram } from '../../layout/TelegramProvider';
import { Htag } from '../../components/Common/Htag/Htag';


export const MainPage = (): JSX.Element => {
  const router = useRouter();
  const { webApp, user } = useTelegram();

  if (webApp) {
    const BackButton = webApp?.BackButton;
    BackButton.show();
    BackButton.onClick(function() {
      webApp.showAlert("Нет пути назад!");
      BackButton.hide();
    });
    webApp.onEvent('backButtonClicked', function() {

    });
  }

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
        <Htag tag='l'>
          {user ? user.username : ':('}
        </Htag>
      </div>
    </>
  );
};
