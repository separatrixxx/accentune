import { UserIconProps } from './UserIcon.props';
import styles from './UserIcon.module.css';
import Image from 'next/image';
import UserIconSvg from './userIcon.svg';
import { useTelegram } from '../../../layout/TelegramProvider';
import cn from 'classnames';


export const UserIcon = ({ isHeader }: UserIconProps): JSX.Element => {
    const { tgUser } = useTelegram();
    
    if (tgUser && tgUser.photo_url) {
        return (
            <Image className={cn(styles.userIcon, {
                [styles.isHeader]: isHeader,
            })} draggable='false'
                loader={() => tgUser && tgUser.photo_url ? tgUser.photo_url : ''}
                src={tgUser && tgUser.photo_url ? tgUser.photo_url : ''}
                alt='image'
                width={1}
                height={1}
                unoptimized={true}
                priority={true}
            />
        );
    } else {
        return (
            <div className={cn(styles.userIcon, {
                [styles.isHeader]: isHeader,
            })}>
                <UserIconSvg />
            </div>
        );
    }
};
