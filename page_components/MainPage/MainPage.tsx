import styles from './MainPage.module.css';
import { Header } from '../../components/Common/Header/Header';
import { useTelegram } from '../../layout/TelegramProvider';
import { Htag } from '../../components/Common/Htag/Htag';


export const MainPage = (): JSX.Element => {
  const { tgUser } = useTelegram();

  return (
    <div className={styles.wrapper}>
      <Header />
      <br />
      <Htag tag='l'>
        {tgUser ? `Добро пожаловать, ${tgUser.username}` : ':('}
      </Htag>
    </div>
  );
};
