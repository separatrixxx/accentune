import styles from './ProfilePage.module.css';
import { ProfileInfo } from '../../components/ProfileComponents/ProfileInfo/ProfileInfo';
import { ProfileButtons } from '../../components/ProfileComponents/ProfileButtons/ProfileButtons';
import { Htag } from '../../components/Common/Htag/Htag';
import { setLocale } from '../../helpers/locale.helper';
import { useSetup } from '../../hooks/useSetup';
import { Spinner } from '../../components/Common/Spinner/Spinner';


export const ProfilePage = (): JSX.Element => {
  const { router, webApp, user } = useSetup();

  if (webApp) {
    webApp?.BackButton.show();

    webApp?.BackButton.onClick(function() {
      router.push('/');
    });
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
      {
        user.privileges !== 'unregistered_user' ?
          <>
            <ProfileInfo />
            <ProfileButtons />
          </>
        :
          <Htag tag='l' className={styles.registerInBot}>
            {setLocale(router.locale).register_in_bot}
          </Htag>
      }
    </div>
  );
};
