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


export const FirstPartPage = (): JSX.Element => {
    const router = useRouter();
    const dispatch = useDispatch();
    const { webApp } = useTelegram();

    const firstPart = useSelector((state: AppState) => state.firstPart.firstPart);

    if (webApp) {
        webApp?.BackButton.show();
  
        webApp?.BackButton.onClick(function() {
            router.push('/');
            webApp?.BackButton.hide();
            
            dispatch(setFirstPart({
                blockId: '',
                isThemes: true,
                sortName: '',
            }));
        });
    }

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
                <TaskBlock />
                <TaskButtons />
            </div>
        );
    }
};
