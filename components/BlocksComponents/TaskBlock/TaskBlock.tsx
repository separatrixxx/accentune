import styles from './TaskBlock.module.css';
import ReactMarkdown from 'react-markdown';
import { setLocale } from '../../../helpers/locale.helper';
import { Htag } from '../../Common/Htag/Htag';
import { Input } from '../../Common/Input/Input';
import { TaskButtons } from '../TaskButtons/TaskButtons';
import { useEffect } from 'react';
import { checkAnswer, getFirstTask } from '../../../helpers/firstPart.helper';
import { Spinner } from '../../Common/Spinner/Spinner';
import { Icon } from '../../Common/Icon/Icon';
import { CorrectButtons } from '../CorrectButtons/CorrectButtons';
import { useSetup } from '../../../hooks/useSetup';
import { useHelpStates } from '../../../hooks/useHelpStates';
import { setFirstPartDefault } from '../../../features/firstPart/firstPartSlice';
import { CheckFirstAnswerArguments } from '../../../interfaces/refactor.interface';
import Image from 'next/image';


export const TaskBlock = (): JSX.Element => {
    const { router, webApp, tgUser, firstPart, subject } = useSetup();

    const { firstTask, isCorrect, isDecided, isFault, answer,
        setFirstTask, setIsCorrect, setIsDecided, setIsFault, setAnswer } = useHelpStates();

    useEffect(() => {
        getFirstTask({
            userId: tgUser?.id,
            webApp: webApp,
            subject: subject,
            router: router,
            blockId: firstPart.blockId,
            sortId: firstPart.sortId,
            isTheme: firstPart.isThemes,
            setIsDecided: setIsDecided,
            setFirstTask: setFirstTask,
        });
    }, [router, firstPart, webApp, tgUser, subject, setIsDecided, setFirstTask]);

    const checkAnswerArgs: CheckFirstAnswerArguments = {
        userId: tgUser?.id,
        webApp: webApp,
        subject: subject,
        router: router,
        answer: answer,
        task: firstTask,
        firstPart: firstPart,
        setAnswer: setAnswer,
        setFirstTask: setFirstTask,
        setIsFault: setIsFault,
        setIsCorrect: setIsCorrect,
        setIsDecided: setIsDecided,
    };

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && answer.trim() !== '' && tgUser && firstTask) {
            checkAnswer(checkAnswerArgs);
        }
    };
    console.log(firstTask?.answer)

    if (!firstTask && !isDecided) {
        return <Spinner />
    }

    if (firstTask && !isCorrect && !isDecided) {
        return (
            <>
                <div className={styles.taskBlock}>
                    <Htag tag='xl' className={styles.taskTitle} onClick={() => { }}>
                        {setLocale(router.locale)[!isFault ? 'task' : 'wrong_answer']}
                    </Htag>
                    <ReactMarkdown className={styles.taskText}>
                        {!isFault ? firstTask.text :
                            setLocale(router.locale).explanation + ': ' + firstTask.explanations}
                    </ReactMarkdown>
                    {
                        firstTask.photo_url ?
                            <Image className={styles.taskImage} draggable='false'
                                loader={() => firstTask.photo_url || ''}
                                src={firstTask.photo_url}
                                alt='task image'
                                width={1}
                                height={1}
                                unoptimized={true}
                            />
                            : <></>
                    }
                    {
                        !isFault ?
                            <Input text={setLocale(router.locale).enter_answer} value={answer}
                                onChange={(e) => setAnswer(e.target.value)} onKeyPress={handleKeyPress} />
                            : <></>
                    }
                </div>
                <TaskButtons checkAnswerArgs={checkAnswerArgs} isFault={isFault}
                    setTask={setFirstTask} />
            </>
        );
    } else {
        return (
            <>
                <div className={styles.taskBlock}>
                    <Htag tag='xl' className={styles.taskTitle}>
                        {!isDecided ? setLocale(router.locale).correct_answer : setLocale(router.locale).all_tasks_completed}
                    </Htag>
                    {
                        !isDecided && firstTask ?
                            <Htag tag='s' className={styles.taskDescription}>
                                {setLocale(router.locale).you_better_than
                                    .replace('$$$', String(100 - firstTask.acceptance_rate))}
                            </Htag>
                        : <></>
                    }
                    <Icon icon='popper_emoji.webp' />
                </div>
                <CorrectButtons isDecided={isDecided} setIsCorrect={setIsCorrect} setPartDefault={setFirstPartDefault} />
            </>
        );
    }
};
