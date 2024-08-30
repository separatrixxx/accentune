import { FirstStatisticsPage } from '../../page_components/FirstStatisticsPage/FirstStatisticsPage';
import Head from 'next/head';
import { setLocale } from "../../helpers/locale.helper";
import { useEffect } from 'react';
import { useSetup } from '../../hooks/useSetup';
import { getFirstStatistics } from '../../helpers/statistics.helper';


function Statistics1(): JSX.Element {
    const { router, dispatch, tgUser, subject } = useSetup();

    useEffect(() => {
        getFirstStatistics(tgUser?.id, subject, dispatch);
    }, [tgUser, subject, dispatch]);

    return (
        <>
            <Head>
                <title>{setLocale(router.locale).accentune + ' | ' + setLocale(router.locale).statistics
                    + ' ' + setLocale(router.locale).first_part_tasks.toLowerCase()}</title>
                <meta name='description' content={setLocale(router.locale).accentune + ' | ' + setLocale(router.locale).statistics
                    + ' ' + setLocale(router.locale).first_part_tasks.toLowerCase()} />
                <meta property='og:title' content={setLocale(router.locale).accentune + ' | ' + setLocale(router.locale).statistics
                    + ' ' + setLocale(router.locale).first_part_tasks.toLowerCase()} />
                <meta name='og:description' content={setLocale(router.locale).accentune + ' | ' + setLocale(router.locale).statistics
                    + ' ' + setLocale(router.locale).first_part_tasks.toLowerCase()} />
                <meta charSet="utf-8" />
            </Head>
            <FirstStatisticsPage />
        </>
    );
}

export default Statistics1;
