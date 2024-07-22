import styles from './SecondPartPage.module.css';
import { useRouter } from 'next/router';
import { useTelegram } from '../../layout/TelegramProvider';
import { useDispatch, useSelector } from 'react-redux';
import { BlocksList } from '../../components/BlocksComponents/BlocksList/BlocksList';
import { setLocale } from '../../helpers/locale.helper';
import { Htag } from '../../components/Common/Htag/Htag';
import { AppState } from '../../features/store/store';
import { SortBlock } from '../../components/BlocksComponents/SortBlock/SortBlock';
import { TaskBlock } from '../../components/BlocksComponents/TaskBlock/TaskBlock';
import { useState } from 'react';
import { chooseSecondBlockId, chooseType, setsecondPart } from '../../features/secondPart/secondPartSlice';
import { QuickButtons } from '../../components/BlocksComponents/QuickButtons/QuickButtons';


export const SecondPartPage = (): JSX.Element => {
    const router = useRouter();
    const dispatch = useDispatch();
    const { webApp } = useTelegram();

    const secondPart = useSelector((state: AppState) => state.secondPart.secondPart);

    if (webApp) {
        webApp?.BackButton.show();
  
        webApp?.BackButton.onClick(function() {
            router.push('/');
            
            dispatch(setsecondPart({
                blockId: '',
                type: '',
            }));
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

    if (secondPart.blockId === '') {
        return (
            <div className={styles.wrapper}>
                <Htag tag='xl' className={styles.selectBlockTitle}>
                    {setLocale(router.locale).select_block + ":"}
                </Htag>
                <BlocksList chooseBlockId={chooseSecondBlockId} />
            </div>
        );
    } else if (secondPart.type === '') {
        return (
            <div className={styles.wrapper}>
                <SortBlock chooseSortName={chooseType} />
            </div>
        );
    } else {
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
    }
};
