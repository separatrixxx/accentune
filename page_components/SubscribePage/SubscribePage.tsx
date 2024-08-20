import styles from './SubscribePage.module.css';
import { useSetup } from '../../hooks/useSetup';
import { Spinner } from '../../components/Common/Spinner/Spinner';
import { Button } from '../../components/Common/Button/Button';
import { setLocale } from '../../helpers/locale.helper';
import { setSubscribeDefault } from '../../features/subscribe/subscribeSlice';
import { createPretransaction } from '../../helpers/subscription.helper';


export const SubscribePage = (): JSX.Element => {
    const { router, dispatch, webApp, tgUser, user, subscribe } = useSetup();

    if (webApp) {
        webApp?.BackButton.hide();
        webApp?.BackButton.show();

        webApp?.BackButton.onClick(function() {
            dispatch(setSubscribeDefault());
            router.push('/profile');

            webApp?.BackButton.hide();
        });
    }

    if (subscribe.status === -1) {
        return (
        <div className={styles.subscribeButtons}>
            <Spinner />
        </div>
        );
    }

    return (
        <div className={styles.subscribeButtons}>
            {subscribe.multiplayer.concat(subscribe.group).map(s => (
                <Button key={s.id} text={s.name}
                    description={setLocale(router.locale).rubles_for_days
                        .replace('$$$', String(s.amount / 100))
                        .replace('###', String(s.duration))
                    }
                    onClick={() => createPretransaction({
                        webApp: webApp,
                        userId: tgUser?.id,
                        subscribe: s, 
                        email: user?.email,
                        router: router,
                        dispatch: dispatch
                    })} />
            ))}
        </div>
    );
};
