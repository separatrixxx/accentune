import styles from './MyCourseBlock.module.css';
import { Htag } from '../../Common/Htag/Htag';
import { useSetup } from '../../../hooks/useSetup';
import { setLocale } from '../../../helpers/locale.helper';
import { Button } from '../../Common/Button/Button';
import ReactMarkdown from 'react-markdown';
import { useState } from 'react';
import { unsubscribeForCourse } from '../../../helpers/webinars.helper';


export const MyCourseBlock = (): JSX.Element => {
    const { router, dispatch, webApp, tgUser, userCourse, subject } = useSetup();
    const [isLoading, setIsLoading] = useState<boolean>(false);

    return (
        <>
            <div className={styles.myCourseBlock}>
                <Htag tag='xl' className={styles.myCourseTitle}>
                    {setLocale(router.locale).your_current_course + ': ' + userCourse.course_name}
                </Htag>
                <ReactMarkdown className={styles.myCourseText}>
                    {userCourse.course_description}
                </ReactMarkdown>
                <Htag tag='xl' className={styles.myCourseTitle}>
                    {setLocale(router.locale).course_plan + ': '}
                </Htag>
                <ReactMarkdown className={styles.myCourseText}>
                    {userCourse.course_plan}
                </ReactMarkdown>
            </div>
            <Button description={setLocale(router.locale).schedule_of_classes}
                onClick={() => router.push('/schedule')} />
            <Button description={setLocale(router.locale).homework}
                onClick={() => {}} />
            <Button description={setLocale(router.locale).unsubscribe_course} isLoading={isLoading}
                onClick={() => unsubscribeForCourse({
                    userId: tgUser?.id,
                    courseId: userCourse.course_id,
                    text: setLocale(router.locale).you_unsubscribed_from_course
                        + ' "' + userCourse.course_name + '"',
                    webApp: webApp,
                    subject: subject,
                    router: router,
                    dispatch: dispatch,
                    setIsLoading: setIsLoading,
                })} />
        </>
    );
};
