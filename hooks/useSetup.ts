import { useTelegram } from '../layout/TelegramProvider';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../features/store/store';
import { useRouter } from 'next/router';


export const useSetup = () => {
    const router = useRouter();
    const dispatch = useDispatch();
    const { webApp, tgUser } = useTelegram();

    const user = useSelector((state: AppState) => state.user.user);
    const firstPart = useSelector((state: AppState) => state.firstPart.firstPart);
    const secondPart = useSelector((state: AppState) => state.secondPart.secondPart);
    const quick = useSelector((state: AppState) => state.quick.quick);
    const firstStatistics = useSelector((state: AppState) => state.firstStatistics.firstStatistics);
    const solved = useSelector((state: AppState) => state.solved.solved);
    const variantStats = useSelector((state: AppState) => state.variantStats.variantStats);
    const completedTasks = useSelector((state: AppState) => state.completedTasks.completedTasks);
    const subscribe = useSelector((state: AppState) => state.subscribe.subscribe);
    const subject = useSelector((state: AppState) => state.subject.subject);
    const userCourse = useSelector((state: AppState) => state.userCourse.userCourse);

    return {
        router,
        dispatch,
        webApp,
        tgUser,
        user,
        firstPart,
        secondPart,
        quick,
        firstStatistics,
        solved,
        variantStats,
        completedTasks,
        subscribe,
        subject,
        userCourse,
    };
};
