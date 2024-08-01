export interface QuickInterface {
    type: '' | 'solve' | 'view',
    num: number,
    len: number,
    variant: QuickVariantInterface[],
    solved: SolvedQuickTaskData,
}

export interface QuickVariantInterface {
    task_id: string,
    text: string,
    answer: string,
    explanations: string,
    user_answer: string | null
};

export interface SolvedQuickTask {
    answer: string,
    task_id: string,
    user_answer: string,
}
  
export interface SolvedQuickTaskData {
    solved_variant: SolvedQuickTask[],
}
