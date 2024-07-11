import { useState, useEffect } from 'react';
import { ButtonProps } from './Button.props';
import styles from './Button.module.css';
import { Htag } from '../Htag/Htag';
import Image from 'next/image';
import { useSelector } from 'react-redux';
import { AppState } from '../../../features/store/store';


export const Button = ({ icon, text, description, onClick }: ButtonProps): JSX.Element => {   
    const [isAnimated, setIsAnimated] = useState(true);

    const user = useSelector((state: AppState) => state.user.user);

    useEffect(() => {
        setIsAnimated(true);
        
        const timer = setTimeout(() => {
            setIsAnimated(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, [user.isSubscriptionActive]);

    return (
        <button className={styles.button} onClick={onClick}>
            <Image className={styles.icon} draggable='false'
                loader={() => isAnimated ? '/emoji/' + icon : '/emoji/static/static_' + icon}
                src={isAnimated ? '/emoji/' + icon : '/emoji/static/static_' + icon}
                alt='image'
                width={1}
                height={1}
                unoptimized={true}
                priority={true}
            />
            <div className={styles.buttonTextDiv}>
                <Htag tag='s' className={styles.text}>
                    {text}
                </Htag>
                <Htag tag='s' className={styles.description}>
                    {description}
                </Htag>
            </div>
        </button>
    );
};
