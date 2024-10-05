import { ByBlockProps } from './ByBlock.props';
import styles from './ByBlock.module.css';
import { Htag } from '../Htag/Htag';
import cn from 'classnames';


export const ByBlock = ({ color }: ByBlockProps): JSX.Element => {   
    return (
        <div className={styles.byBlock}>
            <a target='_blank' rel="noreferrer" href='http://banana.codes/' aria-label="banana codes">
                <Htag tag='s' className={cn(styles.byBanana, {
                    [styles.darkColor]: color === 'dark',
                })}>
                    by 🍌 codes
                </Htag>
            </a>
        </div>
    );
};
