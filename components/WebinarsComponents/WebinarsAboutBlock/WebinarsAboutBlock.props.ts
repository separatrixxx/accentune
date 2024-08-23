import { DetailedHTMLProps, HTMLAttributes } from 'react';


export interface WebinarsAboutBlockProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    setWebinarsType: (e: 'about' | 'courses' | null) => void,
}
