import styles from './MainPage.module.css';
import { Header } from '../../components/Common/Header/Header';
import { MainButtons } from '../../components/MainComponents/MainButtons/MainButtons';
import { useSetup } from '../../hooks/useSetup';
import { Spinner } from '../../components/Common/Spinner/Spinner';
import { PromoSlider } from '../../components/PromoComponents/PromoSlider/PromoSlider';
import { MainLink } from '../../components/Common/MainLink/MainLink';


export const MainPage = (): JSX.Element => {
  const { webApp, tgUser, user } = useSetup();

  if (webApp) {
      webApp?.BackButton.hide();
  }

  return (
    <div className={styles.wrapper}>
      {
        !tgUser ?
          <MainLink />
        : !user.privileges ?
          <Spinner />
        : 
          <>
            <Header />
            <MainButtons />
            <PromoSlider />
          </>
      }
    </div>
  );
};
