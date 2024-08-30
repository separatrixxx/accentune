import { TaskButtonsProps } from './TaskButtons.props';
import styles from './TaskButtons.module.css';
import { Button } from '../../Common/Button/Button';
import { setLocale } from '../../../helpers/locale.helper';
import { checkAnswer, nextTask } from '../../../helpers/firstPart.helper';
import { useSetup } from '../../../hooks/useSetup';


export const TaskButtons = ({ checkAnswerArgs, isFault, setTask }: TaskButtonsProps): JSX.Element => {
    const { router, webApp, tgUser, firstPart, subject } = useSetup();

    return (
        <div className={styles.taskButtons}>
            {
                !isFault ?
                    <Button icon='sunglasses_emoji.webp' text={setLocale(router.locale).submit_answer}
                        description={setLocale(router.locale).click_to_submit_answer}
                        onClick={() => checkAnswer(checkAnswerArgs)} />
                :
                    <Button icon='downcast_emoji.webp' text={setLocale(router.locale).try_one_more}
                        description={setLocale(router.locale).change_your_answer} onClick={() => {
                            checkAnswerArgs.setIsFault(false);
                        }} />
            }
            <Button icon='partying_emoji.webp' text={setLocale(router.locale).next_task}
                description={setLocale(router.locale).move_next_task}
                onClick={() => nextTask({
                    userId: tgUser?.id,
                    webApp: webApp,
                    subject: subject,
                    router: router,
                    firstPart: firstPart,
                    setAnswer: checkAnswerArgs.setAnswer,
                    setIsFault: checkAnswerArgs.setIsFault,
                    setIsDecided: checkAnswerArgs.setIsDecided,
                    setTask,
                })} />
        </div>
    );
};
