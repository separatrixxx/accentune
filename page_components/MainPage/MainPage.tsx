import styles from './MainPage.module.css';
import { Toaster } from 'react-hot-toast';
import { useRouter } from 'next/router';
import { Htag } from '../../components/Common/Htag/Htag';
import { setLocale } from '../../helpers/locale.helper';


export const MainPage = (): JSX.Element => {
    const router = useRouter();
    
    return (
        <>
            <Toaster
				position="top-center"
				reverseOrder={true}
				toastOptions={{
					duration: 2000,
				}}
			/>
            <div className={styles.wrapper}>
                <Htag tag='xl'>
                    {setLocale(router.locale).accentune}
                </Htag>
            </div>
        </>
    );
};
