import styles from './TableStats.module.css';
import { useSetup } from '../../../hooks/useSetup';
import { setLocale } from '../../../helpers/locale.helper';


export const TableStats = (): JSX.Element => {
    const { router, usersStats } = useSetup();
    const { tasks_stats } = usersStats;

    const prepareUserData = () => {
        const userScores = tasks_stats.reduce((acc, task) => {
            const taskKey = `${task.task_type} (${task.task_id})`;
            task.user_results.forEach(user => {
                if (!acc[user.user_name]) {
                    acc[user.user_name] = { scores: {}, total: 0 };
                }
                acc[user.user_name].scores[taskKey] = user.score || 0;
                acc[user.user_name].total += user.score || 0;
            });

            return acc;
        }, {} as Record<string, { scores: Record<string, number>; total: number }>);

        return Object.entries(userScores).map(([user_name, data]) => ({
            user_name,
            scores: data.scores,
            total: data.total,
        }));
    };

    const userData = prepareUserData().sort((a, b) => a.user_name.localeCompare(b.user_name));
    const taskKeys = tasks_stats.map(task => `${task.task_type} (${task.task_id.slice(0, 5)})`);

    return (
        <div className={styles.tableStats}>
            <table className={styles.resultsTable}>
                <thead>
                    <tr>
                        <th>{setLocale(router.locale).student_name}</th>
                        {taskKeys.map((key, i) => (
                            <th key={i}>{key}</th>
                        ))}
                        <th>{setLocale(router.locale).total_score}</th>
                    </tr>
                </thead>
                <tbody>
                    {userData.map((user, i) => (
                        <tr key={i}>
                            <td>{user.user_name}</td>
                            {taskKeys.map((key, j) => (
                                <td key={j}>{user.scores[key] || 0}</td>
                            ))}
                            <td>{user.total}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
