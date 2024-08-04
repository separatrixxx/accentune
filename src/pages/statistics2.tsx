import { SecondStatisticsPage } from '../../page_components/SecondStatisticsPage/SecondStatisticsPage';
import Head from 'next/head';
import { setLocale } from "../../helpers/locale.helper";
import { useSetup } from '../../hooks/useSetup';


function Statistics2(): JSX.Element {
    const { router } = useSetup();

    return (
        <>
            <Head>
                <title>{setLocale(router.locale).accentune + ' | ' + setLocale(router.locale).statistics
                    + ' ' + setLocale(router.locale).second_part_tasks.toLowerCase()}</title>
                <meta name='description' content={setLocale(router.locale).accentune + ' | ' + setLocale(router.locale).statistics
                    + ' ' + setLocale(router.locale).second_part_tasks.toLowerCase()} />
                <meta property='og:title' content={setLocale(router.locale).accentune + ' | ' + setLocale(router.locale).statistics
                    + ' ' + setLocale(router.locale).second_part_tasks.toLowerCase()} />
                <meta name='og:description' content={setLocale(router.locale).accentune + ' | ' + setLocale(router.locale).statistics
                    + ' ' + setLocale(router.locale).second_part_tasks.toLowerCase()} />
                <meta charSet="utf-8" />
            </Head>
            <SecondStatisticsPage />
        </>
    );
}

export default Statistics2;
