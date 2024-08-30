import { VariantStatsBlockProps } from './VariantStatsBlock.props';
import styles from './VariantStatsBlock.module.css';
import { useEffect } from 'react';
import { Spinner } from '../../Common/Spinner/Spinner';
import { useSetup } from '../../../hooks/useSetup';
import { getVariantStats } from '../../../helpers/solved.helper';
import { VariantStatsItem } from '../VariantStatsItem/VariantStatsItem';


export const VariantStatsBlock = ({ date, index }: VariantStatsBlockProps): JSX.Element => {
    const { router, dispatch, webApp, tgUser, variantStats, subject } = useSetup();

    useEffect(() => {
        getVariantStats({
            userId: tgUser?.id,
            webApp: webApp,
            subject: subject,
            router: router,
            dispatch: dispatch,
            date: date,
            index: index,
        });
    }, [router, webApp, tgUser, date, index, subject, dispatch]);

    if (variantStats.status !== 'success') {
        return <Spinner />
    }

    return (
        <div className={styles.variantStatsBlock}>
            {variantStats.data.map((v: any) => (
                <VariantStatsItem key={v.task_id} item={v} />
            ))}
        </div>
    );
};
