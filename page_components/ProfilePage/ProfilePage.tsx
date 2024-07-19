import styles from './ProfilePage.module.css';
import { useRouter } from 'next/router';
import { useTelegram } from '../../layout/TelegramProvider';
import { ProfileInfo } from '../../components/ProfileComponents/ProfileInfo/ProfileInfo';
import { ProfileButtons } from '../../components/ProfileComponents/ProfileButtons/ProfileButtons';


export const ProfilePage = (): JSX.Element => {
  const router = useRouter();
  const { webApp } = useTelegram();

  if (webApp) {
    webApp?.BackButton.show();

    webApp?.BackButton.onClick(function() {
      router.push('/');
      webApp?.BackButton.hide();
    });
  }

  return (
    <div className={styles.wrapper}>
      <ProfileInfo />
      <ProfileButtons />
    </div>
  );
};
