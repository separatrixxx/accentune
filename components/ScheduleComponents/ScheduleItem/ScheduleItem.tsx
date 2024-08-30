import { ScheduleItemProps } from './ScheduleItem.props';
import styles from './ScheduleItem.module.css';
import { useSetup } from '../../../hooks/useSetup';
import { Button } from '../../Common/Button/Button';
import { timestampToDate } from '../../../helpers/date.helper';
import { Htag } from '../../Common/Htag/Htag';
import { setLocale } from '../../../helpers/locale.helper';
import { useEffect, useState } from 'react';
import { WebinarInfoData } from '../../../interfaces/webinars.interface';
import { getWebinarData } from '../../../helpers/webinars.helper';
import { Spinner } from '../../Common/Spinner/Spinner';
import ReactMarkdown from 'react-markdown';
import { WebinarRecording } from '../WebinardRecording/WebinardRecording';


export const ScheduleItem = ({ webinarId, setWebinarId }: ScheduleItemProps): JSX.Element => {
    const { router, webApp, subject } = useSetup();

    const [webinarInfo, setWebinarInfo] = useState<WebinarInfoData | null>(null);

    useEffect(() => {
        getWebinarData({
            webinarId: webinarId,
            webApp: webApp,
            subject: subject,
            text: setLocale(router.locale).errors.webinar_info_error,
            setWebinarId: setWebinarId,
            setWebinarInfo: setWebinarInfo,
        });
    }, [webinarId, webApp, router, subject, setWebinarId, setWebinarInfo]);

    if (!webinarInfo) {
        return <Spinner />
    }

    return (
        <>
            <div className={styles.scheduleItemBlock}>
                <Htag tag='xl'>
                    {setLocale(router.locale).webinar + ': ' + webinarInfo.webinar_name}
                </Htag>
                <Htag tag='xl'>
                    {`«${webinarInfo.theme}»`}
                </Htag>
                <ReactMarkdown className={styles.scheduleItemText}>
                    {webinarInfo.description}
                </ReactMarkdown>
                <Htag tag='s'>
                    {setLocale(router.locale).themes + ': '}
                </Htag>
                <ReactMarkdown className={styles.scheduleItemText}>
                    {webinarInfo.topics.reduce((acc, t) => acc + '* ' + t + '\n', '')}
                </ReactMarkdown>
                <Htag tag='s'>
                    {setLocale(router.locale).date + ': ' + timestampToDate(webinarInfo.date, true)}
                </Htag>
                {
                    webinarInfo.passed ?
                        <>
                            <Htag tag='xl' className={styles.webinarRecordingTitle}>
                                {setLocale(router.locale).webinar_recording + ':'}
                            </Htag>

                            <Htag tag='s' className={styles.link} onClick={() => webApp?.openLink(webinarInfo.recording_url)}>
                                {webinarInfo.recording_url}
                            </Htag>
                            <WebinarRecording videoUrl={webinarInfo.recording_url} />
                        </>
                        : <></>
                }
            </div>
            <Button description={setLocale(router.locale).webinar_program}
                onClick={() => {}} />
            <Button description={setLocale(router.locale).back_to_my_webinars}
                onClick={() => setWebinarId(null)} />
        </>
    );
};
