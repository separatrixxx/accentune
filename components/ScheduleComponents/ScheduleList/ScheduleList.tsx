import { ScheduleListProps } from './ScheduleList.props';
import styles from './ScheduleList.module.css';
import { useSetup } from '../../../hooks/useSetup';
import { Button } from '../../Common/Button/Button';
import { getMonthAndYear, timestampToDate } from '../../../helpers/date.helper';
import { Htag } from '../../Common/Htag/Htag';
import { setLocale } from '../../../helpers/locale.helper';


export const ScheduleList = ({ setWebinarId }: ScheduleListProps): JSX.Element => {
    const { router, userWebinars } = useSetup();

    let prevMonthYear = '';

    return (
        <>
            {userWebinars.data.map((uw, index) => {
                const [month, year] = getMonthAndYear(uw.date);
                const currentMonthYear = `${month}.${year}`;
                const shouldDisplayHeader = currentMonthYear !== prevMonthYear || index === 0;
                prevMonthYear = currentMonthYear;

                return (
                    <div key={uw.webinar_id} className={styles.scheduleListDiv}>
                        {shouldDisplayHeader &&
                            <Htag tag='xl' className={styles.dateTitle}>
                                {setLocale(router.locale).your_webinars_for
                                    + ' ' + setLocale(router.locale).months['month' + month as 'month0']
                                    + ` ${year}:`}
                            </Htag>
                        }
                        <Button description={timestampToDate(uw.date)}
                            onClick={() => setWebinarId(uw.webinar_id)} />
                    </div>
                );
            })}
        </>
    );
};
