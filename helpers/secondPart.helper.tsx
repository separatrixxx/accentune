import axios, { AxiosResponse } from "axios";
import { SecondTaskInterface, SolvedSecondTaskData, TypesInterface } from "../interfaces/secondPart.interface";
import { setLocale } from "./locale.helper";
import { CheckSecondTaskArguments, ErrorArguments, SecondTaskArguments } from "../interfaces/refactor.interface";
import { getDomain } from "./domain.helper";


export async function getTypes(args: ErrorArguments, blockId: string, setTypes: (e: TypesInterface) => void) {
    const { webApp, subject, router } = args;

    try {
        const { data : response }: AxiosResponse<TypesInterface> = await axios.get(getDomain(subject) +
            '/types_for_block_second_part?block_id=' + blockId);

            setTypes(response);
    } catch (err) {
        webApp?.showAlert(setLocale(router.locale).errors.get_types_error, async function() {
            router.push('/');
        }); 

        console.error(err);
    }
}

export async function getSecondTask(args: SecondTaskArguments) {
    const { userId, webApp, subject, router, blockId, typeId, setIsDecided, setSecondTask, setTaskId } = args;

    try {
        const { data : response }: AxiosResponse<SecondTaskInterface> = await axios.get(getDomain(subject) +
            '/get_task_second_part?block_id=' + blockId
            + '&type_id=' + typeId
            + '&user_id=' + userId);

            setSecondTask(response);
            
            if (setTaskId) {
                setTaskId(response.task_id);
            }
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

export function checkSecondAnswer(args: CheckSecondTaskArguments) {
    const { userId, webApp, subject, router, blockId, typeId, answer, task_id,
        setIsDecided, setAnswer, setIsCorrect, setSecondTask, setTaskId } = args;

    if (answer.trim() !== '') {
        setSecondTask(null);
        setIsCorrect(true);
        setAnswer('');
        getSecondTask({
            userId: userId,
            webApp: webApp,
            subject: subject,
            router: router,
            blockId: blockId,
            typeId: typeId,
            setIsDecided: setIsDecided,
            setSecondTask: setSecondTask,
            setTaskId: setTaskId,
        });

        sendSecondAnswer({
            webApp: webApp,
            subject: subject,
            router: router,
        }, userId, {
            task_id: task_id,
            user_answer: answer,
        });        
    }
}

export async function sendSecondAnswer(args: ErrorArguments, userId: number | undefined, solved: SolvedSecondTaskData) {
    const { webApp, subject, router } = args;

    try {
        await axios.post(getDomain(subject) +
            '/save_user_answer_for_task_second_part?user_id=' + userId, solved);
    } catch (err: any) {
        webApp?.showAlert(setLocale(router.locale).errors.send_variant_error);

        console.error(err);
    }
}
