import axios, { AxiosResponse } from "axios";
import { Blocks, FirstTaskInterface, ThemesTypesInterface } from "../interfaces/firstPart.interface";
import { setLocale } from "./locale.helper";
import { CheckFirstAnswerArguments, ErrorArguments, FirstTaskArguments, NextTaskArguments,
    UpdateTaskArguments } from "../interfaces/refactor.interface";
import { getDomain } from "./domain.helper";


export async function getBlocks(args: ErrorArguments, setBlocks: (e: Blocks) => void) {
    const { webApp, subject, router } = args;

    try {
        const { data : response }: AxiosResponse<Blocks> = await axios.get(getDomain(subject) +
            '/blocks');

        setBlocks(response);
    } catch (err) {
        webApp?.showAlert(setLocale(router.locale).errors.get_blocks_error); 

        console.error(err);
    }
}

export async function getThemesTypes(args: ErrorArguments, blockId: string, setThemesTypes: (e: ThemesTypesInterface) => void) {
    const { webApp, subject, router } = args;

    try {
        const { data : response }: AxiosResponse<ThemesTypesInterface> = await axios.get(getDomain(subject) +
            '/themes_and_types_for_block?block_id=' + blockId);

        setThemesTypes(response);
    } catch (err) {
        webApp?.showAlert(setLocale(router.locale).errors.get_themes_types_error, async function() {
            router.push('/');
        }); 

        console.error(err);
    }
}

export function checkAnswer(args: CheckFirstAnswerArguments) {
    const { userId, webApp, subject, router, answer, task, firstPart,
        setAnswer, setFirstTask, setIsFault, setIsCorrect, setIsDecided } = args;

    if (answer.trim() === task?.answer) {
        setFirstTask(null);
        setIsCorrect(true);
        updateSolvedTask({
            userId: userId,
            webApp: webApp,
            subject: subject,
            router: router,
            taskId: task.task_id,
        });
        getFirstTask({
            userId: userId,
            webApp: webApp,
            subject: subject,
            router: router,
            blockId: firstPart.blockId,
            sortId: firstPart.sortId,
            isTheme: firstPart.isThemes,
            setIsDecided: setIsDecided,
            setFirstTask: setFirstTask,
        });
    } else {
        setIsFault(true);
    }

    setAnswer('');
}

export function nextTask(args: NextTaskArguments) {
    const { userId, webApp, subject, router, firstPart, setAnswer, setIsFault, setIsDecided, setTask } = args;

    setIsFault(false);
    setTask(null);
    setAnswer('');
    getFirstTask({
        userId: userId,
        webApp: webApp,
        subject: subject,
        router: router,
        blockId: firstPart.blockId,
        sortId: firstPart.sortId,
        isTheme: firstPart.isThemes,
        setIsDecided: setIsDecided,
        setFirstTask: setTask,
    });
}

export async function getFirstTask(args: FirstTaskArguments) {
    const { userId, webApp, subject, router, blockId, sortId, isTheme, setIsDecided, setFirstTask } = args;

    try {
        const { data : response }: AxiosResponse<FirstTaskInterface> = await axios.get(getDomain(subject) +
            '/get_task?block_id=' + blockId
            + (isTheme ? '&theme_id=' : '&type_id=')
            + sortId
            + '&user_id=' + userId);

        setFirstTask(response);
    } catch (err: any) {
        if (err.response && err.response.data.error === 'No task found') {
            setIsDecided(true);
        } else {
            webApp?.showAlert(setLocale(router.locale).errors.get_task_error, async function() {
                router.push('/');
            }); 
        }

        console.error(err);
    }
}

export async function updateSolvedTask(args: UpdateTaskArguments) {
    const { userId, webApp, subject, router, taskId } = args;

    try {
        await axios.post(getDomain(subject) +
            '/update_solved_task?user_id=' + userId
            + '&task_id=' + taskId);
    } catch (err) {
        webApp?.showAlert(setLocale(router.locale).errors.update_task_error); 

        console.error(err);
    }
}
