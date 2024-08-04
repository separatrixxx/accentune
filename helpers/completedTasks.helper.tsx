import axios, { AxiosResponse } from "axios";
import { CompletedItemInterface, SecondPartCompletedInterface, UnsubmittedItemInterface } from "../interfaces/completed.interface";
import { setCompleted, setCompletedError, setCompletedTasks, setUnsubmitted } from "../features/completedTasks/completedTasksSlice";


export async function getUnsubmittedTasks(userId: number | undefined, dispatch: any) {
    try {
        const { data : response }: AxiosResponse<SecondPartCompletedInterface> = await axios.get(process.env.NEXT_PUBLIC_DOMAIN +
            '/tasks_for_check?user_id=' + userId);

        dispatch(setCompletedTasks(response));
    } catch (err) {
        dispatch(setCompletedError());

        console.log(err);
    }
}

export async function getCompletedTasks(userId: number | undefined, dispatch: any) {
    try {
        const { data : response }: AxiosResponse<SecondPartCompletedInterface> = await axios.get(process.env.NEXT_PUBLIC_DOMAIN +
            '/completed_tasks?user_id=' + userId);

        dispatch(setCompletedTasks(response));
    } catch (err) {
        dispatch(setCompletedError());
        
        console.log(err);
    }
}

export async function getUnsubmittedItem(userId: number | undefined, taskId: string, dispatch: any) {
    try {
        const { data : response }: AxiosResponse<UnsubmittedItemInterface> = await axios.get(process.env.NEXT_PUBLIC_DOMAIN +
            '/unsubmitted_task_info?user_id=' + userId + '&task_id=' + taskId);

        dispatch(setUnsubmitted(response));
    } catch (err) {       
        console.log(err);
    }
}

export async function getCompletedItem(userId: number | undefined, taskId: string, dispatch: any) {
    try {
        const { data : response }: AxiosResponse<CompletedItemInterface> = await axios.get(process.env.NEXT_PUBLIC_DOMAIN +
            '/completed_task_info?user_id=' + userId + '&task_id=' + taskId);

        dispatch(setCompleted(response));
    } catch (err) {       
        console.log(err);
    }
}

export async function cancelSolution(userId: number | undefined, taskId: string) {
    try {
        await axios.post(process.env.NEXT_PUBLIC_DOMAIN +
            '/cancel_solution?user_id=' + userId + '&task_id=' + taskId);
    } catch (err) {       
        console.log(err);
    }
}
