import styles from './SolvedBlock.module.css';
import { useEffect } from 'react';
import { Spinner } from '../../Common/Spinner/Spinner';
import { useSetup } from '../../../hooks/useSetup';
import { getSolved } from '../../../helpers/solved.helper';
import { useHelpStates } from '../../../hooks/useHelpStates';
import { DateIndexSelect } from '../DateIndexSelect/DateIndexSelect';
import { VariantStatsBlock } from '../VariantStatsBlock/VariantStatsBlock';
import { Button } from '../../Common/Button/Button';
import { setLocale } from '../../../helpers/locale.helper';


export const SolvedBlock = (): JSX.Element => {
    const { router, dispatch, webApp, tgUser, solved, subject } = useSetup();
    const { date, index, setDate, setIndex } = useHelpStates();

    useEffect(() => {
        getSolved({
            userId: tgUser?.id,
            webApp: webApp,
            subject: subject,
            router: router,
            dispatch: dispatch,
        });
    }, [router, webApp, tgUser, subject, dispatch]);

    if (solved.status !== 'success') {
        return <Spinner />
    }

    if (!date || !index) {
        return (
            <DateIndexSelect solved={solved} date={date} setDate={setDate} setIndex={setIndex} />
        );
    } else {
        return (
            <div className={styles.solvedButtons}>
                <Button description={setLocale(router.locale).return_to_variant_selection}
                    onClick={() => setIndex(null)}
                />
                <VariantStatsBlock date={date} index={index} />
            </div>
        );
    }
};
