import styles from './UsersStatsForm.module.css';
import { useSetup } from '../../../hooks/useSetup';
import { Htag } from '../../Common/Htag/Htag';
import { UsersStats } from '../UsersStats/UsersStats';
import { useState } from 'react';
import { TasksStats } from '../TasksStats/TasksStats';
import { setLocale } from '../../../helpers/locale.helper';


export const UsersStatsForm = (): JSX.Element => {
    const { router, usersStats } = useSetup();

    const [type, setType] = useState<'tasks' | 'users'>('tasks');

    return (
        <div className={styles.userStatsForm}>
            <div className={styles.userStatsDiv}>
                <Htag tag='m' className={styles.eventName}>
                    {usersStats.event_name}
                </Htag>
                <Htag tag='m' className={styles.changeType} onClick={() => setType('tasks')}>
                    {setLocale(router.locale).tasks_stats}
                </Htag>
                <Htag tag='m' className={styles.changeType} onClick={() => setType('users')}>
                    {setLocale(router.locale).users_stats}
                </Htag>
            </div>
            {
                type === 'tasks' ?
                    <TasksStats />
                : <UsersStats />
            }
        </div>
    );
};
