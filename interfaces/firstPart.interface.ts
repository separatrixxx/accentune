export interface FirstPartInterface {
    blockId: string,
    blockName: string,
    isThemes: boolean,
    sortId: string,
};

export type Blocks = {
    [key: string]: string;
};

export interface ThemesTypesInterface {
    types: number[];
    themes: Theme;
};

export type Theme = {
    [key: string]: string;
};

export interface FirstTaskInterface {
    task_id: string,
    text: string,
    answer: string,
    explanations: string,
    pts_total: number,
    strict_bool: boolean
};
