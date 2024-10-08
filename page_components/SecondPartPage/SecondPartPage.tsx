import { SecondPartPageProps } from './SecondPartPage.props';
import styles from './SecondPartPage.module.css';
import { BlocksList } from '../../components/BlocksComponents/BlocksList/BlocksList';
import { setLocale } from '../../helpers/locale.helper';
import { Htag } from '../../components/Common/Htag/Htag';
import { Spinner } from '../../components/Common/Spinner/Spinner';
import { useSetup } from '../../hooks/useSetup';
import { chooseSecondBlockId, chooseSecondBlockName, chooseSecondTypeId, setSecondPartDefault } from '../../features/secondPart/secondPartSlice';
import { TypesBlock } from '../../components/BlocksComponents/TypesBlock/TypesBlock';
import { SecondTaskBlock } from '../../components/BlocksComponents/SecondTaskBlock/SecondTaskBlock';
import { MainLink } from '../../components/Common/MainLink/MainLink';


export const SecondPartPage = ({ blocks }: SecondPartPageProps): JSX.Element => {
    const { router, dispatch, webApp, tgUser, secondPart } = useSetup();

    if (webApp) {
        webApp?.BackButton.show();
  
        webApp?.BackButton.onClick(function() {
            router.push('/');

            dispatch(setSecondPartDefault());
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
                secondPart.blockId === '' ?
                    <>
                        <Htag tag='xl' className={styles.selectBlockTitle}>
                            {setLocale(router.locale).select_block + ":"}
                        </Htag>
                        {
                            blocks['1'] ? 
                                <BlocksList blocks={blocks} chooseBlockId={chooseSecondBlockId}
                                    chooseBlockName={chooseSecondBlockName} />
                            : <Spinner />
                        }
                    </>
                : secondPart.typeId === '' ?
                    <>
                        <Htag tag='xl' className={styles.selectBlockTitle}>
                            {secondPart.blockName}
                        </Htag>
                        <TypesBlock chooseSecondTypeId={chooseSecondTypeId} />
                    </>
                : 
                    <SecondTaskBlock  />
            }
        </div>
    );
};
