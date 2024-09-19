import styles from './UserStatsPage.module.css';
import { useSetup } from '../../hooks/useSetup';
import { Spinner } from '../../components/Common/Spinner/Spinner';
import { UsersStatsForm } from '../../components/UsersStatsComponents/UsersStatsForm/UsersStatsForm';


export const UserStatsPage = (): JSX.Element => {
  const { usersStats } = useSetup();
  
  return (
    <div className={styles.wrapper}>
        {
            usersStats.event_name ?
                <UsersStatsForm />
            : <Spinner />
        }       
    </div>
  );
};
