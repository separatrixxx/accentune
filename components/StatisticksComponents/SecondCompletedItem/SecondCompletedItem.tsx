import { SecondCompletedItemProps } from './SecondCompletedItem.props';
import styles from './SecondCompletedItem.module.css';
import { useSetup } from '../../../hooks/useSetup';
import { Htag } from '../../Common/Htag/Htag';
import { setLocale } from '../../../helpers/locale.helper';
import ReactMarkdown from 'react-markdown';
import { useEffect } from 'react';
import { cancelSolution, getCompletedItem, getUnsubmittedItem } from '../../../helpers/completedTasks.helper';
import { Spinner } from '../../Common/Spinner/Spinner';
import { Button } from '../../Common/Button/Button';


export const SecondCompletedItem = ({ completed, taskId, setCompleted }: SecondCompletedItemProps): JSX.Element => {
    const { router, dispatch, webApp, tgUser, completedTasks, subject } = useSetup();

    useEffect(() => {
        if (completed === 'completed') {
            getCompletedItem(tgUser?.id, taskId, subject, dispatch);
        } else if (completed === 'unsubmitted') {
            getUnsubmittedItem(tgUser?.id, taskId, subject, dispatch);
        }
    }, [tgUser, completed, taskId, subject, dispatch]);

    if (completedTasks.completed) {
        return (
            <div className={styles.secondCompleteItem}>
                <Htag tag='s' className={styles.text}>
                    {setLocale(router.locale).task_id + ': ' + completedTasks.completed.data.task_id}
                </Htag>
                {
                    completedTasks.completed.data.task_text ?
                        <ReactMarkdown className={styles.markdown}>
                            {completedTasks.completed.data.task_text}
                        </ReactMarkdown>
                    : <></>
                }
                <Htag tag='s' className={styles.text}>
                    {setLocale(router.locale).task_solution + ': ' + completedTasks.completed.data.task_solution}
                </Htag>
                <Htag tag='s' className={styles.text}>
                    {setLocale(router.locale).points_received + ': ' + completedTasks.completed.data.pts_total}
                </Htag>
                <Htag tag='s' className={styles.text}>
                    {setLocale(router.locale).teacher_comment + ': ' + completedTasks.completed.data.task_comment}
                </Htag>
                <Htag tag='s' className={styles.text}>
                    {setLocale(router.locale).teacher_id + ': ' + completedTasks.completed.data.teacher_id}
                </Htag>
                <Htag tag='s' className={styles.text}>
                    {setLocale(router.locale).formatted_date + ': ' + completedTasks.completed.data.formatted_date}
                </Htag>
            </div>
        );
    } else if (completedTasks.unsubmitted) {
        return (
            <>
                <div className={styles.secondCompleteItem}>
                    <Htag tag='s' className={styles.text}>
                        {setLocale(router.locale).task_id + ': ' + completedTasks.unsubmitted.data.task_id}
                    </Htag>
                    {
                        completedTasks.unsubmitted.data.task_text ?
                            <ReactMarkdown className={styles.markdown}>
                                {completedTasks.unsubmitted.data.task_text}
                            </ReactMarkdown>
                        : <></>
                    }
                    <Htag tag='s' className={styles.text}>
                        {setLocale(router.locale).your_answer + ': ' + completedTasks.unsubmitted.data.user_answer}
                    </Htag>
                    <Htag tag='s' className={styles.text}>
                        {setLocale(router.locale).formatted_date + ': ' + completedTasks.unsubmitted.data.formatted_date}
                    </Htag>                
                </div>
                <Button description={setLocale(router.locale).cancel_solution} onClick={() => {
                    setCompleted(null);
                    cancelSolution({
                        webApp: webApp,
                        subject: subject,
                        router: router,
                    }, tgUser?.id, taskId);
                }} />
            </>
        );
    } else {
        return <Spinner />
    }
};
