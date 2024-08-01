import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { FirstPartInterface, FirstTaskInterface } from '../../../interfaces/firstPart.interface';


export interface TaskButtonsProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    answer: string,
    task: FirstTaskInterface,
    firstPart: FirstPartInterface,
    userId: number | undefined,
    isFault: boolean,
    setAnswer: (e: string) => void,
    setTask: (e: FirstTaskInterface | null) => void,
    setIsFault: (e: boolean) => void,
    setIsCorrect: (e: boolean) => void,
    setIsDecided: (e: boolean) => void,
}
