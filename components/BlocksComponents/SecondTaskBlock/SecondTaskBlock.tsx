import styles from './SecondTaskBlock.module.css';
import ReactMarkdown from 'react-markdown';
import { setLocale } from '../../../helpers/locale.helper';
import { Htag } from '../../Common/Htag/Htag';
import { Input } from '../../Common/Input/Input';
import { useEffect, useState } from 'react';
import { Spinner } from '../../Common/Spinner/Spinner';
import { Icon } from '../../Common/Icon/Icon';
import { CorrectButtons } from '../CorrectButtons/CorrectButtons';
import { useSetup } from '../../../hooks/useSetup';
import { useHelpStates } from '../../../hooks/useHelpStates';
import { checkSecondAnswer, getSecondTask } from '../../../helpers/secondPart.helper';
import { Button } from '../../Common/Button/Button';
import { setSecondPartDefault } from '../../../features/secondPart/secondPartSlice';


export const SecondTaskBlock = (): JSX.Element => {
    const { router, tgUser, secondPart } = useSetup();

    const { secondTask, isCorrect, isDecided, answer, setSecondTask, setIsCorrect, setIsDecided, setAnswer } = useHelpStates();
    const [taskId, setTaskId] = useState<string>('');

    useEffect(() => {
        getSecondTask(secondPart.blockId, secondPart.typeId, tgUser?.id, setSecondTask, setIsDecided, setTaskId);
    }, [secondPart, tgUser, setIsDecided, setSecondTask]);

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && tgUser && secondTask) {
            checkSecondAnswer(secondPart, tgUser.id, secondTask.task_id, answer,
                setAnswer, setIsCorrect, setSecondTask, setIsDecided);
        }
    };

    if (!secondTask && !isDecided) {
        return <Spinner />
    }

    if (secondTask && !isCorrect && !isDecided) {
        return (
            <>
                <div className={styles.secondTaskBlock}>
                    <Htag tag='xl' className={styles.secondTaskTitle} onClick={() => {}}>
                        {setLocale(router.locale).task + ":"}
                    </Htag>
                    <ReactMarkdown className={styles.secondTaskText}>
                        {secondTask.text}
                    </ReactMarkdown>
                    <Input text={setLocale(router.locale).enter_answer} value={answer}
                        onChange={(e) => setAnswer(e.target.value)} onKeyPress={handleKeyPress} />
                </div>
                <div className={styles.secondButtonDiv}>
                    <Button icon='sunglasses_emoji.webp' text={setLocale(router.locale).submit_answer}
                        description={setLocale(router.locale).click_to_submit_answer}
                        onClick={() => checkSecondAnswer(secondPart, tgUser?.id, secondTask.task_id, answer,
                            setAnswer, setIsCorrect, setSecondTask, setIsDecided)} />
                </div>
            </>
        );
    } else if (secondTask) {
        return (
            <>
                <div className={styles.secondTaskBlock}>
                    <Htag tag='xl' className={styles.secondTaskTitle} onClick={() => {}}>
                        {setLocale(router.locale)[!isDecided ? 'answer_recorded' : 'variant_completed']
                            .replace('$$$', taskId)}
                    </Htag>
                    <Icon icon='popper_emoji.webp' />
                </div>
                <CorrectButtons isDecided={isDecided} taskId={secondTask.task_id}
                    setIsCorrect={setIsCorrect} setPartDefault={setSecondPartDefault} setTaskId={setTaskId} />
            </>
        );
    } else {
        return <></>
    }
};
