import styles from './SubjectsForm.module.css';
import { useRouter } from 'next/router';
import { setLocale } from '../../../helpers/locale.helper';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../../../features/store/store';
import { Htag } from '../../Common/Htag/Htag';
import { chooseSubject } from '../../../features/user/userSlice';
import Arrow from './arrow.svg';
import { Subject } from '../../../interfaces/user.interface';


export const SubjectsForm = (): JSX.Element => { 
    const router = useRouter();
    const dispatch = useDispatch();

    const user = useSelector((state: AppState) => state.user.user);

    const subjectsList: Subject[] = ['social', 'math', 'russian'];
    
    return (
        <div className={styles.subjectsForm}>
            <div className={styles.currentSubjectDiv}>
                <Htag tag='l' className={styles.currentSubjectName} onClick={() => {}}>
                    {setLocale(router.locale).subjects[user.subject]}
                </Htag>
                <Arrow />
            </div>
            <div className={styles.subjectsList}>
                {
                    subjectsList.filter(s => s !== user.subject).map(s => (
                        <Htag key={s} tag='s' className={styles.subjectName} onClick={() => dispatch(chooseSubject(s))}>
                            {setLocale(router.locale).subjects[s]}
                        </Htag>
                    ))
                }
            </div>
        </div>
    );
};
