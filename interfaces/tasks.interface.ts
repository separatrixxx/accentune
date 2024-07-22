export interface FirstPartInterface {
    blockId: string,
    isThemes: boolean,
    sortName: string,
}

export interface SecondPartInterface {
    blockId: string,
    type: string,
}

export interface QuickInterface {
    type: '' | 'solve' | 'view',
}
