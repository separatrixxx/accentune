import { TaskBlockProps } from './TaskBlock.props';
import styles from './TaskBlock.module.css';
import ReactMarkdown from 'react-markdown';
import { setLocale } from '../../../helpers/locale.helper';
import { useRouter } from 'next/router';
import { Htag } from '../../Common/Htag/Htag';
import { Input } from '../../Common/Input/Input';


export const TaskBlock = ({ isFault, taskText, answer, setAnswer, handleKeyPress }: TaskBlockProps): JSX.Element => {
    const router = useRouter();

    return (
        <div className={styles.taskBlock}>
            <Htag tag='xl' className={styles.taskTitle} onClick={() => {}}>
                {!isFault ? setLocale(router.locale).task + ":" : setLocale(router.locale).wrong_answer + ":"}
            </Htag>
            <ReactMarkdown className={styles.taskText}>
                {taskText}
			</ReactMarkdown>
            {
                !isFault ?
                    <Input text={setLocale(router.locale).enter_answer} value={answer}
                        onChange={(e) => setAnswer(e.target.value)} onKeyPress={handleKeyPress} />
                : <></>
            }
        </div>
    );
};
