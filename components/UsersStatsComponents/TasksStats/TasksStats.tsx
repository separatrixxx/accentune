import styles from './TasksStats.module.css';
import { useSetup } from '../../../hooks/useSetup';
import { Htag } from '../../Common/Htag/Htag';
import { setLocale } from '../../../helpers/locale.helper';
import { useState } from 'react';
import ReactMarkdown from 'react-markdown';


export const TasksStats = (): JSX.Element => {
    const { router, usersStats } = useSetup();
    const { tasks_stats } = usersStats;

    const [openedTaskId, setOpenedTaskId] = useState<number | null>(null);
    const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');

    const toggleTask = (taskId: number) => {
        setOpenedTaskId(prevTaskId => (prevTaskId === taskId ? null : taskId));
    };

    const toggleSortOrder = () => {
        setSortOrder(prevOrder => (prevOrder === 'asc' ? 'desc' : 'asc'));
    };

    return (
        <div className={styles.tasksStats}>
            {tasks_stats.map((ts, i) => (
                <div key={ts.task_id}>
                    <Htag tag='s' className={styles.taskStatsItemTitle} onClick={() => toggleTask(i)}>
                        {`${setLocale(router.locale).task}: ${ts.task_id}, ${ts.task_type}, ${setLocale(router.locale).max_score}: ${ts.max_score}`}
                    </Htag>
                    {
                        openedTaskId === i ?
                            <div className={styles.taskInfo}>
                                <table className={styles.resultsTable}>
                                    <thead>
                                        <tr>
                                            <th>{setLocale(router.locale).student_name}</th>
                                            <th
                                                className={styles.sortableHeader}
                                                onClick={toggleSortOrder}
                                            >
                                                {setLocale(router.locale).student_score}
                                                {sortOrder === 'asc' ? ' ↑' : ' ↓'}
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {tasks_stats[i].user_results
                                            .slice()
                                            .sort((a, b) => sortOrder === 'asc' ? a.score - b.score : b.score - a.score)
                                            .map((result, index) => (
                                                <tr key={index}>
                                                    <td>{result.user_name}</td>
                                                    <td>{result.score}</td>
                                                </tr>
                                            ))}
                                    </tbody>
                                </table>
                                <div>
                                    <ReactMarkdown>
                                        {tasks_stats[i].task_text}
                                    </ReactMarkdown>
                                </div>
                            </div>
                        : <></>
                    }
                </div>
            ))}
        </div>
    );
};
