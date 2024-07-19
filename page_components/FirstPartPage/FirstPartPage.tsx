import styles from './FirstPartPage.module.css';
import { useRouter } from 'next/router';
import { useTelegram } from '../../layout/TelegramProvider';
import { useDispatch, useSelector } from 'react-redux';
import { BlocksList } from '../../components/BlocksComponents/BlocksList/BlocksList';
import { setLocale } from '../../helpers/locale.helper';
import { Htag } from '../../components/Common/Htag/Htag';
import { AppState } from '../../features/store/store';
import { setFirstPart } from '../../features/firstPart/firstPart';
import { SortBlock } from '../../components/BlocksComponents/SortBlock/SortBlock';
import { TaskBlock } from '../../components/BlocksComponents/TaskBlock/TaskBlock';
import { Button } from '../../components/Common/Button/Button';
import { TaskButtons } from '../../components/BlocksComponents/TaskButtons/TaskButtons';
import { useState } from 'react';


export const FirstPartPage = (): JSX.Element => {
    const router = useRouter();
    const dispatch = useDispatch();
    const { webApp } = useTelegram();

    const firstPart = useSelector((state: AppState) => state.firstPart.firstPart);

    if (webApp) {
        webApp?.BackButton.show();
  
        webApp?.BackButton.onClick(function() {
            router.push('/');
            
            dispatch(setFirstPart({
                blockId: '',
                isThemes: true,
                sortName: '',
            }));
        });
    }

    const taskTextHC = `Ниже приведён перечень терминов. Все они, за исключением двух, относятся к понятию «налоговая политика».

        \n1) доход, \n2) ставка, \n3) рынок, \n4) платежи, \n5) льготы, \n6) конкуренция.

        \nНайдите два термина, «выпадающих» из общего ряда, и запишите в таблицу цифры, под которыми они указаны.
        \nВведите ваш ответ:
    `;

    const faultText = `Пояснения: Для решения этого задания нужно определить, какие из приведённых терминов не относятся к понятию «налоговая политика». Налоговая политика включает в себя такие аспекты, как налогообложение, налоговые ставки, налоговые льготы и налоговые платежи.

        \nРассмотрим каждый из приведённых терминов:

        \n1. Доход — это денежные поступления, которые могут облагаться налогами. Это относится к налоговой политике.
        \n2. Ставка — это процентная величина налога, которая устанавливается государством. Это основной элемент налоговой политики.
        \n3. Рынок — это система экономических отношений, связанных с куплей-продажей товаров и услуг. Это не относится напрямую к налоговой политике.
        \n4. Платежи — это денежные суммы, которые уплачиваются в качестве налогов. Это относится к налоговой политике.
        \n5. Льготы — это снижение налогового бремени для определённых категорий налогоплательщиков. Это относится к налоговой политике.
        \n6. Конкуренция — это соперничество между участниками рынка. Это экономический термин, который не относится напрямую к налоговой политике.

        \nТаким образом, термины, которые не относятся к понятию «налоговая политика», это:

        \n- Рынок (3)
        \n- Конкуренция (6)

        \nОтвет: в таблицу нужно записать цифры 3 и 6, так как именно эти термины "выпадают" из общего ряда, связанного с налоговой политикой.

        \nПравильный ответ на задание: 3, 6.
    `;

    const [isFault, setIsFault] = useState<boolean>(false);
    const [taskText, setTaskText] = useState<string>(taskTextHC);
    const [answer, setAnswer] = useState<string>('');

    const handleKeyPress = async (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && answer.trim() !== '') {
            setTaskText(faultText);
            setIsFault(true);
            setAnswer('');
        }
    };

    if (firstPart.blockId === '') {
        return (
            <div className={styles.wrapper}>
                <Htag tag='xl' className={styles.selectBlockTitle} onClick={() => {}}>
                    {setLocale(router.locale).select_block + ":"}
                </Htag>
                <BlocksList />
            </div>
        );
    } else if (firstPart.sortName === '') {
        return (
            <div className={styles.wrapper}>
                <SortBlock />
            </div>
        );
    } else {
        return (
            <div className={styles.wrapper}>
                <TaskBlock isFault={isFault} taskText={taskText} answer={answer} setAnswer={setAnswer} handleKeyPress={handleKeyPress} />
                <TaskButtons taskText={taskTextHC} setTaskText={setTaskText} setIsFault={setIsFault}/>
            </div>
        );
    }
};
