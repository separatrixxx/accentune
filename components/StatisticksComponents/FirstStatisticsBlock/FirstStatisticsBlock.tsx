import styles from './FirstStatisticsBlock.module.css';
import { setLocale } from '../../../helpers/locale.helper';
import { useSetup } from '../../../hooks/useSetup';
import { Htag } from '../../Common/Htag/Htag';
import { PieChart } from '../PieChart/PieChart';
import { useState } from 'react';
import { Button } from '../../Common/Button/Button';
import { BarChart } from '../BarChart/BarChart';


export const FirstStatisticsBlock = (): JSX.Element => {
    const { router, firstStatistics } = useSetup();
    
    const [blockId, setBlockId] = useState<number | null>(null);
    
    return ( 
        <>
            <div className={styles.firstStatsBlock}>
                <Htag tag='xl' className={styles.tasksSolvedText}>
                    {setLocale(router.locale).tasks_solved + ' ' + firstStatistics.overall_stats.solved_task_count
                        + ' ' + setLocale(router.locale).of + ' ' + firstStatistics.overall_stats.total_task_count}
                </Htag>
                {
                    blockId === null ?
                        <>
                            <Htag tag='l' className={styles.blockStatisticsText}>
                                {setLocale(router.locale).block_statistics}
                            </Htag>
                            <Htag tag='s' className={styles.lightText}>
                                {setLocale(router.locale).select_block_to_see_more + '. '
                                    + setLocale(router.locale).hover_or_hold}
                            </Htag>
                        </>
                    : 
                        <Htag tag='s' className={styles.lightText}>
                            {setLocale(router.locale).hover_or_hold}
                        </Htag>
                }
            </div>
            {
                blockId === null ?
                    <PieChart setBlockId={setBlockId} />
                : 
                    <div className={styles.chartDiv}>
                        <Button description={setLocale(router.locale).return_to_block_statistics}
                            onClick={() => setBlockId(null)} />
                        <BarChart blockId={blockId} data={firstStatistics.theme_stats}
                            title={setLocale(router.locale).themes_statistics} />
                        <BarChart blockId={blockId} data={firstStatistics.type_stats}
                            title={setLocale(router.locale).types_statistics} />
                    </div>
            }
        </>
    );
};
