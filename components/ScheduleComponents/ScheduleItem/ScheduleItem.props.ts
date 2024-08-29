import { DetailedHTMLProps, HTMLAttributes } from 'react';


export interface ScheduleItemProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    webinarId: string,
    setWebinarId: (e: string | null) => void,
}
