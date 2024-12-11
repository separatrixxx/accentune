import styles from './TableStats.module.css';
import { useSetup } from '../../../hooks/useSetup';
import { setLocale } from '../../../helpers/locale.helper';
import cn from 'classnames';


export const TableStats = (): JSX.Element => {
    const { router, usersStats } = useSetup();
    const { tasks_stats } = usersStats;

    const prepareUserData = () => {
        const userScores = tasks_stats.reduce((acc, task) => {
            const taskKey = `${task.task_type} (${task.task_id.slice(0, 5)})`;

            task.user_results.forEach(user => {
                if (!acc[user.user_name]) {
                    acc[user.user_name] = { scores: {}, total: 0 };
                }

                const userScore = user.score !== undefined ? user.score : 0;
                acc[user.user_name].scores[taskKey] = userScore;
                acc[user.user_name].total += userScore;
            });

            return acc;
        }, {} as Record<string, { scores: Record<string, number>; total: number }>);

        return Object.entries(userScores).map(([user_name, data]) => ({
            user_name,
            scores: data.scores,
            total: data.total,
        }));
    };

    const sortedTasks = [...tasks_stats].sort((a, b) => {
        const extractNumber = (str: string) => {
            const match = str.match(/\[(\d+)]/);

            return match ? parseInt(match[1], 10) : 0;
        };
    
        return extractNumber(a.task_type) - extractNumber(b.task_type);
    });
    
    const taskKeys = sortedTasks.map(task => `${task.task_type} (${task.task_id.slice(0, 5)})`);
    const userData = prepareUserData().sort((a, b) => a.user_name.localeCompare(b.user_name));


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
                                <td key={j} className={cn({
                                    [styles.notNullScore]: user.scores[key],
                                })}>
                                    {user.scores[key] !== undefined ? user.scores[key] : 0}
                                </td>
                            ))}
                            <td>{user.total}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
