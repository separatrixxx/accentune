import { SecondStatisticsBlockProps } from './SecondStatisticsBlock.props';
import styles from './SecondStatisticsBlock.module.css';
import { Spinner } from '../../Common/Spinner/Spinner';
import { useSetup } from '../../../hooks/useSetup';
import { Button } from '../../Common/Button/Button';
import { setLocale } from '../../../helpers/locale.helper';
import { useEffect } from 'react';
import { getCompletedTasks, getUnsubmittedTasks } from '../../../helpers/completedTasks.helper';
import { Htag } from '../../Common/Htag/Htag';
import { useHelpStates } from '../../../hooks/useHelpStates';
import { setCompletedDefault } from '../../../features/completedTasks/completedTasksSlice';
import { SecondCompletedItem } from '../SecondCompletedItem/SecondCompletedItem';


export const SecondStatisticsBlock = ({ completed, setCompleted }: SecondStatisticsBlockProps): JSX.Element => {
    const { router, dispatch, tgUser, completedTasks, subject } = useSetup();
    const { taskId, setTaskId } = useHelpStates();

    useEffect(() => {
        if (completed === 'completed') {
            getCompletedTasks(tgUser?.id, subject, dispatch);
        } else if (completed === 'unsubmitted') {
            getUnsubmittedTasks(tgUser?.id, subject, dispatch);
        }
    }, [tgUser, completed, subject, dispatch]);

    
    if (completedTasks.data.status === 'loading') {
        return (
            <Spinner />
        );
    } else if (completedTasks.data.status !== 'success') {
        return (
            <div className={styles.secondStatisticsBlockButtons}>
                <Htag tag='l' className={styles.havenotSolvedTasks}>
                    {setLocale(router.locale).there_are_no_tasks_here_yet}
                </Htag>
                <Button description={setLocale(router.locale).come_back} onClick={() => setCompleted(null)} />
            </div>
        );
    } else if (!taskId) {
        return (
            <div className={styles.secondStatisticsBlockButtons}>
                <Button description={setLocale(router.locale).come_back} onClick={() => setCompleted(null)} />
                {completedTasks.data.data.map(c => (
                    <Button key={c.task_id} text={setLocale(router.locale).task + ' ' + c.task_id}
                        description={c.formatted_date} onClick={() => setTaskId(c.task_id)} />
                ))}
            </div>
        );
    } else {
        return (
            <div className={styles.secondStatisticsBlockButtons}>
                <Button description={setLocale(router.locale).come_back} onClick={() => {
                    dispatch(setCompletedDefault());
                    setTaskId(null);
                }} />
                <SecondCompletedItem completed={completed} taskId={taskId} setCompleted={setCompleted} />
            </div>
        );
    }
};
