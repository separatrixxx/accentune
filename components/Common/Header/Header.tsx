import styles from './Header.module.css';
import Link from 'next/link';
import { UserIcon } from '../ProfileComponents/UserIcon/UserIcon';


export const Header = (): JSX.Element => {   
    return (
        <header className={styles.header}>
            <Link href='/profile'>
                <UserIcon isHeader={true} />
            </Link>
        </header>
    );
};
