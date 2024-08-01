import styles from './ProfileButtons.module.css';
import { Button } from '../../Common/Button/Button';
import { setLocale } from '../../../helpers/locale.helper';
import { subscribe } from '../../../helpers/subscription.helper';
import { useSetup } from '../../../hooks/useSetup';


export const ProfileButtons = (): JSX.Element => { 
    const { router, dispatch, webApp, tgUser, user } = useSetup();

    const price = 200;
    const tasksCount = 607;
    const solvedCount = 1;
    const pointsCount = 0;
    
    if (user.privileges !== "paid_user") {
        return (
            <div className={styles.profileButtons}>
                <Button icon='clover_emoji.webp' text={setLocale(router.locale).activate_for_free}
                    description={setLocale(router.locale).demo_one_week}
                    onClick={() => subscribe(tgUser?.id, setLocale(router.locale).activate_subscription + '?', webApp, dispatch)} />
                <Button icon='money_emoji.webp' text={setLocale(router.locale).subscribe_to_paid_content}
                    description={price + ' ' + setLocale(router.locale).rubles_week}
                    onClick={() => {}} />
                <Button icon='point_emoji.webp' text={setLocale(router.locale).statistics}
                    description={setLocale(router.locale).first_part_tasks}
                    onClick={() => router.push('/statistics1')} />
            </div>
        );
    } else {
        return (
            <div className={styles.profileButtons}>
                <Button icon='point_emoji.webp' text={setLocale(router.locale).statistics}
                    description={setLocale(router.locale).first_part_tasks}
                    onClick={() => router.push('/statistics1')} />
                <Button icon='victory_emoji.webp' text={setLocale(router.locale).statistics}
                    description={setLocale(router.locale).second_part_tasks}
                    onClick={() => webApp?.showPopup({ title: `${setLocale(router.locale).statistics} ${setLocale(router.locale).second_part_tasks.toLowerCase()}`,
                        message: `${setLocale(router.locale).tasks_solved}: ${solvedCount} ${setLocale(router.locale).of} ${tasksCount} ${setLocale(router.locale).points_gained}: ${pointsCount}`})} />
                <Button icon='cross_emoji.webp' text={setLocale(router.locale).cancel_subscription}
                    description={setLocale(router.locale).subscription_canceled_instantly}
                    onClick={() => {}} />
            </div>
        );
    }
};
