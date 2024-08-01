import { TaskButtonsProps } from './TaskButtons.props';
import styles from './TaskButtons.module.css';
import { Button } from '../../Common/Button/Button';
import { useRouter } from 'next/router';
import { setLocale } from '../../../helpers/locale.helper';
import { checkAnswer, nextTask } from '../../../helpers/firstPart.helper';


export const TaskButtons = ({ answer, task, firstPart, userId, isFault, setAnswer, setTask, setIsFault,
    setIsCorrect, setIsDecided }: TaskButtonsProps): JSX.Element => {
    const router = useRouter();

    return (
        <div className={styles.taskButtons}>
            {
                !isFault ?
                    <Button icon='sunglasses_emoji.webp' text={setLocale(router.locale).submit_answer}
                        description={setLocale(router.locale).click_to_submit_answer}
                        onClick={() => checkAnswer(answer, task, firstPart, userId, setAnswer,
                            setTask, setIsFault, setIsCorrect, setIsDecided)} />
                :
                    <Button icon='downcast_emoji.webp' text={setLocale(router.locale).try_one_more}
                        description={setLocale(router.locale).change_your_answer} onClick={() => {
                            setIsFault(false);
                        }} />
            }
            <Button icon='partying_emoji.webp' text={setLocale(router.locale).next_task}
                description={setLocale(router.locale).move_next_task}
                onClick={() => nextTask(firstPart, userId, setAnswer, setTask, setIsFault, setIsDecided)} />
        </div>
    );
};
