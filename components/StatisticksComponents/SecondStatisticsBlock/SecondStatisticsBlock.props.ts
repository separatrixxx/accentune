import { DetailedHTMLProps, HTMLAttributes } from 'react';


export interface SecondStatisticsBlockProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    completed: 'completed' | 'unsubmitted' | null,
    setCompleted: (e: 'completed' | 'unsubmitted' | null) => void,
}
