import { CoursesBlockProps } from './CoursesBlock.props';
import styles from './CoursesBlock.module.css';
import { useEffect, useState } from 'react';
import { getAvailableCourses } from '../../../helpers/webinars.helper';
import { Spinner } from '../../Common/Spinner/Spinner';
import { CoursesData } from '../../../interfaces/webinars.interface';
import { CoursesList } from '../CoursesList/CoursesList';
import { useSetup } from '../../../hooks/useSetup';


export const CoursesBlock = ({ setWebinarsType }: CoursesBlockProps): JSX.Element => {
    const { subject } = useSetup();
    
    const [availableCourses, setAvailableCourses] = useState<CoursesData[] | null>(null);

    useEffect(() => {
        getAvailableCourses(subject, setAvailableCourses);
    }, [subject, setAvailableCourses]);

    if (!availableCourses) {
        return <Spinner />
    }

    return (
        <div className={styles.wrapper}>
            <CoursesList availableCourses={availableCourses}
                setWebinarsType={setWebinarsType}  />
        </div>
    );
};
