import styles from './ProfileButtons.module.css';
import { Button } from '../../Common/Button/Button';
import { setLocale } from '../../../helpers/locale.helper';
import { demoSubscribe } from '../../../helpers/subscription.helper';
import { useSetup } from '../../../hooks/useSetup';


export const ProfileButtons = (): JSX.Element => { 
    const { router, dispatch, webApp, tgUser, user } = useSetup();

    const price = 350;
    
    if (user.privileges !== "paid_user") {
        return (
            <div className={styles.profileButtons}>
                <Button icon='clover_emoji.webp' text={setLocale(router.locale).activate_for_free}
                    description={setLocale(router.locale).demo_one_week}
                    onClick={() => demoSubscribe(tgUser?.id, setLocale(router.locale).activate_subscription + '?', webApp, dispatch)} />
                <Button icon='money_emoji.webp' text={setLocale(router.locale).subscribe_to_paid_content}
                    description={setLocale(router.locale).from + ' ' + price + ' ' + setLocale(router.locale).rubles_week}
                    onClick={() => router.push('/subscribe')} />
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
                    onClick={() => router.push('/statistics2')} />
                <Button icon='cross_emoji.webp' text={setLocale(router.locale).cancel_subscription}
                    description={setLocale(router.locale).subscription_canceled_instantly}
                    onClick={() => {}} />
            </div>
        );
    }
};
