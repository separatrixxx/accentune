import styles from './MainButtons.module.css';
import { Button } from '../../Common/Button/Button';
import { useRouter } from 'next/router';
import { setLocale } from '../../../helpers/locale.helper';
import { useSelector } from 'react-redux';
import { AppState } from '../../../features/store/store';
import { useTelegram } from '../../../layout/TelegramProvider';


export const MainButtons = (): JSX.Element => { 
    const router = useRouter();
    const { webApp } = useTelegram();

    const user = useSelector((state: AppState) => state.user.user);

    if (!user.isSubscriptionActive) {
        return (
            <div className={styles.mainButtons}>
                <Button icon='memo_emoji.webp' text={setLocale(router.locale).check_yourself}
                    description={setLocale(router.locale).first_part}
                    onClick={() => router.push('/part1')} />
                <Button icon='memo_emoji.webp' text={setLocale(router.locale).quick_variant}
                    description={setLocale(router.locale).random_tasks}
                    onClick={() => {}} />
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
