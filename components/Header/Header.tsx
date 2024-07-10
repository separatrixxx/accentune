import styles from './Header.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { useTelegram } from '../../layout/TelegramProvider';


export const Header = (): JSX.Element => {
    const { user } = useTelegram();
    
    return (
        <header className={styles.header}>
            <Link href='/profile'>
                <Image className={styles.userIcon} draggable='false'
                    loader={() => user ? user.photo_url : ''}
                    src={user ? user.photo_url : ''}
                    alt='image'
                    width={1}
                    height={1}
                    unoptimized={true}
                    priority={true}
                />
            </Link>
        </header>
    );
};
