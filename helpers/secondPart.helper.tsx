import axios, { AxiosResponse } from "axios";
import { SecondPartInterface, SolvedSecondTaskData, TypesInterface } from "../interfaces/secondPart.interface";


export async function getTypes(blockId: string, setTypes: (e: TypesInterface) => void) {
    try {
        const { data : response }: AxiosResponse<TypesInterface> = await axios.get(process.env.NEXT_PUBLIC_DOMAIN +
            '/types_for_block_second_part?block_id=' + blockId);

            setTypes(response);
    } catch (err) {
        console.error(err);
    }
}

export async function getSecondTask(blockId: string, typeId: string, userId: number | undefined,
    setSecondTask: (e: any) => void, setIsDecided: (e: boolean) => void) {
    try {
        const { data : response }: AxiosResponse<SecondPartInterface> = await axios.get(process.env.NEXT_PUBLIC_DOMAIN +
            '/get_task_second_part?block_id=' + blockId
            + '&type_id=' + typeId
            + '&user_id=' + userId);

            setSecondTask(response);
    } catch (err: any) {
        if (err.response.data.error === 'No task found') {
            setIsDecided(true);
        }

        console.error(err);
    }
}

export function checkSecondAnswer(secondPart: SecondPartInterface, userId: number | undefined, task_id: string, answer: string,
    setAnswer: (e: string) => void, setIsCorrect: (e: boolean) => void, setSecondTask: (e: any) => void,
    setIsDecided: (e: boolean) => void) {    
    if (answer.trim() !== '') {
        setSecondTask(null);
        setIsCorrect(true);
        setAnswer('');
        getSecondTask(secondPart.blockId, secondPart.typeId, userId, setSecondTask, setIsDecided);

        sendSecondAnswer(userId, {
            task_id: task_id,
            user_answer: answer,
        });        
    }
}

export async function sendSecondAnswer(userId: number | undefined, solved: SolvedSecondTaskData) {
    try {
        await axios.post(process.env.NEXT_PUBLIC_DOMAIN +
            '/save_user_answer_for_task_second_part?user_id=' + userId, solved);
    } catch (err: any) {
        console.error(err);
    }
}
