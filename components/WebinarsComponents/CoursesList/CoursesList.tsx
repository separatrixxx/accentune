import { CoursesListProps } from './CoursesList.props';
import styles from './CoursesList.module.css';
import { Htag } from '../../Common/Htag/Htag';
import { useSetup } from '../../../hooks/useSetup';
import { setLocale } from '../../../helpers/locale.helper';
import { Button } from '../../Common/Button/Button';
import { getCourseInfo, subscribeForCourse } from '../../../helpers/webinars.helper';
import { Spinner } from '../../Common/Spinner/Spinner';
import { useHelpStates } from '../../../hooks/useHelpStates';
import ReactMarkdown from 'react-markdown';


export const CoursesList = ({ availableCourses, setWebinarsType }: CoursesListProps): JSX.Element => {
    const { router, webApp, tgUser, subject } = useSetup();
    const { courseInfo, isFormLoading, isLoading, isCoursePlan,
        setCourseInfo, setIsFormLoading, setIsLoading, setIsCoursePlan } = useHelpStates();

    if (isFormLoading) {
        return <Spinner />
    }

    if (!courseInfo) {
        return (
            <>
                <Htag tag='xl' className={styles.coursesTitle}>
                    {setLocale(router.locale).available_courses + ':'}
                </Htag>
                <Button description={setLocale(router.locale).back_to_webinars}
                    onClick={() => setWebinarsType(null)} />
                {availableCourses?.map(c => (
                    <Button key={c.cource_id} description={c.cource_name}
                        onClick={() => {
                            setIsFormLoading(true);
                            getCourseInfo(c.cource_id, subject, setCourseInfo, setIsFormLoading);
                        }} />
                ))}
            </>
        );
    } else {
        return (
            <>
                <div className={styles.courseInfoBlock}>
                    <Htag tag='xl' className={styles.coursesInfoTitle}>
                        {(setLocale(router.locale)[!isCoursePlan ? 'course_description' : 'course_plan'] + ': ')
                            + courseInfo.data.cource_name}
                    </Htag>
                    <ReactMarkdown className={styles.courseInfoText}>
                        {!isCoursePlan ? courseInfo.data.cource_description : courseInfo.data.cource_plan}
                    </ReactMarkdown>
                </div>
                <Button description={setLocale(router.locale)[isCoursePlan ? 'course_description' : 'course_plan']}
                    onClick={() => setIsCoursePlan(!isCoursePlan)} />
                <Button description={setLocale(router.locale).subscribe_course} isLoading={isLoading}
                    onClick={() => subscribeForCourse({
                        userId: tgUser?.id,
                        courseId: courseInfo.data.cource_id,
                        text: setLocale(router.locale).you_subscribed_for_course
                            + ' "' + courseInfo.data.cource_name + '"',
                        webApp: webApp,
                        subject: subject,
                        router: router,
                        setIsLoading: setIsLoading,
                    })} />
                <Button description={setLocale(router.locale).back_to_course_selection}
                    onClick={() => setCourseInfo(null)} />
            </>
        );
    }
};
