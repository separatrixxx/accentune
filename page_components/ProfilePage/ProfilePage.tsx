import styles from './ProfilePage.module.css';
import { useRouter } from 'next/router';
import { useTelegram } from '../../layout/TelegramProvider';


export const ProfilePage = (): JSX.Element => {
  const router = useRouter();
  const { webApp, user } = useTelegram();

  if (webApp) {
    const BackButton = webApp?.BackButton;
    BackButton.show();
    BackButton.onClick(function() {
      router.push('/');
    });
  }

  return (
    <div className={styles.wrapper}>
      Profile
    </div>
  );
};
