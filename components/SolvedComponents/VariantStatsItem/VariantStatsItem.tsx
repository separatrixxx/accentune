import { VariantStatsItemProps } from './VariantStatsItem.props';
import styles from './VariantStatsItem.module.css';
import { useSetup } from '../../../hooks/useSetup';
import { Htag } from '../../Common/Htag/Htag';
import { setLocale } from '../../../helpers/locale.helper';
import ReactMarkdown from 'react-markdown';
import cn from 'classnames';


export const VariantStatsItem = ({ item }: VariantStatsItemProps): JSX.Element => {
    const { router } = useSetup();

    return (
        <div className={styles.variantStatsItem}>
            <Htag tag='l' className={cn(styles.text, styles.correctAnswer, {
                [styles.wrongAnswer]: !item.is_correct,
            })}>
                {setLocale(router.locale)[item.is_correct ? 'correct' : 'wrong']}
            </Htag>
            {
                item.question ?
                    <ReactMarkdown className={styles.markdown}>
                        {item.question}
                    </ReactMarkdown>
                : <></>
            }
            <Htag tag='s' className={styles.text}>
                {setLocale(router.locale).your_answer + ': ' + item.user_answer}
            </Htag>
            <Htag tag='s' className={styles.text}>
                {setLocale(router.locale).correct_answer + ': ' + item.correct_answer}
            </Htag>
            {
                item.explanation ?
                    <ReactMarkdown className={styles.markdown}>
                        {item.explanation}
                    </ReactMarkdown>
                : <></>
            }
        </div>
    );
};
