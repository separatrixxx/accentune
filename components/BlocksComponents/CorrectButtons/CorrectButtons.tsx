import { CorrectButtonsProps } from './CorrectButtons.props';
import styles from './CorrectButtons.module.css';
import { Button } from '../../Common/Button/Button';
import { setLocale } from '../../../helpers/locale.helper';
import { useSetup } from '../../../hooks/useSetup';


export const CorrectButtons = ({ isDecided, setIsCorrect, setPartDefault }: CorrectButtonsProps): JSX.Element => {
    const { router, dispatch } = useSetup();

    return (
        <div className={styles.correctButtons}>
            {
                !isDecided ?
                    <Button icon='partying_emoji.webp' text={setLocale(router.locale).next_task}
                        description={setLocale(router.locale).move_next_task} onClick={() => setIsCorrect(false)} />
                : <></>
            }
            <Button icon='sunglasses_emoji.webp' text={setLocale(router.locale).select_block}
                    description={setLocale(router.locale).you_will_return} onClick={() => {
                        dispatch(setPartDefault());
                    }} />
        </div>
    );
};
