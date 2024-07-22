import { DetailedHTMLProps, HTMLAttributes } from 'react';


export interface TaskButtonsProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    taskText: string,
    setTaskText: (e: string) => void,
    setIsFault: (e: boolean) => void,
}
