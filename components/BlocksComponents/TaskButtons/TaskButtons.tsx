import styles from './TaskButtons.module.css';
import { Button } from '../../Common/Button/Button';
import { useRouter } from 'next/router';
import { setLocale } from '../../../helpers/locale.helper';


export const TaskButtons = (): JSX.Element => {
    const router = useRouter();

    return (
        <div className={styles.taskButtons}>
            <Button icon='downcast_emoji.webp' text={setLocale(router.locale).try_one_more}
                description={setLocale(router.locale).change_your_answer} onClick={() => {}} />
            <Button icon='partying_emoji.webp' text={setLocale(router.locale).next_task}
                description={setLocale(router.locale).move_next_task} onClick={() => {}} />
        </div>
    );
};
