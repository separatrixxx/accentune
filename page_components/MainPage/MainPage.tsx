import styles from './MainPage.module.css';
import { Toaster } from 'react-hot-toast';
import { useRouter } from 'next/router';
import { Htag } from '../../components/Common/Htag/Htag';
import { useEffect, useState } from 'react';


declare global {
  interface Window {
    Telegram: Telegram;
  }
}

export const MainPage = (): JSX.Element => {
    const router = useRouter();
    const [username, setUsername] = useState('');
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);

        const loadTelegramScript = () => {
            return new Promise<void>((resolve, reject) => {
                const script = document.createElement('script');
                script.src = 'https://telegram.org/js/telegram-web-app.js';
                script.async = true;
                script.onload = () => resolve();
                script.onerror = () => reject(new Error('Telegram Web App script failed to load'));
                document.head.appendChild(script);
            });
        };

        loadTelegramScript()
            .then(() => {
                const initDataUnsafe = window.Telegram.WebApp.initDataUnsafe;
                setUsername(initDataUnsafe?.user?.username || 'Guest');
                window.Telegram.WebApp.ready();
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    if (!isClient) {
        return <></>;
    }

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
                    {'Hello, ' + username + '!'}
                </Htag>
            </div>
        </>
    );
};
