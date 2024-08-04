export interface SecondPartCompletedInterface {
    data: {
        status: string,
        data: SecondPartCompletedItem[],
    },
    unsubmitted: UnsubmittedItemInterface | null,
    completed: CompletedItemInterface | null,
}

export interface SecondPartCompletedItem {
    task_id: string,
    formatted_date: string,
}

export interface UnsubmittedItemInterface {
    status: string,
    data: {
        task_id: string,
        task_text: string,
        user_answer: string,
        formatted_date: string,
    },
}

export interface CompletedItemInterface {
    status: string,
    data: {
        task_id: string,
        task_text: string,
        formatted_date: string,
        task_solution: string,
        pts_total: number,
        task_comment: string,
        teacher_id: number
    },
}