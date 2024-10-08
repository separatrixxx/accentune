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
import { CheckQuickArguments } from '../../../interfaces/refactor.interface';
import { useHelpStates } from '../../../hooks/useHelpStates';
import Image from 'next/image';


export const QuickBlock = (): JSX.Element => {
    const { router, dispatch, webApp, tgUser, quick, subject } = useSetup();
    const { answer, isCorrect, setAnswer, setIsCorrect } = useHelpStates();

    useEffect(() => {
        getQuickVariant({
            userId: tgUser?.id,
            webApp: webApp,
            subject: subject,
            router: router,
            dispatch: dispatch,
        });
    }, [router, webApp, tgUser, subject, dispatch]);

    const checkQuickAnswerArgs: CheckQuickArguments = {
        answer: answer,
        setAnswer: setAnswer,
        setIsCorrect: setIsCorrect,
        quick: quick,
        dispatch: dispatch,
    };

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            checkQuickAnswer(checkQuickAnswerArgs);
        }
    };

    if (quick.variant.length === 0) {
        return <Spinner />
    }

    if (!isCorrect && quick.num + 1 <= quick.variant.length) {
        return (
            <>
                <div className={styles.quickBlock}>
                    <Htag tag='xl' className={styles.quickTaskTitle} onClick={() => { }}>
                        {setLocale(router.locale).task + ' ' + (quick.num + 1) + ":"}
                    </Htag>
                    <ReactMarkdown className={styles.quickTaskText}>
                        {quick.variant[quick.num].text}
                    </ReactMarkdown>
                    {
                        quick.variant[quick.num].photo_url ? (
                            <Image
                                className={styles.taskImage}
                                draggable='false'
                                loader={() => quick.variant[quick.num].photo_url || ''}
                                src={quick.variant[quick.num].photo_url || ''}
                                alt='task image'
                                width={1}
                                height={1}
                                unoptimized={true}
                            />
                        ) : <></>
                    }
                    <Input text={setLocale(router.locale).enter_answer} value={answer}
                        onChange={(e) => setAnswer(e.target.value)} onKeyPress={handleKeyPress} />
                </div>
                <div className={styles.quickButtonDiv}>
                    <Button icon='sunglasses_emoji.webp' text={setLocale(router.locale).submit_answer}
                        description={setLocale(router.locale).click_to_submit_answer}
                        onClick={() => checkQuickAnswer(checkQuickAnswerArgs)} />
                </div>
            </>
        );
    } else {
        return (
            <>
                <div className={styles.quickBlock}>
                    <Htag tag='xl' className={styles.quickTaskTitle} onClick={() => { }}>
                        {setLocale(router.locale)[quick.num + 1 <= quick.variant.length ? 'answer_recorded' : 'variant_completed']
                            .replace('$$$', quick.variant[quick.num - 1].task_id)}
                    </Htag>
                    <Icon icon='popper_emoji.webp' />
                </div>
                <QuickButtons isDecided={quick.num + 1 > quick.variant.length} setIsCorrect={setIsCorrect} />
            </>
        );
    }
};
