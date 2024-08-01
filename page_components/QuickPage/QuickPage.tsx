import styles from './QuickPage.module.css';
import { setLocale } from '../../helpers/locale.helper';
import { Htag } from '../../components/Common/Htag/Htag';
import { chooseQuickType, setQuickDefault } from '../../features/quick/quickSlice';
import { Button } from '../../components/Common/Button/Button';
import { QuickBlock } from '../../components/QuickComponents/QuickBlock/QuickBlock';
import { useSetup } from '../../hooks/useSetup';
import { SolvedBlock } from '../../components/SolvedComponents/SolvedBlock/SolvedBlock';


export const QuickPage = (): JSX.Element => {
    const { router, dispatch, webApp, quick } = useSetup();

    if (webApp) {
        webApp?.BackButton.show();
  
        webApp?.BackButton.onClick(function() {
            router.push('/');

            dispatch(setQuickDefault());
        });
    }

    if (quick.type === '') {
        return (
            <div className={styles.wrapper}>
                <Htag tag='xl' className={styles.selectBlockTitle}>
                    {setLocale(router.locale).what_you_want + "?"}
                </Htag>
                <div className={styles.typeDiv}>
                    <Button description={setLocale(router.locale).view_resolved_variants}
                        onClick={() => dispatch(chooseQuickType('view'))}/>
                    <Button description={setLocale(router.locale).solve_variant}
                        onClick={() => dispatch(chooseQuickType('solve'))}/>
                </div>
            </div>
        );
    } else if (quick.type === 'solve') {
        return (
            <div className={styles.wrapper}>
                <QuickBlock />
            </div>
        );
    } else {
        return (
            <div className={styles.wrapper}>
                <SolvedBlock />
            </div>
        );
    }
};
