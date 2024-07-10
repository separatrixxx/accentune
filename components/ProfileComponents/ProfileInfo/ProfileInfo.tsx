import styles from './ProfileInfo.module.css';
import { useTelegram } from '../../../layout/TelegramProvider';
import { UserIcon } from '../UserIcon/UserIcon';
import { Htag } from '../../Common/Htag/Htag';
import cn from 'classnames';


export const ProfileInfo = (): JSX.Element => {
    const { user } = useTelegram();
    console.log(user)
    
    return (
        <div className={styles.profileInfo}>
            <UserIcon />
            <Htag tag='m' className={cn(styles.username, {
                [styles.pulse]: !user?.username,
            })}>
                {user?.username}
            </Htag>
        </div>
    );
};
