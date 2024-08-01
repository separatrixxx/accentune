import styles from './ProfileInfo.module.css';
import { UserIcon } from '../UserIcon/UserIcon';
import { Htag } from '../../Common/Htag/Htag';
import { useSetup } from '../../../hooks/useSetup';
import cn from 'classnames';


export const ProfileInfo = (): JSX.Element => {   
    const { tgUser, user } = useSetup();
    
    return (
        <div className={styles.profileInfo}>
            <UserIcon />
            <Htag tag='m' className={cn(styles.username, {
                [styles.pulse]: !user.user_name,
            })}>
                {user.user_name}
                <span className={styles.subtitleText}>
                    {user.user_role ? ' | ' + user.user_role : ''}
                </span>
            </Htag>
            <Htag tag='s' className={cn(styles.subtitleText, {
                [styles.pulse]: !user.user_role,
            })}>
                {user.user_role ? user.privileges === 'paid_user' ? 'Подписка активна' : 'Подписка не активна' : ''}
            </Htag>
            <Htag tag='s' className={cn(styles.subtitleText, {
                [styles.pulse]: !tgUser?.id,
            })}>
                {'ID: ' + tgUser?.id}
            </Htag>
        </div>
    );
};
