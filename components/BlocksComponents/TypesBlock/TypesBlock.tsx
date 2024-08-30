import {TypesBlockProps } from './TypesBlock.props';
import styles from './TypesBlock.module.css';
import { Button } from '../../Common/Button/Button';
import { setLocale } from '../../../helpers/locale.helper';
import { useEffect, useState } from 'react';
import { Spinner } from '../../Common/Spinner/Spinner';
import { useSetup } from '../../../hooks/useSetup';
import { TypesInterface } from '../../../interfaces/secondPart.interface';
import { getTypes } from '../../../helpers/secondPart.helper';


export const TypesBlock = ({ chooseSecondTypeId }: TypesBlockProps): JSX.Element => {
    const { router, dispatch, webApp, secondPart, subject } = useSetup();

    const [types, setTypes] = useState<TypesInterface | null>(null);

    useEffect(() => {
        getTypes({
            webApp: webApp,
            subject: subject,
            router: router,
        }, secondPart.blockId, setTypes)
    }, [router, webApp, secondPart, subject, setTypes]);

    if (!types) {
        return <Spinner />
    }

    return (
        <div className={styles.typesBlock}>
            {
                types.types.map(t => (
                    <Button key={t} description={setLocale(router.locale).tasks_of_the_type + ' ' + t}
                        onClick={() => dispatch(chooseSecondTypeId(String(t)))}/>
                ))
            }
        </div>
    );
};
