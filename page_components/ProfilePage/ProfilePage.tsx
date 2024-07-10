import styles from './ProfilePage.module.css';
import { useRouter } from 'next/router';
import { useTelegram } from '../../layout/TelegramProvider';
import { ProfileInfo } from '../../components/ProfileComponents/ProfileInfo/ProfileInfo';


export const ProfilePage = (): JSX.Element => {
  const router = useRouter();
  const { webApp } = useTelegram();

  if (webApp) {
    const BackButton = webApp?.BackButton;
    BackButton.show();
    BackButton.onClick(function() {
      router.push('/');
      BackButton.hide();
    });
  }

  return (
    <div className={styles.wrapper}>
      <ProfileInfo />
    </div>
  );
};
