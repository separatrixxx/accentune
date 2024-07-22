import styles from './QuickPage.module.css';
import { useRouter } from 'next/router';
import { useTelegram } from '../../layout/TelegramProvider';
import { useDispatch, useSelector } from 'react-redux';
import { setLocale } from '../../helpers/locale.helper';
import { Htag } from '../../components/Common/Htag/Htag';
import { AppState } from '../../features/store/store';
import { TaskBlock } from '../../components/BlocksComponents/TaskBlock/TaskBlock';
import { useState } from 'react';
import { setQuick } from '../../features/quick/quickSlice';
import { QuickButtons } from '../../components/BlocksComponents/QuickButtons/QuickButtons';
import { Button } from '../../components/Common/Button/Button';


export const QuickPage = (): JSX.Element => {
    const router = useRouter();
    const dispatch = useDispatch();
    const { webApp } = useTelegram();

    const quick = useSelector((state: AppState) => state.quick.quick);

    if (webApp) {
        webApp?.BackButton.show();
  
        webApp?.BackButton.onClick(function() {
            router.push('/');

            dispatch(setQuick({ type: '' }))
        });
    }

    const taskTextHC = `Ниже приведён перечень терминов. Все они, за исключением двух, относятся к понятию «налоговая политика».

        \n1) доход, \n2) ставка, \n3) рынок, \n4) платежи, \n5) льготы, \n6) конкуренция.

        \nНайдите два термина, «выпадающих» из общего ряда, и запишите в таблицу цифры, под которыми они указаны.
        \nВведите ваш ответ:
    `;

    const [answer, setAnswer] = useState<string>('');
    const [isButtons, setIsButtons] = useState<boolean>(false);

    const handleKeyPress = async (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && answer.trim() !== '') {
            setIsButtons(true);
        }
    };

    if (quick.type === '') {
        return (
            <div className={styles.wrapper}>
                <Htag tag='xl' className={styles.selectBlockTitle}>
                    {setLocale(router.locale).what_you_want + "?"}
                </Htag>
                <div className={styles.typeDiv}>
                    <Button text={setLocale(router.locale).view_resolved_variants}
                        onClick={() => dispatch(setQuick({ type: 'view' }))}/>
                    <Button text={setLocale(router.locale).solve_variant}
                        onClick={() => dispatch(setQuick({ type: 'solve' }))}/>
                </div>
            </div>
        );
    } else if (quick.type === 'solve') {
        return (
            <div className={styles.wrapper}>
                <TaskBlock taskText={taskTextHC} answer={answer} setAnswer={setAnswer} handleKeyPress={handleKeyPress} />
                {
                    isButtons ?
                        <QuickButtons />
                    : <></>
                }
            </div>
        );
    } else {
        return (
            <div className={styles.wrapper}>
            </div>
        );
    }
};
