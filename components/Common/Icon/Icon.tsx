import { IconProps } from './Icon.props';
import styles from './Icon.module.css';
import { useState, useEffect } from 'react';
import Image from 'next/image';


export const Icon = ({ icon }: IconProps): JSX.Element => {   
    const [isAnimated, setIsAnimated] = useState(true);

    useEffect(() => {
        setIsAnimated(true);
        
        const timer = setTimeout(() => {
            setIsAnimated(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    return <Image className={styles.icon} draggable='false'
        loader={() => isAnimated ? '/emoji/' + icon : '/emoji/static/static_' + icon}
        src={isAnimated ? '/emoji/' + icon : '/emoji/static/static_' + icon}
        alt='icon'
        width={1}
        height={1}
        unoptimized={true}
    />
};
