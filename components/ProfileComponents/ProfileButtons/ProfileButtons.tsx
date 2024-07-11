import styles from './ProfileButtons.module.css';
import { Button } from '../../Common/Button/Button';
import { useTelegram } from '../../../layout/TelegramProvider';
import { useRouter } from 'next/router';
import { setLocale } from '../../../helpers/locale.helper';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../../../features/store/store';
import { subscribe } from '../../../helpers/subscription.helper';


export const ProfileButtons = (): JSX.Element => { 
    const router = useRouter();
    const dispatch = useDispatch();
    const { webApp } = useTelegram();

    const user = useSelector((state: AppState) => state.user.user);

    const price = 200;
    const tasksCount = 607;
    const solvedCount = 1;
    const pointsCount = 0;
    
    if (!user.isSubscriptionActive) {
        return (
            <div className={styles.profileButtons}>
                <Button icon='clover_emoji.webp' text={setLocale(router.locale).activate_for_free}
                    description={setLocale(router.locale).demo_one_week}
                    onClick={() => subscribe(setLocale(router.locale).activate_subscription + '?', webApp, dispatch)} />
                <Button icon='money_emoji.webp' text={setLocale(router.locale).subscribe_to_paid_content}
                    description={price + ' ' + setLocale(router.locale).rubles_week}
                    onClick={() => subscribe(setLocale(router.locale).subscribe_to_paid_content + '?', webApp, dispatch)} />
                <Button icon='point_emoji.webp' text={setLocale(router.locale).statistics}
                    description={setLocale(router.locale).first_part_tasks}
                    onClick={() => webApp?.showPopup({ title: `${setLocale(router.locale).statistics}
                        ${setLocale(router.locale).first_part_tasks.toLowerCase()}`,
                        message: `${setLocale(router.locale).tasks_solved}: ${solvedCount} ${setLocale(router.locale).of}
                        ${tasksCount} ${setLocale(router.locale).points_gained}: ${pointsCount}`})} />
            </div>
        );
    } else {
        return (
            <div className={styles.profileButtons}>
                <Button icon='point_emoji.webp' text={setLocale(router.locale).statistics}
                    description={setLocale(router.locale).first_part_tasks}
                    onClick={() => webApp?.showPopup({ title: `${setLocale(router.locale).statistics}
                        ${setLocale(router.locale).first_part_tasks.toLowerCase()}`,
                        message: `${setLocale(router.locale).tasks_solved}: ${solvedCount} ${setLocale(router.locale).of}
                        ${tasksCount} ${setLocale(router.locale).points_gained}: ${pointsCount}`})} />
                <Button icon='victory_emoji.webp' text={setLocale(router.locale).statistics}
                    description={setLocale(router.locale).second_part_tasks}
                    onClick={() => webApp?.showPopup({ title: `${setLocale(router.locale).statistics}
                        ${setLocale(router.locale).second_part_tasks.toLowerCase()}`,
                        message: `${setLocale(router.locale).tasks_solved}: ${solvedCount} ${setLocale(router.locale).of}
                        ${tasksCount} ${setLocale(router.locale).points_gained}: ${pointsCount}`})} />
                <Button icon='cross_emoji.webp' text={setLocale(router.locale).cancel_subscription}
                    description={setLocale(router.locale).subscription_canceled_instantly}
                    onClick={() => subscribe(setLocale(router.locale).cancel_subscription + '?', webApp, dispatch)} />
            </div>
        );
    }
};
