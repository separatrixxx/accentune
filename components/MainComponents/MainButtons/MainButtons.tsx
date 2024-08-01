import styles from './MainButtons.module.css';
import { Button } from '../../Common/Button/Button';
import { setLocale } from '../../../helpers/locale.helper';
import { useSetup } from '../../../hooks/useSetup';


export const MainButtons = (): JSX.Element => { 
    const { router, webApp, user } = useSetup();

    if (user.privileges !== "paid_user") {
        return (
            <div className={styles.mainButtons}>
                <Button icon='memo_emoji.webp' text={setLocale(router.locale).check_yourself}
                    description={setLocale(router.locale).first_part}
                    onClick={() => router.push('/part1')} />
                <Button icon='memo_emoji.webp' text={setLocale(router.locale).quick_variant}
                    description={setLocale(router.locale).random_tasks}
                    onClick={() => router.push('/quick')} />
                <Button icon='lock_emoji.webp' text={setLocale(router.locale).check_yourself}
                    description={setLocale(router.locale).second_part}
                    onClick={() => webApp?.showAlert(setLocale(router.locale).subscribe_to_access)} />
                <Button icon='lock_emoji.webp' text={setLocale(router.locale).webinars}
                    description={setLocale(router.locale).available_by_subscription}
                    onClick={() => webApp?.showAlert(setLocale(router.locale).subscribe_to_access)} />
            </div>
        );
    } else {
        return (
            <div className={styles.mainButtons}>
                <Button icon='memo_emoji.webp' text={setLocale(router.locale).check_yourself}
                    description={setLocale(router.locale).first_part}
                    onClick={() => router.push('/part1')} />
                <Button icon='memo_emoji.webp' text={setLocale(router.locale).check_yourself}
                    description={setLocale(router.locale).second_part}
                    onClick={() => router.push('/part2')} />
                <Button icon='memo_emoji.webp' text={setLocale(router.locale).quick_variant}
                    description={setLocale(router.locale).random_tasks}
                    onClick={() => router.push('/quick')} />
                <Button icon='calendar_emoji.webp' text={setLocale(router.locale).webinars}
                    description={setLocale(router.locale).available_by_subscription}
                    onClick={() => router.push('/webinars')} />
            </div>
        );
    }
};
