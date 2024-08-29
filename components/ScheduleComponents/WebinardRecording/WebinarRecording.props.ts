import { DetailedHTMLProps, HTMLAttributes } from 'react';


export interface WebinarRecordingProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    videoUrl: string,
}

