import { SortBlockProps } from './SortBlock.props';
import styles from './SortBlock.module.css';
import { Button } from '../../Common/Button/Button';
import { useDispatch } from 'react-redux';
import { setLocale } from '../../../helpers/locale.helper';
import { useRouter } from 'next/router';
import { toggleTheme } from '../../../features/firstPart/firstPartSlice';


export const SortBlock = ({ firstPart, chooseSortName }: SortBlockProps): JSX.Element => {
    const router = useRouter();
    const dispatch = useDispatch();

    const themes = ["1.1. Человек как результат биологической и социокультурной эволюции. Влияние социокультурных факторов на формирование личности",
        "1.2. Мировоззрение, его роль в жизнедеятельности человека. Общественное и индивидуальное сознание. Самосознание и социальное поведение",
        "1.3. Деятельность и её структура. Мотивация деятельности. Многообразие видов деятельности. Свобода и необходимость в деятельности",
        "1.4. Познание мира. Чувственное и рациональное познание. Мышление, его формы и методы. Знание как результат познавательной деятельности",
        "1.5. Понятие истины, её критерии. Абсолютная, относительная истина"
    ];

    const tasksType = ["Задачи типа 1", "Задачи типа 5", "Задачи типа 6", "Задачи типа 7"];

    return (
        <div className={styles.sortBlock}>
            {
                firstPart ?
                    <div className={styles.sortToggleDiv}>
                        <Button text={setLocale(router.locale).by_themes} isActive={firstPart.isThemes}
                            onClick={() => dispatch(toggleTheme())}/>
                        <Button text={setLocale(router.locale).by_tasks} isActive={!firstPart.isThemes}
                            onClick={() => dispatch(toggleTheme())}/>
                    </div>
                : <></>
            }
            {
                firstPart && firstPart.isThemes ?
                    themes.map(t => (
                        <Button key={t} description={t} onClick={() => dispatch(chooseSortName(t))}/>
                    ))
                :
                    tasksType.map(t=> (
                        <Button key={t} description={t} onClick={() => dispatch(chooseSortName(t))}/>
                    ))
            }
        </div>
    );
};
