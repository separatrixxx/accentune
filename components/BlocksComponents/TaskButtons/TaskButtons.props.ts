import { DetailedHTMLProps, HTMLAttributes } from 'react';


export interface TaskButtonsProps extends DetailedHTMLProps<HTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    taskText: string,
    setTaskText: (e: string) => void,
    setIsFault: (e: boolean) => void,
}
