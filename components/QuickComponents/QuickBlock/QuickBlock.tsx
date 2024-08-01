import styles from './QuickBlock.module.css';
import ReactMarkdown from 'react-markdown';
import { setLocale } from '../../../helpers/locale.helper';
import { Htag } from '../../Common/Htag/Htag';
import { Input } from '../../Common/Input/Input';
import { useEffect, useState } from 'react';
import { Spinner } from '../../Common/Spinner/Spinner';
import { Icon } from '../../Common/Icon/Icon';
import { checkQuickAnswer, getQuickVariant } from '../../../helpers/quick.helper';
import { Button } from '../../Common/Button/Button';
import { QuickButtons } from '../QuickButtons/QuickButtons';
import { useSetup } from '../../../hooks/useSetup';


export const QuickBlock = (): JSX.Element => {
    const { router, dispatch, tgUser, quick } = useSetup();

    useEffect(() => {
        getQuickVariant(tgUser?.id, dispatch);
    }, [tgUser, dispatch]);

    const [answer, setAnswer] = useState<string>('');
    const [isCorrect, setIsCorrect] = useState<boolean>(false);

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            checkQuickAnswer(quick, answer, setAnswer, setIsCorrect, dispatch);
        }
    };

    if (quick.variant.length === 0) {
        return <Spinner />
    }

    if (!isCorrect && quick.num + 1 <= quick.variant.length) {
        return (
            <>
                <div className={styles.quickBlock}>
                    <Htag tag='xl' className={styles.quickTaskTitle} onClick={() => {}}>
                        {setLocale(router.locale).task + ' ' + (quick.num + 1) + ":"}
                    </Htag>
                    <ReactMarkdown className={styles.quickTaskText}>
                        {quick.variant[quick.num].text}
                    </ReactMarkdown>
                    <Input text={setLocale(router.locale).enter_answer} value={answer}
                        onChange={(e) => setAnswer(e.target.value)} onKeyPress={handleKeyPress} />
                </div>
                <div className={styles.quickButtonDiv}>
                    <Button icon='sunglasses_emoji.webp' text={setLocale(router.locale).submit_answer}
                        description={setLocale(router.locale).click_to_submit_answer}
                        onClick={() => checkQuickAnswer(quick, answer, setAnswer, setIsCorrect, dispatch)} />
                </div>
            </>
        );
    } else {
        return (
            <>
                <div className={styles.quickBlock}>
                    <Htag tag='xl' className={styles.quickTaskTitle} onClick={() => {}}>
                        {quick.num + 1 <= quick.variant.length ? setLocale(router.locale).answer_recorded
                            : setLocale(router.locale).variant_completed}
                    </Htag>
                    <Icon icon='popper_emoji.webp' />
                </div>
                <QuickButtons isDecided={quick.num + 1 > quick.variant.length} setIsCorrect={setIsCorrect} />
            </>
        );
    }
};
