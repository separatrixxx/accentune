import styles from './SchedulePage.module.css';
import { useSetup } from '../../hooks/useSetup';
import { useEffect, useState } from 'react';
import { getUserWebinars } from '../../helpers/webinars.helper';
import { setUserWebinarsDefault } from '../../features/userWebinars/userWebinarsSlice';
import { setLocale } from '../../helpers/locale.helper';
import { Spinner } from '../../components/Common/Spinner/Spinner';
import { ScheduleList } from '../../components/ScheduleComponents/ScheduleList/ScheduleList';
import { ScheduleItem } from '../../components/ScheduleComponents/ScheduleItem/ScheduleItem';


export const SchedulePage = (): JSX.Element => {
    const { router, dispatch, webApp, tgUser, userWebinars } = useSetup();

    if (webApp) {
        webApp?.BackButton.hide();
        webApp?.BackButton.show();

        webApp?.BackButton.onClick(function() {
            router.push('/webinars');
            dispatch(setUserWebinarsDefault());

            webApp?.BackButton.hide();
        });
    }

    useEffect(() => {
        getUserWebinars({
            userId: tgUser?.id,
            webApp: webApp,
            text: setLocale(router.locale).errors.user_webinars_error,
            router: router,
            dispatch: dispatch,
        });
    }, [tgUser]);

    const [webinarId, setWebinarId] = useState<string | null>(null);

    return (
        <div className={styles.wrapper}>
            {
                userWebinars.status === 'success' ?
                    !webinarId ?
                        <ScheduleList setWebinarId={setWebinarId} />
                    : <ScheduleItem webinarId={webinarId} setWebinarId={setWebinarId} />
                : <Spinner />
            }
        </div>
    );
};
