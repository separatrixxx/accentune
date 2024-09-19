import styles from './UsersStats.module.css';
import { useSetup } from '../../../hooks/useSetup';
import { setLocale } from '../../../helpers/locale.helper';
import { useState } from 'react';


export const UsersStats = (): JSX.Element => {
    const { router, usersStats } = useSetup();
    const { users_stats } = usersStats;

    const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');

    const toggleSortOrder = () => {
        setSortOrder(prevOrder => (prevOrder === 'asc' ? 'desc' : 'asc'));
    };

    return (
        <div className={styles.usersStats}>
            <table className={styles.resultsTable}>
                <thead>
                    <tr>
                        <th>{setLocale(router.locale).student_name}</th>
                        <th
                            className={styles.sortableHeader}
                            onClick={toggleSortOrder}
                        >
                            {setLocale(router.locale).total_score}
                            {sortOrder === 'asc' ? ' ↑' : ' ↓'}
                        </th>
                        <th>{setLocale(router.locale).task_id}</th>
                    </tr>
                </thead>
                <tbody>
                    {users_stats
                        .slice()
                        .sort((a, b) => sortOrder === 'asc' ? a.total_score - b.total_score : b.total_score - a.total_score)
                        .map((user, index) => (
                            <tr key={index}>
                                <td>{user.user_name}</td>
                                <td>{user.total_score}</td>
                                <td>
                                    <ul className={styles.tasksList}>
                                        {user.tasks.map((task, taskIndex) => (
                                            <li key={taskIndex}>
                                                {`${setLocale(router.locale).task}: ${task.task_id}, ${setLocale(router.locale).student_score}: ${task.score}`}
                                            </li>
                                        ))}
                                    </ul>
                                </td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>
    );
};
