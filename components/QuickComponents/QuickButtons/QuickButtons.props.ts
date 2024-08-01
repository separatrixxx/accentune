import { DetailedHTMLProps, HTMLAttributes } from 'react';


export interface QuickButtonsProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    isDecided: boolean,
    setIsCorrect: (e: boolean) => void,
}
