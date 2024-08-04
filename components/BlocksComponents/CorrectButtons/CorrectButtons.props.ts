import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { UnknownAction } from '@reduxjs/toolkit';


export interface CorrectButtonsProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    isDecided: boolean,
    taskId?: string,
    setIsCorrect: (e: boolean) => void,
    setPartDefault: () => UnknownAction,
    setTaskId?: (e: string) => void,
}
