import { FirstPartPageProps } from './FirstPartPage.props';
import styles from './FirstPartPage.module.css';
import { BlocksList } from '../../components/BlocksComponents/BlocksList/BlocksList';
import { setLocale } from '../../helpers/locale.helper';
import { Htag } from '../../components/Common/Htag/Htag';
import { SortBlock } from '../../components/BlocksComponents/SortBlock/SortBlock';
import { TaskBlock } from '../../components/BlocksComponents/TaskBlock/TaskBlock';
import { chooseFirstBlockId, chooseFirstBlockName, chooseSortId, setFirstPartDefault } from '../../features/firstPart/firstPartSlice';
import { Spinner } from '../../components/Common/Spinner/Spinner';
import { useSetup } from '../../hooks/useSetup';
import { MainLink } from '../../components/Common/MainLink/MainLink';


export const FirstPartPage = ({ blocks }: FirstPartPageProps): JSX.Element => {
    const { router, dispatch, webApp, tgUser, firstPart } = useSetup();

    if (webApp) {
        webApp?.BackButton.show();
  
        webApp?.BackButton.onClick(function() {
            router.push('/');

            dispatch(setFirstPartDefault());
        });
    }

    if (!tgUser) {
        return (
            <div className={styles.wrapper}>
                <MainLink />
            </div>
        );
    }

    return (
        <div className={styles.wrapper}>
            {
                firstPart.blockId === '' ?
                    <>
                        <Htag tag='xl' className={styles.selectBlockTitle}>
                            {setLocale(router.locale).select_block + ':'}
                        </Htag>
                        {
                            blocks['1'] ? 
                                <BlocksList blocks={blocks} chooseBlockId={chooseFirstBlockId}
                                    chooseBlockName={chooseFirstBlockName} />
                            : <Spinner />
                        }
                    </>
                : firstPart.sortId === '' ?
                    <>
                        <Htag tag='xl' className={styles.selectBlockTitle}>
                            {firstPart.blockName}
                        </Htag>
                        <SortBlock chooseSortId={chooseSortId} />
                    </>
                : 
                    <TaskBlock  />
            }
        </div>
    );
};
