import styles from './MainPage.module.css';
import { Header } from '../../components/Common/Header/Header';
import { MainButtons } from '../../components/MainComponents/MainButtons/MainButtons';
import { useSetup } from '../../hooks/useSetup';
import { Spinner } from '../../components/Common/Spinner/Spinner';
import { PromoSlider } from '../../components/PromoComponents/PromoSlider/PromoSlider';
import { MainLink } from '../../components/Common/MainLink/MainLink';
import { Htag } from '../../components/Common/Htag/Htag';
import { ByBlock } from '../../components/Common/ByBlock/ByBlock';


export const MainPage = (): JSX.Element => {
    const { webApp, tgUser, user } = useSetup();

    if (webApp) {
        webApp?.BackButton.hide();
    }

    return (
        <div className={styles.wrapper}>
            {
                !tgUser ?
                    <MainLink />
                    : !user.privileges ?
                        <>
                            <Spinner />
                            <Htag tag='s' className={styles.versionText}>
                                {process.env.NEXT_PUBLIC_VERSION}
                            </Htag>
                            <ByBlock color='light' />
                        </>
                        :
                        <>
                            <Header />
                            <MainButtons />
                            <PromoSlider />
                        </>
            }
        </div>
    );
};
