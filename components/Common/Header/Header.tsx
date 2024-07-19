import styles from './Header.module.css';
import Link from 'next/link';
import { UserIcon } from '../../ProfileComponents/UserIcon/UserIcon';
import { SubjectsForm } from '../../MainComponents/SubjectsForm/SubjectsForm';


export const Header = (): JSX.Element => {   
    return (
        <header className={styles.header}>
            <SubjectsForm />
            <Link href='/profile'>
                <UserIcon isHeader={true} />
            </Link>
        </header>
    );
};
