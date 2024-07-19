import styles from './TaskBlock.module.css';
import ReactMarkdown from 'react-markdown';
import { setLocale } from '../../../helpers/locale.helper';
import { useRouter } from 'next/router';
import { Htag } from '../../Common/Htag/Htag';
import { Input } from '../../Common/Input/Input';
import { useState } from 'react';
import { useTelegram } from '../../../layout/TelegramProvider';



export const TaskBlock = (): JSX.Element => {
    const router = useRouter();
    const { webApp } = useTelegram();
    
    const [answer, setAnswer] = useState<string>('');

    const taskText = `Ниже приведён перечень действий. Все они, за исключением двух, относятся к теоретическому уровню научного познания.
        \n1) объяснение полученных данных;
        \n2) запись показаний приборов;
        \n3) выдвижение гипотез;
        \n4) проведение эксперимента;  
        \n5) построение системы аргументов;  
        \n6) разработка концепции.

        \nНайдите два действия, которые «выпадают» из общего ряда, и запишите в таблицу цифры, под которыми они указаны.
        \nВведите ваш ответ:
    `;

    const handleKeyPress = async (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && answer.trim() !== '') {
            webApp?.showAlert(answer);
            setAnswer('');
        }
    };

    return (
        <div className={styles.taskBlock}>
            <Htag tag='xl' className={styles.taskTitle} onClick={() => {}}>
                {setLocale(router.locale).task + ":"}
            </Htag>
            <ReactMarkdown className={styles.taskText}>
                {taskText}
			</ReactMarkdown>
            <Input text={setLocale(router.locale).enter_answer} value={answer}
                onChange={(e) => setAnswer(e.target.value)} onKeyPress={handleKeyPress} />
        </div>
    );
};
