import { SortBlockProps } from './SortBlock.props';
import styles from './SortBlock.module.css';
import { Button } from '../../Common/Button/Button';
import { setLocale } from '../../../helpers/locale.helper';
import { toggleTheme } from '../../../features/firstPart/firstPartSlice';
import { useEffect, useState } from 'react';
import { ThemesTypesInterface } from '../../../interfaces/firstPart.interface';
import { getThemesTypes } from '../../../helpers/firstPart.helper';
import { Spinner } from '../../Common/Spinner/Spinner';
import { useSetup } from '../../../hooks/useSetup';


export const SortBlock = ({ chooseSortId }: SortBlockProps): JSX.Element => {
    const { router, dispatch, firstPart } = useSetup();

    const [themesTypes, setThemesTypes] = useState<ThemesTypesInterface | null>(null);

    useEffect(() => {
        getThemesTypes(firstPart.blockId, setThemesTypes)
    }, [firstPart, setThemesTypes]);

    if (!themesTypes) {
        return <Spinner />
    }

    return (
        <div className={styles.sortBlock}>
            {
                firstPart ?
                    <div className={styles.sortToggleDiv}>
                        <Button text={setLocale(router.locale).by_themes} isActive={firstPart.isThemes}
                            onClick={() => dispatch(toggleTheme())}/>
                        <Button text={setLocale(router.locale).by_tasks} isActive={!firstPart.isThemes}
                            onClick={() => dispatch(toggleTheme())}/>
                    </div>
                : <></>
            }
            {
                firstPart ? firstPart.isThemes ?
                    Object.keys(themesTypes.themes).map(t => (
                        <Button 
                            key={t} 
                            description={themesTypes.themes[t]} 
                            onClick={() => dispatch(chooseSortId(t))}
                        />
                    ))
                :
                    themesTypes.types.map(t => (
                        <Button key={t} description={setLocale(router.locale).tasks_of_the_type + ' ' + t}
                            onClick={() => dispatch(chooseSortId(String(t)))}/>
                    ))
                : <></>
            }
        </div>
    );
};
