import styles from './WebinarsPage.module.css';
import { Header } from '../../components/Common/Header/Header';
import { MainButtons } from '../../components/MainComponents/MainButtons/MainButtons';
import { useTelegram } from '../../layout/TelegramProvider';
import { useRouter } from 'next/router';
import { Button } from '../../components/Common/Button/Button';
import { setLocale } from '../../helpers/locale.helper';


export const WebinarsPage = (): JSX.Element => {
    const router = useRouter();
    const { webApp } = useTelegram();

    if (webApp) {
        webApp?.BackButton.show();

        webApp?.BackButton.onClick(function() {
        router.push('/');
        });
    }

    const webinarsCount = 0;

    return (
        <div className={styles.wrapper}>
            <Button icon='file_folder_emoji.webp' text={setLocale(router.locale).my_webinars}
                description={setLocale(router.locale).you_registered_webinars.replace('%%%', String(webinarsCount))}
                onClick={() => {}} />
            <Button icon='calendar_emoji.webp' text={setLocale(router.locale).sign_for_webinar}
                description={setLocale(router.locale).view_available_webinars}
                onClick={() => {}} />
            <Button icon='television_emoji.webp' text={setLocale(router.locale).webinar_recordings}
                description={setLocale(router.locale).view__past_webinars}
                onClick={() => {}} />
        </div>
    );
};
