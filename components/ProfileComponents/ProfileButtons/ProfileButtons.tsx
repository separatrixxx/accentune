import styles from './ProfileButtons.module.css';
import { Button } from '../../Common/Button/Button';
import { setLocale } from '../../../helpers/locale.helper';
import { cancelSubscribe, demoSubscribe } from '../../../helpers/subscription.helper';
import { useSetup } from '../../../hooks/useSetup';
import { useState } from 'react';


export const ProfileButtons = (): JSX.Element => { 
    const { router, dispatch, webApp, tgUser, user } = useSetup();

    const [isLoading, setIsLoading] = useState<boolean>(false);

    const price = 350;
    
    if (user.privileges !== "paid_user") {
        return (
            <div className={styles.profileButtons}>
                <Button icon='clover_emoji.webp' text={setLocale(router.locale).activate_for_free}
                    description={setLocale(router.locale).demo_one_week} isLoading={isLoading}
                    onClick={() => demoSubscribe({
                        userId: tgUser?.id,
                        text: setLocale(router.locale).activate_subscription + '?',
                        webApp: webApp,
                        dispatch: dispatch,
                        setIsLoading: setIsLoading,
                    })} />
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
                    description={setLocale(router.locale).this_action_cannot_undone} isLoading={isLoading}
                    onClick={() => cancelSubscribe({
                        userId: tgUser?.id,
                        text: setLocale(router.locale).activate_subscription + '?',
                        webApp: webApp,
                        router: router,
                        dispatch: dispatch,
                        setIsLoading: setIsLoading,
                    })} />
            </div>
        );
    }
};
