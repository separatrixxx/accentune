import styles from './QuickButtons.module.css';
import { Button } from '../../Common/Button/Button';
import { setLocale } from '../../../helpers/locale.helper';
import { useRouter } from 'next/router';


export const QuickButtons = (): JSX.Element => {
    const router = useRouter();

    return (
        <div className={styles.quickButtons}>
            <Button icon='partying_emoji.webp' text={setLocale(router.locale).next_task}
                description={setLocale(router.locale).move_next_task} onClick={() => {}}/>
            <Button icon='downcast_emoji.webp' text={setLocale(router.locale).complete_test}
                description={setLocale(router.locale).answers_will_saved} onClick={() => {}}/>
        </div>
    );
};
