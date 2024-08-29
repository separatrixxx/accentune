import { DetailedHTMLProps, HTMLAttributes } from 'react';


export interface ScheduleListProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    setWebinarId: (e: string | null) => void,
}
