import { VariantStatsBlockProps } from './VariantStatsBlock.props';
import styles from './VariantStatsBlock.module.css';
import { useEffect } from 'react';
import { Spinner } from '../../Common/Spinner/Spinner';
import { useSetup } from '../../../hooks/useSetup';
import { getVariantStats } from '../../../helpers/solved.helper';
import { VariantStatsItem } from '../VariantStatsItem/VariantStatsItem';


export const VariantStatsBlock = ({ date, index }: VariantStatsBlockProps): JSX.Element => {
    const { dispatch, tgUser, variantStats } = useSetup();

    useEffect(() => {
        getVariantStats(tgUser?.id, date, index, dispatch);
    }, [tgUser, date, index, dispatch]);

    if (variantStats.status !== 'success') {
        return <Spinner />
    }

    return (
        <div className={styles.variantStatsBlock}>
            {variantStats.data.map(v => (
                <VariantStatsItem key={v.task_id} item={v} />
            ))}
        </div>
    );
};
