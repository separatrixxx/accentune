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
};

export interface SolvedSecondTaskData {
    task_id?: string,
    user_answer: string,
};
