import styles from './AllCoursesBlock.module.css';
import { useSetup } from '../../../hooks/useSetup';
import { setLocale } from '../../../helpers/locale.helper';
import { Button } from '../../Common/Button/Button';
import { useState } from 'react';
import { WebinarsAboutBlock } from '../WebinarsAboutBlock/WebinarsAboutBlock';
import { CoursesBlock } from '../CoursesBlock/CoursesBlock';


export const AllCoursesBlock = (): JSX.Element => {
    const { router } = useSetup();
    const [webinarsType, setWebinarsType] = useState<'about' | 'courses' | null>(null);

    if (webinarsType === 'about') {
        return <WebinarsAboutBlock setWebinarsType={setWebinarsType} />
    } else if (webinarsType === 'courses') {
        return <CoursesBlock setWebinarsType={setWebinarsType} />
    } else {
        return (
            <div className={styles.wrapper}>
                <Button icon='calendar_emoji.webp' text={setLocale(router.locale).sign_for_webinar}
                    description={setLocale(router.locale).view_available_webinars}
                    onClick={() => setWebinarsType('courses')} />
                <Button icon='television_emoji.webp' text={setLocale(router.locale).about_webinar_program}
                    onClick={() => setWebinarsType('about')} />
            </div>
        );
    }
};
