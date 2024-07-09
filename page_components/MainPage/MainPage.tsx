import styles from './MainPage.module.css';
import { Toaster } from 'react-hot-toast';
import { useRouter } from 'next/router';
import { Htag } from '../../components/Common/Htag/Htag';
import { setLocale } from '../../helpers/locale.helper';
import { useEffect, useState } from 'react';


export const MainPage = (): JSX.Element => {
    const router = useRouter();

    const [username, setUsername] = useState('');

    useEffect(() => {
        const initDataUnsafe = window.Telegram.WebApp.initDataUnsafe;
        setUsername(initDataUnsafe?.user?.username || 'Guest');
        window.Telegram.WebApp.ready();
    }, []);
    
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
                    {'Hello,' + username + '!'}
                </Htag>
            </div>
        </>
    );
};
