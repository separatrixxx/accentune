import axios, { AxiosResponse } from "axios";
import { setQuickVariant, setQuickVariantLength, toggleQuickNum, updateQuickSolved } from "../features/quick/quickSlice";
import { QuickVariantInterface, SolvedQuickTask } from "../interfaces/quick.interface";
import { CheckQuickArguments, GetQuickArguments, SendQuickArguments } from "../interfaces/refactor.interface";
import { setLocale } from "./locale.helper";
import { getDomain } from "./domain.helper";


export async function getQuickVariant(args: GetQuickArguments) {
    const { userId, webApp, subject, router, dispatch } = args;

    try {
        const { data : response }: AxiosResponse<QuickVariantInterface[]> = await axios.get(getDomain(subject) +
            '/get_variant?user_id=' + userId);

            dispatch(setQuickVariantLength(response.length));
            dispatch(setQuickVariant(response.filter(task => task !== null)));
    } catch (err: any) {
        webApp?.showAlert(setLocale(router.locale).errors.get_variant_error, async function() {
            router.push('/');
        }); 

        console.error(err);
    }
}

export function checkQuickAnswer(args: CheckQuickArguments) {
    const { answer, setAnswer, setIsCorrect, quick, dispatch } = args;

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

export async function sendQuickVariant(args: SendQuickArguments) {
    const { userId, webApp, subject, router, solved } = args;

    try {
        await axios.post(getDomain(subject) +
            '/save_solved_variant?user_id=' + userId, solved);
    } catch (err: any) {
        webApp?.showAlert(setLocale(router.locale).errors.send_variant_error); 

        console.error(err);
    }
}
