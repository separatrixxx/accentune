import styles from './Header.module.css';
import Link from 'next/link';


export const Header = (): JSX.Element => {
    return (
        <header className={styles.header}>
            <Link href='/profile' className={styles.userImg}>

            </Link>
        </header>
    );
};
