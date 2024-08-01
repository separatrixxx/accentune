import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { UnknownAction } from '@reduxjs/toolkit';


export interface CorrectButtonsProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    isDecided: boolean,
    setIsCorrect: (e: boolean) => void,
    setPartDefault: () => UnknownAction,
}
