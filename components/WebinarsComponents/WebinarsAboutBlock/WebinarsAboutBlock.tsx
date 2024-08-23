import { WebinarsAboutBlockProps } from './WebinarsAboutBlock.props';
import styles from './WebinarsAboutBlock.module.css';
import ReactMarkdown from 'react-markdown';
import { Button } from '../../Common/Button/Button';
import { Htag } from '../../Common/Htag/Htag';
import { useSetup } from '../../../hooks/useSetup';
import { setLocale } from '../../../helpers/locale.helper';


export const WebinarsAboutBlock = ({ setWebinarsType }: WebinarsAboutBlockProps): JSX.Element => {
    const { router } = useSetup();

    const aboutWebinarsText = `**1. Что такое вебинары?**
        \nВебинары - это онлайн-занятия, проводимые в режиме реального времени. Вы можете участвовать в них из любого места, где есть интернет.
        \n**2. Что мы проходим на курсах?**
        \nВсе материалы курса и задания подготовлены с учетом всех актуальных изменений в реальном экзамене. Мы используем материалы и решебники от создателей ЕГЭ и КИМов прошлых лет, чтобы обеспечить вам наиболее эффективную подготовку.
        \n**3. Как часто проводятся вебинары**
        \nПрограмма рассчитана на 68 часов за 9 месяцев, с двумя занятиями в неделю. Информацию о датах и времени проведения трансляций вы можете найти во вкладке "Вебинары".
        \n**4. Что, если я пропущу вебинар?**
        \nВсе вебинары записываются и сохраняются, поэтому вы сможете посмотреть их в удобное для вас время.
        \n**5. Как я могу задавать вопросы во время вебинара?**
        \nВоё время вебинара вы можете задавать вопросы в чате. Преподаватель ответит на них в конце занятия или в специально отведенное время для вопросов.
        \n**6. Есть ли домашние задания после вебинаров?**
        \nДа, после каждого вебинара вы получите домашнее задание для закрепления пройденного материала.
        \n**7. Как долго я буду иметь доступ к материалам курса?**
        \nДоступ к материалам курса сохраняется в течение всего периода подписки.
        \n**8. Могу ли я отменить подписку на курс?**
        \nДа, вы можете отменить подписку в любое время. Однако, для получения максимальной пользы, мы рекомендуем завершить начатый курс.
        \nЕсли у вас остались вопросы, не стесняйтесь обращаться в нашу службу поддержки. Мы всегда готовы помочь вам!
    `;
    
    return (
        <>
            <div className={styles.webinarsAboutTextBlock}>
                <Htag tag='xl' className={styles.webinarsAboutTitle}>
                    {setLocale(router.locale).about_webinar_program + ':'}
                </Htag>
                <ReactMarkdown className={styles.webinarsAboutText}>
                    {aboutWebinarsText}
                </ReactMarkdown>
            </div>
            <div className={styles.wrapper}>
                <Button description={setLocale(router.locale).back_to_webinars}
                    onClick={() => setWebinarsType(null)} />
                <Button icon='calendar_emoji.webp' text={setLocale(router.locale).sign_for_webinar}
                    description={setLocale(router.locale).view_available_webinars}
                    onClick={() => setWebinarsType('courses')} />
            </div>
        </>
    );
};
