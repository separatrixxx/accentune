import styles from './SecondStatisticsPage.module.css';
import { useSetup } from '../../hooks/useSetup';
import { useHelpStates } from '../../hooks/useHelpStates';
import { Button } from '../../components/Common/Button/Button';
import { setLocale } from '../../helpers/locale.helper';
import { SecondStatisticsBlock } from '../../components/StatisticksComponents/SecondStatisticsBlock/SecondStatisticsBlock';
import { setDefault } from '../../features/completedTasks/completedTasksSlice';


export const SecondStatisticsPage = (): JSX.Element => {
    const { router, dispatch, webApp } = useSetup();
    const { completed, setCompleted } = useHelpStates();
        
    if (webApp) {
        webApp?.BackButton.hide();
        webApp?.BackButton.show();

        webApp?.BackButton.onClick(function() {
            router.push('/profile');

            webApp?.BackButton.hide();
        });
    }
    
    if (!completed) {
        return (
            <div className={styles.secondStatisticsButtons}>
                <Button icon='check_emoji.webp' description={setLocale(router.locale).completed_tasks}
                    onClick={() => {
                        dispatch(setDefault());
                        setCompleted('completed');
                    }} />
                <Button icon='hourglass_emoji.webp' description={setLocale(router.locale).unsubmitted_tasks}
                    onClick={() => {
                        dispatch(setDefault());
                        setCompleted('unsubmitted');
                    }} />
            </div>
        );
    } else {
        return (
            <div className={styles.wrapper}>
                <SecondStatisticsBlock completed={completed} setCompleted={setCompleted} />
            </div>
        );
    }
};
