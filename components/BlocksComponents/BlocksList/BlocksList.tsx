import styles from './BlocksList.module.css';
import { Button } from '../../Common/Button/Button';
import { useDispatch } from 'react-redux';
import { chooseBlockId } from '../../../features/firstPart/firstPart';


export const BlocksList = (): JSX.Element => {
    const dispatch = useDispatch();

    const blocks = ["Человек в обществе / Духовная культура / Введение в социальную психологию / Введение в социальную философию",
        "Экономическая жизнь общества / Введение в экономику", "Социальная сфера / Введение в социологию",
        "Политическая сфера / Введение в политологию",
        "Правовое регулирование общественных отношений в Российской Федерации / Введение в правоведение"];

    return (
        <div className={styles.blocksList}>
            {
                blocks.map(b => (
                    <Button key={b} description={b} onClick={() => dispatch(chooseBlockId(b))}/>
                ))
            }
        </div>
    );
};
