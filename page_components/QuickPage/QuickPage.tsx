import styles from './QuickPage.module.css';
import { setLocale } from '../../helpers/locale.helper';
import { Htag } from '../../components/Common/Htag/Htag';
import { chooseQuickType, setQuickDefault } from '../../features/quick/quickSlice';
import { Button } from '../../components/Common/Button/Button';
import { QuickBlock } from '../../components/QuickComponents/QuickBlock/QuickBlock';
import { useSetup } from '../../hooks/useSetup';
import { SolvedBlock } from '../../components/SolvedComponents/SolvedBlock/SolvedBlock';
import { MainLink } from '../../components/Common/MainLink/MainLink';
import { setSolvedDefault } from '../../features/solved/solvedSlice';


export const QuickPage = (): JSX.Element => {
    const { router, dispatch, webApp, tgUser, quick } = useSetup();

    if (webApp) {
        webApp?.BackButton.show();

        webApp?.BackButton.onClick(function () {
            router.push('/');

            dispatch(setQuickDefault());
            dispatch(setSolvedDefault());
        });
    }

    return (
        <div className={styles.wrapper}>
            {
                !tgUser ?
                    <MainLink />
                : quick.type === '' ?
                    <>
                        <Htag tag='xl' className={styles.selectBlockTitle}>
                            {setLocale(router.locale).what_you_want + "?"}
                        </Htag>
                        <div className={styles.typeDiv}>
                            <Button description={setLocale(router.locale).view_resolved_variants}
                                onClick={() => dispatch(chooseQuickType('view'))} />
                            <Button description={setLocale(router.locale).solve_variant}
                                onClick={() => dispatch(chooseQuickType('solve'))} />
                        </div>
                    </>
                : quick.type === 'solve' ?
                    <QuickBlock />
                :
                    <SolvedBlock />
            }
        </div>
    );
};
