export interface SecondPartInterface {
    blockId: string,
    blockName: string,
    typeId: string,
};

export interface TypesInterface {
    types: number[];
};

export interface SecondTaskInterface {
    task_id: string,
    text: string,
    type_id: number[],
    theme_id: number[],
    photo_url: string | null,
};

export interface SolvedSecondTaskData {
    task_id?: string,
    user_answer: string,
};
