import styles from './MainPage.module.css';
import { Header } from '../../components/Common/Header/Header';
import { MainButtons } from '../../components/MainComponents/MainButtons/MainButtons';
import { SubjectsForm } from '../../components/MainComponents/SubjectsForm/SubjectsForm';


export const MainPage = (): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <SubjectsForm />
      <MainButtons />
    </div>
  );
};
