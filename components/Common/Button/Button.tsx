import { ButtonProps } from './Button.props';
import styles from './Button.module.css';
import { useState, useEffect } from 'react';
import { Htag } from '../Htag/Htag';
import Image from 'next/image';
import { useSetup } from '../../../hooks/useSetup';
import cn from 'classnames';
import { Spinner } from '../Spinner/Spinner';


export const Button = ({ icon, text, description, isActive, isLoading, onClick }: ButtonProps): JSX.Element => { 
    const { user, firstPart, secondPart, quick } = useSetup();
      
    const [isAnimated, setIsAnimated] = useState<boolean>(true);

    useEffect(() => {
        setIsAnimated(true);
        
        const timer = setTimeout(() => {
            setIsAnimated(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, [user, firstPart, secondPart, quick]);

    return (
        <button className={cn(styles.button, {
            [styles.active]: isActive,
        })} onClick={onClick}>
            {
                icon && !isLoading ? 
                    <Image className={styles.icon} draggable='false'
                        loader={() => isAnimated ? '/emoji/' + icon : '/emoji/static/static_' + icon}
                        src={isAnimated ? '/emoji/' + icon : '/emoji/static/static_' + icon}
                        alt='image'
                        width={1}
                        height={1}
                        unoptimized={true}
                        priority={true}
                    />
                : isLoading ?
                    <div className={styles.spinner} />
                : <></>
            }
            <div className={cn(styles.buttonTextDiv, {
                [styles.buttonTextDivGap]: text && description,
            })}>
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
