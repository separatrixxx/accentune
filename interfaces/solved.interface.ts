export interface SolvedInterface {
    status: string,
    data: SolvedDateItem[],
}

export interface SolvedDateItem {
    date: string,
    variants: SolvedVariantItem[],
}

export interface SolvedVariantItem {
    index: number,
    solved_count: number,
    total_tasks: number
}

export interface SolvedVariantStats {
    status: string,
    data: TaskItem[],
}

export interface TaskItem {
    task_id: string,
    user_answer: string,
    correct_answer: string,
    is_correct: boolean,
    question: string | null,
    explanation: string | null,
}
