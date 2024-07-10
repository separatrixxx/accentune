import styles from './MainPage.module.css';
import { useRouter } from 'next/router';
import { Header } from '../../components/Header/Header';
import { useTelegram } from '../../layout/TelegramProvider';
import { Htag } from '../../components/Common/Htag/Htag';


export const MainPage = (): JSX.Element => {
  const router = useRouter();
  const { user } = useTelegram();

  return (
    <div className={styles.wrapper}>
      <Header />
      <Htag tag='l'>
        {user ? `Добро пожаловать, ${user.username}` : ':('}
      </Htag>
    </div>
  );
};
