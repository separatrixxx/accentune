import styles from './ProfileInfo.module.css';
import { useTelegram } from '../../../layout/TelegramProvider';
import { UserIcon } from '../UserIcon/UserIcon';
import { Htag } from '../../Common/Htag/Htag';
import { useSelector } from 'react-redux';
import { AppState } from '../../../features/store/store';
import { useRouter } from 'next/router';
import cn from 'classnames';


export const ProfileInfo = (): JSX.Element => {
    const router = useRouter();
    
    const { tgUser } = useTelegram();
    const user = useSelector((state: AppState) => state.user.user);
    
    return (
        <div className={styles.profileInfo}>
            <UserIcon />
            <Htag tag='m' className={cn(styles.username, {
                [styles.pulse]: !tgUser,
            })}>
                {tgUser?.username}
                <span className={styles.subtitleText}>
                    {tgUser ? ' | student' : ''}
                </span>
            </Htag>
            <Htag tag='s' className={cn(styles.subtitleText, {
                [styles.pulse]: !tgUser,
            })}>
                {tgUser ? user.isSubscriptionActive ? 'Подписка активна' : 'Подписка не активна' : ''}
            </Htag>
        </div>
    );
};
