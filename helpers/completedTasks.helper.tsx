import axios, { AxiosResponse } from "axios";
import { CompletedItemInterface, SecondPartCompletedInterface, UnsubmittedItemInterface } from "../interfaces/completed.interface";
import { setCompleted, setCompletedError, setCompletedTasks, setUnsubmitted } from "../features/completedTasks/completedTasksSlice";
import { ErrorArguments } from "../interfaces/refactor.interface";
import { setLocale } from "./locale.helper";
import { getDomain } from "./domain.helper";
import { Subject } from "../interfaces/user.interface";


export async function getUnsubmittedTasks(userId: number | undefined, subject: Subject, dispatch: any) {
    try {
        const { data : response }: AxiosResponse<SecondPartCompletedInterface> = await axios.get(getDomain(subject) +
            '/tasks_for_check?user_id=' + userId);

        dispatch(setCompletedTasks(response));
    } catch (err) {
        dispatch(setCompletedError());

        console.log(err);
    }
}

export async function getCompletedTasks(userId: number | undefined, subject: Subject, dispatch: any) {
    try {
        const { data : response }: AxiosResponse<SecondPartCompletedInterface> = await axios.get(getDomain(subject) +
            '/completed_tasks?user_id=' + userId);

        dispatch(setCompletedTasks(response));
    } catch (err) {
        dispatch(setCompletedError());
        
        console.log(err);
    }
}

export async function getUnsubmittedItem(userId: number | undefined, taskId: string, subject: Subject, dispatch: any) {
    try {
        const { data : response }: AxiosResponse<UnsubmittedItemInterface> = await axios.get(getDomain(subject) +
            '/unsubmitted_task_info?user_id=' + userId + '&task_id=' + taskId);

        dispatch(setUnsubmitted(response));
    } catch (err) {       
        console.log(err);
    }
}

export async function getCompletedItem(userId: number | undefined, taskId: string, subject: Subject, dispatch: any) {
    try {
        const { data : response }: AxiosResponse<CompletedItemInterface> = await axios.get(getDomain(subject) +
            '/completed_task_info?user_id=' + userId + '&task_id=' + taskId);

        dispatch(setCompleted(response));
    } catch (err) {       
        console.log(err);
    }
}

export async function cancelSolution(args: ErrorArguments, userId: number | undefined, taskId: string) {
    const { webApp, subject, router } = args;

    try {
        await axios.post(getDomain(subject) +
            '/cancel_solution?user_id=' + userId + '&task_id=' + taskId);
    } catch (err) {
        webApp?.showAlert(setLocale(router.locale).errors.cancel_solution_error); 
        
        console.log(err);
    }
}
