import styles from './MainPage.module.css';
import { Header } from '../../components/Common/Header/Header';
import { MainButtons } from '../../components/MainComponents/MainButtons/MainButtons';
import { useTelegram } from '../../layout/TelegramProvider';


export const MainPage = (): JSX.Element => {
  const { webApp } = useTelegram();

  if (webApp) {
      webApp?.BackButton.hide();
  }

  return (
    <div className={styles.wrapper}>
      <Header />
      <MainButtons />
    </div>
  );
};
