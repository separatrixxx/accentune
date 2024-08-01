import { QuickButtonsProps } from './QuickButtons.props';
import styles from './QuickButtons.module.css';
import { Button } from '../../Common/Button/Button';
import { setLocale } from '../../../helpers/locale.helper';
import { setQuickDefault } from '../../../features/quick/quickSlice';
import { sendQuickVariant } from '../../../helpers/quick.helper';
import { useSetup } from '../../../hooks/useSetup';


export const QuickButtons = ({ isDecided, setIsCorrect }: QuickButtonsProps): JSX.Element => {
    const { router, dispatch, tgUser, quick } = useSetup();

    return (
        <div className={styles.quickButtons}>
            {
                !isDecided ?
                    <Button icon='partying_emoji.webp' text={setLocale(router.locale).next_task}
                        description={setLocale(router.locale).move_next_task} onClick={() => setIsCorrect(false)} />
                : <></>
            }
            <Button icon={!isDecided ? 'downcast_emoji.webp' : 'sunglasses_emoji.webp'} text={setLocale(router.locale).complete_test}
                description={!isDecided ? setLocale(router.locale).answers_will_not_saved
                    : setLocale(router.locale).save_answers} onClick={() => {
                        if (isDecided && tgUser) {
                            sendQuickVariant(tgUser?.id, quick.solved);
                        }

                        dispatch(setQuickDefault());
                    }} />
        </div>
    );
};
