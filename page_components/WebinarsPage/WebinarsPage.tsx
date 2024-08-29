import styles from './WebinarsPage.module.css';
import { useSetup } from '../../hooks/useSetup';
import { useEffect, useState } from 'react';
import { getUserCourse } from '../../helpers/webinars.helper';
import { MyCourseBlock } from '../../components/WebinarsComponents/MyCourseBlock/MyCourseBlock';
import { Spinner } from '../../components/Common/Spinner/Spinner';
import { AllCoursesBlock } from '../../components/WebinarsComponents/AllCoursesBlock/AllCoursesBlock';


export const WebinarsPage = (): JSX.Element => {
    const { router, dispatch, webApp, tgUser } = useSetup();
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
            setCoursesBlockType: setCoursesBlockType,
            dispatch: dispatch,
        });
    }, [tgUser, setCoursesBlockType]);

    return (
        <div className={styles.wrapper}>
            {
                coursesBlockype === 'all' ?
                    <AllCoursesBlock />
                : coursesBlockype === 'my' ?
                    <MyCourseBlock />
                : <Spinner />
            }
        </div>
    );
};
