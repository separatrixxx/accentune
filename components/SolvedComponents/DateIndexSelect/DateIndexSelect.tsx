import { DateIndexSelectProps } from './DateIndexSelect.props';
import styles from './DateIndexSelect.module.css';
import { Button } from '../../Common/Button/Button';
import { setLocale } from '../../../helpers/locale.helper';
import { useSetup } from '../../../hooks/useSetup';
import { Htag } from '../../Common/Htag/Htag';
import { formatDate } from '../../../helpers/date.helper';


export const DateIndexSelect = ({ solved, date, setDate, setIndex }: DateIndexSelectProps): JSX.Element => {
    const { router } = useSetup();

    return (
        <>
            <Htag tag='xl' className={styles.selectDateTitle}>
                {(date ? setLocale(router.locale).select_variant : setLocale(router.locale).select_date) + ":"}
            </Htag>
            <div className={styles.solvedButtons}>
                {
                    date ? 
                        <Button description={setLocale(router.locale).return_to_date_selection}
                            onClick={() => setDate(null)}
                        />
                    : <></>
                }
                {
                    date ?
                        solved.data.filter(d => d.date === date)[0].variants.map(v=> (
                            <Button key={v.index} text={setLocale(router.locale).variant + ' ' + v.index}
                                description={setLocale(router.locale).tasks_solved + ': '
                                    + v.solved_count + ' ' + setLocale(router.locale).of + ' ' + v.total_tasks}
                                onClick={() => setIndex(v.index)}
                            />
                        ))
                    : solved.data.map(d=> (
                        <Button key={d.date} text={formatDate(d.date)}
                            description={setLocale(router.locale).number_of_solved_variants + ': ' + d.variants.length}
                            onClick={() => setDate(d.date)}
                        />
                    ))
                }
            </div>
        </>
    );
};
