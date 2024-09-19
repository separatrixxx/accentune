import { UserStatsPage } from '../../page_components/UserStatsPage/UserStatsPage';
import Head from 'next/head';
import { setLocale } from "../../helpers/locale.helper";
import { useEffect } from 'react';
import { useSetup } from '../../hooks/useSetup';
import { getUserStats } from '../../helpers/usersStats.helper';


function UserStats(): JSX.Element {
    const { router, dispatch, subject } = useSetup();

    useEffect(() => {
        if (router.isReady && router.query.event_id && router.query.live_id) {
            getUserStats({
                eventId: router.query.event_id as string,
                liveId: router.query.live_id as string,
                subject: subject,
                dispatch: dispatch,
            });
        }
    }, [router.isReady, router.query.event_id, router.query.live_id, subject, dispatch]);

    return (
        <>
            <Head>
                <title>{setLocale(router.locale).accentune + ' | ' + setLocale(router.locale).statistics}</title>
                <meta name='description' content={setLocale(router.locale).accentune + ' | ' + setLocale(router.locale).statistics} />
                <meta property='og:title' content={setLocale(router.locale).accentune + ' | ' + setLocale(router.locale).statistics} />
                <meta name='og:description' content={setLocale(router.locale).accentune + ' | ' + setLocale(router.locale).statistics} />
                <meta charSet="utf-8" />
            </Head>
            <UserStatsPage />
        </>
    );
}

export default UserStats;
