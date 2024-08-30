import styles from './SubjectsForm.module.css';
import { setLocale } from '../../../helpers/locale.helper';
import { Htag } from '../../Common/Htag/Htag';
import Arrow from './arrow.svg';
import { Subject } from '../../../interfaces/user.interface';
import { useSetup } from '../../../hooks/useSetup';
import { setSubject } from '../../../features/subject/subjectSlice';


export const SubjectsForm = (): JSX.Element => {
    const { router, dispatch, subject } = useSetup();

    const subjectsList: Subject[] = ['obj', 'rus'];
    
    return (
        <div className={styles.subjectsForm}>
            <div className={styles.currentSubjectDiv}>
                <Htag tag='l' className={styles.currentSubjectName} onClick={() => {}}>
                    {setLocale(router.locale).subjects[subject as 'obj']}
                </Htag>
                <Arrow />
            </div>
            <div className={styles.subjectsList}>
                {
                    subjectsList.filter(s => s !== subject).map(s => (
                        <Htag key={s} tag='s' className={styles.subjectName} onClick={() => dispatch(setSubject(s))}>
                            {setLocale(router.locale).subjects[s]}
                        </Htag>
                    ))
                }
            </div>
        </div>
    );
};
