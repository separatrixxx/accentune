import { BlockListProps } from './BlocksList.props';
import styles from './BlocksList.module.css';
import { Button } from '../../Common/Button/Button';
import { useSetup } from '../../../hooks/useSetup';


export const BlocksList = ({ blocks, chooseBlockId, chooseBlockName }: BlockListProps): JSX.Element => {
    const { dispatch } = useSetup();

    return (
        <div className={styles.blocksList}>
            {Object.keys(blocks).map(b => (
                <Button key={b} description={blocks[b]}
                    onClick={() => {
                        dispatch(chooseBlockId(b));
                        dispatch(chooseBlockName(blocks[b]))
                    }}
                />
            ))}
        </div>
    );
};
