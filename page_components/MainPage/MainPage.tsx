import styles from './MainPage.module.css';
import { Header } from '../../components/Common/Header/Header';
import { MainButtons } from '../../components/MainComponents/MainButtons/MainButtons';
import { useSetup } from '../../hooks/useSetup';
import { Spinner } from '../../components/Common/Spinner/Spinner';


export const MainPage = (): JSX.Element => {
  const { webApp, user } = useSetup();

  if (webApp) {
      webApp?.BackButton.hide();
  }

  if (user.privileges === null) {
    return (
      <div className={styles.wrapper}>
        <Spinner />
      </div>
    );
  }

  return (
    <div className={styles.wrapper}>
      <Header />
      <MainButtons />
    </div>
  );
};
