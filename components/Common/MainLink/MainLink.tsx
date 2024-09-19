import styles from './MainLink.module.css';
import { useRouter } from 'next/router';
import { setLocale } from '../../../helpers/locale.helper';
import { Htag } from '../Htag/Htag';
import Link from 'next/link';
import Image from 'next/image';


export const MainLink = (): JSX.Element => {
    const router = useRouter();
    
    return (
        <Link href='https://web.telegram.org/a/#-1001189097644' target='_blank' className={styles.link}>
            <Image className={styles.logo} draggable='false'
                loader={() => '/logo.svg'}
                src='/logo.svg'
                alt='logo image'
                width={1}
                height={1}
                unoptimized={true}
            />
            <Htag tag='m' className={styles.mainTitle}>
                {setLocale(router.locale).main_title}
            </Htag>
        </Link>
    );
};
