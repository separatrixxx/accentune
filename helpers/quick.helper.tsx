import axios, { AxiosResponse } from "axios";
import { setQuickVariant, setQuickVariantLength, toggleQuickNum, updateQuickSolved } from "../features/quick/quickSlice";
import { QuickInterface, QuickVariantInterface, SolvedQuickTask, SolvedQuickTaskData } from "../interfaces/quick.interface";


export async function getQuickVariant(userId: number | undefined, dispatch: any) {
    try {
        const { data : response }: AxiosResponse<QuickVariantInterface[]> = await axios.get(process.env.NEXT_PUBLIC_DOMAIN +
            '/get_variant?user_id=' + userId);

            dispatch(setQuickVariantLength(response.length));
            dispatch(setQuickVariant(response.filter(task => task !== null)));
    } catch (err: any) {
        console.error(err);
    }
}

export function checkQuickAnswer(quick: QuickInterface, answer: string, setAnswer: (e: string) => void,
    setIsCorrect: (e: boolean) => void, dispatch: any) {
    const newSolvedTask: SolvedQuickTask = {
        answer: quick.variant[quick.num].answer,
        task_id: quick.variant[quick.num].task_id,
        user_answer: answer,
    };
    
    if (answer.trim() !== '') {
        setIsCorrect(true);
        setAnswer('');
        dispatch(toggleQuickNum());
        dispatch(updateQuickSolved(newSolvedTask));
    }
}

export async function sendQuickVariant(userId: number, solved: SolvedQuickTaskData) {
    try {
        await axios.post(process.env.NEXT_PUBLIC_DOMAIN +
            '/save_solved_variant?user_id=' + userId, solved);
    } catch (err: any) {
        console.error(err);
    }
}
