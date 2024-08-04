import { DetailedHTMLProps, HTMLAttributes } from 'react';


export interface SecondCompletedItemProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    completed: 'completed' | 'unsubmitted' | null,
    taskId: string,
    setCompleted: (e: "completed" | "unsubmitted" | null) => void,
}
