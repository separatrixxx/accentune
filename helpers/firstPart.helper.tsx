import axios, { AxiosResponse } from "axios";
import { Blocks, FirstPartInterface, FirstTaskInterface, ThemesTypesInterface } from "../interfaces/firstPart.interface";


export async function getBlocks(setBlocks: (e: Blocks) => void) {
    try {
        const { data : response }: AxiosResponse<Blocks> = await axios.get(process.env.NEXT_PUBLIC_DOMAIN +
            '/blocks');

        setBlocks(response);
    } catch (err) {
        console.error(err);
    }
}

export async function getThemesTypes(blockId: string, setThemesTypes: (e: ThemesTypesInterface) => void) {
    try {
        const { data : response }: AxiosResponse<ThemesTypesInterface> = await axios.get(process.env.NEXT_PUBLIC_DOMAIN +
            '/themes_and_types_for_block?block_id=' + blockId);

        setThemesTypes(response);
    } catch (err) {
        console.error(err);
    }
}

export function checkAnswer(answer: string, task: FirstTaskInterface, firstPart: FirstPartInterface, userId: number | undefined,
    setAnswer: (e: string) => void, setFirstTask: (e: FirstTaskInterface | null) => void, setIsFault: (e: boolean) => void,
    setIsCorrect: (e: boolean) => void, setIsDecided: (e: boolean) => void) {
    if (answer.trim() === task?.answer) {
        setFirstTask(null);
        setIsCorrect(true);
        updateSolvedTask(userId, task.task_id);
        getFirstTask(firstPart.blockId, firstPart.sortId, firstPart.isThemes, userId, setFirstTask, setIsDecided);
    } else {
        setIsFault(true);
    }

    setAnswer('');
}

export function nextTask(firstPart: FirstPartInterface, userId: number | undefined,
    setAnswer: (e: string) => void, setTask: (e: FirstTaskInterface | null) => void,
    setIsFault: (e: boolean) => void, setIsDecided: (e: boolean) => void) {
    setIsFault(false);
    setTask(null);
    setAnswer('');
    getFirstTask(firstPart.blockId, firstPart.sortId, firstPart.isThemes, userId, setTask, setIsDecided);
}

export async function getFirstTask(blockId: string, sortId: string, isTheme: boolean, userId: number | undefined,
    setFirstTask: (e: FirstTaskInterface) => void, setIsDecided: (e: boolean) => void) {
    try {
        const { data : response }: AxiosResponse<FirstTaskInterface> = await axios.get(process.env.NEXT_PUBLIC_DOMAIN +
            '/get_task?block_id=' + blockId
            + (isTheme ? '&theme_id=' : '&type_id=')
            + sortId
            + '&user_id=' + userId);

        setFirstTask(response);
    } catch (err: any) {
        if (err.response.data.error === 'No task found') {
            setIsDecided(true);
        }

        console.error(err);
    }
}

export async function updateSolvedTask(userId: number | undefined, taskId: string,) {
    try {
        await axios.post(process.env.NEXT_PUBLIC_DOMAIN +
            '/update_solved_task?user_id=' + userId
            + '&task_id=' + taskId);
    } catch (err) {
        console.error(err);
    }
}
