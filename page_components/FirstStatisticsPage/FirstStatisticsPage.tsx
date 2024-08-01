import styles from './FirstStatisticsPage.module.css';
import { useSetup } from '../../hooks/useSetup';
import { Htag } from '../../components/Common/Htag/Htag';
import { setLocale } from '../../helpers/locale.helper';
import { FirstStatisticsBlock } from '../../components/StatisticksComponents/FirstStatisticsBlock/FirstStatisticsBlock';
import { Spinner } from '../../components/Common/Spinner/Spinner';


export const FirstStatisticsPage = (): JSX.Element => {
    const { router, webApp, firstStatistics } = useSetup();
        
    if (webApp) {
        webApp?.BackButton.hide();
        webApp?.BackButton.show();

        webApp?.BackButton.onClick(function() {
            router.push('/profile');

            webApp?.BackButton.hide();
        });
    }
    
    return (
        <div className={styles.wrapper}>
            {
                firstStatistics.overall_stats.solved_task_count === -1 ?
                    <Spinner />
                : firstStatistics.overall_stats.solved_task_count !== 0 ?
                    <FirstStatisticsBlock />
                :
                    <Htag tag='l' className={styles.havenotSolvedTasks}>
                        {setLocale(router.locale).you_have_not_solved_tasks}
                    </Htag>
            }
        </div>
    );
};
