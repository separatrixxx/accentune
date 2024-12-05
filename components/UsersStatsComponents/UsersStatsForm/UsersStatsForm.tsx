import styles from './UsersStatsForm.module.css';
import { useSetup } from '../../../hooks/useSetup';
import { Htag } from '../../Common/Htag/Htag';
import { UsersStats } from '../UsersStats/UsersStats';
import { useState } from 'react';
import { TasksStats } from '../TasksStats/TasksStats';
import { setLocale } from '../../../helpers/locale.helper';
import { TableStats } from '../TableStats/TableStats';
import cn from 'classnames';


export const UsersStatsForm = (): JSX.Element => {
    const { router, usersStats } = useSetup();

    const [type, setType] = useState<'tasks' | 'users' | 'table'>('tasks');

    return (
        <div className={styles.userStatsForm}>
            <div className={styles.userStatsDiv}>
                <Htag tag='m' className={styles.eventName}>
                    {usersStats.event_name}
                </Htag>
                <Htag tag='m' className={cn(styles.changeType, {
                    [styles.activeChangeType]: type === 'tasks',
                })} onClick={() => setType('tasks')}>
                    {setLocale(router.locale).tasks_stats}
                </Htag>
                <Htag tag='m' className={cn(styles.changeType, {
                    [styles.activeChangeType]: type === 'users',
                })} onClick={() => setType('users')}>
                    {setLocale(router.locale).users_stats}
                </Htag>
                <Htag tag='m' className={cn(styles.changeType, {
                    [styles.activeChangeType]: type === 'table',
                })} onClick={() => setType('table')}>
                    {setLocale(router.locale).table_stats}
                </Htag>
            </div>
            {
                type === 'tasks' ?
                    <TasksStats />
                : type === 'users' ?
                    <UsersStats />
                : <TableStats />
            }
        </div>
    );
};
