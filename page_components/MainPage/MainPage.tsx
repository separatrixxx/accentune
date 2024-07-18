import styles from './MainPage.module.css';
import { Header } from '../../components/Common/Header/Header';
import { useTelegram } from '../../layout/TelegramProvider';
import { Htag } from '../../components/Common/Htag/Htag';
import { MainButtons } from '../../components/MainComponents/MainButtons/MainButtons';
import { SubjectsForm } from '../../components/MainComponents/SubjectsForm/SubjectsForm';


export const MainPage = (): JSX.Element => {
  const { tgUser } = useTelegram();

  return (
    <div className={styles.wrapper}>
      <Header />
      <SubjectsForm />
      <MainButtons />
    </div>
  );
};
