import styles from './WebinarsPage.module.css';
import { useSetup } from '../../hooks/useSetup';
import { useEffect, useState } from 'react';
import { getUserCourse } from '../../helpers/webinars.helper';
import { MyCourseBlock } from '../../components/WebinarsComponents/MyCourseBlock/MyCourseBlock';
import { Spinner } from '../../components/Common/Spinner/Spinner';
import { AllCoursesBlock } from '../../components/WebinarsComponents/AllCoursesBlock/AllCoursesBlock';
import { MainLink } from '../../components/Common/MainLink/MainLink';


export const WebinarsPage = (): JSX.Element => {
    const { router, dispatch, webApp, tgUser, subject } = useSetup();
    const [coursesBlockype, setCoursesBlockType] = useState<'all' | 'my' | null>(null);
    
    if (webApp) {
        webApp?.BackButton.show();

        webApp?.BackButton.onClick(function() {
            router.push('/');
        });
    }

    useEffect(() => {
        getUserCourse({
            userId: tgUser?.id,
            subject: subject,
            setCoursesBlockType: setCoursesBlockType,
            dispatch: dispatch,
        });
    }, [tgUser, subject, setCoursesBlockType]);

    return (
        <div className={styles.wrapper}>
            {
                !tgUser ?
                    <MainLink />
                : coursesBlockype === 'all' ?
                    <AllCoursesBlock />
                : coursesBlockype === 'my' ?
                    <MyCourseBlock />
                : <Spinner />
            }
        </div>
    );
};
